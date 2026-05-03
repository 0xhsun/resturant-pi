---
page_id: 'module:index-fe2d9116'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: index module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - index-fe2d9116
project_ids: []
node_ids:
  - 'module:index-fe2d9116'
  - 'symbol:index-fe2d9116:app.variable'
  - 'symbol:index-fe2d9116:port.variable'
  - 'symbol:index-fe2d9116:startserver.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.613Z'
updated_at: '2026-05-03T15:08:39.471Z'
compiled_from:
  - index-fe2d9116
managed_by: system
backlinks:
  - 'source:index-fe2d9116'
  - 'module:llm-48a32326'
  - 'module:ai-539bffad'
  - 'module:menus-50bbe588'
  - 'module:toppings-51550e79'
  - 'module:orders-2ab28be4'
  - 'module:database-446e2fb1'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  index-fe2d9116: fe2d9116438a4027c634580ee0aaa08bf0db15b6549bddaf38db43e9144f1a75
source_semantic_hashes:
  index-fe2d9116: fe2d9116438a4027c634580ee0aaa08bf0db15b6549bddaf38db43e9144f1a75
related_page_ids:
  - 'source:index-fe2d9116'
  - 'module:llm-48a32326'
  - 'module:ai-539bffad'
  - 'module:menus-50bbe588'
  - 'module:toppings-51550e79'
  - 'module:orders-2ab28be4'
  - 'module:database-446e2fb1'
related_node_ids: []
related_source_ids:
  - index-fe2d9116
  - llm-48a32326
  - ai-539bffad
  - menus-50bbe588
  - toppings-51550e79
  - orders-2ab28be4
  - database-446e2fb1
language: javascript
---
# index module

Source ID: `index-fe2d9116`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/index.js`
Repo Path: `backend/src/index.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src`
Source Page: [[sources/index-fe2d9116|index]]

## Summary

index is a javascript module, defining 3 top-level symbol(s), exporting 0 symbol(s), importing 6 local module(s), depending on 5 external package import(s).

## Imports

- imports `dotenv` (default `dotenv`)
- imports `express` (default `express`)
- imports `cors` (default `cors`)
- imports `helmet` (default `helmet`)
- imports `morgan` (default `morgan`)
- imports [[code/llm-48a32326|llm module]] (default `llmRoutes`)
- imports [[code/ai-539bffad|ai module]] (default `aiRoutes`)
- imports [[code/menus-50bbe588|menus module]] (default `menuRoutes`)
- imports [[code/toppings-51550e79|toppings module]] (default `toppingRoutes`)
- imports [[code/orders-2ab28be4|orders module]] (default `orderRoutes`)
- imports [[code/database-446e2fb1|database module]] (named `testConnection`)

## Exports

- `default (app)`

## Symbols

- `app` (variable): const app = express();
- `PORT` (variable): const PORT = process.env.PORT || 3001;
- `startServer` (variable): const startServer = async () => { // 測試資料庫連線 const dbConnected = await testConnection(); if (!dbConnected) { console.error('❌ 資料庫連線失敗，請檢查 Docker MySQL 是否運行'); process.exit(1); }...

## External Dependencies

- `dotenv`
- `express`
- `cors`
- `helmet`
- `morgan`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

