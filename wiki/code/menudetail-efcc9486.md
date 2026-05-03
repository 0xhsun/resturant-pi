---
page_id: 'module:menudetail-efcc9486'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: MenuDetail module
source_class: first_party
tags:
  - module
  - code
  - vue
source_ids:
  - menudetail-efcc9486
project_ids: []
node_ids:
  - 'module:menudetail-efcc9486'
  - 'symbol:menudetail-efcc9486:menudetail.class'
  - 'symbol:menudetail-efcc9486:routerlink.class'
  - 'symbol:menudetail-efcc9486:route.variable'
  - 'symbol:menudetail-efcc9486:router.variable'
  - 'symbol:menudetail-efcc9486:menustore.variable'
  - 'symbol:menudetail-efcc9486:cartstore.variable'
  - 'symbol:menudetail-efcc9486:quantity.variable'
  - 'symbol:menudetail-efcc9486:selectedoptions.variable'
  - 'symbol:menudetail-efcc9486:selectedtoppings.variable'
  - 'symbol:menudetail-efcc9486:menuid.variable'
  - 'symbol:menudetail-efcc9486:menu.variable'
  - 'symbol:menudetail-efcc9486:customizations.variable'
  - 'symbol:menudetail-efcc9486:totalprice.variable'
  - 'symbol:menudetail-efcc9486:toggletopping.variable'
  - 'symbol:menudetail-efcc9486:addtocart.variable'
  - 'symbol:menudetail-efcc9486:formatprice.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.677Z'
updated_at: '2026-05-03T15:08:39.678Z'
compiled_from:
  - menudetail-efcc9486
managed_by: system
backlinks:
  - 'source:menudetail-efcc9486'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  menudetail-efcc9486: efcc948644fb4c84fd0ba5e007c7465f23bd4d19ae18376a810be76120ee84c2
source_semantic_hashes:
  menudetail-efcc9486: efcc948644fb4c84fd0ba5e007c7465f23bd4d19ae18376a810be76120ee84c2
related_page_ids:
  - 'source:menudetail-efcc9486'
related_node_ids: []
related_source_ids:
  - menudetail-efcc9486
language: vue
---
# MenuDetail module

Source ID: `menudetail-efcc9486`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/frontend/src/views/MenuDetail.vue`
Repo Path: `frontend/src/views/MenuDetail.vue`
Source Class: `first_party`
Language: `vue`
Module Name: `frontend/src/views/MenuDetail`
Source Page: [[sources/menudetail-efcc9486|MenuDetail]]

## Summary

MenuDetail is a vue module, defining 16 top-level symbol(s), exporting 2 symbol(s), depending on 4 external package import(s).

## Imports

- imports `vue` (named `ref`, `computed`, `onMounted`)
- imports `vue-router` (named `useRoute`, `useRouter`)
- imports `@/stores/menu` (named `useMenuStore`)
- imports `@/stores/cart` (named `useCartStore`)

## Exports

- `MenuDetail`
- `RouterLink`

## Symbols

- `MenuDetail` (class, exported): vue component MenuDetail
- `RouterLink` (class, exported): <RouterLink to="/menu" class="text-accent hover:underline">
- `route` (variable): const route = useRoute()
- `router` (variable): const router = useRouter()
- `menuStore` (variable): const menuStore = useMenuStore()
- `cartStore` (variable): const cartStore = useCartStore()
- `quantity` (variable): const quantity = ref(1)
- `selectedOptions` (variable): const selectedOptions = ref({})
- `selectedToppings` (variable): const selectedToppings = ref([])
- `menuId` (variable): const menuId = computed(() => route.params.id)
- `menu` (variable): const menu = computed(() => menuStore.getMenuById(menuId.value) || menuStore.currentMenu)
- `customizations` (variable): const customizations = ref([ { id: 1, name: '湯頭濃度', options: [ { id: 'light', name: '清淡', extraPrice: 0 }, { id: 'normal', name: '正常', extraPrice: 0 }, { id: 'rich', name: '濃厚',...
- `totalPrice` (variable): const totalPrice = computed(() => { const basePrice = Number(menu.value?.price || 0) const toppingsPrice = selectedToppings.value.reduce((sum, t) => sum + Number(t.price || 0), ...
- `toggleTopping` (variable): const toggleTopping = (topping) => { const index = selectedToppings.value.findIndex(t => t.id === topping.id) if (index > -1) { selectedToppings.value.splice(index, 1) } else { ...
- `addToCart` (variable): const addToCart = () => { if (!menu.value) return cartStore.addItem(menu.value, { quantity: quantity.value, customizations: selectedOptions.value, toppings: selectedToppings.val...
- `formatPrice` (variable): const formatPrice = (price) => { const n = Number(price) return isNaN(n) ? '0' : n.toLocaleString('zh-TW') }

## External Dependencies

- `vue`
- `vue-router`
- `@/stores/menu`
- `@/stores/cart`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

