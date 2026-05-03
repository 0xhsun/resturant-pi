---
page_id: 'source:orderservice-b1840729'
kind: source
cssclasses:
  - swarmvault
  - sv-source
title: orderService
source_class: first_party
tags:
  - source
  - code
source_ids:
  - orderservice-b1840729
project_ids: []
node_ids:
  - 'source:orderservice-b1840729'
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
created_at: '2026-05-03T15:02:59.720Z'
updated_at: '2026-05-03T15:08:39.813Z'
compiled_from:
  - orderservice-b1840729
managed_by: system
backlinks:
  - 'module:orderservice-b1840729'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  orderservice-b1840729: b18407294ca527f6f2e790e77811e612a8e60fa712f23320932292e6bec9f39d
source_semantic_hashes:
  orderservice-b1840729: b18407294ca527f6f2e790e77811e612a8e60fa712f23320932292e6bec9f39d
---
# orderService

Source ID: `orderservice-b1840729`
Source Kind: `code`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/services/orderService.js`

Source Class: `first_party`


## Summary

orderService is a javascript module, defining 6 top-level symbol(s), exporting 0 symbol(s), importing 4 local module(s).

## Code Module

- Language: `javascript`
- Module Page: [[code/orderservice-b1840729|orderService module]]
- Exports: createOrder, getOrderById, getOrderByNumber, getOrderStatus, statusLabels
- Symbols: parseJsonField, createOrder, getOrderById, getOrderByNumber, getOrderStatus, statusLabels
- Diagnostics: None.

## Concepts

- None detected.

## Entities

- None detected.

## Claims

- orderService exports createOrder, getOrderById, getOrderByNumber, getOrderStatus, and more. [source:orderservice-b1840729]
- orderService defines parseJsonField, createOrder, getOrderById, getOrderByNumber, getOrderStatus, and more. [source:orderservice-b1840729]
- orderService imports ../config/database.js, ../utils/orderNumber.js, ./menuService.js, ./toppingService.js. [source:orderservice-b1840729]

## Questions

- Which downstream pages should explain how orderService exports are consumed?
- How does orderService coordinate with its imported local modules?
- What broader responsibility does orderService serve in the codebase?

