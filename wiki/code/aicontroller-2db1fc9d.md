---
page_id: 'module:aicontroller-2db1fc9d'
kind: module
cssclasses:
  - swarmvault
  - sv-module
title: aiController module
source_class: first_party
tags:
  - module
  - code
  - javascript
source_ids:
  - aicontroller-2db1fc9d
project_ids: []
node_ids:
  - 'module:aicontroller-2db1fc9d'
  - 'symbol:aicontroller-2db1fc9d:getrecommendation.variable'
  - 'symbol:aicontroller-2db1fc9d:chat.variable'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.506Z'
updated_at: '2026-05-03T15:08:39.125Z'
compiled_from:
  - aicontroller-2db1fc9d
managed_by: system
backlinks:
  - 'source:aicontroller-2db1fc9d'
  - 'module:aiservice-ef45c47d'
  - 'module:response-d1608d13'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  aicontroller-2db1fc9d: 2db1fc9d62c3d28ab6677c62aea3e14c0380c321da0f88041a751d5351d07cc7
source_semantic_hashes:
  aicontroller-2db1fc9d: 2db1fc9d62c3d28ab6677c62aea3e14c0380c321da0f88041a751d5351d07cc7
related_page_ids:
  - 'source:aicontroller-2db1fc9d'
  - 'module:aiservice-ef45c47d'
  - 'module:response-d1608d13'
related_node_ids: []
related_source_ids:
  - aicontroller-2db1fc9d
  - aiservice-ef45c47d
  - response-d1608d13
language: javascript
---
# aiController module

Source ID: `aicontroller-2db1fc9d`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/backend/src/controllers/aiController.js`
Repo Path: `backend/src/controllers/aiController.js`
Source Class: `first_party`
Language: `javascript`
Module Name: `backend/src/controllers/aiController`
Source Page: [[sources/aicontroller-2db1fc9d|aiController]]

## Summary

aiController is a javascript module, defining 2 top-level symbol(s), exporting 0 symbol(s), importing 2 local module(s).

## Imports

- imports [[code/aiservice-ef45c47d|aiService module]] (default `aiService`)
- imports [[code/response-d1608d13|response module]] (named `success`, `errorResponse`)

## Exports

- `getRecommendation`
- `chat`

## Symbols

- `getRecommendation` (variable): const getRecommendation = async (req, res) => { try { const { preferences, budget } = req.body; if (!preferences) { return res.status(400).json(errorResponse('請提供您的偏好')); } cons...
- `chat` (variable): const chat = async (req, res) => { try { const { message, history } = req.body; if (!message) { return res.status(400).json(errorResponse('請提供訊息')); } const reply = await aiServ...

## External Dependencies

- No external dependencies detected.

## Unresolved Local References

- No unresolved local references detected.

## Inheritance

- No inheritance relationships detected.

## Calls

- No direct same-module call edges detected.

## Diagnostics

- No parser diagnostics.

