---
page_id: 'concept:build'
kind: concept
cssclasses:
  - swarmvault
  - sv-concept
title: build
source_class: first_party
tags:
  - concept
  - candidate
source_ids:
  - dependencies-84851231
  - package-300fd810
  - package-e48f683c
  - projects-6586298f
project_ids: []
node_ids:
  - 'concept:build'
freshness: fresh
status: candidate
confidence: 0.95
created_at: '2026-05-03T15:02:59.909Z'
updated_at: '2026-05-03T15:08:40.338Z'
compiled_from:
  - dependencies-84851231
  - package-300fd810
  - package-e48f683c
  - projects-6586298f
managed_by: system
backlinks:
  - 'source:dependencies-84851231'
  - 'source:package-300fd810'
  - 'source:package-e48f683c'
  - 'source:projects-6586298f'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  dependencies-84851231: 848512314e10d10ab9334698f0f3874126eb95d8c214d8623ab1254bd6b7f04a
  package-300fd810: 300fd81090349aa658d920eed7e441a634fc16d281fd4da3c0c7300e21f41813
  package-e48f683c: e48f683cf679f8fc9bb085118ee1dddb95d256761f9ed78efdecb25c5243bae0
  projects-6586298f: 6586298f00aa5e627ae275229732239c79e06e6c04edc5458d24dbe9dd79c774
source_semantic_hashes:
  dependencies-84851231: 848512314e10d10ab9334698f0f3874126eb95d8c214d8623ab1254bd6b7f04a
  package-300fd810: 300fd81090349aa658d920eed7e441a634fc16d281fd4da3c0c7300e21f41813
  package-e48f683c: e48f683cf679f8fc9bb085118ee1dddb95d256761f9ed78efdecb25c5243bae0
  projects-6586298f: c17f3824f10f7496c534034df6643e9aab08bdb9431f5d9bfa9f2ac000bf6187
---
# build

## Summary

Frequently referenced concept in Dependencies.

## Seen In

- [[sources/dependencies-84851231|Dependencies]]
- [[sources/package-300fd810|package]]
- [[sources/package-e48f683c|package]]
- [[sources/projects-6586298f|Projects]]

## Source Claims

- .local backend/.env frontend/.env # Build outputs dist/ build/ /dist/ /build/ # Logs logs/ .log npm-debug.log yarn-debug.log yarn-error.log pnpm-debug.log* # Editor .vscode/* !.vscode/extensions.json .idea/ *.suo .ntvs *.njsproj *.sln *.sw? [source:dependencies-84851231]
- { "name": "ramen-shop-frontend", "version": "1.0.0", "description": "拉麵店前端 - Vue.js 3", "type": "module", "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview" }, "dependencies": { "vue": "^3.4.15", "vue-router": "^4.2.5", "pinia": "^2.1.7", "axios": "^1.6.5" }, "devDependencies": { "@vitejs/plugin-vue": "^5.0.3", "vite": "^5.0.11", "tailwindcss": "^3.4.1", "postcss": "^8.4.33", "autoprefixer": "^10.4.17", "@tailwindcss/forms": "^0.5.7" } } [source:package-300fd810]
- { "name": "ramen-shop", "version": "1.0.0", "description": "拉麵店點餐系統 - 前後端分離架構", "private": true, "workspaces": [ "backend", "frontend" ], "scripts": { "dev": "concurrently --names "BACKEND,FRONTEND" --prefix-colors "blue,green" "npm run dev -w backend" "npm run dev -w frontend"", "build": "npm run build -w frontend", "start": "npm run start -w backend" }, "devDependencies": { "concurrently": "^8.2.2" }, "engines": { "node": ">=18.0.0" } } [source:package-e48f683c]
- title: Projects tags: index, projects # Projects - Run swarmvault compile to build project rollups. [source:projects-6586298f]

