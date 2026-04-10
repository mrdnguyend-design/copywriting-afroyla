/**
 * Postscript.io SMS Campaign Scraper — Playwright
 *
 * Scrapes: campaign list, metrics (sent/delivered/clicked/revenue), SMS content
 * Output: klaviyo_data/extraction/postscript/
 *
 * Usage:
 *   node postscript-scrape.js --explore    # Login + screenshot pages (recon)
 *   node postscript-scrape.js              # Full scrape
 *   node postscript-scrape.js --resume     # Resume from last saved progress
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const EMAIL = process.env.PS_EMAIL;
const PASSWORD = process.env.PS_PASSWORD;
if (!EMAIL || !PASSWORD) { console.error('❌ Missing PS_EMAIL or PS_PASSWORD in .env'); process.exit(1); }
const OUTPUT = path.resolve('d:/Copywriting Afroyla/klaviyo_data/extraction/postscript');
const SCREENSHOTS = path.join(OUTPUT, 'screenshots');
const CAMPAIGNS_FILE = path.join(OUTPUT, 'sms-campaigns.json');
const SUMMARY_FILE = path.join(OUTPUT, 'sms-summary.md');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function login(page) {
  console.log('🔑 Logging in to Postscript...');
  await page.goto('https://app.postscript.io/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(2000);

  // Screenshot login page
  await page.screenshot({ path: path.join(SCREENSHOTS, '01-login-page.png'), fullPage: true });

  // Postscript has 2-step login: first "Login With Email" link, then email/password form
  const emailLoginLink = page.locator('text=Login With Email').first();
  if (await emailLoginLink.isVisible().catch(() => false)) {
    console.log('  Clicking "Login With Email"...');
    await emailLoginLink.click();
    await sleep(2000);
    await page.screenshot({ path: path.join(SCREENSHOTS, '01b-email-form.png'), fullPage: true });
  }

  // Now fill email + password
  const emailInput = page.locator('input[type="email"], input[name="email"], input[placeholder*="email" i], input[placeholder*="Email" i]').first();
  const passwordInput = page.locator('input[type="password"]').first();

  await emailInput.waitFor({ state: 'visible', timeout: 10000 });
  await emailInput.fill(EMAIL);
  await passwordInput.fill(PASSWORD);
  await sleep(500);

  // Click login/submit button
  const loginBtn = page.locator('button[type="submit"], button:has-text("Log in"), button:has-text("Sign in"), button:has-text("Login")').first();
  await loginBtn.click();
  console.log('  Submitted credentials...');

  // Wait for redirect to dashboard
  await page.waitForURL('**/shops/**', { timeout: 30000 }).catch(() => {});
  await sleep(3000);

  await page.screenshot({ path: path.join(SCREENSHOTS, '02-after-login.png'), fullPage: true });

  const url = page.url();
  console.log('  Current URL:', url);

  if (url.includes('/login') || url.includes('/signin')) {
    console.log('❌ Login failed. Check credentials or 2FA.');
    return false;
  }

  console.log('  ✓ Logged in');
  return true;
}

async function exploreDashboard(page) {
  console.log('\n🔍 Exploring dashboard structure...');

  // Get current URL to extract shop ID
  const url = page.url();
  const shopMatch = url.match(/shops\/(\d+)/);
  const shopId = shopMatch ? shopMatch[1] : 'unknown';
  console.log('  Shop ID:', shopId);

  // Screenshot main dashboard
  await page.screenshot({ path: path.join(SCREENSHOTS, '03-dashboard.png'), fullPage: true });

  // Look for navigation links
  const navLinks = await page.locator('a[href], nav a, aside a').allTextContents();
  console.log('  Nav links found:', navLinks.filter(t => t.trim()).slice(0, 20));

  // Try common Postscript URL patterns for campaigns
  const campaignUrls = [
    `https://app.postscript.io/shops/${shopId}/campaigns`,
    `https://app.postscript.io/shops/${shopId}/messages`,
    `https://app.postscript.io/shops/${shopId}/automations`,
    `https://app.postscript.io/shops/${shopId}/analytics`,
  ];

  for (const testUrl of campaignUrls) {
    console.log(`\n  Trying: ${testUrl}`);
    try {
      await page.goto(testUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await sleep(2000);
      const title = await page.title();
      const heading = await page.locator('h1, h2').first().textContent().catch(() => '');
      console.log(`    Title: ${title} | Heading: ${heading}`);
      const filename = testUrl.split('/').pop();
      await page.screenshot({ path: path.join(SCREENSHOTS, `04-${filename}.png`), fullPage: true });
    } catch (e) {
      console.log(`    Failed: ${e.message.slice(0, 80)}`);
    }
  }

  return shopId;
}

async function scrapeCampaignList(page, shopId) {
  console.log('\n📋 Scraping campaign list...');

  const campaignsUrl = `https://app.postscript.io/shops/${shopId}/campaigns`;
  await page.goto(campaignsUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await sleep(3000);
  await page.screenshot({ path: path.join(SCREENSHOTS, '05-campaigns-list.png'), fullPage: true });

  const campaigns = [];

  // Try to find campaign table/list
  // Common patterns: table rows, card lists, or data grids
  let hasMore = true;
  let pageNum = 1;

  while (hasMore) {
    console.log(`  Page ${pageNum}...`);

    // Strategy 1: Look for table rows
    const rows = await page.locator('table tbody tr, [data-testid*="campaign"], [class*="campaign-row"], [class*="CampaignRow"]').all();

    if (rows.length > 0) {
      console.log(`    Found ${rows.length} rows`);
      for (const row of rows) {
        try {
          const text = await row.textContent();
          const link = await row.locator('a').first().getAttribute('href').catch(() => '');
          campaigns.push({ raw_text: text?.trim(), link, page: pageNum });
        } catch { /* skip */ }
      }
    }

    // Strategy 2: Look for card-style campaign items
    if (rows.length === 0) {
      const cards = await page.locator('[class*="campaign"], [class*="Campaign"], [data-campaign]').all();
      console.log(`    Found ${cards.length} card elements`);
      for (const card of cards) {
        try {
          const text = await card.textContent();
          const link = await card.locator('a').first().getAttribute('href').catch(() => '');
          campaigns.push({ raw_text: text?.trim()?.slice(0, 500), link, page: pageNum });
        } catch { /* skip */ }
      }
    }

    // Try pagination
    const nextBtn = page.locator('button:has-text("Next"), a:has-text("Next"), [aria-label="Next page"], button[class*="next"]').first();
    if (await nextBtn.isVisible().catch(() => false) && await nextBtn.isEnabled().catch(() => false)) {
      await nextBtn.click();
      await sleep(3000);
      pageNum++;
    } else {
      hasMore = false;
    }

    // Safety limit
    if (pageNum > 50) hasMore = false;
  }

  console.log(`  Total raw campaign entries: ${campaigns.length}`);
  return campaigns;
}

async function scrapeCampaignDetail(page, campaignUrl) {
  try {
    await page.goto(campaignUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await sleep(2000);

    // Extract what we can see on the page
    const pageText = await page.locator('main, [class*="content"], [class*="detail"]').first().textContent().catch(() => '');

    // Look for specific metrics
    const metricsData = {};
    const metricLabels = ['sent', 'delivered', 'clicked', 'click rate', 'revenue', 'orders', 'unsubscribed', 'opt-out'];

    for (const label of metricLabels) {
      const el = page.locator(`text=${label}`).first();
      if (await el.isVisible().catch(() => false)) {
        // Get the value near this label (sibling or parent's other child)
        const parent = el.locator('..');
        const parentText = await parent.textContent().catch(() => '');
        metricsData[label] = parentText?.trim();
      }
    }

    // Look for SMS content/body
    const smsBody = await page.locator('[class*="message-body"], [class*="sms-content"], [class*="preview"], textarea, [class*="MessagePreview"]').first().textContent().catch(() => '');

    return {
      url: campaignUrl,
      page_text: pageText?.slice(0, 2000),
      metrics: metricsData,
      sms_body: smsBody?.trim(),
    };
  } catch (e) {
    return { url: campaignUrl, error: e.message.slice(0, 100) };
  }
}

async function interceptApiCalls(page) {
  // Intercept XHR/fetch calls to find API endpoints Postscript uses internally
  const apiCalls = [];
  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('api') || url.includes('campaign') || url.includes('message')) {
      try {
        const status = response.status();
        if (status === 200 && response.headers()['content-type']?.includes('json')) {
          const body = await response.json().catch(() => null);
          if (body) {
            apiCalls.push({ url, body: JSON.stringify(body).slice(0, 5000) });
          }
        }
      } catch { /* ignore */ }
    }
  });
  return apiCalls;
}

async function main() {
  const mode = process.argv.includes('--explore') ? 'explore' : 'full';
  ensureDir(OUTPUT);
  ensureDir(SCREENSHOTS);

  console.log('═══════════════════════════════════');
  console.log(' POSTSCRIPT SMS SCRAPER — AFROYLA');
  console.log(`  Mode: ${mode}`);
  console.log('═══════════════════════════════════\n');

  const browser = await chromium.launch({
    headless: false,  // Visible browser — easier to debug + handle 2FA
    slowMo: 100,
  });

  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  });

  const page = await context.newPage();

  // Intercept API calls to discover internal endpoints
  const apiCalls = await interceptApiCalls(page);

  try {
    // Login
    const loggedIn = await login(page);
    if (!loggedIn) {
      console.log('\n⚠️  If 2FA is needed, the browser is open — complete login manually, then press Enter in terminal.');
      await new Promise(resolve => {
        process.stdin.once('data', resolve);
      });
    }

    if (mode === 'explore') {
      // ── EXPLORE MODE ──
      const shopId = await exploreDashboard(page);

      // Save API calls discovered
      if (apiCalls.length > 0) {
        fs.writeFileSync(path.join(OUTPUT, 'api-calls-discovered.json'), JSON.stringify(apiCalls, null, 2), 'utf-8');
        console.log(`\n📡 Discovered ${apiCalls.length} internal API calls — saved to api-calls-discovered.json`);
      }

      console.log(`\n✅ Explore done. Check ${SCREENSHOTS}/ for page screenshots.`);
      console.log('   Review screenshots, then run without --explore for full scrape.');

    } else {
      // ── FULL SCRAPE MODE ──
      const shopId = await exploreDashboard(page);

      // Scrape campaign list
      const rawCampaigns = await scrapeCampaignList(page, shopId);

      // Save raw list
      fs.writeFileSync(path.join(OUTPUT, 'sms-campaigns-raw.json'), JSON.stringify(rawCampaigns, null, 2), 'utf-8');

      // Scrape individual campaign details
      const detailedCampaigns = [];
      const campaignLinks = rawCampaigns.filter(c => c.link).map(c => c.link);
      const uniqueLinks = [...new Set(campaignLinks)];

      console.log(`\n📱 Scraping ${uniqueLinks.length} campaign details...`);
      for (let i = 0; i < uniqueLinks.length; i++) {
        const link = uniqueLinks[i];
        const fullUrl = link.startsWith('http') ? link : `https://app.postscript.io${link}`;
        process.stdout.write(`  [${i + 1}/${uniqueLinks.length}] ${link.slice(-40)}...`);

        const detail = await scrapeCampaignDetail(page, fullUrl);
        detailedCampaigns.push(detail);
        console.log(detail.error ? ' ✗' : ' ✓');

        // Save incrementally
        if ((i + 1) % 10 === 0) {
          fs.writeFileSync(CAMPAIGNS_FILE, JSON.stringify(detailedCampaigns, null, 2), 'utf-8');
        }

        await sleep(1500);
      }

      // Final save
      fs.writeFileSync(CAMPAIGNS_FILE, JSON.stringify(detailedCampaigns, null, 2), 'utf-8');

      // Save API calls
      if (apiCalls.length > 0) {
        fs.writeFileSync(path.join(OUTPUT, 'api-calls-discovered.json'), JSON.stringify(apiCalls, null, 2), 'utf-8');
      }

      console.log(`\n✅ Scrape done.`);
      console.log(`   ${detailedCampaigns.length} campaigns saved to ${CAMPAIGNS_FILE}`);
      console.log(`   ${apiCalls.length} API calls discovered`);
    }

    // Keep browser open for manual inspection
    console.log('\n🔍 Browser staying open. Press Enter to close.');
    await new Promise(resolve => {
      process.stdin.once('data', resolve);
    });

  } catch (e) {
    console.error('\n❌ Error:', e.message);
    await page.screenshot({ path: path.join(SCREENSHOTS, 'error.png'), fullPage: true });
  } finally {
    await browser.close();
  }
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
