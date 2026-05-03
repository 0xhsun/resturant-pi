---
page_id: 'module:order-1fab629e'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: order module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - order-1fab629e
project_ids: []
node_ids:
  - 'module:order-1fab629e'
  - 'symbol:order-1fab629e:useorderstore.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.702Z'
updated_at: '2026-05-03T15:08:39.754Z'
compiled_from:
  - order-1fab629e
managed_by: system
backlinks:
  - 'source:order-1fab629e'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  order-1fab629e: 1fab629ea09d4e7f31b3653342c30794ed5c90d5272a29196ab136744d0bf1ed
source_semantic_hashes:
  order-1fab629e: 1fab629ea09d4e7f31b3653342c30794ed5c90d5272a29196ab136744d0bf1ed
related_page_ids:
  - 'source:order-1fab629e'
related_node_ids: []
related_source_ids:
  - order-1fab629e
language: javascript
---
# order module

Source ID: `order-1fab629e`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/frontend/src/stores/order.js`
Repo Path: `frontend/src/stores/order.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `frontend/src/stores/order`
Source Page: [[sources/order-1fab629e|order]]

## Summary

order is a javascript module, defining 1 top-level symbol(s), exporting 1 symbol(s), depending on 3 external package import(s).

## Imports

- imports `pinia` (named `defineStore`)
- imports `vue` (named `ref`)
- imports `@/services/api` (named `orderApi`)

## Exports

- `useOrderStore`

## Symbols

- `useOrderStore` (variable, exported): export const useOrderStore = defineStore('order', () => { // State const currentOrder = ref(null) const orderStatus = ref(null) const loading = ref(false) const error = ref(null...

## External Dependencies

- `pinia`
- `vue`
- `@/services/api`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

