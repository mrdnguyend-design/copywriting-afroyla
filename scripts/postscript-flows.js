/**
 * Postscript Flow Details — uses BROWSER fetch (cookies) to avoid token expiry
 *
 * Strategy: Keep browser open → use page.evaluate(fetch) → credentials: 'include'
 * This uses the browser's auth cookies instead of JWT token
 *
 * Usage: node postscript-flows.js
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const EMAIL = process.env.PS_EMAIL;
const PASSWORD = process.env.PS_PASSWORD;
if (!EMAIL || !PASSWORD) { console.error('❌ Missing PS_EMAIL or PS_PASSWORD in .env'); process.exit(1); }
const API = 'https://internal-api.postscript.io';
const OUTPUT = path.resolve('d:/Copywriting Afroyla/klaviyo_data/extraction/postscript-afroyla');
const DETAILS_FILE = path.join(OUTPUT, 'flow-details.json');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log('═══════════════════════════════════════');
  console.log(' POSTSCRIPT FLOW DETAILS — BROWSER MODE');
  console.log('═══════════════════════════════════════\n');

  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  // Login
  console.log('🔑 Login...');
  await page.goto('https://app.postscript.io/login', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await sleep(5000);
  if (page.url().includes('login')) {
    const emailLink = page.locator('text=Login With Email').first();
    if (await emailLink.isVisible({ timeout: 5000 }).catch(() => false)) { await emailLink.click(); await sleep(2000); }
    const emailInput = page.locator('input[type="email"], input[placeholder*="email" i]').first();
    await emailInput.waitFor({ state: 'visible', timeout: 15000 });
    await emailInput.fill(EMAIL);
    await page.locator('input[type="password"]').first().fill(PASSWORD);
    await sleep(500);
    await page.locator('button[type="submit"], button:has-text("Login")').first().click();
    await sleep(8000);
  }
  console.log('  Logged in:', page.url());

  // Switch to Afroyla
  console.log('\n🔄 Switch to Afroyla...');
  await page.goto('https://app.postscript.io/account/settings', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(5000);
  await page.evaluate(() => { document.querySelectorAll('[class*="CL__sc-141v21k"], [class*="intercom"], iframe[name*="intercom"]').forEach(el => el.remove()); });
  await page.locator('text=Change shop').first().click({ force: true });
  await sleep(2000);
  await page.locator('.admin-shop-drop-inner__option:has-text("Afroyla")').first().click({ force: true });
  await sleep(10000);

  // Capture token from browser responses
  let token = null;
  page.on('response', async (res) => {
    if (!res.url().includes('internal-api.postscript.io') || res.status() !== 200) return;
    try { const b = await res.json().catch(() => null); if (b?.access_token) token = b.access_token; } catch {}
  });
  page.on('request', (req) => {
    if (req.url().includes('internal-api.postscript.io')) {
      const auth = req.headers()['authorization'];
      if (auth?.startsWith('Bearer ')) token = auth.replace('Bearer ', '');
    }
  });

  // Navigate to dashboard to trigger API calls and get fresh token
  await page.goto('https://app.postscript.io/dashboard', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(8000);

  if (!token) { console.log('❌ No token captured'); await browser.close(); process.exit(1); }

  const meCheck = await page.evaluate(async ({ authToken }) => {
    const res = await fetch('https://internal-api.postscript.io/me', { headers: { 'Authorization': 'Bearer ' + authToken, 'Accept': 'application/json' } });
    const data = await res.json();
    return { shop: data.data?.shop, customers: data.data?.total_customers, plan: data.data?.plan?.name };
  }, { authToken: token });
  console.log(`  Shop: ${meCheck.shop} | Customers: ${meCheck.customers} | Plan: ${meCheck.plan}`);

  if (!meCheck.shop?.includes('rwmx55')) {
    console.log('❌ Wrong shop. Exiting.');
    await browser.close();
    process.exit(1);
  }

  // Load campaigns
  const fcFile = path.join(OUTPUT, 'flow-campaigns-365d.json');
  const fcData = JSON.parse(fs.readFileSync(fcFile, 'utf-8'));
  const campaigns = fcData.automations || fcData.campaigns || [];

  // Load existing details (resume)
  let details = [];
  const doneGuids = new Set();
  if (fs.existsSync(DETAILS_FILE)) {
    try {
      const existing = JSON.parse(fs.readFileSync(DETAILS_FILE, 'utf-8'));
      if (Array.isArray(existing)) {
        details = existing.filter(d => d.flow || d.steps);
        for (const d of details) doneGuids.add(d.campaign?.guid);
        if (details.length > 0) console.log(`  Resuming: ${details.length} already done`);
      }
    } catch {}
  }

  const todo = campaigns.filter(c => c.guid && !doneGuids.has(c.guid));
  console.log(`\n📱 ${todo.length} flows to fetch (${campaigns.length} total)\n`);

  let found = 0;
  let failed = 0;

  for (let i = 0; i < todo.length; i++) {
    const c = todo[i];
    const guid = c.guid;
    process.stdout.write(`  [${details.length + 1}/${campaigns.length}] ${(c.name || '').slice(0, 45)}...`);

    const result = await page.evaluate(async ({ apiUrl, flowGuid, authToken }) => {
      const headers = { 'Authorization': 'Bearer ' + authToken, 'Accept': 'application/json' };
      try {
        let res = await fetch(`${apiUrl}/v2/flowbuilder/flows/${flowGuid}`, { headers });
        if (res.ok) return { type: 'flow', data: await res.json() };
        if (res.status === 401) return { error: 'token_expired' };

        res = await fetch(`${apiUrl}/v2/flowbuilder/flows/${flowGuid}/steps`, { headers });
        if (res.ok) return { type: 'steps', data: await res.json() };

        return { error: `${res.status}` };
      } catch (e) {
        return { error: e.message?.slice(0, 80) };
      }
    }, { apiUrl: API, flowGuid: guid, authToken: token });

    if (result.error === 'token_expired') {
      console.log(' ❌ TOKEN EXPIRED — stopping');
      break;
    }

    if (result.type === 'flow') {
      details.push({ campaign: c, flow: result.data });
      found++;
      console.log(' ✓');
    } else if (result.type === 'steps') {
      details.push({ campaign: c, steps: result.data });
      found++;
      console.log(' ✓ (steps)');
    } else {
      failed++;
      console.log(` ✗ (${result.error})`);
    }

    // Save every 20
    if ((i + 1) % 20 === 0) {
      fs.writeFileSync(DETAILS_FILE, JSON.stringify(details, null, 2), 'utf-8');
      process.stdout.write(`  💾 saved (${details.length})\n`);
    }

    await sleep(400);
  }

  // Final save
  fs.writeFileSync(DETAILS_FILE, JSON.stringify(details, null, 2), 'utf-8');

  console.log(`\n═══════════════════════════════════════`);
  console.log(` Flow details: ${details.length}/${campaigns.length}`);
  console.log(` New: ${found} | Failed: ${failed}`);
  console.log('═══════════════════════════════════════');

  await browser.close();
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
