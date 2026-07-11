# Alyvn / ClinoveAI — Marketing Website PRD

## Original Problem Statement
Premium, Awwwards-level marketing website for a healthcare AI company **Alyvn** (product: **ClinoveAI**).
Stack: React + TypeScript + Tailwind CSS. Palette: deep navy/blue + teal. 9 pages.
Requirements: distinctive (non-generic) design, liquid glass-morphism, layered/stacked cards,
3D/parallax moments, visual graphs, Lenis smooth scroll, Framer Motion micro-interactions.
Constraints: no generic templates, **no mention of AI models**, all medical claims emphasize
**physician-in-the-loop**. Fonts: Fraunces (display) + Inter (body).

## User Choices (confirmed)
- Dark navy premium theme (locked, no toggle)
- Hero: **NeuroNoise WebGL shader** background (replaced the aurora) + interactive 3D floating glass panels reacting to mouse
- Full animated interactive charts (Recharts)
- Warm **champagne (#DCCBA1)** counter-accent + ivory text to avoid the "AI/PPT" generic look
- Clean TypeScript (no @ts-nocheck on any touched file)

## Design System (/app/design_guidelines.json + index.css + tailwind.config.js)
- CSS vars: navy bg (226 55% 5%), ivory fg (43 38% 94%), teal primary, champagne chart-3.
- Colors: navy.{void,deep,card,light}, teal.glow #14B8A6, champagne #DCCBA1/glow, ivory #F5F2EA
- Utilities/components: `.glass`, `.glass-strong`, `.text-gradient-teal`, `.text-champagne`, `.eyebrow`, `.hairline`, `.aurora-orb`, `.grain`, global body grain + mesh gradient bg
- Reusable primitives (src/components/site/primitives.tsx): `PageHero`, `Reveal`, `Eyebrow`, `LayeredCard`
- Reusable: `CountUp.tsx`, `TiltCard.tsx`, `home/HeroPanels.tsx`, `home/NeuroHero.tsx`, `home/DiabetesCharts.tsx`

## Implemented
### 2026-06-11
- Dark navy design system, Navbar/Footer (dark glass, typed), Home redesign (3D hero, count-up, Recharts).
### 2026-06-11 (batch 2)
- **Hero swapped to NeuroNoise WebGL shader** (`@paper-design/shaders-react@0.0.77`), themed navy/teal, vignette+grain overlays for contrast.
- Elevated palette with **champagne counter-accent** + ivory text; editorial layouts (asymmetric 4/8 & 12-col grids, hairline dividers, italic Fraunces accent words, marginalia eyebrows, layered offset cards), global grain texture.
- **Hero cards content fixed** per clinical-safety requirements: Card1 "Guideline Coverage" (badge, no metrics), Card2 "Guideline Priority Logic" (ranked list + abstract decorative line), Card3 "Physician approved" (kept), Card4 "Safety checks" (reworded, non-case-specific).
- **All 8 inner pages redesigned**: About, Vision, Product (asymmetric bento), Validation, Evidence, Team, Contact, Legal (editorial sticky sidebar).
- **Contact form wired** to backend `POST /api/contact` (axios + sonner toast); backend stores to `db.contact_submissions` (server.py: ContactSubmission model + route).
- Verified via testing_agent iteration_1.json: **100% backend + frontend, zero issues.**

## Notes / Tech debt
- `AuroraBackground.tsx` and `ThemeToggle.tsx` are now unused (kept, not imported). Can be deleted later.
- shadcn/ui components still contain `@ts-nocheck` (not touched); page/components code is clean.
- Minor (non-bug) from review: server.py logging config defined after routes (works at runtime); consider EmailStr validation + tightening CORS for production.

## Backlog (P1/P2)
- P1: Optional — email the team on contact submit (e.g. Resend) + a "book a demo" scheduling capture.
- P2: Remove `@ts-nocheck` from shadcn/ui components; delete unused AuroraBackground/ThemeToggle.
- P2: SEO metadata / OG tags per page.

## Architecture
- Frontend: React 19 + TS (craco), React Router 7, Tailwind 3.4, Framer Motion 12, Lenis, Recharts 3.6, @paper-design/shaders-react
- Backend: FastAPI + MongoDB (motor). Routes: /api/, /api/status, /api/contact
