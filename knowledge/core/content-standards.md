# Content Standards — Afroyla

> Tiêu chuẩn chất lượng cho email + SMS broadcast.
> **Mục đích:** ĐÁNH GIÁ content đã viết — không phải hướng dẫn viết từ đầu.
> **Để viết từ đầu:** Dùng `content-taxonomy.md` (chọn purpose → pillars → techniques → viết).
> **Để đánh giá draft:** Dùng file này (check từng component theo standards bên dưới).
>
> Cross-references:
> - `content-taxonomy.md` — phân loại content, decision trees, techniques
> - `universe-afroyla-cast.md` — character bible đầy đủ
> - `swipe-file-best-emails.md` — 15 Hall of Fame emails
> - `style-rules.md` — 25 rules rút từ feedback

---

# PRIORITY ORDER

Khi draft có vấn đề ở nhiều components — fix theo thứ tự này:

| Priority | Component | Lý do |
|----------|-----------|-------|
| **1** | **Voice** | Không nghe như Michelle → kill it. Không gì cứu được wrong voice. |
| **2** | **Subject Line** | Reader không mở email → mọi thứ bên trong vô nghĩa. |
| **3** | **Story** | Story boring → không hook nào, không pivot nào cứu được. |
| **4** | **Hook (body)** | 3 dòng đầu body quyết định reader có đọc tiếp không. |
| **5** | **Pivot** | Story mạnh cover được pivot yếu. Nhưng invisible > naked. |
| **6** | **CTA** | Reader đã đến đây → CTA weak vẫn có thể convert. |
| **7** | **P.S.** | Bonus — không make or break email. Nhưng great P.S. = memorable. |

> Khi deadline gấp và phải trade-off: **giữ voice + story, chấp nhận CTA/P.S. chưa perfect.**

---

# 1. SUBJECT LINE

> Gap lớn nhất trong v1 — được thêm vào v2.

## Standards

| Tiêu chuẩn | Đạt | Không đạt |
|-------------|-----|-----------|
| **Curiosity hoặc Specificity** | "She's 73." / "She got her daddy's nose." | "New collection inside!" / "Check this out" |
| **Michelle's voice** | Nghe như Michelle nói với bạn | Nghe như marketing department |
| **Dưới 50 chars lý tưởng** | "Men don't post about handbags..." (35 chars) | "We are so excited to share our latest collaboration with you" |
| **Không spoil story** | Tạo curiosity gap — reader PHẢI mở để biết | Tóm tắt toàn bộ email trong subject |
| **Không clickbait trống** | Subject connect với content thật bên trong | Hứa gì đó mà email không deliver |

## Subject Line Formulas

| Formula | Ví dụ thật (từ sent campaigns) | Dùng khi |
|---------|-------------------------------|----------|
| **Quote fragment** | "I am a pastor who is 73 years old..." | Customer Voice email — raw quote = instant credibility |
| **Incomplete action** | "She walked in. They stared." | Any story email — reader PHẢI biết chuyện gì xảy ra |
| **Character + mystery** | "George asked a stupid question" | Family/Personal — George name = open bait |
| **Contradicting statement** | "Men don't post about handbags..." | Cultural Moment, Industry Commentary |
| **Specific number/date** | "My 7-year-old taught me something about sales" | TEACH campaigns, Family stories |
| **Direct offer** (campaign) | "[LIVE NOW] Legacy Collection - First 50 get best deal" | Campaign LIVE/CLOSE only |
| **News/breaking** | "[BREAKING NEWS] March Madness SALE is LIVE" | Campaign LIVE — dùng sparingly |

## Subject Line vs Preview Text

| Element | Job | Ví dụ |
|---------|-----|-------|
| **Subject line** | Tạo curiosity — reader MỞ email | "I was going to be a writer." |
| **Preview text** | Thêm context — KHÔNG lặp subject | "Then my daughter destroyed me at 6:52 AM" |

**Rule:** Preview text MỞ RỘNG subject, không lặp. Hai dòng đọc cùng nhau phải tạo ra intrigue mạnh hơn subject alone.

## Anti-patterns Subject Line

- **ĐỪNG** tóm tắt email: "How Phyllis converted a doctor's office into Afroyla customers" (spoils story)
- **ĐỪNG** generic excitement: "You won't believe what happened!" / "Big news!"
- **ĐỪNG** ALL CAPS toàn bộ subject (trừ [LIVE NOW] tag cho campaign)
- **ĐỪNG** emoji trong subject line (trừ khi brand voice ngày đó specifically calls for it)
- **OK** pre-sell trong subject (khác với body): "My 7-year-old taught me something about sales" = subject tease được. Body thì không "Before I tell you..."

---

# 2. VOICE

## The Michelle Test

Đọc email/SMS thành tiếng. Nếu nghe như:
- ✅ Girlfriend texting lúc 11 PM → pass
- ✅ FaceTime call với best friend → pass
- ❌ Brand newsletter → rewrite
- ❌ Press release → rewrite
- ❌ AI-generated → check em dashes, anaphora, adjective density

## Standards

| Tiêu chuẩn | Đạt | Không đạt |
|-------------|-----|-----------|
| **"I" not "We"** | "I designed..." / "I sat down..." | "We at Afroyla believe..." / "Our team..." |
| **Specific > vague** | "9:47 PM", "February 19th, 1942" | "Late at night", "recently", "one day" |
| **Simple words** | Short sentences. 1-2 per paragraph. | Complex sentences, subordinate clauses, jargon |
| **Inner voice present** | *(This is going to sound dramatic, but stay with me.)* | No parenthetical asides |
| **Greeting personal** | `{{ person.first_name\|default:'love' }}` / "Sis" | "Dear valued customer" / "Hi there" |
| **Sign-off warm** | "Love, Michelle" / "— Michelle 💜" | "— Afroyla Team" / "Best regards" |
| **Em dashes ≤ 3** | Periods, commas, parentheses thay thế | Em dash every other sentence = AI fingerprint |
| **No triple-And** | Varied sentence starters | "And she walked... And she looked... And she..." |

## Email Voice vs SMS Voice

| Element | Email | SMS |
|---------|-------|-----|
| **Length** | 400-1000 words (soft limit — anchor campaign emails có thể dài hơn) | Under 480 chars |
| **Structure** | Scene → story → pivot → CTA → P.S. | 1 thought per line. Fragments OK. |
| **Comedy** | Scene-based, builds through narrative | Situation-based, emerges from moment |
| **Dialogue** | Quoted dialogue trong story — multi-turn OK | KHÔNG multi-turn scripted exchanges ("George: / Me:"). Michelle KỂ LẠI situation, quote 1-2 dòng max. |
| **Product** | Organic trong scene | Name + both prices + link. Always. |
| **Urgency** | Embedded trong story | Conversational. 1-2 dòng max. Không "⏰ HURRY." |

> **Word count note:** 400-1000 là guideline, không hard cap. Campaign anchor emails (BFCM Hunger Games = 1160 words) vượt khi story EARNS the length. Rule: nếu cắt 200 words mà story yếu đi → giữ. Nếu cắt mà story vẫn vậy → cắt.

---

# 3. STORY

## Standards

| Tiêu chuẩn | Đạt | Không đạt |
|-------------|-----|-----------|
| **INHABIT, không summarize** | "Black dress. Folding chairs. Silence that sits on your chest." | "She went to a funeral." |
| **Scene có TURN** | Gap giữa expectation và reality | Sự kiện diễn ra thẳng tuột không surprise |
| **SHOW, không TELL** | "Giọng run. Thở ngắt quãng." | "She was crying." |
| **Michelle IN story** | Physical reaction: "I put my phone down." | Narrating from outside: "Có phụ nữ tên Dee..." |
| **1 story, 1 throughline** | Message nói được trong 1 câu | 2+ stories cramped |
| **Raw customer words** | Giữ typos, "lol", emoji nguyên bản | Paraphrase thành clean prose |

### Khi nào scene KHÔNG CẦN turn?

- **Customer Voice (positive review simple):** "Phyllis yêu túi" — turn ở CHI TIẾT bất ngờ trong review ("changes purses weekly → stopped" = turn). Nếu review thẳng tuột positive → Michelle's REACTION to review = the turn.
- **Campaign LIVE:** Real-time chaos IS the content. Không cần narrative arc truyền thống.
- **SMS:** Quá ngắn cho full turn. 1 moment → 1 deal → done.

→ Rule thực tế: **Story emails cần turn. Announcement/Live/SMS không bắt buộc.**

## Paragraph Rhythm

```
Long setup sentence with context and detail.

Short punch.

Another short punch.

Slightly longer reflection that adds meaning.

One-word emotional landing.
```

---

# 4. HOOK (Body Text)

> Xem `content-taxonomy.md` Part 3A cho đầy đủ hook patterns + decision guide theo Story Source.

## Standards

| Tiêu chuẩn | Đạt | Không đạt |
|-------------|-----|-----------|
| **Cụ thể, có action/dialogue** | "6:47 AM. Kitchen. Nia's got her phone propped against the cereal box." | "I have something to tell you." |
| **Vào thẳng — không dẫn dắt** | Jump-cut vào scene | "Before I tell you..." / "If I told you..." / "Quick update..." |
| **Sensory detail** | Thời gian, địa điểm, âm thanh, hình ảnh | Abstract descriptions |
| **Reader biết WHAT trong 5 dòng** | Cold reader có context | 10+ dòng mới hiểu email về gì |

> "Không pre-sell" áp dụng cho **body text**. Subject line ĐƯỢC tease/pre-sell (subject job = create curiosity).

---

# 5. PIVOT (Story → Product)

> Xem `content-taxonomy.md` Part 3B cho đầy đủ pivot methods.

## Standards

| Tiêu chuẩn | Đạt | Không đạt |
|-------------|-----|-----------|
| **Invisible seam** | Reader không nhận ra lúc nào chuyển sang sell | "Now let me tell you about our collection:" |
| **Product IN scene** | Michelle đang cầm/nhìn/design product | Chuyển sang brochure/listicle format |
| **Story earns product** | Reader hiểu TẠI SAO product này exist | Product feel random, bolted on |

### Borderline cases — đánh giá thế nào?

```
❌ "Now let me tell you about our collection:" → naked pivot, marketing language
⚠️ "That reminded me of the Zanira." → acceptable nếu reminder organic. Mediocre nếu forced.
✅ "I was holding the Zanira when I read the review..." → product IN scene, invisible
✅ "That's why I put WORDS on the bags. On the outside." → story EARNS product existence
```

## The 2-Question Test

Trước khi gửi bất kỳ email nào có product:
1. Bỏ TOÀN BỘ story → reader có hiểu đang bán gì không? **→ YES**
2. Bỏ TOÀN BỘ sale info → story có hay không? **→ YES**

Cả hai YES → email ready.

---

# 6. CTA

> Xem `content-taxonomy.md` Part 3C cho CTA styles theo context.

## Standards

| Tiêu chuẩn | Đạt | Không đạt |
|-------------|-----|-----------|
| **1 CTA** | 1 action, 1 link | 2+ CTAs cạnh tranh |
| **CTA matches context** | Daily = soft. Campaign CLOSE = binary. | Daily + "ACT NOW" = mismatch |
| **Specific** | "$57 handbag + free wallet" | "Check out our collection" |

> Sale week: campaign email CÓ THỂ có 2 placements (top for skimmers, bottom for readers) — nhưng cùng 1 CTA, không 2 CTAs khác nhau.

---

# 7. P.S. / SIGN-OFF

## Standards

| Tiêu chuẩn | Đạt | Không đạt |
|-------------|-----|-----------|
| **Thematically connected** | P.S. riff on email's THEME | Random joke disconnected from email |

## P.S. Types (4, không chỉ 2)

| Type | Khi nào | Test |
|------|---------|------|
| **Nia Fact** | Email có cultural/heritage/education theme | Nia's fact tóm tắt email message trong 1-2 câu? |
| **George Joke** | Email cần lighten mood | George misunderstands EMAIL's topic, not random bald joke? |
| **Customer Callback** | Customer Voice emails | Extends customer story — thêm detail mới? |
| **Direct Address** | Emotional email, mission recap | Nói trực tiếp với 1 reader mentioned trong email? |

**Combo:** P.S. = 1 type. P.P.S. = 1 type khác. Thường: P.S. = George joke, P.P.S. = Nia fact (hoặc ngược lại). Hoặc P.S. = Customer Callback, P.P.S. = Direct Address. Mix tùy email.

---

# 8. PRODUCT INTEGRATION

## Standards

| Tiêu chuẩn | Đạt | Không đạt |
|-------------|-----|-----------|
| **Product IN scene** | Michelle đang cầm/nhìn/thiết kế sản phẩm trong story | Tách riêng "product section" sau story |
| **Price khi cần** | Campaign + SMS: luôn có. Daily: optional. | SMS không có price anchor |
| **No brochure switch** | Story tone maintained khi nhắc product | "Blacknificent = That's for the girl who..." listicle |

### "No product" level — clarification

Một số email (Cultural Moment nặng, Community Achievement recap) **không cần product mention trong body**. Product vẫn xuất hiện ở:
- Footer product grid (Klaviyo dynamic)
- CTA link (soft: "Shop the collection")

→ "No product" = body text không nhắc product by name. KHÔNG có nghĩa email hoàn toàn không có product touchpoint.

---

# 9. CHARACTER USAGE

> Chi tiết đầy đủ: `universe-afroyla-cast.md`
> Placement + frequency: `content-taxonomy.md` Part 6

## Quick Standards

| Rule | Standard |
|------|----------|
| **George main body** | CHỈ khi George IS the story (câu hỏi/action trigger insight). Test: bỏ George → story đứng? Nếu CÓ → George nên ở P.S. |
| **George voice** | Clueless-sweet. KHÔNG: smart, mean, helpful successfully. |
| **Nia voice** | Wise beyond years. Fact MIRROR email theme. Không nói như người lớn. |
| **Character max** | 2 characters chính per daily email. Campaign LIVE = exception (full cast). |
| **Frequency** | George: max 3 days/tuần (email + SMS combined), không 2 ngày liên tiếp. "Mentioned by name" = tính. |

---

# 10. SCARCITY & URGENCY

## Standards

| Tiêu chuẩn | Đạt | Không đạt |
|-------------|-----|-----------|
| **Số liệu thật** | "180 bags cho 500 người" (inventory thật) | "Limited quantities!" (vague) |
| **Deadline cụ thể** | "Midnight tonight" / "24 hours" | "Hurry!" / "Don't miss out!" |
| **Conversational** | Numbers trong story | Urgency block riêng với ⏰🔥 |
| **KHÔNG ở daily email** | Daily = relationship, không rush | Daily + "LAST CHANCE" = mismatch |

> Nếu không biết inventory chính xác → ĐỪNG đưa số. "Limited" OK. Fake number = vi phạm trust.

---

# 11. INFORMATION LAYERING (Campaign Sequences)

| Tiêu chuẩn | Đạt | Không đạt |
|-------------|-----|-----------|
| **1 layer/email** | Email 3 chỉ reveal inventory | Email 3 dump inventory + strategy + schedule + deadline |
| **Standalone** | Cold reader hiểu không cần email trước | "Remember yesterday?" |
| **Context block varies** | Cùng sale info nhưng khác scene/angle mỗi email | Copy-paste cùng block |

> Thứ tự: ANNOUNCE → JUSTIFY → PROVE → TEACH → PREPARE → CLOSE → LIVE → THANK.
> ĐỪNG gửi CLOSE trước 3+ emails. ĐỪNG TEACH trước ANNOUNCE.
> Chi tiết layering per campaign type: `content-taxonomy.md` Part 1A.

---

# WHEN TO BREAK RULES

Rules trong file này là guidelines, không phải law. Dưới đây là exceptions đã chứng minh hiệu quả:

| Rule | Exception | Khi nào OK | Real example |
|------|-----------|-----------|--------------|
| **400-1000 words** | Campaign anchor email dài hơn | Story EARNS the length — cắt 200 words mà story yếu đi → giữ | BFCM Hunger Games = 1160 words (Tier 1 Hall of Fame) |
| **1 story per email** | Campaign LIVE = multiple moments | Real-time chaos IS the format — Tasha yelling, Marcus packing, George calling | IWD Day 3 LIVE |
| **No pre-sell (body)** | Nhưng subject line ĐƯỢC tease | Subject line job = create curiosity, body job = deliver | "My 7-year-old taught me something about sales" |
| **1 CTA** | Sale email có 2 placements | Top for skimmers, bottom for readers — nhưng cùng 1 CTA | BLS teasers |
| **George chỉ P.S.** | George IS the story | George's question/action trigger toàn bộ email | "George Asked A Stupid Question" |
| **Scene cần TURN** | Campaign LIVE, SMS | Real-time chaos / ultra-short format không cần narrative arc | Sale day SMS alerts |
| **Max 2 characters** | Campaign LIVE | Full cast = war room energy | "Tasha yelling, Marcus packing, Alice refreshing, George confused" |

**Test khi break rule:** Có lý do rõ ràng KHÔNG? Nếu chỉ "vì dễ hơn" → đừng break. Nếu "vì format này ĐÒI HỎI nó" → break.

---

# EDIT FLOW — Sau khi viết draft

Đọc lại theo thứ tự này:

| Lần đọc | Check gì | Cách check |
|---------|----------|-----------|
| **Lần 1** | **Voice** — nghe như Michelle? | Đọc THÀNH TIẾNG. Nghe như girlfriend texting? Hay nghe như newsletter? |
| **Lần 2** | **Story** — 1 throughline? Scene có turn? Show not tell? | Tóm tắt message trong 1 câu. Không được → cắt story thừa. |
| **Lần 3** | **Pivot** — invisible? Product in scene? | 2-Question Test: bỏ story → hiểu sale? Bỏ sale → story hay? |
| **Lần 4** | **Mechanics** — Em dashes ≤3? No triple-And? Timestamps specific? | Search "—" count. Search "And" ở đầu câu. |
| **Lần 5** | **Final checklist** (bên dưới) | Check từng item |

**Khi phải cắt vì email quá dài:**
1. Cắt product description trước (2-3 dòng max đủ)
2. Cắt secondary details trong story (save cho Story Bank)
3. KHÔNG cắt hook, không cắt turn, không cắt P.S.

---

# PRE-SEND CHECKLISTS

## Email

- [ ] **Subject line:** Curiosity hoặc specificity? Dưới 50 chars? Michelle's voice?
- [ ] **Preview text:** Mở rộng subject, không lặp?
- [ ] **Voice:** Đọc thành tiếng — nghe như Michelle? Em dashes ≤ 3? No triple-And?
- [ ] **Story:** 1 story, 1 throughline? Michelle IN story? Scene có detail + turn?
- [ ] **Pivot:** Invisible seam? Product in scene? 2-Question Test pass?
- [ ] **CTA:** 1 CTA rõ ràng? Matches content type?
- [ ] **P.S.:** Thematically connected? Type phù hợp (Nia/George/Customer/Direct)?
- [ ] **Characters:** Đúng voice? Đúng placement? ≤ 2 characters chính?

## Campaign Email (thêm)

- [ ] **Standalone?** Cold reader hiểu không cần email trước?
- [ ] **1 Job?** Email này chỉ làm 1 trong 8 Jobs?
- [ ] **Context block khác** email trước trong sequence?
- [ ] **Story present?** (trừ LIVE, CLOSE, announcement ngắn)
- [ ] **Info MỚI?** Reveal layer mới, không lặp?

## SMS

- [ ] **Product + price:** $[DEAL] và $[NORMAL] có?
- [ ] **1 angle/joke?** Không stack comedy?
- [ ] **Under 480 chars?**
- [ ] **Không lặp** character + tone vs SMS trước đó?
- [ ] **Sign-off:** "— Michelle 💜"?
- [ ] **Không** "VIP" / "EXCLUSIVE" / "⏰ HURRY" / scripted dialogue?
