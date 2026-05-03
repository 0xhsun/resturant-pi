---
page_id: 'module:toppingcontroller-a74e3c3a'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: toppingController module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - toppingcontroller-a74e3c3a
project_ids: []
node_ids:
  - 'module:toppingcontroller-a74e3c3a'
  - 'symbol:toppingcontroller-a74e3c3a:getalltoppings.variable'
  - 'symbol:toppingcontroller-a74e3c3a:getcustomizations.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.805Z'
updated_at: '2026-05-03T15:08:40.094Z'
compiled_from:
  - toppingcontroller-a74e3c3a
managed_by: system
backlinks:
  - 'source:toppingcontroller-a74e3c3a'
  - 'module:toppingservice-465aac16'
  - 'module:customizationservice-a1a60d53'
  - 'module:response-d1608d13'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  toppingcontroller-a74e3c3a: a74e3c3a9277eb351de87e520c9eacdfebc7a588da658f88ba259d2bd2650e5b
source_semantic_hashes:
  toppingcontroller-a74e3c3a: a74e3c3a9277eb351de87e520c9eacdfebc7a588da658f88ba259d2bd2650e5b
related_page_ids:
  - 'source:toppingcontroller-a74e3c3a'
  - 'module:toppingservice-465aac16'
  - 'module:customizationservice-a1a60d53'
  - 'module:response-d1608d13'
related_node_ids: []
related_source_ids:
  - toppingcontroller-a74e3c3a
  - toppingservice-465aac16
  - customizationservice-a1a60d53
  - response-d1608d13
language: javascript
---
# toppingController module

Source ID: `toppingcontroller-a74e3c3a`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/controllers/toppingController.js`
Repo Path: `backend/src/controllers/toppingController.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/controllers/toppingController`
Source Page: [[sources/toppingcontroller-a74e3c3a|toppingController]]

## Summary

toppingController is a javascript module, defining 2 top-level symbol(s), exporting 0 symbol(s), importing 3 local module(s).

## Imports

- imports [[code/toppingservice-465aac16|toppingService module]] (namespace `toppingService`)
- imports [[code/customizationservice-a1a60d53|customizationService module]] (namespace `customizationService`)
- imports [[code/response-d1608d13|response module]] (named `success`, `errorResponse`)

## Exports

- `getAllToppings`
- `getCustomizations`

## Symbols

- `getAllToppings` (variable): const getAllToppings = async (req, res) => { try { const toppings = await toppingService.getAllToppings(); res.json(success(toppings)); } catch (err) { console.error('取得配料失敗:', ...
- `getCustomizations` (variable): const getCustomizations = async (req, res) => { try { const customizations = await customizationService.getAllCustomizations(); // 添加中文標籤 const customizationsWithLabels = {}; fo...

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

