---
description: Monthly Strategy — Tạo chiến lược nội dung + P&L cho tháng mới
---

# MONTHLY STRATEGY WORKFLOW

> **Ai chạy:** Michelle hoặc Content Manager
> **Khi nào:** Cuối tháng hoặc đầu tháng mới
> **Output:** `planning/monthly/[YYYY-MM]-strategy.md`
> **Feeds:** `/weekly-planning` (break monthly thành 7-day plans)

---

## STEP 0: ĐỌC TÀI LIỆU

Đọc theo thứ tự:

1. `knowledge/core/content-taxonomy.md` — campaign types (Gamified/Mission/Flash/Clearance), daily Story Sources, SMS pillars
2. `knowledge/core/revenue-config.md` — RPS rates, SMS costs, list sizes, P&L structure
3. `knowledge/core/performance-tracking.md` — metrics tháng trước (nếu có)
4. `learnings/monthly-insights.md` — bài học tháng trước (nếu có)
5. `knowledge/core/story-bank.md` — kiểm kê ý tưởng hiện có
6. `planning/monthly/` — strategy tháng trước (nếu có) để đảm bảo continuity

> **First-run guide:** Nếu chưa có performance-tracking hoặc monthly-insights → skip, ghi "No historical data." Workflow vẫn hoạt động. Sau tháng đầu tiên, data sẽ có từ `/finalize-email` post-mortems.

---

## STEP 1: THU THẬP INPUT

Hỏi user (skip nếu đã biết):

### Business Goals
1. Revenue target tháng này? (Conservative / Target / Stretch)
2. Có sale event nào? (Dates, type, discount level)
3. Products/collections nào cần push? (new arrivals, clear inventory, hero products)
4. FB Ads budget?
5. Có charity/donate campaign nào?

### Content Planning
6. Cultural dates quan trọng tháng này? (heritage dates, holidays)
7. Character arcs muốn develop? (George storyline mới? Nia project?)
8. Tone tổng thể? (aggressive growth? nurture? post-sale recovery?)

---

## STEP 2: XÁC ĐỊNH CAMPAIGN TYPES

Dựa trên sale events từ Step 1, xác định campaign type cho mỗi event:

| Campaign Type | Khi nào | Emails cần | SMS cần | Build-up |
|---------------|---------|-----------|---------|----------|
| **Gamified** | Sale có game/shuffle/hunt mechanics | 10-14 | 15-20+ | 10-14 ngày |
| **Mission-driven** | Sale có charitable cause | 6-8 | 8-12 | 7-10 ngày |
| **Flash/Themed** | Holiday sale, themed event | 3-5 | 5-8 | 3-5 ngày |
| **Clearance** | Clear inventory, end of season | 1-3 | 2-5 | 1-2 ngày |

> Reference: `content-taxonomy.md` Part 1A — Campaign Jobs + Information Layering per type.

Cho mỗi campaign, xác định:
- Campaign type
- Dates (start teaser → sale → post-sale)
- Campaign Jobs sequence (ANNOUNCE → JUSTIFY → PROVE → TEACH → PREPARE → CLOSE → LIVE → THANK)
- Keyword cho SMS registration
- Products featured

---

## STEP 3: TẠO P&L PROJECTION

Dùng `revenue-config.md` để tính:

1. **Email Revenue:** Số emails × list size × RPS (by type: Daily/Teaser/Sale)
2. **SMS Revenue:** Sends per segment × RPS (REG/HIGH/MASS)
3. **SMS Cost:** (Sends × Parts/Send × $/part) × fee multiplier
4. **P&L:** Revenue - COGS (35%) - Marketing - Shipping (8%) = Net Profit

Trình bày P&L table cho user review TRƯỚC khi fill chi tiết.

---

## STEP 4: PHASE PLANNING

Chia tháng thành 3-5 phases dựa trên sale calendar:

**Pattern có sale:**
```
P1: Daily storytelling (build connection)
P2: Teaser sequence (build anticipation for sale)
P3: Sale (peak revenue)
P4: Post-sale (gratitude, nurture)
P5: Daily recovery (back to storytelling)
```

**Pattern không có sale:**
```
P1: Daily storytelling (Story Source variety)
P2: Product focus (spotlight collections)
P3: Community (highlight customers, milestones)
P4: Prep next month (teaser for upcoming events)
```

Mỗi phase xác định: dates, email cadence, SMS cadence, revenue weight.

---

## STEP 5: DAILY CONTENT DIRECTION

Cho những ngày KHÔNG có campaign email, plan Story Source variety:

| Story Source | Target frequency | Notes |
|-------------|-----------------|-------|
| Customer Voice | 2-3x/tuần | Check customer-voices/ for unused entries |
| Cultural Moment | 1-2x/tuần | Check cultural calendar |
| Family/Personal | 1-2x/tuần | George, Nia, Eli moments |
| Product Origin | 1x/tuần | Collection spotlights |
| Community Achievement | 1x/tuần | Milestones, charity results |
| Industry Commentary | 1x/2 tuần max | Polarizing — use sparingly |

> Reference: `content-taxonomy.md` Part 1B — Daily Broadcast Story Sources.

---

## STEP 6: CHARACTER ARCS

Plan trước character arcs cho tháng — đặc biệt nếu có campaign:

| Character | Role in campaign | Role in daily | Frequency limit |
|-----------|-----------------|---------------|-----------------|
| George | [planned arc] | P.S. comedy | Max 3 days/tuần |
| Nia | [cultural tie-ins] | P.S. facts | Max 2 days/tuần |
| Alice | [sale budget panic] | Không cần | Sale weeks mainly |
| Keisha | [product reveals] | BTS emails | Product-relevant |
| Tasha | [sale day energy] | Không cần | Sale days only |
| Marcus | [warehouse BTS] | Không cần | Sale/BTS only |

> Reference: `content-taxonomy.md` Part 6 — Character System.
> Full detail: `universe-afroyla-cast.md`.

---

## STEP 7: STORY BANK AUDIT

Kiểm tra `story-bank.md`:

| Stage | Current | Target | Gap |
|-------|---------|--------|-----|
| SEED | ? | 10+ | ? |
| CONCEPT | ? | 5-8 | ? |
| READY | ? | 5-7 | ? |

Nếu READY < 5: recommend chạy `/idea-research` TRƯỚC khi bắt đầu tuần mới.

Check theme coverage — Story Sources nào thiếu READY items?

---

## STEP 8: FILL STRATEGY TEMPLATE

Copy `knowledge/core/monthly-strategy-template.md` sang `planning/monthly/[YYYY-MM]-strategy.md`.

Fill từng section theo thứ tự:
1. P&L Targets (from Step 3)
2. Phase Planning (from Step 4)
3. Sale Calendar (from Step 2)
4. Cultural Calendar (from Step 1)
5. Theme Rotation Plan (from Step 5 — Story Sources per week)
6. Character Arcs (from Step 6)
7. SMS Segment Strategy
8. Story Bank Audit (from Step 7)
9. Products to Push (from Step 1)
10. Last Month's Lessons (from performance-tracking + monthly-insights)
11. Weekly Summary Projection

---

## STEP 9: PRESENT & NEXT STEPS

Trình bày strategy hoàn chỉnh cho user review.

Validation:
- [ ] P&L cân bằng: Total Cost < 20% Revenue
- [ ] Campaign types xác định cho mọi sale events
- [ ] Story Source variety planned cho daily weeks
- [ ] Character arcs planned (không random)
- [ ] Story Bank đủ READY items cho tuần đầu
- [ ] SMS budget estimate phù hợp

Next steps gợi ý:
- "Chạy `/weekly-planning` cho tuần đầu tiên"
- "Chạy `/idea-research` nếu Story Bank < 15 items"
- "Update `revenue-config.md` nếu RPS rates thay đổi"

---

## BEHAVIOR RULES

- Nếu chưa có monthly-insights hoặc performance-tracking → skip, ghi "No historical data"
- Nếu user muốn tháng không có sale → dùng "no-sale pattern" cho phase planning
- Luôn show P&L TRƯỚC khi fill chi tiết → user approve direction trước
- User có thể override bất kỳ section nào
- Nếu revenue projection < conservative target → flag và suggest adjustments
