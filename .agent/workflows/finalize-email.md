---
description: Finalize Email — HTML output + archive + post-mortem + Story Bank update
---

# FINALIZE EMAIL WORKFLOW

> **Ai chạy:** Writer sau khi review agents xong + fixes applied
> **Input:** Approved email draft (plain text)
> **Output:** HTML file (Klaviyo-ready) + archived .md + post-mortem entry + Story Bank update
> **Prerequisite:** Draft đã qua `/review-craft` + `/review-strategy` + `/review-brand` (hoặc writer chọn skip review)

---

## STEP 1: CONFIRM READINESS

Trước khi finalize, verify:

- [ ] Draft đã qua review? (ít nhất `/review-craft` recommended)
- [ ] Fixes từ review đã applied?
- [ ] `content-standards.md` pre-send checklist passed?

Nếu chưa review: "⚠️ Draft chưa review. Recommend chạy `/review-craft` trước. Continue anyway?"

---

## STEP 2: GENERATE OUTPUT

### Format A: Plain Text (.md)

Header:
```markdown
# [TYPE] | [DDMMYY] | [Tên ngắn]

**Subject:** [subject line]
**Preview:** [preview text]

---

[Full email body]

---

Love, Michelle

P.S. [...]
P.P.S. [...]
```

### Format B: HTML (Klaviyo-ready)

Dùng `knowledge/core/email-html-template.md` (nếu tồn tại) hoặc standard format:
- Inline CSS: `font-family: Helvetica, Arial, sans-serif; font-size: 16px;`
- `<strong>` cho bold, `<em>` cho italic
- Image placeholders: `[IMAGE_URL]`
- CTA as styled `<a>` tag
- No external CSS

---

## STEP 3: ARCHIVE

### Naming Convention

```
[type]_[DDMMYY]_[tên_ngắn].md     → Plain text
[type]_[DDMMYY]_[tên_ngắn].html   → HTML
```

**Prefixes:**
| Prefix | Loại |
|--------|------|
| `daily_` | Daily broadcast email |
| `teaser_` | Campaign teaser (không có link store) |
| `sale_` | Sale email |

### Save locations:
- `.md` → `examples/daily/` (hoặc `examples/iwd-300-mission/` nếu campaign series)
- `.html` → same folder

### Customer voice tracking:
Nếu email dùng customer story/quote từ `customer-voices/`:
- Update entry gốc: `Used: ❌` → `Used: ✅ → [filename]`
- Append row vào `customer-voices/used.md`

---

## STEP 4: POST-MORTEM ENTRY

Append entry MỚI vào `learnings/post-mortems.md` (entries mới nhất ở trên cùng):

```markdown
### [DDMMYY] [Email title] — "[Subject line]"

- **Type:** [Daily / Teaser / Sale / Post-Sale]
- **Content type:** [Campaign Job / Daily Story Source]
- **Approach:** [Tên approach từ brainstorm, hoặc mô tả ngắn]
- **Story Source:** [từ taxonomy]
- **Emotional Driver:** [từ taxonomy]
- **Idea Source:** [Review / Reddit / Customer Email / News / History / Story Bank R-ID]
- **Characters:** [names used]
- **Iterations:** [Số vòng feedback trước khi approve]
- **Review agents used:** [craft / strategy / brand — nào đã chạy?]
- **What Worked:** [Cái gì tốt — user feedback + review agent praise]
- **What Changed:** [Cái gì phải sửa + lý do]
- **Time to Approve:** Nhanh (1 vòng) / Trung bình (2-3) / Nhiều (4+)
- **Tags:** #[relevant tags]
```

Hỏi user: "Có gì cần note thêm về email này không?"

---

## STEP 5: STORY BANK UPDATE

1. **Move READY → USED:**
   - Tìm Story Bank item (R-ID) đã dùng
   - Move từ READY section → USED section
   - Thêm: sent date, email filename, content type

2. **Harvest unused ideas:**
   - Brainstorm tạo 5 approaches → chỉ dùng 1 → 4 còn lại
   - Details bị cắt trong editing
   - → Thêm chúng như SEED entries mới vào `story-bank.md` (Style Rule #7: save unused material)

3. **Update Inventory Summary** counts

4. **Report:**
   ```
   📦 STORY BANK UPDATE
   - [R-ID] moved to USED
   - [X] new SEEDs added from unused brainstorm approaches
   - Current: READY [X], CONCEPT [Y], SEED [Z]
   ```

5. Nếu READY < 5: "💡 Story Bank đang thấp. Suggest chạy `/idea-research`"

---

## STEP 6: MONTHLY REVIEW TRIGGER

Nếu đã 10+ post-mortem entries kể từ lần review cuối → trigger reminder:

```
📊 MONTHLY REVIEW DUE
10+ emails đã post-mortem. Suggest:
1. Review patterns: approach nào approve nhanh? Approach nào cần nhiều vòng?
2. Extract new style rules → append `learnings/style-rules.md`
3. Update `learnings/monthly-insights.md`
4. Feed insights vào `/monthly-strategy` cho tháng sau
```

---

## BEHAVIOR RULES

- **LUÔN save cả .md và .html**
- **LUÔN ghi post-mortem** — dù email đơn giản. Mỗi email viết sau phải tốt hơn email trước.
- **LUÔN update Story Bank** — pipeline phải luôn flowing.
- **Nếu email dùng customer story** → update customer-voices used tracking.
- **Post-mortem format NHẤT QUÁN** — follow template chính xác, dễ search sau.
