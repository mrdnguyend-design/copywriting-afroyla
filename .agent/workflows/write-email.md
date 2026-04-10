---
description: Write Email — Viết email broadcast theo Infotainment framework
---

# WRITE EMAIL WORKFLOW

> **Ai chạy:** Writer hoặc AI Agent
> **Input:** Brief từ `/daily-brief` hoặc manual brief
> **Output:** Email draft (plain text) — chưa finalize, chưa HTML
> **Next:** Chạy 3 review agents → `/finalize-email`
>
> **2 modes:**
> - **Full mode** — Campaign emails, important dailies. 5 phases.
> - **Quick mode** — Simple daily emails. 3 phases.

---

## CHỌN MODE

| Điều kiện | Mode | Phases |
|-----------|------|--------|
| Campaign email (ANNOUNCE, JUSTIFY, PROVE, TEACH, PREPARE) | **Full** | Brief → Brainstorm → Draft → Self-Check → Output |
| Campaign email (CLOSE, LIVE) | **Quick** | Brief → Draft → Output |
| Daily email quan trọng (Customer Voice ⭐⭐⭐⭐⭐, Cultural Moment lớn) | **Full** | Brief → Brainstorm → Draft → Self-Check → Output |
| Daily email thường | **Quick** | Brief → Draft → Output |
| Campaign THANK | **Quick** | Brief → Draft → Output |

---

# FULL MODE (5 phases)

---

## Phase 1: BRIEF

### Từ `/daily-brief` (recommended):
Brief đã sẵn sàng. Load:
- Content type (Campaign Job / Daily Story Source)
- Story Bank item (R-ID) — đọc full READY entry
- Product, Character(s), Emotional Driver
- Structure reference từ `content-templates.md`

### Manual brief (không có daily-brief):
Hỏi user:
1. **Content type?** Campaign Job nào? Hoặc Daily Story Source nào?
   → Reference `content-taxonomy.md` decision tree
2. **Product/Broccoli?** Bag/collection/deal cụ thể?
3. **Story seed?** Có quote, fact, moment, news sẵn? Hay cần tìm?
4. **Ngày gửi?** Campaign series nào?
5. **Tone đặc biệt?** Celebratory? Reflective? Urgent? Playful?

### Load knowledge:
- `content-taxonomy.md` — purpose + pillars cho content type này
- `content-templates.md` — structure guide cho content type này
- `content-standards.md` — quality standards (refresh)
- `universe-afroyla-cast.md` — character voice rules
- `swipe-file-best-emails.md` — 1-2 relevant examples cho content type
- `learnings/style-rules.md` — 25 rules

---

## Phase 2: BRAINSTORM

> Mục đích: Tạo 3-5 HƯỚNG TIẾP CẬN khác nhau. Writer/user chọn 1 trước khi viết.

### Roleplay 2 personas:

**Ben (Ben Settle)** — Marketing & Hook lens:
- Hook power: *"Dòng đầu có khiến bạn DỪNG scroll không? Nếu không, tại sao không?"*
- Personality injection: Michelle present hay "Afroyla Corp" đã lẻn vào?
- Status positioning: reader cảm thấy insider hay bị market-to?
- Sales psychology: CTA có emerge tự nhiên từ story không?

**Daniel (Daniel Throssell)** — Storytelling & Craft lens:
- Scene authenticity: *"Có thể quay scene này bằng camera không? Camera sẽ thấy/nghe gì?"*
- Dialogue: conversations real hay scripted?
- Show vs Tell: emotion qua action, không phải label?
- Emotional pacing: tension build and release đúng chỗ?

### Output: 3-5 approaches

Cho mỗi approach:
1. **Tên** — ví dụ: "The 2:43 AM Confession"
2. **Hook** — 3-5 dòng opening draft
3. **Story direction** — throughline trong 1 câu
4. **Pivot strategy** — story connects to product bằng cách nào?
5. **Why it works** — 1 câu từ Ben hoặc Daniel perspective
6. **Character** — ai xuất hiện, ở đâu
7. **TURN** — Expectation là gì? Reality là gì? Moment nào shift xảy ra?
8. **Emotional Cost** — Emotion này cost Michelle (hoặc character) cái gì cụ thể? (cold coffee? voice crack? phone down? mascara? — không phải "I was moved")

### Scoring table:

| # | Approach | Entertainment | Pivot Smoothness | Michelle Voice | Risk | Pick? |
|---|----------|--------------|------------------|---------------|------|-------|
| 1 | | ⭐/5 | ⭐/5 | ⭐/5 | Low/Med/High | |

**Recommend top pick + lý do.** Wait for user choice.

> **Nếu weekly plan đã chỉ định Story Source + character:** Ít nhất 2/5 approaches dùng planned direction. 3 còn lại explore tự do.

---

## Phase 3: DRAFT

Dựa trên approach đã chọn, viết full email:

### Structure (từ `content-templates.md`):

**Campaign email:**
```
Subject Line
Preview Text
---
Context Block (3-5 lines) — sale info, khác mỗi email trong sequence
---
Story (60-70% email) — scene → tension → escalation → TURN → landing
---
Pivot (2-4 lines) — invisible seam
---
CTA — matches Job
---
Love, Michelle

P.S. — thematically connected
P.P.S. — (optional)
```

**Daily email:**
```
Subject Line
Preview Text
---
Hook (3-5 lines) — timestamp/quote/contradiction/discovery
---
Story — scene → emotional arc → TURN
---
Pivot — story → product (organic)
---
CTA — soft
---
Love, Michelle

P.S. — Nia/George/Customer/Direct
```

### Logic Checks TRƯỚC khi output draft:

- [ ] **Character consistency:** George = clueless-sweet? Nia = wise beyond years? Check `universe-afroyla-cast.md`
- [ ] **Character placement:** George ở main body CHỈ khi George IS the story. Otherwise P.S.
- [ ] **Timeline logic:** Timestamps make sense? Events plausible?
- [ ] **Emotional arc:** Vulnerability → revelation → pride → action? Có TURN?
- [ ] **Scene believability:** Could this happen IRL?
- [ ] **Michelle's voice:** Đọc thành tiếng — girlfriend texting? Hay press release?
- [ ] **1 story, 1 throughline:** Message nói được trong 1 câu?
- [ ] **Show, don't tell:** "Giọng run" not "She was crying"?
- [ ] **Authenticity test:** Emotion này có tồn tại nếu không có sale không? Nếu không → rewrite. Cảm xúc thật không cần cái cớ để tồn tại.
- [ ] **Emotional cost:** Michelle's emotion có cost cụ thể không? (cold coffee, mascara, putting phone down, voice crack — không phải "I was moved" hay "I felt so much")
- [ ] **Pivot check (R.E.B.):** Story có DẪN ĐẾN product tự nhiên không? Hay đang có naked jump? ("Now. Real talk." / "Speaking of which..." = naked pivot. Nếu pivot cần transition câu → story sai, không phải pivot sai. Fix story.)

---

## Phase 4: SELF-CHECK

Writer tự check draft against `content-standards.md` TRƯỚC khi gửi cho review agents:

### Quick self-check:
1. **Voice** — đọc thành tiếng. Nghe như Michelle?
2. **Hook** — 3 dòng đầu: specific? Action/dialogue? Không pre-sell?
3. **Story** — 1 story? Scene có turn? Michelle IN story?
4. **Pivot** — invisible seam? 2-Question Test pass?
5. **Em dashes** — đếm. ≤ 3?
6. **Triple-And** — search "And" ở đầu câu. Không 3 liên tiếp?
7. **Staccato stacking** — Có ≥3 đoạn 1 câu liên tiếp không? Vary it: gộp một đoạn, mở rộng một đoạn. One-line paragraphs có impact VÌ chúng hiếm — stack 5 cái → impact bằng 0.
8. **Echo writing** — Có ≥3 câu mở đầu bằng cùng cấu trúc không? ("She did... She felt... She said..." hoặc "I looked... I put... I realized...") Restructure: đổi subject, dùng fragment, dùng dialogue.
9. **Product section** — Product có ở trong scene không? Hay đang là listicle ("Bag X = That's for the girl who...")? Nếu listicle → rewrite: show Michelle IN a moment with the product.

Nếu self-check reveal issues → fix trước. Đừng gửi draft yếu cho review agents.

---

## Phase 5: OUTPUT

Output email draft dạng plain text (.md format).

```
✅ DRAFT READY FOR REVIEW

📧 [CAMPAIGN/DAILY] | [DATE CODE] | [TITLE]

Subject: [subject line]
Preview: [preview text]

---
[Full email body]
---

📋 BRIEF SUMMARY:
- Content type: [Campaign Job / Daily Story Source]
- Story Bank item: [R-ID or freestyle]
- Character(s): [names]
- Emotional Driver: [from taxonomy]
- Structure: [from templates]

👉 NEXT: Chạy review agents:
   /review-craft    → kỹ thuật viết
   /review-strategy → mục đích + hướng hay hơn
   /review-brand    → character + brand consistency
```

> **KHÔNG finalize ở đây.** Draft → Review → Fix → `/finalize-email`

---

# QUICK MODE (3 phases)

Cho simple daily emails, CLOSE, LIVE, THANK.

---

## Phase Q1: BRIEF

Giống Full Mode Phase 1. Load brief + knowledge.

---

## Phase Q2: DRAFT

Skip brainstorm. Viết thẳng dựa trên brief.

Vẫn chạy Logic Checks (Phase 3 checks).

---

## Phase Q3: OUTPUT

Giống Full Mode Phase 5. Output draft cho review.

> Quick mode VẪN recommend chạy review agents. Nhưng nếu writer confident + email đơn giản → có thể skip straight to `/finalize-email`.

---

# BEHAVIOR RULES

### Interaction Protocol
- **IF** brief từ `/daily-brief` → Phase 1 pre-filled, skip questions
- **IF** manual brief đầy đủ → Phase 1 pre-filled
- **IF** user says "skip brainstorm" → Quick mode (Phase Q2 thẳng)
- **IF** user says "quick" → Quick mode
- **IF** user paste existing draft → skip to Phase 4 (Self-Check) + output for review

### Phase Gates
- **Phase 2 → 3:** STOP. Wait for user to pick approach.
- **Phase 3 → 4:** Automatic (draft → self-check)
- **Phase 4 → 5:** Automatic (output)
- **Phase 5 → Review:** User triggers `/review-craft`, `/review-strategy`, `/review-brand`

### Campaign Sequence Rules
- Check `planning/weekly/` — email nào trong sequence? Job nào?
- Reference `content-taxonomy.md` Part 1A — Information Layering per campaign type
- Mỗi email = 1 Job. KHÔNG mix.
- Context block KHÁC email trước trong sequence
- Story present trong mọi campaign email (trừ CLOSE, LIVE, announcement ngắn)

### Save Unused Ideas
- Brainstorm tạo 5 approaches, chỉ dùng 1
- 4 approaches còn lại → save vào Story Bank as SEEDs (Style Rule #7)
- Details bị cắt trong draft → save cho future emails
