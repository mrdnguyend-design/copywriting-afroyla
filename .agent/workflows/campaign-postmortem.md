---
description: Campaign Post-Mortem — Close sprint (T+3), fill Section 8, propagate learnings
---

# CAMPAIGN POST-MORTEM WORKFLOW

> **Ai chạy:** Michelle (cùng AI agent)
> **Khi nào:** T+3 (3 ngày sau sale close), trước khi mở campaign mới
> **Input:** Living doc `planning/campaigns/[YYYY-MM]-[slug].md` đã filled Sections 1-6 + sale executed
> **Output:** Section 8 filled + downstream propagation (mechanic-history, post-mortems, monthly-insights, performance-tracking, customer-voices, story-bank)
> **Hard rule:** KHÔNG mở campaign mới cho đến khi `/campaign-postmortem` của campaign trước hoàn thành.

---

## STEP 0: PULL METRICS

### Inputs
- Klaviyo dashboard (manual entry — chờ MCP integration)
- Postscript dashboard
- Shopify orders + inventory
- Customer service inbox (last 5-7 days)

### Actions
- Hỏi Michelle nhập / paste:
  - Total revenue (sale window)
  - Per-email metrics (sends, open %, click %, conv %, revenue, RPS)
  - Per-SMS metrics (segment, sends, parts, cost, click %, revenue)
  - Order count actual
  - Cap status: order cap hit? when? inventory leftover?
  - Top 3 best-performing emails/SMS
  - Bottom 3
- Save raw data temporarily for Step 1-2 fill

### Output
- Metrics ready to populate Section 8.1 + 8.2

---

## STEP 1: FILL SECTION 8.1 + 8.2 (Revenue + Metrics)

### Inputs
- Step 0 metrics
- Section 1.6 forecast (Conservative/Target/Stretch + sales-curve)

### Actions

**1.1 — Section 8.1 Revenue Actual vs Forecast**
- Fill table: Conservative/Target/Stretch forecast vs actual + variance + hit/miss
- Fill sales-curve actual table: forecast % vs actual % per day + variance
- Fill cap status: order cap hit time, inventory exhaustion details

**1.2 — Section 8.2 Email + SMS Metrics**
- Fill metrics table cho mỗi email + SMS sent during sprint window
- Identify Top 3 + Bottom 3 by RPS or revenue
- Note any anomalies (unexpected winner, surprising flop)

### Output
- Sections 8.1 + 8.2 filled

---

## STEP 2: MECHANIC RETROSPECTIVE (Section 8.3)

### Inputs
- Section 1.3 (mechanic chosen + novelty audit)
- Step 0 metrics + customer service signals

### Actions
- Hỏi Michelle:
  - Did mechanic create intended behavior? (e.g., "Text-to-register drove X registrations vs Y target — Z% hit")
  - Customer feedback signals? (complaints về cap confusion? love về exclusivity? confusion về subset pricing?)
  - **Verdict:** Re-use / With variation / Retire
    - If re-use: when next safe? (suggest based on cooldown)
    - If with variation: what specifically change?
    - If retire: why?
- Fill Section 8.3

### Output
- Section 8.3 filled
- Verdict captured for Step 4 mechanic-history update

---

## STEP 3: HARVEST CUSTOMER VOICES + STORY MOMENTS (Sections 8.4 + 8.5)

### Inputs
- Customer service inbox feedback
- Social mentions (FB/IG comments + DMs)
- Replies to campaign emails
- Order notes / personalization requests

### Actions

**3.1 — Customer Voices Harvest (Section 8.4)**
- Categorize new voices by type:
  - Stories → `customer-voices/stories/[YYYY-MM].md`
  - Compliments → `customer-voices/compliments/[YYYY-MM].md`
  - Product feedback → `customer-voices/product-feedback/[YYYY-MM].md`
  - Suggestions → `customer-voices/suggestions/[YYYY-MM].md`
- Format per entry: ID (e.g., S-MMDD), Name/City, Quote (raw, with typos), Tags, Potential Hook ⭐ rating, Used: NO
- Append to relevant files
- Add LINK references in Section 8.4

**3.2 — Story Moments Harvest (Section 8.5)**
- Identify story-worthy moments from sprint:
  - Customer reactions ("I told my children what to get me")
  - Operations beats (warehouse pack-out scenes)
  - Character moments (Alice budget panic → relief)
  - Cultural angles surfaced
- Create new SEEDs in `story-bank.md` with S-XXX IDs
- Add LINK references in Section 8.5

### Output
- Sections 8.4 + 8.5 filled
- New entries in customer-voices/ files
- New SEEDs in story-bank.md

---

## STEP 4: PROPAGATE LEARNINGS + CLOSE (Sections 8.6 + 8.7)

### Inputs
- All prior sections of living doc (1-7) + filled Sections 8.1-8.5
- `learnings/post-mortems.md`
- `learnings/monthly-insights.md`
- `knowledge/core/performance-tracking.md`
- `learnings/style-rules.md`

### Actions

**4.1 — Append entry to `learnings/post-mortems.md`** (Section 8.6)

> Format = campaign-level (khác từng-email post-mortem hiện có). Append at TOP under `## Entries`.

```markdown
### [DDMMYY] CAMPAIGN — [Campaign Name] — "[1-line takeaway hook]"

- **Type:** Campaign post-mortem (sprint close)
- **Window:** [T-20 dates] → [T+3 dates]
- **Mechanic:** [from Section 1.3]
- **Tier hit:** [Conservative / Target / Stretch — actual $ vs forecast $, variance %]
- **Sales-curve match:** [forecast vs actual per day]
- **Top performer(s):** [from Section 8.2]
- **Bottom performer(s):** [from Section 8.2]
- **What worked:**
  - [3-5 bullets]
- **What broke / friction:**
  - [3-5 bullets — sequence flips, oversell incidents, character canonization issues, copy iterations cao bất thường]
- **Mechanic verdict:** [Re-use / With variation / Retire — see Section 8.3]
- **Decision log highlights:** [pull 2-3 key entries from Section 7]
- **Next campaign implications:** [what should change next time]
- **Tags:** #campaign-postmortem #[mechanic-id] #[campaign-slug] #[any other relevant]
- **Living doc:** [LINK: planning/campaigns/[YYYY-MM]-[slug].md]
```

**4.2 — Update `learnings/monthly-insights.md`** [if month-end]
- If sprint closes within last week of month: append insight summary to monthly-insights.md
- Format: 1 short paragraph per campaign — what moved the needle, what to repeat/avoid

**4.3 — Update `knowledge/core/performance-tracking.md`**
- Add row to monthly roll-up: campaign revenue, sends, cost, ROI
- Update RPS reference rates if sprint sample size justifies (e.g., sale RPS calculated > 100 sends)

**4.4 — Update `learnings/style-rules.md`** [optional, only if pattern emerged]
- If campaign surfaced a NEW rule (vd: "FAQ format only when context-heavy day, max 5 Qs"), add as Rule #N
- Reference: `learnings/style-rules.md` numbering convention

**4.5 — Update `planning/campaigns/mechanic-history.md` (Section 8.7)**
- Append at TOP of Section 2 used-history table:
  ```
  | [sale start date] | `[YYYY-MM-slug]` | [M0X (+ combinations)] | [variant note 1 line] | [outcome 1-5⭐ + 1-line reason] | [LINK: living doc Section 8] | [next safe re-use date = sale_start + 6 months] |
  ```
- Update Section 3 lookup table (re-derive from Section 2)
- Outcome rating examples:
  - ⭐⭐⭐⭐⭐ = exceeded Stretch + clean execution
  - ⭐⭐⭐⭐ = hit Target + minor friction
  - ⭐⭐⭐ = hit Conservative + notable issues
  - ⭐⭐ = missed Conservative
  - ⭐ = significant problems (reputational, operational)

**4.6 — Update Story Bank (`knowledge/core/story-bank.md`)**
- Move CAMPAIGN-RESERVED items used → USED status (with date + email reference)
- Confirm new SEEDs from Step 3.2 are listed

**4.7 — Close living doc**
- Update Section 8.7 with mechanic-history link + outcome rating + next safe re-use date
- Update Status: `EXECUTING` → `CLOSED`
- Update Last updated timestamp

### Output
- `learnings/post-mortems.md` has new campaign-level entry at top
- `mechanic-history.md` has new entry, lookup updated
- `performance-tracking.md` updated
- `story-bank.md` reservations cleared, new SEEDs listed
- Living doc Status: CLOSED

---

## STEP 5: PRESENT SUMMARY + UNBLOCK NEXT CAMPAIGN

### Actions
- Present 1-page summary to Michelle:
  - Tier hit + variance
  - Mechanic verdict
  - Top 3 lessons
  - Next campaign implications
- Confirm: Status CLOSED → next `/campaign-plan` unblocked
- If next campaign already in monthly strategy Section 3: suggest "Run `/campaign-plan` cho [next campaign] khi sẵn sàng (T-20 = [date])"

### Output
- Sprint formally closed
- Next campaign workflow unblocked

---

## BEHAVIOR RULES

- **Hard block:** Cannot start `/campaign-plan` for new campaign while previous campaign Status != CLOSED. Reference `campaign-playbook.md` Section 7 Risk Register.
- **Outcome rating is honest, not flattering.** ⭐⭐ for missing Conservative is a learning signal, not a failure to hide.
- **Customer voices harvest is mandatory** — even if "no major signals," document "checked inbox, no notable patterns" (negative result is also data).
- **Mechanic-history entry must be appended** — this is the cross-campaign memory that prevents repeat. Skipping breaks novelty enforcement for next campaign.
- **If post-mortem reveals NEW style rule:** add to `style-rules.md` immediately. Don't wait — pattern is freshest now.
- **If sprint had a sequence flip (Section 7 Decision Log):** explicitly list under "What broke / friction" in 4.1, even if outcome was positive. The PROCESS lesson matters separately from the OUTCOME.

---

## NEXT STEPS AFTER `/campaign-postmortem` COMPLETES

1. Review Section 8 with Michelle one more time before considering CLOSED
2. If month-end: also run `/monthly-strategy` for next month with this learnings input
3. Next campaign trigger: `/campaign-plan` for [next slug] at T-20 of next sale
