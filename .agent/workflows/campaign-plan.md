---
description: Campaign Plan — Kick-off promotion sprint (T-20), tạo living doc + fill 4 phase plans
---

# CAMPAIGN PLAN WORKFLOW

> **Ai chạy:** Michelle (cùng AI agent)
> **Khi nào:** T-20 trước sale day (hoặc T-X compressed cho khẩn cấp)
> **Input:** Monthly Strategy đã có campaign trong Section 3 Sale Calendar
> **Output:** `planning/campaigns/[YYYY-MM]-[slug].md` (living doc) + folder `[slug]-drafts/`
> **Feeds:** `/daily-brief` (sprint awareness), `/write-email`, `/write-sms`, eventually `/campaign-postmortem`

---

## STEP 0: ENTRY GATE — 5 inputs mandatory

> **Reference:** `knowledge/core/campaign-playbook.md` Section 2.

KHÔNG vào sprint nếu thiếu 1 trong 5:

- [ ] **Sale dates locked** (start + end + close hour)
- [ ] **Offer skeleton** (discount range + product scope, kể cả còn fuzzy)
- [ ] **Inventory feasibility** (Shopify check — đủ hàng cho cap dự kiến?)
- [ ] **Operations cap** (warehouse có thể fulfill bao nhiêu orders/day?)
- [ ] **Monthly strategy đã có campaign này** (Section 3 sale calendar `planning/monthly/[YYYY-MM]-strategy.md`)

**Action nếu fail:**
- 1-2 missing → ngồi với Michelle clarify trước, ghi nhanh
- 3+ missing → STOP, quay về `/monthly-strategy` hoàn thành Section 3 trước

**Action nếu pass:** Proceed Step 1.

---

## STEP 1: CREATE LIVING DOC + DRAFTS FOLDER

### Inputs
- Campaign slug (kebab-case, e.g., `mothers-day-sale`, `black-friday`, `juneteenth-drop`)
- Sale start date → derive `[YYYY-MM]-` prefix
- Template: `knowledge/core/campaign-master-template.md` (skeleton between `=== SKELETON START ===` và `=== SKELETON END ===`)

### Actions
1. Copy skeleton từ `campaign-master-template.md` sang file mới `planning/campaigns/[YYYY-MM]-[slug].md`
2. Create folder `planning/campaigns/[YYYY-MM]-[slug]-drafts/` (empty, ready to receive email/SMS drafts)
3. Fill Section 0 Quick Reference với basic info từ Step 0 (sale dates, segment, monthly link, drafts folder path)
4. Set Status: `STRATEGY-DRAFT`
5. Stamp Last updated với current timestamp

### Output
- File `planning/campaigns/[YYYY-MM]-[slug].md` exists with skeleton + Section 0 filled
- Folder `[slug]-drafts/` exists

---

## STEP 2: FILL SECTION 1 STRATEGY (interactive dialog with Michelle)

### Inputs
- `planning/campaigns/mechanic-history.md` Sections 2+3 (used history + lookup)
- `knowledge/core/revenue-config.md` (RPS rates cho sales-curve forecast)
- `knowledge/core/campaign-playbook.md` Section 3.1 (6 components spec)

### Actions

**2.1 — Campaign Identity (Section 1.1)**
- Hỏi Michelle: positioning 1 dòng, target segment(s), expected segment growth
- Fill Section 1.1

**2.2 — Offer Architecture (Section 1.2)**
- Hỏi: tier table (price, discount %), hero products (3-5 named), bundle structure, sold-out callouts, inventory commitment, ops cap
- Cross-check với Step 0 inputs
- Fill Section 1.2

**2.3 — Promotion Mechanic + Novelty Audit (Section 1.3)** ⚠️ CRITICAL GATE
- Đọc `mechanic-history.md` Section 3 lookup → identify mechanics đã dùng < 6 tháng
- **Force brainstorm min 3 mechanic candidates** với Michelle (kể cả combinations)
- Cho mỗi candidate, hỏi: "Mechanic này khách cũ đã thấy chưa? Có vui không?"
- Pick 1 mechanic (or combination) → fill Section 1.3 with all 3 candidates + justification
- **Run Novelty Audit (4 trục):**
  - Pull last 3-5 entries from `mechanic-history.md` Section 2
  - Score each trục (Mechanic / Offer / Theme / Hero Product) ✅ NEW or ❌ SAME
  - Compute novelty score X/4
- **Decision gate:**
  - 4/4 hoặc 3/4 → 🟢 PASS, proceed
  - 2/4 → 🟡 BORDERLINE, require explicit "why fresh enough" note in Section 1.3
  - ≤ 1/4 → 🔴 FAIL, BLOCK and require redesign (return to brainstorm)
- **Hard-block check:** Same mechanic ID < 6 months → 🔴 BLOCK regardless

**2.4 — Tension Numbers (Section 1.4)**
- Hỏi: 1-2 con số căng thẳng + lý do operational thật
- ⚠️ **Validate:** Cap phải có lý do operational thật (không "ends soon!!" giả). Nếu không thật → flag và ask Michelle clarify.
- Fill Section 1.4

**2.5 — Hero Story Spine (Section 1.5)**
- Hỏi: 1 paragraph spine + 8-10 story arc beats (T-10 → T-1)
- Audit Story Bank: đếm READY items hiện có
  - Nếu READY < 8 → flag "⚠️ Story Bank thiếu, run `/idea-research` trước Section 4 Teaser Plan"
- Fill Section 1.5

**2.6 — Success Metrics + Sales-Curve Forecast (Section 1.6)**
- Calculate Conservative / Target / Stretch revenue dựa trên `revenue-config.md` RPS + estimated email/SMS sends
- Hỏi Michelle: sales-curve forecast (% revenue per sale day, vd: 50% T-0, 30% T+1, 20% T+2)
- Cap targets: order cap hit time, inventory exhaustion expected
- Fill Section 1.6

### Output
- Section 1 fully filled (1.1 → 1.6)
- Novelty audit pass (≥ 2/4)

---

## STEP 3: STRATEGY LOCK SIGN-OFF (Section 1.7)

### Inputs
- Section 1 filled

### Actions
- Present 4-question gate to Michelle:
  - Q1: Khách CŨ thấy gì MỚI? (Novelty score ≥ 2/4)
  - Q2: Tension Numbers tạo khan hiếm THẬT?
  - Q3: Hero Story spine kéo 8-10 emails không lặp?
  - Q4: Inventory + Operations sign-off?
- All 4 must pass. If any fail → loop back to relevant subsection in Step 2.
- Once pass: tick all boxes, fill "Locked by: Michelle on [date]"
- Update Status: `STRATEGY-DRAFT` → `STRATEGY-LOCKED`
- Update Last updated timestamp

### Output
- Section 1.7 sign-off complete
- Status: STRATEGY-LOCKED
- Phase progression unblocked for T-17

---

## STEP 4: FILL SECTION 2 CREATIVE BRIEF (T-17 trigger)

> **Wait for T-17.** Don't fill at T-20. Run this step when calendar reaches T-17.

### Inputs
- Section 1 locked
- `knowledge/core/universe-afroyla-cast.md` (character bible)
- Proven brief format: `planning/campaigns/2026-04-mdsale-lp-brief.md` (MD Sale)

### Actions

**4.1 — Event Description (Section 2.1)**
- 1 paragraph: dates, time, gate, cap, "list only" feel
- Pull from Section 1.1 + 1.4

**4.2 — Offer Detail (Section 2.2)**
- Expand from Section 1.2 with product names, sold-out callouts, gift set details

**4.3 — Page Experience (Section 2.3)** [optional — chỉ fill nếu có LP]
- Flow, filter logic, anchor product, cross-promote, post-sale page state

**4.4 — Voice + Feel (Section 2.4)**
- Brand identity reminder, avoid list, color/typography, photography direction, voice example (1-2 câu chuẩn)

**4.5 — Character Map (Section 2.5)** ⚠️ CRITICAL — lock characters NOW
- Fill table: which character appears in which phase, with constraints
- ⚠️ **If introducing NEW character (e.g., Dylan in MD Sale):**
  - Spec voice + role + appearance rules in this section FIRST
  - Add hygiene TODO: "Update `universe-afroyla-cast.md` AFTER campaign closes"
  - DO NOT canonize post-ship like MD Sale Dylan was — that's the bug we're fixing

**4.6 — BRIEF LOCK SIGN-OFF (Section 2.6)**
- 3-question gate:
  - Q1: IT/Designer hiểu page?
  - Q2: Copy team biết Hero Story spine + character arc cho 8-10 emails?
  - Q3: Voice example present?
- All pass → fill "Locked by: Michelle on [date]"

### Output
- Section 2 filled, locked
- Optional: Section 3 FB Ads Plan filled at T-14 trigger (lighter step, no formal gate)

---

## STEP 5: FILL SECTION 4 TEASER PLAN (T-10 trigger)

> **Wait for T-10.** Run this when calendar reaches T-10.

### Inputs
- Sections 1-2 locked
- `knowledge/core/story-bank.md` (READY items)
- `knowledge/core/sms-vip-flash-deal-templates.md` (10 SMS angles)

### Actions

**5.1 — Story Bank pre-flight check**
- Count READY items
- If < 8: ⚠️ STOP, recommend run `/idea-research` first
- If ≥ 8: proceed

**5.2 — Sequence Table (Section 4.1)**
- Build 8-10 row table: Day, Subject hook, Job (ANNOUNCE/JUSTIFY/PROVE/etc.), Story Bank ref (R-ID), Character, 3-Element check (Mechanic + Demand + Prices)
- Adapt count: Flash 3-5, Standard 8-10, Gamified 10-14

**5.3 — Story Bank Reservation (Section 4.2)**
- For each R-ID used, mark CAMPAIGN-RESERVED in `story-bank.md`
- Re-count remaining READY: must be ≥ 5 for daily content during sprint window
- If < 5 remaining: flag "⚠️ Run `/idea-research` to replenish before T-5"

**5.4 — Cross-channel SMS Pairing (Section 4.3)**
- For each teaser, identify SMS counterpart day + segment + angle (from sms-vip-flash-deal-templates.md)
- Rule: Mỗi teaser email PHẢI có ít nhất 1 SMS counterpart cùng ngày HOẶC ngày kế

**5.5 — TEASER LOCK SIGN-OFF (Section 4.4)**
- 3-question gate:
  - Q1: 8-10 subject lines đọc liền có cảm giác arc?
  - Q2: Mỗi email có 3 elements?
  - Q3: Character rotation valid (George ≤ 3, Nia ≤ 2)?
- All pass → lock

### Output
- Section 4 filled, locked
- Story Bank items reserved
- Cross-channel pairings clear

---

## STEP 6: FILL SECTION 5 WARMUP PLAN (T-5 trigger)

> **Wait for T-5.** Run this when calendar reaches T-5.

### Inputs
- Sections 1-4 locked
- Segment list (REG/HIGH/MASS sizes from `revenue-config.md`)

### Actions

**6.1 — REG/HIGH/MASS Sequences (Section 5.1)**
- Fill 5-row table (T-5 → T-1) × 3 segment columns
- REG: insider voice, prices sneak peek, hero reveals, final prep
- HIGH: story-first, sale background, daily story bridge
- MASS: last-chance teaser, gate close warning

**6.2 — Cross-channel Timing (Section 5.2)**
- Per day: email send time + SMS send time, conflict check
- Rule: SMS không trùng giờ email về cùng product

**6.3 — WARMUP LOCK SIGN-OFF (Section 5.3)**
- 3-question gate:
  - Q1: REG có cảm giác "insider"?
  - Q2: HIGH không bị spam sale-talk?
  - Q3: Cross-channel timing không conflict?
- All pass → lock

### Output
- Section 5 filled, locked
- Status: still STRATEGY-LOCKED (advance to EXECUTING when T-0 hits)

---

## STEP 7: FILL SECTION 6 LAUNCH PLAN (T-1 trigger) — optional within `/campaign-plan`

> Có thể được làm trong `/campaign-plan` last call hoặc tách standalone tại T-1. No formal sign-off gate (sale ngày mai, urgency cao).

### Inputs
- Sections 1-5 locked
- March Madness sale-day pattern reference

### Actions
- Fill Section 6.1 sale-day calendar (REG ×5, HIGH ×1-2, MASS ×1)
- Fill Section 6.2 SMS schedule (timestamps for rapid-fire updates)
- Fill Section 6.3 monitoring triggers (cap, inventory, oversell risk)
- Fill Section 6.4 incident response runbook (pre-drafted apology email, backup links, etc.)

### Output
- Section 6 filled
- Update Status: `STRATEGY-LOCKED` → `EXECUTING` (when T-0 fires)

---

## SECTION 7 DECISION LOG — ongoing throughout sprint

> **Not a step — ongoing rule.** Mọi thay đổi sau STRATEGY LOCK đi vào Section 7. Format:

```
### YYYY-MM-DD HH:MM — [Title]
- What: [thay đổi gì]
- Why: [lý do — based on what data/signal]
- Impact: [ảnh hưởng tới phase/section nào]
- Sections updated: [list]
- Approved by: [Michelle / name]
```

**Trigger to log:** Any change to Section 1.X, 2.X, 3.X, 4.X, 5.X, 6.X after lock. AI agent must prompt Michelle to log when detecting changes.

---

## WHEN TO BREAK THE RULES

**Flash 1-day không teaser:**
- Skip Step 5 (Teaser Plan), Step 6 (Warmup Plan)
- Run Step 0-3 (Strategy + light) only, then jump to Section 6 Launch Plan
- Run `/campaign-postmortem` after T+3 anyway

**Recurring campaign giống tháng trước (cùng mechanic, không thay đổi):**
- Run `/campaign-postmortem` campaign cũ TRƯỚC, then re-use folder template
- Still run full `/campaign-plan` to verify novelty audit (must pass — if same mechanic, hard-block triggers)

**Khẩn cấp < 14 ngày:**
- Compress Step 2 + Step 4 vào 1 ngày (T-X)
- Giữ teaser tối thiểu 5 emails
- ⚠️ NÊN tránh — campaign khẩn = lower ROI lịch sử (per Risk Register)

---

## BEHAVIOR RULES

- **Don't fill all sections at T-20.** Sections fill in waves theo phase trigger.
- **Sign-off gates are HARD blockers.** Don't proceed without sign-off.
- **Novelty audit is the highest-leverage gate.** Don't bypass even when Michelle pushes — repeat customers burn out fastest on familiar mechanics.
- **Section 7 Decision Log is mandatory** for any post-lock change. AI agent prompts Michelle when detecting changes.
- **Story Bank reservation must propagate** — mark CAMPAIGN-RESERVED in `story-bank.md` so daily-brief doesn't pick them.
- **Drafts folder is separate** — never inline draft email/SMS content into master doc.

---

## NEXT STEPS AFTER `/campaign-plan` COMPLETES

1. Daily writing during sprint window: `/daily-brief` will auto-detect sprint active, route to Section 4/5/6 instead of random Story Bank pick
2. Email/SMS drafts go to `[slug]-drafts/` folder via `/write-email`, `/write-sms`
3. Reviews: `/review-craft`, `/review-strategy`, `/review-brand`
4. Finalize: `/finalize-email`, `/finalize-sms`
5. After T+3: run `/campaign-postmortem` to fill Section 8 + propagate learnings + close
