---
page_id: 'source:package-e48f683c'
kind: source
cssclasses:
  - swarmvault
  - sv-source
title: package
source_class: first_party
tags:
  - source
source_ids:
  - package-e48f683c
project_ids: []
node_ids:
  - 'source:package-e48f683c'
  - 'concept:backend'
  - 'concept:frontend'
  - 'concept:build'
  - 'concept:concurrently'
  - 'concept:start'
  - 'concept:blue'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.736Z'
updated_at: '2026-05-03T15:08:39.865Z'
compiled_from:
  - package-e48f683c
managed_by: system
backlinks:
  - 'concept:backend'
  - 'concept:frontend'
  - 'concept:build'
  - 'concept:concurrently'
  - 'concept:start'
  - 'concept:blue'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  package-e48f683c: e48f683cf679f8fc9bb085118ee1dddb95d256761f9ed78efdecb25c5243bae0
source_semantic_hashes:
  package-e48f683c: e48f683cf679f8fc9bb085118ee1dddb95d256761f9ed78efdecb25c5243bae0
---
# package

Source ID: `package-e48f683c`
Source Kind: `text`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/package.json`

Source Class: `first_party`


## Summary

{ "name": "ramen-shop", "version": "1.0.0", "description": "拉麵店點餐系統 - 前後端分離架構", "private": true, "workspaces": [ "backend", "frontend" ], "scripts": { "dev": "concurrently --names "BACKEND,FRONTEND" --prefix-colors "blue,green" "npm run dev -w backend" "npm run dev -w frontend"", "build": "npm run build -w frontend", "start": "npm run start -w backend" }, "devDependencies": { "concurrently": "^8.2.2" }, "engines": { "node": ">=18.0.0" } }

## Concepts

- [[concepts/backend|backend]]: Frequently referenced concept in package.
- [[concepts/frontend|frontend]]: Frequently referenced concept in package.
- [[concepts/build|build]]: Frequently referenced concept in package.
- [[concepts/concurrently|concurrently]]: Frequently referenced concept in package.
- [[concepts/start|start]]: Frequently referenced concept in package.
- [[concepts/blue|blue]]: Frequently referenced concept in package.

## Entities

- None detected.

## Claims

- { "name": "ramen-shop", "version": "1.0.0", "description": "拉麵店點餐系統 - 前後端分離架構", "private": true, "workspaces": [ "backend", "frontend" ], "scripts": { "dev": "concurrently --names "BACKEND,FRONTEND" --prefix-colors "blue,green" "npm run dev -w backend" "npm run dev -w frontend"", "build": "npm run build -w frontend", "start": "npm run start -w backend" }, "devDependencies": { "concurrently": "^8.2.2" }, "engines": { "node": ">=18.0.0" } } [source:package-e48f683c]

## Questions

- How does backend relate to package?
- How does frontend relate to package?
- How does build relate to package?

