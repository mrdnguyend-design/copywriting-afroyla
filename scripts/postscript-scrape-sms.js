/**
 * Postscript SMS Content Scraper — Afroyla
 *
 * Login → Switch Afroyla → Paginate campaigns list → Get all campaign URLs →
 * Visit each → Extract SMS content + metrics from UI
 *
 * Saves incrementally. Resumable.
 *
 * Usage: node postscript-scrape-sms.js
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const EMAIL = process.env.PS_EMAIL;
const PASSWORD = process.env.PS_PASSWORD;
if (!EMAIL || !PASSWORD) { console.error('❌ Missing PS_EMAIL or PS_PASSWORD in .env'); process.exit(1); }
const OUTPUT = path.resolve('d:/Copywriting Afroyla/klaviyo_data/extraction/postscript-afroyla');
const CONTENT_FILE = path.join(OUTPUT, 'sms-content.json');
const SUMMARY_FILE = path.join(OUTPUT, 'sms-content-summary.md');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function loginAndSwitchToAfroyla(page) {
  console.log('🔑 Login...');
  await page.goto('https://app.postscript.io/login', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await sleep(5000);

  if (page.url().includes('login')) {
    const emailLink = page.locator('text=Login With Email').first();
    if (await emailLink.isVisible({ timeout: 5000 }).catch(() => false)) {
      await emailLink.click();
      await sleep(2000);
    }
    const emailInput = page.locator('input[type="email"], input[placeholder*="email" i]').first();
    await emailInput.waitFor({ state: 'visible', timeout: 15000 });
    await emailInput.fill(EMAIL);
    await page.locator('input[type="password"]').first().fill(PASSWORD);
    await sleep(500);
    await page.locator('button[type="submit"], button:has-text("Login")').first().click();
    await sleep(8000);
  }
  console.log('  ✓ Logged in');

  // Switch to Afroyla
  console.log('🔄 Switch to Afroyla...');
  await page.goto('https://app.postscript.io/account/settings', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(5000);
  await removeOverlays(page);
  await page.locator('text=Change shop').first().click({ force: true });
  await sleep(2000);
  await page.locator('.admin-shop-drop-inner__option:has-text("Afroyla")').first().click({ force: true });
  await sleep(10000);

  // Verify
  const sidebar = await page.locator('body').textContent();
  if (sidebar.includes('129,') || sidebar.includes('421,')) {
    console.log('  ✓ On Afroyla');
    return true;
  }
  console.log('  ⚠️ Might be wrong shop');
  return true; // Continue anyway
}

async function removeOverlays(page) {
  await page.evaluate(() => {
    document.querySelectorAll('[class*="CL__sc-141v21k"], [class*="intercom"], iframe[name*="intercom"], #intercom-container').forEach(el => el.remove());
  });
}

async function getAllCampaignLinks(page) {
  console.log('\n📋 Getting all campaign links...');
  await page.goto('https://app.postscript.io/campaigns', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(5000);
  await removeOverlays(page);

  const allLinks = [];
  let pageNum = 1;
  let hasMore = true;

  while (hasMore) {
    await sleep(2000);

    // Extract campaign links on current page
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a[href*="/campaigns/"]'))
        .filter(a => /\/campaigns\/\d+/.test(a.href))
        .map(a => ({
          url: a.href,
          id: a.href.match(/\/campaigns\/(\d+)/)?.[1],
          name: a.textContent?.trim()?.slice(0, 200),
        }));
    });

    // Deduplicate within page
    const newLinks = links.filter(l => !allLinks.some(e => e.id === l.id));
    allLinks.push(...newLinks);
    console.log(`  Page ${pageNum}: ${newLinks.length} new links (total: ${allLinks.length})`);

    // Try next page
    const nextBtn = page.locator('button:has-text("Next"), [aria-label="Next page"], button[class*="next"]').first();
    const hasNext = await nextBtn.isVisible({ timeout: 2000 }).catch(() => false);
    const isEnabled = hasNext && await nextBtn.isEnabled().catch(() => false);

    if (isEnabled) {
      await nextBtn.click({ force: true });
      await sleep(3000);
      pageNum++;
    } else {
      hasMore = false;
    }

    if (pageNum > 100) hasMore = false; // Safety
  }

  console.log(`  Total unique campaign links: ${allLinks.length}`);
  return allLinks;
}

async function scrapeCampaignDetail(page, campaignUrl) {
  await page.goto(campaignUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await sleep(3000);
  await removeOverlays(page);

  const data = await page.evaluate(() => {
    const text = document.body.innerText;
    const lines = text.split('\n').map(l => l.trim()).filter(l => l);

    // Extract structured data
    const result = {};

    // Campaign name — usually the first heading after "BACK TO CAMPAIGNS"
    const backIdx = lines.findIndex(l => l.includes('BACK TO CAMPAIGNS'));
    if (backIdx >= 0 && lines[backIdx + 1]) {
      result.name = lines[backIdx + 1];
    }

    // Find key fields by label
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('Campaign Name:')) result.campaign_name = line.replace('Campaign Name:', '').trim();
      if (line.startsWith('Status:')) result.status = line.replace('Status:', '').trim();
      if (line.startsWith('Segment:')) result.segment = line.replace('Segment:', '').trim();
      if (line.startsWith('Message:')) result.message = line.replace('Message:', '').trim();
      if (line.startsWith('Sent:')) result.sent_info = line.replace('Sent:', '').trim();
      if (line.startsWith('Message Count:')) result.message_count = line.replace('Message Count:', '').trim();
      if (line.includes('Conversion rate:')) result.conversion_rate = line.match(/[\d.]+%/)?.[0];
      if (line.includes('UCTR:')) result.uctr = line.match(/[\d.]+%/)?.[0];
      if (line.includes('Unsubscribe rate:')) result.unsub_rate = line.match(/[\d.]+%/)?.[0];
    }

    // Extract metrics numbers (total orders, total clicks, sent messages)
    const metricsPattern = /Total orders|Total clicks|Sent messages/;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] === 'Total orders' && i > 0) result.total_orders = lines[i - 1];
      if (lines[i] === 'Total clicks' && i > 0) result.total_clicks = lines[i - 1];
      if (lines[i] === 'Sent messages' && i > 0) result.sent_messages = lines[i - 1];
    }

    // Find full SMS text — look for the actual message body
    // It usually appears after the timestamp, starts with "Afroyla:" or brand name
    const smsLines = [];
    let inSms = false;
    for (const line of lines) {
      if (line.match(/^(Afroyla|AFROYLA|afroyla):/)) {
        inSms = true;
      }
      if (inSms) {
        smsLines.push(line);
        if (line.includes('reply STOP') || line.includes('Msg & data rates')) {
          inSms = false;
        }
      }
    }
    if (smsLines.length > 0) {
      result.sms_full_text = smsLines.join('\n');
    }

    // Also capture the Message: field which has the template
    // And any text that looks like SMS content (contains shop links, emojis, etc)
    const contentLines = lines.filter(l =>
      (l.includes('http') && l.length > 30 && !l.includes('postscript.io')) ||
      (l.startsWith('{') && l.includes('first_name')) ||
      l.includes('— Michelle') ||
      l.includes('💜') ||
      l.includes('STOP')
    );
    if (contentLines.length > 0 && !result.sms_full_text) {
      result.sms_content_fragments = contentLines;
    }

    return result;
  });

  return data;
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log(' POSTSCRIPT SMS CONTENT SCRAPER');
  console.log('═══════════════════════════════════════\n');

  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  try {
    await loginAndSwitchToAfroyla(page);

    // Load existing progress
    let results = [];
    const doneIds = new Set();
    if (fs.existsSync(CONTENT_FILE)) {
      try {
        const existing = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
        if (Array.isArray(existing)) {
          results = existing;
          for (const r of results) if (r.id) doneIds.add(r.id);
          console.log(`\n📂 Resuming: ${results.length} already scraped`);
        }
      } catch {}
    }

    // Get all campaign links from UI
    const campaignLinks = await getAllCampaignLinks(page);

    // Filter out already done
    const todo = campaignLinks.filter(l => !doneIds.has(l.id));
    console.log(`\n📱 ${todo.length} campaigns to scrape (${campaignLinks.length} total)\n`);

    let success = 0;

    for (let i = 0; i < todo.length; i++) {
      const campaign = todo[i];
      process.stdout.write(`  [${results.length + 1}/${campaignLinks.length}] ${(campaign.name || '').slice(0, 45)}...`);

      try {
        const detail = await scrapeCampaignDetail(page, campaign.url);
        results.push({
          id: campaign.id,
          url: campaign.url,
          list_name: campaign.name,
          ...detail,
        });
        success++;

        const hasContent = detail.message || detail.sms_full_text;
        console.log(hasContent ? ' ✓' : ' ✓ (no SMS text)');
      } catch (e) {
        results.push({ id: campaign.id, url: campaign.url, list_name: campaign.name, error: e.message.slice(0, 80) });
        console.log(` ✗ (${e.message.slice(0, 40)})`);
      }

      // Save every 10
      if ((i + 1) % 10 === 0) {
        fs.writeFileSync(CONTENT_FILE, JSON.stringify(results, null, 2), 'utf-8');
        process.stdout.write(`  💾 saved (${results.length})\n`);
      }

      await sleep(500);
    }

    // Final save
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(results, null, 2), 'utf-8');

    // Generate summary
    const withContent = results.filter(r => r.message || r.sms_full_text);
    const summary = [
      `# Postscript SMS Content — Afroyla — ${new Date().toISOString().slice(0, 10)}`,
      '',
      `## Overview`,
      `- Total campaigns scraped: ${results.length}`,
      `- With SMS content: ${withContent.length}`,
      `- Errors: ${results.filter(r => r.error).length}`,
      '',
      '## All Campaigns',
      '',
      '| Campaign | Segment | Sent | Orders | UCTR | Unsub | SMS Preview |',
      '|----------|---------|------|--------|------|-------|-------------|',
    ];

    for (const r of results.filter(r => !r.error)) {
      const preview = (r.message || r.sms_full_text || '').replace(/\|/g, '/').slice(0, 60);
      summary.push(`| ${(r.campaign_name || r.list_name || '').slice(0, 40).replace(/\|/g, '/')} | ${(r.segment || '').slice(0, 20)} | ${r.sent_messages || '—'} | ${r.total_orders || '—'} | ${r.uctr || '—'} | ${r.unsub_rate || '—'} | ${preview} |`);
    }

    fs.writeFileSync(SUMMARY_FILE, summary.join('\n'), 'utf-8');

    console.log(`\n═══════════════════════════════════════`);
    console.log(` ✅ DONE`);
    console.log(` Scraped: ${results.length} | With content: ${withContent.length}`);
    console.log(` Output: ${CONTENT_FILE}`);
    console.log('═══════════════════════════════════════');

  } catch (e) {
    console.error('\n❌ Error:', e.message);
  } finally {
    await browser.close();
  }
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
