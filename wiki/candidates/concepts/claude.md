---
page_id: 'concept:claude'
kind: concept
cssclasses:
  - swarmvault
  - sv-concept
title: claude
source_class: first_party
tags:
  - concept
  - candidate
source_ids:
  - settings-17ae6091
project_ids: []
node_ids:
  - 'concept:claude'
freshness: fresh
status: candidate
confidence: 0.65
created_at: '2026-05-03T15:03:00.187Z'
updated_at: '2026-05-03T15:08:40.942Z'
compiled_from:
  - settings-17ae6091
managed_by: system
backlinks:
  - 'source:settings-17ae6091'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  settings-17ae6091: 17ae6091f27890f6506be21354e0a806de793ac933011a929c02a3995acacf82
source_semantic_hashes:
  settings-17ae6091: 17ae6091f27890f6506be21354e0a806de793ac933011a929c02a3995acacf82
---
# claude

## Summary

Frequently referenced concept in settings.

## Seen In

- [[sources/settings-17ae6091|settings]]

## Source Claims

- settings Format: JSON Top-level: object Size: 1 Nested depth: 6 ## Schema - hooks: object (2 keys) ## Preview json { "hooks": { "SessionStart": [ { "matcher": "startup", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "resume", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "clear", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "compact", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] } ], … [source:settings-17ae6091]

