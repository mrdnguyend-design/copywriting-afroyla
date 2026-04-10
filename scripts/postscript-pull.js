/**
 * Postscript Data Pull — Afroyla (555772)
 * Uses saved JWT token — no browser needed
 *
 * Usage: node postscript-pull.js
 */
import fs from 'fs';
import path from 'path';

const TOKEN = fs.readFileSync('d:/Copywriting Afroyla/klaviyo_data/extraction/postscript-afroyla/token-afroyla.txt', 'utf-8').trim();
const API = 'https://internal-api.postscript.io';
const OUTPUT = path.resolve('d:/Copywriting Afroyla/klaviyo_data/extraction/postscript-afroyla');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
function saveJSON(name, data) {
  fs.writeFileSync(path.join(OUTPUT, name), JSON.stringify(data, null, 2), 'utf-8');
  console.log(`  💾 ${name}`);
}

async function api(endpoint, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 25000);
      const res = await fetch(`${API}${endpoint}`, {
        headers: { 'Authorization': `Bearer ${TOKEN}`, 'Accept': 'application/json' },
        signal: controller.signal,
      });
      if (res.status === 401) return { error: 'token_expired' };
      if (!res.ok) return { error: `${res.status}` };
      return await res.json();
    } catch (e) {
      if (i < retries - 1) { console.log(` [retry ${i+1}]`); await sleep(3000); }
      else return { error: e.message.slice(0, 80) };
    }
  }
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log(' POSTSCRIPT PULL — AFROYLA (555772)');
  console.log('═══════════════════════════════════════\n');

  // Verify token
  console.log('🔑 Verifying token...');
  const me = await api('/me');
  if (me.error === 'token_expired') { console.log('❌ Token expired. Re-run postscript-afroyla.js to get new token.'); process.exit(1); }
  console.log(`  Shop: ${me.data?.shop} | Plan: ${me.data?.plan?.name} | Customers: ${me.data?.total_customers}`);
  saveJSON('me.json', me);

  // Revenue
  console.log('\n📊 Revenue...');
  for (const d of [30, 90, 365]) {
    const rev = await api(`/canary/dashboard/revenue/timeframe/${d}`);
    console.log(`  ${d}d: $${rev.data?.revenue?.total?.toLocaleString() || rev.error}`);
    saveJSON(`revenue-${d}d.json`, rev);
    await sleep(500);
  }

  // Flow campaigns (SMS campaigns with metrics — this is the main data)
  console.log('\n📱 Campaign flows...');
  const fc365 = await api('/v2/flowbuilder/flows/analytics?delta=365&type=CAMPAIGN');
  const campaigns = fc365.automations || fc365.campaigns || [];
  console.log(`  365d: ${campaigns.length} campaigns`);
  saveJSON('flow-campaigns-365d.json', fc365);

  const fcAll = await api('/v2/flowbuilder/flows/analytics?delta=1095&type=CAMPAIGN');
  const campAll = fcAll.automations || fcAll.campaigns || [];
  console.log(`  All time: ${campAll.length} campaigns`);
  saveJSON('flow-campaigns-all.json', fcAll);

  // Automation flows
  const fa = await api('/v2/flowbuilder/flows/analytics?delta=365&type=AUTOMATION');
  console.log(`  Automations: ${(fa.automations || []).length}`);
  saveJSON('flow-automations-365d.json', fa);

  // Automation details
  let allAutos = [];
  let start = 0;
  while (true) {
    const res = await api(`/automations?start=${start}&limit=50`);
    const items = res.automations?.automations || [];
    allAutos = allAutos.concat(items);
    if (items.length < 50) break;
    start += 50;
    await sleep(300);
  }
  console.log(`  Automation details: ${allAutos.length}`);
  saveJSON('automations-detail.json', allAutos);

  // V2 campaigns
  const v2 = await api('/v2/campaigns/');
  console.log(`  V2 campaigns: ${v2.campaigns?.length || 0}`);
  saveJSON('v2-campaigns.json', v2);

  // Keywords/Responses
  const resp = await api('/responses/grouped');
  saveJSON('responses-grouped.json', resp);

  // ARMU metrics
  console.log('\n📈 ARMU metrics...');
  const armu = await api('/v2/armu/metrics');
  if (armu.earnedRevenue) {
    console.log(`  Revenue L30: $${armu.earnedRevenue.l30?.toLocaleString()} | L365: $${armu.earnedRevenue.l365?.toLocaleString()}`);
    console.log(`  Subscribers: ${armu.subscribers?.l30?.toLocaleString()} L30 | ${armu.subscribers?.l365?.toLocaleString()} L365`);
  }
  saveJSON('armu-metrics.json', armu);

  // Subscribers
  const subs = await api('/v2/subscribers/total/');
  console.log(`  Total subscribers: ${subs.total || '?'}`);
  saveJSON('subscribers.json', subs);

  // Usage stats (90 days)
  console.log('\n💰 Usage stats (90d)...');
  const allStats = [];
  const now = new Date();
  for (let d = 0; d < 90; d += 7) {
    const end = new Date(now); end.setDate(end.getDate() - d);
    const st = new Date(end); st.setDate(st.getDate() - 6);
    const res = await api(`/v2/billing/usage/stats?start_date=${st.toISOString().slice(0,10)}&end_date=${end.toISOString().slice(0,10)}`);
    if (res.statistics) allStats.push(...res.statistics);
    process.stdout.write('.');
    await sleep(200);
  }
  console.log(` ${allStats.length} records`);
  saveJSON('usage-stats-90d.json', allStats);

  // ── Flow details (SMS content) ──
  console.log('\n📝 Flow details (SMS content)...');
  const target = campAll.length > campaigns.length ? campAll : campaigns;
  const details = [];
  let found = 0;

  for (let i = 0; i < target.length; i++) {
    const c = target[i];
    if (!c.guid) continue;
    process.stdout.write(`  [${i+1}/${target.length}] ${(c.name||'').slice(0,40)}...`);

    const detail = await api(`/v2/flowbuilder/flows/${c.guid}`);
    if (!detail.error) {
      details.push({ campaign: c, flow: detail });
      found++;
      console.log(' ✓');
    } else {
      // Try steps
      const steps = await api(`/v2/flowbuilder/flows/${c.guid}/steps`);
      if (!steps.error) {
        details.push({ campaign: c, steps });
        found++;
        console.log(' ✓ (steps)');
      } else {
        console.log(` ✗ (${detail.error})`);
      }
    }

    if ((i + 1) % 25 === 0) saveJSON('flow-details.json', details);
    await sleep(400);
  }

  saveJSON('flow-details.json', details);
  console.log(`  Content found: ${found}/${target.length}`);

  // Summary
  const totalSent = target.reduce((s, c) => s + (c.total_sent || 0), 0);
  const totalRev = target.reduce((s, c) => s + (c.revenue || 0), 0);
  const totalOrders = target.reduce((s, c) => s + (c.orders || 0), 0);

  console.log('\n═══════════════════════════════════════');
  console.log(' ✅ DONE');
  console.log(`  Campaigns: ${target.length}`);
  console.log(`  Total sent: ${totalSent.toLocaleString()}`);
  console.log(`  Total revenue: $${totalRev.toLocaleString()}`);
  console.log(`  Total orders: ${totalOrders.toLocaleString()}`);
  console.log(`  Flow details: ${found}`);
  console.log('═══════════════════════════════════════');
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
