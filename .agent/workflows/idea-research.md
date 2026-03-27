---
description: Daily Idea Research - Tìm ý tưởng hàng ngày cho Infotainment Email từ nhiều nguồn
---

# 🔍 AFROYLA DAILY IDEA RESEARCH WORKFLOW

> **Mục tiêu:** Tìm và brainstorm ý tưởng câu chuyện mới cho Infotainment Email hàng ngày
> **Output:** Danh sách 3-5 ý tưởng email với Hook (Hot Dog) + Bridge + Product (Broccoli)

---

## BƯỚC 1: SCAN REVIEWS (Customer Stories)

### 1A. TrustPilot Reviews
- URL: https://www.trustpilot.com/review/afroyla.com
- Dùng `read_url_content` để đọc các review mới nhất
- **Tìm kiếm:**
  - Review có câu chuyện cá nhân (mua cho mẹ, cho chị gái, đi sự kiện...)
  - Review có chi tiết cảm xúc ("compliments everywhere", "my husband gave me...", "took it to church")
  - Review có feedback cụ thể (gợi ý cải tiến → có thể dùng như "Shayla" trong Bag Charm email)
  - Review có drama (vấn đề shipping, chất lượng → nếu đã giải quyết tốt → câu chuyện customer care)

### 1B. Afroyla Website Reviews
- URL: https://afroyla.com/pages/afroyla-reviews
- Dùng `read_url_content` để đọc reviews
- **Đặc biệt chú ý:**
  - Reviews dài, kể chuyện (VD: Karen from Massachusetts — mang túi đi khắp nơi, mọi người hỏi)
  - Reviews từ husbands/partners buying cho wives (góc nhìn khác)
  - Reviews mention sự kiện cụ thể (Alvin Ailey show, Juneteenth, Christmas...)

### 1C. Customer Voices (Digest Files)
- Scan `D:\Copywriting Afroyla\customer-voices\` cho entries chưa dùng
- **Ưu tiên scan:**
  1. `stories/` → entries có `Potential Hook: ⭐⭐⭐⭐` trở lên + `Used: ❌`
  2. `compliments/` → entries có chi tiết cụ thể (người, nơi, phản ứng)
  3. `suggestions/` → gợi ý sản phẩm mới có thể dùng làm "teaser" email
- **Search command:** Tìm `Used: ❌` trong tất cả digest files của tháng gần nhất
- **Pattern hay:** 
  - Khách hàng suggest sản phẩm mới → teaser email
  - Phản ứng từ người lạ (dealership, church, airport) → social proof story
  - Family moments (daughter, husband, mother) → emotional connection
  - Repeat buyers → loyalty/pride story
- **Nếu chưa có entries:** Nhắc user chạy `/process-customer-emails` trước

---

## BƯỚC 2: SCAN TIN TỨC & VĂN HÓA

### 2A. Reddit — DEEP RESEARCH (Nguồn chính cho Audience Language & Ideas)

> **Tại sao Reddit quan trọng:** Đây là nơi tệp audience nói chuyện THẬT — không filter, không polish. 
> Ngôn ngữ ở đây = ngôn ngữ dùng trong subject lines, hooks, và email body.

---

#### PHASE 1: REDDIT SEARCH (Chủ động tìm — làm TRƯỚC)

Dùng `read_url_content` với Reddit Search API:
```
https://www.reddit.com/search/.json?q=KEYWORD&sort=relevance&t=month&limit=10
```

**Keyword Clusters — xoay vòng mỗi ngày, chọn 2-3 clusters:**

| Cluster | Keywords | Tìm gì? |
|---------|----------|---------|
| 🛍️ Product | `leather bag compliments`, `handbag confidence`, `luxury bag worth it`, `bag investment piece` | Stories về túi tạo cảm giác gì, tại sao chọn túi đắt |
| ✊ Culture | `black women fashion`, `african heritage style`, `cultural accessories`, `black girl luxury` | Cách audience nói về fashion & identity |
| 💕 Emotion | `compliment on my bag`, `bought myself a treat`, `self-gift`, `treat yourself moment` | "Seinfeld moments" — khoảnh khắc nhỏ nhưng vivid |
| 📖 Stories | `bag story`, `what's in my bag`, `this bag lasted years`, `favorite bag ever` | Câu chuyện dài, có chi tiết cá nhân |
| 👩‍👧 Sisterhood | `gift for my mom bag`, `gift for wife purse`, `bought my sister`, `mother daughter matching` | Gift-giving stories → emotional hooks |

**Cũng có thể search TRONG một subreddit cụ thể:**
```
https://www.reddit.com/r/blackladies/search/.json?q=KEYWORD&sort=relevance&t=year&restrict_sr=on&limit=10
```

---

#### PHASE 2: BROWSE SUBREDDITS (Thụ động scan — làm SAU search)

Dùng `read_url_content` với: `https://www.reddit.com/r/[subreddit]/top/.json?t=week&limit=10`

> ⚠️ **Rate Limit Strategy:** 
> - Đợi 3 giây giữa mỗi request (Reddit rate limit)
> - Scan Tier 1 TRƯỚC — nếu bị 429, dừng và dùng fallback
> - **Fallback khi bị block:** dùng `search_web` với query `site:reddit.com r/[subreddit] [keyword]`

**🎯 Tier 1: Black Women Community (SCAN MỖI NGÀY)**

| Subreddit | Tìm gì? | Infotainment Potential |
|-----------|---------|----------------------|
| r/blackladies | Everyday stories, vent posts, celebration posts, fashion | ⭐⭐⭐⭐⭐ "Seinfeld moments" + relatable experiences |
| r/HappyBlackWomen | Positive moments, achievements, joy | ⭐⭐⭐⭐⭐ "Feel-good" hooks, pride stories |
| r/blackgirlmagic | Achievements, flexes, inspirational moments | ⭐⭐⭐⭐ Achievement hooks |

**👜 Tier 2: Fashion & Luxury (2-3x/tuần)**

| Subreddit | Tìm gì? | Infotainment Potential |
|-----------|---------|----------------------|
| r/handbags | "What's in my bag," quality debates, brand love/hate | ⭐⭐⭐⭐⭐ Product comparisons, "why I chose THIS bag" |
| r/femalefashionadvice | Style dilemmas, "what to wear to X" | ⭐⭐⭐⭐ Fashion moments, dressing-for-power stories |
| r/leather | Leather quality posts, aging/patina photos | ⭐⭐⭐ "Broccoli" content — educate about leather |
| r/BuyItForLife | "This bag lasted 10 years" stories | ⭐⭐⭐⭐ Quality > quantity narratives |

**✊ Tier 3: Black Culture & History (2-3x/tuần)**

| Subreddit | Tìm gì? | Infotainment Potential |
|-----------|---------|----------------------|
| r/BlackHistory | Historical events, "on this day," forgotten heroes | ⭐⭐⭐⭐⭐ Law #10 (Historical Analogies) |
| r/AfricanAmerican | Heritage discussions, cultural identity | ⭐⭐⭐⭐ Cultural pride hooks |
| r/BlackPeopleComedy | Viral moments, relatable humor | ⭐⭐⭐⭐ Humor hooks, "Seinfeld" opening |
| r/EbonyImagination | Art, creativity, Afrofuturism | ⭐⭐⭐ Visual inspiration, "imagine if" hooks |

**💼 Tier 4: Professional Women (1x/tuần)**

| Subreddit | Tìm gì? | Infotainment Potential |
|-----------|---------|----------------------|
| r/TwoXChromosomes | Workplace stories, "today at work" moments | ⭐⭐⭐⭐ Corporate Michelle stories |
| r/MoneyDiariesACTIVE | Spending habits, "is this worth it" debates | ⭐⭐⭐⭐ Value vs cheap arguments |
| r/FemaleProfessionals | Career wins, boardroom confidence | ⭐⭐⭐ Power-dressing hooks |

**💇 Tier 5: Lifestyle & Self-Care (1x/tuần)**

| Subreddit | Tìm gì? | Infotainment Potential |
|-----------|---------|----------------------|
| r/Naturalhair | Hair journey stories, self-acceptance | ⭐⭐⭐⭐ Identity/pride → bag as crown metaphor |
| r/blackskincare | Self-care rituals, "treat yourself" | ⭐⭐⭐ Self-investment angle |
| r/blacktravel | Travel stories, "packed THIS bag for..." | ⭐⭐⭐⭐ Travel + bag stories |

---

#### PHASE 3: ĐÀO SÂU COMMENTS (Bước quan trọng nhất!)

> 🏆 **GOLD MINE nằm ở COMMENTS, không phải post title.**
> Comments = cách audience THỰC SỰ nói chuyện, THỰC SỰ cảm nhận.

**Khi nào đào comments:**
- Post có `num_comments >= 20` VÀ `score >= 50`
- Post có flair: "Just Venting", "Celebrate w/ Me!", "Dating/Relationships", "Beauty/Fashion"

**Cách đọc comments:**
```
https://www.reddit.com/r/[subreddit]/comments/[post_id]/.json?sort=top&limit=25
```
(Lấy `post_id` từ field `id` trong JSON data của Phase 2)

**Tìm gì trong comments:**
1. **"Seinfeld moments"** — chi tiết đời thường nhưng cực vivid
   - Giờ cụ thể, nơi cụ thể, dialogue cụ thể
   - VD: *"Girl I wore my new bag to church last Sunday and Ms. Patricia grabbed my arm talking about 'WHERE did you get that'"*
2. **Emotional language** — cách họ diễn tả cảm xúc
   - VD: *"I felt like THAT girl", "it's giving main character energy", "the confidence was unmatched"*
3. **Relatable struggles** — vấn đề chung của audience
   - VD: *"Why is it so hard to find quality bags that aren't basic?", "I'm tired of fast fashion falling apart"*
4. **Product opinions** — cách họ nói về sản phẩm (bất kỳ, không chỉ túi)
   - VD: *"The leather smell alone was worth it", "I don't care about the price if it LASTS"*

---

#### PHASE 4: EXTRACT NGÔN NGỮ AUDIENCE

Sau khi đọc posts + comments, tạo mini-glossary cho ngày hôm đó:

```
## 📝 AUDIENCE LANGUAGE LOG — [Ngày]

### Cách gọi sản phẩm:
- bag, purse, tote, satchel, clutch, "my baby", "my investment piece"...

### Cách diễn tả cảm xúc tích cực:
- "I felt like THAT girl"
- "giving main character energy" 
- "the confidence was UNMATCHED"
- "I literally got stopped 3 times"
- "everybody and they mama asked me where I got it"
- [thêm từ posts/comments hôm nay]

### Cách diễn tả vấn đề (pain points):
- "tired of cheap stuff falling apart"
- "why is everything so basic"
- "I want something that MEANS something"
- [thêm từ posts/comments hôm nay]

### Slang & phrases hay (dùng cho subject lines):
- [copy nguyên văn từ posts/comments]
```

> 💡 **Dùng ngôn ngữ này cho:** Subject lines, email hooks, Michelle's internal dialogue, CTA copy

---

#### PHASE 5: GHI LẠI FINDINGS

Cho mỗi post/comment hay, ghi theo template:

```
### 🔴 REDDIT FIND [#]
- **Source:** r/[subreddit] — "[post title]"
- **Link:** https://reddit.com[permalink]
- **Engagement:** [score] upvotes, [num_comments] comments
- **Key Quote:** "[exact quote — từ post HOẶC comment]"
- **Audience Language:** [phrases/slang đáng chú ý]
- **Infotainment Angle:** [Cách pivot về Afroyla — Hot Dog là gì? Broccoli là gì?]
- **Seinfeld Potential:** ⭐⭐⭐⭐⭐ (1-5)
```

#### 📌 Quy tắc vàng khi scan Reddit
1. **Search TRƯỚC, browse SAU** — Phase 1 cho targeted results, Phase 2 cho serendipity
2. **Comments > Titles** — luôn đào comments cho posts engagement cao
3. **Copy nguyên văn** — KHÔNG paraphrase quotes, giữ nguyên giọng của audience
4. **Tìm EMOTION + SITUATION** — không cần liên quan trực tiếp đến túi, pivot sẽ đến sau
5. **Ghi lại language patterns** — đây là "vũ khí bí mật" cho subject lines và hooks

### 2B. Ngày đặc biệt & Nhân vật lịch sử
- Kiểm tra ngày hôm nay có ý nghĩa gì trong Black History:
  - Dùng `search_web`: `"on this day in Black history" [month] [day]`
  - Tìm nhân vật nữ Black trong lịch sử liên quan đến ngày
- **Các dịp quan trọng:**
  - Black History Month (February)
  - Juneteenth (June 19)
  - MLK Day (January)
  - Women's History Month (March)
  - Mother's Day, Valentine's Day, Christmas
  - National Handbag Day (October 10)

---

## BƯỚC 3: BRAINSTORM & CHỌN LỌC

Sau khi thu thập raw material, apply **Infotainment Framework**:

### Cho mỗi ý tưởng, xác định:

| Element | Câu hỏi | Ví dụ |
|---|---|---|
| **Hot Dog (Hook)** | Câu chuyện gì sẽ khiến người đọc PHẢI đọc tiếp? | Review Karen: "đến đại lý ô tô, sales rep khen túi, là người thứ 4 hôm đó mang túi Afroyla" |
| **Broccoli (Product)** | Sản phẩm/feature nào đang cần push? | Bag mới, sale sắp tới, feature đặc biệt |
| **Law (Vehicle)** | Dùng Law nào từ Playbook? | Law #1 (Personality), Law #10 (Historical), Law #15 (Intimate) |
| **Mechanism** | Dùng kỹ thuật nào từ Glossary? | Seinfeld Email, Simplicio, Upstairs Troll |
| **Core Value** | Giá trị cốt lõi nào đang truyền tải? | Black Pride, Resilience, Joy, Heritage, Sisterhood |

### Output Format cho mỗi ý tưởng:

```
## IDEA [#]: [Tên ngắn]
- **Source:** [TrustPilot / Website Review / News / History / Customer Email]
- **Hot Dog:** [Hook story 1-2 câu]
- **Broccoli:** [Product/feature to sell]
- **Law:** [Từ Playbook]
- **Mechanism:** [Từ Glossary]
- **Core Value:** [Black Pride / Resilience / Joy / Heritage / Sisterhood]
- **Subject Line Ideas:** [2-3 options]
- **Potential Rating:** ⭐⭐⭐⭐⭐ (1-5)
```

---

## BƯỚC 4: PRESENT TO USER

Trình bày 3-5 ý tưởng tốt nhất, sắp xếp theo Potential Rating từ cao xuống thấp.
Hỏi user muốn develop ý tưởng nào thành email hoàn chỉnh.

Khi user chọn → chuyển sang workflow `/afroyla-copywriter` để viết email.

---

## GHI CHÚ

- **Luôn đọc các file trong `D:\Copywriting Afroyla\knowledge\core\`** trước khi brainstorm, đặc biệt:
  - `knowledge/core/universe-afroyla-cast.md` — đảm bảo nhân vật nhất quán (George, Nia, Alice, Tasha, Keisha, Marcus)
  - `knowledge/campaign-analysis/klaviyo-campaign-summary.md` — tránh lặp theme/series đã dùng (17 series, 170 campaigns)
  - `knowledge/core/writing-patterns-klaviyo.md` — reference cấu trúc, sentence rhythm, P.S. patterns
  - `knowledge/core/swipe-file-best-emails.md` — 15 emails tốt nhất làm benchmark
- **Tham khảo output mẫu trong `D:\Copywriting Afroyla\examples\`** để match tone & style
- **Không lặp lại** câu chuyện đã dùng — check `D:\Copywriting Afroyla\examples\` trước
- **Ưu tiên** stories có yếu tố cá nhân, cảm xúc mạnh, và cultural relevance
