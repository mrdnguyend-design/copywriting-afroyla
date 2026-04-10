/**
 * Postscript Flow SMS Content Scraper — Afroyla
 *
 * Navigate to each flow builder page → extract SMS text + metrics
 * Uses GUIDs from flow-campaigns-365d.json
 * Resumable + incremental save
 *
 * Usage: node postscript-scrape-flows.js
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const EMAIL = process.env.PS_EMAIL;
const PASSWORD = process.env.PS_PASSWORD;
if (!EMAIL || !PASSWORD) { console.error('❌ Missing PS_EMAIL or PS_PASSWORD in .env'); process.exit(1); }
const OUTPUT = path.resolve('d:/Copywriting Afroyla/klaviyo_data/extraction/postscript-afroyla');
const CONTENT_FILE = path.join(OUTPUT, 'flow-sms-content.json');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function removeOverlays(page) {
  await page.evaluate(() => {
    document.querySelectorAll('[class*="CL__sc-141v21k"], [class*="intercom"], iframe[name*="intercom"], #intercom-container').forEach(el => el.remove());
  }).catch(() => {});
}

async function extractFlowContent(page) {
  return page.evaluate(() => {
    const text = document.body.innerText;
    const lines = text.split('\n').map(l => l.trim()).filter(l => l);
    const result = {};

    // Campaign name — after nav, before "Enter a description"
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] === 'Enter a description' && i > 0) {
        result.name = lines[i - 1];
        break;
      }
    }

    // Extract metrics
    for (const line of lines) {
      if (line.startsWith('Revenue:')) result.revenue = line.replace('Revenue:', '').trim();
      if (line.startsWith('EPM:')) result.epm = line.replace('EPM:', '').trim();
      if (line.startsWith('Orders:') && !result.orders) result.orders = line.replace('Orders:', '').trim();
      if (line.startsWith('CVR:') && !result.cvr) result.cvr = line.replace('CVR:', '').trim();
      if (line.startsWith('Clicks:') && !result.clicks) result.clicks = line.replace('Clicks:', '').trim();
      if (line.startsWith('CTR:') && !result.ctr) result.ctr = line.replace('CTR:', '').trim();
      if (line.startsWith('UCTR:') && !result.uctr) result.uctr = line.replace('UCTR:', '').trim();
      if (line.startsWith('Messages sent:')) result.sent = line.replace('Messages sent:', '').trim();
      if (line.startsWith('Sent:') && !result.sent) result.sent = line.replace('Sent:', '').trim();
      if (line.startsWith('Subscribers:') && !result.subscribers) result.subscribers = line.replace('Subscribers:', '').trim();
      if (line.startsWith('Unsubscribe rate:')) result.unsub_rate = line.replace('Unsubscribe rate:', '').trim();
      if (line.includes('Completed') && !result.status) result.status = 'Completed';
      if (line.includes('Enabled') && !result.status) result.status = 'Enabled';
    }

    // Extract segment
    const segIdx = lines.findIndex(l => l === 'Send to subscribers in');
    if (segIdx >= 0 && lines[segIdx + 1]) {
      result.segment = lines[segIdx + 1];
    }

    // Extract SMS body — find "Message" label then grab the content after it
    // The SMS body starts with "Afroyla:" or "{shop_name}"
    const msgIdx = lines.findIndex(l => l === 'Message');
    if (msgIdx >= 0) {
      const smsLines = [];
      for (let i = msgIdx + 1; i < lines.length; i++) {
        const l = lines[i];
        // Stop at metrics section
        if (l.startsWith('Rev.:') || l.startsWith('EPM:') || l.startsWith('Orders:')) break;
        smsLines.push(l);
      }
      result.sms_body = smsLines.join('\n').trim();
    }

    // Fallback: find text starting with "Afroyla:"
    if (!result.sms_body) {
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('Afroyla:')) {
          const smsLines = [lines[i]];
          for (let j = i + 1; j < Math.min(i + 10, lines.length); j++) {
            if (lines[j].startsWith('Rev.:') || lines[j].startsWith('EPM:')) break;
            smsLines.push(lines[j]);
          }
          result.sms_body = smsLines.join('\n').trim();
          break;
        }
      }
    }

    // Scheduled/sent date
    for (const line of lines) {
      if (line.match(/^\w{3} \d{1,2}, \d{4}/)) {
        result.date = line;
        break;
      }
    }

    return result;
  });
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log(' POSTSCRIPT FLOW SMS SCRAPER — AFROYLA');
  console.log('═══════════════════════════════════════\n');

  // Load campaign GUIDs
  const fcFile = path.join(OUTPUT, 'flow-campaigns-365d.json');
  const fcData = JSON.parse(fs.readFileSync(fcFile, 'utf-8'));
  const campaigns = fcData.automations || fcData.campaigns || [];
  console.log(`📱 ${campaigns.length} flow campaigns to scrape\n`);

  // Load existing progress
  let results = [];
  const doneGuids = new Set();
  if (fs.existsSync(CONTENT_FILE)) {
    try {
      const existing = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
      if (Array.isArray(existing)) {
        results = existing;
        for (const r of results) if (r.guid) doneGuids.add(r.guid);
        console.log(`📂 Resuming: ${results.length} already done`);
      }
    } catch {}
  }

  const todo = campaigns.filter(c => c.guid && !doneGuids.has(c.guid));
  console.log(`   Remaining: ${todo.length}\n`);

  if (todo.length === 0) {
    console.log('✅ All campaigns already scraped!');
    process.exit(0);
  }

  // Launch browser
  const browser = await chromium.launch({ headless: false, slowMo: 30 });
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  try {
    // Login
    console.log('🔑 Login...');
    await page.goto('https://app.postscript.io/login', { waitUntil: 'domcontentloaded', timeout: 90000 });
    await sleep(5000);
    if (page.url().includes('login')) {
      const emailLink = page.locator('text=Login With Email').first();
      if (await emailLink.isVisible({ timeout: 5000 }).catch(() => false)) { await emailLink.click(); await sleep(2000); }
      await page.locator('input[type="email"], input[placeholder*="email" i]').first().waitFor({ state: 'visible', timeout: 15000 });
      await page.locator('input[type="email"], input[placeholder*="email" i]').first().fill(EMAIL);
      await page.locator('input[type="password"]').first().fill(PASSWORD);
      await sleep(500);
      await page.locator('button[type="submit"], button:has-text("Login")').first().click();
      await sleep(8000);
    }

    // Switch to Afroyla
    console.log('🔄 Switch to Afroyla...');
    await page.goto('https://app.postscript.io/account/settings', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(5000);
    await removeOverlays(page);
    await page.locator('text=Change shop').first().click({ force: true });
    await sleep(2000);
    await page.locator('.admin-shop-drop-inner__option:has-text("Afroyla")').first().click({ force: true });
    await sleep(10000);
    console.log('  ✓ On Afroyla\n');

    // Scrape each flow
    let success = 0;

    for (let i = 0; i < todo.length; i++) {
      const c = todo[i];
      const guid = c.guid;
      const url = `https://app.postscript.io/automations/flows/${guid}?sourceType=CAMPAIGN_FLOW&flowId=${guid}`;

      process.stdout.write(`  [${results.length + 1}/${campaigns.length}] ${(c.name || '').slice(0, 42)}...`);

      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
        await sleep(3000);
        await removeOverlays(page);

        const content = await extractFlowContent(page);

        results.push({
          guid,
          api_name: c.name,
          api_sent: c.total_sent,
          api_revenue: c.revenue,
          api_orders: c.orders,
          api_clicks: c.total_clicks,
          ...content,
        });

        success++;
        const hasSms = !!content.sms_body;
        console.log(hasSms ? ` ✓ (${(content.sms_body || '').slice(0, 40)}...)` : ' ✓ (no SMS body)');
      } catch (e) {
        results.push({
          guid,
          api_name: c.name,
          api_sent: c.total_sent,
          api_revenue: c.revenue,
          error: e.message.slice(0, 60),
        });
        console.log(` ✗ (${e.message.slice(0, 40)})`);
      }

      // Save every 15
      if ((i + 1) % 15 === 0) {
        fs.writeFileSync(CONTENT_FILE, JSON.stringify(results, null, 2), 'utf-8');
        process.stdout.write(`  💾 saved (${results.length})\n`);
      }

      await sleep(800);
    }

    // Final save
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(results, null, 2), 'utf-8');

    const withSms = results.filter(r => r.sms_body);
    console.log(`\n═══════════════════════════════════════`);
    console.log(` ✅ DONE`);
    console.log(` Total: ${results.length}/${campaigns.length}`);
    console.log(` With SMS content: ${withSms.length}`);
    console.log(` New this run: ${success}`);
    console.log(`  Output: ${CONTENT_FILE}`);
    console.log('═══════════════════════════════════════');

  } catch (e) {
    console.error('\n❌ Error:', e.message);
    // Save progress even on error
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(results, null, 2), 'utf-8');
    console.log(`  💾 Progress saved (${results.length})`);
  } finally {
    await browser.close();
  }
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
