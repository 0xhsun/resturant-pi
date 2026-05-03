---
page_id: 'source:database-446e2fb1'
kind: source
cssclasses:
  - swarmvault
  - sv-source
title: database
source_class: first_party
tags:
  - source
  - code
source_ids:
  - database-446e2fb1
project_ids: []
node_ids:
  - 'source:database-446e2fb1'
  - 'module:database-446e2fb1'
  - 'symbol:database-446e2fb1:dbconfig.variable'
  - 'symbol:database-446e2fb1:pool.variable'
  - 'symbol:database-446e2fb1:testconnection.variable'
  - 'symbol:database-446e2fb1:query.variable'
  - 'symbol:database-446e2fb1:transaction.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.578Z'
updated_at: '2026-05-03T15:08:39.355Z'
compiled_from:
  - database-446e2fb1
managed_by: system
backlinks:
  - 'module:database-446e2fb1'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  database-446e2fb1: 446e2fb19a8e23286ec760865f27562314547597bb6c32cc91ac4571d31a67e3
source_semantic_hashes:
  database-446e2fb1: 446e2fb19a8e23286ec760865f27562314547597bb6c32cc91ac4571d31a67e3
---
# database

Source ID: `database-446e2fb1`
Source Kind: `code`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/config/database.js`

Source Class: `first_party`


## Summary

database is a javascript module, defining 5 top-level symbol(s), exporting 0 symbol(s), depending on 2 external package import(s).

## Code Module

- Language: `javascript`
- Module Page: [[code/database-446e2fb1|database module]]
- Exports: pool, query, transaction, testConnection
- Symbols: dbConfig, pool, testConnection, query, transaction
- Diagnostics: None.

## Concepts

- None detected.

## Entities

- None detected.

## Claims

- database exports pool, query, transaction, testConnection. [source:database-446e2fb1]
- database defines dbConfig, pool, testConnection, query, transaction. [source:database-446e2fb1]
- database imports mysql2/promise.js, dotenv. [source:database-446e2fb1]

## Questions

- Which downstream pages should explain how database exports are consumed?
- Why does database depend on mysql2/promise.js?
- What broader responsibility does database serve in the codebase?

