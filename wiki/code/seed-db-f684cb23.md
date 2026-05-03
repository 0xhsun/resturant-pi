---
page_id: 'module:seed-db-f684cb23'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: seed-db module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - seed-db-f684cb23
project_ids: []
node_ids:
  - 'module:seed-db-f684cb23'
  - 'symbol:seed-db-f684cb23:seedmenus.variable'
  - 'symbol:seed-db-f684cb23:seedtoppings.variable'
  - 'symbol:seed-db-f684cb23:seedcustomizations.variable'
  - 'symbol:seed-db-f684cb23:seed.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.766Z'
updated_at: '2026-05-03T15:08:39.964Z'
compiled_from:
  - seed-db-f684cb23
managed_by: system
backlinks:
  - 'source:seed-db-f684cb23'
  - 'module:database-446e2fb1'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  seed-db-f684cb23: f684cb23d732a94463b82b374273d543f5ed8adc0cf60dcd9a5c0b8bf3a0666b
source_semantic_hashes:
  seed-db-f684cb23: f684cb23d732a94463b82b374273d543f5ed8adc0cf60dcd9a5c0b8bf3a0666b
related_page_ids:
  - 'source:seed-db-f684cb23'
  - 'module:database-446e2fb1'
related_node_ids: []
related_source_ids:
  - seed-db-f684cb23
  - database-446e2fb1
language: javascript
---
# seed-db module

Source ID: `seed-db-f684cb23`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/scripts/seed-db.js`
Repo Path: `backend/scripts/seed-db.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/scripts/seed-db`
Source Page: [[sources/seed-db-f684cb23|seed-db]]

## Summary

seed-db is a javascript module, defining 4 top-level symbol(s), exporting 0 symbol(s), importing 1 local module(s).

## Imports

- imports [[code/database-446e2fb1|database module]] (named `query`)

## Exports

- No exports detected.

## Symbols

- `seedMenus` (variable): const seedMenus = async () => { const menus = [ // 豚骨系列 { name: '濃厚豚骨拉麵', name_en: 'Rich Tonkotsu Ramen', description: '使用豬大骨慢熬 12 小時的濃郁湯頭，搭配厚切叉燒與溏心蛋，是店內招牌人氣商品。', price: 280, im...
- `seedToppings` (variable): const seedToppings = async () => { const toppings = [ { name: '叉燒肉 (2片)', price: 50 }, { name: '溏心蛋', price: 30 }, { name: '筍乾', price: 20 }, { name: '海苔 (3片)', price: 20 }, { n...
- `seedCustomizations` (variable): const seedCustomizations = async () => { const options = [ // 湯頭濃度 { category: 'soup', name: '清淡', display_order: 1 }, { category: 'soup', name: '標準', display_order: 2 }, { cate...
- `seed` (variable): const seed = async () => { try { console.log('🚀 開始建立種子資料...'); await seedMenus(); await seedToppings(); await seedCustomizations(); console.log('✨ 種子資料建立完成！'); process.exit(0);...

## External Dependencies

- No external dependencies detected.

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- `seed` calls `seedMenus`
- `seed` calls `seedToppings`
- `seed` calls `seedCustomizations`

## Diagnostics

- No parser diagnostics.

