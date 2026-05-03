---
page_id: 'module:index-291cd897'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: index module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - index-291cd897
project_ids: []
node_ids:
  - 'module:index-291cd897'
  - 'symbol:index-291cd897:routes.variable'
  - 'symbol:index-291cd897:router.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.602Z'
updated_at: '2026-05-03T15:08:39.436Z'
compiled_from:
  - index-291cd897
managed_by: system
backlinks:
  - 'source:index-291cd897'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  index-291cd897: 291cd8978a5c883fb4a0af7187b06810fe34dd1160d2e41a8e163df98eb4035c
source_semantic_hashes:
  index-291cd897: 291cd8978a5c883fb4a0af7187b06810fe34dd1160d2e41a8e163df98eb4035c
related_page_ids:
  - 'source:index-291cd897'
related_node_ids: []
related_source_ids:
  - index-291cd897
language: javascript
---
# index module

Source ID: `index-291cd897`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/frontend/src/router/index.js`
Repo Path: `frontend/src/router/index.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `frontend/src/router`
Source Page: [[sources/index-291cd897|index]]

## Summary

index is a javascript module, defining 2 top-level symbol(s), exporting 0 symbol(s), depending on 2 external package import(s).

## Imports

- imports `vue-router` (named `createRouter`, `createWebHistory`)
- imports `@/views/Home.vue` (default `Home`)

## Exports

- `default (router)`

## Symbols

- `routes` (variable): const routes = [ { path: '/', name: 'Home', component: Home }, { path: '/menu', name: 'Menu', component: () => import('@/views/Menu.vue') }, { path: '/menu/:id', name: 'MenuDeta...
- `router` (variable): const router = createRouter({ history: createWebHistory(), routes, scrollBehavior() { return { top: 0 } } })

## External Dependencies

- `vue-router`
- `@/views/Home.vue`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

