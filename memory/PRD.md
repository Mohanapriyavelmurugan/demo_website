# Alyvn / ClinoveAI — Marketing Website PRD

## Original Problem Statement
Premium, Awwwards-level marketing website for a healthcare AI company **Alyvn** (product: **ClinoveAI**).
Stack: React + TypeScript + Tailwind CSS. Palette: deep navy/blue + teal.
9 pages. Requirements: animated aurora hero, liquid glass-morphism, layered/stacked cards,
3D/parallax moments, visual graphs, Lenis smooth scroll, Framer Motion micro-interactions.
Constraints: no generic templates, **no mention of AI models**, all medical claims emphasize
**physician-in-the-loop**. Fonts: Fraunces (display) + Inter (body).

## User Choices (confirmed)
- Dark navy premium theme (locked, no toggle)
- Hero: interactive 3D floating glass panels reacting to mouse (Framer Motion)
- Full animated interactive charts (Recharts)
- Home page perfected first, then roll style to remaining 8 pages
- Clean TypeScript (no @ts-nocheck)

## Design System (in /app/design_guidelines.json + index.css)
- CSS vars: dark navy bg (222 55% 4%), teal primary (172 66% 45%). Locked in :root.
- Utilities: `.glass`, `.glass-strong`, `.text-gradient-teal`, `.font-display`, `.aurora-orb`, `.grain`
- Tailwind: navy.{deep,card,light}, teal.glow, float/aurora-drift animations
- Reusable: `CountUp.tsx`, `TiltCard.tsx`, `AuroraBackground.tsx`

## Implemented (2026-06-11)
- Dark navy design system, tailwind config, index.css glass utilities
- Navbar (dark glass, scroll-aware, typed, testids), Footer (dark, typed)
- AuroraBackground tuned for dark theme + vignette for contrast
- **Home.tsx** fully redesigned: 3D hero (HeroPanels), count-up stats,
  interactive Recharts (DiabetesCharts: bar/donut/area), layered glass narrative sections, CTA
- All touched files typed (no @ts-nocheck). Compiles clean.

## Backlog / Remaining (P0 = next)
- P0: Roll dark-navy premium style to the other 8 pages: About, Vision, Product,
  Validation, Evidence, Team, Contact, Legal (still old flat/light layouts + @ts-nocheck)
- P0: Product & Vision — layered/stacked depth-staggered card compositions
- P1: Contact form functional UI + wire to backend `/api/contact` (backend route not built yet)
- P2: Remove @ts-nocheck from remaining pages + shadcn/ui components; full typing
- Note: removed fixed navbar spacer — remaining pages need top padding when redesigned

## Architecture
- Frontend: React 19 + TS (CRA/craco), React Router 7, Tailwind, Framer Motion 12, Lenis, Recharts 3.6
- src/components/ (Navbar, Footer, AuroraBackground, SmoothScroll, CountUp, TiltCard, home/*)
- src/pages/ (9 pages), src/components/ui (shadcn)
- Backend: FastAPI + MongoDB (not yet used for this site)
