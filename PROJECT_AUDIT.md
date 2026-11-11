# PROJECT AUDIT & SOURCE VERIFICATION REPORT (V2)

**Candidate:** THOUFIKUR RAHAMAN Y  
**Target Focus:** Graphic Designer Internships, EEE Engineering & Applied Technology  
**Source Repository:** `D:\portfolio`  

---

## 1. Source Files Inventory

| File Name | Description | Status / Integrity |
|---|---|---|
| `GRAPHIC DESIGN (1).pdf` | Original 79-page graphic design portfolio | Visibly audited across all 79 pages; untouched original |
| `mine.jpg` | Original primary portrait photo | Framed natively in editorial panel (`/images/thoufikur-hero.webp`) |
| `mine1.jpg` | Secondary editorial portrait photo | Framed natively in About section (`/images/thoufikur-about.webp`) |
| `THOUFIKUR RAHAMAN Y — Resume (Original Format).pdf` | Candidate resume PDF | Copied to `/documents/thoufikur-rahaman-resume.pdf`; original untouched |
| `ui design.png` | Visual inspiration reference (Fernwood style) | Atmosphere reference only; never added to portfolio gallery |

---

## 2. Hero Portrait & Floating Card Treatment (V2 Redesign)

- Replaced standalone pasted transparent cutout with original portrait (`mine.jpg` -> `public/images/thoufikur-hero.webp`) framed inside a dark forest/charcoal architectural panel with ambient Electric Purple edge glow.
- Positioned 4 Formwood-inspired floating cards (`Creative Direction`, `Engineering`, `Technology`, `Identity`) completely outside and below the portrait box so zero text or UI covers face, eyes, hair, neck, or clothing.

---

## 3. Permanent Exclusions Verified (Removed Everywhere)

| Excluded Page | Artwork Description | Removal Scope |
|---|---|---|
| Page 02 | Science Club Executive Board (Blue vertical roster) | Excluded globally |
| Page 06 | Guest Lecture Poster (Dr. T. Ilango) | Excluded globally |
| Page 07 | MSME IDEA HACKATHON 6.0 (Orange hexagon grid) | Excluded globally |
| Page 11 | ETCHED / SOHU AI Chip Startup Spotlight | Excluded globally |
| Page 12 | MSME IDEA HACKATHON 6.0 / SVCE hosting poster | **Excluded globally (V2)** |
| Page 19 | E-Cell Certificate of Appreciation | Excluded globally |
| Page 35 | Happy Dussehra Greeting | Excluded globally |
| Page 48 | Title Sponsor Recognition (Gyaan Overseas) | Excluded globally |
| Page 71 | HIGHWAYS '26 TakuMania | Excluded globally |
| Page 72 | HIGHWAYS '26 GreenScreen | Excluded globally |
| Page 73 | HIGHWAYS '26 Powerplay Arena | Excluded globally |
| Page 76 | Birthday Poster (`Varshan chari`) | **Excluded globally (V2)** |
| Pages 52, 56 | Draft Latin placeholder / empty template | Excluded |
| Pages 4, 9, 10, 15, 17, 21, 22, 24, 26, 30, 34, 44, 45, 54, 55, 58, 59, 61, 70, 75, 78 | Exact duplicates, typo variants, or redundant colour variations | Deduplicated cleanly |

---

## 4. Expanded Curated Gallery & Zero-Duplication Audit (44 Unique Works)

- **Selected Creative Work (6 Featured Works):**
  1. Chief Design Officer Profile — E-Cell SVCE (Source PDF Page 53)
  2. iCUBE 6.0 — National Intercollegiate Technical Event (Source PDF Page 33)
  3. E-Cell SVCE Inauguration Ceremony — 16:9 Stage Backdrop (Source PDF Page 40)
  4. Gandhi Jayanti Commemorative Illustration (Source PDF Page 60)
  5. iCUBE 5.0 — 24-Hour Hackathon Campaign (Source PDF Page 49)
  6. Mankatha — Where Business Meets Kollywood (Source PDF Page 64)
- **Complete Graphic Design Archive (38 Unique Works):** Pages `1, 3, 5, 8, 13, 14, 16, 18, 20, 23, 25, 27, 28, 29, 31, 32, 36, 37, 38, 39, 41, 42, 43, 46, 47, 50, 51, 57, 62, 63, 65, 66, 67, 68, 69, 74, 77, 79`.
- **Total Unique Artworks:** **44** (6 Featured + 38 Archive), satisfying the 35–45 unique design goal with **0 overlap** between Selected Work and Archive and **0 excluded pages** in `public/` or `dist/`.
- **PDF Page Number Badges Removed:** Removed all visible `Page X` and `PDF Page` labels across cards, overlays, lightboxes, and case studies. Source page metadata is retained solely internally in `PROJECT_MANIFEST.json` and `PROJECT_AUDIT.md`.

---

## 5. Concise Case Study Audit

Rebuilt 4 concise, verifiable case studies referencing canonical gallery works (`creative-p53`, `creative-p33`, `creative-p40`, `creative-p60`) via `Open Artwork in Lightbox` without creating duplicate gallery cards or fabricated project briefs.

---

## 6. QA Checklist

- `npm run build` (`tsc && vite build`): Exited cleanly (0 TypeScript/bundle errors).
- `verify_build_integrity.py`: Confirmed 0 excluded files in `public/` or `dist/`, 0 `THOUFIKUR.` wordmark errors, 0 phone leaks, 0 visible `sourcePdfPage` / `Page` badges in UI components, 0 missing media files.
- Verified visual renders across desktop (`1440x900`), tablet (`768x1024`), and mobile viewports via headless browser checks.
