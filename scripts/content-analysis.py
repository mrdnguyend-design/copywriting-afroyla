"""
Content Analysis Script — Afroyla
Parses 705 content pieces (427 emails + 278 SMS), auto-tags, extracts components.
Output: content-analysis.json + content-analysis-summary.md

Usage: python content-analysis.py
"""

import json
import re
import os
import sys
from collections import Counter, defaultdict
from datetime import datetime

sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', buffering=1)

BASE = "d:/Copywriting Afroyla"
OUT = f"{BASE}/klaviyo_data/extraction"

# ─── LOAD DATA ───

def load_json(path):
    with open(os.path.join(BASE, path), encoding='utf-8') as f:
        return json.load(f)

print("Loading data...")
emails_raw = load_json("klaviyo_data/extraction/campaigns-email.json")
messages = load_json("klaviyo_data/extraction/messages.json")
metrics = load_json("klaviyo_data/extraction/metrics.json")
sms_flows_raw = load_json("klaviyo_data/extraction/postscript-afroyla/flow-campaigns-365d.json")
sms_content = load_json("klaviyo_data/extraction/postscript-afroyla/flow-sms-content.json")

sms_flows = sms_flows_raw.get("automations", sms_flows_raw.get("campaigns", []))

# Index metrics by campaign_id
metrics_by_id = {m["campaign_id"]: m for m in metrics}
# Index messages by campaign_id
messages_by_id = {m["campaign_id"]: m for m in messages}

print(f"  Emails: {len(emails_raw)}")
print(f"  Messages: {len(messages)}")
print(f"  Metrics: {len(metrics)}")
print(f"  SMS flows: {len(sms_flows)}")
print(f"  SMS content: {len(sms_content)}")

# ─── CLASSIFICATION RULES ───

PHASE_KEYWORDS = {
    "teaser": ["teaser", "warmup", "warm-up", "tease", "sneak peek", "tomorrow", "coming soon"],
    "sale": ["sale", "live", "game", "day 1", "day 2", "day 3", "day1", "day2", "day3",
             "last call", "final", "finale", "flash", "deal", "% off", "discount",
             "bfcm", "bf ", "cyber monday", "clearance", "best before bf",
             "hunger games", "secret santa", "bls", "love sale", "madness",
             "juneteenth sale", "july 4th sale", "prime day", "memorial sale",
             "mission", "200 project", "100-bag", "skull-a-palooza", "march madness"],
    "daily": ["daily", "story", "daily:", "happy bhm", "nursing", "sibling", "writer",
              "confession", "beautiful", "trust", "imani", "kwanzaa", "christmas",
              "new year", "braiding", "mental health", "usps", "superheroes",
              "richest woman", "faithful", "scammers", "bald head", "they refunded",
              "no more scam", "they asked", "locessa", "amazon", "free shipping",
              "recap", "check-up", "locs", "affirmation", "pastor"],
    "post": ["thank you", "thankyou", "recap", "thank", "post-sale"]
}

OBJECTIVE_KEYWORDS = {
    "drive_sale": ["sale", "live", "deal", "% off", "flash", "game", "buy", "grab", "shop",
                   "mission", "launch", "clearance", "price", "discount", "$"],
    "build_trust": ["story", "daily", "happy", "heritage", "history", "cultural", "faith",
                    "nursing", "confession", "beautiful", "trust", "sibling"],
    "nurture": ["thank", "recap", "survey", "new artworks", "bag colors", "welcome",
                "new number", "warmup", "teaser"]
}

SMS_SEGMENT_KEYWORDS = {
    "REG": ["registered", "reg ", "reg-", "warmup", "confirmation"],
    "HIGH": ["high engage", "high-engage", "highengage", "sniper", "daily sms"],
    "MASS": ["mass", "teaser - mass", "prospects", "60days"],
    "NS": ["newsub", "new sub", "new-sub", "leak"],
}

# Known campaign series
SERIES_PATTERNS = [
    ("BFCM Hunger Games", ["bfcm", "hunger game", "game "]),
    ("Best Before BF", ["best before bf", "btbf", "best bf"]),
    ("Secret Santa Week", ["secret santa", "ssw"]),
    ("Black Love Sale", ["bls", "black love", "love sale", "treasure hunt"]),
    ("IWD 300 Mission", ["iwd", "300 mission", "international women"]),
    ("March Madness", ["march madness", "skull-a-palooza", "mm #", "mm-"]),
    ("MLK 200 Project", ["mlk", "200 project"]),
    ("Clearance Sale", ["clearance"]),
    ("Cyber Monday", ["cyber monday"]),
    ("Kwanzaa", ["kwanzaa"]),
    ("Christmas Shipping", ["xmas", "christmas", "free shipping"]),
    ("Amazon Gifts", ["amazon"]),
    ("July 4th", ["july 4", "4th sale"]),
    ("Juneteenth", ["juneteenth"]),
    ("Memorial Day", ["memorial"]),
    ("Summer Sale", ["summer sale"]),
    ("Locessa Collection", ["locessa"]),
    ("Legacy Collection", ["legacy"]),
    ("100-Bag Mission", ["100-bag", "100 bag"]),
    ("System Stress Test", ["stress test"]),
    ("Rise & Slay", ["rise & slay", "rise and slay"]),
    ("Faithful Collection", ["faithful"]),
    ("Small LE Launch", ["small le"]),
    ("Afroyla Day", ["afroyla day", "afroyla's day"]),
    ("Inner Circle", ["inner circle", "ic_"]),
]

CHARACTERS = {
    "george": ["george"],
    "nia": ["nia"],
    "alice": ["alice"],
    "keisha": ["keisha"],
    "tasha": ["tasha"],
    "marcus": ["marcus"],
    "eli": ["eli"],
    "dylan": ["dylan"],
}

# ─── CLASSIFICATION FUNCTIONS ───

def classify_phase(name):
    name_lower = name.lower()
    for phase, keywords in PHASE_KEYWORDS.items():
        for kw in keywords:
            if kw in name_lower:
                return phase
    return "daily"  # default

def classify_objective(name, phase):
    name_lower = name.lower()
    if phase == "sale":
        return "drive_sale"
    if phase == "teaser":
        return "nurture"  # teasers nurture + build anticipation
    if phase == "post":
        return "nurture"

    # Check keywords
    for obj, keywords in OBJECTIVE_KEYWORDS.items():
        for kw in keywords:
            if kw in name_lower:
                return obj
    return "build_trust"  # daily stories default to trust

def classify_sms_segment(name):
    name_lower = name.lower()
    for seg, keywords in SMS_SEGMENT_KEYWORDS.items():
        for kw in keywords:
            if kw in name_lower:
                return seg
    return "UNKNOWN"

def identify_series(name):
    name_lower = name.lower()
    for series_name, keywords in SERIES_PATTERNS:
        for kw in keywords:
            if kw in name_lower:
                return series_name
    return "Standalone"

def detect_characters(text):
    if not text:
        return []
    text_lower = text.lower()
    found = []
    for char, keywords in CHARACTERS.items():
        for kw in keywords:
            if kw in text_lower:
                found.append(char)
                break
    return found

def extract_hook_type(subject):
    """Classify subject line / hook type"""
    if not subject:
        return "unknown"
    s = subject.lower()
    if s.startswith('"') or s.startswith("'") or s.startswith('\u201c'):
        return "quote_open"
    if "?" in s:
        return "question"
    if any(w in s for w in ["she ", "he ", "they ", "i ", "my "]):
        return "personal_narrative"
    if any(w in s for w in ["live", "sale", "off", "deal", "$"]):
        return "direct_offer"
    if any(w in s for w in ["last", "final", "ending", "closing"]):
        return "urgency"
    if any(w in s for w in ["survey", "vote", "choose", "pick"]):
        return "engagement"
    if "..." in s or s.endswith("..."):
        return "curiosity_gap"
    return "statement"

def extract_sms_angle(sms_body):
    """Detect SMS angle from content"""
    if not sms_body:
        return "unknown"
    s = sms_body.lower()
    if "george" in s and ("doesn't know" in s or "doesn't know" in s):
        return "george_doesnt_know"
    if "george" in s:
        return "george_review"
    if "alice" in s:
        return "alice_will_find_out"
    if "saved" in s and "you" in s:
        return "i_saved_you_one"
    if "petty" in s or "woke up" in s:
        return "woke_up_petty"
    if "thank" in s and ("you" in s or "showing up" in s):
        return "my_thank_you"
    if "dare" in s or "move fast" in s:
        return "the_dare"
    if "confess" in s or "confession" in s:
        return "the_confessional"
    if "just" in s and any(w in s for w in ["happened", "this morning", "right now"]):
        return "story_text"
    if len(sms_body) < 200:
        return "the_receipt"
    return "mixed"

def calc_sms_length_category(body):
    if not body:
        return "unknown"
    chars = len(body)
    if chars <= 160:
        return "1_segment"
    elif chars <= 320:
        return "2_segments"
    elif chars <= 480:
        return "3_segments"
    else:
        return "4+_segments"

# ─── PROCESS EMAILS ───

print("\nProcessing emails...")
email_analysis = []

for campaign in emails_raw:
    cid = campaign["id"]
    attrs = campaign.get("attributes", {})
    name = attrs.get("name", "")
    status = attrs.get("status", "")
    scheduled = attrs.get("scheduled_at", "")
    date = scheduled[:10] if scheduled else ""

    # Get message content
    msg = messages_by_id.get(cid, {})
    subject = msg.get("subject", "")
    preview = msg.get("text_preview", "")
    from_label = msg.get("from_label", "")
    html_length = msg.get("html_length", 0)

    # Get metrics
    met = metrics_by_id.get(cid, {})

    # Classify
    phase = classify_phase(name)
    objective = classify_objective(name, phase)
    series = identify_series(name)
    hook_type = extract_hook_type(subject)
    characters = detect_characters(subject + " " + preview)

    entry = {
        "id": cid,
        "channel": "email",
        "name": name,
        "date": date,
        "status": status,
        "phase": phase,
        "objective": objective,
        "series": series,
        "subject": subject,
        "preview": preview[:300] if preview else "",
        "from_label": from_label,
        "html_length": html_length,
        "hook_type": hook_type,
        "characters": characters,
        # Metrics
        "has_metrics": bool(met),
        "open_rate": met.get("open_rate"),
        "click_rate": met.get("click_rate"),
        "recipients": met.get("recipients"),
        "revenue": met.get("conversion_value"),
        "conversions": met.get("conversion_uniques"),
        "unsubscribes": met.get("unsubscribes"),
        "unsub_rate": met.get("unsubscribe_rate"),
    }

    email_analysis.append(entry)

print(f"  Processed: {len(email_analysis)} emails")

# ─── PROCESS SMS ───

print("\nProcessing SMS...")
sms_analysis = []

# Index SMS content by guid
sms_content_by_guid = {s["guid"]: s for s in sms_content}

for flow in sms_flows:
    guid = flow.get("guid", "")
    name = flow.get("name", "")

    # Get scraped content
    content = sms_content_by_guid.get(guid, {})
    sms_body = content.get("sms_body", "")
    segment_text = content.get("segment", "")
    scrape_date = content.get("date", "")

    # API metrics
    total_sent = flow.get("total_sent", 0)
    revenue = flow.get("revenue", 0)
    orders = flow.get("orders", 0)
    total_clicks = flow.get("total_clicks", 0)
    unique_clicks = flow.get("unique_clicks", 0)
    total_unsubs = flow.get("total_unsubs", 0)

    # Calculate rates
    ctr = total_clicks / total_sent if total_sent > 0 else 0
    uctr = unique_clicks / total_sent if total_sent > 0 else 0
    cvr = orders / total_sent if total_sent > 0 else 0
    unsub_rate = total_unsubs / total_sent if total_sent > 0 else 0
    rps = revenue / total_sent if total_sent > 0 else 0

    # Classify
    phase = classify_phase(name)
    objective = classify_objective(name, phase)
    series = identify_series(name)
    sms_segment = classify_sms_segment(name)
    characters = detect_characters(sms_body)
    angle = extract_sms_angle(sms_body)
    length_cat = calc_sms_length_category(sms_body)

    # Extract date from name or scrape
    date = ""
    date_match = re.match(r'(\d{1,2}/\d{1,2}/\d{4})', name)
    if date_match:
        try:
            d = datetime.strptime(date_match.group(1), "%m/%d/%Y")
            date = d.strftime("%Y-%m-%d")
        except:
            pass
    if not date:
        date_match2 = re.match(r'(\d{1,2}/\d{1,2}/\d{4})', name.replace("|", "").strip())
        if date_match2:
            try:
                d = datetime.strptime(date_match2.group(1), "%d/%m/%Y")
                date = d.strftime("%Y-%m-%d")
            except:
                pass
    if not date and scrape_date:
        # Parse "Dec 10, 2025, 12:47 PM" format
        try:
            d = datetime.strptime(scrape_date.split(",")[0] + "," + scrape_date.split(",")[1], "%b %d, %Y")
            date = d.strftime("%Y-%m-%d")
        except:
            pass
    if not date:
        created = flow.get("created_at", "")
        date = created[:10] if created else ""

    entry = {
        "id": guid,
        "channel": "sms",
        "name": name,
        "date": date,
        "phase": phase,
        "objective": objective,
        "series": series,
        "sms_segment": sms_segment,
        "sms_body": sms_body,
        "sms_body_length": len(sms_body) if sms_body else 0,
        "sms_length_category": length_cat,
        "sms_angle": angle,
        "characters": characters,
        "segment_name": segment_text,
        # Metrics
        "has_metrics": True,
        "total_sent": total_sent,
        "revenue": revenue,
        "orders": orders,
        "total_clicks": total_clicks,
        "unique_clicks": unique_clicks,
        "ctr": round(ctr, 4),
        "uctr": round(uctr, 4),
        "cvr": round(cvr, 4),
        "rps": round(rps, 4),
        "unsubs": total_unsubs,
        "unsub_rate": round(unsub_rate, 4),
    }

    sms_analysis.append(entry)

print(f"  Processed: {len(sms_analysis)} SMS")

# ─── COMBINE ───

all_content = email_analysis + sms_analysis
print(f"\nTotal content pieces: {len(all_content)}")

# ─── SAVE RAW ANALYSIS ───

output_file = os.path.join(OUT, "content-analysis.json")
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(all_content, f, indent=2, ensure_ascii=False)
print(f"\n💾 Saved: {output_file}")

# ─── GENERATE SUMMARY ───

print("\nGenerating summary...")

lines = []
lines.append(f"# Content Analysis — Afroyla — {datetime.now().strftime('%Y-%m-%d')}")
lines.append("")
lines.append(f"**Total: {len(all_content)} content pieces** ({len(email_analysis)} emails + {len(sms_analysis)} SMS)")
lines.append("")

# By Channel
lines.append("## By Channel")
lines.append("")
lines.append("| Channel | Count | With Metrics |")
lines.append("|---------|-------|-------------|")
email_w_metrics = len([e for e in email_analysis if e["has_metrics"]])
lines.append(f"| Email | {len(email_analysis)} | {email_w_metrics} |")
lines.append(f"| SMS | {len(sms_analysis)} | {len(sms_analysis)} |")

# By Phase
lines.append("")
lines.append("## By Phase")
lines.append("")
phase_counts = Counter(c["phase"] for c in all_content)
lines.append("| Phase | Email | SMS | Total |")
lines.append("|-------|-------|-----|-------|")
for phase in ["teaser", "sale", "daily", "post"]:
    e_count = len([c for c in email_analysis if c["phase"] == phase])
    s_count = len([c for c in sms_analysis if c["phase"] == phase])
    lines.append(f"| {phase.title()} | {e_count} | {s_count} | {e_count + s_count} |")

# By Objective
lines.append("")
lines.append("## By Objective")
lines.append("")
lines.append("| Objective | Count |")
lines.append("|-----------|-------|")
for obj, count in Counter(c["objective"] for c in all_content).most_common():
    lines.append(f"| {obj} | {count} |")

# By Series
lines.append("")
lines.append("## By Campaign Series")
lines.append("")
series_counts = Counter(c["series"] for c in all_content)
lines.append("| Series | Email | SMS | Total |")
lines.append("|--------|-------|-----|-------|")
for series, total in series_counts.most_common(20):
    e = len([c for c in email_analysis if c["series"] == series])
    s = len([c for c in sms_analysis if c["series"] == series])
    lines.append(f"| {series} | {e} | {s} | {total} |")

# SMS Segments
lines.append("")
lines.append("## SMS by Segment")
lines.append("")
seg_counts = Counter(c["sms_segment"] for c in sms_analysis)
lines.append("| Segment | Count | Avg RPS | Avg UCTR | Avg Unsub |")
lines.append("|---------|-------|---------|----------|-----------|")
for seg in ["REG", "HIGH", "MASS", "NS", "UNKNOWN"]:
    items = [c for c in sms_analysis if c["sms_segment"] == seg]
    if not items:
        continue
    avg_rps = sum(c["rps"] for c in items) / len(items)
    avg_uctr = sum(c["uctr"] for c in items) / len(items)
    avg_unsub = sum(c["unsub_rate"] for c in items) / len(items)
    lines.append(f"| {seg} | {len(items)} | ${avg_rps:.4f} | {avg_uctr*100:.1f}% | {avg_unsub*100:.2f}% |")

# SMS Angles
lines.append("")
lines.append("## SMS by Angle")
lines.append("")
angle_counts = Counter(c["sms_angle"] for c in sms_analysis)
lines.append("| Angle | Count | Avg Revenue | Avg UCTR |")
lines.append("|-------|-------|-------------|----------|")
for angle, count in angle_counts.most_common():
    items = [c for c in sms_analysis if c["sms_angle"] == angle]
    avg_rev = sum(c["revenue"] for c in items) / len(items)
    avg_uctr = sum(c["uctr"] for c in items) / len(items)
    lines.append(f"| {angle} | {count} | ${avg_rev:,.0f} | {avg_uctr*100:.1f}% |")

# Email Hook Types
lines.append("")
lines.append("## Email Hook Types")
lines.append("")
hook_counts = Counter(c["hook_type"] for c in email_analysis)
lines.append("| Hook Type | Count | Avg Open Rate | Avg Click Rate | Avg Revenue |")
lines.append("|-----------|-------|---------------|----------------|-------------|")
for hook, count in hook_counts.most_common():
    items = [c for c in email_analysis if c["hook_type"] == hook and c["has_metrics"]]
    if items:
        avg_or = sum(c["open_rate"] for c in items) / len(items)
        avg_cr = sum(c["click_rate"] for c in items) / len(items)
        avg_rev = sum(c["revenue"] or 0 for c in items) / len(items)
        lines.append(f"| {hook} | {count} ({len(items)} w/metrics) | {avg_or*100:.1f}% | {avg_cr*100:.2f}% | ${avg_rev:,.0f} |")
    else:
        lines.append(f"| {hook} | {count} | — | — | — |")

# Character Usage
lines.append("")
lines.append("## Character Usage")
lines.append("")
char_counts = defaultdict(lambda: {"email": 0, "sms": 0})
for c in all_content:
    for char in c.get("characters", []):
        char_counts[char][c["channel"]] += 1
lines.append("| Character | Email | SMS | Total |")
lines.append("|-----------|-------|-----|-------|")
for char in sorted(char_counts.keys()):
    e = char_counts[char]["email"]
    s = char_counts[char]["sms"]
    lines.append(f"| {char.title()} | {e} | {s} | {e + s} |")

# Top Performers — Email (by revenue)
lines.append("")
lines.append("## Top 20 Emails by Revenue")
lines.append("")
emails_with_rev = [c for c in email_analysis if c.get("revenue") and c["revenue"] > 0]
emails_with_rev.sort(key=lambda x: x["revenue"], reverse=True)
lines.append("| Date | Name | Subject | Revenue | Open% | Click% | Phase | Series |")
lines.append("|------|------|---------|---------|-------|--------|-------|--------|")
for c in emails_with_rev[:20]:
    lines.append(f"| {c['date']} | {c['name'][:30]} | {c['subject'][:35]} | ${c['revenue']:,.0f} | {c['open_rate']*100:.1f}% | {c['click_rate']*100:.2f}% | {c['phase']} | {c['series'][:20]} |")

# Top Performers — SMS (by revenue)
lines.append("")
lines.append("## Top 20 SMS by Revenue")
lines.append("")
sms_with_rev = sorted(sms_analysis, key=lambda x: x["revenue"], reverse=True)
lines.append("| Date | Name | Revenue | Orders | UCTR | RPS | Segment | Angle |")
lines.append("|------|------|---------|--------|------|-----|---------|-------|")
for c in sms_with_rev[:20]:
    lines.append(f"| {c['date']} | {c['name'][:35]} | ${c['revenue']:,.0f} | {c['orders']} | {c['uctr']*100:.1f}% | ${c['rps']:.3f} | {c['sms_segment']} | {c['sms_angle'][:15]} |")

# Bottom Performers — Email (by open rate, excluding low-send campaigns)
lines.append("")
lines.append("## Bottom 20 Emails by Open Rate (min 50K recipients)")
lines.append("")
emails_with_or = [c for c in email_analysis if c.get("open_rate") and c.get("recipients", 0) > 50000]
emails_with_or.sort(key=lambda x: x["open_rate"])
lines.append("| Date | Name | Subject | Open% | Click% | Revenue | Phase |")
lines.append("|------|------|---------|-------|--------|---------|-------|")
for c in emails_with_or[:20]:
    lines.append(f"| {c['date']} | {c['name'][:30]} | {c['subject'][:35]} | {c['open_rate']*100:.1f}% | {c['click_rate']*100:.2f}% | ${c.get('revenue',0) or 0:,.0f} | {c['phase']} |")

# Phase × Channel performance matrix
lines.append("")
lines.append("## Performance Matrix: Phase × Channel")
lines.append("")
lines.append("### Email Performance by Phase")
lines.append("| Phase | Count | Avg Open% | Avg Click% | Avg Revenue | Avg Unsub% |")
lines.append("|-------|-------|-----------|------------|-------------|------------|")
for phase in ["teaser", "sale", "daily", "post"]:
    items = [c for c in email_analysis if c["phase"] == phase and c["has_metrics"]]
    if items:
        avg_or = sum(c["open_rate"] for c in items) / len(items)
        avg_cr = sum(c["click_rate"] for c in items) / len(items)
        avg_rev = sum(c["revenue"] or 0 for c in items) / len(items)
        avg_unsub = sum(c.get("unsub_rate", 0) or 0 for c in items) / len(items)
        lines.append(f"| {phase.title()} | {len(items)} | {avg_or*100:.1f}% | {avg_cr*100:.2f}% | ${avg_rev:,.0f} | {avg_unsub*100:.3f}% |")

lines.append("")
lines.append("### SMS Performance by Phase × Segment")
lines.append("| Phase | Segment | Count | Avg RPS | Avg UCTR | Avg CVR | Avg Unsub% |")
lines.append("|-------|---------|-------|---------|----------|---------|------------|")
for phase in ["teaser", "sale", "daily", "post"]:
    for seg in ["REG", "HIGH", "MASS", "NS", "UNKNOWN"]:
        items = [c for c in sms_analysis if c["phase"] == phase and c["sms_segment"] == seg]
        if items:
            avg_rps = sum(c["rps"] for c in items) / len(items)
            avg_uctr = sum(c["uctr"] for c in items) / len(items)
            avg_cvr = sum(c["cvr"] for c in items) / len(items)
            avg_unsub = sum(c["unsub_rate"] for c in items) / len(items)
            lines.append(f"| {phase.title()} | {seg} | {len(items)} | ${avg_rps:.4f} | {avg_uctr*100:.1f}% | {avg_cvr*100:.2f}% | {avg_unsub*100:.2f}% |")

# Monthly trends
lines.append("")
lines.append("## Monthly Trends")
lines.append("")
lines.append("### Email by Month")
lines.append("| Month | Count | Avg Open% | Avg Click% | Total Revenue |")
lines.append("|-------|-------|-----------|------------|---------------|")
monthly = defaultdict(list)
for c in email_analysis:
    month = c["date"][:7]
    if month:
        monthly[month].append(c)
for month in sorted(monthly.keys()):
    items = monthly[month]
    w_met = [c for c in items if c["has_metrics"]]
    if w_met:
        avg_or = sum(c["open_rate"] for c in w_met) / len(w_met)
        avg_cr = sum(c["click_rate"] for c in w_met) / len(w_met)
        total_rev = sum(c["revenue"] or 0 for c in w_met)
        lines.append(f"| {month} | {len(items)} ({len(w_met)} w/met) | {avg_or*100:.1f}% | {avg_cr*100:.2f}% | ${total_rev:,.0f} |")
    else:
        lines.append(f"| {month} | {len(items)} | — | — | — |")

lines.append("")
lines.append("### SMS by Month")
lines.append("| Month | Count | Total Sent | Total Revenue | Total Orders | Avg UCTR |")
lines.append("|-------|-------|-----------|---------------|-------------|----------|")
sms_monthly = defaultdict(list)
for c in sms_analysis:
    month = c["date"][:7]
    if month:
        sms_monthly[month].append(c)
for month in sorted(sms_monthly.keys()):
    items = sms_monthly[month]
    total_sent = sum(c["total_sent"] for c in items)
    total_rev = sum(c["revenue"] for c in items)
    total_orders = sum(c["orders"] for c in items)
    avg_uctr = sum(c["uctr"] for c in items) / len(items) if items else 0
    lines.append(f"| {month} | {len(items)} | {total_sent:,} | ${total_rev:,.0f} | {total_orders:,} | {avg_uctr*100:.1f}% |")

summary_file = os.path.join(OUT, "content-analysis-summary.md")
with open(summary_file, 'w', encoding='utf-8') as f:
    f.write("\n".join(lines))
print(f"💾 Saved: {summary_file}")

# ─── FINAL STATS ───

print(f"""
═══════════════════════════════════════
 CONTENT ANALYSIS COMPLETE
═══════════════════════════════════════
 Total pieces: {len(all_content)}
   Email: {len(email_analysis)} ({email_w_metrics} with metrics)
   SMS: {len(sms_analysis)} ({len([s for s in sms_analysis if s['sms_body']])} with content)

 Phase distribution:
   Teaser: {phase_counts.get('teaser',0)}
   Sale: {phase_counts.get('sale',0)}
   Daily: {phase_counts.get('daily',0)}
   Post: {phase_counts.get('post',0)}

 Series: {len(series_counts)} unique
 Output: {output_file}
         {summary_file}
═══════════════════════════════════════
""")
