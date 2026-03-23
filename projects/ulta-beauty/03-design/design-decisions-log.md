# Design Decisions Log: AI Rewards Optimizer

**Project:** Ulta Beauty — AI Rewards Optimizer & Marketplace Navigator
**Author:** Rajat Singh
**Started:** 2026-03-14
**Last updated:** 2026-03-23

This document captures how the prototype evolved through product thinking, real-world observation, and strategic trade-offs. Each entry records a decision, the reasoning behind it, and what changed.

---

## Decision Timeline

### v1.0 — Initial Prototype Scope (March 14-20)

**Context:** After mining 110+ reviews across Trustpilot (1.7/5), Play Store, Reddit, and press coverage, we identified UB Marketplace Rewards Exclusion as the highest-signal pain point (4.8 avg "helpful" votes — highest of any complaint, indicating strong community resonance).

**Original design included:**
- Broken/fixed toggle to demo the pain point vs. the solution
- Product browsing with source badges (Ulta Direct vs. Marketplace)
- Cart grouping (Direct section vs. Marketplace section)
- Cart Optimizer with swap/redirect recommendations ("Buy from Sephora instead," "Swap to Ulta Direct alternative")
- Checkout reveal showing coupon rejection and points exclusion

**Why we designed it this way:**
- The broken/fixed toggle was proven in the Loblaws/PC Express project — let the viewer experience the pain, then see the fix
- Cart optimizer felt like the "wow moment" — AI recommending smarter shopping moves
- Maximized the dollar impact narrative for the demo panel ("$23.70 left on the table")

---

### v1.1 — Strategic Pivot: Discovery Over Cart (March 23)

**The trigger:** While reviewing the live Ulta Beauty website, we observed:
- "Only at Ulta" badge exists on some product images
- No corresponding "Marketplace" badge on marketplace products
- All other products have zero labeling — users can't tell the difference

This observation, combined with PM-level supply chain thinking, led to a critical realization:

**Decision: Remove the Cart Optimizer and swap/redirect recommendations entirely.**

**The problem with cart-level intervention:**

| Risk | Impact |
| --- | --- |
| **Cannibalizes Ulta's marketplace partners** | Ulta signed deals with 200+ brands. A tool that steers users away from marketplace items = undermining supply partnerships. No brand joins a marketplace that actively discourages purchases of their products. |
| **Destroys the B2B pitch** | We can't sell Ulta a tool that reduces their own marketplace GMV. Ulta takes 18% commission per marketplace sale — the optimizer was telling users to avoid those sales. |
| **Legal/contractual exposure** | Marketplace seller agreements likely prohibit preferencing direct inventory over marketplace inventory in the purchase flow. |
| **Sends users to competitors** | "Buy from Sephora instead" is literally directing traffic away from Ulta. No retailer would adopt this. |

**The insight:**

> The user problem isn't "I bought a marketplace item" — it's "I didn't know it was a marketplace item until checkout betrayed me."

The pain is the **surprise**, not the purchase itself. Users who knowingly buy marketplace items without points are fine with it. Users who discover the exclusion at checkout are furious.

**What changed:**

| Before (v1.0) | After (v1.1) |
| --- | --- |
| Cart Optimizer screen with swap/redirect | **Removed entirely** |
| "Buy from Sephora" / "Visit brand.com" CTAs | **Removed** — sends users to competitors |
| "Swap to Ulta Direct alternative" in cart | **Removed** — cannibalizes marketplace partners |
| Browse-level badges as one feature among many | **Primary value proposition** — this IS the product |
| Cart grouping with alternative suggestions | Cart grouping retained for clarity, but no steering |

**New focus:**

The prototype now solves the problem at **product discovery** — the moment transparency actually helps users make informed decisions without hurting Ulta's business:

1. **Source badges on every product card** — green "ULTA DIRECT" / amber "MARKETPLACE" pill
2. **Points eligibility indicator** — "Earn 420 pts ($4.20)" vs. "No points earned" per product
3. **Coupon eligibility indicator** — "Coupons apply" vs. "No coupons" shown at browse time
4. **Filter: "Points-eligible only"** — power users can self-filter without hiding marketplace items
5. **Broken/fixed toggle** — still the core demo mechanic, now focused purely on browse transparency

**Why this is a stronger B2B pitch:**

> "Your marketplace backlash isn't about the exclusion — it's about the surprise. Users feel betrayed at checkout. Give them transparency at browse time, and they'll still buy marketplace items — they just won't rage-quit your app afterwards. This protects your supply partnerships AND your loyalty program."

This reframe turns a product that Ulta could never adopt (cart optimizer that cannibalizes marketplace) into one they'd want to build (browse transparency that reduces backlash and preserves GMV).

---

## Principles Emerging From This Project

1. **Solve at discovery, not cart.** Transparency early = informed consent. Transparency late = betrayal.
2. **Never build features that hurt the target company's partnerships.** If you're pitching B2B, your product must strengthen their ecosystem, not undermine it.
3. **The "wow" feature isn't always the right feature.** The cart optimizer was impressive but strategically indefensible. The browse badge is simpler but shippable.
4. **Observe the live product.** The Ulta website screenshot showing "Only at Ulta" on some items (but no marketplace label) confirmed the gap exists in production today.
5. **Revenue framing must be bilateral.** Don't just frame user savings — frame how the solution preserves or grows the company's revenue too.

---

## What's Next

- [ ] Update prototype code to remove OptimizerScreen and cart swap logic
- [ ] Enhance BrowseScreen with filter/sort by points eligibility
- [ ] Simplify cart to show grouping + summary only (no steering)
- [ ] Update demo panel copy to reflect discovery-focused value prop
- [ ] Redeploy to Vercel
- [ ] LinkedIn post for PM Labs weekly showcase (March 25, 2026)
