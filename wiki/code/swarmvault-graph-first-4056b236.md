---
page_id: 'module:swarmvault-graph-first-4056b236'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: swarmvault-graph-first module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - swarmvault-graph-first-4056b236
project_ids: []
node_ids:
  - 'module:swarmvault-graph-first-4056b236'
  - 'symbol:swarmvault-graph-first-4056b236:markerstate.function'
  - 'symbol:swarmvault-graph-first-4056b236:isreportpath.function'
  - 'symbol:swarmvault-graph-first-4056b236:collectcandidatepaths.function'
  - 'symbol:swarmvault-graph-first-4056b236:resolveinputcwd.function'
  - 'symbol:swarmvault-graph-first-4056b236:resolvetoolname.function'
  - 'symbol:swarmvault-graph-first-4056b236:hasreport.function'
  - 'symbol:swarmvault-graph-first-4056b236:markreportread.function'
  - 'symbol:swarmvault-graph-first-4056b236:hasseenreport.function'
  - 'symbol:swarmvault-graph-first-4056b236:resetsession.function'
  - 'symbol:swarmvault-graph-first-4056b236:isbroadsearchtool.function'
  - 'symbol:swarmvault-graph-first-4056b236:readhookinput.function'
  - 'symbol:swarmvault-graph-first-4056b236:report-note.variable'
  - 'symbol:swarmvault-graph-first-4056b236:agent-key.variable'
  - 'symbol:swarmvault-graph-first-4056b236:emit.function'
  - 'symbol:swarmvault-graph-first-4056b236:main.function'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.779Z'
updated_at: '2026-05-03T15:08:40.007Z'
compiled_from:
  - swarmvault-graph-first-4056b236
managed_by: system
backlinks:
  - 'source:swarmvault-graph-first-4056b236'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  swarmvault-graph-first-4056b236: 4056b236a6aa6b2cc859371dea2210703cb1918f817e23be05b445f5368a7ead
source_semantic_hashes:
  swarmvault-graph-first-4056b236: 4056b236a6aa6b2cc859371dea2210703cb1918f817e23be05b445f5368a7ead
related_page_ids:
  - 'source:swarmvault-graph-first-4056b236'
related_node_ids: []
related_source_ids:
  - swarmvault-graph-first-4056b236
language: javascript
---
# swarmvault-graph-first module

Source ID: `swarmvault-graph-first-4056b236`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/.claude/hooks/swarmvault-graph-first.js`
Repo Path: `.claude/hooks/swarmvault-graph-first.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `.claude/hooks/swarmvault-graph-first`
Source Page: [[sources/swarmvault-graph-first-4056b236|swarmvault-graph-first]]

## Summary

swarmvault-graph-first is a javascript module, defining 15 top-level symbol(s), exporting 0 symbol(s), depending on 4 external package import(s).

## Imports

- imports `crypto` (default `crypto`)
- imports `fs/promises` (default `fs`)
- imports `os` (default `os`)
- imports `path` (default `path`)

## Exports

- No exports detected.

## Symbols

- `markerState` (function): function markerState(cwd, agentKey)
- `isReportPath` (function): function isReportPath(value, cwd)
- `collectCandidatePaths` (function): function collectCandidatePaths(node, acc = [])
- `resolveInputCwd` (function): function resolveInputCwd(input)
- `resolveToolName` (function): function resolveToolName(input)
- `hasReport` (function): async function hasReport(cwd)
- `markReportRead` (function): async function markReportRead(cwd, agentKey)
- `hasSeenReport` (function): async function hasSeenReport(cwd, agentKey)
- `resetSession` (function): async function resetSession(cwd, agentKey)
- `isBroadSearchTool` (function): function isBroadSearchTool(toolName)
- `readHookInput` (function): async function readHookInput()
- `REPORT_NOTE` (variable): var REPORT_NOTE = "SwarmVault graph report exists at wiki/graph/report.md. Read it before broad grep/glob searching.";
- `AGENT_KEY` (variable): var AGENT_KEY = "claude";
- `emit` (function): function emit(value)
- `main` (function): async function main()

## External Dependencies

- `crypto`
- `fs/promises`
- `os`
- `path`

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- `markReportRead` calls `markerState`
- `hasSeenReport` calls `markerState`
- `resetSession` calls `markerState`
- `main` calls `readHookInput`
- `main` calls `resolveInputCwd`
- `main` calls `hasReport`
- `main` calls `emit`
- `main` calls `resetSession`
- `main` calls `resolveToolName`
- `main` calls `collectCandidatePaths`
- `main` calls `isReportPath`
- `main` calls `markReportRead`
- `main` calls `isBroadSearchTool`
- `main` calls `hasSeenReport`

## Diagnostics

- No parser diagnostics.

