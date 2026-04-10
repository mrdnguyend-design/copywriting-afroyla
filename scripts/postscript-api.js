/**
 * Postscript Internal API Scraper — Afroyla (Shop 555772)
 *
 * Login → Switch to Afroyla shop → Pull flows, keywords, usage stats, automations
 * Output: klaviyo_data/extraction/postscript/
 *
 * Usage: node postscript-api.js
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const EMAIL = process.env.PS_EMAIL;
const PASSWORD = process.env.PS_PASSWORD;
if (!EMAIL || !PASSWORD) { console.error('❌ Missing PS_EMAIL or PS_PASSWORD in .env'); process.exit(1); }
const AFROYLA_SHOP_ID = 555772;
const API_BASE = 'https://internal-api.postscript.io';
const OUTPUT = path.resolve('d:/Copywriting Afroyla/klaviyo_data/extraction/postscript');
const SCREENSHOTS = path.join(OUTPUT, 'screenshots');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
function saveJSON(name, data) {
  const fp = path.join(OUTPUT, name);
  fs.writeFileSync(fp, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`  💾 ${name} (${Array.isArray(data) ? data.length + ' items' : 'saved'})`);
}

async function main() {
  ensureDir(OUTPUT);
  ensureDir(SCREENSHOTS);

  console.log('═══════════════════════════════════════');
  console.log(' POSTSCRIPT API — AFROYLA (Shop 555772)');
  console.log('═══════════════════════════════════════\n');

  // ── Step 1: Login via browser to get JWT token for Afroyla shop ──
  console.log('🔑 Login via browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Capture the token when login API is called
  let accessToken = null;

  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('/login') && response.status() === 200) {
      try {
        const body = await response.json();
        if (body.access_token) {
          accessToken = body.access_token;
          console.log('  ✓ Got access token');
        }
      } catch {}
    }
    // Capture token after shop switch too
    if (url.includes('/token/refresh') && response.status() === 200) {
      try {
        const body = await response.json();
        if (body.access_token) {
          accessToken = body.access_token;
          console.log('  ✓ Got refreshed token (shop switch)');
        }
      } catch {}
    }
  });

  await page.goto('https://app.postscript.io/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(3000);

  // Click "Login With Email"
  const emailLink = page.locator('text=Login With Email').first();
  if (await emailLink.isVisible().catch(() => false)) {
    await emailLink.click();
    await sleep(2000);
  }

  // Fill credentials
  await page.locator('input[type="email"], input[name="email"], input[placeholder*="email" i], input[placeholder*="Email" i]').first().fill(EMAIL);
  await page.locator('input[type="password"]').first().fill(PASSWORD);
  await sleep(500);
  await page.locator('button[type="submit"], button:has-text("Log in"), button:has-text("Login")').first().click();
  await sleep(5000);

  if (!accessToken) {
    console.log('❌ Login failed — no token captured');
    await page.screenshot({ path: path.join(SCREENSHOTS, 'login-failed.png'), fullPage: true });
    await browser.close();
    process.exit(1);
  }

  // ── Step 2: Switch to Afroyla shop ──
  console.log(`\n🔄 Switching to Afroyla shop (${AFROYLA_SHOP_ID})...`);

  // Navigate to Afroyla shop via URL to trigger shop switch
  await page.goto(`https://app.postscript.io/shops/${AFROYLA_SHOP_ID}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(5000);
  await page.screenshot({ path: path.join(SCREENSHOTS, 'afroyla-dashboard.png'), fullPage: true });

  // Check if token was refreshed for new shop
  const currentUrl = page.url();
  console.log('  URL:', currentUrl);

  // If token didn't refresh, try direct API login with shop context
  // Use the browser's cookies/token to make API calls
  const cookies = await context.cookies();
  console.log('  Cookies:', cookies.map(c => c.name).join(', '));

  await browser.close();

  // ── Step 3: Call internal API directly with token ──
  console.log('\n📡 Calling Postscript Internal API...');

  async function apiCall(endpoint, method = 'GET', body = null) {
    const url = `${API_BASE}${endpoint}`;
    const opts = {
      method,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Shop-Id': String(AFROYLA_SHOP_ID),
      },
    };
    if (body) opts.body = JSON.stringify(body);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    opts.signal = controller.signal;

    try {
      const res = await fetch(url, opts);
      clearTimeout(timer);
      if (!res.ok) {
        const text = await res.text();
        return { error: `${res.status}: ${text.slice(0, 200)}` };
      }
      return await res.json();
    } catch (e) {
      clearTimeout(timer);
      return { error: e.message };
    }
  }

  // First: verify we're on Afroyla
  console.log('\n  Verifying shop...');
  const me = await apiCall('/me');
  if (me.error) {
    console.log('  ✗ /me failed:', me.error.slice(0, 100));
    // Try switching shop via token refresh
    console.log('  Trying shop switch via login...');
    const loginRes = await apiCall('/login', 'POST', {
      username: EMAIL,
      password: PASSWORD,
      shop_id: AFROYLA_SHOP_ID,
    });
    if (loginRes.access_token) {
      accessToken = loginRes.access_token;
      console.log('  ✓ Got Afroyla token');
    } else {
      console.log('  ✗ Shop switch failed:', JSON.stringify(loginRes).slice(0, 200));
    }
  } else {
    const shopName = me.data?.shop || 'unknown';
    const shopId = me.data?.billing_period_record?.id || 'unknown';
    console.log(`  Shop: ${shopName} | Customers: ${me.data?.total_customers}`);
    if (!shopName.toLowerCase().includes('afroyla')) {
      console.log('  ⚠️  Wrong shop! Trying to switch...');
      const loginRes = await apiCall('/login', 'POST', {
        username: EMAIL,
        password: PASSWORD,
        shop_id: AFROYLA_SHOP_ID,
      });
      if (loginRes.access_token) {
        accessToken = loginRes.access_token;
        console.log('  ✓ Switched to Afroyla');
      }
    }
  }

  // Re-verify
  const me2 = await apiCall('/me');
  console.log(`  Confirmed shop: ${me2.data?.shop || 'unknown'} | Customers: ${me2.data?.total_customers || '?'}`);
  saveJSON('afroyla-me.json', me2);

  // ── Step 4: Pull all data ──

  // 4A: Dashboard revenue
  console.log('\n📊 Dashboard revenue...');
  for (const days of [30, 90, 365]) {
    const rev = await apiCall(`/canary/dashboard/revenue/timeframe/${days}`);
    console.log(`  ${days}d: $${rev.data?.revenue?.total?.toFixed(0) || rev.error || '?'}`);
    saveJSON(`revenue-${days}d.json`, rev);
    await sleep(500);
  }

  // 4B: Flows/Automations (this is where SMS content lives)
  console.log('\n🔄 Flows & Automations...');

  // Get all automations (paginated)
  let allAutomations = [];
  let start = 0;
  const limit = 50;
  let hasMore = true;
  while (hasMore) {
    const res = await apiCall(`/automations?start=${start}&limit=${limit}`);
    const items = res.automations?.automations || [];
    allAutomations = allAutomations.concat(items);
    console.log(`  Automations batch: ${items.length} (total: ${allAutomations.length})`);
    hasMore = items.length === limit;
    start += limit;
    await sleep(500);
  }
  saveJSON('automations.json', allAutomations);

  // Flow analytics (last 365 days)
  for (const type of ['AUTOMATION', 'CAMPAIGN']) {
    const analytics = await apiCall(`/v2/flowbuilder/flows/analytics?delta=365&type=${type}`);
    const items = analytics.automations || analytics.campaigns || [];
    console.log(`  ${type} analytics: ${items.length} items`);
    saveJSON(`flow-analytics-${type.toLowerCase()}.json`, analytics);
    await sleep(500);
  }

  // 4C: Campaigns (even if likely empty)
  console.log('\n📱 Campaigns...');
  const campaigns30 = await apiCall('/campaigns/timeframe/30');
  const campaigns365 = await apiCall('/campaigns/timeframe/365');
  console.log(`  30d: ${campaigns30.campaigns?.totalResults || 0} | 365d: ${campaigns365.campaigns?.totalResults || 0}`);
  saveJSON('campaigns-30d.json', campaigns30);
  saveJSON('campaigns-365d.json', campaigns365);

  // V2 campaigns
  const v2campaigns = await apiCall('/v2/campaigns/');
  console.log(`  V2 campaigns: ${v2campaigns.campaigns?.length || 0}`);
  saveJSON('v2-campaigns.json', v2campaigns);

  // 4D: Keywords (responses, triggers)
  console.log('\n🔑 Keywords & Responses...');
  const responses = await apiCall('/responses/grouped');
  console.log(`  Grouped responses: ${Object.keys(responses).length} groups`);
  saveJSON('responses-grouped.json', responses);

  const tags = await apiCall('/tags');
  console.log(`  Tags: ${tags.tags?.length || tags.length || 0}`);
  saveJSON('tags.json', tags);

  // 4E: Billing/Usage stats (daily granularity — last 90 days)
  console.log('\n💰 Daily usage stats (last 90 days)...');
  const now = new Date();
  const allStats = [];
  for (let daysBack = 0; daysBack < 90; daysBack += 7) {
    const end = new Date(now);
    end.setDate(end.getDate() - daysBack);
    const start = new Date(end);
    start.setDate(start.getDate() - 6);
    const startStr = start.toISOString().slice(0, 10);
    const endStr = end.toISOString().slice(0, 10);

    const stats = await apiCall(`/v2/billing/usage/stats?start_date=${startStr}&end_date=${endStr}`);
    if (stats.statistics) {
      allStats.push(...stats.statistics);
      process.stdout.write(`.`);
    }
    await sleep(300);
  }
  console.log(` ${allStats.length} daily records`);
  saveJSON('usage-stats-90d.json', allStats);

  // 4F: Subscribers
  console.log('\n👥 Subscribers...');
  const subs = await apiCall('/v2/subscribers/total/');
  console.log(`  Total: ${subs.total || subs.data?.total || JSON.stringify(subs).slice(0, 100)}`);
  saveJSON('subscribers-total.json', subs);

  // 4G: ARMU metrics
  console.log('\n📈 ARMU metrics...');
  const armu = await apiCall('/v2/armu/metrics');
  if (armu.earnedRevenue) {
    console.log(`  Revenue L30: $${armu.earnedRevenue.l30} | L365: $${armu.earnedRevenue.l365}`);
    console.log(`  Messages L30: ${armu.messages?.l30} | L365: ${armu.messages?.l365}`);
  }
  saveJSON('armu-metrics.json', armu);

  // ── Summary ──
  console.log('\n═══════════════════════════════════════');
  console.log(' ✅ POSTSCRIPT EXTRACTION DONE');
  console.log(`  Shop: Afroyla (${AFROYLA_SHOP_ID})`);
  console.log(`  Automations: ${allAutomations.length}`);
  console.log(`  Usage records: ${allStats.length}`);
  console.log(`  Output: ${OUTPUT}`);
  console.log('═══════════════════════════════════════');
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
