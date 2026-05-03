---
page_id: 'module:orderservice-b1840729'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: orderService module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - orderservice-b1840729
project_ids: []
node_ids:
  - 'module:orderservice-b1840729'
  - 'symbol:orderservice-b1840729:parsejsonfield.variable'
  - 'symbol:orderservice-b1840729:createorder.variable'
  - 'symbol:orderservice-b1840729:getorderbyid.variable'
  - 'symbol:orderservice-b1840729:getorderbynumber.variable'
  - 'symbol:orderservice-b1840729:getorderstatus.variable'
  - 'symbol:orderservice-b1840729:statuslabels.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.722Z'
updated_at: '2026-05-03T15:08:39.822Z'
compiled_from:
  - orderservice-b1840729
managed_by: system
backlinks:
  - 'source:orderservice-b1840729'
  - 'module:database-446e2fb1'
  - 'module:ordernumber-5c5f32af'
  - 'module:menuservice-9a5f0e48'
  - 'module:toppingservice-465aac16'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  orderservice-b1840729: b18407294ca527f6f2e790e77811e612a8e60fa712f23320932292e6bec9f39d
source_semantic_hashes:
  orderservice-b1840729: b18407294ca527f6f2e790e77811e612a8e60fa712f23320932292e6bec9f39d
related_page_ids:
  - 'source:orderservice-b1840729'
  - 'module:database-446e2fb1'
  - 'module:ordernumber-5c5f32af'
  - 'module:menuservice-9a5f0e48'
  - 'module:toppingservice-465aac16'
related_node_ids: []
related_source_ids:
  - orderservice-b1840729
  - database-446e2fb1
  - ordernumber-5c5f32af
  - menuservice-9a5f0e48
  - toppingservice-465aac16
language: javascript
---
# orderService module

Source ID: `orderservice-b1840729`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/services/orderService.js`
Repo Path: `backend/src/services/orderService.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/services/orderService`
Source Page: [[sources/orderservice-b1840729|orderService]]

## Summary

orderService is a javascript module, defining 6 top-level symbol(s), exporting 0 symbol(s), importing 4 local module(s).

## Imports

- imports [[code/database-446e2fb1|database module]] (named `query`, `transaction`)
- imports [[code/ordernumber-5c5f32af|orderNumber module]] (named `generateOrderNumber`)
- imports [[code/menuservice-9a5f0e48|menuService module]] (namespace `menuService`)
- imports [[code/toppingservice-465aac16|toppingService module]] (namespace `toppingService`)

## Exports

- `createOrder`
- `getOrderById`
- `getOrderByNumber`
- `getOrderStatus`
- `statusLabels`

## Symbols

- `parseJsonField` (variable): const parseJsonField = (val, fallback) => { if (val === null || val === undefined) return fallback; if (typeof val === 'string') { try { return JSON.parse(val); } catch { return...
- `createOrder` (variable): const createOrder = async (orderData) => { const { customerName, phone, items, specialRequests } = orderData; return await transaction(async (connection) => { // 生成訂單編號 const or...
- `getOrderById` (variable): const getOrderById = async (id) => { const orderSql = ` SELECT id, order_number, customer_name, phone, total_amount, status, special_requests, created_at, updated_at FROM orders...
- `getOrderByNumber` (variable): const getOrderByNumber = async (orderNumber) => { const orderSql = ` SELECT id, order_number, customer_name, phone, total_amount, status, special_requests, created_at, updated_a...
- `getOrderStatus` (variable): const getOrderStatus = async (id) => { const sql = ` SELECT id, order_number, status, created_at, updated_at FROM orders WHERE id = ? `; const rows = await query(sql, [id]); ret...
- `statusLabels` (variable): const statusLabels = { pending: '待處理', preparing: '製作中', ready: '可取餐', completed: '已完成', cancelled: '已取消' };

## External Dependencies

- No external dependencies detected.

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- `getOrderById` calls `parseJsonField`
- `getOrderByNumber` calls `parseJsonField`

## Diagnostics

- No parser diagnostics.

