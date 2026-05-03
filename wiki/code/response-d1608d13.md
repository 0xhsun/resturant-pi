---
page_id: 'module:response-d1608d13'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: response module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - response-d1608d13
project_ids: []
node_ids:
  - 'module:response-d1608d13'
  - 'symbol:response-d1608d13:success.variable'
  - 'symbol:response-d1608d13:error.variable'
  - 'symbol:response-d1608d13:errorresponse.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.760Z'
updated_at: '2026-05-03T15:08:39.947Z'
compiled_from:
  - response-d1608d13
managed_by: system
backlinks:
  - 'source:response-d1608d13'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  response-d1608d13: d1608d13593114c82a67cd7fc89715b27efd4ebc3865c51577f77d3d4e4393e5
source_semantic_hashes:
  response-d1608d13: d1608d13593114c82a67cd7fc89715b27efd4ebc3865c51577f77d3d4e4393e5
related_page_ids:
  - 'source:response-d1608d13'
related_node_ids: []
related_source_ids:
  - response-d1608d13
language: javascript
---
# response module

Source ID: `response-d1608d13`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/utils/response.js`
Repo Path: `backend/src/utils/response.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/utils/response`
Source Page: [[sources/response-d1608d13|response]]

## Summary

response is a javascript module, defining 3 top-level symbol(s), exporting 0 symbol(s).

## Imports

- No imports detected.

## Exports

- `success`
- `error`
- `errorResponse`

## Symbols

- `success` (variable): const success = (data = null, message = '操作成功') => { return { success: true, data, message }; };
- `error` (variable): const error = (message = '操作失敗', statusCode = 500) => { const err = new Error(message); err.statusCode = statusCode; return err; };
- `errorResponse` (variable): const errorResponse = (message = '操作失敗') => { return { success: false, data: null, message }; };

## External Dependencies

- No external dependencies detected.

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

