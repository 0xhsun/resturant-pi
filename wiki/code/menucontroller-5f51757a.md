---
page_id: 'module:menucontroller-5f51757a'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: menuController module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - menucontroller-5f51757a
project_ids: []
node_ids:
  - 'module:menucontroller-5f51757a'
  - 'symbol:menucontroller-5f51757a:getallmenus.variable'
  - 'symbol:menucontroller-5f51757a:getmenubyid.variable'
  - 'symbol:menucontroller-5f51757a:getcategories.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.672Z'
updated_at: '2026-05-03T15:08:39.661Z'
compiled_from:
  - menucontroller-5f51757a
managed_by: system
backlinks:
  - 'source:menucontroller-5f51757a'
  - 'module:menuservice-9a5f0e48'
  - 'module:response-d1608d13'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  menucontroller-5f51757a: 5f51757a18b40ffde5144bc967a2d7a16f8fde9e3d2d11f13f875fb49cdc4267
source_semantic_hashes:
  menucontroller-5f51757a: 5f51757a18b40ffde5144bc967a2d7a16f8fde9e3d2d11f13f875fb49cdc4267
related_page_ids:
  - 'source:menucontroller-5f51757a'
  - 'module:menuservice-9a5f0e48'
  - 'module:response-d1608d13'
related_node_ids: []
related_source_ids:
  - menucontroller-5f51757a
  - menuservice-9a5f0e48
  - response-d1608d13
language: javascript
---
# menuController module

Source ID: `menucontroller-5f51757a`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/controllers/menuController.js`
Repo Path: `backend/src/controllers/menuController.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/controllers/menuController`
Source Page: [[sources/menucontroller-5f51757a|menuController]]

## Summary

menuController is a javascript module, defining 3 top-level symbol(s), exporting 0 symbol(s), importing 2 local module(s).

## Imports

- imports [[code/menuservice-9a5f0e48|menuService module]] (namespace `menuService`)
- imports [[code/response-d1608d13|response module]] (named `success`, `errorResponse`)

## Exports

- `getAllMenus`
- `getMenuById`
- `getCategories`

## Symbols

- `getAllMenus` (variable): const getAllMenus = async (req, res) => { try { const { category } = req.query; const menus = await menuService.getAllMenus(category); // 添加分類中文名稱 const menusWithCategoryName = ...
- `getMenuById` (variable): const getMenuById = async (req, res) => { try { const { id } = req.params; const menu = await menuService.getMenuById(id); if (!menu) { return res.status(404).json(errorResponse...
- `getCategories` (variable): const getCategories = async (req, res) => { try { const categories = await menuService.getCategories(); const categoriesWithName = categories.map(cat => ({ value: cat, label: me...

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

