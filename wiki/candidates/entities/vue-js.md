---
page_id: 'entity:vue-js'
kind: entity
cssclasses:
  - swarmvault
  - sv-entity
title: Vue.js
source_class: first_party
tags:
  - entity
  - candidate
source_ids:
  - item-34ae0c96
  - package-300fd810
  - ramen-shop-ordering-system-e4bd11fe
project_ids: []
node_ids:
  - 'entity:vue-js'
freshness: fresh
status: candidate
confidence: 0.95
created_at: '2026-05-03T15:03:00.384Z'
updated_at: '2026-05-03T15:08:41.375Z'
compiled_from:
  - item-34ae0c96
  - package-300fd810
  - ramen-shop-ordering-system-e4bd11fe
managed_by: system
backlinks:
  - 'source:item-34ae0c96'
  - 'source:package-300fd810'
  - 'source:ramen-shop-ordering-system-e4bd11fe'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  item-34ae0c96: 34ae0c96244dbe1109f2041bc2659f6af9ce739aeebec82e1c4539403ce40c10
  package-300fd810: 300fd81090349aa658d920eed7e441a634fc16d281fd4da3c0c7300e21f41813
  ramen-shop-ordering-system-e4bd11fe: e4bd11feda1a3bcee2db77b323216d42b2e997ef1fbc5e064f95f8bea0be5bf1
source_semantic_hashes:
  item-34ae0c96: 50215c72c47ebc689db237949ff09e1ae332b3cf0287e15bfb9698006326a922
  package-300fd810: 300fd81090349aa658d920eed7e441a634fc16d281fd4da3c0c7300e21f41813
  ramen-shop-ordering-system-e4bd11fe: 4479eeaa46895cd8c4c09faf9497b6524d94bb45363ba994705f0054cf01ea44
---
# Vue.js

## Summary

Named entity mentioned in 🍜 拉麵職人 - 專案架構文檔.

## Seen In

- [[sources/item-34ae0c96|🍜 拉麵職人 - 專案架構文檔]]
- [[sources/package-300fd810|package]]
- [[sources/ramen-shop-ordering-system-e4bd11fe|拉麵職人 - Ramen Shop Ordering System]]

## Source Claims

- 🍜 拉麵職人 - 專案架構文檔 > 一個結合 AI 智能推薦的現代化拉麵店點餐系統 --- ## 📁 專案結構 resturant-pi/ ├── 📂 backend/ # Express.js 後端 API │ ├── src/ │ │ ├── config/ # 設定檔 │ │ │ ├── database.js # MySQL 連線設定 │ │ │ ├── llm.js # Kimi AI 設定 │ │ │ └── openai.js # OpenAI 設定（備用） │ │ ├── controllers/ # API 控制器 │ │ │ ├── aiController.js │ │ │ ├── menuController.js │ │ │ ├── orderController.js │ │ │ └── toppingController.js │ │ ├── routes/ # API 路由 │ │ │ ├── ai.js # /api/ai/* 智能推薦 │ │ │ ├── llm.js # /api/llm/* LLM 通用接口 │ │ │ ├── menus.js # /api/menus/* 菜單 │ │ │ ├── orders.js # /api/orders/* 訂單 │ │ │ └── toppings.js # /api/toppings/* 配料 │ │ ├── services/ # 業務邏輯層 │ │ │ ├── aiService.js # AI 推薦服務 │ │ │ ├── llmService.js # Kimi LLM 服務 │ │ │ ├── menuService.js # 菜單服務 │ │ │ ├── orderService.js# 訂單服務 │ │ │ └── toppingService.js │ │ └── index.js # 應用入口 │ ├── scripts/ │ │ ├── init-db.js # 資料庫初始化 │ │ └── seed-db.js # 資料種子 │ ├── .env # 環境變數（不提交 git） │ └── package.json │ ├── 📂 frontend/ # Vue.js 3 前端 │ ├── src/ │ │ ├── components/ # Vue 元件 │ │ │ ├── AppHeader.vue │ │ │ ├── AppFooter.vue │ │ │ ├── CartBadge.vue │ │ │ ├── CategoryTabs.vue │ │ │ └── MenuCard.vue │ │ ├── views/ # 頁面視圖 │ │ │ ├── Home.vue │ │ │ ├── Menu.vue │ │ │ ├── MenuDetail.vue │ │ │ ├── Cart.vue │ │ │ ├── OrderStatus.vue │ │ │ └── AIRecommend.vue # 🤖 AI 推薦頁面 │ │ ├── stores/ # Pinia 狀態管理 │ │ │ ├── cart.js │ │ │ ├── menu.js │ │ │ └── order.js │ │ ├── services/ # API 服務 │ │ │ └── api.js # axios 封裝 │ │ ├── router/ # Vue Router │ │ ├── assets/ # 靜態資源 │ │ ├── App.vue │ │ └── main.js │ └── package.json │ ├── 📄 package.json # Root workspace 配置 ├── 📄 README.md # 專案簡介 ├── 📄 MYSQL_setup.md # 資料庫設定說明 └── 📄 PROJECT.md # 本文件 --- ## 🧠 LLM/AI 處理流程 ### 系統流程圖 ┌─────────────────┐ HTTP Request ┌──────────────────┐ │ Frontend │ ───────────────────▶ │ Backend API │ │ AIRecommend │ POST /api/ai/recommend │ Express.js │ │ .vue │ │ │ └─────────────────┘ └────────┬─────────┘ │ ┌────────────────────────────┼──────────┐ │ │ │ ▼ ▼ ▼ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │ aiService │ │ llmService │ │ menuService │ │ (舊版) │ │ (現役-Kimi) │ │ (資料查詢) │ └──────────────┘ └──────┬───────┘ └──────────────┘ │ ▼ ┌─────────────────┐ │ Kimi API │ │ Moonshot AI │ │ api.moonshot.cn│ └─────────────────┘ ### API 端點說明 | 端點 | 方法 | 說明 | 對應 Service | |------|------|------|-------------| | /api/ai/recommend | POST | AI 拉麵推薦 | llmService.simpleChat() | | /api/ai/chat | POST | AI 對話助手 | llmService.simpleChat() | | /api/llm/chat | POST | 標準 LLM 對話 | llmService.chatCompletion() | | /api/llm/stream | POST | 流式 SSE 輸出 | llmService.streamChat() | | /api/llm/simple-chat | POST | 簡易單輪對話 | llmService.simpleChat() | | /api/llm/models | GET | 取得可用模型 | llmService.getAvailableModels() | ### LLM Service 核心方法 javascript // llmService.js // 1. [source:item-34ae0c96]
- { "name": "ramen-shop-frontend", "version": "1.0.0", "description": "拉麵店前端 - Vue.js 3", "type": "module", "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview" }, "dependencies": { "vue": "^3.4.15", "vue-router": "^4.2.5", "pinia": "^2.1.7", "axios": "^1.6.5" }, "devDependencies": { "@vitejs/plugin-vue": "^5.0.3", "vite": "^5.0.11", "tailwindcss": "^3.4.1", "postcss": "^8.4.33", "autoprefixer": "^10.4.17", "@tailwindcss/forms": "^0.5.7" } } [source:package-300fd810]
- 拉麵職人 - Ramen Shop Ordering System 一個專業的拉麵店點餐系統，採用前後端分離架構。 ## 系統架構 ramen-shop/ ├── backend/ # Express.js + MySQL 後端 ├── frontend/ # Vue.js 3 + Tailwind CSS 前端 └── .pi/ # Agent 設定（本地運行時使用，不提交到 git） ## 技術棧 ### 後端 - Runtime : Node.js 18+ - Framework : Express.js 4.x - Database : MySQL 8.0 - AI : Moonshot Kimi API (kimi-k2.6) ### 前端 - Framework : Vue.js 3 (Composition API) - Build : Vite 5.x - State : Pinia - Styling : Tailwind CSS 3.x ## 功能特色 - 🍜 完整菜單瀏覽與分類 - 🛒 流暢的購物車與點餐流程 - ⚙️ 拉麵客製化選項（湯頭、麵條、配料等） - 🤖 AI 智能推薦與諮詢 - 📱 響應式設計，支援手機點餐 - 🔍 訂單狀態即時追蹤 ## 快速開始 ### 1. [source:ramen-shop-ordering-system-e4bd11fe]

