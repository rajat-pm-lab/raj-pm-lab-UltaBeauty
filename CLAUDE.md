# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Who I Am
- Senior Product Manager with 8+ years of B2B and B2C experience
- Solo AI product builder — I own the full loop from idea to production
- PM-engineer hybrid: I think in user problems AND system architecture

## My Workflow
```
app review mining → hypothesis → market research → competitive analysis → PRD → prototype → deploy → pitch / ship
```
Each product follows this pipeline. Templates live in `_templates/`. Ideas and research live in `_brain/`.

## Learnings from Previous Project (PC Express / Loblaws)
These are hard-won lessons from my first PM lab project. Apply them here:

1. **Review analysis is the foundation.** Mine app store reviews FIRST — quantify pain points, collect direct quotes, calculate mention frequency and "helpful" vote averages. This becomes the evidence base for everything else.
2. **Always verify data sources.** Every stat in a pitch must trace to a specific, publicly accessible source with a direct URL. Never cite a number you can't defend.
3. **Revenue impact framing wins.** Translate user pain into dollar impact for the target company. "$80M in at-risk revenue" opens doors that "users are frustrated" never will.
4. **Prototype before pitch.** A working demo is 10x more persuasive than a deck. Ship a clickable prototype that shows broken vs. fixed state.
5. **Broken vs. fixed toggle is powerful.** Let the viewer experience the current pain, then see the fix. Side-by-side comparison sells itself.
6. **Keep templates lean.** Only add sections that earn their place. Every template section should map to a decision or deliverable.

## Target Company: Ulta Beauty
- **Industry:** Beauty retail (brick-and-mortar + e-commerce + marketplace)
- **App:** Ulta Beauty: Makeup & Skincare (iOS + Android)
- **Key metrics:** $12.39B annual revenue, 44.6M Ultamate Rewards members, ~$2.5B digital sales, 1,400+ US stores
- **Recent moves:** UB Marketplace launch (Oct 2025), TikTok Shop, BOPIS expansion
- https://play.google.com/store/apps/details?id=com.ulta&hl=en**Play**** Store:** https://play.google.com/store/apps/details?id=com.ulta&hl=en

## Tech Stack
| Layer | Tools |
| --- | --- |
| Frontend | React |
| Backend | Node.js |
| Prototyping | Replit, Lovable |
| Deployment | Vercel |
| Source control | GitHub (public repos) |

## How Claude Should Work With Me
- Default to PM-engineer hybrid thinking. Frame problems in user impact AND technical feasibility.
- When analyzing reviews, quantify everything: mention count, % of negative reviews, avg "helpful" votes, trend direction.
- Use AARRR as the default lens for any feature discussion.
- Every data point must be traceable to a specific source. If a stat can't be verified, flag it.
- Keep PRDs tight — no fluff, every section earns its place.
- When writing code, optimize for shipping speed. Production polish comes in iteration 2.
- Suggest experiments and metrics proactively. If a feature can't be measured, push back.
- Reference my templates in `_templates/` and backlog in `_brain/` when relevant.

## Project Structure
```
raj-pm-lab-UltaBeauty/
├── CLAUDE.md                ← you are here
├── _templates/              ← reusable docs for each product phase
├── _brain/                  ← ongoing thinking & capture
│   ├── ideas-backlog.md     ← idea log with scoring rubric
│   ├── market-observations.md ← market signals and trends
│   └── reading-notes.md     ← notes from articles/reports
└── projects/
    └── ulta-beauty/         ← the active project (has its own CLAUDE.md)
        ├── 01-discovery/    ← review analysis, hypothesis, market research
        ├── 02-definition/   ← PRD, user stories, competitive analysis
        ├── 03-design/       ← mockups, flows, UX decisions
        ├── 04-build/        ← prototype code + SDLC plan
        └── 05-launch/       ← launch checklist, LinkedIn post, recording guide
```

## Template → Phase Mapping

When creating deliverables, copy the appropriate template from `_templates/` into the project phase folder:

| Phase | Template | Output file |
| --- | --- | --- |
| 01-discovery | `review-analysis.md` | `01-discovery/review-analysis.md` |
| 01-discovery | `hypothesis.md` | `01-discovery/hypothesis.md` |
| 01-discovery | `market-research.md` | `01-discovery/market-research.md` |
| 02-definition | `competitive-analysis.md` | `02-definition/competitive-analysis.md` |
| 02-definition | `prd.md` | `02-definition/prd.md` |
| 02-definition | `user-stories.md` | `02-definition/user-stories.md` |
| 04-build | `sdlc-plan.md` | `04-build/sdlc-plan.md` |
| 05-launch | `pitch-deck.md` | `05-launch/pitch-deck.md` |

**Important:** The project sub-folder `projects/ulta-beauty/` has its own `CLAUDE.md` with phase status tracking and project-specific context. Check it for current project state before starting work.

## Security — PUBLIC REPO
This repo is public (portfolio for PM leadership). **Non-negotiable rules:**
1. **Never commit secrets.** API keys, tokens, credentials → `.env` files only (already in `.gitignore`).
2. **`.env.example`**** for prototypes.** When `04-build/` uses any API, create `.env.example` with placeholder values.
3. **Pre-commit check.** Before every commit, verify no `.env`, `credentials.json`, `*.key`, or `*.pem` files are staged.
4. **No hardcoded keys.** Use `process.env.API_KEY` — never inline strings.
5. **Anonymize user data.** Real names from interviews/reviews are OK if publicly posted (app store reviews). Private user data must be anonymized.
6. **No internal Ulta data.** Only use publicly available information (app store reviews, earnings calls, public articles).
