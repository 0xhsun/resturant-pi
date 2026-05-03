---
page_id: 'module:api-026fca87'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: api module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - api-026fca87
project_ids: []
node_ids:
  - 'module:api-026fca87'
  - 'symbol:api-026fca87:api.variable'
  - 'symbol:api-026fca87:menuapi.variable'
  - 'symbol:api-026fca87:toppingapi.variable'
  - 'symbol:api-026fca87:customizationapi.variable'
  - 'symbol:api-026fca87:orderapi.variable'
  - 'symbol:api-026fca87:aiapi.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.523Z'
updated_at: '2026-05-03T15:08:39.181Z'
compiled_from:
  - api-026fca87
managed_by: system
backlinks:
  - 'source:api-026fca87'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  api-026fca87: 026fca875026af169f1a56475676fbf8f8523f8eb57a76f7191f365f9e1e538c
source_semantic_hashes:
  api-026fca87: 026fca875026af169f1a56475676fbf8f8523f8eb57a76f7191f365f9e1e538c
related_page_ids:
  - 'source:api-026fca87'
related_node_ids: []
related_source_ids:
  - api-026fca87
language: javascript
---
# api module

Source ID: `api-026fca87`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/frontend/src/services/api.js`
Repo Path: `frontend/src/services/api.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `frontend/src/services/api`
Source Page: [[sources/api-026fca87|api]]

## Summary

api is a javascript module, defining 6 top-level symbol(s), exporting 5 symbol(s), depending on 1 external package import(s).

## Imports

- imports `axios` (default `axios`)

## Exports

- `menuApi`
- `toppingApi`
- `customizationApi`
- `orderApi`
- `aiApi`
- `default (api)`

## Symbols

- `api` (variable): const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || '/api', headers: { 'Content-Type': 'application/json' }, timeout: 60000 })
- `menuApi` (variable, exported): export const menuApi = { getAll: () => api.get('/menus'), getById: (id) => api.get(`/menus/${id}`), getCategories: () => api.get('/menus/categories') }
- `toppingApi` (variable, exported): export const toppingApi = { getAll: () => api.get('/toppings') }
- `customizationApi` (variable, exported): export const customizationApi = { getAll: () => api.get('/toppings/customizations') }
- `orderApi` (variable, exported): export const orderApi = { create: (orderData) => api.post('/orders', orderData), getById: (id) => api.get(`/orders/${id}`), getStatus: (id) => api.get(`/orders/${id}/status`) }
- `aiApi` (variable, exported): export const aiApi = { recommend: (preferences) => api.post('/ai/recommend', preferences) }

## External Dependencies

- `axios`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

