---
description: Weekly Planning — Tạo lịch nội dung 7 ngày từ Monthly Strategy
---

# WEEKLY PLANNING WORKFLOW

> **Ai chạy:** Michelle hoặc Content Manager
> **Khi nào:** Mỗi Sunday tối hoặc Monday sáng
> **Input:** Monthly Strategy (`planning/monthly/[YYYY-MM]-strategy.md`)
> **Output:** `planning/weekly/week-[YYYY-WW].md`
> **Feeds:** `/daily-brief` (đọc "today's row" từ weekly plan)

---

## STEP 0: ĐỌC TÀI LIỆU

Đọc theo thứ tự:

1. `planning/monthly/[current-month]-strategy.md` — goals, phases, campaign schedule
2. `knowledge/core/content-taxonomy.md` — Story Sources, campaign Jobs, SMS pillars
3. `knowledge/core/story-bank.md` — items READY và CONCEPT hiện có
4. `knowledge/core/revenue-config.md` — RPS rates, SMS costs, list sizes
5. `knowledge/core/content-standards.md` — weekly rotation checklist (Part 7 trong taxonomy)
6. `planning/weekly/` — plan tuần trước → đảm bảo continuity, không lặp

---

## STEP 1: WEEKLY CONTEXT

Xác định:

- **Week number + date range** (Sun-Sat)
- **Phase hiện tại** (từ monthly strategy)
- **Cultural dates tuần này** (từ monthly cultural calendar)
- **Campaign events tuần này** (từ monthly sale calendar)
- **Story Bank status:**
  - READY count (nếu < 5 → ⚠️ chạy `/idea-research` trước)
  - Story Source nào thiếu READY items?
- **Tuần trước dùng gì:**
  - Story Sources nào đã dùng?
  - Characters nào đã xuất hiện?
  - SMS patterns nào đã gửi?

---

## STEP 2: BUILD 7-DAY CALENDAR

Cho mỗi ngày, assign:

### Email Fields

| Field | Mô tả | Source |
|-------|-------|--------|
| **Content type** | Campaign Job (ANNOUNCE/JUSTIFY/etc.) hoặc Daily Story Source | `content-taxonomy.md` |
| **Story Bank item** | R-[ID] từ READY hoặc "freestyle" | `story-bank.md` |
| **Product** | Bag/collection to feature | Monthly strategy |
| **Character(s)** | 1-2 max per email | Monthly character arc plan |
| **Sends** | List size | `revenue-config.md` |
| **Est. Revenue** | Sends × RPS | `revenue-config.md` |

### SMS Fields (nếu ngày đó có SMS)

| Field | Mô tả | Source |
|-------|-------|--------|
| **Context** | Flash Deal / Campaign Warmup / Mass Registration | `content-taxonomy.md` |
| **Segment(s)** | REG / HIGH / MASS / NS | Monthly strategy |
| **Pillars** | Deal Justification × Urgency × Character × Tone | `content-taxonomy.md` Part 2B |
| **Cross-thread** | Cách kết nối với email cùng ngày | Writer decides |

### Phase-Specific Cadence

| Phase | Email/Day | SMS/Day | Note |
|-------|----------|---------|------|
| Teaser | 1 | 0-1 (MASS registration + REG warmup) | Build anticipation |
| Sale Day | 2-3 | 4-8 (all segments) | Maximum push |
| Post-Sale | 1 | 0-1 (HIGH) | Nurture, thank you |
| Daily | 1 | 0-1 (HIGH or MASS) | Story-driven |

---

## STEP 3: VALIDATE

### Story Source Variety
- [ ] Min 3 Story Sources khác nhau trong tuần (không 5 ngày liền Customer Voice)
- [ ] Cultural dates có matching Cultural Moment email

### Character Rotation
- [ ] George: max 3 days (email + SMS combined), không 2 ngày liên tiếp
- [ ] Nia: max 2 days
- [ ] Không character nào (trừ Michelle) > 3 ngày/tuần

### Campaign Sequence (nếu có)
- [ ] Campaign Jobs đúng thứ tự (ANNOUNCE trước JUSTIFY trước PROVE...)
- [ ] Mỗi email = 1 Job (không mix)
- [ ] Info layering: mỗi email reveal layer MỚI

### SMS
- [ ] Không lặp Character + Tone 2 SMS liên tiếp
- [ ] Sincere-grateful max 1x/2 tuần
- [ ] Cross-threading với email cho ít nhất 3 ngày

### Revenue
- [ ] Weekly projection phù hợp monthly target pace
- [ ] SMS cost estimate within budget

---

## STEP 4: OUTPUT FORMAT

```markdown
# Week [WW] — [Date Range]

## Context
- **Phase:** [P# from monthly]
- **Story Bank:** READY: [X], CONCEPT: [Y], SEED: [Z]
- **Cultural dates:** [nếu có]
- **Campaign events:** [nếu có]

---

### [Day] [MM/DD]

**📧 Email**
- Content type: [Campaign Job / Daily Story Source]
- Story: [R-ID] "[title]" hoặc "freestyle: [topic]"
- Product: [name]
- Character: [name(s)]
- Sends: [number] | Est. Rev: $[amount]

**📱 SMS** [nếu có]
- Context: [Flash Deal / Warmup / Mass]
- Segment: [REG/HIGH/MASS]
- Pillars: [Justification] × [Urgency] × [Character] × [Tone]
- Cross-thread: [cách kết nối với email]

---

[Repeat cho mỗi ngày]

---

## Weekly Summary
| | Email Sends | Email Rev | SMS Sends | SMS Rev | SMS Cost | Total Rev |
|---|---|---|---|---|---|---|
| [Day] | | | | | | |
| **TOTAL** | | | | | | |

## Validation ✓
[Checklist results]
```

---

## STEP 5: PRESENT & SAVE

1. Present calendar + summary cho user review
2. Highlight: ⚠️ Warnings (low Story Bank, budget concern, sequence issue)
3. Wait for user approval/adjustments
4. Save vào `planning/weekly/week-[YYYY-WW].md`

### Next Steps
- Nếu Story Bank READY < 5: "Chạy `/idea-research` trước khi viết"
- Nếu campaign week: "Brainstorm cho [X] campaign emails + [Y] sale SMS"
- "Sẵn sàng! Ngày mai bắt đầu với `/daily-brief`"

---

## BEHAVIOR RULES

- Nếu chưa có monthly strategy → prompt: "Chạy `/monthly-strategy` trước"
- Nếu Story Bank READY < 3 → WARN trước khi plan: "Story Bank thiếu nghiêm trọng"
- User có thể override bất kỳ ngày nào
- Sale weeks có thể break Story Source variety (campaign Jobs dominate)
- Weekend có thể lighter hoặc skip SMS tùy strategy
