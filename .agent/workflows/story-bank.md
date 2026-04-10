---
description: Story Bank Manager — Xem, thêm, develop items trong pipeline ý tưởng
---

# STORY BANK MANAGER

> **Ai chạy:** Bất kỳ ai trong team
> **Khi nào:** Quick access Story Bank — không cần chạy full `/idea-research`
> **File:** `knowledge/core/story-bank.md`

---

## COMMANDS

### SHOW — Xem status hiện tại

Output Inventory Summary + counts per stage + Story Source coverage.

```
📊 STORY BANK STATUS
─────────────────
| Stage   | Count | Target |
|---------|-------|--------|
| SEED    | [X]   | 10+    |
| CONCEPT | [Y]   | 5-8    |
| READY   | [Z]   | 5-7    |
| USED    | [N]   | —      |

Story Source coverage (READY items):
  Customer Voice:      [count]
  Cultural Moment:     [count]
  Family/Personal:     [count]
  Product Origin:      [count]
  Community Achievement: [count]
  Industry Commentary: [count]

Health: [🟢 Healthy / 🟡 Low / 🔴 Critical]
```

---

### ADD — Thêm SEED mới

User paste raw material → classify + add:

1. Hỏi (hoặc infer): Story Source phù hợp?
2. Rate Emotional Potential (1-5 sao)
3. Tạo entry format:

```markdown
### S-[NNN]: [Mô tả ngắn]
- **Raw Material:** [quote, link, observation]
- **Story Source:** [từ content-taxonomy.md]
- **Emotional Potential:** ⭐⭐⭐⭐⭐
- **Source:** [TrustPilot / Reddit / customer-voices / news / personal]
- **Added:** [YYYY-MM-DD]
```

4. Append vào SEED section + update counts.

---

### DEVELOP — Promote item lên stage tiếp

#### SEED → CONCEPT

Cần xác định: Hook + Bridge + Product + Story Source + Emotional Driver

1. Đọc SEED entry
2. Hỏi: "Hot Dog (Hook) là gì? Câu mở đầu kéo reader vào?"
3. Hỏi: "Bridge — story này connect với product nào?"
4. Hỏi: "Emotional Driver — Pride? Belonging? Vulnerability→Strength?"
5. Reference `content-taxonomy.md` Part 2A (Email Pillars) để chọn pillars phù hợp
6. Tạo CONCEPT entry, move khỏi SEED section

#### CONCEPT → READY

Cần outline đầy đủ: opening, throughline, character, structure

1. Đọc CONCEPT entry
2. Viết Throughline — 1 câu message cốt lõi
3. Chọn Structure — reference `content-templates.md` (structure nào phù hợp?)
4. Draft 2-3 Subject Line Ideas
5. Xác định Character (1-2 max)
6. Reference `content-standards.md` — outline có đáp ứng standards không?
7. Tạo READY entry, move khỏi CONCEPT section
8. Update Inventory Summary

---

### AUDIT — Kiểm tra coverage gaps

Output table: Story Source × Stage

```
| Story Source          | READY | CONCEPT | SEED | Thiếu? |
|-----------------------|-------|---------|------|--------|
| Customer Voice        | [X]   | [Y]     | [Z]  | [Y/N]  |
| Cultural Moment       | [X]   | [Y]     | [Z]  | [Y/N]  |
| Family/Personal       | [X]   | [Y]     | [Z]  | [Y/N]  |
| Product Origin        | [X]   | [Y]     | [Z]  | [Y/N]  |
| Community Achievement | [X]   | [Y]     | [Z]  | [Y/N]  |
| Industry Commentary   | [X]   | [Y]     | [Z]  | [Y/N]  |
```

Recommend: Story Sources có 0 READY → ưu tiên trong `/idea-research` lần tới.

---

### SEARCH — Tìm item theo keyword

Search across all stages. Show matching items.

---

## RULES

- Khi DEVELOP, luôn reference `content-taxonomy.md` cho Story Source + Emotional Driver classification
- Khi promote CONCEPT → READY, reference `content-standards.md` để ensure outline đáp ứng quality standards
- Khi promote CONCEPT → READY, reference `content-templates.md` để chọn structure phù hợp
- ID convention: S-001 → C-001 → R-001 → U-001 (giữ nguyên số khi promote)
- Update Inventory Summary SAU MỌI thay đổi
