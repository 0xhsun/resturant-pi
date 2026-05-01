# 拉麵職人 - Ramen Shop Ordering System

一個專業的拉麵店點餐系統，採用前後端分離架構。

## 系統架構

```
ramen-shop/
├── backend/           # Express.js + MySQL 後端
├── frontend/          # Vue.js 3 + Tailwind CSS 前端
└── .pi/              # Agent 設定（本地運行時使用，不提交到 git）
```

## 技術棧

### 後端
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.x
- **Database**: MySQL 8.0
- **AI**: OpenAI API

### 前端
- **Framework**: Vue.js 3 (Composition API)
- **Build**: Vite 5.x
- **State**: Pinia
- **Styling**: Tailwind CSS 3.x

## 功能特色

- 🍜 完整菜單瀏覽與分類
- 🛒 流暢的購物車與點餐流程
- ⚙️ 拉麵客製化選項（湯頭、麵條、配料等）
- 🤖 AI 智能推薦與諮詢
- 📱 響應式設計，支援手機點餐
- 🔍 訂單狀態即時追蹤

## 快速開始

### 1. 安裝依賴
```bash
npm install
```

### 2. 設定環境變數
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
# 編輯 .env 檔案填入正確的資料庫和 API 金鑰
```

### 3. 初始化資料庫
```bash
cd backend
npm run db:init
npm run db:seed
```

### 4. 啟動開發伺服器
```bash
# 同時啟動前後端
npm run dev

# 或分開啟動
npm run dev -w backend   # 後端 http://localhost:3001
npm run dev -w frontend  # 前端 http://localhost:5173
```

## API 文件

### 菜單 API
- `GET /api/menus` - 取得所有菜單
- `GET /api/menus/:id` - 取得單一菜色詳情
- `GET /api/menus/categories` - 取得所有分類

### 配料 API
- `GET /api/toppings` - 取得所有配料

### 客製化選項 API
- `GET /api/customizations` - 取得所有客製化選項

### 訂單 API
- `POST /api/orders` - 建立訂單
- `GET /api/orders/:id` - 查詢訂單詳情
- `GET /api/orders/:id/status` - 查詢訂單狀態

### AI 推薦 API
- `POST /api/ai/recommend` - 根據用戶偏好推薦拉麵

## 設計規範

### 配色
- 主色：深炭灰 `#1a1a1a`
- 輔色：暖木色 `#8B4513`
- 強調：鮮紅 `#DC2626`
- 中性：米白 `#F5F5DC`

### 風格
專業寫實風格，高品質實拍拉麵照片，深色背景，精緻的動效。

## 開發團隊

本專案使用 Pi Coding Agent 並行開發：
- **Backend Agent**: Express.js + MySQL 後端開發
- **Frontend Agent**: Vue.js 前端開發

## License

ISC