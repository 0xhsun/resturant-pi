---
page_id: 'module:aiservice-ef45c47d'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: aiService module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - aiservice-ef45c47d
project_ids: []
node_ids:
  - 'module:aiservice-ef45c47d'
  - 'symbol:aiservice-ef45c47d:getrecommendation.variable'
  - 'symbol:aiservice-ef45c47d:chat.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.517Z'
updated_at: '2026-05-03T15:08:39.162Z'
compiled_from:
  - aiservice-ef45c47d
managed_by: system
backlinks:
  - 'source:aiservice-ef45c47d'
  - 'module:llmservice-c197b460'
  - 'module:menuservice-9a5f0e48'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  aiservice-ef45c47d: ef45c47d85622ef865733babfc581fe03b0f2e1d4973041dc38090985156d285
source_semantic_hashes:
  aiservice-ef45c47d: ef45c47d85622ef865733babfc581fe03b0f2e1d4973041dc38090985156d285
related_page_ids:
  - 'source:aiservice-ef45c47d'
  - 'module:llmservice-c197b460'
  - 'module:menuservice-9a5f0e48'
related_node_ids: []
related_source_ids:
  - aiservice-ef45c47d
  - llmservice-c197b460
  - menuservice-9a5f0e48
language: javascript
---
# aiService module

Source ID: `aiservice-ef45c47d`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/services/aiService.js`
Repo Path: `backend/src/services/aiService.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/services/aiService`
Source Page: [[sources/aiservice-ef45c47d|aiService]]

## Summary

aiService is a javascript module, defining 2 top-level symbol(s), exporting 0 symbol(s), importing 2 local module(s).

## Imports

- imports [[code/llmservice-c197b460|llmService module]] (named `chatCompletion`, `simpleChat`)
- imports [[code/menuservice-9a5f0e48|menuService module]] (default `menuService`)

## Exports

- `getRecommendation`
- `chat`

## Symbols

- `getRecommendation` (variable): const getRecommendation = async (preferences, budget = null) => { // 取得所有菜單資訊 const menus = await menuService.getAllMenus(); const menuList = menus.map(m => ({ id: m.id, name: m...
- `chat` (variable): const chat = async (message, history = []) => { // 取得所有菜單資訊 const menus = await menuService.getAllMenus(); const menuList = menus.map(m => ({ id: m.id, name: m.name, nameEn: m.n...

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

