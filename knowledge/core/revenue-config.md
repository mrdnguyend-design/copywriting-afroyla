# Revenue Planning Config

> Các parameters cho monthly/weekly revenue projections.
> Tương tự Config sheet trong Excel planning.
> **Last updated:** April 2026 (GA4 March actual data)

---

## Cost Parameters

| Param | Value | Note |
|-------|-------|------|
| SMS rate | $0.0075 | Per part (Postscript) |
| SMS fee | +2.9% | Multiplier: × 1.029 |
| Klaviyo | $6,240 | Per month |
| Klaviyo weekly | ~$1,413 | Approximate weekly cost |
| FB Ads budget | $1,600 | Per day (when running — Apr 10-22) |
| FB Ads total | $20,000 | April total budget |

## Email Parameters

| Param | Value | Note |
|-------|-------|------|
| Email MASS list | ~193,000 | Total subscribers (as of Mar 29) |
| Email REG list (sale) | 18,000 | Target by Apr 20 (Mother's Day) |
| Email MASS during sale | ~175,000 | MASS minus REG segment |
| Klaviyo send limit | 7,700,000 | Sends/month under current plan |

## SMS Segment Sizes

| Segment | Base Size | Growth | Note |
|---------|-----------|--------|------|
| HIGH (High-Engaged) | 30,000 | → 48,000 post-sale | Absorbs REG after sale |
| REG (Registered) | 0 → 18,000 | Warmup from Apr 10 | Campaign registration for MD Sale |
| MASS | ~103,000 | +328/day quiet | Dynamic list |
| NS (New Subscribers) | 7,000-9,000 | Per batch | Chưa mua hàng — no link SMS |
| CF (Customer Follow-up) | ~500-800 | Per batch | Post-purchase nurture |

## MASS List Dynamics

| Condition | Daily Change | When |
|-----------|-------------|------|
| Quiet (no SMS sent) | +328 | Default daily organic growth |
| Normal send | -150 | 1 SMS campaign sent |
| Heavy sale day | -500 | Multiple SMS campaigns + high frequency |

## Revenue Per Send (RPS) Rates — April 2026

> **Source:** GA4 March actual attribution (higher than Klaviyo-reported)

### Email RPS
| Email Type | RPS | Description |
|-----------|-----|-------------|
| Daily (story) | $0.00841 | Regular infotainment email |
| Teaser | $0.00564 | Pre-sale warmup/teaser |
| Warmup (to REG) | $0.03717 | Warmup emails to registered segment |
| Sale | $0.16683 | Sale day email (GA4 attribution — includes assisted conversions) |

### SMS RPS
| SMS Segment | RPS | Description |
|-------------|-----|-------------|
| Daily (HIGH) | $0.28657 | High-engaged flash deals |
| Warmup (REG) | $0.47234 | Registered warmup phase |
| Sale (REG) | $1.05466 | Sale day — registered segment (highest intent) |
| MASS | $0.00003 | Mass list — near $0 (awareness only) |
| NS (New Sub) | $0.00000 | No link — brand building only |
| CF (Customer Follow-up) | $2.54906 | Post-purchase — highest RPS |

## SMS Parts Per Send

| Segment/Type | Parts/Send | Note |
|-------------|-----------|------|
| Daily (HIGH) | 4.5 | Longer — personal tone |
| NS (New Sub) | 4.0 | Intro messages |
| MASS | 1.4 | Short teaser style |
| Warmup (REG) | 3.7 | Building relationship |
| Sale (REG) | 4.9 | Full sales pitch |
| CF (Customer Follow-up) | 3.5 | Moderate length |

## Quick Revenue Calculator

```
Email Revenue = Sends × RPS
SMS Revenue = Sends × RPS
SMS Cost = (Sends × Parts/Send × $0.0075) × 1.029

Example (MD Sale Day):
  Email MASS: 175,000 × $0.16683 = $29,195
  Email REG: 18,000 × $0.16683 = $3,003
  SMS REG: 18,000 × 5 msgs × $1.055 = $94,917
  SMS HIGH: 30,000 × $0.287 = $8,597
  SMS MASS: 98,000 × $0.00003 = $3
  Day Total Revenue: ~$135,715

  SMS Cost: ((90,000×4.9)+(30,000×4.5)+(98,000×1.4)) × $0.0075 × 1.029 = ~$5,430
```

## P&L Structure — April 2026

| Line | Formula | Target |
|------|---------|--------|
| Revenue | Sum all channels | TBD from P&L sheet |
| COGS | Revenue × 35% | |
| Klaviyo | Fixed | -$6,240 |
| SMS Cost | Calculated | |
| FB Ads | Fixed | -$20,000 |
| Donate | TBD | $0 |
| Shipping | Revenue × 8% | |
| **Net Profit** | | |
| **Margin** | | |

## Monthly Targets Template

| Scenario | Revenue | Net Profit | Margin |
|----------|---------|-----------|--------|
| Conservative (70%) | $— | $— | —% |
| Target (100%) | $— | $— | —% |
| Stretch (115%) | $— | $— | —% |

---

## Historical RPS Comparison

| Type | March Plan (Klaviyo) | April Plan (GA4) | Change |
|------|---------------------|-----------------|--------|
| E_Daily | $0.00819 | $0.00841 | +3% |
| E_Teaser | $0.00492 | $0.00564 | +15% |
| E_Sale | $0.01232 | $0.16683 | +1254% (attribution model change) |
| S_REG | $0.61803 | $1.05466 (sale) | +71% |
| S_HIGH | $0.22508 | $0.28657 | +27% |
| S_MASS | $0.03000 | $0.00003 | -99.9% (corrected to near $0) |

> **Note:** GA4 attribution gives significantly higher E_Sale and lower MASS RPS than Klaviyo-reported.
> Cập nhật RPS rates mỗi tháng dựa trên actual performance data.
