---
description: Process Voices — Phân loại và lưu trữ customer feedback vào customer-voices/
---

# PROCESS VOICES WORKFLOW

> **Ai chạy:** Bất kỳ ai trong team
> **Khi nào:** Khi có customer emails/reviews/DMs mới cần xử lý
> **Output:** Entries trong `customer-voices/[category]/YYYY-MM.md`
> **Feeds:** `/idea-research` (nguồn Customer Voice material)

---

## STEP 0: AUTO-FETCH (Default)

Chạy script fetch emails:
```
node D:\Copywriting Afroyla\scripts\fetch-emails.js
```
Đọc output: `fetched-emails.json`

> Nếu script chưa config (thiếu .env / Gmail credentials) → skip, dùng Step 1 (manual paste).

---

## STEP 1: RECEIVE INPUT (Manual fallback)

User paste email/review/DM. Cần biết:
- **Tên khách:** (nếu có)
- **Nguồn:** Email reply / DM / TrustPilot / Website review / Survey
- **Sản phẩm:** Bag/wallet/collection nào được nhắc? (hoặc "General")
- **Ngày:** Khi nào gửi/post

---

## STEP 2: CLASSIFY

Phân vào 4 categories:

| Category | Dấu hiệu | Folder |
|----------|----------|--------|
| **Story** | Kể câu chuyện, có timeline cụ thể, cảm xúc sâu | `customer-voices/stories/` |
| **Compliment** | Khen, phản ứng tích cực, nhưng không kể chuyện dài | `customer-voices/compliments/` |
| **Product Feedback** | Nhận xét chất lượng, specs, suggestions cải tiến | `customer-voices/product-feedback/` |
| **Suggestion** | Gợi ý sản phẩm mới, feature request | `customer-voices/suggestions/` |

---

## STEP 3: EXTRACT & FORMAT

```markdown
## [ID] Name, City
- **Date:** YYYY-MM-DD
- **Source:** Email reply / DM / TrustPilot / Website review / Survey
- **Bag:** [Product name] ([Color]) hoặc "General"
- **Quote:** "[NGUYÊN VĂN — giữ typos, emoji, caps, lol]"
- **Context:** [1-line bối cảnh thêm]
- **Tags:** #tag1 #tag2 #tag3
- **Story Source fit:** [Customer Voice / Product Origin / Community Achievement]
- **Potential Hook:** ⭐⭐⭐⭐⭐ (1-5)
- **Used:** ❌
```

### Hook Scoring Guide

| Score | Tiêu chí |
|-------|----------|
| ⭐ | Simple feedback, khó viết thành story |
| ⭐⭐ | Good details, không dramatic |
| ⭐⭐⭐ | Có thể dùng làm supporting detail trong email |
| ⭐⭐⭐⭐ | Specific scene/moment — dễ build story xung quanh |
| ⭐⭐⭐⭐⭐ | Drama, strong emotion, vivid, có thể làm centerpiece email |

### Story Source Classification

Ngoài 4 categories, tag mỗi entry với Story Source phù hợp từ taxonomy:

- **Customer Voice:** Review có câu chuyện, phản ứng cảm xúc, specific moment
- **Product Origin:** Feedback gợi ý thiết kế mới, feature request → product development angle
- **Community Achievement:** Repeat buyer, family buying together, milestone moment

---

## STEP 4: SAVE

Append vào `customer-voices/[category]/YYYY-MM.md`

**File naming:** `customer-voices/stories/2026-04.md` (theo tháng nhận feedback, không phải tháng mua)

**ID convention:** `[CATEGORY_PREFIX]-[DDMM][a/b/c]`
- S-0316 = Story, ngày 16 tháng 3
- S-0316b = Story thứ 2 cùng ngày
- C-0316 = Compliment, ngày 16 tháng 3
- P-0316 = Product feedback
- G-0316 = Suggestion

---

## STEP 5: OUTPUT SUMMARY

```
📋 PROCESSED: [X] customer voices
─────────────────
⭐⭐⭐⭐⭐ (5): [count] — HIGH POTENTIAL
⭐⭐⭐⭐ (4):   [count]
⭐⭐⭐ (3):     [count]
Below 3:       [count]

Breakdown:
  Stories: [count]
  Compliments: [count]
  Product Feedback: [count]
  Suggestions: [count]

🔥 HIGH POTENTIAL entries:
  [ID] [Name] — "[quote preview]" — ⭐⭐⭐⭐⭐
  [ID] [Name] — "[quote preview]" — ⭐⭐⭐⭐

💡 Suggest: chạy `/idea-research` to develop high-potential entries into Story Bank items.
```

---

## STEP 6: FLAG PATTERNS

Nếu phát hiện pattern trong feedback (VD: 3+ zipper complaints):

```
⚠️ PATTERN DETECTED: [description]
  - [ID1] [quote preview]
  - [ID2] [quote preview]
  - [ID3] [quote preview]
  → Suggest: escalate to product team / potential transparency email
```

---

## RULES

- **NGUYÊN VĂN.** Giữ typos, "lol", emoji, caps. Raw = real = credible.
- **Không paraphrase.** "bc I just stop to use the restroom" > "because she stopped to use the restroom."
- **Check trùng:** Đảm bảo ID chưa tồn tại trong file trước khi thêm.
- **Tag Story Source:** Mọi entry ⭐⭐⭐+ phải có Story Source tag → `/idea-research` biết dùng ở đâu.
- **Flag patterns:** 3+ entries cùng topic = pattern worth noting.
