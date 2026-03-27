# Afroyla Klaviyo Campaign Summary & Categorization

> **Source:** 171 HTML campaign files from `klaviyo_data/campaigns/`
> **Period:** November 1, 2025 → February 19, 2026 (~3.5 months)
> **From:** Michelle @ Afroyla (michelle@afroyla.com)

---

## Campaign Statistics

### By Type
| Type | Count | % |
|------|-------|---|
| SALE | 70 | 41% |
| STORY/DAILY | 70 | 41% |
| TEASER | 28 | 16% |
| CLONE/RESEND | 2 | 1% |
| **Total** | **170** | |

### By Month
| Month | Count | Avg/day |
|-------|-------|---------|
| Nov 2025 | 56 | 1.9 |
| Dec 2025 | 47 | 1.5 |
| Jan 2026 | 40 | 1.3 |
| Feb 2026 (1-19) | 27 | 1.4 |

### By Campaign Series (17 distinct series)
| Series | # Emails | Type | Period |
|--------|----------|------|--------|
| **Standalone** (daily stories) | 53 | STORY/DAILY | Ongoing |
| **Best Before Black Friday** | 22 | SALE+TEASER | Nov 3-10 |
| **BFCM Hunger Games** | 20 | SALE+STORY | Nov 19-30 |
| **Secret Santa Week** | 19 | SALE+STORY | Dec 3-13 |
| **Black Love Sale** | 13 | SALE+TEASER | Feb 3-11 |
| **Christmas Free Shipping** | 10 | SALE | Dec 13-17 |
| **Amazon Last-Minute Gifts** | 6 | SALE+STORY | Dec 17-19 |
| **Clearance Sale** | 5 | SALE+STORY | Jan 8-10 |
| **Community Surveys** | 5 | TEASER | Jan 21-23, Feb 13 |
| **Cyber Monday** | 4 | SALE | Dec 1-2 |
| **Kwanzaa** | 3 | STORY | Dec 26-28 |
| **The 200 Project** | 3 | STORY+TEASER | Jan 15-17 |
| **Locessa Collection** | 2 | STORY | Nov 15 |
| **Legacy Collection** | 2 | SALE | Jan 24-25 |
| **Weekend Specials** | 2 | SALE | Jan 24 |
| **Black History Month** | 1 | DAILY | Feb 1 |

---

## Campaign Series Deep Dives

### 1. Best Before Black Friday (Nov 3-10) — 22 emails
**Strategy:** Pre-BF sale with tiered urgency, separate tracks for "Buy Herself" vs "Buy Gift" segments.
- **Teaser phase** (Nov 3-6): 4 teaser pairs (herself/gift segments)
- **Sale phase** (Nov 7-10): 3-day sale with 3-4 emails/day
- **Key technique:** Audience segmentation (herself vs gift-giver), escalating urgency, daily email cadence

### 2. BFCM Hunger Games (Nov 19-30) — 20 emails  
**Strategy:** Gamification — turned Black Friday into a series of "games" with different themes.
- **Pre-teaser** (Nov 19-26): Built anticipation with customer co-creation narrative
- **Game rounds** (Nov 27-30): Speed Rounds, Wallet Storms, Last-Chance Lifelines
- **Also segmented**: Buy Herself vs Buy Gift tracks
- **Key innovation:** Random 10% order refunds, SMS "cheat code" cross-promotion
- **Standout email:** "Hunger Games" reveal (1160 words — longest campaign email)

### 3. Secret Santa Week (Dec 3-13) — 19 emails
**Strategy:** 7-day event with daily surprise gifts (free items with purchase).
- **Teaser** (Dec 3-5): 3 teasers building anticipation
- **Daily gifts** (Dec 6-12): Each day revealed a new gift
- **Finale** (Dec 12-13): 4 emails on Day 7, heavy urgency
- **SMS cross-sell:** "Text SANTA to join private list"

### 4. Black Love Sale (Feb 3-11) — 13 emails
**Strategy:** Valentine's-themed sale with "treasure hunt" mechanic ($9.95 bags hidden in collection).
- **Teaser** (Feb 3-8): 6 teasers with claw machine analogy, corrected keyword
- **3-day sale** (Feb 9-11): Daily themes with escalating deals ($9.95 bags → $0.95 wallets)
- **Key innovation:** Interactive "hunt" mechanic, George as recurring comedic character

### 5. Standalone Daily Stories — 53 emails
**Topics covered:**
- Customer stories & reviews (Sibling, Trust, She Gets It)
- Cultural celebrations (Kwanzaa, MLK Day, BHM)
- Brand origin/mission stories (Black-owned, Special Agents, No Social Media)
- Personal stories from Michelle (Braiding Hair, Dream of Nia, Mental Health)
- Anti-scam awareness (Scammers Melaniva, No More Scam, They Refunded Me)
- Collection launches (Locessa, Bald Head Designs, Faithful Designs)

---

## Subject Line Analysis

### Top Subject Line Patterns
1. **Curiosity/Open Loop:** "She walked in. They stared." | "I was going to be a writer."
2. **Social Proof Narrative:** "Women were stacking 3, 4, 5 bags per order." | "She saved over $400"
3. **Urgency + Specificity:** "[LAST CALL] Final 25 bags at 60% off" | "15 orders left"
4. **Emotional/Relatable:** "It HURTS, Mommy!" | "Would it be rude if I bought one?"
5. **Bold Claims:** "this might be the craziest day in afroyla history" | "My kitchen counter is vibrating"
6. **George Humor:** Used sparingly for P.P.S. but referenced in storytelling
7. **Quote Format:** "\"I cannot believe or trust anything these days\"" | ""Is the $9.95 bag real?""
8. **Personal/Intimate:** "My 5th grader just schooled me" | "You goat this"

### Preview Text Patterns
- Often left **blank** for STORY/DAILY (curiosity gap)
- Used for **context** in SALE emails: "170 bags. Starting from $9.95"
- Occasionally as **follow-up hook**: "Then my daughter destroyed me at 6:52 AM"

---

## Email Format Reference

### Common Structure (all types)
1. **Header:** Afroyla logo (always present)
2. **Body:** Plain text in `<p>` tags, 16px Helvetica/Arial
3. **CTA:** Centered link or "Shop Now" button
4. **Sign-off:** "Love, Michelle" or "With love, Michelle"
5. **P.S.:** Almost always present — fun fact (Nia) or humor (George)
6. **Product Grid:** 4 dynamic products from Klaviyo feed
7. **Post-Email Menu:** Links to Handbags, Totes, Wallets, Help
8. **Footer:** Unsubscribe link

### Personalization Tags Used
- `{{ person.first_name|default:'love' }}` — greeting
- `{{ first_name|default:'love' }}` — in subject lines (rare)
- `{% unsubscribe %}` — footer
- Klaviyo product feeds: `feeds.SHOP_POPULAR_ALL_CATEGORIES`

---

## File Naming Convention
```
{number}_{date}_{type}_{dateCode}_{title}.html
Example: 001_2026-02-19_Daily_190226_They_Said_She_Couldn_t_Fly.html
```
- Number: 001 (newest) → 171 (oldest)
- Date: YYYY-MM-DD
- Type: Daily/STORY/SALE/TEASER
- DateCode: DDMMYY
- Title: Cleaned campaign name
