# CAMPAIGN PLAYBOOK — Promotion Sprint Operating System

> **Mục đích:** Chuẩn hóa cách Afroyla plan + execute 1 promotion campaign (Black Love Sale, March Madness, Early Mother's Day, Black Friday, Holiday Sale...).
> **Định nghĩa "Campaign":** 1 sprint 20-30 ngày bên trong monthly plan, có offer + mechanic + sale window cụ thể.
> **Áp dụng cho:** Mọi sale event ≥ 2 ngày HOẶC có teaser sequence ≥ 3 emails.
> **Không áp dụng cho:** Daily storytelling, flash sale 1 ngày không teaser, post-sale recovery.

---

## 1. CAMPAIGN OPERATING MODEL (T-20 → T+3)

```
T-20 ───────── T-17 ──────── T-14 ──────── T-10 ─────── T-5 ─────── T-0 ────── T+3
STRATEGY      CREATIVE      FB ADS        TEASER        WARMUP      LAUNCH    POST-MORTEM
LOCK          BRIEF LOCK    LIVE          SEQUENCE      SEQUENCE    +        +
                                          STARTS        STARTS      RUN       LEARNINGS
```

| Phase | Day | Owner | Deliverable | Lock Criteria |
|-------|-----|-------|------------|---------------|
| **P1: STRATEGY** | T-20 | Michelle + AI | Campaign Strategy Doc | Offer + Mechanic + Hero Story locked |
| **P2: CREATIVE BRIEF** | T-17 | AI → Michelle | Creative Brief + LP Brief | Voice + visuals + characters locked |
| **P3: PAID** | T-14 | Michelle | FB Ads creatives + budget | Ads creative briefed, daily budget set |
| **P4: TEASER** | T-10 to T-6 | AI + Michelle | Teaser email/SMS sequence | All teaser drafts queued |
| **P5: WARMUP** | T-5 to T-1 | AI + Michelle | Warmup sequence (REG + MASS + HIGH) | All warmup drafts queued |
| **P6: LAUNCH** | T-0 to T+N | AI + Michelle | Sale-day emails + SMS | Sale calendar fully drafted |
| **P7: POST-MORTEM** | T+3 | Michelle + AI | Retrospective + Story Bank harvest | Lessons logged, mechanics archived |

> Ngày T-0 = ngày sale OPEN. Phases có thể overlap (ví dụ FB Ads vẫn chạy trong khi viết teaser).

---

## 2. CAMPAIGN ENTRY GATE — TRƯỚC KHI VÀO P1

Không vào campaign sprint nếu thiếu 1 trong 5 inputs sau:

- [ ] **Sale dates locked** (start + end + close hour)
- [ ] **Offer skeleton** (discount range + product scope, kể cả còn fuzzy)
- [ ] **Inventory feasibility** (Shopify check — đủ hàng cho cap dự kiến?)
- [ ] **Operations cap** (warehouse có thể fulfill bao nhiêu orders/day?)
- [ ] **Monthly strategy đã có campaign này** (nằm trong `planning/monthly/[YYYY-MM]-strategy.md` Section 3)

> Nếu thiếu → quay lại `/monthly-strategy` HOẶC ngồi với Michelle clarify trước, KHÔNG bắt đầu sprint.

---

## 3. CAMPAIGN STANDARDS — 4 PHASES CẦN CHUẨN HÓA NHẤT

### 3.1 STRATEGY (T-20) — Standard

> Output: `planning/campaigns/[YYYY-MM]-[campaign-slug]/00-strategy.md`

**6 thành phần BẮT BUỘC:**

| # | Component | Mô tả | Risk nếu thiếu |
|---|-----------|-------|----------------|
| 1 | **Campaign Identity** | Name, dates, type (Gamified/Mission/Flash/Themed), positioning 1 dòng | Team không cùng narrative |
| 2 | **Offer Architecture** | Discount tiers, hero products, gift bundle, price ladder | Không có "wow" hook |
| 3 | **Promotion Mechanic** | Cách tham gia khác mọi campaign trước (xem Section 4) | Khách cũ thấy lặp → mệt |
| 4 | **Tension Numbers** | 1-2 con số căng thẳng chạy suốt campaign (orders cap, time cap, registration cap, inventory cap) | Không có scarcity thật |
| 5 | **Hero Story Spine** | Câu chuyện chính kéo dài teaser → sale (không phải 1 email lẻ) | Teasers rời rạc |
| 6 | **Success Definition** | Conservative / Target / Stretch revenue + cap thứ phải hit | Không biết khi nào dừng / đẩy thêm |

**Output P1 phải pass 4 câu hỏi:**
1. Khách CŨ vào lần này có thấy gì MỚI so với campaign trước? (mechanic? offer? story?)
2. Tension Numbers có tạo cảm giác khan hiếm THẬT không? (không phải "ends soon!!" giả)
3. Hero Story spine có thể kéo 8-10 teaser emails mà không lặp không?
4. Inventory + Operations đã sign-off chưa?

**STRATEGY LOCK CHECKPOINT:** Michelle xác nhận → freeze. Mọi thay đổi sau T-20 phải log vào `change-log.md` của campaign folder.

---

### 3.2 CREATIVE BRIEF (T-17) — Standard

> Output: `planning/campaigns/[YYYY-MM]-[campaign-slug]/01-creative-brief.md`
> Phụ trợ: `02-lp-brief.md` (cho LP/IT/Designer)

**Brief có 7 sections (theo template `02-lp-brief.md` đã chứng minh hoạt động trong MD Sale Apr 2026):**

1. **Sự kiện** (1 đoạn) — dates, time, gate đăng ký, cap, "list only" feel
2. **Offer** (chi tiết) — price tiers, hero products, gift sets, sold-out items
3. **Tension Numbers** — 2-3 con số căng thẳng, mỗi con số = 1 đoạn
4. **Trải nghiệm khách trên page** — flow click → browse → checkout, filter logic
5. **Sau khi sale kết thúc** — page state, post-sale comms
6. **Voice + Feel** — brand identity reminders, màu, font, photography style
7. **Character Map cho campaign** — character nào xuất hiện ở phase nào (xem `universe-afroyla-cast.md`)

**Output P2 phải pass 3 câu hỏi:**
1. IT/Designer đọc xong có hiểu page trông như thế nào không? (không cần wireframe — chỉ cần nguyên tắc)
2. Copy team đọc xong có biết Hero Story spine + character arc cho 8-10 emails không?
3. Có example ngôn ngữ (1-2 câu chuẩn) cho voice không?

---

### 3.3 TEASER SEQUENCE (T-10 → T-6) — Standard

> Output: `planning/campaigns/[YYYY-MM]-[campaign-slug]/03-teaser-plan.md` + drafts trong `examples/daily/`

**3-Element Checklist (BẮT BUỘC trong MỌI teaser private-sale):**
> Trích từ `feedback_teaser_context_checklist.md` — đã memorize.

- [ ] **Private Mechanic** — tại sao private, cách vào (text "X" → 94923)
- [ ] **Demand Signal** — bằng chứng người khác đang quan tâm (registrations count, social proof)
- [ ] **Prices** — ít nhất 1 price anchor (gốc → sale) HOẶC tier range, dệt vào narrative

**Teaser Sequence Pattern (8-10 emails):**

| # | Email | Job | Element Focus | Character |
|---|-------|-----|---------------|-----------|
| T-10 | Hero Story Open | ANNOUNCE | Mechanic intro | Michelle |
| T-9 | Backstory / Why | JUSTIFY | Demand signal start | Michelle + secondary |
| T-8 | Hero Product 1 reveal | TEASE | Mechanic + price | Keisha (designer) |
| T-7 | Conflict / Tension | DRAMATIZE | Tension number activated | Alice (CFO panic) |
| T-6 | Hero Product 2 reveal | TEASE | Demand signal climbing | Keisha |
| T-5 | Customer voice / Proof | PROVE | Social proof | Customer |
| T-4 | Hero Product 3 reveal | TEASE | Mechanic + price ladder | Keisha |
| T-3 | Stakes / What's coming | PREPARE | All 3 elements | Michelle |
| T-2 | Hero Product 4 reveal | TEASE | Final hero | Keisha + Michelle |
| T-1 | Final warning / countdown | PREPARE | Time cap dominant | Michelle + Tasha (energy) |

> Adapt: Campaign nhỏ hơn (Flash/Themed) → 3-5 teasers; lớn hơn (Gamified) → 10-14 teasers.

**Cross-channel rule:** Mỗi teaser email PHẢI có ít nhất 1 SMS/MASS counterpart cùng ngày HOẶC ngày kế (xem `content-taxonomy.md` Part 2B).

**Output P4 phải pass 3 câu hỏi:**
1. Đọc liền 8-10 subject lines → có cảm giác arc không? (không phải 8 email rời rạc)
2. Mỗi email có 3 elements (Mechanic + Demand + Prices) chưa?
3. Character rotation có break theo limit không? (George max 3, Nia max 2 / sequence)

---

### 3.4 WARMUP SEQUENCE (T-5 → T-1) — Standard

> Output: `planning/campaigns/[YYYY-MM]-[campaign-slug]/04-warmup-plan.md`

**Warmup khác Teaser ở chỗ:** Warmup gửi cho REG (đã đăng ký) + HIGH (đã warm) — voice closer, urgency higher, ngắn hơn.

**Warmup Sequence Pattern (5 ngày):**

| Day | REG | HIGH | MASS | NS |
|-----|-----|------|------|----|
| T-5 | Welcome + reminder dates | Daily story (warm) | 1 last-chance teaser | — |
| T-4 | Sneak peek prices | Daily story | — | — |
| T-3 | Hero product reveal | Daily story | — | — |
| T-2 | Final prep — what to expect | Bridge story | 1 final teaser (gate closing) | — |
| T-1 | Tomorrow! + link saved | Bridge story | Gate close warning | — |

**REG Voice:** "Bạn đã đăng ký, dưới đây là gì sẽ diễn ra ngày mai." Insider tone.
**HIGH Voice:** Story-first, sale là background, không hard-pitch.
**MASS Voice:** Last chance to register, gate đóng, không tham gia là lỡ.

**Output P5 phải pass 3 câu hỏi:**
1. REG có cảm giác "insider" hay vẫn giống MASS?
2. HIGH có bị spam sale-talk không? (mất mỗi ngày 1 unsubscribe = thua dài hạn)
3. Cross-channel có conflict không? (SMS gửi 11AM mâu thuẫn email gửi 10AM về cùng product?)

---

## 4. PROMOTION MECHANIC LIBRARY — Chống lặp cho khách cũ

> Pain point chính: tệp khách hàng = repeat customers. Lặp mechanic → mệt mỏi → engagement drop.
> Rule: Mỗi 6 tháng KHÔNG được lặp cùng 1 mechanic identical.

### 4.1 Mechanic Catalog

| ID | Mechanic | Đã dùng | Tone | Hiệu quả với |
|----|----------|---------|------|--------------|
| M01 | **Text-to-Register** (text "X" → 94923, gate đóng sau N ngày, cap người) | MD Sale 2026-04 | Insider, scarcity | High-intent customers |
| M02 | **Gamified Hunt** (egg hunt, shuffle, tile reveal — 1 product/round) | Easter Game 2026-04 | Playful, repeat visits | All segments |
| M03 | **Mission/Charity** (mỗi đơn = $X donate, cap = N orders for cause) | IWD 300 Mission 2026-03 | Purpose-driven, emotional | Mission-aligned |
| M04 | **Reverse Auction** (giá giảm theo time, mỗi giờ giảm $X — first-come) | — | Urgency loop | Patient bargain hunters |
| M05 | **Mystery Box** (pay $X, nhận bag random từ tier) | — | Curiosity, gift | Gift buyers, low-AOV |
| M06 | **Loyalty Tier Unlock** (mua N+ đơn từ trước = unlock extra discount) | — | Reward, exclusivity | VIP repeat buyers |
| M07 | **Bundle Architecture** (Buy 2 get 3rd free, Wallet+Bag combo) | — | Average order ↑ | Multi-item buyers |
| M08 | **Pre-Order with Deposit** (pay $X today, lock price, ship later) | — | Cash flow, scarcity | Anticipation buyers |
| M09 | **Customer-Voted Drop** (poll N products, top 3 winners go on sale) | IWD 2026-03 (variant) | Co-creation, community | Engaged community |
| M10 | **Sealed Envelope Discount** (đăng ký → nhận 1 random discount %, không biết trước) | — | Surprise, fairness | All segments |
| M11 | **First-N-Orders Cap** (1000 orders only — sale dừng khi đầy bất kể time) | MD Sale 2026-04 (combined với M01) | Real scarcity | High-intent |
| M12 | **Heritage Date Tie-In** (sale chạy đúng ngày văn hóa — Juneteenth, MLK Day, Mother's Day) | MD Sale 2026-04 | Cultural meaning | Brand-aligned |

### 4.2 Mechanic Selection Algorithm — DÙNG TRONG /campaign-plan

```
1. List campaigns 6 tháng qua → mark mechanics đã dùng
2. Identify offer goal:
   - Cash flow ngay → M01 / M11 / M08
   - Move inventory cụ thể → M02 / M07
   - Engage cộng đồng → M03 / M09 / M12
   - Surprise/refresh → M04 / M05 / M10
3. Loại bỏ mechanic đã dùng < 6 tháng
4. Combine 2 mechanics nếu cần thêm tension (ví dụ: M01 + M11 = MD Sale 2026-04)
5. Validate với Michelle: "Mechanic này khách cũ đã thấy chưa? Có vui không?"
```

### 4.3 Mechanic Combination Examples

- **M01 + M11** = Private gate + Order cap → đã dùng MD Sale 2026 (highest revenue)
- **M02 + M03** = Gamified hunt với mỗi round = $X to charity → cộng đồng + chơi
- **M07 + M12** = Buy-1-get-1 trong Heritage week (Juneteenth: buy 1 bag, donate 1 to local org)
- **M09 + M01** = Community vote → top 3 → private gate cho voters → exclusivity reward
- **M05 + M10** = Mystery box với sealed envelope discount → double surprise

---

## 5. CAMPAIGN FOLDER STRUCTURE — Standard layout

```
planning/campaigns/[YYYY-MM]-[campaign-slug]/
├── 00-strategy.md            ← P1 output (T-20)
├── 01-creative-brief.md      ← P2 output (T-17)
├── 02-lp-brief.md            ← P2 phụ (cho IT/Designer, nếu có LP)
├── 03-teaser-plan.md         ← P4 output (T-10)
├── 04-warmup-plan.md         ← P5 output (T-5)
├── 05-launch-plan.md         ← P6 output (T-0)
├── 06-post-mortem.md         ← P7 output (T+3)
├── change-log.md             ← Mọi thay đổi sau T-20 lock
└── checklist.md              ← Master execution checklist (Section 6 below)
```

**Naming convention:** `[YYYY-MM]-[campaign-slug]/` — ví dụ:
- `2026-04-mothers-day-sale/`
- `2026-02-black-love-sale/`
- `2026-03-march-madness/`
- `2026-11-black-friday/`

---

## 6. MASTER EXECUTION CHECKLIST

> Copy vào `checklist.md` của mỗi campaign. Tick từng item khi xong.

### P1: STRATEGY (T-20)
- [ ] Sale dates locked + close hour locked
- [ ] Offer architecture: tiers + hero products + gift sets
- [ ] Promotion Mechanic chosen (check 4.2 — không lặp 6 tháng)
- [ ] Tension Numbers: 1-2 con số (cap, time, inventory, registrations)
- [ ] Hero Story spine outlined (8-10 emails worth)
- [ ] Success metrics: Conservative / Target / Stretch
- [ ] Inventory check (Shopify) ✓
- [ ] Operations cap confirmed (warehouse fulfillment) ✓
- [ ] Monthly strategy updated (Section 3 sale calendar)
- [ ] **Michelle SIGN-OFF** → strategy locked

### P2: CREATIVE BRIEF (T-17)
- [ ] Creative brief 7-section đầy đủ
- [ ] LP brief sent to IT + Designer (nếu có LP)
- [ ] Character map cho campaign (ai xuất hiện phase nào)
- [ ] Voice examples (1-2 câu chuẩn)
- [ ] Photography direction (in-context, không flat-lay sterile)
- [ ] **Michelle SIGN-OFF** → creative brief locked

### P3: FB ADS (T-14)
- [ ] Ads creative briefed (image/video direction)
- [ ] Daily budget set (theo monthly strategy)
- [ ] Landing/registration URL ready
- [ ] UTM tagging plan
- [ ] Tracking pixel verified
- [ ] **Ads LIVE T-14**

### P4: TEASER (T-10 → T-6)
- [ ] 8-10 teaser email subjects drafted (arc check)
- [ ] Mỗi teaser pass 3-element checklist (Mechanic + Demand + Prices)
- [ ] Character rotation valid (George ≤3, Nia ≤2 trong sequence)
- [ ] Cross-channel SMS counterpart cho mỗi teaser
- [ ] Story Bank items reserved cho campaign (đánh dấu CAMPAIGN-RESERVED)
- [ ] Klaviyo schedule queued
- [ ] **First teaser LIVE T-10**

### P5: WARMUP (T-5 → T-1)
- [ ] REG sequence drafted (insider voice)
- [ ] HIGH sequence drafted (story-first, sale background)
- [ ] MASS final teaser (gate close warning)
- [ ] SMS warmup queued cho REG (daily build-up)
- [ ] Cross-channel timing không conflict
- [ ] Klaviyo schedule queued
- [ ] **Warmup LIVE T-5**

### P6: LAUNCH (T-0)
- [ ] Sale-day morning email READY (sent 10:00 AM ET hoặc theo brief)
- [ ] SMS REG launch sent với link
- [ ] All-segments push schedule (REG ×5, HIGH ×1-2, MASS ×1)
- [ ] LP live + tracking ✓
- [ ] Inventory monitoring active
- [ ] Order cap monitoring active (M11 mechanics)
- [ ] **Sale OPEN T-0**

### P7: POST-MORTEM (T+3)
- [ ] Revenue actual vs projection (Conservative/Target/Stretch)
- [ ] Cap status (orders cap, registrations, inventory remaining)
- [ ] Email metrics (open, click, conversion per email)
- [ ] SMS metrics (CTR per segment, RPS actual)
- [ ] Customer feedback harvested → `customer-voices/`
- [ ] Story moments harvested → `story-bank.md` SEEDs
- [ ] Mechanics retrospective: would we use this again? when?
- [ ] Lessons logged → `learnings/post-mortems.md`
- [ ] Monthly insights updated → `learnings/monthly-insights.md`
- [ ] Performance tracking updated → `knowledge/core/performance-tracking.md`

---

## 7. RISK REGISTER — Từ post-mortems quá khứ

> Update mỗi campaign. Đây là rủi ro đã được nhìn thấy.

| Risk | Probability | Impact | Mitigation | Owner |
|------|-------------|--------|------------|-------|
| Story Bank rỗng khi vào teaser phase | HIGH | Teasers viết vội, lệch arc | Audit Story Bank ở P1, run `/idea-research` nếu READY < 8 | AI |
| Mechanic lặp khách cũ thấy chán | MEDIUM | Engagement drop 20-30% | Check Section 4.2 catalog, không lặp 6 tháng | Michelle |
| Tension Numbers giả (không có cap thật) | HIGH | Brand trust mất | Cap phải có lý do operational thật (warehouse, inventory) | Michelle |
| FB Ads creative không match teaser narrative | MEDIUM | Registration cao nhưng cold | Ads brief phải đọc P2 creative brief, dùng same characters | Michelle |
| LP launch trễ vs first email | HIGH | Khách click → 404 → mất trust | LP staging URL ready T-3, full live T-1 | IT |
| SMS conflict timing với email | MEDIUM | Cùng product, cùng giờ → spam feel | Cross-channel timeline trong `05-launch-plan.md` | AI |
| Inventory sold-out trước cap | MEDIUM | Khách angry "tại sao bán cái không có" | Shopify check daily P4-P5, update LP nếu sold-out | Michelle |
| Post-mortem skip → không học được | HIGH | Lặp lỗi campaign sau | T+3 BẮT BUỘC, không vào campaign mới khi chưa post-mortem | Michelle |

---

## 8. INTEGRATION VỚI EXISTING WORKFLOWS

```
/monthly-strategy
    ↓ (campaign nằm trong Section 3 Sale Calendar)
/campaign-plan ← BẮT ĐẦU SPRINT TẠI ĐÂY (T-20)
    ↓ (tạo folder + 7 files theo Section 5)
/weekly-planning ← weekly plan trong sprint sẽ pull campaign tasks
    ↓
/daily-brief ← daily brief đọc campaign teaser/warmup plan thay vì daily story
    ↓
/write-email + /write-sms ← drafts có context từ campaign brief
    ↓
/review-* + /finalize-* ← như bình thường
    ↓
/campaign-postmortem ← T+3 (close sprint)
```

**Quan trọng:** Trong sprint, daily-brief KHÔNG pick story từ Story Bank random — đọc `03-teaser-plan.md` hoặc `04-warmup-plan.md` để biết hôm nay viết teaser # mấy.

---

## 9. WHEN TO BREAK THE RULES

- **Flash 1-day không teaser:** Skip P4 + P5, chỉ làm P1 (light) + P6 + P7
- **Recurring campaign giống tháng trước (cùng mechanic, không thay đổi):** Vẫn phải làm P7 (post-mortem) campaign cũ TRƯỚC, sau đó dùng folder cũ làm template, vẫn chạy `/campaign-plan` để verify checklist
- **Khẩn cấp < 14 ngày:** Compress P1+P2 vào 1 ngày (T-X), giữ teaser tối thiểu 5 emails. NÊN tránh — campaign khẩn = lower ROI lịch sử.

---

## 10. CHANGE LOG TEMPLATE

> File `change-log.md` của mỗi campaign — log mọi thay đổi sau STRATEGY LOCK (T-20).

```markdown
# [Campaign Name] — Change Log

## YYYY-MM-DD — [Change Title]
- **What:** [thay đổi gì]
- **Why:** [lý do]
- **Impact:** [ảnh hưởng tới phase nào, deliverable nào]
- **Approved by:** Michelle / [name]
```

Ví dụ thực tế từ MD Sale 2026:
```
## 2026-04-10 — Shift dates Apr 20-22 → Apr 21-23
- What: Sale dời 1 ngày, từ T-T-W (Tue-Thu) thành T-W-T... wait, vẫn T-W-T
- Why: 2 extra teaser days build more anticipation
- Impact: P4 teaser sequence +2 emails, P5 warmup +1 day, FB Ads end date +1 day
- Approved by: Michelle
```

---

## REFERENCES

- `knowledge/core/content-taxonomy.md` Part 1A — Campaign Jobs
- `knowledge/core/content-taxonomy.md` Part 2B — SMS Pillars
- `knowledge/core/sms-vip-flash-deal-templates.md` — 10 SMS angles
- `knowledge/core/universe-afroyla-cast.md` — character map
- `knowledge/core/revenue-config.md` — RPS, P&L
- `learnings/style-rules.md` — 25 style rules
- `learnings/post-mortems.md` — past campaign learnings
- `feedback_teaser_context_checklist.md` (memory) — 3-element teaser rule
