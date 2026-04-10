# MCP Integration — Future Reference

> **Status:** CHƯA CẤU HÌNH
> Tất cả workflows hiện hoạt động không cần API. Content được copy/paste thủ công lên platforms.

---

## Planned Integrations

### 1. Klaviyo MCP
**Mục đích:** Tự động hóa email publishing + pull metrics
- **Push:** HTML email drafts trực tiếp lên Klaviyo như campaign drafts
- **Pull:** Campaign metrics (open rate, click rate, revenue, unsub) → auto-populate `performance-tracking.md`
- **Pull:** Subscriber segments cho targeting
- **Auto:** Weekly performance data vào report template

### 2. Shopify MCP
**Mục đích:** Check inventory + sales data
- **Pull:** Product inventory (bags in stock, prices, variants)
- **Pull:** Sales data cho revenue tracking
- **Check:** Products to push (low stock = urgency, new arrival = launch)
- **Create:** Discount codes, product bundles (cho sale campaigns)
- **Auto:** Products to push section trong monthly strategy

### 3. Postscript MCP
**Mục đích:** SMS publishing + metrics
- **Push:** SMS copy trực tiếp lên Postscript campaigns
- **Pull:** SMS metrics (delivery rate, click rate, revenue, cost per subscriber)
- **Pull:** Subscriber count cho ROI calculation
- **Auto:** SMS cost tracking vào performance-tracking.md

### 4. Web Search / Fetch
**Mục đích:** Idea research automation
- **Search:** Reddit, cultural calendar, news
- **Fetch:** TrustPilot reviews, Afroyla website reviews
- **Auto:** Seed Story Bank từ research results

---

## Configuration Needed (khi sẵn sàng)

### API Keys
```
# Lưu trong .env (KHÔNG commit vào git)
KLAVIYO_API_KEY=...
SHOPIFY_API_KEY=...
SHOPIFY_STORE_URL=...
POSTSCRIPT_API_KEY=...
```

### Claude Code MCP Config
```json
// Trong Claude Code settings
{
  "mcpServers": {
    "klaviyo": {
      "command": "...",
      "args": ["..."],
      "env": { "KLAVIYO_API_KEY": "..." }
    },
    "shopify": {
      "command": "...",
      "args": ["..."]
    },
    "postscript": {
      "command": "...",
      "args": ["..."]
    }
  }
}
```

### Permission Scopes
- **Klaviyo:** Read campaigns, read metrics, create drafts (NOT send)
- **Shopify:** Read products, read orders, create discounts
- **Postscript:** Read subscribers, read metrics, create campaigns (NOT send)

> **Nguyên tắc:** Chỉ auto-create DRAFTS. User luôn approve trước khi send.

---

## Workflow Changes When MCP Is Ready

| Workflow | Current (Manual) | With MCP |
|----------|-----------------|----------|
| `/monthly-strategy` | User nhập revenue data | Auto-pull từ Shopify |
| `performance-tracking.md` | User copy từ dashboard | Auto-populate weekly |
| `monthly-insights.md` | Manual metric summary | Auto-generated |
| `/daily-brief` | User check product stock | Auto-check inventory |
| `/write-email` Phase 6 | Copy HTML, paste Klaviyo | Auto-push draft to Klaviyo |
| `/write-sms` | Copy text, paste Postscript | Auto-push to Postscript |
| `/idea-research` | Manual web browse | Auto-fetch reviews + Reddit |

---

## Setup Steps (khi có API keys)

1. Tạo file `.env` trong workspace root
2. Cài MCP servers (Klaviyo, Shopify, Postscript)
3. Configure Claude Code settings
4. Test từng integration riêng lẻ
5. Update workflows để sử dụng MCP tools
6. Run end-to-end test: `/monthly-strategy` → `/weekly-plan` → `/daily-brief` → `/write-email` → auto-push
