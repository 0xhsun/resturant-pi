---
page_id: 'module:test-llm-8210f894'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: test-llm module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - test-llm-8210f894
project_ids: []
node_ids:
  - 'module:test-llm-8210f894'
  - 'symbol:test-llm-8210f894:testconnection.function'
  - 'symbol:test-llm-8210f894:testmodels.function'
  - 'symbol:test-llm-8210f894:testsimplechat.function'
  - 'symbol:test-llm-8210f894:testchatcompletion.function'
  - 'symbol:test-llm-8210f894:testdirectsdk.function'
  - 'symbol:test-llm-8210f894:runtests.function'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.800Z'
updated_at: '2026-05-03T15:08:40.076Z'
compiled_from:
  - test-llm-8210f894
managed_by: system
backlinks:
  - 'source:test-llm-8210f894'
  - 'module:llmservice-c197b460'
  - 'module:kimi-openai-bacf808f'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  test-llm-8210f894: 8210f894fb9bdb9b0e056275790baf95442a2060747b8219ab430a60898a7d08
source_semantic_hashes:
  test-llm-8210f894: 8210f894fb9bdb9b0e056275790baf95442a2060747b8219ab430a60898a7d08
related_page_ids:
  - 'source:test-llm-8210f894'
  - 'module:llmservice-c197b460'
  - 'module:kimi-openai-bacf808f'
related_node_ids: []
related_source_ids:
  - test-llm-8210f894
  - llmservice-c197b460
  - kimi-openai-bacf808f
language: javascript
---
# test-llm module

Source ID: `test-llm-8210f894`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/scripts/test-llm.js`
Repo Path: `backend/scripts/test-llm.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/scripts/test-llm`
Source Page: [[sources/test-llm-8210f894|test-llm]]

## Summary

test-llm is a javascript module, defining 6 top-level symbol(s), exporting 0 symbol(s), importing 2 local module(s), depending on 1 external package import(s).

## Imports

- imports `dotenv` (default `dotenv`)
- imports [[code/llmservice-c197b460|llmService module]] (named `chatCompletion`, `simpleChat`, `getAvailableModels`)
- imports [[code/kimi-openai-bacf808f|kimi-openai module]] (named `kimiClient`, `validateApiKey`)

## Exports

- No exports detected.

## Symbols

- `testConnection` (function): async function testConnection()
- `testModels` (function): async function testModels()
- `testSimpleChat` (function): async function testSimpleChat()
- `testChatCompletion` (function): async function testChatCompletion()
- `testDirectSDK` (function): async function testDirectSDK()
- `runTests` (function): async function runTests()

## External Dependencies

- `dotenv`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- `runTests` calls `testConnection`
- `runTests` calls `testModels`
- `runTests` calls `testSimpleChat`
- `runTests` calls `testChatCompletion`
- `runTests` calls `testDirectSDK`

## Diagnostics

- No parser diagnostics.

