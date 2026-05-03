---
page_id: 'module:home-36ac80c5'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: Home module
source_class: first_party
tags:
  - module
  - code
  - vue
source_ids:
  - home-36ac80c5
project_ids: []
node_ids:
  - 'module:home-36ac80c5'
  - 'symbol:home-36ac80c5:home.class'
  - 'symbol:home-36ac80c5:routerlink.class'
  - 'symbol:home-36ac80c5:menucard.class'
  - 'symbol:home-36ac80c5:router.variable'
  - 'symbol:home-36ac80c5:menustore.variable'
  - 'symbol:home-36ac80c5:cartstore.variable'
  - 'symbol:home-36ac80c5:popularmenus.variable'
  - 'symbol:home-36ac80c5:features.variable'
  - 'symbol:home-36ac80c5:handleaddtocart.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.594Z'
updated_at: '2026-05-03T15:08:39.409Z'
compiled_from:
  - home-36ac80c5
managed_by: system
backlinks:
  - 'source:home-36ac80c5'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  home-36ac80c5: 36ac80c507dfc8c07fc3159e9188650f567ddb1555052db1b24cf5ad86a40f25
source_semantic_hashes:
  home-36ac80c5: 36ac80c507dfc8c07fc3159e9188650f567ddb1555052db1b24cf5ad86a40f25
related_page_ids:
  - 'source:home-36ac80c5'
related_node_ids: []
related_source_ids:
  - home-36ac80c5
language: vue
---
# Home module

Source ID: `home-36ac80c5`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/frontend/src/views/Home.vue`
Repo Path: `frontend/src/views/Home.vue`
Source Class: `first_party`
Language: `vue`
Module Name: `frontend/src/views/Home`
Source Page: [[sources/home-36ac80c5|Home]]

## Summary

Home is a vue module, defining 9 top-level symbol(s), exporting 3 symbol(s), depending on 5 external package import(s).

## Imports

- imports `vue` (named `computed`)
- imports `vue-router` (named `useRouter`)
- imports `@/stores/menu` (named `useMenuStore`)
- imports `@/stores/cart` (named `useCartStore`)
- imports `@/components/MenuCard.vue` (default `MenuCard`)

## Exports

- `Home`
- `RouterLink`
- `MenuCard`

## Symbols

- `Home` (class, exported): vue component Home
- `RouterLink` (class, exported): <RouterLink to="/menu" class="btn-primary text-lg">
- `MenuCard` (class, exported): <MenuCard
- `router` (variable): const router = useRouter()
- `menuStore` (variable): const menuStore = useMenuStore()
- `cartStore` (variable): const cartStore = useCartStore()
- `popularMenus` (variable): const popularMenus = computed(() => { return menuStore.menus.filter(menu => menu.isPopular) })
- `features` (variable): const features = [ { icon: '🍜', title: '每日現熬湯頭', description: '以豬大骨、雞骨架慢火熬煮 12 小時，湯頭濃郁醇厚' }, { icon: '🌾', title: '手工製麵', description: '選用日本進口小麥粉，每日現場製作，口感 Q 彈有勁' }, { icon: '⭐...
- `handleAddToCart` (variable): const handleAddToCart = (menu) => { cartStore.addItem(menu, { quantity: 1 }) router.push('/cart') }

## External Dependencies

- `vue`
- `vue-router`
- `@/stores/menu`
- `@/stores/cart`
- `@/components/MenuCard.vue`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

