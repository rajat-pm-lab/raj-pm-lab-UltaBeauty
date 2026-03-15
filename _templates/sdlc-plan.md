# SDLC Plan: [Product Name]

**Author:** Rajat Singh
**Date:** YYYY-MM-DD
**PRD:** [link]
**User Stories:** [link]
**Status:** Planning | In Progress | Shipped | Iterating

---

## 1. Build Strategy

### Approach
- [ ] **Prototype first** — Replit/Lovable for rapid validation, then rebuild for production
- [ ] **Build direct** — go straight to production stack (only when requirements are clear)

### Timeline Target
| Phase | Duration | Dates |
|-------|----------|-------|
| Prototype | [X days] | |
| Production build | [X days] | |
| Testing & polish | [X days] | |
| Launch | Day 1 | |
| **Total** | **[X days]** | |

---

## 2. Tech Stack (Confirmed)

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | React + [Vite / Next.js] | |
| Styling | [Tailwind / CSS Modules] | |
| Backend | [Node.js / Next.js API routes / serverless] | |
| Database | [Supabase / Planetscale / none] | |
| Auth | [Clerk / NextAuth / none for v1] | |
| AI/ML | [OpenAI / Anthropic / HuggingFace / none] | |
| Hosting | Vercel | |
| Repo | GitHub (public) | |

---

## 3. Build Phases

### Phase 1: Prototype (Replit / Lovable)
**Goal:** Validate core UX flow with a working prototype

- [ ] [Core feature 1 — functional, not polished]
- [ ] [Core feature 2]
- [ ] [Basic UI that demonstrates the value prop]
- [ ] Share with [X] test users for feedback

**Exit criteria:** Core flow works end-to-end, initial feedback confirms value

### Phase 2: Production Build
**Goal:** Rebuild on production stack with proper architecture

#### Sprint 1: Foundation
- [ ] Project scaffolding (Vite/Next.js + Tailwind)
- [ ] Repo setup on GitHub
- [ ] Vercel deployment pipeline (auto-deploy from main)
- [ ] Basic layout and navigation
- [ ] [Auth setup if needed]

#### Sprint 2: Core Features
- [ ] [P0 story: S-01]
- [ ] [P0 story: S-02]
- [ ] [P0 story: S-03]
- [ ] [Core data model / API endpoints]

#### Sprint 3: Activation & Polish
- [ ] [P0/P1: Onboarding flow]
- [ ] [P1: Key engagement feature]
- [ ] Error handling and edge cases
- [ ] Loading states and empty states
- [ ] Mobile responsiveness check

### Phase 3: Launch Prep
- [ ] Analytics instrumentation (AARRR events)
- [ ] SEO basics (meta tags, OG images, sitemap)
- [ ] Landing page with email capture
- [ ] README.md for GitHub repo
- [ ] Product Hunt assets (screenshots, description, tagline)

---

## 4. Analytics & Instrumentation

### Events to Track

| AARRR Stage | Event Name | Trigger | Tool |
|------------|------------|---------|------|
| Acquisition | `page_view` | Landing page load | [Plausible / Vercel Analytics] |
| Acquisition | `signup_started` | Click signup button | |
| Activation | `signup_completed` | Account created | |
| Activation | `first_[action]` | User completes core action | |
| Retention | `return_visit` | User returns after 24h+ | |
| Revenue | `upgrade_clicked` | Click pricing CTA | |
| Referral | `share_clicked` | Click share button | |

### Dashboards Needed
- [ ] Daily active users
- [ ] Signup → activation funnel
- [ ] Retention cohorts (day 1, day 7)

---

## 5. Testing Strategy

| What | How | When |
|------|-----|------|
| Core user flow | Manual walkthrough | Before each deploy |
| API endpoints | [Jest / manual curl] | During build |
| Cross-browser | Chrome + Safari + mobile | Pre-launch |
| Performance | Lighthouse score > 90 | Pre-launch |
| User testing | 3-5 users on prototype | End of Phase 1 |

---

## 6. Deployment & Infrastructure

### Environments
| Environment | URL | Branch | Purpose |
|-------------|-----|--------|---------|
| Development | localhost:3000 | feature branches | Active development |
| Preview | [auto-generated].vercel.app | PR branches | Review & testing |
| Production | [product].vercel.app | main | Live users |

### CI/CD
- Vercel auto-deploys on push to `main`
- Preview deploys on every PR
- No staging environment needed for v1

---

## 7. Post-Launch Plan

### Week 1: Observe
- [ ] Monitor error logs daily
- [ ] Track activation funnel drop-offs
- [ ] Collect qualitative feedback (DMs, emails, comments)
- [ ] Identify top 3 user friction points

### Week 2: Iterate
- [ ] Ship fixes for top friction points
- [ ] A/B test onboarding variations (if traffic allows)
- [ ] Decide: double down or pivot based on retention data

### Ongoing
- [ ] Weekly metrics review (15 min)
- [ ] Monthly retrospective: what's working, what's not
- [ ] Update backlog based on user feedback

---

## 8. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Scope creep beyond MVP | Delays launch | Ruthlessly cut to P0 stories only |
| Low initial traffic | Can't validate metrics | Pre-build audience via content/Twitter |
| Tech debt from prototype | Slows iteration | Plan clean rebuild in Phase 2 |
| API costs (if using AI) | Unsustainable unit economics | Set usage limits, monitor daily |

---

## 9. Definition of Done (MVP)

- [ ] All P0 user stories implemented and working
- [ ] Deployed to Vercel production
- [ ] GitHub repo is public with README
- [ ] Analytics tracking all AARRR events
- [ ] Landing page live
- [ ] Tested on Chrome, Safari, and mobile
- [ ] Launched on at least one channel (PH, Twitter, community)
