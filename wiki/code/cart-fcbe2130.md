---
page_id: 'module:cart-fcbe2130'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: Cart module
source_class: first_party
tags:
  - module
  - code
  - vue
source_ids:
  - cart-fcbe2130
project_ids: []
node_ids:
  - 'module:cart-fcbe2130'
  - 'symbol:cart-fcbe2130:cart.class'
  - 'symbol:cart-fcbe2130:routerlink.class'
  - 'symbol:cart-fcbe2130:router.variable'
  - 'symbol:cart-fcbe2130:cartstore.variable'
  - 'symbol:cart-fcbe2130:orderstore.variable'
  - 'symbol:cart-fcbe2130:customerinfo.variable'
  - 'symbol:cart-fcbe2130:submiterror.variable'
  - 'symbol:cart-fcbe2130:cansubmit.variable'
  - 'symbol:cart-fcbe2130:hascustomizations.variable'
  - 'symbol:cart-fcbe2130:formatoptions.variable'
  - 'symbol:cart-fcbe2130:formatprice.variable'
  - 'symbol:cart-fcbe2130:gettoppingsprice.variable'
  - 'symbol:cart-fcbe2130:submitorder.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.556Z'
updated_at: '2026-05-03T15:08:39.286Z'
compiled_from:
  - cart-fcbe2130
managed_by: system
backlinks:
  - 'source:cart-fcbe2130'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  cart-fcbe2130: fcbe21301514a1cef05d271f0da613007986aa8d1efc09479044f1e96276d927
source_semantic_hashes:
  cart-fcbe2130: fcbe21301514a1cef05d271f0da613007986aa8d1efc09479044f1e96276d927
related_page_ids:
  - 'source:cart-fcbe2130'
related_node_ids: []
related_source_ids:
  - cart-fcbe2130
language: vue
---
# Cart module

Source ID: `cart-fcbe2130`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/frontend/src/views/Cart.vue`
Repo Path: `frontend/src/views/Cart.vue`
Source Class: `first_party`
Language: `vue`
Module Name: `frontend/src/views/Cart`
Source Page: [[sources/cart-fcbe2130|Cart]]

## Summary

Cart is a vue module, defining 13 top-level symbol(s), exporting 2 symbol(s), depending on 4 external package import(s).

## Imports

- imports `vue` (named `ref`, `computed`, `watch`)
- imports `vue-router` (named `useRouter`)
- imports `@/stores/cart` (named `useCartStore`)
- imports `@/stores/order` (named `useOrderStore`)

## Exports

- `Cart`
- `RouterLink`

## Symbols

- `Cart` (class, exported): vue component Cart
- `RouterLink` (class, exported): <RouterLink to="/menu" class="btn-primary">
- `router` (variable): const router = useRouter()
- `cartStore` (variable): const cartStore = useCartStore()
- `orderStore` (variable): const orderStore = useOrderStore()
- `customerInfo` (variable): const customerInfo = ref({ name: cartStore.customerName || '', table: cartStore.tableNumber || '', notes: cartStore.notes || '' })
- `submitError` (variable): const submitError = ref('')
- `canSubmit` (variable): const canSubmit = computed(() => { return customerInfo.value.name.trim() && customerInfo.value.table.trim() })
- `hasCustomizations` (variable): const hasCustomizations = (item) => { return item.customizations && Object.keys(item.customizations).length > 0 }
- `formatOptions` (variable): const formatOptions = (item) => { return Object.entries(item.customizations || {}) .map(([key, val]) => `${key}: ${val}`) .join(', ') }
- `formatPrice` (variable): const formatPrice = (price) => { if (!price && price !== 0) return '0' return price.toLocaleString('zh-TW') }
- `getToppingsPrice` (variable): const getToppingsPrice = (item) => { if (!item.toppings || !item.toppings.length) return 0 return item.toppings.reduce((sum, t) => sum + (t.price || 0), 0) }
- `submitOrder` (variable): const submitOrder = async () => { submitError.value = '' if (!customerInfo.value.name.trim()) { submitError.value = '請輸入用餐人姓名' return } if (!customerInfo.value.table.trim()) { s...

## External Dependencies

- `vue`
- `vue-router`
- `@/stores/cart`
- `@/stores/order`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

