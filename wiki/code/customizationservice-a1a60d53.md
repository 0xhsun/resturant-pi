---
page_id: 'module:customizationservice-a1a60d53'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: customizationService module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - customizationservice-a1a60d53
project_ids: []
node_ids:
  - 'module:customizationservice-a1a60d53'
  - 'symbol:customizationservice-a1a60d53:getallcustomizations.variable'
  - 'symbol:customizationservice-a1a60d53:categorylabels.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.575Z'
updated_at: '2026-05-03T15:08:39.346Z'
compiled_from:
  - customizationservice-a1a60d53
managed_by: system
backlinks:
  - 'source:customizationservice-a1a60d53'
  - 'module:database-446e2fb1'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  customizationservice-a1a60d53: a1a60d532f0288467a93ed4dfa198f7450919d42b3863b20b32c46980a59d311
source_semantic_hashes:
  customizationservice-a1a60d53: a1a60d532f0288467a93ed4dfa198f7450919d42b3863b20b32c46980a59d311
related_page_ids:
  - 'source:customizationservice-a1a60d53'
  - 'module:database-446e2fb1'
related_node_ids: []
related_source_ids:
  - customizationservice-a1a60d53
  - database-446e2fb1
language: javascript
---
# customizationService module

Source ID: `customizationservice-a1a60d53`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/services/customizationService.js`
Repo Path: `backend/src/services/customizationService.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/services/customizationService`
Source Page: [[sources/customizationservice-a1a60d53|customizationService]]

## Summary

customizationService is a javascript module, defining 2 top-level symbol(s), exporting 0 symbol(s), importing 1 local module(s).

## Imports

- imports [[code/database-446e2fb1|database module]] (named `query`)

## Exports

- `getAllCustomizations`
- `categoryLabels`

## Symbols

- `getAllCustomizations` (variable): const getAllCustomizations = async () => { const sql = ` SELECT id, category, name, display_order FROM customization_options ORDER BY category, display_order `; const rows = awa...
- `categoryLabels` (variable): const categoryLabels = { soup: '湯頭濃度', noodle: '麵條硬度', onion: '蔥量', garlic: '蒜泥', spiciness: '辣度' };

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

