# Veltraq / ClinoveAI — Website Rebuild Specification
**For: Cursor Agent implementation**
**Company: Veltraq. Product: ClinoveAI (AI-powered clinical decision support for diabetology).**
**Reference tone/structure: https://ojas.clinoveai.com/ (data-dense, sober, investor-grade — NOT a marketing/blog site)**

---

## 0. WHAT CHANGES FROM THE PREVIOUS BUILD

- **Company renamed:** Alyvn → **Veltraq**. Product stays **ClinoveAI**.
- **Theme:** Light mode ONLY. Remove dark mode toggle entirely.
- **Remove:** Aurora/canvas hero animation, glass-morphism panels, layered/stacked card animations, heavy scroll-reveal motion, dark navy palette, decorative gradient blobs, all "premium SaaS" visual flourish.
- **Keep:** The sticky navbar (restyle for light theme). The founders marquee/scroll animation (restyle for light theme, keep the motion behavior).
- **Rewrite:** All copy site-wide. Previous copy was too long, too explanatory, reads like a blog post. New copy must be concise, structured, and data-led — short paragraphs (2-3 sentences max), tables and labeled data blocks instead of prose where possible, matching the density and restraint of the OJAS reference site.
- **No fabricated metrics** anywhere (this was already a rule, restating it because it's the most common failure mode).

---

## 1. DESIGN SYSTEM

**Theme:** Light only.
- Background: white / very light neutral gray (#FAFAFA – #F5F6F7)
- Primary text: near-black (#111827 or similar)
- Accent color: single deep teal or navy-teal (#1F5C56 or similar — pick ONE accent, use sparingly for links, status labels, key numbers, icons)
- Borders/dividers: thin, light gray (#E5E7EB), hairline style — this reference site relies heavily on thin borders and whitespace instead of shadows/gradients
- NO gradients, NO glass/blur panels, NO drop shadows beyond minimal card elevation if needed

**Typography:**
- Headlines: keep a distinctive serif or high-contrast display font (Fraunces or similar) but use it SPARINGLY — mainly H1s. Reference site uses mostly a clean sans throughout with restraint, not heavy display type on every heading.
- Body/UI: clean modern sans (Inter or similar), small-to-medium size, tight line height, dense/efficient — not spacious blog-style paragraphs.
- Use small-caps or letter-spaced uppercase labels for section eyebrows/tags (e.g. "PLATFORM", "EVIDENCE", "GOVERNANCE") — this is a strong pattern in the reference site, use it consistently.

**Layout patterns to adopt from reference site:**
- Section eyebrow label (small, uppercase, tracked) → short H2 → 1-2 sentence description → structured content (table, capability grid, or data block)
- Numbered capability/feature blocks (01, 02, 03 style) instead of icon-card grids
- Data presented in simple two-column tables where relevant (not decorative cards)
- Status/stage labels as small pill badges (e.g. "Pilot Stage", "In Review") — use instead of vague marketing claims
- Minimal, restrained motion: the founders marquee is the one persistent animation; everything else should be static or use very subtle fade-ins only

**Navbar (persists, restyle for light theme):**
- Sticky, light background with hairline bottom border (no blur/glass effect)
- Links: Home, Company, Vision & Mission, Product, Clinical Validation, Evidence, Team, Contact
- Small "Veltraq" wordmark left, nav links right, no CTA button needed in nav (keep it minimal like reference)

**Footer:**
- Minimal: tagline, Veltraq name, links, Privacy/Terms, copyright — single row or two-row, light background, hairline top border

---

## 2. GLOBAL COPY RULES

- No sentence should require a second read. Cut every sentence in half, then cut again.
- Prefer structured data (tables, labeled stats, short bullet capability lists) over paragraphs.
- Every claim about the product must be a *capability* statement, never an *outcome* or *result* statement, unless the number is real and sourced.
- Every clinical/statistical fact must be a real, cited figure (see Section 4 — Evidence, for the exact figures and how to cite them).
- No CDSCO, SaMD, or regulatory classification claims anywhere.
- No specific safety-rule thresholds (exact eGFR cutoffs etc.) — describe capability categories only ("renal function is checked before certain drug classes"), not the literal rule.
- Physician oversight framing must appear on both the Product and Clinical Validation pages, stated plainly once — not repeated as a disclaimer on every section.

---

## 3. PAGE-BY-PAGE CONTENT

### PAGE 1 — HOME

```
[eyebrow] CLINICAL DECISION SUPPORT · DIABETOLOGY

# ClinoveAI
Guideline-grounded clinical decision support for diabetes care.

[short sub-line, 1 sentence]
Structured consultation support for physicians, built on RSSDI, ADA, EASD, and IDF guidelines.

[Pilot Stage] badge

[Explore ClinoveAI →]
```

**Market context block (table style, like OJAS's EV-share table — use India diabetes burden data instead):**

| Metric | Value |
|---|---|
| Adults living with diabetes in India (2024) | 89.8 million |
| Undiagnosed | 57% |
| On treatment achieving glycemic control | <25% |
| Treated by physicians without adequate disease-specific training | 39% |

*Source: International Diabetes Federation, IDF Diabetes Atlas, 11th edition (2024).*

**Structural gap section (short, 3 compact blocks — mirror the "Battery Economics / Consumer Trust / Grid Coordination" pattern):**

```
01  Specialist shortage
Diabetes management requires specialist-level discipline across
glycemic trend, renal function, and drug interactions — most
outpatient physicians manage it without that training.

02  Access gap
Rural India has less than half the diabetes care access of
urban India, widening outcomes gaps at national scale.

03  Guideline drift
Without structured support, treatment decisions vary by
physician rather than by evidence — even for the same
clinical picture.
```

**Platform intro (short, links to Product page):**
```
[eyebrow] PLATFORM

## Structured reasoning, physician-reviewed.
ClinoveAI generates a guideline-grounded consultation report from
patient vitals and lab data. Every report is reviewed, edited, or
rejected by the treating physician before use.

[See how it works →]
```

---

### PAGE 2 — COMPANY (About)

```
[eyebrow] COMPANY

## Veltraq
Veltraq builds AI-powered clinical decision support for Indian
healthcare. Our first product, ClinoveAI, addresses guideline-based
diabetes management in outpatient practice.
```

**Short structured facts block (table, not prose):**

| | |
|---|---|
| Founded | 2025–26 |
| First product | ClinoveAI (diabetology CDSS) |
| Status | Active clinical pilot |
| Registered office | *[address — send when ready]* |

**One short closing line, not a paragraph:**
```
Veltraq is developing beyond diabetology as a longer-term platform
for guideline-grounded clinical decision support across specialties.
```

---

### PAGE 3 — VISION & MISSION

```
[eyebrow] VISION

## Specialist-grade support, at outpatient scale.
Every physician in India — from a private clinic to a district
hospital — should have access to the same guideline-grounded
decision support as a leading specialist.

[eyebrow] MISSION

## Physician-reviewed, by design.
Veltraq builds clinical decision support that strengthens physician
judgment rather than replacing it. Every recommendation is
guideline-traceable and physician-approved before reaching a patient.
```

**Principles (numbered list, not cards):**
```
01  Guideline-first — every recommendation traces to RSSDI, ADA,
    EASD, or IDF, in that priority order.

02  Physician-in-the-loop — every report is reviewed, edited, or
    rejected by the treating physician. No exceptions.

03  Built for outpatient scale — designed for high-volume clinics,
    not only flagship specialty centers.
```

---

### PAGE 4 — PRODUCT (ClinoveAI)

```
[eyebrow] PLATFORM

## ClinoveAI
Structured clinical reasoning for outpatient diabetology.
```

**Capability surface (mirror OJAS's "Capability surface" input/model/output/action block style):**

| | |
|---|---|
| Input | Patient vitals, lab results, medication history |
| Reasoning | RSSDI · ADA · EASD · IDF, priority-ranked |
| Output | Structured consultation report |
| Review | Physician approve / edit / reject |

**Three numbered modules (short, like OJAS's Battery Intelligence / Compliance / Charging clusters):**

```
01  Clinical Reasoning
Generates diagnosis, risk assessment, and treatment plan from
guideline-ranked logic, not open-ended inference.

02  Medication Safety
Screens new and existing prescriptions independently of the
clinical reasoning layer — checking interactions and organ-function
suitability before a report reaches the physician.

03  Diagnostic Guidance
Recommends lab investigations based on individual patient data,
not a fixed panel — avoiding both over-testing and missed findings.
```

**Governance line (single short paragraph, styled like OJAS's governance note):**
```
[eyebrow] GOVERNANCE

Every ClinoveAI report is a draft, not a decision. The treating
physician reviews, edits, or rejects each report before it is used
with a patient.
```

Small muted footer note on this page only:
```
This page describes product capabilities, not technical
implementation. Architecture details are withheld pending
completed IP protection.
```

---

### PAGE 5 — CLINICAL VALIDATION

```
[eyebrow] CLINICAL VALIDATION

## Validated in active practice.
ClinoveAI is in clinical pilot with Dr. Ashwin Mukundan at
Dr. Ashwin's Advanced Diabetes Centre, Kannur, Kerala. Every report
is reviewed against his clinical judgment before use.
```

**Structured facts table:**

| | |
|---|---|
| Clinical lead | Dr. Ashwin Mukundan, MBBS, MD (Internal Medicine) |
| Credentials | PG Dip. Diabetes & Renal Management · PG Dip. Advanced Diabetes Care |
| Site | Dr. Ashwin's Advanced Diabetes Centre, First Floor, 2, Opposite Bhima Gold, Above Bata Showroom, Thana, Kannur, Kerala 670002 |
| Review process | Every report: approve / edit / reject, logged |
| Status | [Pilot Stage] |

Short closing line only (no long "this is not a one-time evaluation" paragraph):
```
Every review decision is captured, forming the clinical evidence
base for ClinoveAI's ongoing development.
```

---

### PAGE 6 — EVIDENCE

```
[eyebrow] EVIDENCE

## Guideline-traceable. Physician-verified.
```

**Structured, not prose — three short labeled blocks:**

```
Clinical basis
Reasoning constrained to four established frameworks — RSSDI, ADA,
EASD, IDF — applied in fixed priority order. No unconstrained
inference.

Safety verification
An independent screening layer checks every prescription against
medication history and organ function before a report is finalized.

Review process
Every report is reviewed by a licensed physician — approved,
edited, or rejected — before use. 100% of pilot reports reviewed.
```

**Sources block (mirror OJAS's Sources section — real citations only):**
```
Sources
— International Diabetes Federation, IDF Diabetes Atlas, 11th
  edition (2024)
— RSSDI Clinical Practice Recommendations
— American Diabetes Association (ADA) Standards of Care
— European Association for the Study of Diabetes (EASD) guidelines
— International Diabetes Federation (IDF) guidelines
```

Do NOT reference the IEEE paper until it has a confirmed public status (submitted/published) — leave it out for now per earlier decision.

---

### PAGE 7 — TEAM (Founders)

**Keep the marquee/scroll animation, restyle for light theme.** Card content unchanged in structure (initials avatar, name, title, credentials line) but bios below are now FINAL — two lines each, no filler:

**Telukuntla Vinay Koushik — Co-Founder & Lead Developer**
> *(You said you don't want the "pipeline to production" framing — pick one of these, or send your own final line:)*
> Option: "Leads product and engineering at Veltraq, building ClinoveAI from the ground up."
> Option: "Co-Founder and lead engineer of Veltraq, building ClinoveAI for outpatient diabetology in India."

**Dr. Ashwin Mukundan — Co-Founder & Clinical Lead**
> Practicing diabetologist validating ClinoveAI against real patients. Every clinical decision passes through his review first.

**Ramabathina Yashaswini — Co-Founder & Research Lead**
> Leads academic research and publication strategy, turning pilot data into peer-reviewed evidence.

**Mohanapriya Velmurugan — Co-Founder & IP Lead**
> Leads patent strategy and product ideation, protecting ClinoveAI's clinical reasoning approach.

**Dr. Udendhran — Co-Founder & Technical Advisor**
> Assistant Professor, Computational Intelligence, SRM University. Guides Veltraq's technical direction.

*(Photos to be added later — keep initials-on-gradient placeholder, easily swappable.)*

---

### PAGE 8 — CONTACT

```
[eyebrow] CONTACT

## Get in touch.
Clinics, partners, and collaborators — reach out below.
```

Form: Name · Email · Organization · Message · Submit. No email address or phone displayed (per earlier decision). Success state after submit.

---

### PAGE 9 — LEGAL

Two tabs: **Privacy Policy** / **Terms of Use**.

Keep the content from the previous build (already drafted conservatively — DPDP Act 2023 alignment, no regulatory-status claims, physician-oversight statement, cookie/analytics disclosure). Restyle only — light theme, same restrained typography as rest of site. Add a visible line at top of both:
```
This is a working draft pending final legal review.
```

---

## 4. FOOTER (site-wide)

```
Veltraq — Built with clinicians, for clinicians.

Company · Vision & Mission · Product · Clinical Validation ·
Evidence · Team · Contact · Privacy · Terms

© 2026 Veltraq
```

---

## 5. EXPLICIT "DO NOT" LIST (carry over from previous spec, unchanged)

- No AI model/vendor names, database technology, or internal architecture anywhere.
- No CDSCO, SaMD, or regulatory certification/classification claims.
- No fabricated statistics, testimonials, or quotes — only the sourced figures in Section 3/4.
- No implied autonomous diagnosis — physician-review framing stated once, plainly, per relevant page.
- No exact safety-rule thresholds (e.g. specific eGFR cutoffs) — capability-level language only.
- No dark mode, no gradients, no glass/blur panels, no decorative card animation — light theme only, per Section 1.

---

## 6. OPEN ITEMS BEFORE FINAL BUILD

1. Confirm registered office address for Company page.
2. Confirm final one-line bio for Telukuntla Vinay Koushik (see Team section options above).
3. Confirm exact legal entity name (Veltraq Private Limited / other) once incorporation paperwork reflects the rebrand.
4. Real photos for team page (currently placeholder initials).
