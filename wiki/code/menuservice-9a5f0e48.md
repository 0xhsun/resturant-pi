---
page_id: 'module:menuservice-9a5f0e48'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: menuService module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - menuservice-9a5f0e48
project_ids: []
node_ids:
  - 'module:menuservice-9a5f0e48'
  - 'symbol:menuservice-9a5f0e48:getallmenus.variable'
  - 'symbol:menuservice-9a5f0e48:getmenubyid.variable'
  - 'symbol:menuservice-9a5f0e48:getcategories.variable'
  - 'symbol:menuservice-9a5f0e48:categorynames.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.688Z'
updated_at: '2026-05-03T15:08:39.712Z'
compiled_from:
  - menuservice-9a5f0e48
managed_by: system
backlinks:
  - 'source:menuservice-9a5f0e48'
  - 'module:database-446e2fb1'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  menuservice-9a5f0e48: 9a5f0e48b725010d904350014f317ebe127b16e469a024671236be698846ceee
source_semantic_hashes:
  menuservice-9a5f0e48: 9a5f0e48b725010d904350014f317ebe127b16e469a024671236be698846ceee
related_page_ids:
  - 'source:menuservice-9a5f0e48'
  - 'module:database-446e2fb1'
related_node_ids: []
related_source_ids:
  - menuservice-9a5f0e48
  - database-446e2fb1
language: javascript
---
# menuService module

Source ID: `menuservice-9a5f0e48`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/services/menuService.js`
Repo Path: `backend/src/services/menuService.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/services/menuService`
Source Page: [[sources/menuservice-9a5f0e48|menuService]]

## Summary

menuService is a javascript module, defining 4 top-level symbol(s), exporting 0 symbol(s), importing 1 local module(s).

## Imports

- imports [[code/database-446e2fb1|database module]] (named `query`)

## Exports

- `getAllMenus`
- `getMenuById`
- `getCategories`
- `categoryNames`

## Symbols

- `getAllMenus` (variable): const getAllMenus = async (category = null) => { let sql = ` SELECT id, name, name_en, description, price, image_url, category, is_available, stock_count, created_at, updated_at...
- `getMenuById` (variable): const getMenuById = async (id) => { const sql = ` SELECT id, name, name_en, description, price, image_url, category, is_available, stock_count, created_at, updated_at FROM menus...
- `getCategories` (variable): const getCategories = async () => { const sql = ` SELECT DISTINCT category FROM menus WHERE is_available = TRUE ORDER BY FIELD(category, 'tonkotsu', 'shoyu', 'miso', 'tsukemen',...
- `categoryNames` (variable): const categoryNames = { tonkotsu: '豚骨', shoyu: '醬油', miso: '味噌', tsukemen: '沾麵', side: '小菜' };

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

