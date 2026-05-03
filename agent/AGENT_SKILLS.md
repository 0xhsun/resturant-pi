# Agent Skills Design
> 拉麵職人餐廳系統 — 雙 Agent 技能架構設計文件

---

## 架構總覽

```
AgentFactory
├── CustomerAgent   — 面向客戶，處理點餐與推薦
└── MerchantAgent   — 面向商家，處理營運與分析
```

每個 Agent 由三層組成：

| 層次 | 作用 |
|------|------|
| System Prompt | 定義 Agent 身份與行為邊界 |
| Skills | 可插拔的執行能力模組 |
| Registry | 控制哪個 Agent 能掛載哪些 Skill |

---

## Customer Agent

### 身份定義（System Prompt 方向）
- 角色：友善的拉麵服務員
- 語氣：親切、簡潔、引導性
- 權限：只能存取公開菜單與自己的訂單資料
- 禁止：不得存取銷售統計、其他客戶資料

### Skills

#### `recommend`
- **觸發條件**：「推薦」、「想吃」、「不知道點什麼」、「你覺得呢」
- **執行動作**：呼叫 `menuService.getRecommendations(preferences)`
- **輸入**：用戶偏好（口味、辣度、預算）
- **輸出**：3~5 個推薦品項 + 簡短理由

#### `allergen-check`
- **觸發條件**：「過敏」、「素食」、「不吃 X」、「含不含 X」
- **執行動作**：呼叫 `menuService.filterByDiet(restrictions)`
- **輸入**：飲食限制清單
- **輸出**：符合條件的菜單列表

#### `menu-search`
- **觸發條件**：詢問特定品項、價格、食材
- **執行動作**：呼叫 `menuService.search(query)`
- **輸入**：關鍵字或條件
- **輸出**：匹配的菜單項目與詳細資訊

#### `order-status`
- **觸發條件**：「我的訂單」、「好了嗎」、「進度」
- **執行動作**：呼叫 `orderService.getStatus(orderId)`
- **輸入**：訂單編號（從 session 取得）
- **輸出**：目前狀態 + 預估等待時間

---

## Merchant Agent

### 身份定義（System Prompt 方向）
- 角色：數據分析助理
- 語氣：專業、數據導向、條列清晰
- 權限：可存取所有訂單、銷售、庫存資料
- 禁止：不得對外暴露客戶個資

### Skills

#### `daily-report`
- **觸發條件**：cron 每日 23:00 自動 / 或「今日報表」、「今天業績」
- **執行動作**：呼叫 `analyticsService.dailySummary(date)`
- **輸入**：日期
- **輸出**：營業額、訂單數、熱門品項、平均客單價

#### `trend-analysis`
- **觸發條件**：「熱門」、「賣最好」、「本週」、「本月趨勢」
- **執行動作**：呼叫 `analyticsService.getTrends(range)`
- **輸入**：時間範圍（week / month）
- **輸出**：排行榜 + 趨勢圖數據

#### `inventory-alert`
- **觸發條件**：主動偵測（proactive cron）/ 或「庫存」、「快沒了嗎」
- **執行動作**：呼叫 `inventoryService.checkLowStock(threshold)`
- **輸入**：警戒門檻
- **輸出**：低庫存品項清單 + 建議補貨量

#### `export-data`
- **觸發條件**：「匯出」、「下載報表」、「CSV」
- **執行動作**：呼叫 `exportService.generate(format, range)`
- **輸入**：格式（CSV/PDF）、時間範圍
- **輸出**：檔案下載連結

---

## Skill Registry（技能註冊表）

```
registry.js

{
  customer: ["recommend", "allergen-check", "menu-search", "order-status"],
  merchant: ["daily-report", "trend-analysis", "inventory-alert", "export-data"]
}
```

**LLM 只看到被授權的 Skill 清單（tools[] 參數），無法跨越邊界呼叫對方的 Skill。**

---

## 目錄結構（待實作）

```
backend/src/agents/
├── customer/
│   ├── agent.js              ← buildCustomerAgent()
│   └── skills/
│       ├── recommend.js
│       ├── allergenCheck.js
│       ├── menuSearch.js
│       └── orderStatus.js
│
├── merchant/
│   ├── agent.js              ← buildMerchantAgent()
│   └── skills/
│       ├── dailyReport.js
│       ├── trendAnalysis.js
│       ├── inventoryAlert.js
│       └── exportData.js
│
└── registry.js               ← Skill 掛載與權限控制
```

---

## 運行模式

| Agent | 模式 | 說明 |
|-------|------|------|
| Customer Agent | Reactive | 有請求才執行，閒置休眠 |
| Merchant Agent | Proactive + Reactive | 定時自動執行（cron）＋接受主動查詢 |

---

## LLM 整合方式（基於現有 Kimi API）

現有 `llmService.js` 作為底層，兩個 Agent 共用同一個 API 連線，差異在於：

1. **`messages[0]`（system）** — 各自獨立的 System Prompt
2. **`tools[]`** — 只傳入該 Agent 被授權的 Skill 定義
3. **路由層** — `/api/ai/customer/*` vs `/api/ai/merchant/*`

---

*設計時間：2026-05-03*
*狀態：理論設計，待實作*
