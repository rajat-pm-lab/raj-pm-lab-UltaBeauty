# Hypothesis: AI Rewards Optimizer & Marketplace Navigator

**Date:** 2026-03-15
**Status:** Validated — proceeding to build

---

## The Hypothesis

**We believe that** Ulta Beauty's 46.7M loyalty members who shop online (~10M active digital shoppers)
**wants to** instantly know whether a product is marketplace or direct Ulta — and maximize their points/coupon value on every purchase
**because** UB Marketplace items look identical to direct Ulta items but silently exclude rewards redemption, promo codes, and gifts with purchase — causing surprise and frustration at checkout.

**We will know we're right when** the prototype demo generates engagement on LinkedIn (50+ reactions, 10+ comments) and/or gets inbound interest from Ulta's product team or beauty shoppers requesting access.

## Problem Statement

### Who has this problem?
- **Target user:** US beauty shoppers who are Ultamate Rewards members and shop online (web or app). Primarily women 18-45, value-conscious, brand-loyal to Ulta but increasingly frustrated with the marketplace rewards split.
- **How many?** 46.7M loyalty members total. ~10M active digital shoppers (est. from ~$2.5B digital sales ÷ $50-75 AOV × purchase frequency). 60% shop via app, 40% web.
- **How often does it occur?** Every shopping session where marketplace items appear in search results. With 200+ marketplace brands / 5,000 SKUs mixed into regular results, collision rate is increasing as marketplace scales.

### What are they doing today?
- **Current solution:** Nothing — most users don't know an item is marketplace until checkout. Some savvy users check the product detail page for the small "fulfilled by a trusted UB Marketplace supplier" text, but this is buried mid-page.
- **Pain with current solution:** Users build a cart with mixed items, apply their 20% coupon, go to checkout, and discover 2-3 items are excluded. They either (a) buy anyway and feel cheated, (b) abandon the marketplace items and feel angry at Ulta, or (c) leave Ulta entirely and buy from the brand's own site. All three outcomes are bad for Ulta.
- **Willingness to switch:** HIGH — the Reddit/TikTok backlash shows users are actively looking for solutions. Direct quotes: "Since those can't be used on marketplace items then why would I buy them from Ulta?"

## Riskiest Assumption

The single assumption that, if wrong, kills the idea:

> Ulta shoppers will use a third-party tool to check marketplace vs. direct status BEFORE adding to cart, rather than just avoiding marketplace items entirely or accepting the limitation.

**How we'll test it:**
| Method | Timeline | Success criteria |
| --- | --- | --- |
| Working prototype with broken/fixed toggle | 1 week | Demo is compelling enough for LinkedIn pitch |
| LinkedIn post with prototype link | Week 2 | 50+ reactions, 10+ comments, 3+ DMs requesting access |
| Reddit post in r/UltaBeauty or beauty subs | Week 2 | 20+ upvotes, users asking "where can I get this?" |

## Evidence Collected

| Date | Source | Signal | Supports? |
| --- | --- | --- | --- |
| 2026-03-14 | Trustpilot reviews (Jan-Mar 2026) | 12+ mentions of marketplace frustration, highest avg helpful votes (4.8) | Yes |
| 2026-03-14 | [Beauty Independent article](https://www.beautyindependent.com/ulta-beauty-marketplace-launch-sparks-customer-backlash/) | Documented backlash: "why would I buy them from Ulta?" | Yes |
| 2026-03-14 | Reddit threads | Hundreds of engaged users upset about marketplace rewards exclusion | Yes |
| 2026-03-14 | Ulta FAQ | Officially confirms marketplace purchases excluded from point redemption | Yes |
| 2026-03-14 | FY2025 earnings call | Marketplace scaled to 200+ brands / 5,000 SKUs — problem is growing, not shrinking | Yes |
| 2026-03-14 | FY2025 earnings call | Ulta investing AI in marketing, NOT shopping experience — gap confirmed | Yes |
| 2026-03-14 | FY2026 guidance | Growth decelerating (9.7% → 6-7%) — digital experience is a lever they're not pulling | Yes |

## Decision

- [x] **Proceed** — evidence overwhelmingly supports the hypothesis. 7/7 signals positive. Move to prototype build.
- [ ] **Pivot** — core insight is real but framing needs to change
- [ ] **Kill** — assumption was wrong, archive and move on

## Notes

- **Prototype format:** Standalone React web app on Vercel with simulated data (20-30 products)
- **Demo framing:** B2C for the prototype (save money, never waste your points). B2B framing for LinkedIn pitch (revenue recovery for Ulta — $50M-$125M marketplace revenue at risk)
- **Broken vs fixed toggle:** User sees same cart/products in both modes. Broken = surprise at checkout. Fixed = clear badges + smart recommendations before you add to cart.
- **Key insight from PC Express project:** The broken vs. fixed toggle is the most persuasive demo format. Let viewers experience the pain, then see the fix.
- **Timeline:** 1 week to working prototype → LinkedIn post in week 2
