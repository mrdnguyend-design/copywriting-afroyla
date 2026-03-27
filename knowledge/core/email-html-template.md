# Email HTML Template — Afroyla Klaviyo

Dùng template này khi output email ở Phase 6 (FINALIZE) của workflow `/afroyla-copywriter`.

---

## Base Style

Tất cả text paragraphs dùng inline CSS:
```
font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400;
```

---

## Template Structure

```html
<!-- SUBJECT: [Subject Line Here] -->
<!-- PREVIEW: [Preview Text Here] -->

<p><span style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400;">[Opening line - The Hook]</span></p>

<p><span style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400;">[Story continues... Each paragraph is a separate <p> tag]</span></p>

<!-- DIALOGUE FORMAT -->
<p><span style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400;">"[Dialogue line]" [action beat].</span></p>

<!-- BOLD/EMPHASIS -->
<p><span style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400;"><strong>[Bold text for emphasis]</strong></span></p>

<!-- ITALIC/INNER THOUGHT -->
<p><span style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400;"><em>[Italic for inner thoughts or quotes]</em></span></p>

<!-- IMAGE EMBED -->
<p style="text-align: center;">
<img src="[IMAGE_URL]" alt="[Description]" style="max-width: 100%; height: auto; border: 1px solid #ddd;" />
</p>

<!-- IMAGE WITH CAPTION -->
<p style="text-align: center;">
<img src="[IMAGE_URL]" alt="[Description]" style="max-width: 100%; height: auto; border: 1px solid #ddd;" />
</p>
<p style="text-align: center;"><span style="font-size: 14px; font-family: Helvetica, Arial, sans-serif; color: #666;"><em>[Caption text]</em></span></p>

<!-- RECEIPT/PROOF FORMAT -->
<p><span style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400;"><strong>Receipt #XXXX-XXXX.</strong><br>
<strong>Amount: $X,XXX.</strong><br>
<strong>Date: [Date].</strong></span></p>

<!-- CTA BUTTON -->
<p style="text-align: center; padding: 20px 0;">
<a href="[LINK_URL]" style="background-color: #000000; color: #ffffff; padding: 14px 28px; text-decoration: none; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 600; border-radius: 4px; display: inline-block;">[CTA Text]</a>
</p>

<!-- SIGN OFF -->
<p><span style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400;">Love,<br>Michelle.</span></p>

<!-- P.S. -->
<p><span style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400;"><strong>P.S.</strong> [Witty closing or scarcity reminder]</span></p>

<!-- SURVEY/QUESTION SECTION (optional) -->
<p><span style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: 400;"><strong>[Survey question]</strong></span></p>
<p style="text-align: center; padding: 10px 0;">
<a href="[SURVEY_LINK_1]" style="background-color: #333333; color: #ffffff; padding: 10px 20px; text-decoration: none; font-family: Helvetica, Arial, sans-serif; font-size: 14px; border-radius: 4px; display: inline-block; margin: 4px;">[Option 1]</a>
<a href="[SURVEY_LINK_2]" style="background-color: #333333; color: #ffffff; padding: 10px 20px; text-decoration: none; font-family: Helvetica, Arial, sans-serif; font-size: 14px; border-radius: 4px; display: inline-block; margin: 4px;">[Option 2]</a>
</p>
```

---

## Rules

1. **Mỗi paragraph = 1 `<p>` tag** — không gộp nhiều ý vào 1 block
2. **Inline CSS only** — email clients không support `<style>` tags
3. **Image placeholders** — dùng `[IMAGE_URL]` để user thay thế sau
4. **No external fonts** — chỉ dùng Helvetica → Arial → sans-serif fallback
5. **CTA button** — dùng `<a>` tag styled as button, không dùng `<button>` (email clients không support)
6. **Test:** Copy output vào Klaviyo preview trước khi gửi
