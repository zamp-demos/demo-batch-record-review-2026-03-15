# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (run both concurrently)
npm run dev          # Vite dev server on port 5173 (proxies /api to :3001)
node interaction-server.cjs  # Backend API + static file server on port 3001

# Production build
npm run build        # Outputs to dist/

# Lint
npm run lint

# Serve production build (backend serves dist/)
npm start            # Starts interaction-server.cjs on port 3001
```

**Environment variable required:** `GEMINI_API_KEY` must be set (via `.env` file or shell). Without it, all AI features fail. The model defaults to `gemini-1.5-flash` but can be overridden with `VITE_MODEL`.

## Architecture

This is a **pharmaceutical batch record review demo** — a React SPA + Node.js backend simulating an AI-assisted QA workflow for Eli Lilly.

### Two-server setup

- **Vite dev server** (`:5173`) — serves the React app, proxies `/api/*` to `:3001`
- **`interaction-server.cjs`** (`:3001`) — a bare Node.js HTTP server (no Express) that:
  - Serves the production `dist/` as static files + SPA fallback
  - Exposes all `/api/*` routes
  - Calls Google Gemini AI for chat, feedback, and KB updates
  - Manages state in JSON files under `public/data/`

### Demo simulation engine

The core of the demo is the simulation system. On `GET /api/reset`:
1. `processes.json` is reset to 4 "In Progress" batch records (BRR_001–BRR_004)
2. Four simulation scripts launch with staggered 2s delays from `simulation_scripts/`:
   - `brr_story_1_done.cjs` → BRR_001 ends as **Done/RELEASE**
   - `brr_story_2_needs_review.cjs` → BRR_002 ends as **Needs Review/HOLD**
   - `brr_story_3_needs_review.cjs` → BRR_003 ends as **Needs Review** (OOS investigation)
   - `brr_story_4_done.cjs` → BRR_004 ends as **Done/RELEASE**
3. Each script writes incremental log steps to `public/data/process_BRR_XXX.json` with delays, simulating real-time AI review progress.

The "Share" button in the header actually triggers the reset (not sharing).

### State management

All persistent state is JSON files — no database:
- `public/data/processes.json` — process list with status/confidence/disposition
- `public/data/process_BRR_XXX.json` — per-case activity logs, key details, sidebar artifacts
- `public/data/feedbackQueue.json` — pending KB feedback items
- `public/data/kbVersions.json` — KB version history metadata
- `public/data/snapshots/` — KB markdown snapshots before/after each edit
- `interaction-signals.json` — boolean flags (`APPROVE_HOLD_MF0089`, `APPROVE_RELEASE_OM0217`) polled by simulation scripts to gate demo flow steps
- `src/data/knowledgeBase.md` — the live knowledge base content (mutated by the feedback apply flow)

Process list status in `ProcessList.jsx` also uses `sessionStorage` for client-side overrides (approve/undo per case).

### Frontend routing

```
/                        → Login
/done/batch-record-review → ProcessList (polls processes.json every 1s)
/done/batch-record-review/process/:id → ProcessDetails (reads process_BRR_XXX.json)
/done/knowledge-base     → KnowledgeBase (chat + version history)
/done/people             → People
```

`DashboardLayout` wraps all `/done/*` routes and contains: sidebar nav, header with "Work with Pace" (⌘K) feedback modal, and the feedback queue panel.

### AI / Feedback loop

`src/services/geminiService.js` is purely an API client — all Gemini calls happen server-side in `interaction-server.cjs`. The `/api/chat` endpoint handles two contracts:
1. **KB chat** — `{ message, knowledgeBase, history }`
2. **Work-with-Pace** — `{ systemPrompt, messages }`

The feedback loop: user submits feedback → Gemini generates 3 clarifying questions → user answers → Gemini summarizes → item queued in `feedbackQueue.json` → admin applies it → Gemini rewrites `knowledgeBase.md` → snapshot saved.

### Video assets

`record_brr001.js` and `record_brr003.js` are Playwright scripts that record the mock Veeva Vault HTML pages (`mock_veeva_vault_brr001.html`, `mock_veeva_vault_brr003.html`) as `.webm` videos for use as embedded artifacts in the ProcessDetails view.
