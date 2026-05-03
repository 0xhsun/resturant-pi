---
page_id: 'module:ordercontroller-b26669d8'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: orderController module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - ordercontroller-b26669d8
project_ids: []
node_ids:
  - 'module:ordercontroller-b26669d8'
  - 'symbol:ordercontroller-b26669d8:createorder.variable'
  - 'symbol:ordercontroller-b26669d8:getorderbyid.variable'
  - 'symbol:ordercontroller-b26669d8:getorderbynumber.variable'
  - 'symbol:ordercontroller-b26669d8:getorderstatus.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.707Z'
updated_at: '2026-05-03T15:08:39.771Z'
compiled_from:
  - ordercontroller-b26669d8
managed_by: system
backlinks:
  - 'source:ordercontroller-b26669d8'
  - 'module:orderservice-b1840729'
  - 'module:response-d1608d13'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  ordercontroller-b26669d8: b26669d824330d981f3d753ef13f50fff04c1204b1c8142b771ffb4ed75a44f8
source_semantic_hashes:
  ordercontroller-b26669d8: b26669d824330d981f3d753ef13f50fff04c1204b1c8142b771ffb4ed75a44f8
related_page_ids:
  - 'source:ordercontroller-b26669d8'
  - 'module:orderservice-b1840729'
  - 'module:response-d1608d13'
related_node_ids: []
related_source_ids:
  - ordercontroller-b26669d8
  - orderservice-b1840729
  - response-d1608d13
language: javascript
---
# orderController module

Source ID: `ordercontroller-b26669d8`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/controllers/orderController.js`
Repo Path: `backend/src/controllers/orderController.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/controllers/orderController`
Source Page: [[sources/ordercontroller-b26669d8|orderController]]

## Summary

orderController is a javascript module, defining 4 top-level symbol(s), exporting 0 symbol(s), importing 2 local module(s).

## Imports

- imports [[code/orderservice-b1840729|orderService module]] (namespace `orderService`)
- imports [[code/response-d1608d13|response module]] (named `success`, `errorResponse`)

## Exports

- `createOrder`
- `getOrderById`
- `getOrderByNumber`
- `getOrderStatus`

## Symbols

- `createOrder` (variable): const createOrder = async (req, res) => { try { const { customerName, phone, items, specialRequests } = req.body; console.log('📦 收到訂單請求:', JSON.stringify(req.body, null, 2)); /...
- `getOrderById` (variable): const getOrderById = async (req, res) => { try { const { id } = req.params; const order = await orderService.getOrderById(id); if (!order) { return res.status(404).json(errorRes...
- `getOrderByNumber` (variable): const getOrderByNumber = async (req, res) => { try { const { orderNumber } = req.params; const order = await orderService.getOrderByNumber(orderNumber); if (!order) { return res...
- `getOrderStatus` (variable): const getOrderStatus = async (req, res) => { try { const { id } = req.params; const order = await orderService.getOrderStatus(id); if (!order) { return res.status(404).json(erro...

## External Dependencies

- No external dependencies detected.

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

