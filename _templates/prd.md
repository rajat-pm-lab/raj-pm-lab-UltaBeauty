# PRD: [Product Name]

**Author:** Rajat Singh
**Date:** YYYY-MM-DD
**Status:** Draft | In Review | Approved | Building
**Hypothesis:** [link]
**Market Research:** [link]

---

## 1. Overview

### Problem
[One paragraph. What user pain are we solving? Reference the validated hypothesis.]

### Solution
[One paragraph. What are we building and why this approach wins.]

### Success Metrics (AARRR)

| Funnel Stage | Metric | Target (v1) | How Measured |
|-------------|--------|-------------|--------------|
| **Acquisition** | [e.g., landing page visitors] | [e.g., 500/week] | [Analytics tool] |
| **Activation** | [e.g., completed onboarding] | [e.g., 40% of signups] | [Event tracking] |
| **Retention** | [e.g., returned within 7 days] | [e.g., 30%] | [Cohort analysis] |
| **Revenue** | [e.g., converted to paid] | [e.g., 5% of active] | [Stripe dashboard] |
| **Referral** | [e.g., invited a friend] | [e.g., 10% of active] | [Referral tracking] |

### Non-Goals
- [What this version explicitly does NOT do]

---

## 2. User Stories

[Link to user-stories.md for this product, or inline the top 5:]

| Priority | As a... | I want to... | So that... | Acceptance Criteria |
|----------|---------|-------------|------------|-------------------|
| P0 | | | | |
| P1 | | | | |
| P1 | | | | |
| P2 | | | | |
| P2 | | | | |

---

## 3. Scope & Phasing

### MVP (v1) — ship in [X] days
- [ ] [Feature 1 — one sentence]
- [ ] [Feature 2]
- [ ] [Feature 3]

### v1.1 — fast follow
- [ ] [Feature based on v1 learnings]
- [ ] [Feature]

### Future / Icebox
- [Ideas parked for later, with brief rationale]

---

## 4. UX & Flows

### Core User Flow
```
[Step 1] → [Step 2] → [Step 3] → [Outcome]
```

### Key Screens
[Reference mockups if created, or describe each screen:]

1. **[Screen Name]** — [purpose, key elements, primary action]
2. **[Screen Name]** — [purpose, key elements, primary action]

### Edge Cases
| Scenario | Expected Behavior |
|----------|------------------|
| [e.g., user has no data yet] | [empty state with CTA] |
| [e.g., API rate limit hit] | [graceful degradation + message] |

---

## 5. Technical Approach

### Architecture
- **Frontend:** React (Vite or Next.js)
- **Backend:** Node.js / serverless functions
- **Database:** [Supabase / Planetscale / none for v1]
- **AI/ML:** [model, API, approach — if applicable]
- **Hosting:** Vercel

### Key Technical Decisions
| Decision | Choice | Rationale |
|----------|--------|-----------|
| [e.g., auth provider] | [e.g., Clerk] | [fast to integrate, free tier] |
| [e.g., state management] | [e.g., Zustand] | [lightweight, no boilerplate] |

### Third-Party Dependencies
| Service | Purpose | Cost | Risk if unavailable |
|---------|---------|------|-------------------|
| | | | |

---

## 6. Launch Plan

### Pre-Launch
- [ ] Landing page live with email capture
- [ ] Core product functional and tested
- [ ] Analytics instrumented (all AARRR events)

### Launch Day
- [ ] Deploy to Vercel production
- [ ] Push to GitHub public
- [ ] Product Hunt submission
- [ ] Twitter/X thread
- [ ] Post in relevant communities

### Post-Launch (Week 1)
- [ ] Monitor error rates and user feedback
- [ ] Run first analysis on activation funnel
- [ ] Identify top 3 friction points

---

## 7. Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| | | | |

---

## 8. Open Questions

- [ ] [Question that needs answering before or during build]
