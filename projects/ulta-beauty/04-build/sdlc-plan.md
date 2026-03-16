# SDLC Plan: AI Rewards Optimizer & Marketplace Navigator

**Date:** 2026-03-15
**Product:** AI Rewards Optimizer & Marketplace Navigator (MVP Prototype)
**Tech:** React + Vite + Tailwind CSS + TypeScript
**Deploy:** Vercel
**Build tool:** Lovable (paste `prototype-rewards-optimizer.md` as prompt)

---

## Timeline (1 Week)

| Day | Phase | Deliverable | Done? |
| --- | --- | --- | --- |
| Day 1 (Today) | Spec | `prototype-rewards-optimizer.md` finalized | ✅ |
| Day 1 | Spec | `sdlc-plan.md` created | ✅ |
| Day 2 | Build | Paste prompt into Lovable → first working build |  |
| Day 2-3 | Iterate | Fix layout, toggle, cart math, mobile responsiveness |  |
| Day 3-4 | Polish | Animations, demo panel stats, optimizer flow |  |
| Day 4-5 | QA | Test all modes, verify math, check mobile/desktop |  |
| Day 5 | Deploy | Push to GitHub → connect Vercel → live URL |  |
| Day 6-7 | Content | LinkedIn post draft, recording guide, screen captures |  |

---

## Build Checklist

### Core Features
- [ ] Product browsing grid with category filters
- [ ] Broken/fixed toggle (demo control panel)
- [ ] Product cards: badges appear/disappear based on mode
- [ ] Points display: accurate (fixed) vs. misleading (broken)
- [ ] Add to cart with quantity selector
- [ ] Cart view: grouped (fixed) vs. flat (broken)
- [ ] Cart summary with value breakdown (fixed mode)
- [ ] Coupon application: partial rejection reveal (broken mode)
- [ ] Points redemption: eligibility error (broken mode)
- [ ] "Value left on table" alert (fixed mode)
- [ ] Cart Optimizer with recommendations (fixed mode)
- [ ] Pre-populated cart (6 items: 4 direct + 2 marketplace)

### Demo Control Panel
- [ ] Broken/fixed toggle switch
- [ ] Impact stats (dynamic, based on cart)
- [ ] "At Ulta Scale" stats (static)
- [ ] Reset demo button
- [ ] Collapse/expand on mobile

### Polish
- [ ] Badge fade-in animation on mode switch
- [ ] Cart regrouping animation
- [ ] Value counter animation
- [ ] Coupon rejection shake
- [ ] Optimizer card stagger animation
- [ ] Mobile responsive (375px primary)
- [ ] Tablet/desktop layouts

### Pre-Deploy
- [ ] All cart math verified (points, coupons, totals)
- [ ] Both modes tested end-to-end
- [ ] No hardcoded API keys or secrets
- [ ] `.env.example` created if any env vars needed
- [ ] README.md with project description

### Deploy
- [ ] Code pushed to GitHub (`rajat-pm-lab/raj-pm-lab-UltaBeauty`)
- [ ] Vercel project connected
- [ ] Custom domain (optional)
- [ ] Live URL verified on mobile + desktop

---

## QA Test Cases

| Test | Expected (Broken) | Expected (Fixed) |
| --- | --- | --- |
| Browse products | All cards look identical | Direct = green badge, Marketplace = amber badge |
| Points on marketplace item | Shows "Earn X pts" (misleading) | Shows "No points earned" |
| Add marketplace item to cart | No warning | Bottom bar shows "X items won't earn points" |
| View cart | Flat list | Grouped by Direct / Marketplace |
| Apply 20% coupon | "Applied to 4 of 6" (surprise) | Pre-shows eligibility per item |
| Redeem points | "Eligible items only" error | Clear explanation + optimizer CTA |
| Cart Optimizer | Not available | Shows alternatives for marketplace items |
| Toggle mode while viewing cart | — | Items animate into/out of groups |
| Demo panel stats | Static | Dynamic based on cart contents |

---

## Risk Mitigation

| Risk | Mitigation |
| --- | --- |
| Lovable output doesn't match spec | Iterate in Lovable editor; extract to local if needed |
| Cart math errors | Use computed values (derive, don't store); add unit tests if complex |
| Mobile layout breaks | Test at 375px throughout; use Tailwind responsive classes |
| Demo panel covers content on mobile | Collapse by default on mobile; position as bottom sheet |
