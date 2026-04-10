---
description: Write SMS — Viết SMS broadcast theo pillar-based system
---

# WRITE SMS WORKFLOW

> **Ai chạy:** Writer hoặc AI Agent
> **Input:** Brief từ `/daily-brief` hoặc manual brief
> **Output:** SMS draft (2-3 versions) — chưa finalize
> **Next:** Review (optional) → `/finalize-sms`
>
> **Voice:** Michelle texting bạn thân — KHÔNG phải brand gửi promo

---

## STEP 0: LOAD KNOWLEDGE

Đọc trước khi viết:

1. `knowledge/core/content-taxonomy.md` Part 2B — SMS Pillars (Deal Justification × Urgency × Character × Tone)
2. `knowledge/core/content-taxonomy.md` Part 1C — SMS Contexts (Flash Deal / Campaign Warmup / Mass Registration)
3. `knowledge/core/content-templates.md` Part 2 — SMS Structural Patterns (A: Story / B: Character / C: Direct)
4. `knowledge/core/content-standards.md` — SMS checklist + voice standards
5. `knowledge/core/universe-afroyla-cast.md` — character voice (George, Alice)
6. `examples/sms_log.md` — xem angle/character/tone gần nhất → KHÔNG lặp

---

## STEP 1: RECEIVE BRIEF

### Từ `/daily-brief`:
Brief đã sẵn sàng:
- Context: Flash Deal / Campaign Warmup / Mass Registration
- Segment: REG / HIGH / MASS / NS
- Product + deal price + normal price
- Pillars: Justification × Urgency × Character × Tone
- Cross-thread: cách kết nối với email cùng ngày

### Manual brief:
Hỏi user:

| Cần biết | Ví dụ |
|----------|-------|
| **Sản phẩm** | "Zanira" Leather Tote |
| **Giá deal** | $89.95 |
| **Giá gốc** | $149.95 |
| **Lý do deal?** | Overproduction / loyalty / seasonal / customer trigger / spontaneous / mission |
| **Link** | URL hoặc `[LINK]` |
| **Thời hạn** | 24h (default) |
| **Segment** | HIGH / REG / MASS |

---

## STEP 2: CHỌN PILLARS

Reference `content-taxonomy.md` Part 2B. Chọn 1 option từ mỗi pillar:

```
┌─ DEAL JUSTIFICATION ────────────────────────┐
│ □ Overproduction  □ Loyalty reward           │
│ □ Seasonal/Cultural  □ Customer trigger      │
│ □ Spontaneous  □ Mission-tied                │
├─ URGENCY MECHANISM ─────────────────────────┤
│ □ Time-based (24h)  □ Person-based (Alice)   │
│ □ Inventory-based  □ Social-based (peers)    │
│ □ No urgency                                 │
├─ CHARACTER DEVICE ──────────────────────────┤
│ □ Michelle vulnerable  □ George comedy       │
│ □ Alice tension  □ Customer proof            │
│ □ No character                               │
├─ TONE ──────────────────────────────────────┤
│ □ Warm-intimate  □ Conspiratorial            │
│ □ Playful-competitive  □ Sincere-grateful    │
│ □ Ultra-direct                               │
└─────────────────────────────────────────────┘
```

### Variety check TRƯỚC khi chọn:
- Đọc `sms_log.md` — SMS trước đó dùng gì?
- **KHÔNG lặp** Character + Tone 2 lần liên tiếp
- **Sincere-grateful** max 1x/2 tuần
- **George** nên xuất hiện min 1x/tuần (audience loves George)

---

## STEP 3: CHỌN STRUCTURAL PATTERN

Reference `content-templates.md` Part 2:

| Pattern | Khi nào | Length |
|---------|---------|--------|
| **A: Story-driven** | Có real story, HIGH segment | 300-480 chars |
| **B: Character-driven** | Muốn lighter, George/Alice device | 200-350 chars |
| **C: Direct** | SMS fatigue, palate cleanser, simple deal | 100-200 chars |

**Variety:** Không lặp cùng pattern 2 lần liên tiếp.

---

## STEP 4: VIẾT

### Cross-Reference Email (nếu cùng ngày)

Nếu hôm nay có email:
1. Đọc email draft → xác định character, product, emotional theme
2. SMS phải COMPLEMENT, không DUPLICATE:
   - Same character, different role: Email P.S. = George joke → SMS = George as urgency device
   - Complementary product: Email feature tote → SMS push matching wallet
   - Tone complement: Email emotional → SMS lighter. Email funny → SMS warm.
   - **NEVER:** SMS tóm tắt email. Khác angle, khác energy.

### Viết 2-3 versions

Mỗi version dùng pillar combination khác:

```
### VERSION A — [Pillars summary] 🏆 (nếu recommend)
[SMS content]

Pillars: [Justification] × [Urgency] × [Character] × [Tone]
Pattern: [A/B/C]
Characters: [count]

---

### VERSION B — [Pillars summary]
[SMS content]

Pillars: [Justification] × [Urgency] × [Character] × [Tone]
Pattern: [A/B/C]
Characters: [count]
```

### Golden Rules (check MỌI SMS):

1. **KHÔNG** nói "VIP" hay "EXCLUSIVE" — show qua hành vi ("just you", "between us")
2. **1 joke/angle per SMS** — không stack comedy
3. **Lead with relationship** — "Sis, I did something" > "FLASH SALE 🚨"
4. **Under 480 chars** (ideal under 320)
5. **1 character max** — George HOẶC Alice. Không cả hai.
6. **Product name + price anchor** — `"[Product]" $X (normally $XX)`
7. **End with warmth** — "— Michelle 💜" (không "— Afroyla Team")
8. **Urgency conversational** — "24 hours" hoặc "before Alice sees". KHÔNG "⏰ HURRY!!!"
9. **KHÔNG** scripted multi-turn dialogue ("George: / Me:"). Quote 1-2 lines max.

---

## STEP 5: PRESENT & SELECT

Present 2-3 versions. Recommend top pick + lý do.

Wait for user choice.

---

## STEP 6: OUTPUT

```
✅ SMS DRAFT READY

📱 [PRODUCT] — [DEAL]
================================
[SMS content — ready for review/finalize]
================================
Pillars: [full 4-pillar summary]
Pattern: [A/B/C]
Characters: [count]
Segment: [REG/HIGH/MASS]

👉 NEXT:
   Quick review (optional) → /review-craft
   Or straight to → /finalize-sms
```

> SMS CAN skip review agents (shorter format, less risk). Nhưng campaign SMS (sale day, 5+ SMS/day) SHOULD get at least `/review-brand` check.

---

## SMS BY CONTEXT

### Flash Deal (daily — 1 SMS)
- Standard flow: Steps 0-6 above
- Typical: 1 product, 1 deal, 24h, HIGH or REG segment

### Campaign Warmup (pre-sale — sequence)
- Behind-the-Scenes: Michelle ở warehouse, real prices, "browse tonight"
- Data Anomaly: Tech person reports unexpected data
- Prep/Schedule: Numbered steps, exact times, alarm instructions
- Launch: "IT'S LIVE" + link
→ Reference `content-templates.md` Part 2 — Campaign SMS structures

### Mass Registration (drive sign-ups)
- Under 200 chars if possible
- NO link — reply-to-join ("Reply SANTA to get the code")
- Curiosity > details
- Social proof if available ("200 women already joined")

### Sale Day (heavy — 5-8 SMS/day)
- Plan ALL SMS for the day BEFORE writing
- Variety: rotate patterns (A→B→C→A), rotate pillars
- Escalate energy through the day (warm AM → urgent PM → last-call evening)
- Real-time updates: "X orders in. Y spots left." + tier updates

---

## BEHAVIOR RULES

- **IF** brief từ `/daily-brief` → Steps 1-2 pre-filled
- **IF** user says "quick" → Skip to Step 4, 1 version only
- **IF** user paste existing SMS → skip to review check
- **IF** sale day (multiple SMS) → plan all SMS first, then write each
- **ALWAYS** check `sms_log.md` for last angle/character → avoid repeat
- **ALWAYS** check today's email for cross-reference opportunity
