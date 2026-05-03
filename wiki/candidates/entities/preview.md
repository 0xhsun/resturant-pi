---
page_id: 'entity:preview'
kind: entity
cssclasses:
  - swarmvault
  - sv-entity
title: Preview
source_class: first_party
tags:
  - entity
  - candidate
source_ids:
  - hooks-a17f6f95
  - package-300fd810
  - package-300fd810
  - settings-17ae6091
  - settings-local-7dd62a16
  - swarmvault-config-b6c23841
project_ids: []
node_ids:
  - 'entity:preview'
freshness: fresh
status: candidate
confidence: 0.95
created_at: '2026-05-03T15:03:00.356Z'
updated_at: '2026-05-03T15:08:41.312Z'
compiled_from:
  - hooks-a17f6f95
  - package-300fd810
  - settings-17ae6091
  - settings-local-7dd62a16
  - swarmvault-config-b6c23841
managed_by: system
backlinks:
  - 'source:hooks-a17f6f95'
  - 'source:package-300fd810'
  - 'source:package-300fd810'
  - 'source:settings-17ae6091'
  - 'source:settings-local-7dd62a16'
  - 'source:swarmvault-config-b6c23841'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  hooks-a17f6f95: a17f6f95d4075e1e563abfa9d2a8f6c00acb3f884b3eb34a64744a6070a2aee2
  package-300fd810: 300fd81090349aa658d920eed7e441a634fc16d281fd4da3c0c7300e21f41813
  settings-17ae6091: 17ae6091f27890f6506be21354e0a806de793ac933011a929c02a3995acacf82
  settings-local-7dd62a16: 7dd62a168dfab2a503f55595338105da238a23e0e86cbd8a61eb1371e96bc23f
  swarmvault-config-b6c23841: b6c2384189fa20d8f52617692a62883a68b118609c509a52cf3351feaa1f9a3e
source_semantic_hashes:
  hooks-a17f6f95: a17f6f95d4075e1e563abfa9d2a8f6c00acb3f884b3eb34a64744a6070a2aee2
  package-300fd810: 300fd81090349aa658d920eed7e441a634fc16d281fd4da3c0c7300e21f41813
  settings-17ae6091: 17ae6091f27890f6506be21354e0a806de793ac933011a929c02a3995acacf82
  settings-local-7dd62a16: 7dd62a168dfab2a503f55595338105da238a23e0e86cbd8a61eb1371e96bc23f
  swarmvault-config-b6c23841: b6c2384189fa20d8f52617692a62883a68b118609c509a52cf3351feaa1f9a3e
---
# Preview

## Summary

Named entity mentioned in hooks.

## Seen In

- [[sources/hooks-a17f6f95|hooks]]
- [[sources/package-300fd810|package]]
- [[sources/package-300fd810|package]]
- [[sources/settings-17ae6091|settings]]
- [[sources/settings-local-7dd62a16|settings.local]]
- [[sources/swarmvault-config-b6c23841|swarmvault.config]]

## Source Claims

- hooks Format: JSON Top-level: object Size: 1 Nested depth: 6 ## Schema - hooks: object (2 keys) ## Preview json { "hooks": { "SessionStart": [ { "hooks": [ { "type": "command", "command": "node .codex/hooks/swarmvault-graph-first.js session-start" } ] } ], "PreToolUse": [ { "matcher": "Bash", "hooks": [ { "type": "command", "command": "node .codex/hooks/swarmvault-graph-first.js pre-tool-use" } ] } ] } } [source:hooks-a17f6f95]
- { "name": "ramen-shop-frontend", "version": "1.0.0", "description": "拉麵店前端 - Vue.js 3", "type": "module", "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview" }, "dependencies": { "vue": "^3.4.15", "vue-router": "^4.2.5", "pinia": "^2.1.7", "axios": "^1.6.5" }, "devDependencies": { "@vitejs/plugin-vue": "^5.0.3", "vite": "^5.0.11", "tailwindcss": "^3.4.1", "postcss": "^8.4.33", "autoprefixer": "^10.4.17", "@tailwindcss/forms": "^0.5.7" } } [source:package-300fd810]
- { "name": "ramen-shop-frontend", "version": "1.0.0", "description": "拉麵店前端 - Vue.js 3", "type": "module", "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview" }, "dependencies": { "vue": "^3.4.15", "vue-router": "^4.2.5", "pinia": "^2.1.7", "axios": "^1.6.5" }, "devDependencies": { "@vitejs/plugin-vue": "^5.0.3", "vite": "^5.0.11", "tailwindcss": "^3.4.1", "postcss": "^8.4.33", "autoprefixer": "^10.4.17", "@tailwindcss/forms": "^0.5.7" } } [source:package-300fd810]
- settings Format: JSON Top-level: object Size: 1 Nested depth: 6 ## Schema - hooks: object (2 keys) ## Preview json { "hooks": { "SessionStart": [ { "matcher": "startup", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "resume", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "clear", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "compact", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] } ], … [source:settings-17ae6091]
- settings.local Format: JSON Top-level: object Size: 1 Nested depth: 3 ## Schema - permissions: object (1 keys) ## Preview json { "permissions": { "allow": [ "WebFetch(domain:platform.kimi.ai)" ] } } [source:settings-local-7dd62a16]
- swarmvault.config Format: JSON Top-level: object Size: 13 Nested depth: 4 ## Schema - workspace: object (5 keys) - providers: object (1 keys) - tasks: object (5 keys) - viewer: object (1 keys) - profile: object (6 keys) - projects: object (0 keys) - agents: array (3 items) - schedules: object (0 keys) - orchestration: object (3 keys) - benchmark: object (3 keys) - repoAnalysis: object (2 keys) - graphSinks: object (0 keys) - retrieval: object (4 keys) ## Preview json { "workspace": { "rawDir": "raw", "wikiDir": "wiki", "stateDir": "state", "agentDir": "agent", "inboxDir": "inbox" }, "providers": { "local": { "type": "heuristic", "model": "heuristic-v1", "capabilities": [ "chat", "structured", "vision", "local" ] } }, "tasks": { "compileProvider": "local", "queryProvider": "local", "lintProvider": "local", "visionProvider": "local", "imageProvider": "local" }, "viewer": { "port": 4123 }, "profile": { "presets": [], "dashboardPack": "default", "guidedSessionMode": "insights_only", "dataviewBlocks": false, "guidedIngestDefault": false, "deepLintDefault": false }, "projects": {}, "agents": [ … [source:swarmvault-config-b6c23841]

