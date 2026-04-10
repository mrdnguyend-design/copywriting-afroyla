---
description: "⚠️ DEPRECATED — Dùng /process-voices thay thế. File giữ lại cho reference."
---

# ⚠️ DEPRECATED — Dùng `/process-voices` thay thế

> Renamed + updated. Workflow mới thêm Story Source tagging, pattern detection.

---

# 📬 PROCESS CUSTOMER EMAILS (DEPRECATED)

> **Mục tiêu:** Nhận batch email khách hàng, phân loại, extract quote, và lưu vào đúng digest file.
> **Input:** Auto-fetch từ Gmail HOẶC user paste emails
> **Output:** Entries được thêm vào `D:\Copywriting Afroyla\customer-voices\`

---

## BƯỚC 0: AUTO-FETCH TỪ GMAIL (MẶC ĐỊNH)

**Mặc định:** Tự động fetch email mới từ Gmail trước khi xử lý.

// turbo
1. Chạy lệnh: `node D:\Copywriting Afroyla\scripts\fetch-emails.js`
2. Đọc file `D:\Copywriting Afroyla\scripts\fetched-emails.json`
3. Nếu `count > 0`: Tiếp tục Bước 2 (Phân loại) với dữ liệu từ file
4. Nếu `count == 0`: Thông báo "📭 Không có email mới từ Gmail"
5. Nếu script lỗi (chưa cấu hình .env): Thông báo lỗi và hỏi user muốn paste thủ công không

> **Lưu ý:** Script sẽ mark email là "đã đọc" sau khi fetch, nên mỗi email chỉ được fetch 1 lần.

---

## BƯỚC 1: NHẬN INPUT THỦ CÔNG (FALLBACK)

**Chỉ dùng khi:** Auto-fetch không hoạt động HOẶC user muốn paste thêm emails.

User có thể cung cấp emails theo nhiều cách:
- **Paste trực tiếp** vào chat (1 hoặc nhiều emails)
- **Mô tả tóm tắt** nội dung email
- **Screenshot** (nếu có)

Với mỗi email, cần xác định:
1. **Tên khách** (first name only) + **Thành phố/State**
2. **Ngày nhận** email
3. **Nguồn:** Email reply / DM / Review / Survey
4. **Sản phẩm** được đề cập (nếu có)

**Nếu thiếu thông tin:** Hỏi user bổ sung. Nếu không biết city/state → dùng "Unknown".

---

## BƯỚC 2: PHÂN LOẠI

Đọc mỗi email và phân vào **1 primary category** (có thể có secondary):

| Category | Dấu hiệu nhận biết | Folder |
|----------|---------------------|--------|
| **Story** | Kể câu chuyện, trải nghiệm cụ thể, có timeline | `stories/` |
| **Compliment** | Ai đó khen, hỏi về túi, phản ứng tích cực | `compliments/` |
| **Product Feedback** | Nhận xét về chất lượng, da, hardware, size | `product-feedback/` |
| **Suggestion** | Gợi ý sản phẩm mới, feature, cải tiến | `suggestions/` |

> **Nếu email chứa cả story + compliment:** Ưu tiên category có potential hook cao hơn. Ghi chú cross-ref ở cuối entry.

---

## BƯỚC 3: EXTRACT & FORMAT

Cho mỗi email, tạo entry theo format:

```markdown
## [ID] Tên khách, Thành phố
- **Date:** YYYY-MM-DD
- **Source:** Email reply / DM / Review / Survey
- **Bag:** [Tên túi] ([Màu]) hoặc "General" nếu không đề cập
- **Quote:** "Giữ nguyên lời gốc, chỉ lược bỏ phần không liên quan..."
- **Context:** [1 dòng bối cảnh thêm nếu cần]
- **Tags:** #tag1 #tag2 #tag3
- **Potential Hook:** ⭐⭐⭐⭐⭐ (1-5)
- **Used:** ❌
```

### Cách chấm Potential Hook:
| Score | Tiêu chí |
|-------|----------|
| ⭐ | Feedback đơn giản, khó viết thành story |
| ⭐⭐ | Có chi tiết hay nhưng không đủ dramatic |
| ⭐⭐⭐ | Có thể dùng làm supporting detail trong email |
| ⭐⭐⭐⭐ | Có scene/moment cụ thể, dễ build thành story |
| ⭐⭐⭐⭐⭐ | Đây là email — có drama, cảm xúc mạnh, chi tiết vivid, SẴN SÀNG viết thành Infotainment |

### Cách chọn Tags:
- Xem danh sách tags trong `D:\Copywriting Afroyla\customer-voices\README.md`
- Mỗi entry nên có 2-5 tags
- Ưu tiên tags giúp tìm kiếm dễ: người (`#daughter`), nơi (`#church`), cảm xúc (`#proud`)

---

## BƯỚC 4: LƯU VÀO DIGEST FILE

1. **Xác định file:** `[category]/YYYY-MM.md` (theo tháng nhận email)
2. **Nếu file chưa tồn tại:** Tạo mới với header:
   ```markdown
   # [Category Name] — [Month Year]
   
   > [Mô tả ngắn category]
   > Format: xem `customer-voices/README.md`
   
   ---
   ```
3. **Append** entry vào cuối file
4. **Check trùng:** Đảm bảo ID chưa tồn tại trong file

---

## BƯỚC 5: SUMMARY REPORT

Sau khi xử lý xong batch, output summary:

```
📬 PROCESSED: [X] emails

| # | ID | Tên | Category | Potential | Tags |
|---|------|------|----------|-----------|------|
| 1 | S-0215 | Karen, MA | Story | ⭐⭐⭐⭐⭐ | #public-reaction #work |
| 2 | C-0215 | Lisa, ATL | Compliment | ⭐⭐⭐⭐ | #daughter #emotional |
| ... | ... | ... | ... | ... | ... |

🔥 HIGH POTENTIAL (⭐⭐⭐⭐+):
- S-0215: Karen's car dealership story → perfect cho daily email
- C-0215: Lisa's daughter "queen" moment → BHM email potential

📁 Files updated:
- customer-voices/stories/2026-02.md (+1 entry)
- customer-voices/compliments/2026-02.md (+1 entry)
```

---

## GHI CHÚ

- **Privacy first:** Chỉ lưu first name + city. KHÔNG lưu email address, phone, hoặc last name.
- **Batch processing:** Có thể xử lý nhiều emails cùng lúc. AI sẽ phân loại và lưu từng cái.
- **Cross-reference:** Nếu 1 email thuộc 2 categories, lưu vào primary, ghi `See also: [other-ID]` ở cuối.
- **Monthly rotation:** File mới tự động tạo khi sang tháng mới.
