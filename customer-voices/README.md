# 📬 Customer Voices — Afroyla

Thư viện lưu trữ email, feedback, và câu chuyện từ khách hàng.
Dùng làm nguồn ý tưởng cho Infotainment emails.

---

## 📁 Cấu trúc Folders

| Folder | Nội dung | Ví dụ |
|--------|----------|-------|
| `stories/` | Câu chuyện cá nhân, trải nghiệm với sản phẩm | "Mang túi đi church, mọi người hỏi" |
| `compliments/` | Lời khen, phản ứng từ người xung quanh | "Sales rep ở dealership khen túi" |
| `product-feedback/` | Feedback về túi, chất lượng, feature | "Da mềm hơn mong đợi" |
| `suggestions/` | Khách hàng gợi ý sản phẩm mới | "Cần thêm laptop sleeve" |

---

## 📝 Format Entry

```markdown
## [ID] Tên khách, Thành phố
- **Date:** YYYY-MM-DD
- **Source:** Email reply / DM / Review / Survey
- **Bag:** [Tên túi] ([Màu])
- **Quote:** "Nguyên văn hoặc tóm tắt lời khách hàng..."
- **Tags:** #tag1 #tag2 #tag3
- **Potential Hook:** ⭐⭐⭐⭐⭐ (1-5)
- **Used:** ❌ hoặc ✅ → [link đến email đã dùng]
```

---

## 🏷️ Entry ID Format

```
[Category Letter]-[MMDD][suffix]
```

| Category | Letter | Ví dụ |
|----------|--------|-------|
| Stories | S | S-0201, S-0201a |
| Compliments | C | C-0215 |
| Product Feedback | P | P-0203 |
| Suggestions | G | G-0210 |

- `MMDD` = ngày nhận email
- Suffix `a`, `b`, `c`... nếu cùng ngày có nhiều entries

---

## 🏷️ Tags phổ biến

### Người / Mối quan hệ
`#family` `#daughter` `#husband` `#mother` `#sister` `#friend` `#coworker` `#stranger`

### Bối cảnh
`#church` `#work` `#travel` `#event` `#date-night` `#daily` `#special-occasion`

### Cảm xúc
`#emotional` `#proud` `#surprised` `#confident` `#empowered`

### Sản phẩm
`#work-tote` `#heritage-clutch` `#crossbody` `#new-product` `#quality` `#leather`

### Phản ứng
`#compliment` `#public-reaction` `#repeat-buyer` `#gift`

---

## 🔍 Cách tìm kiếm

- **Tìm theo tag:** Search `#church` trong tất cả digest files
- **Tìm chưa dùng:** Search `Used: ❌` + `Potential Hook: ⭐⭐⭐⭐` trở lên
- **Tìm theo tháng:** Mở file `[category]/YYYY-MM.md`
- **Tìm đã dùng:** Mở `used.md`

---

## ⚠️ Quy tắc

1. **Privacy:** Chỉ dùng first name + city (không full name, không email address)
2. **Accuracy:** Giữ nguyên quote gốc, không thêm bớt
3. **No duplicates:** Check ID trước khi thêm
4. **Mark used:** Khi dùng trong email → update `Used: ✅` + link
