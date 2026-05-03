---
page_id: 'source:claude-md-092ee95a'
kind: source
cssclasses:
  - swarmvault
  - sv-source
title: CLAUDE.md
source_class: first_party
tags:
  - source
source_ids:
  - claude-md-092ee95a
project_ids: []
node_ids:
  - 'source:claude-md-092ee95a'
  - 'concept:backend'
  - 'concept:frontend'
  - 'concept:swarmvault'
  - 'concept:stores'
  - 'concept:views'
  - 'concept:with'
  - 'entity:this'
  - 'entity:claude-code'
  - 'entity:project-overview'
  - 'entity:development-commands'
  - 'entity:root'
  - 'entity:install'
freshness: fresh
status: active
confidence: 1
created_at: '2026-05-03T15:02:59.570Z'
updated_at: '2026-05-03T15:08:39.329Z'
compiled_from:
  - claude-md-092ee95a
managed_by: system
backlinks:
  - 'concept:backend'
  - 'concept:frontend'
  - 'concept:swarmvault'
  - 'concept:stores'
  - 'concept:views'
  - 'concept:with'
  - 'entity:this'
  - 'entity:claude-code'
  - 'entity:project-overview'
  - 'entity:development-commands'
  - 'entity:root'
  - 'entity:install'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  claude-md-092ee95a: 092ee95a986740d86fcf866a159a7d92e26f3b6fffa1ad82c652b2e5a6fbf0a7
source_semantic_hashes:
  claude-md-092ee95a: 48e43131e1424d05c1f0da18add0ccbbcb598aba199c2a579150a9c7df8a8857
---
# CLAUDE.md

Source ID: `claude-md-092ee95a`
Source Kind: `markdown`
Source Path: `/mnt/c/Users/oxhsun/Documents/GitHub/resturant-pi/CLAUDE.md`

Source Class: `first_party`


## Summary

CLAUDE.md This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. ## Project Overview A ramen restaurant ordering system (拉麵職人) with AI-powered recommendations. Frontend/backend are separate workspaces in an npm monorepo.

## Concepts

- [[concepts/backend|backend]]: Frequently referenced concept in CLAUDE.md.
- [[concepts/frontend|frontend]]: Frequently referenced concept in CLAUDE.md.
- [[concepts/swarmvault|swarmvault]]: Frequently referenced concept in CLAUDE.md.
- [[concepts/stores|stores]]: Frequently referenced concept in CLAUDE.md.
- [[concepts/views|views]]: Frequently referenced concept in CLAUDE.md.
- [[concepts/with|with]]: Frequently referenced concept in CLAUDE.md.

## Entities

- [[entities/this|This]]: Named entity mentioned in CLAUDE.md.
- [[entities/claude-code|Claude Code]]: Named entity mentioned in CLAUDE.md.
- [[entities/project-overview|Project Overview]]: Named entity mentioned in CLAUDE.md.
- [[entities/development-commands|Development Commands]]: Named entity mentioned in CLAUDE.md.
- [[entities/root|Root]]: Named entity mentioned in CLAUDE.md.
- [[entities/install|Install]]: Named entity mentioned in CLAUDE.md.

## Claims

- CLAUDE.md This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. [source:claude-md-092ee95a]
- ## Project Overview A ramen restaurant ordering system (拉麵職人) with AI-powered recommendations. [source:claude-md-092ee95a]
- Frontend/backend are separate workspaces in an npm monorepo. [source:claude-md-092ee95a]
- ## Development Commands bash # Root (starts both frontend and backend concurrently) npm install # Install all workspace dependencies npm run dev # Start both backend (port 3001) and frontend (port 5173) npm run build # Build frontend for production npm run start # Start backend in production mode # Backend only (cd backend first, or use -w flag) npm run dev -w backend # nodemon watch mode npm run init-db -w backend # Create DB schema npm run seed-db -w backend # Seed sample data npm run setup-db -w backend # init-db + seed-db combined # Frontend only npm run dev -w frontend # Vite dev server npm run build -w frontend # Production build npm run preview -w frontend # Preview production build ## Environment Setup Copy and fill in .env files before starting: - backend/.env — DB credentials, MOONSHOT_API_KEY , PORT (3001), CORS_ORIGIN - frontend/.env — VITE_API_URL=http://localhost:3001/api See backend/.env.example and frontend/.env.example for all required variables. [source:claude-md-092ee95a]

## Questions

- How does backend relate to CLAUDE.md?
- How does frontend relate to CLAUDE.md?
- How does swarmvault relate to CLAUDE.md?

