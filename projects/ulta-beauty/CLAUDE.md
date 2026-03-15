# Ulta Beauty — AI Product Opportunity

**Status:** Discovery
**Created:** 2026-03-14
**Target company:** Ulta Beauty ($ULTA)
**App:** Ulta Beauty: Makeup & Skincare

---

## What This Is
A product discovery and build project to identify AI-solvable pain points in the Ulta Beauty mobile app, prototype solutions, and pitch Ulta's digital product team (or build an independent product targeting their user base).

## Product Lifecycle Phases

| Phase | Folder | Status | Purpose |
| --- | --- | --- | --- |
| Discovery | `01-discovery/` | **In Progress** | Mine app reviews, validate the problem, research the market |
| Definition | `02-definition/` | Not started | Write the PRD and define success metrics |
| Design | `03-design/` | Not started | User stories, flows, and mockups |
| Build | `04-build/` | Not started | Prototype → production code |
| Launch | `05-launch/` | Not started | Ship to the world — LinkedIn post, outreach, demo video |

## How to Work Through This
1. **Start in `01-discovery/`** — review-analysis.md (mine Play Store/Trustpilot reviews), then hypothesis.md, then market-research.md
2. **If validated, move to `02-definition/`** — PRD, competitive analysis, user stories
3. **Design in `03-design/`** — mockups, UX flows, key screen designs
4. **Build in `04-build/`** — prototype on Replit/Lovable or direct React build, deploy to Vercel
5. **Launch in `05-launch/`** — LinkedIn post, cold outreach, recording guide, distribution plan

## Claude's Role
- Each phase has its own focus area
- Default behavior: PM-engineer hybrid thinking
- Always reference AARRR as the metrics framework
- Every data claim must be source-verified
- Push back on scope creep and unvalidated assumptions
- Optimize for shipping speed in the build phase

## Security — Public Repo Rules
This repo is **public** (portfolio showcase for PM leadership). Strict rules:
- **NEVER commit API keys, tokens, or secrets.** All credentials go in `.env` files (already in `.gitignore`).
- When building prototypes in `04-build/`, always create a `.env.example` with placeholder values (not real keys).
- Before every commit, verify no `.env`, `credentials.json`, `*.key`, or `*.pem` files are staged.
- If using OpenAI/Anthropic/Vercel APIs, use environment variables only — never hardcode.
- Mock data is fine to commit. Real user data (emails, names from interviews) must be anonymized.

## Key Links
- Templates: `../../_templates/`
- Ideas backlog: `../../_brain/ideas-backlog.md`
- Market observations: `../../_brain/market-observations.md`
