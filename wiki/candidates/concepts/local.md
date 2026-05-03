---
page_id: 'concept:local'
kind: concept
cssclasses:
  - swarmvault
  - sv-concept
title: local
source_class: first_party
tags:
  - concept
  - candidate
source_ids:
  - dependencies-84851231
  - swarmvault-config-b6c23841
project_ids: []
node_ids:
  - 'concept:local'
freshness: fresh
status: candidate
confidence: 0.8
created_at: '2026-05-03T15:02:59.919Z'
updated_at: '2026-05-03T15:08:40.358Z'
compiled_from:
  - dependencies-84851231
  - swarmvault-config-b6c23841
managed_by: system
backlinks:
  - 'source:dependencies-84851231'
  - 'source:swarmvault-config-b6c23841'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  dependencies-84851231: 848512314e10d10ab9334698f0f3874126eb95d8c214d8623ab1254bd6b7f04a
  swarmvault-config-b6c23841: b6c2384189fa20d8f52617692a62883a68b118609c509a52cf3351feaa1f9a3e
source_semantic_hashes:
  dependencies-84851231: 848512314e10d10ab9334698f0f3874126eb95d8c214d8623ab1254bd6b7f04a
  swarmvault-config-b6c23841: b6c2384189fa20d8f52617692a62883a68b118609c509a52cf3351feaa1f9a3e
---
# local

## Summary

Frequently referenced concept in Dependencies.

## Seen In

- [[sources/dependencies-84851231|Dependencies]]
- [[sources/swarmvault-config-b6c23841|swarmvault.config]]

## Source Claims

- Dependencies node_modules/ /node_modules/ .pnpm-store/ # Environment .env .env.local .env. [source:dependencies-84851231]
- .local backend/.env frontend/.env # Build outputs dist/ build/ /dist/ /build/ # Logs logs/ .log npm-debug.log yarn-debug.log yarn-error.log pnpm-debug.log* # Editor .vscode/* !.vscode/extensions.json .idea/ *.suo .ntvs *.njsproj *.sln *.sw? [source:dependencies-84851231]
- # OS .DS_Store Thumbs.db # Database *.sqlite *.sqlite3 mysql-data/ # Agent runtime (local only) .pi/active.lock .pi/side-agents/merge.lock # Testing coverage/ .nyc_output/ .pi [source:dependencies-84851231]
- swarmvault.config Format: JSON Top-level: object Size: 13 Nested depth: 4 ## Schema - workspace: object (5 keys) - providers: object (1 keys) - tasks: object (5 keys) - viewer: object (1 keys) - profile: object (6 keys) - projects: object (0 keys) - agents: array (3 items) - schedules: object (0 keys) - orchestration: object (3 keys) - benchmark: object (3 keys) - repoAnalysis: object (2 keys) - graphSinks: object (0 keys) - retrieval: object (4 keys) ## Preview json { "workspace": { "rawDir": "raw", "wikiDir": "wiki", "stateDir": "state", "agentDir": "agent", "inboxDir": "inbox" }, "providers": { "local": { "type": "heuristic", "model": "heuristic-v1", "capabilities": [ "chat", "structured", "vision", "local" ] } }, "tasks": { "compileProvider": "local", "queryProvider": "local", "lintProvider": "local", "visionProvider": "local", "imageProvider": "local" }, "viewer": { "port": 4123 }, "profile": { "presets": [], "dashboardPack": "default", "guidedSessionMode": "insights_only", "dataviewBlocks": false, "guidedIngestDefault": false, "deepLintDefault": false }, "projects": {}, "agents": [ … [source:swarmvault-config-b6c23841]

