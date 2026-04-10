# SMS | IC-CONFIRM-EXPIRED — Welcome Inner Circle (Chưa Có Deal Mới)

**Type:** Postscript Auto-Reply — khi khách reply keyword nhưng deal cũ hết, deal mới chưa có
**Segment:** Anyone who texts keyword trong khoảng "gap" giữa 2 deals
**Goal:** Confirm entry IC + giữ hứng thú + promise deal sắp tới
**Tone:** Michelle chào đón — thừa nhận deal vừa hết, tạo anticipation cho deal kế tiếp

> [!IMPORTANT]
> Khách reply muộn = vẫn interested. KHÔNG để nguội.
> KHÔNG CÓ link deal. Chỉ welcome + set expectation "deal sẽ đến sớm."

---

## V1 — "you just missed it but you're right on time"

> Afroyla: {{ first_name|default:'Sis' }} you're in the Inner Circle now 💜
>
> ok so that deal already ended (I told them it was limited and I meant it 😂)
>
> but good news — you're in now. so the NEXT deal that drops? it's coming straight to your phone. no chasing, no searching. just a text from me with a link
>
> sit tight sis. it's coming soon
>
> — Michelle 💜

---

## V2 — "the one that got away"

> Afroyla: {{ first_name|default:'hey' }} welcome to the Inner Circle 🖤
>
> that deal you saw? it already ended... but honestly that just means your first surprise is about to hit even harder
>
> Inner Circle = I text you a secret Afroyla deal every day. 30-50% off. members only. you're a member now
>
> keep your phone close. next one is coming
>
> — Michelle 😏

---

## V3 — "George got there first"

> Afroyla: {{ first_name|default:'girl' }} you're officially Inner Circle now
>
> bad news: that deal is gone. George got to it first. that man is fast 😂
>
> good news: there's a new deal coming soon and this time YOU'LL be first in line to see it. that's how the Inner Circle works — surprise deal, straight to your phone, members only
>
> welcome sis. watch your texts 💜
>
> — Michelle

---

## V4 — ultra-short

> Afroyla: {{ first_name|default:'Sis' }} you're in the Inner Circle now 💜 that deal already ended but your first surprise is loading... I'll text you as soon as the next one drops. welcome sis — Michelle

---

## Notes

### Khi nào dùng:
- Deal cũ đã expired
- Deal mới **chưa có** hoặc chưa được setup
- Keyword vẫn để active (chưa disable) → khách vẫn reply được

### Khác gì với file `ic_confirmation_welcome.md`:
| | `welcome` (deal active) | `deal_expired` (file này) |
|---|---|---|
| Có link deal? | ✅ Có | ❌ Không |
| Có giá deal? | ✅ Có (40% OFF...) | ❌ Không |
| Welcome IC? | ✅ | ✅ |
| Set expectation? | "tomorrow new deal" | "next deal coming soon" |

### Chọn version:
- **V1:** An toàn nhất. Thẳng thắn + friendly "sit tight sis"
- **V2:** Reframe — "your first surprise is about to hit even harder." Tạo anticipation
- **V3:** George blame — nhẹ nhàng hài hước
- **V4:** Ultra-short — dưới 160 chars
