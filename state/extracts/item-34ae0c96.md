# 🍜 拉麵職人 - 專案架構文檔

> 一個結合 AI 智能推薦的現代化拉麵店點餐系統

---

## 📁 專案結構

```
resturant-pi/
├── 📂 backend/                 # Express.js 後端 API
│   ├── src/
│   │   ├── config/            # 設定檔
│   │   │   ├── database.js    # MySQL 連線設定
│   │   │   ├── llm.js         # Kimi AI 設定
│   │   │   └── openai.js      # OpenAI 設定（備用）
│   │   ├── controllers/       # API 控制器
│   │   │   ├── aiController.js
│   │   │   ├── menuController.js
│   │   │   ├── orderController.js
│   │   │   └── toppingController.js
│   │   ├── routes/            # API 路由
│   │   │   ├── ai.js          # /api/ai/* 智能推薦
│   │   │   ├── llm.js         # /api/llm/* LLM 通用接口
│   │   │   ├── menus.js       # /api/menus/* 菜單
│   │   │   ├── orders.js      # /api/orders/* 訂單
│   │   │   └── toppings.js    # /api/toppings/* 配料
│   │   ├── services/          # 業務邏輯層
│   │   │   ├── aiService.js   # AI 推薦服務
│   │   │   ├── llmService.js  # Kimi LLM 服務
│   │   │   ├── menuService.js # 菜單服務
│   │   │   ├── orderService.js# 訂單服務
│   │   │   └── toppingService.js
│   │   └── index.js           # 應用入口
│   ├── scripts/
│   │   ├── init-db.js         # 資料庫初始化
│   │   └── seed-db.js         # 資料種子
│   ├── .env                   # 環境變數（不提交 git）
│   └── package.json
│
├── 📂 frontend/               # Vue.js 3 前端
│   ├── src/
│   │   ├── components/        # Vue 元件
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   ├── CartBadge.vue
│   │   │   ├── CategoryTabs.vue
│   │   │   └── MenuCard.vue
│   │   ├── views/             # 頁面視圖
│   │   │   ├── Home.vue
│   │   │   ├── Menu.vue
│   │   │   ├── MenuDetail.vue
│   │   │   ├── Cart.vue
│   │   │   ├── OrderStatus.vue
│   │   │   └── AIRecommend.vue    # 🤖 AI 推薦頁面
│   │   ├── stores/            # Pinia 狀態管理
│   │   │   ├── cart.js
│   │   │   ├── menu.js
│   │   │   └── order.js
│   │   ├── services/          # API 服務
│   │   │   └── api.js         # axios 封裝
│   │   ├── router/            # Vue Router
│   │   ├── assets/            # 靜態資源
│   │   ├── App.vue
│   │   └── main.js
│   └── package.json
│
├── 📄 package.json            # Root workspace 配置
├── 📄 README.md               # 專案簡介
├── 📄 MYSQL_setup.md          # 資料庫設定說明
└── 📄 PROJECT.md              # 本文件
```

---

## 🧠 LLM/AI 處理流程

### 系統流程圖

```
┌─────────────────┐     HTTP Request      ┌──────────────────┐
│   Frontend      │ ───────────────────▶  │   Backend API    │
│   AIRecommend   │  POST /api/ai/recommend │   Express.js     │
│   .vue          │                       │                  │
└─────────────────┘                       └────────┬─────────┘
                                                   │
                      ┌────────────────────────────┼──────────┐
                      │                            │          │
                      ▼                            ▼          ▼
              ┌──────────────┐            ┌──────────────┐  ┌──────────────┐
              │  aiService   │            │ llmService   │  │ menuService  │
              │  (舊版)      │            │ (現役-Kimi)  │  │ (資料查詢)   │
              └──────────────┘            └──────┬───────┘  └──────────────┘
                                                 │
                                                 ▼
                                        ┌─────────────────┐
                                        │  Kimi API       │
                                        │  Moonshot AI    │
                                        │  api.moonshot.cn│
                                        └─────────────────┘
```

### API 端點說明

| 端點 | 方法 | 說明 | 對應 Service |
|------|------|------|-------------|
| `/api/ai/recommend` | POST | AI 拉麵推薦 | `llmService.simpleChat()` |
| `/api/ai/chat` | POST | AI 對話助手 | `llmService.simpleChat()` |
| `/api/llm/chat` | POST | 標準 LLM 對話 | `llmService.chatCompletion()` |
| `/api/llm/stream` | POST | 流式 SSE 輸出 | `llmService.streamChat()` |
| `/api/llm/simple-chat` | POST | 簡易單輪對話 | `llmService.simpleChat()` |
| `/api/llm/models` | GET | 取得可用模型 | `llmService.getAvailableModels()` |

### LLM Service 核心方法

```javascript
// llmService.js

// 1. 標準對話（支援多輪）
chatCompletion(messages, options)

// 2. 簡易單輪對話（最常用）
simpleChat(prompt, { systemPrompt, model, temperature })

// 3. 流式輸出（打字機效果）
streamChat(messages, options)  // 回傳 AsyncGenerator

// 4. 取得模型列表
getAvailableModels()
```

### AI 推薦流程詳解

```javascript
// Step 1: 使用者選擇偏好
const preferences = {
  taste: ['rich', 'salty'],      // 口味偏好
  spicy: 1,                      // 辣度等級
  dietary: ['no-pork'],          // 飲食限制
  notes: '今天想吃得清爽一點'     // 其他需求
}

// Step 2: 前端發送請求
aiApi.recommend(preferences)  // POST /api/ai/recommend

// Step 3: 後端組合 Prompt
const prompt = `
請根據以下偏好推薦拉麵：${preferences}
預算：不限
請簡短推薦 1-2 款適合的拉麵。
`

// Step 4: 呼叫 Kimi API
const response = await fetch('https://api.moonshot.cn/v1/chat/completions', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer {MOONSHOT_API_KEY}' },
  body: JSON.stringify({
    model: 'kimi-k2-0711-preview',
    messages: [
      { role: 'system', content: '你是一個拉麵店推薦助手...' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 2048
  })
})

// Step 5: 回傳推薦結果
{
  success: true,
  recommendations: "根據您的偏好，推薦您嘗試我們的特製豚骨拉麵..."
}
```

---

## 🛠️ 技術棧

### 後端 (Backend)
| 技術 | 版本 | 用途 |
|------|------|------|
| Node.js | 18+ | Runtime |
| Express.js | 4.18.2 | Web 框架 |
| MySQL2 | 3.6.5 | 資料庫驅動 |
| cors | 2.8.5 | 跨域處理 |
| helmet | 7.1.0 | 安全標頭 |
| morgan | 1.10.0 | HTTP 日誌 |
| dotenv | 16.3.1 | 環境變數 |

### 前端 (Frontend)
| 技術 | 版本 | 用途 |
|------|------|------|
| Vue.js | 3.4.15 | 前端框架 |
| Vue Router | 4.2.5 | 路由管理 |
| Pinia | 2.1.7 | 狀態管理 |
| Vite | 5.0.11 | 建構工具 |
| Tailwind CSS | 3.4.1 | CSS 框架 |
| Axios | 1.6.5 | HTTP 客戶端 |

### AI/LLM
| 技術 | 用途 |
|------|------|
| Moonshot Kimi | 主要 LLM 提供商 |
| OpenAI API | 備用 AI 服務 |

---

## ⚙️ 環境變數設定

### Backend `.env`
```bash
# 資料庫設定
DB_HOST=localhost
DB_USER=ramen_user
DB_PASSWORD=your_password
DB_NAME=ramen_shop
DB_PORT=3306

# LLM API 設定
MOONSHOT_API_KEY=sk-your-moonshot-api-key
# OPENAI_API_KEY=sk-your-openai-key  # 備用

# 伺服器設定
PORT=3001
NODE_ENV=development
```

### Frontend `.env`
```bash
VITE_API_URL=http://localhost:3001/api
```

---

## 🚀 快速啟動

### 1. 安裝依賴
```bash
npm install
```

### 2. 設定環境變數
```bash
cp backend/.env.example backend/.env
# 編輯 backend/.env 填入資料庫和 API 金鑰
```

### 3. 初始化資料庫
```bash
cd backend
npm run setup-db    # 初始化 + 種子資料
```

### 4. 啟動開發伺服器
```bash
# 同時啟動前後端
npm run dev

# 前端: http://localhost:5173
# 後端: http://localhost:3001
```

---

## 📊 資料庫結構

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    categories   │     │     menus       │     │    toppings     │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ id (PK)         │◀────│ category_id     │     │ id (PK)         │
│ name            │     │ id (PK)         │     │ name            │
│ name_en         │     │ name            │     │ name_en         │
└─────────────────┘     │ description     │     │ price           │
                        │ price           │     └─────────────────┘
                        │ image           │
                        └─────────────────┘

┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  customizations │     │  order_items    │     │     orders      │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ id (PK)         │     │ id (PK)         │     │ id (PK)         │
│ menu_id (FK)    │────▶│ order_id (FK)   │◀────│ order_number    │
│ name            │     │ menu_id (FK)    │     │ customer_name   │
│ options (JSON)  │     │ quantity        │     │ status          │
└─────────────────┘     │ selected_options│     │ total_amount    │
                        │ toppings (JSON) │     │ created_at      │
                        └─────────────────┘     └─────────────────┘
```

---

## 🎨 設計規範

### 配色方案
| 用途 | 色碼 | 說明 |
|------|------|------|
| 主色 | `#1a1a1a` | 深炭灰背景 |
| 輔色 | `#8B4513` | 暖木色 |
| 強調 | `#DC2626` | 鮮紅色 |
| 中性 | `#F5F5DC` | 米白色文字 |

### 頁面路由
| 路由 | 頁面 | 說明 |
|------|------|------|
| `/` | Home | 首頁/熱門推薦 |
| `/menu` | Menu | 菜單瀏覽 |
| `/menu/:id` | MenuDetail | 商品詳情 |
| `/cart` | Cart | 購物車 |
| `/order/:id` | OrderStatus | 訂單狀態 |
| `/ai-recommend` | AIRecommend | 🤖 AI 推薦 |

---

## 📝 開發指令

```bash
# Root
npm run dev          # 同時啟動前後端
npm run build        # 建構前端
npm run start        # 啟動生產環境後端

# Backend
cd backend
npm run dev          # 開發模式 (nodemon)
npm run start        # 生產模式
npm run setup-db     # 初始化資料庫

# Frontend
cd frontend
npm run dev          # 開發伺服器
npm run build        # 生產建構
npm run preview      # 預覽建構結果
```

---

## 🔗 相關文件

- [README.md](./README.md) - 專案簡介
- [MYSQL_setup.md](./MYSQL_setup.md) - 資料庫安裝教學
- [backend/.env.example](./backend/.env.example) - 後端環境變數範本
- [frontend/.env.example](./frontend/.env.example) - 前端環境變數範本

---

## 👨‍💻 開發團隊

使用 **Pi Coding Agent** 並行開發：
- **Backend Agent**: Express.js + MySQL 後端開發
- **Frontend Agent**: Vue.js + Tailwind CSS 前端開發

---

*最後更新: 2026-05-03*