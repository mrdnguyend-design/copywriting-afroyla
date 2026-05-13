# CAMPAIGN MASTER TEMPLATE — Living Doc

> **Mục đích:** Skeleton cho mỗi campaign tại `planning/campaigns/[YYYY-MM]-[slug].md`. Mỗi campaign = 1 file duy nhất, sections grow theo phase T-20 → T+3. Xem `knowledge/core/campaign-playbook.md` cho OS spec đầy đủ.
>
> **Cách dùng:** Copy toàn bộ skeleton bên dưới sang file mới. Workflow `/campaign-plan` sẽ guide fill từng section. Mọi thay đổi sau STRATEGY-LOCK đi vào Section 7 Decision Log (timestamped).
>
> **Naming:** `[YYYY-MM]-[campaign-slug].md` — ví dụ `2026-04-mothers-day-sale.md`, `2026-11-black-friday.md`.
>
> **Drafts folder:** `[YYYY-MM]-[campaign-slug]-drafts/` chứa email/SMS drafts (`teaser_*.md`, `warmup_*.md`, `sale_*.md`, `sms_*.md`).

---

## PLACEHOLDER SYNTAX

- `[FILL: ...]` — content phải fill khi đến phase tương ứng
- `[OPTIONAL: ...]` — chỉ fill nếu áp dụng
- `[AUTO: ...]` — workflow command tự fill
- `[LINK: ...]` — file path hoặc anchor đến file khác

---

# === SKELETON START — copy từ đây ===

# [FILL: Campaign Name] — [FILL: MMM DD-DD, YYYY]

> **Status:** STRATEGY-DRAFT
> **Last updated:** [AUTO: YYYY-MM-DD HH:MM]
> **Owner:** Michelle + AI agent
> **Playbook reference:** `knowledge/core/campaign-playbook.md`

---

## 0. Quick Reference

| Field | Value |
|-------|-------|
| **Sale dates** | [FILL: e.g., Apr 21-23, 2026 (Tue-Thu), 10:00 AM ET → 11:59 PM ET Apr 23] |
| **Campaign type** | [FILL: Gamified / Mission / Flash / Themed / Clearance] |
| **Hero offer (1 line)** | [FILL: e.g., "Wallets from $9.95, Bags from $19.95 — 80% off, registered queens only"] |
| **Mechanic** | [FILL: M0X mechanic name from mechanic-history.md] |
| **Target list** | [FILL: e.g., REG only ~5K, gate via text MOM → 94923] |
| **Tension cap(s)** | [FILL: e.g., 1,000 orders + 11:59 PM Apr 23 hard close] |
| **Current phase** | [AUTO: T-20 STRATEGY / T-17 BRIEF / T-14 ADS / T-10 TEASER / T-5 WARMUP / T-0 LIVE / T+3 POST-MORTEM / CLOSED] |
| **Linked monthly** | [LINK: planning/monthly/YYYY-MM-strategy.md Section 3] |
| **Drafts folder** | [LINK: planning/campaigns/YYYY-MM-slug-drafts/] |

---

## 1. Strategy [filled T-20]

> **Gate:** Phase này pass 4 câu hỏi cuối Section 1.7 mới được lock.
> **Reference:** `campaign-playbook.md` Section 3.1.

### 1.1 Campaign Identity

- **Name:** [FILL]
- **Positioning (1 dòng):** [FILL: e.g., "Invitation to a dinner party, not a doorbuster"]
- **Why this campaign, why now:** [FILL: cultural moment? inventory clear? heritage tie-in? cash flow?]
- **Target segment(s):** [FILL: REG / HIGH / MASS / NS / mix]
- **Expected segment growth:** [FILL: e.g., REG 1.5K → 5K via Apr 10-20 FB Ads push]

### 1.2 Offer Architecture

| Tier | Product Scope | Original Price | Sale Price | Discount % |
|------|---------------|----------------|-----------|-----------|
| [FILL] | [FILL] | [FILL] | [FILL] | [FILL] |

- **Hero products (3-5 named):** [FILL: e.g., Fahari, Barakaya, Imarimom, Godfidence]
- **Bundle/gift sets:** [OPTIONAL: structure]
- **Sold-out items (call out):** [OPTIONAL: e.g., Teyana fully out, Kadia Medium out]
- **Inventory commitment:** [FILL: units per SKU sẵn sàng]
- **Operations cap:** [FILL: warehouse fulfillment max orders/day]

### 1.3 Promotion Mechanic + Novelty Audit

**Chosen mechanic(s):** [FILL: M0X (+ M0Y combination if any)]

**Novelty Audit (4 trục, cần ≥2/4 MỚI vs 6 tháng qua):**

| Trục | Last 3-5 campaigns | This campaign | New? |
|------|--------------------|---------------|----|
| **Mechanic** | [AUTO: from mechanic-history.md] | [FILL] | [✅/❌] |
| **Offer** (price tier, discount depth, structure) | [AUTO] | [FILL] | [✅/❌] |
| **Theme** (cultural, seasonal, heritage angle) | [AUTO] | [FILL] | [✅/❌] |
| **Hero Product(s)** | [AUTO] | [FILL] | [✅/❌] |

**Novelty score:** [FILL: X/4] — **Pass if ≥ 2/4. Fail → redesign.**

**Mechanic candidates considered (min 3):**
1. [FILL: candidate + why considered]
2. [FILL]
3. [FILL]

**Why this mechanic chosen:** [FILL: justification]

### 1.4 Tension Numbers

> 1-2 con số căng thẳng chạy suốt campaign. Phải có lý do operational THẬT (không "ends soon!!" giả).

- **Tension #1:** [FILL: e.g., "1,000 orders cap — warehouse capacity before May 10 Mother's Day"]
- **Tension #2:** [OPTIONAL: e.g., "Hard close 11:59 PM Apr 23 — no extensions"]
- **Source of scarcity:** [FILL: real operational constraint]

### 1.5 Hero Story Spine

> Câu chuyện chính kéo dài teaser → warmup → sale (KHÔNG phải 1 email lẻ).

- **Spine (1 paragraph):** [FILL: e.g., "Michelle 'lỡ tay' hạ giá quá sâu → Alice CFO panic → Dylan IT khóa Michelle → khách 'được đưa qua cửa sau' vào kho, không phải landing thương mại"]
- **Story arc beats (8-10 emails worth):**
  - T-10: [FILL: opening beat]
  - T-9: [FILL]
  - T-8: [FILL]
  - T-7: [FILL]
  - T-6: [FILL]
  - T-5: [FILL]
  - T-4: [FILL]
  - T-3: [FILL]
  - T-2: [FILL]
  - T-1: [FILL: final beat]

**Can spine pull 8-10 emails without repeating?** [FILL: Yes/No + reasoning]

### 1.6 Success Metrics + Sales-Curve Forecast (Throssell)

| Tier | Revenue Target | Orders Target | Notes |
|------|---------------|---------------|-------|
| **Conservative** | $[FILL] | [FILL] | Floor — campaign "worked" |
| **Target** | $[FILL] | [FILL] | Realistic mid-point |
| **Stretch** | $[FILL] | [FILL] | Best case |

**Sales-curve forecast (% of total revenue per day):**

| Day | % of Revenue | Cumulative | Notes |
|-----|------------|------------|-------|
| T-0 (launch) | [FILL: e.g., 50%] | 50% | Highest concentration |
| T+1 | [FILL: e.g., 30%] | 80% | Day 2 push + new SKU drops |
| T+2 (close) | [FILL: e.g., 20%] | 100% | Final push + cap close |

**Cap targets:**
- Order cap target hit time: [FILL: e.g., "T+1 evening if Conservative, T+2 noon if Target"]
- Inventory exhaustion expected: [FILL: which SKUs will sell out first]

### 1.7 STRATEGY LOCK SIGN-OFF

**4-question gate (must all pass before lock):**

- [ ] **Q1:** Khách CŨ vào lần này thấy gì MỚI vs campaign trước? (Novelty score ≥ 2/4)
- [ ] **Q2:** Tension Numbers tạo cảm giác khan hiếm THẬT? (operational basis confirmed)
- [ ] **Q3:** Hero Story spine kéo 8-10 emails không lặp?
- [ ] **Q4:** Inventory + Operations sign-off?

**Locked by:** [FILL: Michelle] **on** [AUTO: YYYY-MM-DD]

> Sau khi lock: mọi thay đổi đi vào Section 7 Decision Log. Status → STRATEGY-LOCKED.

---

## 2. Creative Brief [filled T-17]

> **Reference:** `campaign-playbook.md` Section 3.2. **Proven format:** `planning/campaigns/2026-04-mdsale-lp-brief.md` (MD Sale).

### 2.1 Event Description (1 paragraph)

[FILL: dates, time, gate đăng ký, cap, "list only" feel — sample MD Sale: "Early Mother's Day Sale là đợt sale lớn nhất năm, chạy 3 ngày 21-23/4, mở 10:00 AM ET. Sale riêng cho list đã đăng ký, gate đóng tối 20/4, cap 5,000."]

### 2.2 Offer Detail

[FILL: copy từ Section 1.2 + thêm chi tiết product names, sold-out callouts]

### 2.3 Page Experience [OPTIONAL — chỉ fill nếu có LP]

- **Flow:** [FILL: click → browse → checkout]
- **Filter logic:** [FILL: by type wallet/handbag/crossbody/backpack/gift]
- **Anchor product (gateway):** [FILL: e.g., $9.95 wallets — cổng vào]
- **Cross-promote within page:** [FILL: e.g., "Swipe → to see more bag types..."]
- **Post-sale page state:** [FILL: thank-you, no prices, no buy links]

### 2.4 Voice + Feel

- **Brand identity reminder:** [FILL: e.g., "luxury leather cho phụ nữ da màu 35+, ấm áp, heritage, không ồn ào"]
- **Avoid:** [FILL: e.g., red banner "SALE!!!", blinking countdown QVC-style]
- **Color/typography:** [FILL: e.g., cream / rich brown / gold accent. Serif hero, sans body]
- **Photography:** [FILL: e.g., in-context (trên tay thật), không flat-lay sterile]
- **Voice example (1-2 câu chuẩn):** [FILL: e.g., "Tên sản phẩm Swahili + ý nghĩa cần được đối xử như thơ — italic, có không gian thở"]

### 2.5 Character Map (LOCK NOW — no post-ship canonization)

> **Quan trọng:** Character introduce NEW phải được spec ở đây TRƯỚC, không sau ship. Reference `universe-afroyla-cast.md`.

| Character | Role in this campaign | Phase appearances | Constraints |
|-----------|----------------------|-------------------|-------------|
| **Michelle** | [FILL: narrator, founder vulnerability] | All phases | Always 1st-person |
| **George** | [FILL: e.g., comedy P.S., naming bits] | [FILL: T-10, T-7, T-3] | Max 3/sequence |
| **Alice (CFO)** | [FILL: budget panic during sale] | [FILL] | Max 2/sequence |
| **Keisha (Designer)** | [FILL: product reveals] | [FILL] | Product-relevant only |
| **Tasha (Sale energy)** | [FILL] | [FILL: sale days only] | — |
| **Marcus (Warehouse)** | [FILL] | [FILL: T-5 + sale days] | — |
| **Nia** | [FILL: cultural tie-ins] | [FILL] | Max 2/sequence |
| **[NEW character if any]** | [FILL: spec voice + role + appearance rules] | [FILL] | Lock NOW, update cast bible AFTER |

### 2.6 BRIEF LOCK SIGN-OFF

**3-question gate:**

- [ ] **Q1:** IT/Designer đọc xong hiểu page trông thế nào? (no wireframe needed, principles enough)
- [ ] **Q2:** Copy team đọc xong biết Hero Story spine + character arc cho 8-10 emails?
- [ ] **Q3:** Có example ngôn ngữ (1-2 câu chuẩn) cho voice?

**Locked by:** [FILL: Michelle] **on** [AUTO: YYYY-MM-DD]

---

## 3. FB Ads Plan [filled T-14]

### 3.1 Creative Direction

- **Image/video direction:** [FILL: must reference Section 2.4 voice + 2.5 characters]
- **Hook copy variants:** [FILL: 3-5 hook lines]
- **CTA destination:** [FILL: registration page URL]

### 3.2 Budget + Schedule

| Period | Daily Budget | Total | Goal |
|--------|-------------|-------|------|
| [FILL: T-14 to T-7] | $[FILL] | $[FILL] | [FILL: e.g., 3K registrations] |
| [FILL: T-7 to T-1] | $[FILL] | $[FILL] | [FILL: e.g., final 2K push to 5K cap] |

### 3.3 UTM + Tracking

- **UTM tagging plan:** [FILL]
- **Tracking pixel verified:** [ ]
- **Landing/registration URL:** [FILL]

---

## 4. Teaser Plan [filled T-10]

> **Reference:** `campaign-playbook.md` Section 3.3 + `feedback_teaser_context_checklist.md` (3-element rule).

### 4.1 Sequence Table (8-10 emails)

> **3-Element Checklist (BẮT BUỘC mỗi teaser):** Private Mechanic + Demand Signal + Prices.

| # | Day | Subject hook | Job | Story Bank ref | Character | 3-Element check |
|---|-----|-------------|-----|----------------|-----------|----------------|
| 1 | T-10 | [FILL] | ANNOUNCE | [R-ID] | Michelle | M:[ ] D:[ ] P:[ ] |
| 2 | T-9 | [FILL] | JUSTIFY | [R-ID] | Michelle + 2nd | M:[ ] D:[ ] P:[ ] |
| 3 | T-8 | [FILL] | TEASE (hero #1) | [R-ID] | Keisha | M:[ ] D:[ ] P:[ ] |
| 4 | T-7 | [FILL] | DRAMATIZE | [R-ID] | Alice | M:[ ] D:[ ] P:[ ] |
| 5 | T-6 | [FILL] | TEASE (hero #2) | [R-ID] | Keisha | M:[ ] D:[ ] P:[ ] |
| 6 | T-5 | [FILL] | PROVE | [R-ID] | Customer | M:[ ] D:[ ] P:[ ] |
| 7 | T-4 | [FILL] | TEASE (hero #3) | [R-ID] | Keisha | M:[ ] D:[ ] P:[ ] |
| 8 | T-3 | [FILL] | PREPARE | [R-ID] | Michelle | M:[ ] D:[ ] P:[ ] |
| 9 | T-2 | [FILL] | TEASE (hero #4) | [R-ID] | Keisha + Michelle | M:[ ] D:[ ] P:[ ] |
| 10 | T-1 | [FILL] | PREPARE (countdown) | [R-ID] | Michelle + Tasha | M:[ ] D:[ ] P:[ ] |

> **Adapt:** Flash/Themed → 3-5 teasers. Gamified → 10-14 teasers. Update table accordingly.

### 4.2 Story Bank Reservation

**Items reserved cho campaign này (mark CAMPAIGN-RESERVED in `story-bank.md`):**

- [FILL: R-XXX "title" — used for teaser #N]
- [FILL: R-XXX]
- ...

**Story Bank health check (before locking teaser plan):**
- READY count after reservation: [FILL: must be ≥ 5 remaining for daily content trong sprint window]
- If < 5 remaining: ⚠️ run `/idea-research` BEFORE locking

### 4.3 Cross-channel SMS pairing

> **Rule:** Mỗi teaser email PHẢI có ít nhất 1 SMS/MASS counterpart cùng ngày HOẶC ngày kế.

| Email # | Email day | SMS day | SMS segment(s) | SMS angle (from `sms-vip-flash-deal-templates.md`) |
|---------|-----------|---------|----------------|---------------------------------------------------|
| 1 | T-10 | T-10 | MASS | [FILL: e.g., #1 I Saved You One] |
| 2 | T-9 | — | — | [skip if email-only day] |
| ... | | | | |

### 4.4 TEASER LOCK SIGN-OFF

**3-question gate:**

- [ ] **Q1:** Đọc liền 8-10 subject lines → có cảm giác arc không?
- [ ] **Q2:** Mỗi email có 3 elements (Mechanic + Demand + Prices)?
- [ ] **Q3:** Character rotation valid (George ≤3, Nia ≤2 trong sequence)?

**Locked by:** [FILL: Michelle] **on** [AUTO: YYYY-MM-DD]

---

## 5. Warmup Plan [filled T-5]

> **Reference:** `campaign-playbook.md` Section 3.4.
> **Khác Teaser:** Warmup gửi cho REG (đã đăng ký) + HIGH (đã warm) — voice closer, urgency higher, ngắn hơn.

### 5.1 REG / HIGH / MASS Sequences

| Day | REG (insider voice) | HIGH (story-first, sale background) | MASS (last-chance + gate close) |
|-----|---------------------|-------------------------------------|---------------------------------|
| T-5 | [FILL: welcome + reminder dates] | [FILL: daily story warm] | [FILL: 1 last-chance teaser] |
| T-4 | [FILL: sneak peek prices] | [FILL: daily story] | — |
| T-3 | [FILL: hero product reveal] | [FILL: daily story] | — |
| T-2 | [FILL: final prep — what to expect] | [FILL: bridge story] | [FILL: 1 final teaser, gate closing] |
| T-1 | [FILL: tomorrow! + link saved] | [FILL: bridge story] | [FILL: gate close warning] |

**Voice rules:**
- **REG:** "Bạn đã đăng ký, dưới đây là gì sẽ diễn ra ngày mai." Insider tone.
- **HIGH:** Story-first, sale là background, không hard-pitch.
- **MASS:** Last chance to register, gate đóng, không tham gia là lỡ.

### 5.2 Cross-channel Timing

> **Avoid conflict:** SMS gửi 11AM mâu thuẫn email gửi 10AM về cùng product?

| Day | Email send time | SMS send time | Conflict check |
|-----|----------------|---------------|----------------|
| T-5 | [FILL] | [FILL] | [✅/⚠️] |
| ... | | | |

### 5.3 WARMUP LOCK SIGN-OFF

**3-question gate:**

- [ ] **Q1:** REG có cảm giác "insider" hay vẫn giống MASS?
- [ ] **Q2:** HIGH có bị spam sale-talk không?
- [ ] **Q3:** Cross-channel timing không conflict?

**Locked by:** [FILL] **on** [AUTO]

---

## 6. Launch Plan [filled T-1]

### 6.1 Sale-day Calendar

> **Cadence reference:** REG ×5 emails over sale window, HIGH ×1-2, MASS ×1 (gate close + post-sale recap).

| Day | REG emails | HIGH emails | MASS emails | Notes |
|-----|-----------|-------------|-------------|-------|
| T-0 (launch) | [FILL: morning launch + flash mid-day + evening update] | [FILL: 1 daily story bridge] | [FILL: gate close announcement] | [FILL] |
| T+1 | [FILL: day-2 with new SKU drops] | [FILL] | — | [FILL] |
| T+2 (close) | [FILL: morning + final push + close warning] | [FILL] | [FILL: 1 thank you / recap] | [FILL] |

### 6.2 SMS Schedule (real-time updates plan)

> **Pattern from March Madness Day 1:** Rapid-fire (10:00, 10:15, 10:45, 11:30, 12:55, 2PM, 7PM, 9PM) for REG + 1 MASS per day.

| Time | Day | Segment | Trigger / Content |
|------|-----|---------|-------------------|
| [FILL: 10:00 AM] | T-0 | REG | [FILL: Launch SMS with link] |
| ... | | | |

### 6.3 Monitoring Triggers

| Metric | Threshold | Action |
|--------|-----------|--------|
| Order cap | [FILL: e.g., 500 orders by T+1 noon] | Pace check: ahead/on/behind |
| Order cap | [FILL: e.g., 900 orders] | Prep cap-close email |
| Inventory | [FILL: e.g., hero SKU sold out] | Update LP + send alert email |
| Inventory | [FILL: oversell risk] | Pause flash + audit Shopify |
| Engagement | [FILL: Day 1 open < 30%] | Send "I owe you an apology" pivot |

### 6.4 Incident Response Runbook

> **Pre-define responses for known risks** (avoid March Madness Day 1 oversell scenario).

| Risk | Probability | Pre-drafted response |
|------|------------|---------------------|
| Inventory oversell | [FILL] | [FILL: apology email template + discount code structure ready] |
| Sequence flip mid-sale | [FILL] | [FILL: who decides, by what time, document in Section 7] |
| LP downtime | [FILL] | [FILL: backup link, IT contact, comms template] |
| FB ads disapproved | [FILL] | [FILL: backup creative ready] |

---

## 7. Decision Log (inline, timestamped)

> **Mọi thay đổi sau STRATEGY LOCK đi vào đây.** Format: `YYYY-MM-DD HH:MM — [Title]`. This is the AUDIT TRAIL.

### Template entry:

```
### YYYY-MM-DD HH:MM — [Change title]
- **What:** [thay đổi gì]
- **Why:** [lý do — based on what data/signal]
- **Impact:** [ảnh hưởng tới phase/section nào]
- **Sections updated:** [list]
- **Approved by:** [Michelle / name]
```

### Examples (from MD Sale 2026 — proven scenarios):

```
### 2026-04-10 14:00 — Shift sale dates Apr 20-22 → Apr 21-23
- What: Sale dời 1 ngày
- Why: 2 extra teaser days build more anticipation; FB Ads team needs +1 day buffer
- Impact: Section 4 teaser sequence +2 emails, Section 5 warmup +1 day, Section 3 FB Ads end date +1 day
- Sections updated: 0, 3, 4, 5
- Approved by: Michelle

### 2026-04-18 14:30 — Sequence shift Jennifer → Dylan vì 5K cap closing earlier
- What: Apr 19 email rewrite (Jennifer FAQ format vague cap → Dylan IT lockout hard reveal Apr 20)
- Why: Apr 18 evening showed 4,127 registrations, projected hit 5K mid-Apr 20 instead of Apr 21 morning. Jennifer's "closing in on 5K" too vague for actual urgency
- Impact: Section 4 Apr 19 email rewrite, Apr 20 added Dylan reveal + $19.95 subset reveal
- Sections updated: 4 (sequence #8, #9), 7 (this entry)
- Approved by: Michelle
```

### Entries:

[FILL: append entries here as they occur]

---

## 8. Post-Mortem [filled T+3]

> **Reference:** Throssell Campaign Report shape + `learnings/post-mortems.md` entry format.
> **Workflow trigger:** `/campaign-postmortem` reads Sections 1-7 và prompt fill Section 8.

### 8.1 Revenue Actual vs Forecast

| Tier | Forecast | Actual | Variance | Hit? |
|------|----------|--------|----------|------|
| Conservative | $[from 1.6] | $[FILL] | [FILL +/-%] | [✅/❌] |
| Target | $[from 1.6] | $[FILL] | [FILL +/-%] | [✅/❌] |
| Stretch | $[from 1.6] | $[FILL] | [FILL +/-%] | [✅/❌] |

**Sales-curve actual vs forecast:**

| Day | Forecast % | Actual % | Variance | Notes |
|-----|-----------|---------|---------|-------|
| T-0 | [from 1.6] | [FILL] | [FILL] | [FILL] |
| T+1 | [from 1.6] | [FILL] | [FILL] | [FILL] |
| T+2 | [from 1.6] | [FILL] | [FILL] | [FILL] |

**Cap status:**
- Order cap: [FILL: hit/miss + when]
- Inventory: [FILL: SKUs sold out, SKUs leftover]

### 8.2 Email + SMS Metrics

| Email # / SMS | Sends | Open % | Click % | Conv % | Revenue | RPS |
|---------------|-------|--------|---------|--------|---------|-----|
| Teaser #1 | [FILL] | [FILL] | [FILL] | [FILL] | [FILL] | [FILL] |
| ... | | | | | | |
| Sale-day REG launch | | | | | | |
| ... | | | | | | |

**Top 3 performers:** [FILL: by RPS or revenue]
**Bottom 3:** [FILL]

### 8.3 Mechanic Retrospective

- **Mechanic used:** [from Section 1.3]
- **Did it create the intended behavior?** [FILL: e.g., "Text-to-register drove 4,127 registrations vs 5K target — 82% hit"]
- **Customer feedback signals:** [FILL: complaints? confusion? love?]
- **Would we use again?** [Yes / No / With variation]
  - **If Yes:** When? [FILL: e.g., "Black Friday 2026-11 with 7K registration cap"]
  - **If With variation:** What change? [FILL]
  - **If No:** Why? [FILL]

### 8.4 Customer Feedback Harvested

**New voices added to `customer-voices/`:**
- [LINK: customer-voices/stories/YYYY-MM.md] — [FILL: brief description]
- [LINK: customer-voices/compliments/YYYY-MM.md]
- [LINK: customer-voices/product-feedback/YYYY-MM.md]
- [LINK: customer-voices/suggestions/YYYY-MM.md]

### 8.5 Story Moments Harvested → Story Bank SEEDs

**New SEEDs added to `story-bank.md`:**
- [S-XXX] [FILL: title + 1-line summary]
- [S-XXX] [FILL]

### 8.6 Lessons → Propagated

**Entries created/updated:**
- [LINK: learnings/post-mortems.md#YYYY-MM-DD-campaign-slug] — [FILL: 3-5 key lessons]
- [LINK: learnings/monthly-insights.md] — [FILL: if month-end, key insight]
- [LINK: knowledge/core/performance-tracking.md] — [FILL: metrics row added]
- [LINK: learnings/style-rules.md] — [OPTIONAL: new rule if pattern emerged]

### 8.7 mechanic-history.md Updated

- **Entry added:** [LINK: planning/campaigns/mechanic-history.md#YYYY-MM-slug]
- **Outcome rating:** [FILL: 1-5 stars + 1-line reason]
- **Next safe re-use date:** [FILL: 6 months out from sale start]

---

## STATUS: [AUTO: STRATEGY-DRAFT → STRATEGY-LOCKED → EXECUTING → CLOSED]

# === SKELETON END ===

---

## QUICK USAGE NOTES

1. **Don't fill everything at T-20.** Sections fill in waves: 1 → 2 → 3 → 4 → 5 → 6 → 7 (ongoing) → 8.
2. **Section 7 Decision Log is your audit trail.** If post-sale a complaint comes ("I got the $19.95 email but link expired"), this is where you trace what was approved when.
3. **Sections 1.7, 2.6, 4.4, 5.3 are SIGN-OFF gates.** Status doesn't progress without sign-off.
4. **Email/SMS drafts go to `[slug]-drafts/` folder.** Don't inline draft content into this master doc.
5. **Reference, don't duplicate.** This doc REFERENCES `universe-afroyla-cast.md`, `story-bank.md`, `revenue-config.md` — don't copy their content here.
