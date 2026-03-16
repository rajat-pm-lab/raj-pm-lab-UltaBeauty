# Prototype: AI Rewards Optimizer & Marketplace Navigator

## For use with Lovable or Bolt.new — paste this entire file as the prompt.

---

## What to Build

A React + Tailwind CSS single-page app that demonstrates an **AI-powered rewards optimizer for Ulta Beauty shoppers**. This is a working prototype to pitch Ulta's product team and showcase on LinkedIn — it must feel like a real, polished beauty shopping UI that solves the #1 user complaint: **UB Marketplace items look identical to direct Ulta items but silently exclude rewards points, promo codes, and gifts with purchase.**

The app has a **broken/fixed toggle** that lets viewers experience the current pain (broken mode) and then see the fix (fixed mode).

**Tech stack:** React, Vite, Tailwind CSS, TypeScript. No backend needed — all mock data and simulated logic.

---

## Design System (Match Ulta Beauty Brand)

```
Colors:
- Primary Pink: #E91E8C (Ulta Beauty signature magenta — CTAs, highlights, active states)
- Light Pink: #FF6B9D (secondary buttons, hover states)
- Black: #000000 (Ulta logo text, headers)
- Dark Text: #1A1A1A
- Body Text: #4A4A4A
- Light Gray Background: #F5F5F5
- Card Background: #FFFFFF
- Border Gray: #E0E0E0
- Ulta Direct Green: #2E7D32 (badge: "you're good, points work here")
- Ulta Direct Green Light: #E8F5E9 (badge background)
- Marketplace Amber: #F9A825 (badge: "no points, no coupons")
- Marketplace Amber Light: #FFF8E1 (badge background)
- Points Gold: #C89B3C (Ultamate Rewards gold)
- Error Red: #C62828
- Error Red Light: #FFEBEE
- Info Blue: #1565C0

Typography:
- Font: Inter or system font stack (-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)
- Headings: 700 weight, #000000
- Subheadings: 600 weight, #1A1A1A
- Body: 400 weight, #4A4A4A
- Price: 700 weight, #1A1A1A
- Sale price / savings: 700 weight, #E91E8C
- Badge labels: 600 weight, uppercase, 11px, letter-spacing 0.5px

Layout:
- Mobile-first (375px primary), responsive to tablet (768px) and desktop (1024px+)
- Top bar: "ULTA BEAUTY" text logo (black, bold, tracked wide) left + rewards balance right
- Search bar: full-width, below top bar, sticky
- Product grid: 2 columns on mobile, 3 on tablet, 4 on desktop
- Card style: white background, subtle shadow (0 2px 8px rgba(0,0,0,0.08)), rounded corners (12px)
- Sticky bottom bar: cart summary with total + checkout button
```

---

## Screens & Components to Build

### Global: Demo Control Panel

A **floating toggle panel** in the top-right corner, always visible. This is the most important UI element — it controls the entire demo experience.

```
┌─────────────────────────────────────────┐
│  🎮 Demo Mode                           │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ 🔴 Broken    │  ✅ Fixed        │    │  ← toggle switch (pill style)
│  │ Current Ulta │  With Optimizer  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ── This Cart's Impact ──               │
│  Points at risk:     590 pts ($5.90)    │
│  Coupon savings lost: $11.80            │
│  Total left on table: $23.70            │
│                                         │
│  ── At Ulta Scale ──                    │
│  46.7M loyalty members affected         │
│  $50M–$125M marketplace GMV at risk     │
│  Source: FY2025 earnings + review data   │
│                                         │
│  [Reset Demo]                           │
└─────────────────────────────────────────┘
```

- On mobile: show only the toggle pill at top-right. Tap to expand the full panel.
- On desktop: show full panel as a sidebar or floating card.
- The toggle should be a smooth pill-style switch with clear labeling.
- "This Cart's Impact" section updates dynamically based on what's in the cart.
- "At Ulta Scale" is static — sourced from FY2025 earnings data.

---

### Screen 1: Product Browsing (Category / Search Page)

Simulates an Ulta Beauty product browsing experience with a mix of direct and marketplace items.

**Top bar:**
- Left: "ULTA BEAUTY" in black, bold, uppercase, letter-spacing 2px
- Right: "⭐ 12,450 pts ($12.45)" in Points Gold (#C89B3C)

**Search bar:**
- Full-width, 44px height, rounded (24px), light gray background
- Placeholder: "Search beauty products..."
- Magnifying glass icon left

**Category filter tabs (horizontal scroll):**
- "All" | "Skincare" | "Makeup" | "Haircare" | "Fragrance"
- Active tab: pink underline (#E91E8C) + bold text
- Inactive: gray text

**Product grid:**

#### Product Card — Fixed Mode:
```
┌──────────────────────────────┐
│                              │
│    [Product Image / Emoji]   │
│                              │
│  ┌────────────────────┐      │
│  │ ✅ ULTA DIRECT     │      │  ← green badge (rounded pill)
│  └────────────────────┘      │
│  or                          │
│  ┌────────────────────┐      │
│  │ ⚠️ MARKETPLACE     │      │  ← amber badge (rounded pill)
│  └────────────────────┘      │
│                              │
│  BRAND NAME (uppercase, 11px)│
│  Product Name (14px, 600)    │
│  ★★★★☆ (142)                │
│                              │
│  $XX.XX                      │
│                              │
│  ⭐ Earn XXX pts ($X.XX)     │  ← Points Gold for direct
│  or                          │
│  ❌ No points earned         │  ← Error Red for marketplace
│                              │
│  ✅ Coupons apply            │  ← green text for direct
│  or                          │
│  ❌ No coupons               │  ← red text for marketplace
│                              │
│  [    Add to Cart    ]       │  ← pink button (#E91E8C)
│                              │
└──────────────────────────────┘
```

#### Product Card — Broken Mode:
```
┌──────────────────────────────┐
│                              │
│    [Product Image / Emoji]   │
│                              │
│  BRAND NAME (uppercase, 11px)│
│  Product Name (14px, 600)    │
│  ★★★★☆ (142)                │
│                              │
│  $XX.XX                      │
│                              │
│  ⭐ Earn XXX pts ($X.XX)     │  ← MISLEADING: shows points
│                              │     even for marketplace items
│                              │
│  [    Add to Cart    ]       │  ← same pink button
│                              │
└──────────────────────────────┘
```

**Key difference:** In broken mode, ALL items look identical. No badges, no coupon eligibility indicator, and marketplace items FALSELY show "Earn points" (simulating the real Ulta.com behavior where points estimates appear on marketplace items but aren't actually honored).

**"Add to Cart" button behavior:**
- On click: button changes to quantity selector: [ − ] 1 [ + ]
- Show a brief toast: "Added to cart ✓"
- Update the sticky bottom cart bar

---

### Screen 2: Cart Review

Accessed by tapping the bottom cart bar or a cart icon.

#### Cart — Fixed Mode:

```
┌─────────────────────────────────────────┐
│  🛒 Your Cart (6 items)                │
│                                         │
│  ═══ ULTA DIRECT (4 items) ════════════ │
│  Points & coupons work on these items   │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ ✅ Clinique Moisture Surge 100H │    │
│  │    $42.00          [− 1 +]      │    │
│  │    ⭐ Earn 420 pts ($4.20)      │    │
│  │    🏷️ 20% coupon: −$8.40       │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ ✅ NYX Professional Lip Liner   │    │
│  │    $10.00          [− 1 +]      │    │
│  │    ⭐ Earn 100 pts ($1.00)      │    │
│  │    🏷️ 20% coupon: −$2.00       │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ ✅ Tarte Shape Tape Concealer   │    │
│  │    $32.00          [− 1 +]      │    │
│  │    ⭐ Earn 320 pts ($3.20)      │    │
│  │    🏷️ 20% coupon: −$6.40       │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ ✅ Redken All Soft Shampoo      │    │
│  │    $28.00          [− 1 +]      │    │
│  │    ⭐ Earn 280 pts ($2.80)      │    │
│  │    🏷️ 20% coupon: −$5.60       │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ═══ UB MARKETPLACE (2 items) ═════════ │
│  ⚠️ No points, coupons, or GWP          │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ ⚠️ K18 Leave-In Molecular Mask  │    │
│  │    $29.00          [− 1 +]      │    │
│  │    ❌ No points earned          │    │
│  │    ❌ No coupon applied         │    │
│  │    💡 Same price at k18hair.com │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ ⚠️ Olaplex No. 3 Hair Perfector│    │
│  │    $30.00          [− 1 +]      │    │
│  │    ❌ No points earned          │    │
│  │    ❌ No coupon applied         │    │
│  │    💡 Available at Sephora $30  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ═══════════════════════════════════════ │
│                                         │
│  ┌─────────── Cart Summary ──────────┐  │
│  │                                   │  │
│  │ Subtotal (6 items):     $171.00   │  │
│  │ 20% Off Coupon          −$22.40   │  │
│  │ (applied to 4 direct items)       │  │
│  │                                   │  │
│  │ Points earned:     1,120 ($11.20) │  │
│  │                                   │  │
│  │ ┌──── ⚠️ VALUE ALERT ─────────┐  │  │
│  │ │ Points NOT earned:  590 pts  │  │  │
│  │ │ Coupon NOT applied: $11.80   │  │  │
│  │ │ ──────────────────────────── │  │  │
│  │ │ YOU'RE LEAVING              │  │  │
│  │ │ $23.70 ON THE TABLE         │  │  │
│  │ └─────────────────────────────┘  │  │
│  │                                   │  │
│  │ [  🤖 Optimize My Cart  ]        │  │  ← Big pink CTA
│  │ [    Proceed to Checkout  ]       │  │  ← Secondary button
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

#### Cart — Broken Mode:

```
┌─────────────────────────────────────────┐
│  🛒 Your Cart (6 items)                │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ Clinique Moisture Surge 100H    │    │
│  │ $42.00              [− 1 +]     │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │ NYX Professional Lip Liner      │    │
│  │ $10.00              [− 1 +]     │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │ Tarte Shape Tape Concealer      │    │
│  │ $32.00              [− 1 +]     │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │ Redken All Soft Shampoo         │    │
│  │ $28.00              [− 1 +]     │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │ K18 Leave-In Molecular Mask     │    │  ← no flag
│  │ $29.00              [− 1 +]     │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │ Olaplex No. 3 Hair Perfector    │    │  ← no flag
│  │ $30.00              [− 1 +]     │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Subtotal:                    $171.00   │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │ 🏷️ Apply Coupon Code           │    │
│  │ [  20OFFPRESTIGE   ] [Apply]    │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [    Proceed to Checkout    ]          │
│                                         │
└─────────────────────────────────────────┘
```

- Flat list, no grouping, no badges, no points info, no coupon preview
- Coupon code input is available but user doesn't know what will happen until they apply it

---

### Screen 3: Checkout Reveal (Broken Mode Only — THE PAIN MOMENT)

When user taps "Apply" on the coupon code in broken mode, show an animated reveal:

**Step 1 — Coupon applied with partial rejection:**
```
┌─────────────────────────────────────────┐
│                                         │
│  🏷️ Coupon Applied                     │
│                                         │
│  "20OFFPRESTIGE" — 20% Off             │
│                                         │
│  Applied to 4 of 6 items.              │
│  2 items are not eligible.              │
│                                         │
│  (Which 2? No further explanation.)     │
│                                         │
└─────────────────────────────────────────┘
```

Show a brief amber banner at top of cart. The cart total updates:

```
  Subtotal:              $171.00
  Discount (20% off):     −$22.40
  ─────────────────────────────
  Total:                  $148.60

  You expected to save:    $34.20
  You actually saved:      $22.40
  💸 Missing savings:      $11.80
```

**Step 2 — Points redemption attempt:**

When user taps "Redeem Points" at checkout:
```
┌─────────────────────────────────────────┐
│                                         │
│  Redeem Ultamate Rewards Points         │
│                                         │
│  Your balance: 12,450 pts ($12.45)      │
│                                         │
│  ❌ Points can only be applied to       │
│     eligible items in your cart.        │
│                                         │
│  Eligible subtotal: $112.00             │
│  (You expected: $171.00)                │
│                                         │
│  Why can't I use points on everything?  │
│  ▸ Learn more about UB Marketplace      │
│                                         │
│  [Redeem on Eligible Items]             │
│  [Cancel]                               │
│                                         │
└─────────────────────────────────────────┘
```

After this frustrating reveal, show a subtle prompt at the bottom:
```
💡 "This could have been avoided. Switch to Fixed mode to see how."
```
Tapping it switches the toggle to Fixed mode.

---

### Screen 4: Cart Optimizer (Fixed Mode Only — THE FIX)

When user taps "Optimize My Cart" in fixed mode:

```
┌─────────────────────────────────────────┐
│  🤖 AI Cart Optimizer                   │
│                                         │
│  I analyzed your cart and found ways    │
│  to save you $23.70 in lost value:     │
│                                         │
│  ── RECOMMENDATION 1 ───────────────── │
│                                         │
│  ⚠️ K18 Leave-In Molecular Mask — $29  │
│  Currently: UB Marketplace              │
│  ❌ No points · ❌ No coupon            │
│                                         │
│  ┌─ Option A ─────────────────────┐     │
│  │ Buy direct from k18hair.com    │     │
│  │ Same price: $29.00             │     │
│  │ + Free shipping over $25       │     │
│  │ + Earn K18 loyalty points      │     │
│  │                                │     │
│  │ [Visit k18hair.com ↗]         │     │
│  └────────────────────────────────┘     │
│                                         │
│  ┌─ Option B ─────────────────────┐     │
│  │ Ulta Direct alternative:       │     │
│  │ IT Cosmetics Bye Bye Pores     │     │
│  │ Primer — $38.00 (Ulta Direct)  │     │
│  │ ✅ Earn 380 pts + 20% coupon   │     │
│  │ Net after coupon: $30.40       │     │
│  │                                │     │
│  │ [Swap to This]                 │     │
│  └────────────────────────────────┘     │
│                                         │
│  [Keep as-is]                           │
│                                         │
│  ── RECOMMENDATION 2 ───────────────── │
│                                         │
│  ⚠️ Olaplex No. 3 — $30               │
│  Currently: UB Marketplace              │
│  ❌ No points · ❌ No coupon            │
│                                         │
│  ┌─ Option A ─────────────────────┐     │
│  │ Buy at Sephora.com             │     │
│  │ Same price: $30.00             │     │
│  │ + Earn Sephora Beauty Insider  │     │
│  │   points                       │     │
│  │                                │     │
│  │ [Visit Sephora ↗]             │     │
│  └────────────────────────────────┘     │
│                                         │
│  ┌─ Option B ─────────────────────┐     │
│  │ Wait for Ulta Direct restock   │     │
│  │ Last in stock: 2 weeks ago     │     │
│  │ We'll notify you when it's     │     │
│  │ back as a direct item          │     │
│  │                                │     │
│  │ [Set Restock Alert 🔔]        │     │
│  └────────────────────────────────┘     │
│                                         │
│  [Keep as-is]                           │
│                                         │
│  ═══ OPTIMIZED SUMMARY ═══════════════ │
│                                         │
│  ┌────────────────────────────────────┐  │
│  │ Before Optimization:              │  │
│  │   Points earned: 530 ($5.30)      │  │
│  │   Coupon saved: $22.40            │  │
│  │   Total value: $27.70             │  │
│  │                                   │  │
│  │ After Optimization:               │  │
│  │   Points earned: 1,120 ($11.20)   │  │
│  │   Coupon saved: $22.40            │  │
│  │   Alt points: ~$1.50 (est.)       │  │
│  │   Total value: $35.10             │  │
│  │                                   │  │
│  │ ✅ EXTRA VALUE CAPTURED: +$7.40   │  │
│  └────────────────────────────────────┘  │
│                                         │
│  [Done — Back to Cart]                  │
│                                         │
└─────────────────────────────────────────┘
```

**Interactions:**
- "Visit k18hair.com" / "Visit Sephora" — opens in new tab (use # placeholder links)
- "Swap to This" — replaces the marketplace item with the suggested direct alternative in the cart. Cart updates, points recalculate.
- "Set Restock Alert" — shows a brief "Alert set! We'll notify you." toast
- "Keep as-is" — dismisses that recommendation
- "Done — Back to Cart" — returns to cart with any changes applied

---

### Sticky Bottom Cart Bar

Always visible at bottom when browsing products (Screen 1):

```
┌─────────────────────────────────────────┐
│  🛒 6 items · $171.00     [View Cart →] │
└─────────────────────────────────────────┘
```

In fixed mode, add a warning if marketplace items are in cart:
```
┌─────────────────────────────────────────┐
│  🛒 6 items · $171.00                   │
│  ⚠️ 2 items won't earn points           │
│                          [View Cart →]  │
└─────────────────────────────────────────┘
```

---

## Mock Data — Full Product Catalog (28 Products)

Use this exact data. 17 direct items, 11 marketplace items across 4 categories.

```json
[
  {
    "id": 1,
    "name": "Moisture Surge 100H Auto-Replenishing Hydrator",
    "brand": "Clinique",
    "category": "skincare",
    "price": 42.00,
    "image": "💧",
    "source": "ulta_direct",
    "pointsEarned": 420,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.5,
    "reviewCount": 2847
  },
  {
    "id": 2,
    "name": "Professional Makeup Slim Lip Pencil",
    "brand": "NYX",
    "category": "makeup",
    "price": 10.00,
    "image": "💋",
    "source": "ulta_direct",
    "pointsEarned": 100,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.3,
    "reviewCount": 1523
  },
  {
    "id": 3,
    "name": "Shape Tape Full Coverage Concealer",
    "brand": "Tarte",
    "category": "makeup",
    "price": 32.00,
    "image": "✨",
    "source": "ulta_direct",
    "pointsEarned": 320,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.6,
    "reviewCount": 5123
  },
  {
    "id": 4,
    "name": "All Soft Shampoo",
    "brand": "Redken",
    "category": "haircare",
    "price": 28.00,
    "image": "🧴",
    "source": "ulta_direct",
    "pointsEarned": 280,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.4,
    "reviewCount": 987
  },
  {
    "id": 5,
    "name": "Leave-In Molecular Repair Hair Mask",
    "brand": "K18",
    "category": "haircare",
    "price": 29.00,
    "image": "💆",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.7,
    "reviewCount": 3421,
    "directAlternative": {
      "retailer": "k18hair.com",
      "url": "#",
      "price": 29.00,
      "pointsProgram": "K18 Rewards"
    }
  },
  {
    "id": 6,
    "name": "No. 3 Hair Perfector",
    "brand": "Olaplex",
    "category": "haircare",
    "price": 30.00,
    "image": "🔬",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.5,
    "reviewCount": 4892,
    "directAlternative": {
      "retailer": "Sephora",
      "url": "#",
      "price": 30.00,
      "pointsProgram": "Beauty Insider"
    }
  },
  {
    "id": 7,
    "name": "Retinol 0.5% in Squalane",
    "brand": "The Ordinary",
    "category": "skincare",
    "price": 15.00,
    "image": "🧪",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.4,
    "reviewCount": 2156,
    "directAlternative": {
      "retailer": "theordinary.com",
      "url": "#",
      "price": 15.00
    }
  },
  {
    "id": 8,
    "name": "Cloud Paint Seamless Cheek Color",
    "brand": "Glossier",
    "category": "makeup",
    "price": 22.00,
    "image": "🎨",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.3,
    "reviewCount": 1876,
    "directAlternative": {
      "retailer": "glossier.com",
      "url": "#",
      "price": 22.00,
      "pointsProgram": "Glossier Rewards"
    }
  },
  {
    "id": 9,
    "name": "Unseen Sunscreen SPF 40",
    "brand": "Supergoop!",
    "category": "skincare",
    "price": 38.00,
    "image": "☀️",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.6,
    "reviewCount": 3654,
    "directAlternative": {
      "retailer": "supergoop.com",
      "url": "#",
      "price": 38.00,
      "pointsProgram": "Supergoop Rewards"
    }
  },
  {
    "id": 10,
    "name": "Matte Lipstick",
    "brand": "MAC",
    "category": "makeup",
    "price": 23.00,
    "image": "💄",
    "source": "ulta_direct",
    "pointsEarned": 230,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.5,
    "reviewCount": 6234
  },
  {
    "id": 11,
    "name": "Ultra Fine Micro Brow Pencil",
    "brand": "NYX",
    "category": "makeup",
    "price": 11.00,
    "image": "✏️",
    "source": "ulta_direct",
    "pointsEarned": 110,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.2,
    "reviewCount": 892
  },
  {
    "id": 12,
    "name": "BioLumin-C Vitamin C Serum",
    "brand": "Dermalogica",
    "category": "skincare",
    "price": 79.00,
    "image": "🍊",
    "source": "ulta_direct",
    "pointsEarned": 790,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.4,
    "reviewCount": 654
  },
  {
    "id": 13,
    "name": "Born This Way Undetectable Foundation",
    "brand": "Too Faced",
    "category": "makeup",
    "price": 46.00,
    "image": "🪞",
    "source": "ulta_direct",
    "pointsEarned": 460,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.3,
    "reviewCount": 3456
  },
  {
    "id": 14,
    "name": "Airwrap Multi-Styler Complete Long",
    "brand": "Dyson",
    "category": "haircare",
    "price": 599.99,
    "image": "💨",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.1,
    "reviewCount": 1245,
    "directAlternative": {
      "retailer": "dyson.com",
      "url": "#",
      "price": 599.99,
      "pointsProgram": "Dyson Rewards"
    }
  },
  {
    "id": 15,
    "name": "Good Genes All-in-One Lactic Acid Treatment",
    "brand": "Sunday Riley",
    "category": "skincare",
    "price": 85.00,
    "image": "🧬",
    "source": "ulta_direct",
    "pointsEarned": 850,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.3,
    "reviewCount": 2345
  },
  {
    "id": 16,
    "name": "Lip Sleeping Mask",
    "brand": "Laneige",
    "category": "skincare",
    "price": 24.00,
    "image": "👄",
    "source": "ulta_direct",
    "pointsEarned": 240,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.7,
    "reviewCount": 8765
  },
  {
    "id": 17,
    "name": "Boy Brow Grooming Pomade",
    "brand": "Glossier",
    "category": "makeup",
    "price": 18.00,
    "image": "🖌️",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.4,
    "reviewCount": 2341,
    "directAlternative": {
      "retailer": "glossier.com",
      "url": "#",
      "price": 18.00,
      "pointsProgram": "Glossier Rewards"
    }
  },
  {
    "id": 18,
    "name": "Backstage Face & Body Foundation",
    "brand": "Dior",
    "category": "makeup",
    "price": 45.00,
    "image": "💎",
    "source": "ulta_direct",
    "pointsEarned": 450,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.5,
    "reviewCount": 1876
  },
  {
    "id": 19,
    "name": "No. 7 Bonding Oil",
    "brand": "Olaplex",
    "category": "haircare",
    "price": 30.00,
    "image": "💧",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.6,
    "reviewCount": 3421,
    "directAlternative": {
      "retailer": "Sephora",
      "url": "#",
      "price": 30.00,
      "pointsProgram": "Beauty Insider"
    }
  },
  {
    "id": 20,
    "name": "Can't Stop Won't Stop Foundation",
    "brand": "NYX",
    "category": "makeup",
    "price": 16.00,
    "image": "🎭",
    "source": "ulta_direct",
    "pointsEarned": 160,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.1,
    "reviewCount": 1432
  },
  {
    "id": 21,
    "name": "Brow Wiz Pencil",
    "brand": "Anastasia Beverly Hills",
    "category": "makeup",
    "price": 25.00,
    "image": "✏️",
    "source": "ulta_direct",
    "pointsEarned": 250,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.5,
    "reviewCount": 7654
  },
  {
    "id": 22,
    "name": "Soleil Blanc Eau de Parfum",
    "brand": "Tom Ford",
    "category": "fragrance",
    "price": 195.00,
    "image": "🌸",
    "source": "ulta_direct",
    "pointsEarned": 1950,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.6,
    "reviewCount": 543
  },
  {
    "id": 23,
    "name": "Flowerbomb Eau de Parfum",
    "brand": "Viktor & Rolf",
    "category": "fragrance",
    "price": 110.00,
    "image": "🌺",
    "source": "ulta_direct",
    "pointsEarned": 1100,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.7,
    "reviewCount": 4321
  },
  {
    "id": 24,
    "name": "Santal 33 Eau de Parfum",
    "brand": "Le Labo",
    "category": "fragrance",
    "price": 215.00,
    "image": "🪵",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.5,
    "reviewCount": 876,
    "directAlternative": {
      "retailer": "lelabofragrances.com",
      "url": "#",
      "price": 215.00
    }
  },
  {
    "id": 25,
    "name": "Watermelon Glow Niacinamide Dew Drops",
    "brand": "Glow Recipe",
    "category": "skincare",
    "price": 35.00,
    "image": "🍉",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.4,
    "reviewCount": 2987,
    "directAlternative": {
      "retailer": "glowrecipe.com",
      "url": "#",
      "price": 35.00,
      "pointsProgram": "Glow Miles"
    }
  },
  {
    "id": 26,
    "name": "Honey Infused Hair Oil",
    "brand": "Gisou",
    "category": "haircare",
    "price": 44.00,
    "image": "🍯",
    "source": "marketplace",
    "pointsEarned": 0,
    "couponEligible": false,
    "gwpEligible": false,
    "rating": 4.3,
    "reviewCount": 1654,
    "directAlternative": {
      "retailer": "gisou.com",
      "url": "#",
      "price": 44.00
    }
  },
  {
    "id": 27,
    "name": "Total Results Rock It Texture Spray",
    "brand": "Matrix",
    "category": "haircare",
    "price": 22.00,
    "image": "💨",
    "source": "ulta_direct",
    "pointsEarned": 220,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.2,
    "reviewCount": 765
  },
  {
    "id": 28,
    "name": "Better Than Sex Volumizing Mascara",
    "brand": "Too Faced",
    "category": "makeup",
    "price": 29.00,
    "image": "👁️",
    "source": "ulta_direct",
    "pointsEarned": 290,
    "couponEligible": true,
    "gwpEligible": true,
    "rating": 4.4,
    "reviewCount": 9876
  }
]
```

**Summary:** 17 direct (IDs: 1-4, 10-13, 15-16, 18, 20-23, 27-28) + 11 marketplace (IDs: 5-9, 14, 17, 19, 24-26)

---

## State Management

Use React Context or Zustand for global state:

```typescript
interface Product {
  id: number;
  name: string;
  brand: string;
  category: 'skincare' | 'makeup' | 'haircare' | 'fragrance';
  price: number;
  image: string;
  source: 'ulta_direct' | 'marketplace';
  pointsEarned: number;
  couponEligible: boolean;
  gwpEligible: boolean;
  rating: number;
  reviewCount: number;
  directAlternative?: {
    retailer: string;
    url: string;
    price: number;
    pointsProgram?: string;
  };
}

interface CartItem extends Product {
  quantity: number;
}

interface AppState {
  // Demo mode
  mode: 'broken' | 'fixed';
  showDemoPanel: boolean;

  // Products & browsing
  products: Product[];
  activeCategory: string;
  searchQuery: string;

  // Cart
  cart: CartItem[];
  couponApplied: boolean;
  couponCode: string;
  pointsRedemptionAttempted: boolean;

  // User rewards
  rewardsBalance: number; // 12,450

  // Optimizer
  showOptimizer: boolean;
  optimizerActions: OptimizerAction[];

  // Current screen
  currentScreen: 'browse' | 'cart' | 'checkout' | 'optimizer';
}

interface OptimizerAction {
  productId: number;
  action: 'redirect' | 'swap' | 'alert' | 'keep';
  alternativeProduct?: Product;
}
```

**Computed values (derive, don't store):**
- `cartTotal`: sum of item prices × quantities
- `directItemsTotal`: sum of direct items only
- `marketplaceItemsTotal`: sum of marketplace items only
- `couponSavings`: directItemsTotal × 0.20 (when coupon applied)
- `pointsEarned`: sum of pointsEarned for direct items in cart
- `pointsLost`: sum of estimated points for marketplace items (price × 10 points per dollar)
- `totalValueLost`: coupon savings lost + points value lost

---

## Broken vs. Fixed Behavior Matrix

| Element | Broken Mode | Fixed Mode |
| --- | --- | --- |
| Product badges | None — all items look identical | Green "ULTA DIRECT" or amber "MARKETPLACE" pill badge |
| Points display | Shows "Earn X pts" for ALL items (misleading) | Shows "Earn X pts" for direct, "No points" for marketplace |
| Coupon indicator | Not shown on products | "Coupons apply" / "No coupons" per product |
| Cart grouping | Flat list, alphabetical | Grouped: "Ulta Direct" section + "UB Marketplace" section |
| Cart item detail | Name + price only | Name + price + points + coupon impact + alternative tips |
| Cart summary | Simple subtotal | Full breakdown: earned vs. lost points, coupon applied vs. rejected |
| Coupon application | Apply → "4 of 6 eligible" (surprise, no explanation) | Pre-shows eligibility before applying |
| Points redemption | Generic "eligible items only" error | Clear explanation of which items and why |
| Value alert | Not shown | "YOU'RE LEAVING $XX ON THE TABLE" with optimizer CTA |
| Cart Optimizer | Not available | Full recommendation engine |
| Bottom cart bar | Item count + total | Item count + total + marketplace warning |

---

## Navigation

Use React Router or simple state-based navigation:

```
Browse (/) → Cart (/cart) → Checkout Reveal (broken only) → Optimizer (fixed only)
```

**Bottom navigation is NOT needed** (unlike PC Express which mimicked a full app). This prototype focuses on the shopping → cart → checkout flow only.

Instead, use:
- "ULTA BEAUTY" logo in top-left → always navigates to browse
- Cart icon in top-right → navigates to cart
- Back arrow on cart/optimizer screens → navigates back

---

## Animations & Polish

1. **Mode toggle:** When switching broken → fixed, all product cards animate:
  - Badges fade in (opacity 0→1, 300ms ease-out)
  - Points text changes color (red flash for marketplace items)
  - Slight card "pulse" effect (scale 1.01 → 1.0, 200ms)

2. **Cart grouping animation:** When switching to fixed mode while viewing cart:
  - Items slide and regroup into Direct / Marketplace sections (400ms)
  - Section headers slide in from left (200ms delay)

3. **Value alert:** The "YOU'RE LEAVING $XX ON THE TABLE" counter animates:
  - Number counts up from $0 to final value (800ms, ease-out)
  - Alert box has a subtle amber pulse glow

4. **Optimizer cards:** Slide in staggered (each card 200ms after previous)

5. **Coupon rejection (broken mode):**
  - "2 items not eligible" text appears with red highlight
  - Subtle shake on the total line showing lost savings

6. **Add to cart:** Button morphs to quantity selector with a smooth width transition

7. **Toast notifications:** Slide up from bottom, auto-dismiss after 2s

8. **Button press:** Scale to 0.97 on press, spring back (100ms)

---

## Important Implementation Notes

1. **No real API calls.** All data is mocked. Product catalog is the JSON above. Cart Optimizer logic just looks up the `directAlternative` field on marketplace items.

2. **The broken mode must feel realistic.** It should look like a normal, well-designed shopping app. The surprise at checkout is the point — the user should NOT see it coming. No visual hints that something is wrong.

3. **The fixed mode must feel empowering.** Every badge, warning, and optimizer recommendation should make the user feel "I'm in control of my money." Use confident green for direct items, cautious amber for marketplace.

4. **Points math: 1 point = $0.01.** This is Ulta's actual conversion rate for Ultamate Rewards. So 420 points = $4.20 in value. Always show both the point count and dollar value.

5. **Coupon: "20OFFPRESTIGE" gives 20% off.** Only applies to direct items. This mimics Ulta's real prestige coupons that exclude marketplace.

6. **Mobile-first.** Primary layout is 375px. Use Tailwind responsive classes (sm:, md:, lg:) for larger screens. The demo control panel should collapse to a small floating pill on mobile.

7. **Pre-populate the cart** with a default set of 6 items for the demo (IDs: 1, 2, 3, 4, 5, 6 — 4 direct + 2 marketplace). This way the viewer sees the problem immediately when they open the cart, without needing to add items manually.

8. **Brand-accurate product names.** The mock data uses real Ulta Beauty brand names and products. This makes the demo feel authentic and relatable to anyone who shops at Ulta.

9. **The "At Ulta Scale" stats in the demo panel are real.** 46.7M is from FY2025 earnings (record). $50M-$125M is our calculated estimate if marketplace reaches 10% of ~$2.5B digital GMV but users refuse to buy without rewards.
