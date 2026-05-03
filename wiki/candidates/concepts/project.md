---
page_id: 'concept:project'
kind: concept
cssclasses:
  - swarmvault
  - sv-concept
title: project
source_class: first_party
tags:
  - concept
  - candidate
source_ids:
  - projects-6586298f
  - settings-17ae6091
project_ids: []
node_ids:
  - 'concept:project'
freshness: fresh
status: candidate
confidence: 0.8
created_at: '2026-05-03T15:03:00.173Z'
updated_at: '2026-05-03T15:08:40.910Z'
compiled_from:
  - projects-6586298f
  - settings-17ae6091
managed_by: system
backlinks:
  - 'source:projects-6586298f'
  - 'source:settings-17ae6091'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  projects-6586298f: 6586298f00aa5e627ae275229732239c79e06e6c04edc5458d24dbe9dd79c774
  settings-17ae6091: 17ae6091f27890f6506be21354e0a806de793ac933011a929c02a3995acacf82
source_semantic_hashes:
  projects-6586298f: c17f3824f10f7496c534034df6643e9aab08bdb9431f5d9bfa9f2ac000bf6187
  settings-17ae6091: 17ae6091f27890f6506be21354e0a806de793ac933011a929c02a3995acacf82
---
# project

## Summary

Frequently referenced concept in Projects.

## Seen In

- [[sources/projects-6586298f|Projects]]
- [[sources/settings-17ae6091|settings]]

## Source Claims

- title: Projects tags: index, projects # Projects - Run swarmvault compile to build project rollups. [source:projects-6586298f]
- settings Format: JSON Top-level: object Size: 1 Nested depth: 6 ## Schema - hooks: object (2 keys) ## Preview json { "hooks": { "SessionStart": [ { "matcher": "startup", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "resume", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "clear", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "compact", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] } ], … [source:settings-17ae6091]

