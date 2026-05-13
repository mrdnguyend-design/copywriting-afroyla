# MECHANIC HISTORY — Cross-Campaign Tracker

> **Mục đích:** Single source of truth cho mọi promotion mechanic đã dùng. Workflow `/campaign-plan` đọc file này ở Step 2 (Strategy phase) để **enforce novelty** — chống lặp mechanic identical trong < 6 tháng cho repeat customers.
>
> **Cập nhật khi nào:** Mỗi `/campaign-postmortem` append 1 entry mới vào Section 2.
>
> **Không ghi gì:** Daily emails, daily SMS, flash 1-day không có teaser sequence.
>
> **Reference:** `knowledge/core/campaign-playbook.md` Section 4 (Mechanic Library).

---

## 1. Mechanic Catalog (M01-M12)

| ID | Mechanic | Tone | Best For |
|----|----------|------|----------|
| **M01** | Text-to-Register (text "X" → 94923, gate đóng sau N ngày, cap người) | Insider, scarcity | High-intent customers |
| **M02** | Gamified Hunt (egg hunt, shuffle, tile reveal, elimination bracket) | Playful, repeat visits | All segments |
| **M03** | Mission/Charity (mỗi đơn = $X donate, cap = N orders for cause) | Purpose-driven, emotional | Mission-aligned |
| **M04** | Reverse Auction (giá giảm theo time, mỗi giờ giảm $X — first-come) | Urgency loop | Patient bargain hunters |
| **M05** | Mystery Box (pay $X, nhận bag random từ tier) | Curiosity, gift | Gift buyers, low-AOV |
| **M06** | Loyalty Tier Unlock (mua N+ đơn từ trước = unlock extra discount) | Reward, exclusivity | VIP repeat buyers |
| **M07** | Bundle Architecture (BOGO, Wallet+Bag combo, multi-item discounts) | Average order ↑ | Multi-item buyers |
| **M08** | Pre-Order with Deposit (pay $X today, lock price, ship later) | Cash flow, scarcity | Anticipation buyers |
| **M09** | Customer-Voted Drop (poll N products, top 3 winners go on sale) | Co-creation, community | Engaged community |
| **M10** | Sealed Envelope Discount (đăng ký → nhận 1 random discount %, không biết trước) | Surprise, fairness | All segments |
| **M11** | First-N-Orders Cap (1000 orders only — sale dừng khi đầy bất kể time) | Real scarcity | High-intent |
| **M12** | Heritage Date Tie-In (sale chạy đúng ngày văn hóa — Juneteenth, MLK Day, Mother's Day) | Cultural meaning | Brand-aligned |

> **Mechanic combinations:** Có thể kết hợp 2-3 mechanic. Ví dụ: M01+M11 = private gate + order cap (MD Sale 2026). M02+M03 = gamified hunt + charity. M07+M12 = BOGO trong Heritage week.

---

## 2. Used History (back-filled + ongoing)

> **Format:** Newest first. Append mới ở TOP của table.

| Sale Start Date | Campaign Slug | Mechanic ID(s) | Variant / Note | Outcome (1-5⭐) | Post-mortem Link | Next Safe Re-use |
|----------------|---------------|---------------|----------------|----------------|-----------------|------------------|
| 2026-04-21 | `2026-04-mothers-day-sale` | **M01 + M11 + M12** | Text-to-register MOM→94923, 5K registration cap + 1,000 orders cap, Heritage tie-in (Mother's Day May 10). Largest 2026 sale, ~180 SKUs on sale, hero products: Fahari/Barakaya/Imarimom/Godfidence. | [TBD post-Apr 26] | [LINK: planning/campaigns/2026-04-mothers-day-sale.md#8-post-mortem] | 2026-10-21 |
| 2026-04-04 | `2026-04-easter-game` | **M02** | Gamified mini-sale (Easter egg/tile reveal). Products: Small Leather Bags, Mini Satchels. | [TBD — back-fill from monthly insights] | [LINK: learnings/post-mortems.md (search "Easter")] | 2026-10-04 |
| 2026-03-20 | `2026-03-march-madness` | **M02 (variant) + M01** | Elimination bracket — products "eliminated" when sold out. 3-day private sale (registrants only via AFR995E/F → 94923). $9.95 wallets / $14.95 bags. ~450+ orders Day 1-2, oversell incident Day 1 (Small Leather Bags) → swap-in Mini Satchels Day 2 + Circle Crossbody surprise Day 3. | ⭐⭐⭐⭐ Hit Conservative + notable Day 1 oversell handled gracefully | [LINK: 2026-03-march-madness.md#8-post-mortem] | 2027-03 (recommend full year cooldown to preserve themed novelty) |
| 2026-03-08 | `2026-03-iwd-300-mission` | **M03 + M09** | Mission-driven (300 orders → cap, donate per order to cause). Customer-voted product variant for IWD theme. | [TBD — back-fill] | [LINK: learnings/post-mortems.md (search "IWD")] | 2026-09-08 |

---

## 3. Last-Used Lookup (quick reference)

> **Auto-derived from Section 2.** Update when appending new entry.

| Mechanic | Last Used Date | Last Used Campaign | Cooldown Until |
|----------|---------------|--------------------|----------------|
| M01 | 2026-04-21 (MD) / 2026-03-20 (MM combined) | mothers-day-sale / march-madness | 2026-10-21 |
| M02 | 2026-04-04 (Easter) / 2026-03-20 (MM variant) | easter-game / march-madness | 2027-03 (themed variant — recommend full year) |
| M03 | 2026-03-08 | iwd-300-mission | 2026-09-08 |
| M04 | — never used | — | ✅ available now |
| M05 | — never used | — | ✅ available now |
| M06 | — never used | — | ✅ available now |
| M07 | — never used | — | ✅ available now |
| M08 | — never used | — | ✅ available now |
| M09 | 2026-03-08 | iwd-300-mission | 2026-09-08 |
| M10 | — never used | — | ✅ available now |
| M11 | 2026-04-21 | mothers-day-sale | 2026-10-21 |
| M12 | 2026-04-21 | mothers-day-sale | 2026-10-21 (can re-use sooner if different cultural date) |

> **Note on M12 (Heritage Date Tie-In):** Cooldown applies per-cultural-date. Can re-use M12 with DIFFERENT date (e.g., MD Sale 2026-04 used Mother's Day → Juneteenth 2026-06 still allowed because different anchor).

---

## 4. Novelty Audit Algorithm (run in `/campaign-plan` Step 2)

> **Goal:** Repeat customer (Afroyla's core) phải thấy MỚI mỗi đợt. Định nghĩa "MỚI" = ≥ 2/4 trục khác vs 3-5 campaigns gần nhất.

### 4 trục audit

```
1. MECHANIC — different M0X (or different combination)
2. OFFER — different price tier / discount depth / structure
3. THEME — different cultural angle / seasonal anchor
4. HERO PRODUCT(S) — different hero SKUs / categories
```

### Algorithm

```
INPUT: Proposed campaign (mechanic, offer, theme, hero products)

STEP 1 — Pull last 3-5 campaigns from Section 2
STEP 2 — Score each trục:
  - For each trục, compare proposed vs each past campaign
  - Mark ✅ NEW if differs from ALL past 3-5 campaigns
  - Mark ❌ SAME if matches ANY past campaign
STEP 3 — Count ✅
STEP 4 — Decision:
  - 4/4 NEW → 🟢 STRONG novelty, proceed
  - 3/4 NEW → 🟢 OK novelty, proceed
  - 2/4 NEW → 🟡 BORDERLINE, proceed but flag in Section 1.3 with explicit "why this is fresh enough"
  - 1/4 NEW → 🔴 FAIL, redesign at least 1 trục
  - 0/4 NEW → 🔴 HARD FAIL, this is a copy of past campaign — redesign multiple trục
```

### Hard-block rules (override score)

- **Same mechanic ID + within 6 months** → 🔴 FAIL regardless of score (use Section 3 cooldown)
- **Same hero products + same mechanic** → 🔴 FAIL regardless (looks like repeat sale)

### Pre-flight requirement

- **Min 3 mechanic candidates** must be considered in Section 1.3 of the campaign master doc. Workflow forces user to brainstorm 3 before picking 1.

---

## 5. Mechanic Combination Examples (proven + theoretical)

**Proven (already executed):**
- **M01 + M11 + M12** = Private gate + Order cap + Heritage tie-in → MD Sale 2026 (largest 2026 revenue)
- **M03 + M09** = Mission + Customer-vote → IWD 300 Mission 2026
- **M02 (variant)** = Elimination bracket → March Madness 2026

**Theoretical (untested — for future novelty):**
- **M02 + M03** = Gamified hunt where each round = $X to charity → community + play
- **M07 + M12** = BOGO trong Heritage week (Juneteenth: buy 1 bag, donate 1 to local org)
- **M09 + M01** = Community vote → top 3 → private gate cho voters → exclusivity reward
- **M05 + M10** = Mystery box với sealed envelope discount → double surprise
- **M04 + M11** = Reverse auction with order cap → urgency × scarcity
- **M06 + M08** = VIP loyalty tier unlock pre-order with deposit → exclusivity + cash flow
- **M08 + M12** = Pre-order with deposit tied to heritage date launch → anticipation + meaning

---

## 6. Append-Only Maintenance Rules

1. **Never delete entries.** History is audit trail.
2. **Append at TOP of Section 2 table** (newest first).
3. **Update Section 3 lookup** when appending (re-derive from Section 2).
4. **Outcome rating only filled AFTER post-mortem completes** — never speculate.
5. **`Next Safe Re-use` = sale_start_date + 6 months** by default. Override only if mechanic variation justifies (document why).
6. **Workflow `/campaign-postmortem` Step 4 is responsible for appending.**
