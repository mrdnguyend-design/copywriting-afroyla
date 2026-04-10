# Content Structure Guide — Afroyla

> Structural reference cho email + SMS broadcast.
> **Mục đích:** Hiểu CẤU TRÚC từng loại content → viết tự do dựa trên structure.
> **KHÔNG phải fill-in templates** — đây là blueprints, writer đọc rồi viết theo.
>
> Cross-references:
> - `content-taxonomy.md` — chọn content type, pillars, techniques
> - `content-standards.md` — check chất lượng sau khi viết
> - `swipe-file-best-emails.md` — 15 Hall of Fame emails (đọc TRƯỚC viết)

---

# CÁCH DÙNG FILE NÀY

```
1. Mở content-taxonomy.md → decision tree → biết "hôm nay viết gì?"
2. Mở file NÀY → tìm structure tương ứng → hiểu SHAPE của email
3. Đọc 1 real example từ swipe-file (link ở cuối mỗi section)
4. Viết
5. Mở content-standards.md → pre-send checklist → check
```

> Nếu writer mới: đọc 3-5 emails trong `swipe-file-best-emails.md` TRƯỚC khi đọc file này. Structure dễ hiểu hơn khi đã thấy finished product.

---

# PART 1: EMAIL STRUCTURES

---

## 1A. Campaign Email — Structure theo Job

Mỗi campaign email có 1 JOB. Structure khác nhau tùy job — nhưng tất cả share 1 nguyên tắc:

> **Story là bắt buộc** (trừ CLOSE, LIVE, announcement ngắn). Sale context + CTA đan xen, nhưng email phải có scene + character + emotional arc.

### EMAIL ANATOMY (chung cho mọi campaign email có story)

```
┌─ SUBJECT LINE ──────────────────────────────┐
│  Curiosity gap hoặc quote fragment.         │
│  Preview text MỞ RỘNG subject, không lặp.   │
├─ CONTEXT BLOCK (3-5 lines) ─────────────────┤
│  Sale name + dates + deal summary.          │
│  KHÁC mỗi email trong sequence.             │
│  Cold reader hiểu email này về gì.          │
├─ STORY (60-70% email) ─────────────────────-┤
│  Scene: timestamp + location + character.    │
│  Tension: unexpected event/quote/discovery.  │
│  Escalation: emotional arc builds.           │
│  TURN: gap between expectation & reality.    │
│  Landing: Michelle's realization.            │
├─ PIVOT (2-4 lines) ─────────────────────────┤
│  Story → product/sale — invisible seam.      │
├─ CTA ───────────────────────────────────────┤
│  1 action. Matches Job.                      │
├─ SIGN-OFF ──────────────────────────────────┤
│  Love, Michelle                              │
├─ P.S. ──────────────────────────────────────┤
│  Nia/George/Customer/Direct — connected.     │
└─────────────────────────────────────────────┘
```

### ANNOTATED WALKTHROUGH — "George's Stupid Question" mapped to anatomy

> Đọc email đầy đủ: `examples/daily/daily_280326_george_asked_a_stupid_question.md`

```
SUBJECT: "She got her daddy's nose."
  ← CURIOSITY — incomplete quote, reader PHẢI mở để hiểu

PREVIEW: "Six words at a dinner table. Twenty-five years of silence."
  ← MỞ RỘNG subject — thêm weight, không lặp

CONTEXT BLOCK: (không có — daily email, không campaign)
  ← Daily emails KHÔNG CẦN context block. Nếu có deal: đặt ở CTA section.

STORY — Scene setter:
  "George, my husband, was in the office yesterday."
  "(This is already a problem. George in my office is like a toddler
   in a pottery shop.)"
  ← CHARACTER + LOCATION + INNER VOICE (comedy setup TRƯỚC tension)

STORY — Tension:
  George: "Why do the bags need WORDS on them?"
  ← UNEXPECTED QUESTION — đơn giản nhưng trigger toàn bộ email

STORY — Escalation (secondary character introduced):
  Toni visits → text message → phone call → dinner table → age progression
  "At 14... At 16... At 22... At 30..."
  ← Template KHÔNG bắt buộc 1 character. Secondary characters OK khi story đòi hỏi.

STORY — Turn:
  "She hadn't been polite. She'd been QUIET."
  ← EXPECTATION vs REALITY — Michelle's understanding shifts, reader shifts with her

STORY — Landing:
  "Twenty-five years. That's how long six words lasted."
  ← DISTILLATION — toàn bộ story condensed thành 1 câu

PIVOT:
  "That's why I made these bags, George."
  ← STORY-DRIVEN, invisible seam. Story EARNS product.

CTA:
  "One for your friend who still turns her head left in every picture."
  ← PERMISSION + GIFT FRAMING — không "buy now" mà "give to someone who needs it"

P.S.: George → "...what I needed to hear at 14" → bald joke
  ← THEMATICALLY CONNECTED — mirrors Toni's question about identity

P.P.S.: "Kayla is 13."
  ← CUSTOMER CALLBACK — extends story, gut punch closing
```

> **Takeaway:** Email này violate nhiều "patterns" (comedy setup trước tension, secondary character, George ở main body, P.P.S. là customer callback không phải Nia). Nhưng nó hoạt động vì mỗi violation SERVE the story. Pattern là guide, không phải cage.

---

### Cách SHAPE thay đổi theo Job

| Job | Context Block emphasis | Story emphasis | CTA emphasis |
|-----|----------------------|----------------|-------------|
| **ANNOUNCE** | Lý do sale tồn tại (mission/game/season) | WHY this sale matters — emotional origin | Soft: "text [KW] to join" |
| **JUSTIFY** | Value math, price breakdown | Objection → honest answer → reframe | Math-based: show value stack |
| **PROVE** | Updated social proof number | Customer quote NGUYÊN VĂN → Michelle reacts | Medium: reveal tiers qua customer lens |
| **TEACH** | Mechanic summary | Metaphor/analogy maps 1:1 to sale mechanic | Prep: "browse tonight" |
| **PREPARE** | Full schedule, exact times | Character prep behavior (Keisha's alarms) | Action: "set alarm 9:55 AM" |

### CLOSE — Structure khác (no story)

```
Real-time counter: X → Y → Z (growing while writing)
Hard deadline: "Midnight tonight."
Binary: "No text = No link = No shot."
CTA. Done.
```

### LIVE — Structure khác (chaos, not arc)

```
Timestamps + character reactions simultaneous:
  10:03 AM — Tasha: "[CITY]. [PRODUCT]. GONE."
  10:06 AM — Marcus: [action]
  10:09 AM — George: [confusion]
Current status: X orders, Y spots left.
CTA: immediate.
```

### THANK — Structure khác (no sell)

```
THE RECEIPT: "$X. Not a pledge. A transfer. Done."
Breakdown: X orders × $Y = $Z impact.
Gratitude: name specific customers/moments.
Character resolution: George's final action, Alice's reaction.
NO CTA or very soft future hint.
```

**Real examples to study:**
- ANNOUNCE: `swipe-file` #5 "Claw Machines", campaign analyses (BLS #1, IWD #1)
- JUSTIFY: BLS #3 "$9.95 Real?", MLK #4 "Math Problem"
- PROVE: BLS #4 "SHE GETS IT"
- TEACH: BLS #5 "Claw Machines", BLS #8 "Two Strategies"
- CLOSE: BLS #10 "LAST CALL"
- LIVE: BLS #11 "BLS IS LIVE"
- THANK: IWD Recap "$2,500. Here's the receipt."

---

## 1B. Daily Broadcast Email — Structure theo Story Source

Daily emails share 1 anatomy chung (Michelle Story Arc) nhưng **opening approach** và **pivot method** thay đổi theo source.

### MICHELLE STORY ARC (chung)

```
1. SCENE SETTER — Specific moment (time, place, sensory detail)
2. THE HOOK — Something unexpected
3. THE STORY — Build emotional momentum
4. THE PIVOT — Connect to bigger meaning (and sometimes product)
5. SOFT CTA — Feels like natural conclusion
6. SIGN-OFF — "Love, Michelle"
7. P.S. — Nia/George/Customer/Direct
```

### Cách OPENING thay đổi theo Story Source

| Story Source | Opening pattern | Ví dụ thật |
|-------------|-----------------|------------|
| **Customer Voice** | Quote lead HOẶC discovery scene (Michelle đọc review) | "She walks in. They stared." / "I was reading reviews at 11 PM..." |
| **Cultural Moment** | Nia interruption HOẶC news discovery | "6:47 AM. Kitchen. Nia: 'Mom, did you know...'" |
| **Family/Personal** | Sensory scene + character enters | "Deep in that Sunday morning sleep. BANG. Door flies open." |
| **Product Origin** | Reveal/confession HOẶC Keisha enters | "I'm not supposed to show you this." / "Keisha texted at 9 PM on a Tuesday." |
| **Community Achievement** | Number/result lead | "$2,000. Not a pledge. A transfer." |
| **Industry Commentary** | Contradiction/observation | "A law student made a flyer. Someone told her to remove 'Black.'" |

### Cách PIVOT thay đổi theo Story Source

| Story Source | Pivot pattern | Ví dụ |
|-------------|---------------|-------|
| **Customer Voice** | Customer's own words name the product | "Phyllis said: 'purse and matching wallet are everything.'" |
| **Cultural Moment** | Historical parallel → reader → product | "She showed up anyway. So can you. → The Heritage Tote" |
| **Family/Personal** | Story reveals why product exists | "That's why I made these bags, George." |
| **Product Origin** | Michelle's gaze enters product | "I pulled up the sketch and stared." |
| **Community Achievement** | Receipt IS the content | No pivot needed — proof is the email |
| **Industry Commentary** | Product as anti-thesis | "I put those words ON the bag. On the outside." |

### Patterns mà BEST EMAILS thường dùng (nhưng KHÔNG bắt buộc)

Đây là patterns quan sát được từ top emails — không phải rules. Best emails thường VIOLATE patterns:

| Pattern | Phổ biến ở | Violation example |
|---------|-----------|-------------------|
| Timestamp opening | Cultural Moment, Family | "The Check-Up" mở bằng declaration, không timestamp |
| Comedy setup trước tension | Family/Personal (George) | Some emails vào thẳng tension, comedy ở P.S. |
| 1 character throughout | Most daily | "George's Question" introduces Toni as secondary character |
| P.S. = opposite of main character | Theory | "George's Question" P.S. = George (same as main) — works because callback |

> **Takeaway:** Structure là GUIDE, không phải constraint. Nếu email HAY hơn khi break pattern → break. Test: đọc thành tiếng — nếu nghe natural thì pattern violation = OK.

### Daily Email + Deal — Where does deal info go?

Daily emails thường KHÔNG có Context Block (đó là campaign element). Nhưng nhiều daily emails CÓ deal. Deal info xuất hiện ở:

- **CTA section** — sau story, sau pivot: "Today's Deal: 40% OFF + matching wallet FREE. → [LINK]"
- **KHÔNG phải** context block riêng ở đầu email (daily email mở bằng story, không sale context)
- Deal info phải feel like natural conclusion của story, không phải separate marketing block

Ví dụ từ "The Check-Up": story về Phyllis → pivot "purse and matching wallet are everything" → CTA: "Today's Deal: 40% OFF selected bags + matching wallet FREE." Deal là PART OF story flow.

---

## 1C. "Light" Email Structures

Không phải mọi email cần 15-25 lines story. Các format nhẹ:

### Seinfeld Email (Mundane moment → unexpected pivot)

```
Mundane observation (2-3 lines) — grocery store, school pickup, morning coffee
→ Unexpected detail/thought (1-2 lines)
→ "And that made me think about..."
→ Short product connection (2-3 lines)
→ CTA
```

Nhẹ, funny, observational. Không cần emotional weight. Dùng khi: Story Bank cạn, cần palate cleanser, weekend email.

> **Word count:** Seinfeld emails có thể 250-350 words — dưới "400-1000" guideline trong standards. Đây là exception được phép: format ngắn IS the point. Nếu Seinfeld email dài 600 words → nó không còn Seinfeld nữa.

### Product Spotlight (Light story, product-forward)

```
1 scene: Michelle holding/using product (3-5 lines)
What makes THIS product different (3-5 lines — trong scene, không brochure)
Deal if applicable
CTA
```

Dùng khi: product mới, restock, collection highlight. Không cần deep narrative.

### Customer Cascade (Multiple quotes, short reactions)

```
Quote 1 → Michelle's 1-line reaction
Quote 2 → Michelle's 1-line reaction
Quote 3 → Michelle's 1-line reaction (emotional peak)
→ "These women don't need me to sell them anything. They're selling each other."
→ CTA
```

Dùng khi: có 3+ customer quotes strong. Ascending emotional order. Best khi quotes tự kể story.

> **Clarification:** Customer Cascade KHÔNG vi phạm "1 story, 1 throughline" rule — throughline ở đây là COLLECTION of voices telling the same story from different angles. 1 throughline = "customers are falling in love." 3 quotes = 3 pieces of evidence cho cùng throughline.

---

# PART 2: SMS STRUCTURES

> SMS pillars và techniques đã define trong `content-taxonomy.md` Part 2B.
> Section này chỉ cover STRUCTURES — shape of SMS, không duplicate pillars.

---

## Flash Deal SMS — 3 Structural Patterns

Mọi flash deal SMS follow 1 trong 3 patterns:

### Pattern A: STORY-DRIVEN (dài nhất, ~300-480 chars)

```
Personal moment/observation (2-3 lines)
→ Connects to product (1 line)
→ Deal: product + both prices (1 line)
→ Link
→ Warm closer + sign-off
```

Dùng khi: có real story, HIGH segment, relationship building.

### Pattern B: CHARACTER-DRIVEN (~200-350 chars)

```
Character does/says something (1-2 lines)
→ Michelle reacts (1 line)
→ Deal (1 line)
→ Link
→ Comedy closer + sign-off
```

Dùng khi: muốn lighter tone, George/Alice device.

### Pattern C: DIRECT (~100-200 chars)

```
Product name
Was: $X / Now: $Y
Who: just you / How long: 24h
Link
One-liner closer
```

Dùng khi: SMS fatigue (sau nhiều dài), palate cleanser, simple deal.

**Pattern A example (story-driven):**
```
Sis. I carried the Zuriya tote to brunch yesterday. A woman at the next
table leaned over and said "where did you get that bag?" Then she tried
to BUY IT OFF MY ARM. 😂 She loved the quote on it. 50% OFF today only:
[LINK] Saturday energy. Go treat yourself. — Michelle 💜
```

**Pattern B example (character-driven):**
```
Sis. I need you to move fast. Not because of a timer — because of Alice.
Zanira bags. $89.95. Normally $149.95. Alice doesn't check the pricing
sheet until Thursday. When she does, this price DIES. 👉 [LINK]
24 hours. Or whenever Alice gets to row 47. 😭 — Michelle
```

**Pattern C example (direct):**
```
Sis.
"Kadia Crossbody"
Was: $129.95 / Now: $77.95
Who: just you / How long: 24h
👉 [LINK]
Don't make me beg. — M 💜
```

> Writer chọn pattern (A/B/C) dựa trên: recent SMS history (variety), product type, segment. Không lặp cùng pattern 2 lần liên tiếp.

---

## Campaign SMS — Structure theo Phase

| Phase | Structure | Length |
|-------|-----------|--------|
| **Registration drive** (MASS) | Curiosity hook → hint deal → "Reply [KW]" (NO link) | Under 200 chars |
| **Behind-the-scenes** (REG) | Michelle ở warehouse → real prices → "browse tonight" | 200-350 chars |
| **Data anomaly** | Tech person reports → Michelle reacts → implication | 200-300 chars |
| **Prep/Schedule** | Numbered steps: text, browse, set alarm, move fast | 200-350 chars |
| **Launch** | "IT'S LIVE" → 1 line energy → link | Under 200 chars |
| **Sale day updates** | Real-time: "X orders in. Y left." → tier update → link | 150-250 chars |
| **Last call** | "X spots left. Closes tonight." → link | Under 150 chars |

---

# PART 3: CAMPAIGN SEQUENCE PLANNERS

> Skeleton cho toàn bộ campaign. Plan TRƯỚC khi viết từng email.
> Đây là operational tool — dùng trong weekly planning.

---

### How to use during campaign execution

1. **Copy** planner table vào campaign folder (planning/weekly/ hoặc riêng)
2. **Sau mỗi email**, mark done + note story/character đã dùng
3. **Trước email tiếp**, check: "Reader đã biết gì? Info MỚI lần này là gì?"
4. **Track SMS** alongside — đừng gửi MASS + REG conflicting messages cùng ngày
5. **Nếu schedule shift** (skip 1 ngày, thêm 1 email), update planner — đừng viết "email #7" khi chưa gửi #5-6

---

## Gamified Campaign (10-14 emails, 15-20+ SMS)

| # | Job | Day | Email Focus | SMS |
|---|-----|-----|-------------|-----|
| 1 | ANNOUNCE | D-14 | Sale name + lý do + "It's a GAME" + text [KW] | MASS: registration |
| 2 | JUSTIFY | D-12 | Price tiers — rare vs abundant | REG: welcome |
| 3 | PROVE | D-10 | Customer quote + registration count | MASS: social proof |
| 4 | TEACH | D-8 | Metaphor story → mechanic | — |
| 5 | PROVE | D-7 | Inventory scene (warehouse, real numbers) | REG: BTS preview |
| 6 | TEACH | D-6 | Beta test / friend group proof | — |
| 7 | TEACH | D-5 | Strategy options (2 personas) | MASS: urgency |
| 8 | PREPARE | D-2 | Full schedule + alarm + steps | REG: prep |
| 9 | CLOSE | D-1 | Real-time counter + deadline | MASS: LAST CALL |
| 10 | LIVE | D0 AM | War room chaos | ALL: launch |
| 11 | LIVE | D0 PM | Update: what's left | REG: stock update |
| 12-13 | LIVE | D+1,+2 | New energy, new products, closing | REG: 5-8 SMS/day |
| 14 | THANK | D+3 | Receipt + impact | REG: thank you |

## Mission Campaign (6-8 emails, 8-12 SMS)

| # | Job | Day | Email Focus | SMS |
|---|-----|-----|-------------|-----|
| 1 | ANNOUNCE | D-10 | Mission story + emotional WHY + text [KW] | MASS: registration |
| 2 | JUSTIFY | D-8 | Deal structure + charity math | REG: welcome |
| 3 | PROVE | D-6 | Registration count + exclusivity | MASS: proof |
| 4 | JUSTIFY | D-4 | Value stack | REG: value |
| 5 | PREPARE | D-2 | 1 objection per email (budget/size/what-to-do) | REG: prep |
| 6 | CLOSE | D-1 | Deadline + spots remaining | MASS: LAST CALL |
| 7 | LIVE | D0 | Real-time progress | ALL: launch |
| 8 | THANK | D+1 | Receipt + impact proof | REG: thank you |

## Flash/Themed Campaign (3-5 emails, 5-8 SMS)

| # | Job | Day | Email Focus | SMS |
|---|-----|-----|-------------|-----|
| 1 | ANNOUNCE | D-5 | Theme + products + registration | MASS: CTA |
| 2 | PROVE/JUSTIFY | D-3 | Social proof or value | REG: warmup |
| 3 | PREPARE | D-1 | Prep + schedule | REG: reminder |
| 4 | LIVE | D0 | Sale live | ALL: launch |
| 5 | THANK | D+1 | Results | — |

## Clearance (1-3 emails, 2-5 SMS)

| # | Job | Email Focus | SMS |
|---|-----|-------------|-----|
| 1 | ANNOUNCE | Lý do (overstock/season end) + deals | Flash deal SMS |
| 2 | LIVE | What's left + deep discounts | Update |
| 3 | CLOSE | Last day (optional) | Last call |

---

# PART 4: DEVELOPMENT GUIDE — Từ Idea → Email

> Khi Story Bank entry chỉ có 1-2 dòng → how to develop thành full email?

## Từ SEED → Draft

| Bước | Action | Output |
|------|--------|--------|
| 1 | **Đọc raw material** — quote, fact, moment | Hiểu CORE emotion |
| 2 | **Hỏi: "Scene ở đâu?"** — kitchen? warehouse? phone call? | 1 location cụ thể |
| 3 | **Hỏi: "Ai nói gì?"** — customer quote? Nia fact? George reaction? | 1 dialogue moment |
| 4 | **Hỏi: "Turn ở đâu?"** — gap between expectation và reality | 1 surprise/shift |
| 5 | **Hỏi: "Product vào bằng cách nào?"** — organic? story-driven? no product? | Pivot method |
| 6 | **Viết HOOK trước** — 3-5 dòng đầu. Nếu hook strong → phần còn lại dễ | Draft hook |
| 7 | **Viết story** — follow the emotion, không follow outline | Full draft |
| 8 | **Check standards** — pre-send checklist | Final |

## Từ Customer Quote → Email

```
Quote: "bc I just stop to use the restroom and I have to tell you—"

1. Scene: Michelle đọc quote ở đâu? Mấy giờ? Đang làm gì?
   → "11 PM. George asleep. I'm scrolling reviews."

2. Quote delivery: paste NGUYÊN VĂN. Giữ typos, emoji, "lol."
   → "bc I just stop to use the restroom and I have to tell you—"

3. Michelle reacts: PHYSICAL, not analytical.
   → "I put my phone down." — NOT "This shows the power of our brand."

4. Turn: what detail bất ngờ? What wasn't expected?
   → Customer stopped changing bags weekly.

5. Pivot: customer's own words → product.
   → "purse and matching wallet are everything" → deal.
```

## Từ Cultural Date → Email

```
Date: Jackie Robinson Day (April 15)

1. Nia delivers fact: specific, dramatic, age-appropriate.
   → "Mom. April 15th, 1947. Do you know what happened?"

2. Historical story: INHABIT, don't summarize.
   → Show the moment, the obstacles, the decision.

3. Turn: what makes this RELEVANT to reader TODAY?
   → "Showing up where you don't belong isn't defiance — it's destiny."

4. Pivot: parallel to reader carrying an Afroyla bag.
   → "Carry something that already knows who you are."

5. **⚠️ CRITICAL: VERIFY EVERY HISTORICAL FACT.**
   Nia facts must be cross-checked against 2+ sources. Getting Black history wrong is BRAND-DESTROYING for Afroyla's audience. Sai ngày, sai tên, sai chi tiết → mất trust permanently. Nếu không verify được → ĐỪNG dùng fact đó. Save cho khi có thời gian research kỹ. An email without Nia fact > an email with wrong Nia fact.
```

## Khi bị stuck

| Stuck ở | Giải pháp |
|---------|-----------|
| Không biết viết gì | Check Story Bank READY items → chọn 1 |
| Có idea nhưng không biết mở đầu | Viết MIDDLE trước (scene + dialogue), quay lại hook sau |
| Hook weak | Thử 3 hooks khác nhau → pick strongest → delete others |
| Story quá dài | Cắt secondary details → save cho Story Bank (future email) |
| Pivot feels forced | Story chưa đủ strong → strengthen story, pivot sẽ tự nhiên |
| P.S. disconnected | Đọc lại email → hỏi "George/Nia sẽ phản ứng gì với TOPIC này?" |
