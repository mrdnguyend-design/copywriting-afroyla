/**
 * Klaviyo Data Extraction — Afroyla
 *
 * Pulls: email campaigns, SMS campaigns, content, metrics
 * Output: klaviyo_data/extraction/
 *
 * Usage:
 *   node klaviyo-extract.js                     # Full extraction (all campaigns)
 *   node klaviyo-extract.js --since 2026-03-01  # From specific date
 */

import fs from 'fs';
import path from 'path';

const API_KEY = process.env.KLAVIYO_API_KEY;
if (!API_KEY) { console.error('❌ Missing KLAVIYO_API_KEY in .env'); process.exit(1); }
const BASE_URL = 'https://a.klaviyo.com/api';
const REVISION = '2024-10-15';
const OUTPUT_DIR = path.resolve('d:/Copywriting Afroyla/klaviyo_data/extraction');
const RATE_LIMIT_MS = 400;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function klaviyoFetch(url) {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
  const res = await fetch(fullUrl, {
    headers: {
      'Authorization': `Klaviyo-API-Key ${API_KEY}`,
      'revision': REVISION,
      'Accept': 'application/json',
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API ${res.status}: ${body.slice(0, 300)}`);
  }
  return res.json();
}

async function klaviyoPost(url, body) {
  const res = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Authorization': `Klaviyo-API-Key ${API_KEY}`,
      'revision': REVISION,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API POST ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

async function fetchAllPages(firstUrl) {
  let all = [];
  let url = firstUrl.startsWith('http') ? firstUrl : `${BASE_URL}${firstUrl}`;
  let page = 1;
  while (url) {
    process.stdout.write(`  page ${page}...`);
    const res = await klaviyoFetch(url);
    const items = res.data || [];
    all = all.concat(items);
    process.stdout.write(` (${items.length} items)\n`);
    url = res.links?.next || null;
    page++;
    await sleep(RATE_LIMIT_MS);
  }
  return all;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function saveJSON(filename, data) {
  const fp = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(fp, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`  saved ${filename} (${data.length || Object.keys(data).length} records)`);
}

// ─── MAIN ───
async function main() {
  const args = process.argv.slice(2);
  const sinceIdx = args.indexOf('--since');
  const sinceDate = sinceIdx >= 0 ? args[sinceIdx + 1] : null;

  console.log('═══════════════════════════════');
  console.log(' KLAVIYO EXTRACTION — AFROYLA');
  console.log('═══════════════════════════════');
  ensureDir(OUTPUT_DIR);

  // ── 1. EMAIL CAMPAIGNS ──
  console.log('\n📧 Email campaigns...');
  let emailFilter = "equals(messages.channel,'email')";
  if (sinceDate) emailFilter += `,greater-or-equal(scheduled_at,${sinceDate}T00:00:00Z)`;
  const emailCampaigns = await fetchAllPages(
    `/campaigns?filter=${encodeURIComponent(emailFilter)}&sort=-scheduled_at`
  );
  console.log(`  Total: ${emailCampaigns.length} email campaigns`);

  // ── 2. SMS CAMPAIGNS ──
  console.log('\n📱 SMS campaigns...');
  let smsFilter = "equals(messages.channel,'sms')";
  if (sinceDate) smsFilter += `,greater-or-equal(scheduled_at,${sinceDate}T00:00:00Z)`;
  let smsCampaigns = [];
  try {
    smsCampaigns = await fetchAllPages(
      `/campaigns?filter=${encodeURIComponent(smsFilter)}&sort=-scheduled_at`
    );
    console.log(`  Total: ${smsCampaigns.length} SMS campaigns`);
  } catch (e) {
    console.log(`  SMS fetch failed: ${e.message.slice(0, 100)}`);
  }

  const allCampaigns = [...emailCampaigns, ...smsCampaigns];
  saveJSON('campaigns-email.json', emailCampaigns);
  if (smsCampaigns.length) saveJSON('campaigns-sms.json', smsCampaigns);

  // ── 3. CAMPAIGN MESSAGES (subject + content) ──
  console.log('\n📝 Fetching message content...');
  const messages = [];
  for (let i = 0; i < allCampaigns.length; i++) {
    const c = allCampaigns[i];
    const name = c.attributes?.name || '';
    process.stdout.write(`  [${i + 1}/${allCampaigns.length}] ${name.slice(0, 50)}...`);

    try {
      const res = await klaviyoFetch(`/campaigns/${c.id}/campaign-messages`);
      for (const msg of (res.data || [])) {
        const entry = {
          campaign_id: c.id,
          campaign_name: name,
          campaign_status: c.attributes?.status,
          scheduled_at: c.attributes?.scheduled_at,
          message_id: msg.id,
          channel: msg.attributes?.channel || 'email',
        };

        // Get content
        try {
          const contentRes = await klaviyoFetch(`/campaign-messages/${msg.id}`);
          const content = contentRes.data?.attributes?.content || {};
          entry.subject = content.subject || '';
          entry.preview_text = content.preview_text || '';
          entry.from_email = content.from_email || '';
          entry.from_label = content.from_label || '';
          // Store body (can be large)
          entry.html_length = (content.html || '').length;
          entry.has_html = !!content.html;
          // Save first 500 chars of text for preview
          const textContent = (content.html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
          entry.text_preview = textContent.slice(0, 500);

          await sleep(RATE_LIMIT_MS);
        } catch (e2) {
          entry.content_error = e2.message.slice(0, 100);
        }

        messages.push(entry);
      }
      console.log(' ✓');
    } catch (e) {
      console.log(` ✗`);
    }
    await sleep(RATE_LIMIT_MS);
  }
  saveJSON('messages.json', messages);

  // ── 4. METRICS (campaign performance) ──
  console.log('\n📊 Fetching metrics...');
  const metrics = [];

  // Try the reporting endpoint
  const emailIds = emailCampaigns.filter(c => c.attributes?.status === 'Sent').map(c => c.id);

  // Batch by 100
  for (let i = 0; i < emailIds.length; i += 100) {
    const batch = emailIds.slice(i, i + 100);
    process.stdout.write(`  Metrics batch ${Math.floor(i / 100) + 1}/${Math.ceil(emailIds.length / 100)}...`);

    try {
      const res = await klaviyoPost('/campaign-values-reports/', {
        data: {
          type: 'campaign-values-report',
          attributes: {
            statistics: [
              'opens', 'unique_opens', 'open_rate',
              'clicks', 'unique_clicks', 'click_rate',
              'recipients',
              'unsubscribes', 'unsubscribe_rate',
              'revenue', 'conversion_rate', 'conversion_value',
            ],
            timeframe: { key: 'last_365_days' },
            filter: `in(campaign_id,[${batch.map(id => `"${id}"`).join(',')}])`,
          },
        },
      });

      const results = res.data?.attributes?.results || [];
      metrics.push(...results);
      console.log(` ✓ (${results.length})`);
    } catch (e) {
      console.log(` ✗ (${e.message.slice(0, 80)})`);
    }

    await sleep(RATE_LIMIT_MS * 3);
  }

  saveJSON('metrics.json', metrics);

  // ── 5. LISTS & SEGMENTS ──
  console.log('\n👥 Lists & Segments...');
  try {
    const lists = await fetchAllPages('/lists');
    saveJSON('lists.json', lists);
    const segments = await fetchAllPages('/segments');
    saveJSON('segments.json', segments);
  } catch (e) {
    console.log(`  Failed: ${e.message.slice(0, 100)}`);
  }

  // ── 6. GENERATE SUMMARY ──
  console.log('\n📋 Generating summary...');

  const summary = [];
  summary.push(`# Klaviyo Extraction — ${new Date().toISOString().slice(0, 10)}`);
  summary.push('');
  summary.push(`## Overview`);
  summary.push(`- Email campaigns: ${emailCampaigns.length}`);
  summary.push(`- SMS campaigns: ${smsCampaigns.length}`);
  summary.push(`- Messages with content: ${messages.filter(m => m.has_html).length}`);
  summary.push(`- Metrics records: ${metrics.length}`);
  summary.push('');

  // By month
  summary.push('## Campaigns by Month');
  const byMonth = {};
  for (const c of emailCampaigns) {
    const month = (c.attributes?.scheduled_at || '').slice(0, 7) || '?';
    byMonth[month] = (byMonth[month] || 0) + 1;
  }
  for (const [m, cnt] of Object.entries(byMonth).sort()) {
    summary.push(`- ${m}: ${cnt} emails`);
  }
  summary.push('');

  // Campaign list with subjects
  summary.push('## All Campaigns');
  summary.push('');
  summary.push('| Date | Campaign Name | Subject | Status |');
  summary.push('|------|--------------|---------|--------|');
  for (const c of emailCampaigns) {
    const date = (c.attributes?.scheduled_at || '').slice(0, 10);
    const name = (c.attributes?.name || '').replace(/\|/g, '/');
    const msg = messages.find(m => m.campaign_id === c.id);
    const subject = (msg?.subject || '').replace(/\|/g, '/').slice(0, 60);
    const status = c.attributes?.status || '';
    summary.push(`| ${date} | ${name.slice(0, 50)} | ${subject} | ${status} |`);
  }

  // Metrics table if available
  if (metrics.length > 0) {
    summary.push('');
    summary.push('## Performance Metrics');
    summary.push('');
    summary.push('| Campaign ID | Recipients | Open Rate | Click Rate | Revenue | Unsub Rate |');
    summary.push('|-------------|-----------|-----------|------------|---------|------------|');
    for (const m of metrics) {
      const id = (m.campaign_id || '').slice(0, 12);
      summary.push(`| ${id} | ${m.recipients || '—'} | ${m.open_rate ? (m.open_rate * 100).toFixed(1) + '%' : '—'} | ${m.click_rate ? (m.click_rate * 100).toFixed(1) + '%' : '—'} | $${m.revenue || m.conversion_value || '—'} | ${m.unsubscribe_rate ? (m.unsubscribe_rate * 100).toFixed(2) + '%' : '—'} |`);
    }
  }

  const summaryPath = path.join(OUTPUT_DIR, 'extraction-summary.md');
  fs.writeFileSync(summaryPath, summary.join('\n'), 'utf-8');
  console.log(`  saved extraction-summary.md`);

  console.log('\n═══════════════════════════════');
  console.log(' ✅ DONE');
  console.log(`  ${emailCampaigns.length} email + ${smsCampaigns.length} SMS campaigns`);
  console.log(`  ${messages.length} messages | ${metrics.length} metrics`);
  console.log(`  Output: ${OUTPUT_DIR}`);
  console.log('═══════════════════════════════');
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
