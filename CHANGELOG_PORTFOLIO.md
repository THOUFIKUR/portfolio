# CHANGELOG: THOUFIKUR Portfolio Website Revision (V2)

**Project:** THOUFIKUR Portfolio (`D:\portfolio`)  
**Revision:** V2 Visual, Structural & Content Redesign  

---

## 1. Visual Direction & Unified First-Page Dark Forest Atmosphere
- Applied the First Page (Hero) visual language consistently across all sections, modals, and footer: deep forest-to-charcoal radial atmosphere (`bg-hero-atmosphere`, `#102015` / `#122317`), subtle dot-matrix grain texture (`dot-matrix-overlay`), Electric Purple (`#8B5CF6`) radial glows/accents, drifting luminous particles (`ScrollOrbField`), warm Soft Ivory (`#F8F5ED`) / Sand (`#E8DCC4`) typography, and translucent Forest-Charcoal glass cards (`bg-[#18291D]/90 border-white/15`).
- Standardized typography pairing: `Space Grotesk` + `DM Sans` with responsive `clamp()` sizing in `src/styles/index.css`, removing excessive italics and all decorative trailing heading dots.

## 2. Hero Portrait Framing & Zero-Overlap Floating Cards
- Replaced pasted cutout portrait with a framed original photographic composition (`public/images/thoufikur-hero.webp`) set against soft purple backlight and deep forest tones inside `src/sections/HeroSection.tsx`.
- Placed 4 Formwood-inspired floating cards (`Creative Direction`, `Engineering`, `Technology`, `Identity`) completely outside and below the portrait box so no label covers the face, hair, or suit.

## 3. Motion & Scroll Experience
- Implemented atmospheric moving radial gradients, dot-matrix grain texture, sparse floating luminous particles (`HeroSection`), mask-reveal portrait entrance, scroll-linked parallax, viewport section reveals (`ScrollReveal`), scroll-drawn curved SVG dividers (`ScrollPathDivider`), and an animated Experience connector spine (`ExperienceSection`), all respecting `prefers-reduced-motion`.

## 4. Expanded Gallery, Permanent Exclusions & Zero Page Badges
- Backed up V1 to `_backup_pre_v2/`.
- Visually audited all 79 pages of `GRAPHIC DESIGN (1).pdf` and expanded curated portfolio to **44 distinct works** (`6` Featured + `38` Archive, `0` duplicate cards).
- Permanently removed Page 12 (`MSME IDEA HACKATHON 6.0 / SVCE`), Birthday poster (Page 76), and previously excluded posters (`[2, 6, 7, 11, 19, 35, 48, 71, 72, 73]`) from `projectsManifest.ts`, `public/`, and `dist/`.
- Removed all website-generated PDF page-number badges from cards, Lightboxes, Case Studies, Modals, and `LeadershipSection`.

## 5. Concise Case Studies & Verified Content
- Rebuilt `CaseStudiesSection` and `CaseStudyModal` with 4 factual, grounded design reviews featuring distinct non-featured artworks (`creative-p68`, `creative-p79`, `creative-p08`, `creative-p01`) so zero posters repeat between `Selected Creative Work` and `Graphic Design Case Studies`, linking cleanly into the Lightbox (`handleOpenArtworkById`).
- Upgraded cards and portrait frames across all sections with `SpotlightCard` (cursor-reactive radial highlight, matched Forest/Purple/Charcoal/Obsidian surface hierarchy, diagonal hover sheen) and `PortraitAuraFrame` (rotating forest/purple aurora glow + interactive 3D pointer tilt).
- Preserved exact verified metadata: `THOUFIKUR` wordmark (no dot), `8.39 / 10.0 (Up to 4th Semester)`, `1 July 2026 – 15 July 2026` (Schwing Stetter), `1 December 2025 – 30 December 2025` (CMRL), and all confirmed project URLs (`https://sightsheild-ai.vercel.app/`, GitHub links).
