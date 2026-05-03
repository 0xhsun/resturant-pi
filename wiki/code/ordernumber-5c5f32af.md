---
page_id: 'module:ordernumber-5c5f32af'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: orderNumber module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - ordernumber-5c5f32af
project_ids: []
node_ids:
  - 'module:ordernumber-5c5f32af'
  - 'symbol:ordernumber-5c5f32af:generateordernumber.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.712Z'
updated_at: '2026-05-03T15:08:39.788Z'
compiled_from:
  - ordernumber-5c5f32af
managed_by: system
backlinks:
  - 'source:ordernumber-5c5f32af'
  - 'module:database-446e2fb1'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  ordernumber-5c5f32af: 5c5f32afa7dba97033f949f8135825c1fcdbde67b034540087db6986525aca80
source_semantic_hashes:
  ordernumber-5c5f32af: 5c5f32afa7dba97033f949f8135825c1fcdbde67b034540087db6986525aca80
related_page_ids:
  - 'source:ordernumber-5c5f32af'
  - 'module:database-446e2fb1'
related_node_ids: []
related_source_ids:
  - ordernumber-5c5f32af
  - database-446e2fb1
language: javascript
---
# orderNumber module

Source ID: `ordernumber-5c5f32af`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/utils/orderNumber.js`
Repo Path: `backend/src/utils/orderNumber.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/utils/orderNumber`
Source Page: [[sources/ordernumber-5c5f32af|orderNumber]]

## Summary

orderNumber is a javascript module, defining 1 top-level symbol(s), exporting 0 symbol(s), importing 1 local module(s).

## Imports

- imports [[code/database-446e2fb1|database module]] (named `query`)

## Exports

- `generateOrderNumber`

## Symbols

- `generateOrderNumber` (variable): const generateOrderNumber = async () => { const now = new Date(); const year = now.getFullYear(); const month = String(now.getMonth() + 1).padStart(2, '0'); const day = String(n...

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

