# 🔄 INFOTAINMENT EMAIL WORKFLOW SYSTEM — BRAND-AGNOSTIC TEMPLATE

> **Nguồn gốc:** Extracted từ hệ thống Afroyla Copywriting Workflow
> **Mục đích:** Blueprint có thể áp dụng cho bất kỳ brand nào muốn viết email theo phong cách Infotainment
> **Cách dùng:** Thay thế tất cả `{{PLACEHOLDER}}` bằng thông tin của brand bạn

---

## MỤC LỤC

1. [Tổng quan hệ thống](#1-tổng-quan-hệ-thống)
2. [Brand Configuration (CẦN CUSTOMIZE)](#2-brand-configuration)
3. [Workflow 1: Process Customer Voices](#3-workflow-1-process-customer-voices)
4. [Workflow 2: Daily Idea Research](#4-workflow-2-daily-idea-research)
5. [Workflow 3: Infotainment Copywriter (CORE)](#5-workflow-3-infotainment-copywriter)
6. [Workflow 4: Brainstorm & Critique](#6-workflow-4-brainstorm--critique)
7. [Knowledge Files cần chuẩn bị](#7-knowledge-files-cần-chuẩn-bị)
8. [Folder Structure](#8-folder-structure)

---

## 1. TỔNG QUAN HỆ THỐNG

### Triết lý cốt lõi

> **"Entertain first, Empower second, Sell third."**

Hệ thống gồm **4 workflows** hoạt động theo chuỗi, tạo thành vòng lặp content liên tục:

```
Customer Feedback → Process & Phân loại → Idea Research → Copywriter → Email gửi đi → Customer feedback → lặp lại
```

### Framework nền tảng: Hot Dog vs Broccoli

| Concept | Ý nghĩa | Ví dụ |
|---------|----------|-------|
| **Hot Dog (Entertainment)** | Phần hấp dẫn — câu chuyện, drama, humor, cultural truth | Câu chuyện cá nhân, tình huống đời thường, pop culture |
| **Broccoli (Product Value)** | Phần "bổ dưỡng" — product features, benefits, specs | Chất liệu, công nghệ, thiết kế, giá trị sử dụng |
| **Quy tắc vàng** | **KHÔNG BAO GIỜ serve Broccoli mà không có Hot Dog** | Luôn wrap product info trong 1 câu chuyện |

### Dual-Persona Review System

Mọi content đều được review bởi 2 personas:

- **"Ben" (Ben Settle style)** — Marketing strategist: Hook strength, personality injection, status positioning, sales psychology
- **"Daniel" (Daniel Throssell style)** — Storytelling expert: Narrative arc, dialogue, show vs tell, emotional pacing

---

## 2. BRAND CONFIGURATION

> ⚠️ **PHẦN NÀY CẦN CUSTOMIZE CHO MỖI BRAND**
> Thay tất cả `{{...}}` bằng thông tin thực tế

### 2A. Brand Identity

```yaml
Brand Name:       {{BRAND_NAME}}
Website:          {{WEBSITE_URL}}
Product Category: {{PRODUCT_CATEGORY}}          # VD: handbags, jerseys, skincare
Price Range:      {{PRICE_RANGE}}               # VD: $150-$500 (premium)
```

### 2B. The Hero — Target Customer

```yaml
Who:              {{TARGET_CUSTOMER}}            # VD: "African American women, 35+, successful professionals"
Pain Points:      {{PAIN_POINTS}}                # VD: "Mainstream luxury ignores their heritage"
Aspiration:       {{ASPIRATION}}                 # VD: "Express heritage through fashion without saying a word"
Core Values:      {{CORE_VALUES}}                # VD: Pride, Resilience, Joy, Heritage, Sisterhood
```

### 2C. The Villain — What You're Against

```yaml
Villain 1:        {{VILLAIN_1}}                  # VD: "Euro-centric Luxury brands that don't respect us"
Villain 2:        {{VILLAIN_2}}                  # VD: "Fast Fashion — cheap products that break"
Villain 3:        {{VILLAIN_3}}                  # VD: "Cultural Erasure — society trying to dim our light"
```

### 2D. The Persona — Who's Writing

```yaml
Writer Name:      {{PERSONA_NAME}}              # VD: "Michelle" — founder/CEO
Relationship:     {{RELATIONSHIP_TO_READER}}    # VD: "Sister-to-Sister", "Best friend", "Mentor"
Style:            {{WRITING_STYLE}}             # VD: "Conversational, vivid, personal. Like a FaceTime call."
Reading Level:    5th grade                      # Giữ nguyên — email cần dễ đọc
Tone Tools:       Short sentences. CAPSLOCK for emphasis. (Parentheses for inner thoughts).
```

### 2E. The Character Universe (Recurring Characters)

```yaml
Character 1:      {{CHAR_1_NAME}} — {{CHAR_1_ROLE}}    # VD: "George — supportive husband"
Character 2:      {{CHAR_2_NAME}} — {{CHAR_2_ROLE}}    # VD: "The kids — source of funny moments"
Character 3:      {{CHAR_3_NAME}} — {{CHAR_3_ROLE}}    # VD: "Best friend — sounding board"
```

### 2F. Review Sources

```yaml
Review Platform 1:  {{REVIEW_URL_1}}            # VD: TrustPilot URL
Review Platform 2:  {{REVIEW_URL_2}}            # VD: Website reviews page
Email Platform:     {{EMAIL_PLATFORM}}           # VD: Klaviyo, Mailchimp, ConvertKit
```

### 2G. Cultural Calendar (Ngày quan trọng cho brand)

```yaml
- {{EVENT_1}}                                    # VD: "Black History Month (February)"
- {{EVENT_2}}                                    # VD: "Juneteenth (June 19)"
- {{EVENT_3}}                                    # VD: "Mother's Day"
- {{EVENT_4}}                                    # VD: "National Handbag Day (October 10)"
```

---

## 3. WORKFLOW 1: PROCESS CUSTOMER VOICES

> **Mục tiêu:** Biến email/feedback khách hàng thành kho nguyên liệu có tổ chức cho content
> **Trigger:** User paste emails hoặc cung cấp nội dung feedback khách hàng

### Bước 1: Nhận Input

User cung cấp emails qua: paste trực tiếp, mô tả tóm tắt, hoặc screenshot.

Cần xác định cho mỗi email:
1. **Tên khách** (first name only) + **Thành phố/State**
2. **Ngày nhận**
3. **Nguồn:** Email reply / DM / Review / Survey
4. **Sản phẩm** được đề cập (nếu có)

> **Privacy first:** Chỉ lưu first name + city. KHÔNG lưu email, phone, hoặc last name.

### Bước 2: Phân loại vào 4 Categories

| Category | Dấu hiệu | Folder |
|----------|-----------|--------|
| **Story** | Kể câu chuyện, trải nghiệm cụ thể, có timeline | `stories/` |
| **Compliment** | Ai đó khen, phản ứng tích cực | `compliments/` |
| **Product Feedback** | Nhận xét chất lượng, chi tiết kỹ thuật | `product-feedback/` |
| **Suggestion** | Gợi ý sản phẩm mới, feature, cải tiến | `suggestions/` |

> Nếu email thuộc 2 categories → ưu tiên category có potential hook cao hơn, ghi cross-ref.

### Bước 3: Extract & Format

```markdown
## [ID] Tên khách, Thành phố
- **Date:** YYYY-MM-DD
- **Source:** Email reply / DM / Review / Survey
- **Product:** [Tên sản phẩm] ([Variant]) hoặc "General"
- **Quote:** "Giữ nguyên lời gốc, chỉ lược bỏ phần không liên quan..."
- **Context:** [1 dòng bối cảnh]
- **Tags:** #tag1 #tag2 #tag3
- **Potential Hook:** ⭐⭐⭐⭐⭐ (1-5)
- **Used:** ❌
```

### Bước 4: Chấm điểm Potential Hook

| Score | Tiêu chí |
|-------|----------|
| ⭐ | Feedback đơn giản, khó viết thành story |
| ⭐⭐ | Có chi tiết hay nhưng không đủ dramatic |
| ⭐⭐⭐ | Có thể dùng làm supporting detail |
| ⭐⭐⭐⭐ | Có scene/moment cụ thể, dễ build thành story |
| ⭐⭐⭐⭐⭐ | Có drama, cảm xúc mạnh, chi tiết vivid — SẴN SÀNG viết |

### Bước 5: Lưu & Báo cáo

- Lưu vào `customer-voices/[category]/YYYY-MM.md`
- Output summary table với high-potential entries

---

## 4. WORKFLOW 2: DAILY IDEA RESEARCH

> **Mục tiêu:** Tìm và brainstorm ý tưởng câu chuyện mới từ nhiều nguồn
> **Output:** 3-5 ý tưởng email với Hook + Bridge + Product

### Bước 1: Scan Reviews (Customer Stories)

- Đọc reviews từ `{{REVIEW_URL_1}}` và `{{REVIEW_URL_2}}`
- Scan `customer-voices/` cho entries chưa dùng (`Used: ❌`) có Potential ⭐⭐⭐⭐+
- **Tìm kiếm:** Review có câu chuyện cá nhân, chi tiết cảm xúc, feedback cụ thể, drama

### Bước 2: Scan Tin tức & Văn hóa

- Search web cho tin tức liên quan đến target audience
- Check ngày hôm nay trong cultural calendar
- Tìm pop culture moments, viral moments, achievements

### Bước 3: Brainstorm & Chọn lọc

Cho mỗi ý tưởng, xác định:

| Element | Câu hỏi |
|---------|---------|
| **Hot Dog (Hook)** | Câu chuyện gì khiến người đọc PHẢI đọc tiếp? |
| **Broccoli (Product)** | Sản phẩm/feature nào cần push? |
| **Law (Vehicle)** | Dùng Law nào từ Playbook? |
| **Mechanism** | Dùng kỹ thuật nào từ Glossary? |
| **Core Value** | Giá trị cốt lõi nào đang truyền tải? |

### Bước 4: Output Format

```
## IDEA [#]: [Tên ngắn]
- **Source:** [TrustPilot / Website Review / News / History / Customer Email]
- **Hot Dog:** [Hook story 1-2 câu]
- **Broccoli:** [Product/feature to sell]
- **Law:** [Từ Playbook]
- **Mechanism:** [Từ Glossary]
- **Core Value:** [Từ brand values]
- **Subject Line Ideas:** [2-3 options]
- **Potential Rating:** ⭐⭐⭐⭐⭐ (1-5)
```

Trình bày 3-5 ý tưởng, sắp xếp theo Potential Rating. Chờ user chọn → chuyển sang Copywriter workflow.

---

## 5. WORKFLOW 3: INFOTAINMENT COPYWRITER (CORE)

> **7-Phase workflow** — Viết email Infotainment từ A → Z

### Phase 1: 📋 BRIEF (User Input)

Nhận brief từ user. Hỏi nếu thiếu:
- **Sản phẩm/Broccoli:** Cái gì cần sell?
- **Context/Hot Dog hint:** Có story seed nào không?
- **Images:** Có hình ảnh cần embed không?
- **Ngày gửi / Campaign:** Email này thuộc series nào?
- **Tone đặc biệt:** Celebratory? Urgent? Reflective? Playful?

### Phase 2: 🧠 BRAINSTORM (As Ben & Daniel)

Roleplay 2 expert personas → Output **5 diverse approaches**, mỗi cái dùng 1 Law khác nhau.

Cho mỗi approach:
1. **Approach name** — e.g., "The 2:43 AM Confession"
2. **Law/Mechanism used** — e.g., Law #15 (Intimate Details) + Seinfeld Email
3. **Mini scene draft** — 3-5 sentence blockquote showing the opening hook
4. **Pivot strategy** — How the story bridges to the product
5. **Why it works** — 1 sentence from Ben or Daniel's perspective

### Phase 3: 📊 ANALYZE (Scoring Table)

| # | Approach | Entertainment ⭐ | Pivot Smoothness ⭐ | Brand Voice ⭐ | Risk | Recommendation |
|---|----------|-----------------|---------------------|---------------|------|----------------|
| 1 | "..." | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Low | ✅ TOP PICK |

**Scoring criteria:**
- **Entertainment (1-5):** Reader có forward cho bạn bè không?
- **Pivot Smoothness (1-5):** Transition story → product tự nhiên hay gượng?
- **Brand Voice (1-5):** Nghe như persona nói, hay marketer viết?
- **Risk (Low/Med/High):** Có thể gây phản cảm với target audience?

→ Recommend top pick. **DỪNG — chờ user chọn.**

### Phase 4: ✍️ DRAFT (Write Complete Email)

Cấu trúc email:

1. **Subject Line** — Short, curiosity-driven, persona's voice
2. **Preview Text** — 1 line bổ sung context (không lặp subject)
3. **The Hook (Seinfeld Opening)** — Bắt đầu giữa hành động. Sensory details. Inner monologue.
   - ❌ KHÔNG bắt đầu bằng "I hope you are well"
   - ✅ Bắt đầu bằng dialogue, action, hoặc 1 khoảnh khắc
4. **The Narrative Arc** — Kể chuyện. Relatable. Vivid imagery.
5. **The Pivot (Bridge)** — Kết nối story → Big Idea tự nhiên
6. **The Sales Pitch** — Giới thiệu product như hero. Broccoli wrapped in Hot Dog.
7. **The CTA** — Direct command + link
8. **Sign Off** — Persona sign-off
9. **P.S.** — Witty comment, scarcity reminder, hoặc hater takedown

### Logic Check (Chạy trước khi present draft):

- [ ] Character consistency — Các nhân vật recurring có in-character?
- [ ] Timeline logic — Timestamps/events make sense?
- [ ] Emotional arc — Cảm xúc tiến triển tự nhiên? (vulnerability → revelation → pride → action)
- [ ] Scene believability — Tình huống có thể xảy ra ngoài đời?
- [ ] Voice check — Nghe như bạn bè nói, hay press release?

### Phase 5: 🔍 REVIEW (Ben & Daniel Critique)

**Ben's Review (Marketing & Hook):**
- Hook power, Personality injection, Status positioning, Sales psychology
- Specific line-by-line improvements

**Daniel's Review (Story & Craft):**
- Scene construction, Dialogue quality, Show vs Tell, Emotional pacing
- Specific line-by-line improvements

**Joint Assessment:**
- Overall Score ⭐/5
- Top 3 strengths + Top 3 improvements needed
- Revised version nếu cần

→ **DỪNG — chờ user approve.**

### Phase 6: 📨 FINALIZE (Platform-Ready Output)

Output 2 formats:
- **Format A:** Plain Text (markdown) cho review
- **Format B:** HTML (inline CSS) cho email platform

### Phase 7: 📁 ARCHIVE (Save Final Draft)

Naming convention:
```
[type]_[tên_ngắn].md     → Plain text
[type]_[tên_ngắn].html   → HTML ready
```

Email types:
| Prefix | Loại | Đặc điểm |
|--------|------|----------|
| `daily_` | Daily Email | Có link về store |
| `teaser_` | Teaser Email | Không chứa link store (link survey, đăng ký...) |
| `sale_` | Sale Email | Chứa sale event |

### ⚡ Phase Gate Rules

| Transition | Hành vi |
|------------|---------|
| Phase 2 → 3 | **Tự động** (brainstorm kèm analysis) |
| Phase 3 → 4 | **DỪNG** — Chờ user chọn approach |
| Phase 4 → 5 | **Tự động** (draft kèm review) |
| Phase 5 → 6 | **DỪNG** — Chờ user approve |
| Phase 6 → 7 | **Tự động** (save sau output) |

---

## 6. WORKFLOW 4: BRAINSTORM & CRITIQUE

> **Dùng độc lập** — Không cần chạy full Copywriter workflow
> **Trigger:** User có draft và muốn review/improve

### Ben's Review Criteria

| Tiêu chí | Mô tả |
|----------|--------|
| **Hook Power** ⭐/5 | Dòng đầu có stop the scroll? |
| **Personality** ⭐/5 | Persona có hiện diện? |
| **Status Positioning** ⭐/5 | Reader cảm thấy là insider? |
| **Sales Psychology** ⭐/5 | CTA có irresistible? Urgency tự nhiên? |
| **Polarization** ⭐/5 | Đủ mạnh để alienate non-target? |

### Daniel's Review Criteria

| Tiêu chí | Mô tả |
|----------|--------|
| **Scene Construction** ⭐/5 | Đọc lên có thấy, nghe, ngửi được? |
| **Dialogue** ⭐/5 | Conversations có real? |
| **Show vs Tell** ⭐/5 | Show emotion qua action? |
| **Emotional Pacing** ⭐/5 | Tension build và release đúng nhịp? |
| **Specificity** ⭐/5 | Chi tiết cụ thể (2:43 AM) hay chung chung? |

### Output

- Line-by-line improvements (quote exact lines + suggest rewrites)
- Joint Assessment: Overall ⭐/5, Top 3 strengths, Top 3 improvements
- Revised full draft nếu score < 4

### Logic Check

- [ ] Character consistency
- [ ] Timeline logic
- [ ] Emotional arc: vulnerability → revelation → pride → action
- [ ] Scene believability
- [ ] Voice check
- [ ] Cultural accuracy

---

## 7. KNOWLEDGE FILES CẦN CHUẨN BỊ

Trước khi chạy workflow, brand cần có các file sau trong folder `knowledge/`:

| File | Nội dung | Bắt buộc? |
|------|----------|-----------|
| `BRAND_CONTEXT.md` | Brand identity, hero, villain, product, mission | ✅ Bắt buộc |
| `CHARACTER_UNIVERSE.md` | Nhân vật recurring: tên, vai trò, tính cách | ✅ Bắt buộc |
| `PLAYBOOK.md` | Các Laws áp dụng (Personality, Polarization, Historical...) | ✅ Bắt buộc |
| `GLOSSARY.md` | Mechanisms & techniques (Seinfeld Email, Simplicio...) | ✅ Bắt buộc |
| `email-html-template.md` | HTML template cho email platform | ✅ Bắt buộc |
| `EXAMPLES/` | 3-5 email mẫu đã viết tốt — tham chiếu tone & style | 🔶 Nên có |
| `email-quality-checklist.md` | Tiêu chuẩn chất lượng | 🔶 Nên có |
| `storytelling-guide.md` | Hướng dẫn kỹ thuật kể chuyện | 🔸 Optional |

### Infotainment Playbook — 18 Laws (Core)

Các Laws phổ biến nhất:

| Law | Tên | Ứng dụng |
|-----|-----|----------|
| #1 | **Personality** | Be the persona. Share struggles, joy, real moments |
| #10 | **Historical Analogies** | Connect product to history, heritage, legacy |
| #15 | **Intimate Details** | Share internal dialogue, insecurities, private moments |
| #18 | **Polarization** | Be okay alienating non-target audience |

### Infotainment Glossary — Key Mechanisms

| Mechanism | Mô tả |
|-----------|--------|
| **Seinfeld Email** | Viết về mundane moments hàng ngày → pivot sang product |
| **Simplicio (The Hater)** | Tạo dialogue với "kẻ nghi ngờ" → persona takedown |
| **Hot Dog / Broccoli** | Wrap product value (broccoli) trong entertainment (hot dog) |
| **Upstairs Troll** | Inner voice phản biện → tự overcome |

---

## 8. FOLDER STRUCTURE

```
{{BRAND_WORKSPACE}}/
├── .agent/
│   └── workflows/
│       ├── copywriter.md              # Workflow 3: Core copywriter
│       ├── brainstorm-critique.md      # Workflow 4: Review & critique
│       ├── idea-research.md            # Workflow 2: Daily idea research
│       └── process-customer-emails.md  # Workflow 1: Process feedback
├── knowledge/
│   ├── BRAND_CONTEXT.md               # Brand identity & positioning
│   ├── CHARACTER_UNIVERSE.md          # Recurring characters
│   ├── PLAYBOOK.md                    # Infotainment Laws
│   ├── GLOSSARY.md                    # Mechanisms & techniques
│   ├── email-html-template.md         # HTML template
│   └── email-quality-checklist.md     # Quality standards
├── customer-voices/
│   ├── README.md                      # Tags & format guide
│   ├── used.md                        # Tracking entries đã dùng
│   ├── stories/                       # Customer stories by month
│   ├── compliments/                   # Compliments by month
│   ├── product-feedback/              # Product feedback by month
│   └── suggestions/                   # Suggestions by month
└── examples/
    ├── daily_*.md / .html             # Daily emails (archived)
    ├── teaser_*.md / .html            # Teaser emails
    └── sale_*.md / .html              # Sale emails
```

---

## CHECKLIST: SETUP MỚI CHO 1 BRAND

- [ ] Điền tất cả `{{PLACEHOLDER}}` trong phần [Brand Configuration](#2-brand-configuration)
- [ ] Tạo `BRAND_CONTEXT.md` — define Hero, Villain, Product
- [ ] Tạo `CHARACTER_UNIVERSE.md` — define recurring characters
- [ ] Customize `PLAYBOOK.md` — chọn Laws phù hợp
- [ ] Customize `GLOSSARY.md` — chọn mechanisms phù hợp
- [ ] Tạo `email-html-template.md` cho email platform
- [ ] Tạo folder structure theo mẫu
- [ ] Viết 2-3 email mẫu lưu vào `examples/` làm tham chiếu
- [ ] Tạo 4 workflow files trong `.agent/workflows/`
- [ ] Test thử 1 vòng: Process feedback → Research → Write → Review
