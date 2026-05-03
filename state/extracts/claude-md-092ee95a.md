# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A ramen restaurant ordering system (拉麵職人) with AI-powered recommendations. Frontend/backend are separate workspaces in an npm monorepo.

## Development Commands

```bash
# Root (starts both frontend and backend concurrently)
npm install          # Install all workspace dependencies
npm run dev          # Start both backend (port 3001) and frontend (port 5173)
npm run build        # Build frontend for production
npm run start        # Start backend in production mode

# Backend only (cd backend first, or use -w flag)
npm run dev -w backend       # nodemon watch mode
npm run init-db -w backend   # Create DB schema
npm run seed-db -w backend   # Seed sample data
npm run setup-db -w backend  # init-db + seed-db combined

# Frontend only
npm run dev -w frontend      # Vite dev server
npm run build -w frontend    # Production build
npm run preview -w frontend  # Preview production build
```

## Environment Setup

Copy and fill in `.env` files before starting:
- `backend/.env` — DB credentials, `MOONSHOT_API_KEY`, `PORT` (3001), `CORS_ORIGIN`
- `frontend/.env` — `VITE_API_URL=http://localhost:3001/api`

See `backend/.env.example` and `frontend/.env.example` for all required variables.

The backend requires a running MySQL 8.0 instance. It will exit on startup if the DB connection fails.

## Architecture

### Backend (`backend/`) — Express.js + MySQL + Moonshot Kimi

- **Entry**: `src/index.js` — sets up middleware (helmet, cors, morgan), mounts routes, tests DB on startup
- **Routes → Controllers → Services** layered pattern:
  - `routes/` — thin Express routers
  - `controllers/` — request/response handling
  - `services/` — business logic (DB queries, LLM calls)
- **LLM Integration**: `src/services/llmService.js` wraps Moonshot Kimi API (OpenAI-compatible). Key methods: `chatCompletion()`, `simpleChat()`, `streamChat()` (returns AsyncGenerator for SSE), `getAvailableModels()`
- **AI routes**: `/api/ai/*` uses `llmService.simpleChat()` for recommendations; `/api/llm/*` exposes raw LLM endpoints including streaming SSE at `/api/llm/stream`
- **Utils**: `src/utils/response.js` for consistent API responses; `src/utils/orderNumber.js` for order number generation
- Backend uses ES modules (`"type": "module"`)

### Frontend (`frontend/`) — Vue 3 + Vite + Pinia + Tailwind CSS

- **Entry**: `src/main.js` → `App.vue` with `vue-router` and `pinia`
- **State**: Three Pinia stores: `stores/cart.js`, `stores/menu.js`, `stores/order.js`
- **API client**: `src/services/api.js` — axios instance configured with `VITE_API_URL` base URL
- **Routes**:
  - `/` → `views/Home.vue` (featured items)
  - `/menu` → `views/Menu.vue` (browsing with category tabs)
  - `/menu/:id` → `views/MenuDetail.vue` (ramen customization: broth, noodles, toppings)
  - `/cart` → `views/Cart.vue`
  - `/order/:id` → `views/OrderStatus.vue`
  - `/ai-recommend` → `views/AIRecommend.vue` (AI chat interface)

### Database Schema

6 tables: `categories`, `menus` (FK→categories), `toppings`, `customizations` (FK→menus, stores options as JSON), `orders`, `order_items` (FK→orders and menus, stores toppings as JSON)

## Design Conventions

- Color palette: dark charcoal `#1a1a1a` bg, warm wood `#8B4513`, accent red `#DC2626`, cream `#F5F5DC` text
- All API responses use `{ success: boolean, data/error }` shape via `src/utils/response.js`
- The `customizations` table stores options as JSON; `order_items` stores `selected_options` and `toppings` as JSON columns

<!-- swarmvault:managed:start -->
# SwarmVault Rules

- Read `swarmvault.schema.md` before compile or query style work. It is the canonical schema path.
- Treat `raw/` as immutable source input.
- Treat `wiki/` as generated markdown owned by the agent and compiler workflow.
- Read `wiki/graph/report.md` before broad file searching when it exists; otherwise start with `wiki/index.md`.
- For graph questions, prefer `swarmvault graph query`, `swarmvault graph path`, and `swarmvault graph explain` before broad grep/glob searching.
- Preserve frontmatter fields including `page_id`, `source_ids`, `node_ids`, `freshness`, and `source_hashes`.
- Save high-value answers back into `wiki/outputs/` instead of leaving them only in chat.
- Prefer `swarmvault ingest`, `swarmvault compile`, `swarmvault query`, and `swarmvault lint` for SwarmVault maintenance tasks.
<!-- swarmvault:managed:end -->