---
page_id: 'entity:root'
kind: entity
cssclasses:
  - swarmvault
  - sv-entity
title: Root
source_class: first_party
tags:
  - entity
  - candidate
source_ids:
  - claude-md-092ee95a
project_ids: []
node_ids:
  - 'entity:root'
freshness: fresh
status: candidate
confidence: 0.65
created_at: '2026-05-03T15:03:00.284Z'
updated_at: '2026-05-03T15:08:41.153Z'
compiled_from:
  - claude-md-092ee95a
managed_by: system
backlinks:
  - 'source:claude-md-092ee95a'
schema_hash: 874431dbbfdec0b254a4aa1bf002900574c9b485735a883690c2becb5f717720
source_hashes:
  claude-md-092ee95a: 092ee95a986740d86fcf866a159a7d92e26f3b6fffa1ad82c652b2e5a6fbf0a7
source_semantic_hashes:
  claude-md-092ee95a: 48e43131e1424d05c1f0da18add0ccbbcb598aba199c2a579150a9c7df8a8857
---
# Root

## Summary

Named entity mentioned in CLAUDE.md.

## Seen In

- [[sources/claude-md-092ee95a|CLAUDE.md]]

## Source Claims

- ## Development Commands bash # Root (starts both frontend and backend concurrently) npm install # Install all workspace dependencies npm run dev # Start both backend (port 3001) and frontend (port 5173) npm run build # Build frontend for production npm run start # Start backend in production mode # Backend only (cd backend first, or use -w flag) npm run dev -w backend # nodemon watch mode npm run init-db -w backend # Create DB schema npm run seed-db -w backend # Seed sample data npm run setup-db -w backend # init-db + seed-db combined # Frontend only npm run dev -w frontend # Vite dev server npm run build -w frontend # Production build npm run preview -w frontend # Preview production build ## Environment Setup Copy and fill in .env files before starting: - backend/.env — DB credentials, MOONSHOT_API_KEY , PORT (3001), CORS_ORIGIN - frontend/.env — VITE_API_URL=http://localhost:3001/api See backend/.env.example and frontend/.env.example for all required variables. [source:claude-md-092ee95a]

