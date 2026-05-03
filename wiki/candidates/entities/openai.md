---
page_id: 'entity:openai'
kind: entity
cssclasses:
  - swarmvault
  - sv-entity
title: OpenAI
source_class: first_party
tags:
  - entity
  - candidate
source_ids:
  - item-34ae0c96
  - moonshot-kimi-api-openai-sdk-320b1dac
project_ids: []
node_ids:
  - 'entity:openai'
freshness: fresh
status: candidate
confidence: 0.8
created_at: '2026-05-03T15:03:00.379Z'
updated_at: '2026-05-03T15:08:41.365Z'
compiled_from:
  - item-34ae0c96
  - moonshot-kimi-api-openai-sdk-320b1dac
managed_by: system
backlinks:
  - 'source:item-34ae0c96'
  - 'source:moonshot-kimi-api-openai-sdk-320b1dac'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  item-34ae0c96: 34ae0c96244dbe1109f2041bc2659f6af9ce739aeebec82e1c4539403ce40c10
  moonshot-kimi-api-openai-sdk-320b1dac: 320b1dac676ffc6f03bb4ad31d2ec3a816553c290a95f8cbdaa6cbb374757be8
source_semantic_hashes:
  item-34ae0c96: 50215c72c47ebc689db237949ff09e1ae332b3cf0287e15bfb9698006326a922
  moonshot-kimi-api-openai-sdk-320b1dac: e2b95560fadf2dcbb25bcc8887b34765d5b635d136fdd752ffacbacd54cdd07c
---
# OpenAI

## Summary

Named entity mentioned in 🍜 拉麵職人 - 專案架構文檔.

## Seen In

- [[sources/item-34ae0c96|🍜 拉麵職人 - 專案架構文檔]]
- [[sources/moonshot-kimi-api-openai-sdk-320b1dac|Moonshot Kimi API 配置指南 (OpenAI SDK)]]

## Source Claims

- 🍜 拉麵職人 - 專案架構文檔 > 一個結合 AI 智能推薦的現代化拉麵店點餐系統 --- ## 📁 專案結構 resturant-pi/ ├── 📂 backend/ # Express.js 後端 API │ ├── src/ │ │ ├── config/ # 設定檔 │ │ │ ├── database.js # MySQL 連線設定 │ │ │ ├── llm.js # Kimi AI 設定 │ │ │ └── openai.js # OpenAI 設定（備用） │ │ ├── controllers/ # API 控制器 │ │ │ ├── aiController.js │ │ │ ├── menuController.js │ │ │ ├── orderController.js │ │ │ └── toppingController.js │ │ ├── routes/ # API 路由 │ │ │ ├── ai.js # /api/ai/* 智能推薦 │ │ │ ├── llm.js # /api/llm/* LLM 通用接口 │ │ │ ├── menus.js # /api/menus/* 菜單 │ │ │ ├── orders.js # /api/orders/* 訂單 │ │ │ └── toppings.js # /api/toppings/* 配料 │ │ ├── services/ # 業務邏輯層 │ │ │ ├── aiService.js # AI 推薦服務 │ │ │ ├── llmService.js # Kimi LLM 服務 │ │ │ ├── menuService.js # 菜單服務 │ │ │ ├── orderService.js# 訂單服務 │ │ │ └── toppingService.js │ │ └── index.js # 應用入口 │ ├── scripts/ │ │ ├── init-db.js # 資料庫初始化 │ │ └── seed-db.js # 資料種子 │ ├── .env # 環境變數（不提交 git） │ └── package.json │ ├── 📂 frontend/ # Vue.js 3 前端 │ ├── src/ │ │ ├── components/ # Vue 元件 │ │ │ ├── AppHeader.vue │ │ │ ├── AppFooter.vue │ │ │ ├── CartBadge.vue │ │ │ ├── CategoryTabs.vue │ │ │ └── MenuCard.vue │ │ ├── views/ # 頁面視圖 │ │ │ ├── Home.vue │ │ │ ├── Menu.vue │ │ │ ├── MenuDetail.vue │ │ │ ├── Cart.vue │ │ │ ├── OrderStatus.vue │ │ │ └── AIRecommend.vue # 🤖 AI 推薦頁面 │ │ ├── stores/ # Pinia 狀態管理 │ │ │ ├── cart.js │ │ │ ├── menu.js │ │ │ └── order.js │ │ ├── services/ # API 服務 │ │ │ └── api.js # axios 封裝 │ │ ├── router/ # Vue Router │ │ ├── assets/ # 靜態資源 │ │ ├── App.vue │ │ └── main.js │ └── package.json │ ├── 📄 package.json # Root workspace 配置 ├── 📄 README.md # 專案簡介 ├── 📄 MYSQL_setup.md # 資料庫設定說明 └── 📄 PROJECT.md # 本文件 --- ## 🧠 LLM/AI 處理流程 ### 系統流程圖 ┌─────────────────┐ HTTP Request ┌──────────────────┐ │ Frontend │ ───────────────────▶ │ Backend API │ │ AIRecommend │ POST /api/ai/recommend │ Express.js │ │ .vue │ │ │ └─────────────────┘ └────────┬─────────┘ │ ┌────────────────────────────┼──────────┐ │ │ │ ▼ ▼ ▼ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │ aiService │ │ llmService │ │ menuService │ │ (舊版) │ │ (現役-Kimi) │ │ (資料查詢) │ └──────────────┘ └──────┬───────┘ └──────────────┘ │ ▼ ┌─────────────────┐ │ Kimi API │ │ Moonshot AI │ │ api.moonshot.cn│ └─────────────────┘ ### API 端點說明 | 端點 | 方法 | 說明 | 對應 Service | |------|------|------|-------------| | /api/ai/recommend | POST | AI 拉麵推薦 | llmService.simpleChat() | | /api/ai/chat | POST | AI 對話助手 | llmService.simpleChat() | | /api/llm/chat | POST | 標準 LLM 對話 | llmService.chatCompletion() | | /api/llm/stream | POST | 流式 SSE 輸出 | llmService.streamChat() | | /api/llm/simple-chat | POST | 簡易單輪對話 | llmService.simpleChat() | | /api/llm/models | GET | 取得可用模型 | llmService.getAvailableModels() | ### LLM Service 核心方法 javascript // llmService.js // 1. [source:item-34ae0c96]
- Moonshot Kimi API 配置指南 (OpenAI SDK) ## 概述 本專案使用 Moonshot AI 的 Kimi API 作為 AI 服務提供商。 重要 : 我們使用官方的 openai@latest SDK 來調用 Kimi API，因為 Kimi API 與 OpenAI API 完全兼容。 ## 安裝 bash cd backend npm install openai@latest ## 獲取 API Key 1. [source:moonshot-kimi-api-openai-sdk-320b1dac]

