---
page_id: 'module:orderstatus-fdc29b2c'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: OrderStatus module
source_class: first_party
tags:
  - module
  - code
  - vue
source_ids:
  - orderstatus-fdc29b2c
project_ids: []
node_ids:
  - 'module:orderstatus-fdc29b2c'
  - 'symbol:orderstatus-fdc29b2c:orderstatus.class'
  - 'symbol:orderstatus-fdc29b2c:routerlink.class'
  - 'symbol:orderstatus-fdc29b2c:route.variable'
  - 'symbol:orderstatus-fdc29b2c:orderstore.variable'
  - 'symbol:orderstatus-fdc29b2c:isrefreshing.variable'
  - 'symbol:orderstatus-fdc29b2c:refreshinterval.variable'
  - 'symbol:orderstatus-fdc29b2c:orderid.variable'
  - 'symbol:orderstatus-fdc29b2c:order.variable'
  - 'symbol:orderstatus-fdc29b2c:statussteps.variable'
  - 'symbol:orderstatus-fdc29b2c:currentstatus.variable'
  - 'symbol:orderstatus-fdc29b2c:getstepclass.variable'
  - 'symbol:orderstatus-fdc29b2c:isstepactive.variable'
  - 'symbol:orderstatus-fdc29b2c:isstepcompleted.variable'
  - 'symbol:orderstatus-fdc29b2c:getsteptime.variable'
  - 'symbol:orderstatus-fdc29b2c:formatprice.variable'
  - 'symbol:orderstatus-fdc29b2c:refreshstatus.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.728Z'
updated_at: '2026-05-03T15:08:39.839Z'
compiled_from:
  - orderstatus-fdc29b2c
managed_by: system
backlinks:
  - 'source:orderstatus-fdc29b2c'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  orderstatus-fdc29b2c: fdc29b2ca7f313fbb5eca972b627d5ee7cb406b190aa366c17676883c8ebf607
source_semantic_hashes:
  orderstatus-fdc29b2c: fdc29b2ca7f313fbb5eca972b627d5ee7cb406b190aa366c17676883c8ebf607
related_page_ids:
  - 'source:orderstatus-fdc29b2c'
related_node_ids: []
related_source_ids:
  - orderstatus-fdc29b2c
language: vue
---
# OrderStatus module

Source ID: `orderstatus-fdc29b2c`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/frontend/src/views/OrderStatus.vue`
Repo Path: `frontend/src/views/OrderStatus.vue`
Source Class: `first_party`
Language: `vue`
Module Name: `frontend/src/views/OrderStatus`
Source Page: [[sources/orderstatus-fdc29b2c|OrderStatus]]

## Summary

OrderStatus is a vue module, defining 16 top-level symbol(s), exporting 2 symbol(s), depending on 3 external package import(s).

## Imports

- imports `vue` (named `ref`, `computed`, `onMounted`, `onUnmounted`)
- imports `vue-router` (named `useRoute`)
- imports `@/stores/order` (named `useOrderStore`)

## Exports

- `OrderStatus`
- `RouterLink`

## Symbols

- `OrderStatus` (class, exported): vue component OrderStatus
- `RouterLink` (class, exported): <RouterLink to="/menu" class="flex-1 btn-primary text-center">
- `route` (variable): const route = useRoute()
- `orderStore` (variable): const orderStore = useOrderStore()
- `isRefreshing` (variable): const isRefreshing = ref(false)
- `refreshInterval` (variable): let refreshInterval = null
- `orderId` (variable): const orderId = computed(() => route.params.id)
- `order` (variable): const order = computed(() => orderStore.currentOrder)
- `statusSteps` (variable): const statusSteps = [ { status: 'pending', label: '訂單已接收', description: '廚房已收到您的訂單', icon: '📝' }, { status: 'preparing', label: '製作中', description: '師傅正在精心製作', icon: '👨‍🍳' },...
- `currentStatus` (variable): const currentStatus = computed(() => { return orderStore.orderStatus?.status || order.value?.status || 'pending' })
- `getStepClass` (variable): const getStepClass = (status) => { if (isStepActive(status)) { return 'bg-accent text-white animate-pulse' } if (isStepCompleted(status)) { return 'bg-accent/20 text-accent' } r...
- `isStepActive` (variable): const isStepActive = (status) => { return currentStatus.value === status }
- `isStepCompleted` (variable): const isStepCompleted = (status) => { const statusOrder = ['pending', 'preparing', 'ready', 'served'] const currentIndex = statusOrder.indexOf(currentStatus.value) const stepInd...
- `getStepTime` (variable): const getStepTime = (status) => { // Would return actual timestamp from order data return null }
- `formatPrice` (variable): const formatPrice = (price) => { return price?.toLocaleString('zh-TW') || '0' }
- `refreshStatus` (variable): const refreshStatus = async () => { isRefreshing.value = true try { await orderStore.fetchOrderStatus(orderId.value) } finally { isRefreshing.value = false } }

## External Dependencies

- `vue`
- `vue-router`
- `@/stores/order`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- `getStepClass` calls `isStepActive`
- `getStepClass` calls `isStepCompleted`

## Diagnostics

- No parser diagnostics.

