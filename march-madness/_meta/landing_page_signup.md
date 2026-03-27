# Landing Page — MARCH MADNESS Signup

**Draft HTML:** [march_madness_landing.html](file:///D:/Code%20landingpage/Afroyla/march_madness_landing.html)
**Keywords:** AFR995E (Email) / AFR995F (FB Ads)

---

## ═══ S1: HERO ═══ ✅ APPROVED

```
tag: 🏀 MARCH MADNESS · MAR 20-22
h1: Afroyla Leathers From $9.95.
sub: (no, we haven't lost our minds.)
     (ok maybe a little.)
CTA: I'M IN →
```

---

## ═══ S2: PRICE SHOCK + PRODUCT ═══

**Heading giữ nguyên:**

```
h2: $140 BAGS FOR $9.95.
```

**Body copy — viết lại:**

```
That's not a typo.

You're grabbing a $140 bag or $50 wallet for $9.95.

That's what happens during MARCH MADNESS.

This is our private 3-day flash event where premium Afroyla
leather goodies drop to prices that shouldn't exist.

The bags that make people stare and ask
"where'd you get THAT?"

Those bags & wallets.

For prices that'll make you think we lost our minds.

But there's a catch...
```

---

### Notes — S2

- **"leather goodies"** thay vì "bags" — mở rộng ra wallets, pouches, makeup bags (same term Skullette dùng thành công)
- **"$140 bag or $50 wallet for $9.95"** — anchor cả hai sản phẩm, không chỉ bags
- **"private 3-day flash event"** — establish exclusivity sớm
- **"stare and ask"** thay vì "stop you in Target" — cùng ý nhưng không clone BLS verbatim
- **No CTA** — per user. "But there's a catch..." bridge kéo vào S3
- **No tag** — đã moved lên S1
- **Accountant joke saved** — per Ben note, deploy elsewhere, không burn ở đây

---

## ═══ S3: STORY (WHY) ═══

**HTML location:** Lines 899-911 (`#story` — light bg)
**CRO job:** Answer WHY these prices exist. Build trust. Cold traffic needs a REASON to believe this is real, not scam.

**Current (BLS clone):**

```
"But here's the thing..."
"This isn't a normal sale. This is MARCH MADNESS."
"Limited quantities. Prices move fast. Stock disappears."
"You gotta be quick. You gotta be smart."
```

**Rewrite — Skullette transparency pattern:**

```
emphasis: We weren't going to tell you this. But...

Here's what happened.

Every quarter, we lock in shipping rates with our carrier
based on volume.

More orders → better rates → better prices for you long term.

At our current pace, we're short of hitting that target
before March ends.

So we made a call:

open the vault, drop everything from $9.95,
and get those orders in 72 hours.

Once we hit our target — or March 22 passes —
these prices are done.

No extensions. No "one more day."

The vault closes and prices go back to where they belong.
```

---

## ═══ S3b: THE LIST (dark section) ═══

**HTML location:** Lines 914-926 (`#story-dark` — dark bg, gold border box)
**CRO job:** Convert curiosity into action. Make exclusivity feel real, not gimmicky.

**Current (BLS clone):**

```
"You gotta be on THE LIST."
"This sale is PRIVATE. Invite-only."
"If you're not subscribed, you won't even SEE the sale page."
"No link. No access. Nothing."
"Drop your info below or miss it."
```

**Rewrite:**

```
headline: You gotta be on
          THE LIST.

This sale is PRIVATE.
Invite-only. If you're not subscribed,
you won't even SEE the sale page when it goes live.

No link. No access. Nothing.

Drop your info below or miss it.
```

---

### Notes — S3 + S3b

- **S3 = Skullette's exact transparency framework** — proven on cold traffic. Tells people: real business reason, you benefit. Not fake scarcity.
- **"We weren't going to tell you this. But..."** — opens a loop. The reader HAS to read why.
- **"open the vault"** — metaphor used once, here, where it fits (business decision = opening the vault)
- **"Once we hit our target — or March 22 passes"** — dual deadline. Either volume fills or time runs out. Both feel real.
- **"No extensions. No 'one more day.'"** — pre-handles skepticism ("every sale says this then extends")
- **S3b THE LIST** — kept similar structure to BLS/Skullette because this pattern converts. "PRIVATE. Invite-only." is proven copy. No need to reinvent what works here — the mechanism IS the same.
- **"Drop your info below or miss it."** — direct. No clever wordplay needed at this point.

---

## ═══ S4: SIGNUP FORM ═══

**HTML location:** Lines 931-981
**CRO job:** Capture lead. Reduce friction. SMS keyword as backup.

**Current issues:**

- Keyword shows "AFRO995" → phải là AFR995E hoặc AFR995F tùy traffic source
- "1-hour VIP early access" → sai context (không có VIP early access)

**Rewrite:**

```
h2: JOIN MARCH MADNESS

form-sub: March 20-22. Afroyla leathers from $9.95.
          Private sale. You in?

[First Name*]
[Email*]
[🇺🇸 +1] [Phone Number*]

BUTTON: PUT ME ON THE LIST →

social proof: [847] sisters already signed up!

sms-hint: 📱 Or text AFR995E to 94923
          to get on the list instantly

legal: [same as current]

countdown: MARCH MADNESS starts in [DD] [HH] [MM] [SS]
```

---

### Notes — S4

- **"PUT ME ON THE LIST →"** thay "SAVE MY SPOT" — callback trực tiếp lên S3b "THE LIST"
- **Form sub** ngắn gọn — 2 dòng, restate giá + private
- **SMS keyword** dùng AFR995E (Email traffic page) hoặc AFR995F (FB Ads page) — cần 2 versions cho 2 traffic sources
- **Bỏ "1-hour VIP early access"** — sai context
- **"get on the list instantly"** thay vì early access — đúng mechanic

---

## ═══ S5: BENEFITS GRID ═══

**HTML location:** Lines 986-1020
**CRO job:** Scannable benefits. Dành cho người lướt nhanh không đọc copy.

**Current (BLS clone):**

```
"Deals starting from 50% OFF" → sai
"Prices change in real-time" → sai
"We'll text you when to strike"
"72 hours only — Feb 9-11" → sai date
```

**Rewrite — 4 bullets:**

```
section-title: What You're Getting

⭐ Leathers from $9.95
   Wallets, pouches, makeup bags from $9.95.
   Select bags at $14.95.

⭐ Sell out = gone
   Limited stock on everything.
   When an item sells out, it's gone. No restocks.

⭐ We'll text you the link
   Sale goes live, you'll know.
   New drops and restocks — straight to your phone.

⭐ 72 hours only
   March 20-22. When it's over, it's OVER.
```

---

### Notes — S5

- **"What You're Getting"** thay "The Exclusivity" — thẳng thắn hơn, CRO-friendly
- **"Sell out = gone"** — ELIMINATED language từ brief, nhưng dùng ngôn ngữ đơn giản hơn cho landing page
- **"No restocks"** — tăng urgency thật (note: nếu thực tế có restock drops, đổi thành "Restocks are random and limited")
- **"We'll text you the link"** — reason to give phone number. Benefit-driven.
- **Fixed dates** — March 20-22

---

## ═══ S6: REVIEWS ═══

**HTML location:** Lines 1025-1065
**CRO job:** Social proof. Overcome "is this legit?" objection.

**Current reviews — giữ nguyên, cả 3 đều tốt:**

```
section-title: Don't just take our word for it

Review 1:
"I love purses and have a huge collection of other folks purses.
Once I discovered Afroyla I haven't worn any of my other ones!!
If you want high quality leather bags at reasonable prices,
check out Afroyla!!"
— Jasmine T. ⭐⭐⭐⭐⭐

Review 2:
"This is my second purse from Afroyla. Love it just as much
as the first. Delivery time wasn't long at all. Customer service
really enjoys their part of the process."
— Nicole M. ⭐⭐⭐⭐⭐

Review 3:
"My tote bag is beautiful! The matching wallet is just as
beautiful. I'm so glad I decided to order. The material feels
great, tote is spacious and appears sturdy. Shipping was quick."
— Keisha R. ⭐⭐⭐⭐⭐
```

> Reviews giữ nguyên. Nếu có review nào mention wallets/small goods specifically thì swap in sẽ tốt hơn cho March Madness context.

---

## ═══ S7: FINAL CTA ═══

**HTML location:** Lines 1070-1087
**CRO job:** Last chance to convert. Short, direct, emotional.

**Current (BLS clone):**

```
"This is a 3-day treasure hunt."
"Prices move. Stock moves."
"You've got multiple shots to win."
"But only if you're on the list."
CTA: COUNT ME IN →
```

**Rewrite:**

```
headline: $9.95 Afroyla Leathers.

body: We made these bags for queens who refuse to blend in.

body: For 72 hours, we're making them stupid affordable.

body (gold): This is the one you tell your girls about.

CTA: PUT ME ON THE LIST →

countdown: MARCH MADNESS starts in [DD] [HH] [MM] [SS]
```

---

### Notes — S7

- **Skullette closing pattern** adapted — "I made these bags for witches who refuse to blend in" → "queens who refuse to blend in"
- **"stupid affordable"** — casual, Michelle voice, not corporate
- **"This is the one you tell your girls about."** — social proof trigger, makes them imagine sharing. Gold text for emphasis.
- **"PUT ME ON THE LIST →"** — same CTA as form, consistent
- **Headline repeats price** — reinforces value for skimmers who scrolled past everything
- **Countdown** — same timer as form section
