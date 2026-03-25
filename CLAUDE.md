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

**Environment variables:**
- `GEMINI_API_KEY` — required; all AI features fail without it
- `VITE_MODEL` — optional; overrides model (default `gemini-1.5-flash`; `gemini-2.5-flash` also supported but requires v1beta API — already handled in server)
- `VITE_API_URL` — required in split deployments (e.g. Vercel frontend + Railway backend); omit for local dev (falls back to `localhost:3001`)
- `PORT` — backend port (default `3001`)

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
1. Per-process JSON files (`process_BRR_XXX.json`) are deleted, and `processes.json` is restored from `public/data/base_processes.json` (3 "In Progress" records: BRR_001–BRR_003)
2. Three simulation scripts launch with staggered 2s delays from `simulation_scripts/`:
   - `brr_story_1_done.cjs` → BRR_001 ends as **Done/RELEASE**
   - `brr_story_2_needs_review.cjs` → BRR_002 ends as **Needs Review/HOLD**
   - `brr_story_3_needs_review.cjs` → BRR_003 ends as **Needs Review** (OOS investigation)
3. Each script writes incremental log steps to `public/data/process_BRR_XXX.json` with delays, simulating real-time AI review progress. Steps include an `extracted_data` artifact type (batch actuals vs MBR spec table).

The "Share" button in the header actually triggers the reset (not sharing).

Stories 4–13 (`brr_story_4_omp.cjs` through `brr_story_13_los.cjs`) cover 10 additional drug cases (Omeprazole, Amoxicillin, Metformin, Atorvastatin, Warfarin, Amlodipine, Lisinopril, Ciprofloxacin, Methotrexate, Losartan) — they follow the same pattern as stories 1–3 but are not spawned by `/api/reset` (intended for extended demos).

**Simulation script pattern:** Each script defines an array of steps with `title_p`/`title_s` labels, then loops: write "processing" log entry → delay 2.2s → write "success/warning/completed" → delay 1.5s → call `/api/update-status`. Steps can include a `waitForSignal(name)` call that polls `interaction-signals.json` until a named flag is set to `true` (human-in-the-loop gate).

**Artifact types** rendered by `ProcessDetails.jsx`:
- `email_draft` — email with subject/from/to/body/timestamp
- `pdf` — link to `/pdfs/` static assets
- `json` — structured data (BOM, QC findings, etc.)
- `video` — link to `/videos/` webm files
- `decision` — HITL gate with options that write named signals to `interaction-signals.json`

**`/email-status` endpoint** — `POST /email-status` with `{ sent: true }` advances the BRR_003 escalation email step (the simulation script polls this).

### State management

All persistent state is JSON files — no database:
- `public/data/processes.json` — process list with status/confidence/disposition
- `public/data/process_BRR_XXX.json` — per-case activity logs, key details, sidebar artifacts
- `public/data/feedbackQueue.json` — pending KB feedback items
- `public/data/kbVersions.json` — KB version history metadata
- `public/data/snapshots/` — KB markdown snapshots before/after each edit
- `interaction-signals.json` — boolean flags (`APPROVE_HOLD_MF0089`, `APPROVE_HOLD_LS0031`) polled by simulation scripts to gate demo flow steps
- `public/pdfs/` — 6 static PDF assets (3 MBRs: ATV-040-003, MFH-500-001, LIS-010-002; 3 EBRs: AT-2026-0142, MF-2026-0089, LS-2026-0031) used as sidebar artifacts in ProcessDetails
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

`record_brr001.cjs` and `record_brr003.cjs` are Playwright scripts that record the mock Veeva Vault HTML pages (`mock_veeva_vault_brr001.html`, `mock_veeva_vault_brr003.html`) as `.webm` videos for use as embedded artifacts in the ProcessDetails view. Run them with `node record_brr001.cjs` to regenerate the videos in `public/videos/`.

### No tests

There are no test files in the repository (no Jest, Vitest, or similar). This is a demo-only codebase.
