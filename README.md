# THOUFIKUR. — Multidisciplinary Portfolio Website

**Owner:** THOUFIKUR RAHAMAN Y  
**Positioning:** Multidisciplinary Creative & Technology Professional  
**Primary Target:** Graphic Designer Internships & Junior Roles  
**Secondary Tracks:** Electrical & Electronics Engineering · Software & Technology Projects  
**Brand Direction:** Forest Green (`#1F5D2B`) + Sand Beige (`#E8DCC4`) + Electric Purple (`#8B5CF6`)  

---

## 🌟 Overview & Architecture

This repository contains the complete production-grade personal portfolio website for **THOUFIKUR RAHAMAN Y**. It delivers an editorial agency-grade presentation for recruiters while maintaining complete factual integrity based on the verified 79-page graphic design portfolio and official academic resume.

### Key Highlights
- **Source-First Integrity:** Every single piece of artwork originates from `GRAPHIC DESIGN (1).pdf` (all 79 pages audited and cataloged in `PROJECT_AUDIT.md`).
- **Tri-Track Architecture:** 
  1. **Creative (Default Active):** Graphic design, event campaigns, visual communication, and case studies.
  2. **Engineering:** B.E. Electrical & Electronics Engineering at SVCE (3rd Year / 6th Semester), industrial systems, and hardware.
  3. **Technology:** Transparently categorized software and AI projects (academic fundamentals vs AI-assisted prototypes).
- **Interactive Capabilities:**
  - Fullscreen Lightbox viewer preserving original artwork aspect ratios without cropping.
  - Deep-dive Case Study modal presenting 15-part design rationales.
  - Category filters across all 36 curated projects.
  - Direct verified external profile links (Email, LinkedIn, GitHub) and one-click resume download.

---

## 🎨 Brand Design System

| Role | Colour Name | Hex Code | Purpose |
|---|---|---|---|
| **Primary Brand** | Forest Green | `#1F5D2B` | Wordmark, primary actions, headings, accents |
| **Surface** | Sand Beige | `#E8DCC4` | Main editorial surfaces, borders, secondary cards |
| **Interactive Accent** | Electric Purple | `#8B5CF6` | Highlights, active states, glowing badges |
| **Contrast** | Deep Charcoal | `#20231F` | High-contrast editorial text and dark cards |
| **Background** | Soft Ivory | `#F8F5ED` | Clean reading background |
| **Card Surface** | Pure White | `#FFFFFF` | Project tiles, bento grid containers |

**Typography:**
- **Headings & Display:** *Space Grotesk* (modern geometric sans-serif)
- **Body:** *Inter* (high-legibility neutral sans-serif)
- **Editorial Accents:** *Cormorant Garamond* (classical editorial italic)

---

## 📁 Repository Structure

```text
D:\portfolio
│
├── GRAPHIC DESIGN (1).pdf                               # Original source artwork (79 pages)
├── mine.jpg                                             # Source portrait 1 (Hero)
├── mine1.jpg                                            # Source portrait 2 (About)
├── THOUFIKUR RAHAMAN Y — Resume (Original Format).pdf   # Source resume
├── THOUFIKUR_Portfolio_Antigravity_Master_Prompt.md     # Master specification brief
│
├── public/
│   ├── favicon.svg                                      # Custom branded vector favicon
│   ├── documents/
│   │   └── thoufikur-rahaman-resume.pdf                 # Verified resume PDF download
│   ├── images/
│   │   ├── thoufikur-hero.jpg & .webp                   # Hero portrait derivatives
│   │   └── thoufikur-about.jpg & .webp                  # About portrait derivatives
│   └── projects/creative/                               # Curated high-res WebP & JPEG artwork
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                                   # Track selector & sticky nav
│   │   ├── Footer.tsx                                   # Verified links & closing quote
│   │   ├── Lightbox.tsx                                 # Fullscreen artwork modal
│   │   ├── CaseStudyModal.tsx                           # 15-part retrospective rationale modal
│   │   └── Icons.tsx                                    # Accessible LinkedIn & GitHub SVGs
│   ├── sections/
│   │   ├── HeroSection.tsx                              # Page 01: Hero & Kinetic Entrance
│   │   ├── SelectedCreativeSection.tsx                  # Page 02: Top 6 Flagship Works
│   │   ├── CaseStudiesSection.tsx                       # Page 04: Retrospective Case Studies
│   │   ├── CreativeGallerySection.tsx                   # Page 03: Complete 36-Project Archive
│   │   ├── EngineeringSection.tsx                       # Page 05: EEE Degree & Tools
│   │   ├── TechnologySection.tsx                        # Page 06: Software & AI Prototypes
│   │   ├── ExperienceSection.tsx                        # Page 07: Schwing Stetter & CMRL
│   │   ├── AboutSection.tsx                             # Page 08: Bio & Second Portrait
│   │   ├── SkillsSection.tsx                            # Page 09: Categorized Toolkit
│   │   ├── LeadershipSection.tsx                        # Page 10: E-Cell, Science Club, BIS
│   │   ├── AchievementsSection.tsx                      # Page 11: Hackathons & Resume Card
│   │   └── ContactSection.tsx                           # Page 12: Direct Outreach
│   ├── data/
│   │   ├── projectsManifest.ts                          # Complete data models
│   │   ├── resumeData.ts                                # Structured resume facts
│   │   └── contactData.ts                               # External URLs & constants
│   ├── styles/
│   │   └── index.css                                    # Tailwind base & custom animations
│   ├── App.tsx                                          # Main layout & state orchestrator
│   └── main.tsx                                         # React 18 DOM mount
│
├── PROJECT_AUDIT.md                                     # Complete 79-page audit report
├── CONTENT_QUESTIONS.md                                 # Missing items & verification notes
├── PROJECT_MANIFEST.json                                # Structured JSON manifest
└── dist/                                                # Production build output
```

---

## 🚀 Local Development & Build

### 1. Requirements
- Node.js (v18+ or v20+)
- npm (v9+)

### 2. Start Local Development Server
```bash
npm run dev
```
The application will launch locally at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
Generates a fully optimized static build in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

The project builds to standard static files in `dist/` and can be deployed with one command to any modern host:

### Deploy to Vercel
```bash
npx vercel --prod
```
- Build Command: `npm run build`
- Output Directory: `dist`

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```

---

## 🔒 Verification & Compliance
- **All 79 PDF pages inspected:** Complete audit in `PROJECT_AUDIT.md`.
- **Zero AI-hallucinated artwork:** 100% of portfolio designs are extracted from the source PDF.
- **Portraits intact:** Unaltered face and hair geometry from `mine.jpg` and `mine1.jpg`.
- **External Links verified:**
  - Email: `mailto:thoufikurrahaman@gmail.com`
  - LinkedIn: `https://linkedin.com/in/thoufikur-rahaman-y-9a66a0388` (Status 200)
  - GitHub: `https://github.com/THOUFIKUR` (Status 200)

