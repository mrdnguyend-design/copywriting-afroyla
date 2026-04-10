---
description: Idea Research — Harvest ideas và develop Story Bank pipeline
---

# IDEA RESEARCH WORKFLOW

> **Ai chạy:** Bất kỳ ai trong team
> **Khi nào:** Khi Story Bank READY < 5, hoặc 2-3x/tuần để duy trì pipeline
> **Output:** Updated `knowledge/core/story-bank.md` với SEEDs, CONCEPTs, READY items mới
> **Feeds:** `/daily-brief` + `/weekly-planning` (supply ideas cho planning)

---

## MỤC ĐÍCH

Workflow này KHÔNG tìm email cho hôm nay. Workflow này **bổ sung nguyên liệu** vào Story Bank pipeline.

Output = Story Bank đầy hơn. Viết email → qua `/write-email`.

---

## STEP 0: AUDIT STORY BANK

**Trước khi research, đọc:**

1. `knowledge/core/story-bank.md` — đếm items mỗi stage
2. `knowledge/core/content-taxonomy.md` Part 1B — 6 Story Sources, xem source nào thiếu items
3. `planning/weekly/` — tuần tới cần Story Sources gì?

**Health check:**

| Condition | Action |
|-----------|--------|
| READY ≥ 7 AND CONCEPT ≥ 5 | Bank khỏe. Focus develop CONCEPT → READY. Skip STEP 1 (harvest). |
| READY 3-6 | Bank OK. Chạy đầy đủ. |
| READY < 3 | ⚠️ Bank thấp! Full scan + develop ngay. |

**Xác định gaps:**
- Story Source nào có 0 READY items? → ưu tiên research source đó
- Tuần tới cần Campaign Job (TEACH, PROVE)? → harvest material phù hợp

---

## STEP 1: HARVEST — Tìm raw material mới

Scan 4 nguồn. Chọn 2-3 nguồn phù hợp với gaps đã xác định.

### 1A. Customer Voices

**Scan `customer-voices/` folder:**
- `stories/` → entries có `Potential Hook: ⭐⭐⭐⭐` trở lên + `Used: ❌`
- `compliments/` → entries có chi tiết cụ thể (người, nơi, phản ứng)
- `suggestions/` → gợi ý sản phẩm mới (teaser email potential)
- `product-feedback/` → feedback patterns (transparency email potential)

**Nếu customer-voices/ cạn:** Recommend chạy `/process-voices` trước.

**Scan TrustPilot + Website reviews:**
- TrustPilot: https://www.trustpilot.com/review/afroyla.com
- Website: https://afroyla.com/pages/afroyla-reviews
- **Tìm:** Câu chuyện cá nhân, chi tiết cảm xúc, family moments, phản ứng từ người lạ (compliments at church, airport, work)

→ Output: raw material cho **Customer Voice** Story Source

### 1B. Cultural Calendar + News

- Kiểm tra ngày đặc biệt trong 2 tuần tới (từ monthly strategy cultural calendar)
- Search: `"on this day in Black history" [month] [day]`
- Tìm: nhân vật nữ Black, moments of resistance/triumph, heritage connections
- Current events liên quan đến identity, representation, cultural pride

→ Output: raw material cho **Cultural Moment** Story Source

### 1C. Reddit Deep Research

> Reddit = nguồn cho audience language + relatable moments + Seinfeld ideas.

**Keyword Clusters — chọn 2-3 phù hợp gaps:**

| Cluster | Keywords | Tìm gì |
|---------|----------|--------|
| Product | `leather bag compliments`, `handbag confidence`, `bag investment` | Stories về túi tạo cảm giác gì |
| Culture | `black women fashion`, `african heritage style`, `black girl luxury` | Cách audience nói về fashion & identity |
| Emotion | `compliment on my bag`, `bought myself a treat`, `self-gift` | "Seinfeld moments" — nhỏ nhưng vivid |
| Stories | `bag story`, `what's in my bag`, `favorite bag ever` | Câu chuyện dài, chi tiết cá nhân |
| Sisterhood | `gift for my mom bag`, `mother daughter matching` | Gift-giving → emotional hooks |

**Subreddits — scan theo tier:**

| Tier | Subreddits | Scan frequency |
|------|-----------|---------------|
| **Tier 1** (mỗi lần) | r/blackladies, r/HappyBlackWomen, r/blackgirlmagic | Everyday stories, celebrations |
| **Tier 2** (2-3x/tuần) | r/handbags, r/femalefashionadvice, r/BuyItForLife | Quality debates, "why THIS bag" |
| **Tier 3** (2-3x/tuần) | r/BlackHistory, r/AfricanAmerican, r/BlackPeopleComedy | Historical facts, humor |
| **Tier 4** (1x/tuần) | r/TwoXChromosomes, r/MoneyDiariesACTIVE | Workplace stories, spending |
| **Tier 5** (1x/tuần) | r/Naturalhair, r/blacktravel | Self-care, travel + bag stories |

**Process:**
1. SEARCH with keyword clusters (targeted)
2. BROWSE top posts from tier subreddits (serendipity)
3. DEEP COMMENTS on high-engagement posts (20+ comments, 50+ upvotes) — **gold mine nằm ở comments**
4. EXTRACT audience language (cách họ nói, slang, phrases → dùng cho subject lines + hooks)

→ Output: raw material cho **Family/Personal**, **Industry Commentary**, **Community Achievement** Story Sources + audience language

### 1D. Product + Team

- New products/collections coming? → **Product Origin** material
- Behind-the-scenes moments? (Keisha design process, Marcus warehouse) → **Product Origin** / daily story material
- Milestones approaching? (review count, order count, charity total) → **Community Achievement** material

→ Output: raw material cho **Product Origin** + **Community Achievement** Story Sources

---

## STEP 2: CLASSIFY — Gắn vào Story Bank

Mỗi raw material tìm được → classify vào Story Bank stage:

### Thêm SEED

Khi có raw material nhưng chưa có Hook + Bridge:

```markdown
### S-[NNN]: [Mô tả ngắn]
- **Raw Material:** [quote, link, observation]
- **Story Source:** [Customer Voice / Cultural Moment / Family / Product Origin / Community / Industry]
- **Emotional Potential:** ⭐⭐⭐⭐⭐ (1-5)
- **Source:** [TrustPilot / Reddit / customer-voices / news / personal]
- **Added:** [YYYY-MM-DD]
```

### Develop SEED → CONCEPT

Khi có thể xác định Hook + Bridge + Product:

```markdown
### C-[NNN]: [Title]
- **Story Source:** [từ taxonomy]
- **Emotional Driver:** [Pride / Belonging / Vulnerability→Strength / Righteous Anger / Joy]
- **Hook (Hot Dog):** [1-2 câu — cách mở đầu email]
- **Bridge:** [cách story kết nối với product]
- **Product (Broccoli):** [tên sản phẩm cụ thể hoặc TBD]
- **Character:** [ai xuất hiện]
- **Missing:** [cần gì để promote lên READY]
- **Source:** [nguồn]
- **Added:** [YYYY-MM-DD]
```

### Promote CONCEPT → READY

Khi có outline đầy đủ:

```markdown
### R-[NNN]: [Title]
- **Story Source:** [từ taxonomy]
- **Emotional Driver:** [từ taxonomy]
- **Hook (Hot Dog):** [1-2 câu opening]
- **Bridge:** [story → product connection]
- **Product (Broccoli):** [tên cụ thể]
- **Character:** [1-2 characters]
- **Throughline:** [1 câu — message cốt lõi]
- **Subject Line Ideas:** [2-3 options]
- **Structure:** [từ content-templates.md — structure nào phù hợp]
- **Source:** [nguồn]
- **Added:** [YYYY-MM-DD]
```

---

## STEP 3: PRESENT TO USER

Trình bày kết quả:

```
📊 KẾT QUẢ RESEARCH
─────────────────
🌳 READY (sẵn viết):    [X] items mới
🌿 CONCEPT (cần develop): [Y] items mới
🌱 SEED (raw material):  [Z] items mới

Story Source coverage:
  Customer Voice:      [X] READY / [Y] CONCEPT / [Z] SEED
  Cultural Moment:     [X] / [Y] / [Z]
  Family/Personal:     [X] / [Y] / [Z]
  Product Origin:      [X] / [Y] / [Z]
  Community Achievement: [X] / [Y] / [Z]
  Industry Commentary: [X] / [Y] / [Z]
```

Hỏi user:
1. "Muốn develop CONCEPT nào lên READY?"
2. "Muốn develop SEED nào lên CONCEPT?"
3. "Save tất cả vào Story Bank?"

> **KHÔNG tự động chuyển sang `/write-email`.** Viết email qua `/daily-brief` → `/write-email`.

---

## STEP 4: UPDATE STORY BANK

1. Append items mới vào `knowledge/core/story-bank.md` trong section tương ứng
2. Update Inventory Summary counts
3. Report:

```
✅ STORY BANK UPDATED
─────────────────
Before: READY [X], CONCEPT [Y], SEED [Z] = Total [T]
After:  READY [X'], CONCEPT [Y'], SEED [Z'] = Total [T']

Gaps remaining:
- [Story Source X]: cần thêm READY items
- [Story Source Y]: đủ
```

4. Nếu READY < 5 sau update: "💡 Chạy lại ngày mai với keyword clusters khác"

---

## RULES

- **Copy nguyên văn** customer quotes — KHÔNG paraphrase. Typos, "lol", emoji = proof of real person.
- **Tìm EMOTION + SITUATION** — không cần liên quan trực tiếp đến túi. Pivot sẽ đến sau.
- **Ghi lại audience language** — phrases, slang từ Reddit = "vũ khí" cho subject lines và hooks.
- **KHÔNG lặp** story đã dùng — check `story-bank.md` USED section.
- **Ưu tiên** gaps: Story Source nào thiếu items nhất → research source đó trước.
- **Luôn đọc:** `universe-afroyla-cast.md` (character consistency), `swipe-file-best-emails.md` (benchmark quality)
