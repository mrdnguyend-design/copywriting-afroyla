/**
 * Klaviyo Metrics Extraction — with retry, timeout, incremental save, resume
 *
 * Usage:
 *   node klaviyo-metrics.js           # Full run (resumes from existing data)
 *   node klaviyo-metrics.js --fresh   # Start fresh (ignores existing data)
 */
import fs from 'fs';
import path from 'path';

const API_KEY = process.env.KLAVIYO_API_KEY;
if (!API_KEY) { console.error('❌ Missing KLAVIYO_API_KEY in .env'); process.exit(1); }
const BASE = 'https://a.klaviyo.com/api';
const REV = '2024-10-15';
const OUTPUT = path.resolve('d:/Copywriting Afroyla/klaviyo_data/extraction');
const METRICS_FILE = path.join(OUTPUT, 'metrics.json');
const RATE_MS = 1500;
const TIMEOUT_MS = 20000;
const MAX_RETRIES = 3;
const SAVE_EVERY = 25;
const CONVERSION_METRIC_ID = 'XiiLnR'; // Placed Order

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function fetchWithRetry(url, options, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

      const res = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(timer);

      if (res.status === 429) {
        const wait = Math.min(5000 * attempt, 30000);
        process.stdout.write(` [429, wait ${wait / 1000}s]`);
        await sleep(wait);
        continue;
      }

      return res;
    } catch (e) {
      if (attempt < retries) {
        const wait = 2000 * attempt;
        process.stdout.write(` [retry ${attempt}/${retries}, wait ${wait / 1000}s]`);
        await sleep(wait);
      } else {
        return null; // All retries exhausted
      }
    }
  }
  return null;
}

async function fetchMetric(campaignId) {
  const body = {
    data: {
      type: 'campaign-values-report',
      attributes: {
        statistics: ['opens', 'open_rate', 'clicks', 'click_rate', 'recipients', 'unsubscribes', 'unsubscribe_rate', 'conversion_rate', 'conversion_value', 'conversion_uniques'],
        timeframe: { key: 'last_365_days' },
        conversion_metric_id: CONVERSION_METRIC_ID,
        filter: `equals(campaign_id,"${campaignId}")`,
      },
    },
  };

  const res = await fetchWithRetry(`${BASE}/campaign-values-reports/`, {
    method: 'POST',
    headers: {
      'Authorization': `Klaviyo-API-Key ${API_KEY}`,
      'revision': REV,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res || !res.ok) return null;

  try {
    const d = await res.json();
    return d.data?.attributes?.results?.[0]?.statistics || null;
  } catch {
    return null;
  }
}

function saveResults(results) {
  fs.writeFileSync(METRICS_FILE, JSON.stringify(results, null, 2), 'utf-8');
}

function generateSummary(results, messages) {
  const lines = [
    `# Klaviyo Campaign Metrics — ${new Date().toISOString().slice(0, 10)}`,
    '',
    `> ${results.length} campaigns with metrics`,
    '',
    '## All Campaigns',
    '',
    '| Date | Campaign | Subject | Recipients | Open % | Click % | Revenue | Conv | Unsub % |',
    '|------|----------|---------|-----------|--------|---------|---------|------|---------|',
  ];

  for (const r of results) {
    lines.push(
      `| ${r.date} | ${r.campaign_name.slice(0, 30).replace(/\|/g, '/')} | ${(r.subject || '').slice(0, 35).replace(/\|/g, '/')} | ${r.recipients?.toLocaleString() || '—'} | ${(r.open_rate * 100).toFixed(1)} | ${(r.click_rate * 100).toFixed(2)} | $${r.conversion_value?.toFixed(0) || 0} | ${r.conversion_uniques || 0} | ${((r.unsubscribe_rate || 0) * 100).toFixed(2)} |`
    );
  }

  // Aggregates
  const totalRev = results.reduce((s, r) => s + (r.conversion_value || 0), 0);
  const totalRecip = results.reduce((s, r) => s + (r.recipients || 0), 0);
  const avgOR = results.length > 0 ? results.reduce((s, r) => s + (r.open_rate || 0), 0) / results.length : 0;
  const avgCR = results.length > 0 ? results.reduce((s, r) => s + (r.click_rate || 0), 0) / results.length : 0;
  const totalUnsubs = results.reduce((s, r) => s + (r.unsubscribes || 0), 0);

  lines.push('', '## Totals', '');
  lines.push(`- Total Revenue: **$${totalRev.toFixed(0)}**`);
  lines.push(`- Total Recipients: ${totalRecip.toLocaleString()}`);
  lines.push(`- Avg Open Rate: ${(avgOR * 100).toFixed(1)}%`);
  lines.push(`- Avg Click Rate: ${(avgCR * 100).toFixed(2)}%`);
  lines.push(`- Total Unsubs: ${totalUnsubs.toLocaleString()}`);
  lines.push(`- Revenue/Send: $${totalRecip > 0 ? (totalRev / totalRecip).toFixed(5) : '—'}`);

  // By month
  const byMonth = {};
  for (const r of results) {
    const m = r.date.slice(0, 7);
    if (!byMonth[m]) byMonth[m] = { n: 0, rev: 0, recip: 0, opens: 0, clicks: 0, unsubs: 0 };
    byMonth[m].n++;
    byMonth[m].rev += r.conversion_value || 0;
    byMonth[m].recip += r.recipients || 0;
    byMonth[m].opens += r.opens || 0;
    byMonth[m].clicks += r.clicks || 0;
    byMonth[m].unsubs += r.unsubscribes || 0;
  }

  lines.push('', '## By Month', '');
  lines.push('| Month | Campaigns | Recipients | Open % | Click % | Revenue | RPS | Unsubs |');
  lines.push('|-------|----------|-----------|--------|---------|---------|-----|--------|');
  for (const [month, d] of Object.entries(byMonth).sort()) {
    const or = d.recip > 0 ? (d.opens / d.recip * 100).toFixed(1) : '—';
    const cr = d.recip > 0 ? (d.clicks / d.recip * 100).toFixed(2) : '—';
    const rps = d.recip > 0 ? (d.rev / d.recip).toFixed(5) : '—';
    lines.push(`| ${month} | ${d.n} | ${d.recip.toLocaleString()} | ${or} | ${cr} | $${d.rev.toFixed(0)} | $${rps} | ${d.unsubs} |`);
  }

  return lines.join('\n');
}

async function main() {
  const fresh = process.argv.includes('--fresh');

  console.log('═══════════════════════════════');
  console.log(' KLAVIYO METRICS — AFROYLA');
  console.log('═══════════════════════════════\n');

  const campaigns = JSON.parse(fs.readFileSync(path.join(OUTPUT, 'campaigns-email.json'), 'utf-8'));
  const messages = JSON.parse(fs.readFileSync(path.join(OUTPUT, 'messages.json'), 'utf-8'));
  const sent = campaigns.filter(c => c.attributes?.status === 'Sent');

  // Resume: load existing results
  let results = [];
  const doneIds = new Set();
  if (!fresh && fs.existsSync(METRICS_FILE)) {
    try {
      const existing = JSON.parse(fs.readFileSync(METRICS_FILE, 'utf-8'));
      if (Array.isArray(existing) && existing.length > 0 && existing[0].campaign_id) {
        results = existing;
        for (const r of results) doneIds.add(r.campaign_id);
        console.log(`📂 Resuming: ${results.length} campaigns already done\n`);
      }
    } catch { /* start fresh */ }
  }

  const todo = sent.filter(c => !doneIds.has(c.id));
  console.log(`📊 ${todo.length} campaigns remaining (${sent.length} total sent)\n`);

  let succeeded = 0;
  let failed = 0;

  for (let i = 0; i < todo.length; i++) {
    const c = todo[i];
    const name = c.attributes?.name || '';
    const date = (c.attributes?.scheduled_at || '').slice(0, 10);
    process.stdout.write(`[${results.length + 1}/${sent.length}] ${date} ${name.slice(0, 40)}...`);

    const stats = await fetchMetric(c.id);
    if (stats) {
      const msg = messages.find(m => m.campaign_id === c.id);
      results.push({
        campaign_id: c.id,
        campaign_name: name,
        date,
        subject: msg?.subject || '',
        ...stats,
      });
      succeeded++;
      console.log(` ✓ OR:${(stats.open_rate * 100).toFixed(1)}% CR:${(stats.click_rate * 100).toFixed(2)}% $${stats.conversion_value?.toFixed(0) || 0}`);
    } else {
      failed++;
      console.log(' ✗ (skipped)');
    }

    // Incremental save
    if ((i + 1) % SAVE_EVERY === 0) {
      saveResults(results);
      process.stdout.write(`  💾 saved (${results.length} total)\n`);
    }

    await sleep(RATE_MS);
  }

  // Final save
  saveResults(results);
  console.log(`\n✅ metrics.json — ${results.length} records (${succeeded} new, ${failed} failed)`);

  // Generate summary
  const summary = generateSummary(results, messages);
  fs.writeFileSync(path.join(OUTPUT, 'metrics-summary.md'), summary, 'utf-8');
  console.log('✅ metrics-summary.md');

  const totalRev = results.reduce((s, r) => s + (r.conversion_value || 0), 0);
  const avgOR = results.length > 0 ? results.reduce((s, r) => s + (r.open_rate || 0), 0) / results.length : 0;

  console.log(`\n═══════════════════════════════`);
  console.log(` ${results.length}/${sent.length} campaigns with metrics`);
  console.log(` Total Revenue: $${totalRev.toFixed(0)}`);
  console.log(` Avg Open Rate: ${(avgOR * 100).toFixed(1)}%`);
  console.log('═══════════════════════════════');
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
