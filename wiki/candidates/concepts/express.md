---
page_id: 'concept:express'
kind: concept
cssclasses:
  - swarmvault
  - sv-concept
title: express
source_class: first_party
tags:
  - concept
  - candidate
source_ids:
  - package-d79bf8d6
  - ramen-shop-ordering-system-e4bd11fe
project_ids: []
node_ids:
  - 'concept:express'
freshness: fresh
status: candidate
confidence: 0.8
created_at: '2026-05-03T15:03:00.109Z'
updated_at: '2026-05-03T15:08:40.767Z'
compiled_from:
  - package-d79bf8d6
  - ramen-shop-ordering-system-e4bd11fe
managed_by: system
backlinks:
  - 'source:package-d79bf8d6'
  - 'source:ramen-shop-ordering-system-e4bd11fe'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  package-d79bf8d6: d79bf8d6217bca36b9f02e4974b76e981cbfe598db97c32862d82b233a9da676
  ramen-shop-ordering-system-e4bd11fe: e4bd11feda1a3bcee2db77b323216d42b2e997ef1fbc5e064f95f8bea0be5bf1
source_semantic_hashes:
  package-d79bf8d6: d79bf8d6217bca36b9f02e4974b76e981cbfe598db97c32862d82b233a9da676
  ramen-shop-ordering-system-e4bd11fe: 4479eeaa46895cd8c4c09faf9497b6524d94bb45363ba994705f0054cf01ea44
---
# express

## Summary

Frequently referenced concept in package.

## Seen In

- [[sources/package-d79bf8d6|package]]
- [[sources/ramen-shop-ordering-system-e4bd11fe|拉麵職人 - Ramen Shop Ordering System]]

## Source Claims

- { "name": "ramen-shop-backend", "version": "1.0.0", "description": "拉麵店點餐系統後端 - Express.js + MySQL", "type": "module", "main": "src/index.js", "scripts": { "start": "node src/index.js", "dev": "nodemon src/index.js", "init-db": "node scripts/init-db.js", "seed-db": "node scripts/seed-db.js", "setup-db": "npm run init-db && npm run seed-db" }, "dependencies": { "cors": "^2.8.5", "dotenv": "^16.3.1", "express": "^4.18.2", "helmet": "^7.1.0", "morgan": "^1.10.0", "mysql2": "^3.6.5", "openai": "^6.35.0" }, "devDependencies": { "nodemon": "^3.0.2" }, "keywords": [ "ramen", "restaurant", "express", "mysql" ], "author": "", "license": "MIT" } [source:package-d79bf8d6]
- 拉麵職人 - Ramen Shop Ordering System 一個專業的拉麵店點餐系統，採用前後端分離架構。 ## 系統架構 ramen-shop/ ├── backend/ # Express.js + MySQL 後端 ├── frontend/ # Vue.js 3 + Tailwind CSS 前端 └── .pi/ # Agent 設定（本地運行時使用，不提交到 git） ## 技術棧 ### 後端 - Runtime : Node.js 18+ - Framework : Express.js 4.x - Database : MySQL 8.0 - AI : Moonshot Kimi API (kimi-k2.6) ### 前端 - Framework : Vue.js 3 (Composition API) - Build : Vite 5.x - State : Pinia - Styling : Tailwind CSS 3.x ## 功能特色 - 🍜 完整菜單瀏覽與分類 - 🛒 流暢的購物車與點餐流程 - ⚙️ 拉麵客製化選項（湯頭、麵條、配料等） - 🤖 AI 智能推薦與諮詢 - 📱 響應式設計，支援手機點餐 - 🔍 訂單狀態即時追蹤 ## 快速開始 ### 1. [source:ramen-shop-ordering-system-e4bd11fe]

