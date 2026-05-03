---
page_id: 'module:airecommend-c6eef46d'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: AIRecommend module
source_class: first_party
tags:
  - module
  - code
  - vue
source_ids:
  - airecommend-c6eef46d
project_ids: []
node_ids:
  - 'module:airecommend-c6eef46d'
  - 'symbol:airecommend-c6eef46d:airecommend.class'
  - 'symbol:airecommend-c6eef46d:router.variable'
  - 'symbol:airecommend-c6eef46d:cartstore.variable'
  - 'symbol:airecommend-c6eef46d:isloading.variable'
  - 'symbol:airecommend-c6eef46d:recommendation.variable'
  - 'symbol:airecommend-c6eef46d:tasteoptions.variable'
  - 'symbol:airecommend-c6eef46d:spicylevels.variable'
  - 'symbol:airecommend-c6eef46d:dietaryoptions.variable'
  - 'symbol:airecommend-c6eef46d:preferences.variable'
  - 'symbol:airecommend-c6eef46d:hasvalidpreferences.variable'
  - 'symbol:airecommend-c6eef46d:togglepreference.variable'
  - 'symbol:airecommend-c6eef46d:getrecommendation.variable'
  - 'symbol:airecommend-c6eef46d:addtocart.variable'
  - 'symbol:airecommend-c6eef46d:viewdetail.variable'
  - 'symbol:airecommend-c6eef46d:reset.variable'
  - 'symbol:airecommend-c6eef46d:formatprice.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.511Z'
updated_at: '2026-05-03T15:08:39.144Z'
compiled_from:
  - airecommend-c6eef46d
managed_by: system
backlinks:
  - 'source:airecommend-c6eef46d'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  airecommend-c6eef46d: c6eef46da0da1f2c71251a4160007b512ce2df7c532869341412298686f00940
source_semantic_hashes:
  airecommend-c6eef46d: c6eef46da0da1f2c71251a4160007b512ce2df7c532869341412298686f00940
related_page_ids:
  - 'source:airecommend-c6eef46d'
related_node_ids: []
related_source_ids:
  - airecommend-c6eef46d
language: vue
---
# AIRecommend module

Source ID: `airecommend-c6eef46d`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/frontend/src/views/AIRecommend.vue`
Repo Path: `frontend/src/views/AIRecommend.vue`
Source Class: `first_party`
Language: `vue`
Module Name: `frontend/src/views/AIRecommend`
Source Page: [[sources/airecommend-c6eef46d|AIRecommend]]

## Summary

AIRecommend is a vue module, defining 16 top-level symbol(s), exporting 1 symbol(s), depending on 4 external package import(s).

## Imports

- imports `vue` (named `ref`, `computed`)
- imports `vue-router` (named `useRouter`)
- imports `@/stores/cart` (named `useCartStore`)
- imports `@/services/api` (named `aiApi`)

## Exports

- `AIRecommend`

## Symbols

- `AIRecommend` (class, exported): vue component AIRecommend
- `router` (variable): const router = useRouter()
- `cartStore` (variable): const cartStore = useCartStore()
- `isLoading` (variable): const isLoading = ref(false)
- `recommendation` (variable): const recommendation = ref(null)
- `tasteOptions` (variable): const tasteOptions = [ { value: 'rich', label: '濃郁', icon: '🍜' }, { value: 'light', label: '清淡', icon: '🌿' }, { value: 'salty', label: '鹹香', icon: '🧂' }, { value: 'sweet', la...
- `spicyLevels` (variable): const spicyLevels = [ { value: 0, label: '不辣', icon: '😊' }, { value: 1, label: '微辣', icon: '🌶️' }, { value: 2, label: '中辣', icon: '🌶️🌶️' }, { value: 3, label: '大辣', icon: '�...
- `dietaryOptions` (variable): const dietaryOptions = [ { value: 'vegetarian', label: '素食' }, { value: 'no-pork', label: '不吃豬肉' }, { value: 'no-garlic', label: '不吃蒜' }, { value: 'low-sodium', label: '低鈉' } ]
- `preferences` (variable): const preferences = ref({ taste: [], spicy: 0, dietary: [], notes: '' })
- `hasValidPreferences` (variable): const hasValidPreferences = computed(() => { return preferences.value.taste.length > 0 })
- `togglePreference` (variable): const togglePreference = (type, value) => { const arr = preferences.value[type] const index = arr.indexOf(value) if (index > -1) { arr.splice(index, 1) } else { arr.push(value) } }
- `getRecommendation` (variable): const getRecommendation = async () => { isLoading.value = true try { const response = await aiApi.recommend(preferences.value) recommendation.value = response.data.data } catch ...
- `addToCart` (variable): const addToCart = (menu) => { cartStore.addItem(menu, { quantity: 1 }) router.push('/cart') }
- `viewDetail` (variable): const viewDetail = (menu) => { router.push(`/menu/${menu.id}`) }
- `reset` (variable): const reset = () => { recommendation.value = null preferences.value = { taste: [], spicy: 0, dietary: [], notes: '' } }
- `formatPrice` (variable): const formatPrice = (price) => { return price?.toLocaleString('zh-TW') || '0' }

## External Dependencies

- `vue`
- `vue-router`
- `@/stores/cart`
- `@/services/api`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

