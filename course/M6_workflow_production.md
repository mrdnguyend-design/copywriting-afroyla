# Module 6: Workflow & Production System

> **Mục tiêu:** Hệ thống sản xuất content liên tục — from chaos to repeatable process.
> **Data source:** 4-workflow system, production schedules, Kaizen log format.

---

## 6.1 The 4-Workflow System

### Overview

```
┌─────────────────────────────────────────────────────┐
│                    CONTENT LOOP                      │
│                                                      │
│  WF1: Process        WF2: Research                   │
│  Customer Voices  →  Daily Ideas  →                  │
│       ↑                             ↓                │
│       │              WF3: Copywriter                 │
│       │              (7-Phase Core)                  │
│       │                             ↓                │
│       └── Customer ←── Email Sent ←── WF4: Review    │
│           Feedback                   (Ben & Daniel)  │
└─────────────────────────────────────────────────────┘
```

### Workflow 1: Process Customer Voices

**Trigger:** Customer email/DM/review received
**Output:** Organized entries in `customer-voices/` ready for content use

```
Step 1: Receive input (email, DM, review, survey)
Step 2: Classify → Story / Compliment / Product Feedback / Suggestion
Step 3: Extract quote + context + tags
Step 4: Rate potential hook (1-5⭐)
Step 5: Store in customer-voices/[category]/YYYY-MM.md
```

**Entry format:**
```markdown
## [ID] Name, City
- **Date:** YYYY-MM-DD
- **Source:** Email reply / DM / Review
- **Product:** [Name] or "General"
- **Quote:** "exact words, typos preserved..."
- **Tags:** #tag1 #tag2
- **Potential Hook:** ⭐⭐⭐⭐ (4/5)
- **Used:** ❌
```

### Workflow 2: Daily Idea Research

**Trigger:** Daily (or when needing email ideas)
**Output:** 3-5 scored ideas ready to write

```
Step 1: Scan reviews (TrustPilot, website) for new stories
Step 2: Check customer-voices/ for unused ⭐⭐⭐⭐+ entries
Step 3: Scan news + cultural calendar + Reddit
Step 4: Brainstorm 3-5 ideas with Hot Dog + Broccoli + Law
Step 5: Rate and present for selection
```

### Workflow 3: Infotainment Copywriter (CORE)

**Trigger:** User selects an idea or provides brief
**Output:** Complete email (markdown + HTML)

See Section 6.2 for full 7-phase breakdown.

### Workflow 4: Brainstorm & Critique

**Trigger:** User has a draft and wants review
**Output:** Ben/Daniel scores + line-by-line improvements + revised draft if needed

See Module 5 for full review criteria.

---

## 6.2 The 7-Phase Email Creation Process

### Phase Flow

```
Phase 1: BRIEF ──→ Phase 2: BRAINSTORM ──→ Phase 3: ANALYZE
                                                      │
                                               ⛔ WAIT: User chọn approach
                                                      │
Phase 4: DRAFT ──→ Phase 5: REVIEW ──→ ⛔ WAIT: User approve
                                                      │
                              Phase 6: FINALIZE ──→ Phase 7: ARCHIVE
```

### Phase Details

#### Phase 1: 📋 BRIEF

Confirm with user:
- **Product/Broccoli:** What needs to sell?
- **Story seed/Hot Dog:** Any idea hint?
- **Images:** Photos to embed?
- **Campaign:** Part of a series?
- **Tone:** Celebratory? Urgent? Reflective? Playful?

#### Phase 2: 🧠 BRAINSTORM

Generate **5 diverse approaches**, each using a different Law:

```
Approach 1: "[Name]"
├── Law/Mechanism: [e.g., #15 Intimate Details + Seinfeld Email]
├── Mini scene: [3-5 sentence opening hook]
├── Pivot strategy: [How story bridges to product]
└── Why it works: [1 sentence from Ben or Daniel]
```

#### Phase 3: 📊 ANALYZE

| # | Approach | Entertainment ⭐ | Pivot ⭐ | Voice ⭐ | Risk | Pick? |
|---|----------|-----------------|---------|---------|------|-------|
| 1 | "..." | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Low | ✅ TOP |

**⛔ STOP — Wait for user to pick approach.**

#### Phase 4: ✍️ DRAFT

Write complete email:

```
1. Subject Line — short, curiosity, persona voice
2. Preview Text — 1 line, different from subject
3. The Hook — jump-cut into scene. NO "I hope you are well"
4. The Narrative — short paragraphs, dialogue, sensory detail
5. The Pivot — story → bigger meaning (natural bridge)
6. The Sales Pitch — product as hero, broccoli in hot dog
7. The CTA — direct command + link
8. Sign-off — "Love, Michelle"
9. P.S. — Nia fact OR George joke
```

#### Phase 5: 🔍 REVIEW

Run Ben/Daniel dual-review (see M5).
Apply 3-4 refinements.

**⛔ STOP — Wait for user to approve.**

#### Phase 6: 📨 FINALIZE

Output 2 formats:
1. **Plain Text** (markdown) — for review
2. **HTML** (inline CSS) — for Klaviyo/email platform

#### Phase 7: 📁 ARCHIVE

Save with naming convention:
```
[type]_[DDMMYY]_[short_name].md
[type]_[DDMMYY]_[short_name].html
```

Types: `daily_`, `teaser_`, `saleday_`, `warmup_`, `sms_`

---

## 6.3 Production Schedule Management

### Campaign Timeline Template

| Phase | When | Tasks |
|-------|------|-------|
| **Planning** | Day -30 | Brand config, offer structure, content plan V1 |
| **Teaser writing** | Day -14 to -5 | 2-3 pieces/day, Ben/Daniel reviews |
| **Warmup writing** | Day -7 to -3 | 4-6 warmup emails + SMS |
| **Infrastructure** | Day -3 | Landing page, collection, keyword setup |
| **Sale-day prep** | Day -1 | Templates, apology draft, character assignments |
| **Live sale** | Day 0 to +3 | Real-time content, adapt to actual data |
| **Post-sale** | Day +1 | Recap email |
| **Kaizen** | Day +3 | Update learnings.md |

### Daily Workload Tracking

Use difficulty ratings in production schedule:

| Pieces/day | Rating |
|-----------|--------|
| 1-3 | 🟢 Light |
| 4-5 | 🟡 Medium |
| 6+ | 🔴 Heavy |

> **Tip:** Sale-day SMS templates look heavy on paper but are quick to write (fill-in-the-blank format).

### Content Plan Table Format

```markdown
| Date | 📧 Mass | 📧 Registered | 📱 SMS Mass | 📱 SMS Reg | 📱 SMS HE |
|------|---------|---------------|-------------|------------|-----------|
| Mar 11 | E1 | — | — | — | — |
| Mar 12 | E2 | — | SM1 | — | — |
| ... | | | | | |
```

---

## 6.4 Kaizen — Continuous Improvement

### After EVERY Email Approved

Add entry to `learnings.md`:

```markdown
### [DDMMYY] [Email Title]

- **Type:** Daily / Teaser / Sale / SMS
- **Approach:** [Short description of chosen approach]
- **Law/Mechanism:** [Laws + mechanisms used]
- **Idea Source:** [Review / Reddit / Customer Email / News]
- **Iterations:** [Number of rounds]
- **User Feedback Summary:** [Key feedback that changed direction]
- **What Worked:** [Lines/elements user praised]
- **What Changed:** [What was revised + why]
- **Time to Approve:** Nhanh (1) / Trung bình (2-3) / Nhiều (4+)
- **Tags:** #hook-type #law-used #outcome
```

### Monthly Review

Every 10 emails or end of month:

1. **Pattern scan:** What Laws are overused? Underused?
2. **Character audit:** Who hasn't appeared lately?
3. **Feedback themes:** Any recurring user feedback?
4. **Update Style Rules:** Add new rules discovered this month
5. **Update Teaser Checklist:** New items from campaign learnings

### Living Documents

| Document | Update When | Contains |
|----------|-------------|----------|
| `learnings.md` | After every email approved | Style rules + post-mortems |
| `swipe-file-best-emails.md` | When a new "best" email is written | Tier 1-3 email references |
| `customer-voices/` | When feedback received | Organized customer quotes |
| `universe-afroyla-cast.md` | When character evolves | Character behaviors, greatest hits |

---

## 6.5 Folder Structure

```
Copywriting Afroyla/
├── .agent/workflows/              # 4 automation workflows
│   ├── afroyla-copywriter.md      # WF3: Core copywriter
│   ├── brainstorm-critique.md     # WF4: Review & critique
│   ├── idea-research.md           # WF2: Daily research
│   └── process-customer-emails.md # WF1: Process feedback
├── knowledge/                     # Reference documents
│   ├── BRAND_CONTEXT.md           # Brand identity
│   ├── universe-afroyla-cast.md   # Character bible
│   ├── INFOTAINMENT JACKPOT *.txt # Framework files
│   ├── email-html-template.md     # HTML template
│   ├── email-quality-checklist.md # Quality standards
│   ├── sms-vip-flash-deal-templates.md  # SMS angles
│   ├── writing-patterns-klaviyo.md      # Writing patterns
│   ├── swipe-file-best-emails.md        # Best references
│   ├── *-campaign-analysis.md           # Campaign analyses
│   └── infotainment-workflow-template.md # Brand-agnostic template
├── customer-voices/               # Organized feedback
│   ├── stories/
│   ├── compliments/
│   ├── product-feedback/
│   └── suggestions/
├── examples/                      # Approved emails + SMS
│   ├── daily_*.md / .html
│   ├── teaser_*.md / .html
│   ├── email_*.md / .html
│   └── sms_*.md
├── [campaign-name]/               # Campaign-specific folders
│   ├── content_plan.md
│   ├── production_schedule.md
│   ├── brainstorm_*.md
│   ├── proofread_*.md
│   ├── teaser_*.md / .html
│   ├── warmup_*.md / .html
│   ├── saleday_*.md / .html
│   └── sms_*.md
├── course/                        # THIS COURSE
├── learnings.md                   # KAIZEN log
└── scripts/                       # Automation scripts
```

---

## 6.6 Setup Checklist for New Campaign

- [ ] Create campaign folder
- [ ] Draft content plan V1 (calendar view with dates + segments)
- [ ] Define: sale mechanic, scarcity, mission, SMS keyword
- [ ] Estimate content volume (small/medium/large)
- [ ] Create production schedule with daily workload ratings
- [ ] Start teaser writing → Ben/Daniel review → iterate
- [ ] Track registration numbers for social proof escalation
- [ ] Pre-draft apology email (just in case)
- [ ] Sale-day SMS templates
- [ ] Post-sale recap framework
- [ ] Kaizen: update learnings.md after campaign
