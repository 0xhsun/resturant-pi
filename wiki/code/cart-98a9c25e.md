---
page_id: 'module:cart-98a9c25e'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: cart module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - cart-98a9c25e
project_ids: []
node_ids:
  - 'module:cart-98a9c25e'
  - 'symbol:cart-98a9c25e:storage-key.variable'
  - 'symbol:cart-98a9c25e:loadfromstorage.variable'
  - 'symbol:cart-98a9c25e:usecartstore.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.551Z'
updated_at: '2026-05-03T15:08:39.269Z'
compiled_from:
  - cart-98a9c25e
managed_by: system
backlinks:
  - 'source:cart-98a9c25e'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  cart-98a9c25e: 98a9c25e7751eebea9686b4e547f8734a448abd54a99fb8f7b027a939c0af14d
source_semantic_hashes:
  cart-98a9c25e: 98a9c25e7751eebea9686b4e547f8734a448abd54a99fb8f7b027a939c0af14d
related_page_ids:
  - 'source:cart-98a9c25e'
related_node_ids: []
related_source_ids:
  - cart-98a9c25e
language: javascript
---
# cart module

Source ID: `cart-98a9c25e`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/frontend/src/stores/cart.js`
Repo Path: `frontend/src/stores/cart.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `frontend/src/stores/cart`
Source Page: [[sources/cart-98a9c25e|cart]]

## Summary

cart is a javascript module, defining 3 top-level symbol(s), exporting 1 symbol(s), depending on 2 external package import(s).

## Imports

- imports `pinia` (named `defineStore`)
- imports `vue` (named `ref`, `computed`)

## Exports

- `useCartStore`

## Symbols

- `STORAGE_KEY` (variable): const STORAGE_KEY = 'ramen-cart'
- `loadFromStorage` (variable): const loadFromStorage = () => { try { const raw = localStorage.getItem(STORAGE_KEY) return raw ? JSON.parse(raw) : null } catch { return null } }
- `useCartStore` (variable, exported): export const useCartStore = defineStore('cart', () => { const saved = loadFromStorage() // State — restored from localStorage on init const items = ref(saved?.items ?? []) const...

## External Dependencies

- `pinia`
- `vue`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- `useCartStore` calls `loadFromStorage`

## Diagnostics

- No parser diagnostics.

