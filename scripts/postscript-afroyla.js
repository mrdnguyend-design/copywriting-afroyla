/**
 * Postscript Scraper — AFROYLA (Shop 555772)
 *
 * Login → Click shop switcher (bottom sidebar) → Select Afroyla →
 * Intercept token → Pull all data via API
 *
 * Usage: node postscript-afroyla.js
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const EMAIL = process.env.PS_EMAIL;
const PASSWORD = process.env.PS_PASSWORD;
if (!EMAIL || !PASSWORD) { console.error('❌ Missing PS_EMAIL or PS_PASSWORD in .env'); process.exit(1); }
const AFROYLA_SHOP_ID = 555772;
const API_BASE = 'https://internal-api.postscript.io';
const OUTPUT = path.resolve('d:/Copywriting Afroyla/klaviyo_data/extraction/postscript-afroyla');
const SCREENSHOTS = path.join(OUTPUT, 'screenshots');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
function saveJSON(name, data) {
  const fp = path.join(OUTPUT, name);
  fs.writeFileSync(fp, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`  💾 ${name}`);
}

async function main() {
  ensureDir(OUTPUT);
  ensureDir(SCREENSHOTS);

  console.log('═══════════════════════════════════════');
  console.log(' POSTSCRIPT — AFROYLA (555772)');
  console.log('═══════════════════════════════════════\n');

  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  let afrolyaToken = null;

  // Capture token from every API response
  page.on('response', async (response) => {
    const url = response.url();
    if (!url.includes('internal-api.postscript.io')) return;
    try {
      if (response.status() === 200 && response.headers()['content-type']?.includes('json')) {
        const body = await response.json().catch(() => null);
        if (body?.access_token) {
          afrolyaToken = body.access_token;
          console.log('  🔑 Token captured');
        }
      }
    } catch {}
  });

  // Also capture from request Authorization headers
  page.on('request', (request) => {
    if (request.url().includes('internal-api.postscript.io')) {
      const auth = request.headers()['authorization'];
      if (auth?.startsWith('Bearer ')) afrolyaToken = auth.replace('Bearer ', '');
    }
  });

  // ── Step 1: Login ──
  console.log('🔑 Login...');
  await page.goto('https://app.postscript.io/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(3000);

  const emailLink = page.locator('text=Login With Email').first();
  if (await emailLink.isVisible().catch(() => false)) {
    await emailLink.click();
    await sleep(2000);
  }

  await page.locator('input[type="email"], input[placeholder*="email" i]').first().fill(EMAIL);
  await page.locator('input[type="password"]').first().fill(PASSWORD);
  await sleep(500);
  await page.locator('button[type="submit"], button:has-text("Log in"), button:has-text("Login")').first().click();
  await sleep(6000);
  console.log('  ✓ Logged in | URL:', page.url());

  // ── Step 2: Switch to Afroyla via sidebar shop switcher ──
  console.log('\n🔄 Switching to Afroyla...');
  await page.screenshot({ path: path.join(SCREENSHOTS, '01-logged-in.png'), fullPage: true });

  // The shop switcher is at the BOTTOM of the left sidebar
  // It shows: "[Shop Name]\n[XX,XXX] total subscribers"
  // Click on it to open shop list

  // Strategy 1: Click the settings/shop area at bottom of sidebar
  // Look for the element containing "total subscribers" text
  const shopArea = page.locator('text=total subscribers').first();
  if (await shopArea.isVisible({ timeout: 5000 }).catch(() => false)) {
    console.log('  Found "total subscribers" — clicking shop area...');
    // Click the parent element (the whole shop switcher block)
    await shopArea.locator('..').click();
    await sleep(2000);
    await page.screenshot({ path: path.join(SCREENSHOTS, '02-shop-dropdown.png'), fullPage: true });
  } else {
    // Strategy 2: Look for sidebar bottom link/button with shop name
    console.log('  Trying sidebar bottom elements...');
    // Get all text in sidebar bottom area
    const sidebarItems = await page.locator('nav a, aside a, [class*="sidebar"] a, [class*="Sidebar"] a').allTextContents();
    console.log('  Sidebar items:', sidebarItems.filter(t => t.trim()).join(' | '));
  }

  // Look for Afroyla in any dropdown/modal that appeared
  await sleep(1000);
  let foundAfroyla = false;

  // Try multiple selectors for "Afroyla" text
  for (const selector of [
    'text=Afroyla',
    '[class*="option"]:has-text("Afroyla")',
    '[class*="shop"]:has-text("Afroyla")',
    'li:has-text("Afroyla")',
    'a:has-text("Afroyla")',
    'div:has-text("Afroyla")',
  ]) {
    const el = page.locator(selector).first();
    if (await el.isVisible({ timeout: 1000 }).catch(() => false)) {
      console.log(`  Found Afroyla via: ${selector}`);
      await el.click();
      foundAfroyla = true;
      break;
    }
  }

  if (!foundAfroyla) {
    console.log('  ⚠️ Dropdown did not show Afroyla. Trying direct cookie manipulation...');

    // Set the psShopId cookie to Afroyla
    await context.addCookies([{
      name: 'psShopId',
      value: String(AFROYLA_SHOP_ID),
      domain: '.postscript.io',
      path: '/',
    }]);
    console.log('  Set psShopId cookie to 555772');

    // Reload dashboard
    await page.goto('https://app.postscript.io/dashboard', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await sleep(6000);
  } else {
    // Wait for shop switch to complete
    await sleep(8000);
  }

  await page.screenshot({ path: path.join(SCREENSHOTS, '03-after-switch.png'), fullPage: true });
  console.log('  URL:', page.url());

  // ── Step 3: Verify shop ──
  // Read page content to check which shop we're on
  const dashboardText = await page.locator('body').textContent().catch(() => '');
  const hasAfroyla = dashboardText.includes('Afroyla');
  const hasSkullette = dashboardText.includes('Skullette');
  const totalEarned = dashboardText.match(/\$[\d,]+\.?\d*K?/)?.[0] || 'unknown';
  console.log(`  Page contains: Afroyla=${hasAfroyla}, Skullette=${hasSkullette}`);
  console.log(`  Total earned visible: ${totalEarned}`);

  // Check sidebar shop name
  const sidebarShop = await page.locator('text=total subscribers').first().locator('..').textContent().catch(() => 'unknown');
  console.log(`  Sidebar shop: ${sidebarShop.trim().slice(0, 50)}`);

  // ── Step 4: If still wrong shop, pause for manual switch ──
  if (!hasAfroyla || hasSkullette) {
    console.log('\n  ⚠️ Still on wrong shop. Please switch to Afroyla manually in the browser.');
    console.log('  Click the shop name at bottom of sidebar → Select "Afroyla"');
    console.log('  Then press Enter here to continue...\n');
    await new Promise(resolve => process.stdin.once('data', resolve));

    // After manual switch, wait for page to reload
    await sleep(3000);
    await page.screenshot({ path: path.join(SCREENSHOTS, '04-manual-switch.png'), fullPage: true });
  }

  // ── Step 5: Pull data via API ──
  console.log('\n📡 Pulling data via API...');

  async function apiCall(endpoint) {
    try {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 20000);
      const res = await fetch(`${API_BASE}${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${afrolyaToken}`,
          'Accept': 'application/json',
        },
        signal: controller.signal,
      });
      if (!res.ok) return { error: `${res.status}` };
      return await res.json();
    } catch (e) {
      return { error: e.message.slice(0, 80) };
    }
  }

  // Verify
  const me = await apiCall('/me');
  const shopName = me.data?.shop || 'unknown';
  const planName = me.data?.plan?.name || 'unknown';
  const customers = me.data?.total_customers || '?';
  console.log(`  Shop: ${shopName} | Plan: ${planName} | Customers: ${customers}`);
  saveJSON('me.json', me);

  // Revenue
  console.log('\n📊 Revenue...');
  for (const days of [30, 90, 365]) {
    const rev = await apiCall(`/canary/dashboard/revenue/timeframe/${days}`);
    const total = rev.data?.revenue?.total;
    console.log(`  ${days}d: $${total ? total.toLocaleString() : rev.error}`);
    saveJSON(`revenue-${days}d.json`, rev);
    await sleep(300);
  }

  // Flow campaigns (SMS history with metrics)
  console.log('\n📱 Flow campaigns...');
  const flowCampaigns = await apiCall('/v2/flowbuilder/flows/analytics?delta=365&type=CAMPAIGN');
  const campaigns = flowCampaigns.automations || flowCampaigns.campaigns || [];
  console.log(`  Campaign flows (365d): ${campaigns.length}`);
  saveJSON('flow-campaigns-365d.json', flowCampaigns);

  // Also try all-time
  const flowCampaignsAll = await apiCall('/v2/flowbuilder/flows/analytics?delta=1095&type=CAMPAIGN');
  const campaignsAll = flowCampaignsAll.automations || flowCampaignsAll.campaigns || [];
  console.log(`  Campaign flows (all): ${campaignsAll.length}`);
  saveJSON('flow-campaigns-all.json', flowCampaignsAll);

  // Flow automations
  const flowAutos = await apiCall('/v2/flowbuilder/flows/analytics?delta=365&type=AUTOMATION');
  console.log(`  Automation flows: ${(flowAutos.automations || []).length}`);
  saveJSON('flow-automations-365d.json', flowAutos);

  // Automation details
  let allAutos = [];
  let aStart = 0;
  while (true) {
    const res = await apiCall(`/automations?start=${aStart}&limit=50`);
    const items = res.automations?.automations || [];
    allAutos = allAutos.concat(items);
    if (items.length < 50) break;
    aStart += 50;
    await sleep(300);
  }
  console.log(`  Automations detail: ${allAutos.length}`);
  saveJSON('automations-detail.json', allAutos);

  // V2 campaigns
  const v2 = await apiCall('/v2/campaigns/');
  console.log(`  V2 campaigns: ${v2.campaigns?.length || 0}`);
  saveJSON('v2-campaigns.json', v2);

  // Keywords/Responses
  const responses = await apiCall('/responses/grouped');
  saveJSON('responses-grouped.json', responses);

  // Usage stats (90 days)
  console.log('\n💰 Usage stats (90d)...');
  const allStats = [];
  const now = new Date();
  for (let d = 0; d < 90; d += 7) {
    const end = new Date(now); end.setDate(end.getDate() - d);
    const st = new Date(end); st.setDate(st.getDate() - 6);
    const res = await apiCall(`/v2/billing/usage/stats?start_date=${st.toISOString().slice(0,10)}&end_date=${end.toISOString().slice(0,10)}`);
    if (res.statistics) allStats.push(...res.statistics);
    await sleep(200);
  }
  console.log(`  ${allStats.length} records`);
  saveJSON('usage-stats-90d.json', allStats);

  // Subscribers
  const subs = await apiCall('/v2/subscribers/total/');
  console.log(`  Subscribers: ${subs.total || JSON.stringify(subs).slice(0,100)}`);
  saveJSON('subscribers.json', subs);

  // ARMU
  const armu = await apiCall('/v2/armu/metrics');
  if (armu.earnedRevenue) {
    console.log(`  ARMU L30: $${armu.earnedRevenue.l30?.toLocaleString()} | L365: $${armu.earnedRevenue.l365?.toLocaleString()}`);
  }
  saveJSON('armu-metrics.json', armu);

  // ── Step 6: Get SMS content from flow details ──
  console.log('\n📝 Getting SMS content from flows...');
  const targetCampaigns = (campaignsAll.length > campaigns.length ? campaignsAll : campaigns);
  const flowDetails = [];
  let contentFound = 0;

  for (let i = 0; i < targetCampaigns.length; i++) {
    const c = targetCampaigns[i];
    const guid = c.guid;
    if (!guid) continue;

    process.stdout.write(`  [${i+1}/${targetCampaigns.length}] ${(c.name || '').slice(0,45)}...`);

    // Try flow detail endpoint
    const detail = await apiCall(`/v2/flowbuilder/flows/${guid}`);
    if (!detail.error) {
      flowDetails.push({ ...c, flow_detail: detail });
      contentFound++;
      console.log(' ✓');
    } else {
      // Try steps endpoint
      const steps = await apiCall(`/v2/flowbuilder/flows/${guid}/steps`);
      if (!steps.error) {
        flowDetails.push({ ...c, flow_steps: steps });
        contentFound++;
        console.log(' ✓ (steps)');
      } else {
        console.log(` ✗ (${detail.error})`);
      }
    }

    // Save incrementally every 25
    if ((i + 1) % 25 === 0) {
      saveJSON('flow-details.json', flowDetails);
    }

    await sleep(400);
  }

  saveJSON('flow-details.json', flowDetails);
  console.log(`  Content found for ${contentFound}/${targetCampaigns.length} flows`);

  // ── Summary ──
  const totalSent = targetCampaigns.reduce((s, c) => s + (c.total_sent || 0), 0);
  const totalRev = targetCampaigns.reduce((s, c) => s + (c.revenue || 0), 0);

  console.log('\n═══════════════════════════════════════');
  console.log(' ✅ POSTSCRIPT EXTRACTION DONE');
  console.log(`  Shop: ${shopName}`);
  console.log(`  Campaigns: ${targetCampaigns.length}`);
  console.log(`  Total SMS sent: ${totalSent.toLocaleString()}`);
  console.log(`  Total revenue: $${totalRev.toLocaleString()}`);
  console.log(`  Flow details: ${contentFound}`);
  console.log(`  Output: ${OUTPUT}`);
  console.log('═══════════════════════════════════════');

  console.log('\nPress Enter to close browser...');
  await new Promise(resolve => process.stdin.once('data', resolve));
  await browser.close();
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
