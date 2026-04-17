---
name: manus-vacu-landing
description: Full Manus-style prompt for building a premium dark-themed single-page landing page for "VACU" — a vacuum-sealed fresh food delivery brand. Built with React, Tailwind CSS, TypeScript, and Framer Motion. Includes glassmorphism cards, looping background video, FAQ accordion, animated stats, marquee section, and full footer. Use this skill when the user wants to build a luxury/editorial dark landing page or needs a Manus-quality detailed React prompt.
---

# /manus-vacu-landing

A complete, production-ready Manus-style prompt for a premium dark landing page. Copy and paste directly into Claude or Manus.

## Usage

```
/manus-vacu-landing          # Output the full prompt
/manus-vacu-landing sections # List all sections with brief descriptions
```

---

## What You Must Do When Invoked

### Default: Output the full prompt

---

## THE FULL PROMPT

```
Build a single-page landing page for "VACU" — a premium vacuum-sealed fresh food delivery brand.

Stack: React, Tailwind CSS, TypeScript, Framer Motion.
Dependencies: framer-motion, lucide-react, radix-ui primitives, shadcn/ui components.

DESIGN SYSTEM
- Theme: Pure black background, white foreground. White is the primary color.
- All CSS variables use HSL. Monochrome, editorial, luxury aesthetic.
- Google Fonts: "Space Grotesk" for display/headings, "Inter" for body.
- All glassmorphism cards: bg-white/[0.03] backdrop-blur-2xl border border-white/[0.15] backdrop-saturate-[1.8] rounded-2xl p-8 mt-px-8 py-8
- Section padding: px-8 mt-px-16 py-24
- Headings use font-display (Space Grotesk), body font-sans (Inter)
- Muted text: text-muted-foreground (white ~60% opacity)
- Labels: text-xs uppercase tracking-[0.2em] text-muted-foreground
- All scroll animations use Framer Motion whileInView
- Use placeholder avatar images for the hero stats card

BACKGROUND
A fixed full-screen looping muted video behind all content. URL:
https://d3j1tc3i1gfma8.cloudfront.net/VACU/20250512-04553-e5d3e69f...
Set as: position fixed, inset-0, w-full h-full, object-fit cover, z-index -1, opacity ~0.4, autoPlay muted loop playsInline.

---

SECTIONS (in order):

1. NAVBAR
- Logo: "VACU" bold, Space Grotesk, left-aligned
- Horizontal nav links center: Home, About, Products, Contact (hidden on mobile)
- Right: shopping cart icon button with bg-white/[0.05] rounded-full padding
- Sticky, bg-black/40 backdrop-blur

2. HERO
- Left side (max-w-[250px]):
  - Small label text: "Emily Harper — Founder & CEO"
  - Large uppercase tagline: "Vacuum tanks keep flavor alive to your door"
  - "Make order" CTA button with ArrowUpRight icon (rotates 45° on hover)
- Right side: intentionally opacity-0 placeholder (reserved for future animation)
- Full viewport height (h-screen), items centered

3. BOTTOM CARDS (2-column grid)
Left card — glassmorphism:
  - 3 overlapping circular avatar images (space-x-[-8px])
  - Heading: "Clients trusting our VacuTech"
  - Badge: "Trusted by Farmers" with checkmark icon

Right card — glassmorphism:
  - Heading: "Precision Vacuum Tracking"
  - Stat: "[041] Real failure rate"
  - "Learn how it works" link with ArrowUpRight icon

4. STATS SECTION
2×4 grid. Each stat: very large number (text-5xl md:text-7xl) bold primary color, small label below.
Stats:
  - 981 — Freshness Score
  - 2:34 — Avg Delivery Time
  - 258 — Active Farms
  - 14k — Happy Customers
  - 99.2% — Seal Integrity
  - 48h — Cold Chain Window
  - 12 — States Covered
  - 4.9 — App Rating
All animate with whileInView scale from 0.8 to 1.

5. MARQUEE / FEATURE SECTION
Large bold headline (primary/white, uppercase).
Contains:
  - Stat card: "985 — Freshness Retention" with glassmorphism styling
  - "Learn more" button
  - Feature checklist: Preserve / Fast Seal / Ship / Track / Notify (each with checkmark icon)
  - Bottom CTA row: "Start your order and get a free VACU Starter Kit" → arrow button
  - 2–3 floating accent cards (bottom-right, bg-foreground/bg-background inverted)
All items animate in with Framer Motion whileInView.

6. FAQ SECTION
Two-column layout:
  - Left 1/3: Label "FAQ" + large heading "Common questions"
  - Right 2/3: Accordion with 5 items using useState for open/close + Framer Motion height animation
  FAQ items:
    1. How does vacuum sealing preserve freshness?
    2. What's the average delivery time?
    3. Can I customize my order?
    4. Is packaging eco-friendly?
    5. Do you deliver to my area?
  Each item: Plus/Minus icon toggle, border-b border-white/[0.1] separator

7. CTA SECTION
Centered, full-width:
  - Label: "Ready to start?"
  - Large headline: "Let's keep it fresh" ("fresh" in primary color)
  - "Get started" button with ArrowUpRight icon (rotates 45° on hover)

8. COMPANY SECTION
Centered headline: "VACU"
Description: "VACU is a Premier Freshness Distributor" + "Learn more" link
Two stacked glassmorphism cards side by side:
  - Left: "Certified Vacuum Materials" with checkmark badge + code chips (2-055/3-10/2-678-15)
  - Right: "Trusted Provider" badge + "10-year distribution" description
All animate with whileInView triggered.

9. PROCESS SECTION
Title: "The Process" / "From harvest to your table" (second line in primary)
2-column grid of step cards:
  01 — Source
  02 — Seal
  03 — Ship
  04 — Savor
Each card: glassmorphism, step number large and faded, title bold, short description.
Animate: scale from 0.5 → 1 on scroll (staggered).

10. FOOTER
4-column grid:
  - Col 1: VACU logo + tagline
  - Col 2: Product links
  - Col 3: Company links
  - Col 4: Support links
Bottom bar:
  - Left: © 2025 VACU
  - Right: Social icons (Twitter/X, LinkedIn, Instagram) with ArrowUpRight icons
```

---

## Sections Quick Reference

| # | Section | Key Element |
|---|---------|------------|
| 1 | Navbar | Logo + nav + cart |
| 2 | Hero | Tagline + CTA + muted video BG |
| 3 | Bottom Cards | Glassmorphism 2-col |
| 4 | Stats | 2×4 animated numbers |
| 5 | Marquee/Features | Checklist + floating cards |
| 6 | FAQ | Accordion with Framer Motion |
| 7 | CTA | Centered headline + button |
| 8 | Company | Two stacked info cards |
| 9 | Process | 4-step staggered cards |
| 10 | Footer | 4-col + social |
