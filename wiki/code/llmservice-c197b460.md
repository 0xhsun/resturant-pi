---
page_id: 'module:llmservice-c197b460'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: llmService module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - llmservice-c197b460
project_ids: []
node_ids:
  - 'module:llmservice-c197b460'
  - 'symbol:llmservice-c197b460:chatcompletion.function'
  - 'symbol:llmservice-c197b460:simplechat.function'
  - 'symbol:llmservice-c197b460:streamchat.function'
  - 'symbol:llmservice-c197b460:getavailablemodels.function'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.640Z'
updated_at: '2026-05-03T15:08:39.558Z'
compiled_from:
  - llmservice-c197b460
managed_by: system
backlinks:
  - 'source:llmservice-c197b460'
  - 'module:kimi-openai-bacf808f'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  llmservice-c197b460: c197b4601f5409a8116074879c3ffa8d2fb9f57fda13ddbc2158afbc262aa3c5
source_semantic_hashes:
  llmservice-c197b460: c197b4601f5409a8116074879c3ffa8d2fb9f57fda13ddbc2158afbc262aa3c5
related_page_ids:
  - 'source:llmservice-c197b460'
  - 'module:kimi-openai-bacf808f'
related_node_ids: []
related_source_ids:
  - llmservice-c197b460
  - kimi-openai-bacf808f
language: javascript
---
# llmService module

Source ID: `llmservice-c197b460`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/services/llmService.js`
Repo Path: `backend/src/services/llmService.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/services/llmService`
Source Page: [[sources/llmservice-c197b460|llmService]]

## Summary

llmService is a javascript module, defining 4 top-level symbol(s), exporting 4 symbol(s), importing 1 local module(s).

## Imports

- imports [[code/kimi-openai-bacf808f|kimi-openai module]] (named `kimiClient`, `validateApiKey`, `llmOptions`, `KIMI_MODELS`, `getModelDescription`, `getValidTemperature`, `getValidTopP`)

## Exports

- `chatCompletion`
- `simpleChat`
- `streamChat`
- `getAvailableModels`

## Symbols

- `chatCompletion` (function, exported): export async function chatCompletion(messages, options = {})
- `simpleChat` (function, exported): export async function simpleChat(prompt, options = {})
- `streamChat` (function, exported): export async function* streamChat(messages, options = {})
- `getAvailableModels` (function, exported): export async function getAvailableModels()

## External Dependencies

- No external dependencies detected.

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- `simpleChat` calls `chatCompletion`

## Diagnostics

- No parser diagnostics.

