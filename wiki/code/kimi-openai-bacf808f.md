---
page_id: 'module:kimi-openai-bacf808f'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: kimi-openai module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - kimi-openai-bacf808f
project_ids: []
node_ids:
  - 'module:kimi-openai-bacf808f'
  - 'symbol:kimi-openai-bacf808f:validateapikey.function'
  - 'symbol:kimi-openai-bacf808f:kimiclient.variable'
  - 'symbol:kimi-openai-bacf808f:kimi-models.variable'
  - 'symbol:kimi-openai-bacf808f:model-constraints.variable'
  - 'symbol:kimi-openai-bacf808f:getvalidtemperature.function'
  - 'symbol:kimi-openai-bacf808f:getvalidtopp.function'
  - 'symbol:kimi-openai-bacf808f:llmoptions.variable'
  - 'symbol:kimi-openai-bacf808f:getmodeldescription.function'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.630Z'
updated_at: '2026-05-03T15:08:39.524Z'
compiled_from:
  - kimi-openai-bacf808f
managed_by: system
backlinks:
  - 'source:kimi-openai-bacf808f'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  kimi-openai-bacf808f: bacf808fc2379830a3b0ab625229f60ba9a4ccb8a4b055e3f0a0d6d92e0e4ec4
source_semantic_hashes:
  kimi-openai-bacf808f: bacf808fc2379830a3b0ab625229f60ba9a4ccb8a4b055e3f0a0d6d92e0e4ec4
related_page_ids:
  - 'source:kimi-openai-bacf808f'
related_node_ids: []
related_source_ids:
  - kimi-openai-bacf808f
language: javascript
---
# kimi-openai module

Source ID: `kimi-openai-bacf808f`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/config/kimi-openai.js`
Repo Path: `backend/src/config/kimi-openai.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/config/kimi-openai`
Source Page: [[sources/kimi-openai-bacf808f|kimi-openai]]

## Summary

kimi-openai is a javascript module, defining 8 top-level symbol(s), exporting 8 symbol(s), depending on 2 external package import(s).

## Imports

- imports `openai` (default `OpenAI`)
- imports `dotenv` (default `dotenv`)

## Exports

- `validateApiKey`
- `kimiClient`
- `KIMI_MODELS`
- `MODEL_CONSTRAINTS`
- `getValidTemperature`
- `getValidTopP`
- `llmOptions`
- `getModelDescription`

## Symbols

- `validateApiKey` (function, exported): export function validateApiKey()
- `kimiClient` (variable, exported): export const kimiClient = new OpenAI({ apiKey: process.env.MOONSHOT_API_KEY, baseURL: 'https://api.moonshot.ai/v1', });
- `KIMI_MODELS` (variable, exported): export const KIMI_MODELS = { // Kimi K2.6 系列 - 最新最強大多模態模型（推薦） // 注意: temperature 固定為 1，不可修改 KIMI_K2_6: 'kimi-k2.6', // Kimi K2.5 系列 KIMI_K2_5: 'kimi-k2.5', // Kimi K2 思考模型 KIMI_...
- `MODEL_CONSTRAINTS` (variable, exported): export const MODEL_CONSTRAINTS = { 'kimi-k2.6': { temperature: { fixed: true, value: 1 }, top_p: { fixed: true, value: 0.95 }, description: 'temperature 固定為 1，top_p 固定為 0.95', }...
- `getValidTemperature` (function, exported): export function getValidTemperature(modelId, requestedTemp = 0.7)
- `getValidTopP` (function, exported): export function getValidTopP(modelId, requestedTopP = 1)
- `llmOptions` (variable, exported): export const llmOptions = { defaultModel: KIMI_MODELS.DEFAULT, defaultTemperature: 0.7, defaultMaxTokens: 2048, defaultTopP: 1, };
- `getModelDescription` (function, exported): export function getModelDescription(modelId)

## External Dependencies

- `openai`
- `dotenv`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

