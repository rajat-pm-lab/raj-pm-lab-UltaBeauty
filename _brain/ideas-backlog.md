# Ideas Backlog — Ulta Beauty PM Lab

> Capture every product idea here. Don't filter — just log. Evaluate later.

---

## How to Use This File
1. **Capture fast** — drop the idea with a one-liner and today's date
2. **Score later** — when you have 5+ ideas, run them through the evaluation criteria
3. **Promote winners** — move the best ones into the project folder with a hypothesis.md

---

## Quick Capture

<!-- Add new ideas at the top -->

| Date | Idea (one-liner) | Target User | Status |
| --- | --- | --- | --- |
| 2026-03-14 | AI Rewards Optimizer & Marketplace Navigator — flags marketplace vs direct items, maximizes point redemption, cross-platform price comparison | US beauty shoppers using the Ulta Beauty app (44.6M loyalty members) | New — from review analysis |
| 2026-03-14 | AI Checkout Guardian — pre-checkout validation, error diagnosis, cart persistence, payment hold tracking | Online Ulta shoppers frustrated by checkout failures (~8-10M digital shoppers) | New — from review analysis |
| 2026-03-14 | AI Customer Advocate — pre-contact diagnosis, automated claims, support quality monitoring | Ulta customers dealing with broken CS (25+ mentions in Jan-Mar 2026 reviews) | New — from review analysis |
| 2026-03-14 | AI Beauty Shopping Shell — lightweight parallel interface, offline cart, outage detection, predictive reordering | Ulta app users hit by crashes + "refresh this page" errors (viral on TikTok) | New — from review analysis |
| 2026-03-14 | AI Delivery Tracker & Claims Advocate — OnTrac failure detection, automated claims, BOPIS recommendation engine | Online Ulta shoppers losing packages (18+ shipping complaints in Jan-Mar 2026) | New — from review analysis |
| 2026-03-14 | AI-powered beauty shopping assistant that fixes Ulta's broken search, checkout failures, and rewards redemption pain | US beauty shoppers using the Ulta Beauty app (44.6M loyalty members) | Active — Discovery phase (original capture, now broken into specific ideas above) |

---

## Evaluation Criteria

| Criteria | Weight | Description |
| --- | --- | --- |
| **Pain** | 25% | How severe is the user pain? (1-5) |
| **Market** | 20% | How large is the addressable market? (1-5) |
| **Speed** | 15% | How fast can we ship an MVP? (1-5) |
| **Differentiation** | 15% | Can we do something competitors can't? (1-5) |
| **Edge** | 10% | Do we have a unique advantage? (1-5) |
| **AI-native** | 15% | Is AI core to the solution (not a wrapper)? (1-5) |

## Scored Ideas

| Idea | Pain | Market | Speed | Diff | Edge | AI | Total | Decision |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AI Rewards Optimizer & Marketplace Navigator | 5 | 5 | 5 | 4 | 3 | 4 | 4.40 | **Pursue** |
| AI Checkout Guardian | 5 | 5 | 3 | 4 | 3 | 4 | 4.10 | **Pursue** |
| AI Customer Advocate | 5 | 5 | 3 | 3 | 3 | 5 | 4.05 | **Pursue** |
| AI Delivery Tracker & Claims Advocate | 4 | 4 | 4 | 3 | 2 | 3 | 3.40 | Park |
| AI Beauty Shopping Shell | 4 | 4 | 2 | 4 | 3 | 3 | 3.35 | Park |

> **Scoring rationale:**
> - **AI Rewards Optimizer** scores highest because: pain is acute (viral backlash), market is massive (44.6M members), speed is fastest (S complexity — no backend needed, just a smart comparison layer), and AI is core to cross-platform price intelligence
> - **AI Checkout Guardian** is critical (directly lost revenue) but harder to build without Ulta API access (M complexity)
> - **AI Customer Advocate** is deeply AI-native (LLM-powered issue diagnosis) but requires training on Ulta-specific issue patterns
> - **Delivery Tracker** and **Shopping Shell** are parked — real pain but lower differentiation and harder to build as standalone products

---

## Evaluated Ideas

### Idea 1: AI Rewards Optimizer & Marketplace Navigator (RECOMMENDED MVP)

**The opportunity:** Ulta's UB Marketplace launch (Oct 2025) created a two-tier shopping experience that confuses and angers customers. Marketplace items look identical to direct Ulta items but: (1) can't be bought with rewards points, (2) don't accept promo codes, (3) don't include gifts with purchase. Users discover this at checkout — after they've already invested time selecting products.

**Why this wins as MVP:**
- **Fastest to build** — a browser extension or companion app that labels marketplace vs direct items. No Ulta API needed.
- **Viral potential** — the marketplace backlash is already viral on Reddit/TikTok. A tool that "fixes" it gets organic distribution.
- **Clear monetization path** — free tier (marketplace labels) → paid tier (price comparison, points maximizer, deal alerts)
- **Leads to bigger product** — once users trust the tool, expand to checkout guardian, rewards tracking, CS advocate

**Evidence base:**
- 12+ mentions of marketplace frustration (highest avg helpful votes at 4.8)
- Beauty Independent article documenting the backlash
- Reddit threads with hundreds of engaged users
- Ulta's own FAQ admits marketplace purchases are excluded from redemption

**Weighted score:** 4.40 (highest of all ideas)

### Idea 2: AI Checkout Guardian & Payment Recovery

**The opportunity:** Users build carts worth $100-$1,000+, hit checkout, and get generic errors. Cards are charged without orders completing. Checkout fails spike during promotional events. At $2.5B digital sales, even 1% failure = $25M at risk.

**Why this is Phase 2 (not MVP):**
- Requires deeper integration with Ulta's checkout flow or a browser extension that intercepts checkout
- Pre-checkout validation needs real-time inventory data (harder to get without API)
- But: the ROI case is strongest for B2B pitch to Ulta

**Evidence base:**
- 15+ mentions with avg 3.5 helpful votes
- Oct 2025 outage during 20% off promo went viral
- Multiple users reporting card charged 3x without order confirmation

**Weighted score:** 4.10

### Idea 3: AI Customer Advocate & Issue Resolution Agent

**The opportunity:** 25+ mentions (highest raw count). Support is outsourced, scripted, and can't resolve issues. Users wait weeks for email responses. Chat agents loop without resolution. This amplifies every other problem.

**Why Phase 3:**
- Most AI-native of all ideas (LLM excels at issue diagnosis and response generation)
- But: requires training on Ulta-specific issue patterns and resolution paths
- Best value as a complement to Rewards Optimizer + Checkout Guardian

**Weighted score:** 4.05

---

## Parked Ideas
> Ideas that aren't right for now but might be later.

- **AI Delivery Tracker & Claims Advocate** (score: 3.40) — Real pain (18+ mentions) but hard to differentiate as a standalone product. Better as a feature within the larger platform. OnTrac-specific intelligence is niche.
- **AI Beauty Shopping Shell** (score: 3.35) — Ambitious (L complexity). Building a parallel shopping interface requires product catalog access, cart management, and payment processing. Better as a long-term vision than an MVP.

## Killed Ideas
> Ideas evaluated and rejected. Keep for reference — sometimes timing changes.

-
