---
description: Daily Brief — Điểm khởi đầu mỗi ngày, tạo brief cho email + SMS
---

# DAILY BRIEF WORKFLOW

> **Ai chạy:** Bất kỳ ai trong team (writer, manager)
> **Khi nào:** Mỗi sáng trước khi viết — hoặc tối hôm trước
> **Input:** Weekly Plan + Story Bank
> **Output:** Brief cho `/write-email` + `/write-sms`
> **Next:** Chạy `/write-email` (brief sẽ được pre-filled)

---

## STEP 0.5: CAMPAIGN SPRINT DETECTION ⚠️ CHECK FIRST

> **Hard rule:** Khi campaign sprint active, daily-brief KHÔNG random pick từ Story Bank — đọc Section 4/5/6 của living doc để biết hôm nay viết teaser/warmup/sale # mấy.

### Actions
1. Glob `planning/campaigns/*.md` (skip `mechanic-history.md`)
2. Cho mỗi file, đọc Section 0 Quick Reference:
   - Status: bỏ qua nếu = `CLOSED` hoặc `STRATEGY-DRAFT`
   - Sale dates: check ngày hôm nay có nằm trong **T-10 → T+3** window không
3. Nếu có 1+ campaign active:
   - Load Section 4 (Teaser Plan) nếu hôm nay ∈ [T-10, T-6]
   - Load Section 5 (Warmup Plan) nếu hôm nay ∈ [T-5, T-1]
   - Load Section 6 (Launch Plan) nếu hôm nay ∈ [T-0, T+2]
   - Daily brief PICK row tương ứng với hôm nay → output campaign brief, KHÔNG random Story Bank
   - Skip Step 1 random pick logic
4. Nếu không có sprint active: proceed Step 1 normally

### Output flag
- `SPRINT_MODE = active` (load campaign section) hoặc `SPRINT_MODE = inactive` (proceed normally)

---

## STEP 1: GATHER CONTEXT

> Skip nếu `SPRINT_MODE = active` — đã có brief từ campaign living doc.

Đọc theo thứ tự:

1. **Weekly Plan:** `planning/weekly/week-[current-week].md` → tìm row hôm nay
2. **Story Bank:** `knowledge/core/story-bank.md` → verify READY item assigned (skip CAMPAIGN-RESERVED items)
3. **Style Rules:** `learnings/style-rules.md` → load vào memory
4. **Monthly Strategy:** `planning/monthly/[current-month]-strategy.md` → check phase + campaign events
5. **Last 3 emails:** scan `examples/` → tránh lặp Story Source, character, opening style

> **Nếu không có weekly plan:** Switch sang Freestyle Mode (Step 1B).

---

## STEP 1B: FREESTYLE MODE (không có planning layer)

Khi user muốn viết mà không có weekly plan:

1. Mở `content-taxonomy.md` → decision tree "Hôm nay viết email gì?"
   ```
   Có sale event? → Campaign Job
   Không? → Chọn Story Source:
     Có customer review hay? → Customer Voice
     Có heritage date? → Cultural Moment
     Có family moment? → Family/Personal
     Có product spotlight? → Product Origin
     Có milestone? → Community Achievement
     Muốn take stance? → Industry Commentary
     Không có gì? → Check Story Bank READY items
   ```
2. Mở `content-standards.md` → refresh quality standards
3. Mở `content-templates.md` → xem structure cho content type đã chọn
4. Hỏi user: "Hôm nay muốn viết gì? Product? Story Source? Có ý tưởng sẵn?"
5. Skip sang Step 3 với manual brief

---

## STEP 2: TẠO DAILY BRIEF

Present cho user:

```
═══════════════════════════════════════
📅 TODAY: [Day], [Date]
Phase: [P# from monthly strategy]
═══════════════════════════════════════

📧 EMAIL BRIEF
─────────────────
• Content type:  [Campaign Job / Daily Story Source]
• Story:         [R-ID] — "[title]" hoặc "freestyle"
• Product:       [bag name / collection]
• Character:     [name(s)]
• Emotional driver: [from taxonomy: Pride/Belonging/Vulnerability/etc.]
• Structure:     [from content-templates.md: which structure to follow]
• Sends:         [number] | Est. Rev: $[amount]
• Special:       [cultural date, sale context, etc.]

📱 SMS BRIEF [nếu hôm nay có SMS]
─────────────────
• Context:       [Flash Deal / Campaign Warmup / Mass Registration]
• Segment:       [REG / HIGH / MASS]
• Pillars:       [Justification] × [Urgency] × [Character] × [Tone]
• Product:       [bag/deal/price]
• Cross-thread:  [cách kết nối với email]
• Sends:         [number]

⚠️ ALERTS [nếu có]
─────────────────
[Warnings — xem bên dưới]

📏 STYLE REMINDERS (top 3 phù hợp nhất)
─────────────────
[3 style rules relevant nhất cho content type hôm nay]
```

### Alert Conditions

- 🔴 **Story Bank READY < 3:** "PHẢI chạy `/idea-research` hôm nay hoặc ngày mai."
- 🟡 **Story Bank READY < 5:** "Nên chạy `/idea-research` sớm."
- 🔴 **Consecutive Story Source:** "[X] đã dùng hôm qua. Suggest đổi."
- 🟡 **Character fatigue:** "[Name] đã xuất hiện 3 lần tuần này."
- 🟡 **No weekly plan:** "Đang chạy Freestyle Mode."

### Style Reminders — chọn 3 phù hợp nhất

| Content Type | Relevant Rules |
|-------------|---------------|
| Customer Voice | #8 (raw words), #21 (real voices), #9 (scene TURN) |
| Cultural Moment | #6 (standalone), #3 (Michelle IN story), #4 (inhabit) |
| Family/Personal | #3 (Michelle IN story), #4 (inhabit), #25 (polite vs quiet) |
| Product Origin | #22 (product in scene), #5 (don't pre-sell) |
| Community Achievement | #8 (raw words), #12 (show the receipt) |
| Industry Commentary | #15 (scarcity qua conversation), #2 (one throughline) |
| Campaign Jobs | #19 (context block first), #6 (standalone), #18 (don't borrow details) |

---

## STEP 3: USER CONFIRMATION

Chờ user:

**a) Approve → proceed**
- "OK" / "Let's go" → "Chạy `/write-email` — brief đã sẵn sàng."

**b) Adjust → update brief**
- User đổi Story Source, character, product... → update brief

**c) Swap story → show alternatives**
- Show READY items khác từ Story Bank phù hợp content type hôm nay

**d) Skip to freestyle**
- Bỏ plan constraints, giữ style rules

---

## STEP 4: HAND OFF

```
✅ Brief approved!

Next steps:
1. 📧 Chạy `/write-email` — brief pre-filled, Phase 1 skip
2. 📱 Chạy `/write-sms` sau khi email xong — cross-reference tự động
3. 🔍 Sau khi draft xong: chạy review agents
   - `/review-craft` (kỹ thuật viết)
   - `/review-strategy` (mục đích + hướng hay hơn)
   - `/review-brand` (character + brand consistency)
4. ✅ Chạy `/finalize-email` hoặc `/finalize-sms` để archive + post-mortem
```

---

## STEP 5: END-OF-DAY UPDATE

Chạy sau khi email + SMS đã finalize:

1. **Story Bank update:** Verify READY item moved → USED (done by `/finalize-email`)
2. **Tomorrow preview:** Check weekly plan cho ngày mai
   - Nếu READY item ngày mai cần development → flag
3. **Story Bank health:**
   - Nếu READY < 5: "💡 Chạy `/idea-research` sớm"
   - Report: "Story Bank: READY [X], CONCEPT [Y], SEED [Z]"

---

## BEHAVIOR RULES

- **Sprint awareness first:** Always run Step 0.5 BEFORE Step 1. Sprint mode overrides random pick.
- **Backward compatible:** Nếu không có weekly plan, monthly strategy, hoặc story bank → Freestyle Mode hoạt động
- **Không tự ý viết email.** Brief = gợi ý. User approve rồi mới chạy `/write-email`
- **Sale days:** Nếu weekly plan có 2-3 emails cùng ngày → present separate brief cho mỗi email
- **Style reminders ngắn gọn** → 3 rules max, không overload
- **Luôn suggest full workflow:** brief → write → review (3 agents) → finalize
- **Don't pick CAMPAIGN-RESERVED Story Bank items** — those are locked for active sprint
