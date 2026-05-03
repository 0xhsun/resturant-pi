---
page_id: 'module:toppingservice-465aac16'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: toppingService module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - toppingservice-465aac16
project_ids: []
node_ids:
  - 'module:toppingservice-465aac16'
  - 'symbol:toppingservice-465aac16:getalltoppings.variable'
  - 'symbol:toppingservice-465aac16:gettoppingsbyids.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.816Z'
updated_at: '2026-05-03T15:08:40.128Z'
compiled_from:
  - toppingservice-465aac16
managed_by: system
backlinks:
  - 'source:toppingservice-465aac16'
  - 'module:database-446e2fb1'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  toppingservice-465aac16: 465aac169ca5d5c8378cdf3f9171605556397834df67e04868872819dd87cfad
source_semantic_hashes:
  toppingservice-465aac16: 465aac169ca5d5c8378cdf3f9171605556397834df67e04868872819dd87cfad
related_page_ids:
  - 'source:toppingservice-465aac16'
  - 'module:database-446e2fb1'
related_node_ids: []
related_source_ids:
  - toppingservice-465aac16
  - database-446e2fb1
language: javascript
---
# toppingService module

Source ID: `toppingservice-465aac16`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/services/toppingService.js`
Repo Path: `backend/src/services/toppingService.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/services/toppingService`
Source Page: [[sources/toppingservice-465aac16|toppingService]]

## Summary

toppingService is a javascript module, defining 2 top-level symbol(s), exporting 0 symbol(s), importing 1 local module(s).

## Imports

- imports [[code/database-446e2fb1|database module]] (named `query`)

## Exports

- `getAllToppings`
- `getToppingsByIds`

## Symbols

- `getAllToppings` (variable): const getAllToppings = async () => { const sql = ` SELECT id, name, price, image_url, is_available, created_at FROM toppings WHERE is_available = TRUE ORDER BY id `; return awai...
- `getToppingsByIds` (variable): const getToppingsByIds = async (ids) => { if (!ids || ids.length === 0) return []; const placeholders = ids.map(() => '?').join(','); const sql = ` SELECT id, name, price, image...

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

