---
page_id: 'module:database-446e2fb1'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: database module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - database-446e2fb1
project_ids: []
node_ids:
  - 'module:database-446e2fb1'
  - 'symbol:database-446e2fb1:dbconfig.variable'
  - 'symbol:database-446e2fb1:pool.variable'
  - 'symbol:database-446e2fb1:testconnection.variable'
  - 'symbol:database-446e2fb1:query.variable'
  - 'symbol:database-446e2fb1:transaction.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.580Z'
updated_at: '2026-05-03T15:08:39.364Z'
compiled_from:
  - database-446e2fb1
managed_by: system
backlinks:
  - 'source:database-446e2fb1'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  database-446e2fb1: 446e2fb19a8e23286ec760865f27562314547597bb6c32cc91ac4571d31a67e3
source_semantic_hashes:
  database-446e2fb1: 446e2fb19a8e23286ec760865f27562314547597bb6c32cc91ac4571d31a67e3
related_page_ids:
  - 'source:database-446e2fb1'
related_node_ids: []
related_source_ids:
  - database-446e2fb1
language: javascript
---
# database module

Source ID: `database-446e2fb1`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/config/database.js`
Repo Path: `backend/src/config/database.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/config/database`
Source Page: [[sources/database-446e2fb1|database]]

## Summary

database is a javascript module, defining 5 top-level symbol(s), exporting 0 symbol(s), depending on 2 external package import(s).

## Imports

- imports `mysql2/promise.js` (default `mysql`)
- imports `dotenv` (default `dotenv`)

## Exports

- `pool`
- `query`
- `transaction`
- `testConnection`

## Symbols

- `dbConfig` (variable): const dbConfig = { host: process.env.DB_HOST || 'localhost', port: parseInt(process.env.DB_PORT) || 3306, user: process.env.DB_USER || 'root', password: process.env.DB_PASSWORD ...
- `pool` (variable): const pool = mysql.createPool(dbConfig);
- `testConnection` (variable): const testConnection = async () => { try { const connection = await pool.getConnection(); console.log('✅ MySQL 資料庫連線成功'); connection.release(); return true; } catch (error) { co...
- `query` (variable): const query = async (sql, params) => { const [rows] = await pool.execute(sql, params); return rows; };
- `transaction` (variable): const transaction = async (callback) => { const connection = await pool.getConnection(); await connection.beginTransaction(); try { const result = await callback(connection); aw...

## External Dependencies

- `mysql2/promise.js`
- `dotenv`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

