---
page_id: 'source:settings-17ae6091'
kind: source
cssclasses:
  - swarmvault
  - sv-source
title: settings
source_class: first_party
tags:
  - source
source_ids:
  - settings-17ae6091
project_ids: []
node_ids:
  - 'source:settings-17ae6091'
  - 'concept:hooks'
  - 'concept:claude'
  - 'concept:command'
  - 'concept:matcher'
  - 'concept:node'
  - 'concept:project'
  - 'entity:format'
  - 'entity:top'
  - 'entity:size'
  - 'entity:nested'
  - 'entity:schema'
  - 'entity:preview'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.768Z'
updated_at: '2026-05-03T15:08:39.973Z'
compiled_from:
  - settings-17ae6091
managed_by: system
backlinks:
  - 'concept:hooks'
  - 'concept:claude'
  - 'concept:command'
  - 'concept:matcher'
  - 'concept:node'
  - 'concept:project'
  - 'entity:format'
  - 'entity:top'
  - 'entity:size'
  - 'entity:nested'
  - 'entity:schema'
  - 'entity:preview'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  settings-17ae6091: 17ae6091f27890f6506be21354e0a806de793ac933011a929c02a3995acacf82
source_semantic_hashes:
  settings-17ae6091: 17ae6091f27890f6506be21354e0a806de793ac933011a929c02a3995acacf82
---
# settings

Source ID: `settings-17ae6091`
Source Kind: `data`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/.claude/settings.json`

Source Class: `first_party`


## Source Details

- format: json
- top level type: object
- top level size: 1
- nested depth: 6


## Summary

settings Format: JSON Top-level: object Size: 1 Nested depth: 6 ## Schema - hooks: object (2 keys) ## Preview json { "hooks": { "SessionStart": [ { "matcher": "startup", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "resume", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "clear", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "compact", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] } ], …

## Concepts

- [[concepts/hooks|hooks]]: Frequently referenced concept in settings.
- [[concepts/claude|claude]]: Frequently referenced concept in settings.
- [[concepts/command|command]]: Frequently referenced concept in settings.
- [[concepts/matcher|matcher]]: Frequently referenced concept in settings.
- [[concepts/node|node]]: Frequently referenced concept in settings.
- [[concepts/project|project]]: Frequently referenced concept in settings.

## Entities

- [[entities/format|Format:]]: Named entity mentioned in settings.
- [[entities/top|Top-]]: Named entity mentioned in settings.
- [[entities/size|Size:]]: Named entity mentioned in settings.
- [[entities/nested|Nested]]: Named entity mentioned in settings.
- [[entities/schema|Schema -]]: Named entity mentioned in settings.
- [[entities/preview|Preview]]: Named entity mentioned in settings.

## Claims

- settings Format: JSON Top-level: object Size: 1 Nested depth: 6 ## Schema - hooks: object (2 keys) ## Preview json { "hooks": { "SessionStart": [ { "matcher": "startup", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "resume", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "clear", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] }, { "matcher": "compact", "hooks": [ { "type": "command", "command": "node \"$CLAUDE_PROJECT_DIR/.claude/hooks/swarmvault-graph-first.js\" session-start" } ] } ], … [source:settings-17ae6091]

## Questions

- How does hooks relate to settings?
- How does claude relate to settings?
- How does command relate to settings?

