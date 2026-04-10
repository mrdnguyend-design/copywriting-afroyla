---
description: Finalize SMS — Final output + archive + log
---

# FINALIZE SMS WORKFLOW

> **Ai chạy:** Writer sau khi SMS approved
> **Input:** Approved SMS draft
> **Output:** Final SMS (ready to paste in Klaviyo/Postscript) + logged to sms_log.md + archived
> **Prerequisite:** Draft từ `/write-sms`, optionally reviewed by `/review-brand`

---

## STEP 1: FINAL CHECK

- [ ] Product + both prices present? ($[DEAL] và $[NORMAL])
- [ ] Under 480 chars?
- [ ] 1 joke/angle only? Không stack comedy?
- [ ] Sign-off: "— Michelle 💜"?
- [ ] Không "VIP" / "EXCLUSIVE" / "⏰ HURRY"?
- [ ] Link present and correct?
- [ ] Segment correct? (REG / HIGH / MASS / NS)

---

## STEP 2: OUTPUT

```
📱 FINAL SMS — [Product Name]
════════════════════════════════
[SMS content — ready to paste]
════════════════════════════════
Segment: [REG/HIGH/MASS/NS]
Pillars: [Justification × Urgency × Character × Tone]
Pattern: [A: Story / B: Character / C: Direct]
Characters: [count]
```

---

## STEP 3: LOG

Append entry vào `examples/sms_log.md`:

```markdown
## [DDMMYY] — [Product Name]
- **Deal:** $[price] (normally $[original])
- **Segment:** [REG/HIGH/MASS/NS]
- **Pillars:** [Justification] × [Urgency] × [Character] × [Tone]
- **Pattern:** [A/B/C]
- **Email Cross-Ref:** [tên file email hôm nay hoặc "no email today"]
- **Threading Type:** [same character / complementary product / story callback / tone complement / none]
- **SMS:**
  > [Full SMS text]
- **Notes:** [Context, feedback, lý do chọn pillars]
```

---

## STEP 4: STORY BANK UPDATE (nếu applicable)

- Nếu SMS dùng Story Bank item → note trong USED section
- Nếu SMS tạo ra idea mới (customer reaction, unexpected angle) → add SEED
- Update counts

---

## BEHAVIOR RULES

- **LUÔN log vào sms_log.md** — history cần thiết cho variety check
- **Ghi pillars đầy đủ** — giúp `/write-sms` tránh lặp lần sau
- **Ghi cross-ref** — track email-SMS threading pattern
- **Sale day (5+ SMS):** Log TẤT CẢ SMS cùng ngày, đánh số (#1, #2, #3...)
