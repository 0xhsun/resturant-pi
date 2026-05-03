---
page_id: 'module:swarmvault-graph-first-fb94da9d'
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
  - swarmvault-graph-first-fb94da9d
project_ids: []
node_ids:
  - 'module:swarmvault-graph-first-fb94da9d'
  - 'symbol:swarmvault-graph-first-fb94da9d:markerstate.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:isreportpath.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:collectcandidatepaths.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:resolveinputcwd.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:resolvetoolname.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:hasreport.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:markreportread.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:hasseenreport.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:resetsession.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:isbroadsearchtool.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:collectcommandcandidates.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:commandlookslikebroadsearch.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:isbroadsearchinput.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:readhookinput.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:report-note.variable'
  - 'symbol:swarmvault-graph-first-fb94da9d:agent-key.variable'
  - 'symbol:swarmvault-graph-first-fb94da9d:emit.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:note.function'
  - 'symbol:swarmvault-graph-first-fb94da9d:main.function'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.784Z'
updated_at: '2026-05-03T15:08:40.025Z'
compiled_from:
  - swarmvault-graph-first-fb94da9d
managed_by: system
backlinks:
  - 'source:swarmvault-graph-first-fb94da9d'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  swarmvault-graph-first-fb94da9d: fb94da9d01562e2a9e1c8ad5facdf0c3a63278f7eb4a2d0bc66476249a2a51c0
source_semantic_hashes:
  swarmvault-graph-first-fb94da9d: fb94da9d01562e2a9e1c8ad5facdf0c3a63278f7eb4a2d0bc66476249a2a51c0
related_page_ids:
  - 'source:swarmvault-graph-first-fb94da9d'
related_node_ids: []
related_source_ids:
  - swarmvault-graph-first-fb94da9d
language: javascript
---
# swarmvault-graph-first module

Source ID: `swarmvault-graph-first-fb94da9d`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/.codex/hooks/swarmvault-graph-first.js`
Repo Path: `.codex/hooks/swarmvault-graph-first.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `.codex/hooks/swarmvault-graph-first`
Source Page: [[sources/swarmvault-graph-first-fb94da9d|swarmvault-graph-first]]

## Summary

swarmvault-graph-first is a javascript module, defining 19 top-level symbol(s), exporting 0 symbol(s), depending on 4 external package import(s).

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
- `collectCommandCandidates` (function): function collectCommandCandidates(node, acc = [])
- `commandLooksLikeBroadSearch` (function): function commandLooksLikeBroadSearch(command)
- `isBroadSearchInput` (function): function isBroadSearchInput(input)
- `readHookInput` (function): async function readHookInput()
- `REPORT_NOTE` (variable): var REPORT_NOTE = "SwarmVault graph report exists at wiki/graph/report.md. Read it before broad grep/glob searching.";
- `AGENT_KEY` (variable): var AGENT_KEY = "codex";
- `emit` (function): function emit(value)
- `note` (function): function note()
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
- `isBroadSearchInput` calls `resolveToolName`
- `isBroadSearchInput` calls `isBroadSearchTool`
- `isBroadSearchInput` calls `collectCommandCandidates`
- `main` calls `readHookInput`
- `main` calls `resolveInputCwd`
- `main` calls `hasReport`
- `main` calls `emit`
- `main` calls `resetSession`
- `main` calls `note`
- `main` calls `collectCandidatePaths`
- `main` calls `isReportPath`
- `main` calls `markReportRead`
- `main` calls `isBroadSearchInput`
- `main` calls `hasSeenReport`

## Diagnostics

- No parser diagnostics.

