---
page_id: 'concept:json'
kind: concept
cssclasses:
  - swarmvault
  - sv-concept
title: json
source_class: first_party
tags:
  - concept
  - candidate
source_ids:
  - hooks-a17f6f95
  - settings-local-7dd62a16
project_ids: []
node_ids:
  - 'concept:json'
freshness: fresh
status: candidate
confidence: 0.8
created_at: '2026-05-03T15:02:59.976Z'
updated_at: '2026-05-03T15:08:40.482Z'
compiled_from:
  - hooks-a17f6f95
  - settings-local-7dd62a16
managed_by: system
backlinks:
  - 'source:hooks-a17f6f95'
  - 'source:settings-local-7dd62a16'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  hooks-a17f6f95: a17f6f95d4075e1e563abfa9d2a8f6c00acb3f884b3eb34a64744a6070a2aee2
  settings-local-7dd62a16: 7dd62a168dfab2a503f55595338105da238a23e0e86cbd8a61eb1371e96bc23f
source_semantic_hashes:
  hooks-a17f6f95: a17f6f95d4075e1e563abfa9d2a8f6c00acb3f884b3eb34a64744a6070a2aee2
  settings-local-7dd62a16: 7dd62a168dfab2a503f55595338105da238a23e0e86cbd8a61eb1371e96bc23f
---
# json

## Summary

Frequently referenced concept in hooks.

## Seen In

- [[sources/hooks-a17f6f95|hooks]]
- [[sources/settings-local-7dd62a16|settings.local]]

## Source Claims

- hooks Format: JSON Top-level: object Size: 1 Nested depth: 6 ## Schema - hooks: object (2 keys) ## Preview json { "hooks": { "SessionStart": [ { "hooks": [ { "type": "command", "command": "node .codex/hooks/swarmvault-graph-first.js session-start" } ] } ], "PreToolUse": [ { "matcher": "Bash", "hooks": [ { "type": "command", "command": "node .codex/hooks/swarmvault-graph-first.js pre-tool-use" } ] } ] } } [source:hooks-a17f6f95]
- settings.local Format: JSON Top-level: object Size: 1 Nested depth: 3 ## Schema - permissions: object (1 keys) ## Preview json { "permissions": { "allow": [ "WebFetch(domain:platform.kimi.ai)" ] } } [source:settings-local-7dd62a16]

