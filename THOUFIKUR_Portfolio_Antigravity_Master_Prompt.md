# THOUFIKUR. --- Complete Portfolio Website Build Specification

**Project owner:** THOUFIKUR RAHAMAN Y\
**Project location:** `D:\portfolio`\
**Primary objective:** Build a premium, recruiter-focused personal
portfolio for Graphic Designer internships/jobs, while also presenting
Electrical & Electronics Engineering and Software/Technology projects.\
**Brand direction:** Forest Green + Sand Beige + Electric Purple\
**Status:** Implementation brief for Google Antigravity

------------------------------------------------------------------------

# 0. Instructions to Antigravity --- Read Before Building

Act as a senior creative director, portfolio UX/UI designer, motion
designer, accessibility specialist, and experienced React developer.

Build a complete, production-quality personal portfolio website for
THOUFIKUR RAHAMAN Y.

This website must look professionally art-directed and technically
polished, with the presentation quality expected from excellent agency
and independent-designer portfolios. However, the owner is an emerging
multidisciplinary candidate, not a senior designer. **Do not falsely
describe the owner as a senior designer, art director, experienced
software engineer, or professional with unverified commercial results.**
Apply senior-level presentation quality, not invented seniority.

## Mandatory source-first workflow

The project folder is `D:\portfolio`. Inspect the actual folder contents
before implementation.

Expected source assets include:

-   `GRAPHIC DESIGN (1).pdf` --- original 79-page graphic-design
    portfolio.
-   `mine.jpg` --- first portrait photograph.
-   `mine1.jpg` --- second portrait photograph.
-   A resume PDF that the owner says has been added to this same folder.
    **Find the resume by inspecting the folder. Do not assume its
    filename.** If multiple resume files exist, identify them and ask
    which is current. Do not overwrite or modify the original resume.

The user may add further files. Inventory all files and report what was
found.

### Source-of-truth rules

1.  The PDF is the source of truth for graphic-design artwork.
2.  The resume is the source of truth for formal education, internship
    names/dates, awards, and listed experience.
3.  The two supplied photographs are the source of truth for the owner's
    appearance.
4.  The owner's explicit skill clarification in this brief is the source
    of truth for programming proficiency.
5.  Previous project discussions may provide context, but do not invent
    details that are not supported by source files or explicit owner
    confirmation.
6.  If two sources conflict, do not silently reconcile them. Flag the
    conflict in `CONTENT_QUESTIONS.md`.
7.  Do not create fake client names, testimonials, analytics, conversion
    results, audience sizes, awards, project dates, or employment
    history.
8.  Do not replace the owner's original designs with AI-generated
    artwork.
9.  Do not invent project process materials such as sketches,
    moodboards, research, or rejected concepts. Show them only if
    supplied.
10. Do not claim a project is fully implemented if it is a prototype,
    concept, partially implemented, or AI-assisted experiment.

## Connector and external-profile behaviour

Create working external links that open the actual destination directly:

-   Email: `mailto:thoufikurrahaman@gmail.com`
-   LinkedIn: `https://linkedin.com/in/thoufikur-rahaman-y-9a66a0388`
-   GitHub: `https://github.com/THOUFIKUR`

Use appropriate icons and descriptive accessible labels. Open external
profiles in a new tab with safe link attributes. The email link should
open the visitor's default email application. These are ordinary
external links; do not pretend that an authenticated LinkedIn, GitHub,
Canva, or email account has been connected to the website.

If Antigravity has an available browser or connector integration, use it
only to verify that the public profile URLs resolve and show the
intended public profiles. Do not request passwords, tokens, or private
account access. If direct verification is unavailable, leave the links
in place and report that they were not independently verified.

------------------------------------------------------------------------

# 1. Personal Brand and Positioning

## Name

**THOUFIKUR RAHAMAN Y**

## Display brand

**THOUFIKUR.**

## Main professional positioning

**Multidisciplinary Creative & Technology Professional**

## Primary hiring target

Graphic Designer internships, junior graphic designer roles, multimedia
creative roles, and related opportunities.

## Secondary areas

-   Electrical & Electronics Engineering
-   Software and technology projects
-   AI-assisted application development
-   Embedded systems and IoT

## Main headline

**Creative mind. Engineering mindset.**

## Supporting line

"I explore the intersection of visual communication, electrical
engineering and technology --- turning ideas into designs and practical
projects."

## Short introduction

"I am Thoufikur Rahaman Y, an Electrical and Electronics Engineering
undergraduate with a strong interest in graphic design, multimedia,
software development and practical engineering. I enjoy transforming
ideas into visual experiences and exploring technology-driven
solutions."

The home page must lead with graphic design because that is the
immediate job-search objective. Engineering and software must be clearly
accessible as separate tracks, without competing with the primary
message.

## Three portfolio tracks

1.  **CREATIVE** --- Graphic design and multimedia.
2.  **ENGINEERING** --- Electrical and electronics.
3.  **TECHNOLOGY** --- Software, AI and development.

Default active track: **CREATIVE**.

A visitor should be able to switch between tracks. Track switching
should update featured projects, project filters and skill highlights
while retaining one consistent personal brand.

------------------------------------------------------------------------

# 2. Brand Design System

Use this exact palette as the foundation.

  -----------------------------------------------------------------------
  Colour                  Hex                     Primary use
  ----------------------- ----------------------- -----------------------
  Forest Green            `#1F5D2B`               Brand identity,
                                                  headings, navigation

  Sand Beige              `#E8DCC4`               Main backgrounds and
                                                  editorial surfaces

  Electric Purple         `#8B5CF6`               Highlights, active
                                                  states, interactive
                                                  accents

  Deep Charcoal           `#20231F`               Body text and dark
                                                  contrast sections

  Soft Ivory              `#F8F5ED`               Light surfaces

  White                   `#FFFFFF`               Cards and contrast
  -----------------------------------------------------------------------

Do not replace the palette with unrelated orange, blue, or generic
gradient themes. Subtle tints and shades derived from these colours are
acceptable.

## Typography

Use a restrained editorial type system:

-   Main headings: Space Grotesk or a similar modern geometric sans
    serif.
-   Body: Inter or a similar highly readable sans serif.
-   Optional editorial accent: Cormorant Garamond.
-   Use oversized display typography sparingly.
-   Maintain excellent line length, contrast, and hierarchy.
-   Avoid using too many font families.

## Visual character

-   Premium editorial design.
-   Strong typography.
-   Asymmetric layouts where useful.
-   Generous whitespace.
-   Large original artwork.
-   Refined image crops.
-   Deliberate colour blocking.
-   Subtle borders and shadows.
-   Consistent spacing and grid.
-   No generic SaaS dashboard appearance.
-   No excessive glassmorphism.
-   No random decorative elements.

------------------------------------------------------------------------

# 3. Page-by-Page Website Layout

Build a multi-section website with dedicated project-detail routes. The
main landing page is a long-form portfolio experience. The following
numbered pages are the content and section sequence; they do not require
twelve separate browser routes unless that improves navigation.

## PAGE 01 --- Home / Hero

**Purpose:** Make the visitor immediately understand who Thoufikur is
and what kind of work he does.

### Content

-   Brand wordmark: `THOUFIKUR.`
-   Role: `Graphic Designer · EEE Undergraduate · Technology Enthusiast`
-   Headline: `Creative mind. Engineering mindset.`
-   Supporting introduction.
-   Buttons:
    -   Explore My Work
    -   View Resume
    -   Contact Me
-   Small availability label only if the owner confirms availability.
-   Scroll indicator.

### Portrait

Use `mine.jpg` and `mine1.jpg` from the project folder.

-   Inspect both images.
-   Choose the stronger composition for the hero.
-   Use the other for About.
-   Preserve the actual person's identity, face, hair, skin appearance,
    clothes, and body.
-   Do not generate a replacement person.
-   If background removal is used, use a genuine segmentation/cutout
    workflow and retain the original photograph as a fallback.
-   The portrait must be large and visually important, not a tiny
    circular avatar.

### Hero effects

-   Staggered text entrance.
-   Masked portrait reveal.
-   Gentle vertical floating motion.
-   Subtle scroll-linked parallax.
-   Optional low-amplitude mouse-responsive depth on desktop.
-   Floating labels: `GRAPHIC DESIGN`, `ELECTRICAL ENGINEERING`,
    `SOFTWARE DEVELOPMENT`, `MULTIMEDIA`.
-   Subtle brand-coloured shapes behind the portrait.
-   Keep the face unobstructed.
-   Do not distort the image.
-   Support reduced-motion preferences.

## PAGE 02 --- Selected Creative Work

**Purpose:** Put the strongest graphic-design work in front of a
recruiter quickly.

Display approximately six selected designs from the PDF.

Potential categories:

-   Event campaigns
-   Festival creatives
-   Recruitment and announcements
-   Social media design
-   Certificates and institutional design
-   Commercial and creative compositions

Do not assume a project is strongest only because it appears first in
the PDF. Inspect every page and select based on clarity, craft, variety,
relevance, and visual impact.

Each featured card should include:

-   Original artwork.
-   Project title.
-   Category.
-   Year only when known.
-   A concise, factual one-line description.
-   `View Project` action.

Use large visual cards and an editorial grid. Do not make every card the
same size if an asymmetric layout improves the composition.

## PAGE 03 --- Complete Graphic Design Archive

Inspect all 79 pages of `GRAPHIC DESIGN (1).pdf`.

Create an audit table with:

-   PDF page number.
-   Artwork/project title.
-   Category.
-   Aspect ratio.
-   Duplicate or alternate-version status.
-   Selected for gallery: yes/no.
-   Reason for inclusion/exclusion.
-   Extracted image filename.

Consolidate duplicates. Preserve genuinely different versions if they
show meaningful variations.

Target approximately 20--24 curated gallery projects, but do not force
this number if the PDF contains fewer distinct strong projects.

### Categories and filters

-   All
-   Event & Promotional Posters
-   Festival & Occasion Designs
-   Recruitment & Announcements
-   Social Media Creatives
-   Certificates & Institutional
-   Branding & Profile Designs
-   Commercial Advertisements
-   Creative Compositions

### Gallery interactions

-   Functional filters.
-   Responsive masonry or editorial grid.
-   Hover title and category.
-   Full-screen image viewer.
-   Previous/next controls.
-   Escape-to-close.
-   Keyboard accessibility.
-   Original aspect ratio preserved.
-   Do not crop important text or artwork.

## PAGE 04 --- Graphic Design Case Studies

Create three or four detailed case studies from actual work.

Suggested case studies, subject to the PDF audit:

1.  Event Visual Campaigns --- examples may include iCUBE and
    HIGHWAYS'26.
2.  Science Club Visual Communication --- festival, announcement and
    promotional designs.
3.  Recruitment & Leadership Communication --- recruitment posters and
    team introductions.
4.  Institutional & Official Design --- certificates and formal visual
    materials.

Each case study must use this structure:

1.  Project overview.
2.  Original brief or context.
3.  Audience.
4.  My actual role.
5.  Communication objective.
6.  Creative concept.
7.  References, only if supplied.
8.  Moodboard, only if supplied.
9.  Sketches and iterations, only if supplied.
10. Typography decisions.
11. Colour decisions.
12. Composition and layout decisions.
13. Final artwork.
14. Deliverables.
15. Verified outcome or honest reflection.

Explain why design choices were made. Do not fabricate a research phase,
client feedback, rejected drafts, business metrics, or campaign
performance.

For projects where the process was not documented, clearly label the
explanation as a retrospective design rationale rather than pretending
it is original research documentation.

## PAGE 05 --- Electrical & Electronics Engineering

**Purpose:** Present the owner's engineering background as a separate
professional track.

### Education

-   B.E. Electrical and Electronics Engineering.
-   Sri Venkateswara College of Engineering.
-   September 2024 -- June 2028, subject to resume verification.
-   Current stage: third year / sixth semester, as explicitly confirmed
    by the owner.

### Technical areas

-   Power distribution systems.
-   Transformers.
-   Switchgear and protection.
-   Motor control fundamentals.
-   Electrical control systems.
-   Relay protection fundamentals.
-   PLC fundamentals.
-   SCADA fundamentals.
-   Industrial automation.
-   ESP32.
-   Raspberry Pi.
-   Sensors.
-   Embedded systems.
-   IoT applications.

### Tools

-   AutoCAD.
-   MATLAB.
-   TIA Portal.
-   EPLAN.
-   Fusion 360.
-   KiCad.
-   Tinkercad.

Only show tools that the resume or owner confirms. Do not invent
advanced proficiency.

### Project presentation

Feature relevant engineering projects with actual diagrams, photos, code
screenshots or documentation.

Potential projects:

-   Smart Track Safety System.
-   Smart Attendance System hardware integration.
-   Embedded and automation projects.

For each project, show the problem, architecture, hardware, software,
current implementation status, and lessons learned. Do not invent
physical prototypes or test results.

## PAGE 06 --- Software & Technology

**Purpose:** Show practical project exposure without overstating
independent programming proficiency.

### Programming and database fundamentals

The owner explicitly identifies these:

-   C
-   Java
-   Supabase
-   SQLite

Describe C and Java as languages studied/used at an academic or
project-fundamentals level. Describe Supabase and SQLite as database
technologies used in projects, not programming languages.

### AI-assisted development and basic familiarity

The owner explicitly clarifies that these were explored through
AI-assisted/vibe-coded projects, with basic understanding and
project-level exposure:

-   Python
-   JavaScript
-   HTML and CSS
-   React
-   Vite
-   Tailwind CSS
-   FastAPI

Label these accurately as **AI-assisted development and basic project
exposure**. Do not show them as advanced or independently mastered
skills. Do not assign arbitrary skill percentages.

### AI and computer vision exposure

Only include tools actually supported by project evidence:

-   OpenCV
-   MediaPipe
-   YOLOv8
-   EfficientNetB3
-   ONNX

Explain these as project technologies or exposure, not as expert-level
proficiency.

### Projects to consider

-   Smart Attendance System.
-   RetinaScan AI.
-   Adaptive Quiz AI Platform.
-   Smart Track Safety System.
-   ZAID Personal AI Assistant.

For each project, clearly state:

-   Problem being addressed.
-   Owner's contribution.
-   Technologies used.
-   AI-assisted portions, where relevant.
-   What is actually implemented.
-   What remains a prototype or planned feature.
-   Verified GitHub repository link, if available.
-   Screenshots and architecture diagrams from actual source materials.

Do not claim planned features are complete. Do not claim the owner
independently coded all generated code.

## PAGE 07 --- Experience & Internships

Use the resume as the primary source for company names, titles, dates,
and formal descriptions.

Previously discussed experience may include:

-   Schwing Stetter --- student internship, Sriperumbudur.
-   Chennai Metro Rail Limited --- student internship, Chennai.

Verify both against the actual resume before publishing.

Possible exposure areas, only where supported:

-   Electrical control systems.
-   Industrial machinery.
-   Power distribution.
-   Transformers.
-   Relay protection.
-   Switchgear.
-   Busbars.
-   Overhead traction systems.
-   Pantographs.
-   SCADA.
-   Electrical safety.

Display each experience with:

-   Organisation.
-   Actual role/title.
-   Dates from resume.
-   Brief factual description.
-   Skills or learning outcomes supported by evidence.

Do not invent job responsibilities or claim employment where the source
says internship.

## PAGE 08 --- About Me

Use the second portrait if suitable.

Suggested biography:

"I am Thoufikur Rahaman Y, an Electrical and Electronics Engineering
undergraduate at Sri Venkateswara College of Engineering. My interests
extend beyond traditional engineering into graphic design, multimedia,
software development and AI.

I enjoy combining technical knowledge with creative problem-solving ---
whether designing a visual campaign, contributing to a student
organisation, or exploring an engineering or software project.

My experience across student activities, internships, hackathons and
multidisciplinary projects has helped me develop a practical, curious
and collaborative approach to building ideas."

Edit this only for clarity, not to add unsupported achievements.

Include:

-   Education.
-   Creative interests.
-   Engineering interests.
-   Software/technology interests.
-   Working approach.
-   A few personal details only if appropriate and confirmed.

## PAGE 09 --- Skills & Toolkit

Organise the skills in clear groups.

### Creative

-   Canva.
-   Adobe Express.
-   CapCut.
-   Poster design.
-   Visual communication.
-   Social media creatives.
-   Typography.
-   Layout and composition.
-   Multimedia coordination.

### Electrical

-   Power systems.
-   Transformers.
-   Switchgear and protection.
-   Motor control fundamentals.
-   PLC and SCADA fundamentals.
-   Industrial automation.
-   Embedded systems.
-   IoT.

### Programming and database fundamentals

-   C.  
-   Java.
-   Supabase.
-   SQLite.

### AI-assisted development / basic familiarity

-   Python.
-   JavaScript.
-   HTML and CSS.
-   React.
-   Vite.
-   Tailwind CSS.
-   FastAPI.

### AI / computer vision project exposure

-   OpenCV.
-   MediaPipe.
-   YOLOv8.
-   EfficientNetB3.
-   ONNX.

### Engineering tools

-   AutoCAD.
-   MATLAB.
-   TIA Portal.
-   EPLAN.
-   Fusion 360.
-   KiCad.
-   Tinkercad.

Do not add Photoshop, Illustrator, InDesign or After Effects unless the
owner confirms them. Do not use skill bars or fake percentages.

## PAGE 10 --- Leadership & Activities

Verify titles and dates against the resume and current owner
confirmation.

Previously shared roles include:

-   Chief Design Officer --- E-Cell, SVCE.
-   Executive Director of Multimedia --- Science Club, SVCE.
-   Deputy Secretary --- BIS Student Chapter, SVCE.
-   Team Leader --- aegisAI.

Use the most current confirmed role/title. If older and newer titles
conflict, flag them in `CONTENT_QUESTIONS.md`.

Highlight actual responsibilities such as:

-   Creative coordination.
-   Multimedia coordination.
-   Visual communication.
-   Recruitment creative work.
-   Team collaboration.
-   Event communication.
-   Project ownership.

Do not exaggerate the scale of leadership.

## PAGE 11 --- Achievements & Resume

Potential achievements to verify:

-   iCUBE Hackathon Winner --- Smart Attendance System.
-   SIH participation/project --- Smart Track Safety System.
-   Relevant internships.
-   Student leadership.
-   Academic milestones.

Use the resume as the source of truth.

### Resume integration

Find the resume PDF in `D:\portfolio` by inspecting the folder. Do not
assume its filename.

-   Preserve the original file.
-   Make a copy into the website's public assets using a clean filename
    such as `thoufikur-rahaman-resume.pdf`.
-   Add a visible Download Resume button.
-   Ensure the file actually downloads or opens.
-   Do not alter resume facts or create a fabricated resume.

The resume previously reported a CGPA of 8.39/10 up to the fourth
semester. The owner is now in sixth semester. Do not present this as a
current sixth-semester CGPA. Ask for an updated figure or omit CGPA.

## PAGE 12 --- Contact

Use these exact contact details:

**Name:** THOUFIKUR RAHAMAN Y\
**Email:** `thoufikurrahaman@gmail.com`\
**Email action:** `mailto:thoufikurrahaman@gmail.com`\
**LinkedIn:** `https://linkedin.com/in/thoufikur-rahaman-y-9a66a0388`\
**GitHub:** `https://github.com/THOUFIKUR`

Create visible, working links in the contact section and footer. Add
appropriate icons and accessible labels.

Use safe external-link behaviour. Do not invent a phone number or
additional social profile.

Include a concise closing line:

"Have an opportunity or a project in mind? Let's connect."

------------------------------------------------------------------------

# 4. Premium Motion and Interaction Specification

Use motion to improve storytelling and usability, not as decoration for
its own sake.

## Effects to implement

### 1. Cinematic hero reveal

-   Staggered headline reveal.
-   Portrait mask reveal.
-   CTA entrance.
-   Approximately 1--1.5 seconds, without blocking access to content.

### 2. Floating portrait

-   Gentle vertical movement.
-   Subtle parallax on scroll.
-   Optional mouse-responsive depth on desktop.
-   No face/body distortion.

### 3. Kinetic typography

-   Word/line reveal.
-   Oversized editorial typography.
-   A restrained moving text line such as
    `DESIGN · ENGINEERING · TECHNOLOGY`.

### 4. Horizontal project storytelling

-   Pinned horizontal gallery on desktop where it improves the
    experience.
-   Vertical fallback on mobile.
-   Progress indicator.
-   Avoid trapping the visitor or breaking browser scrolling.

### 5. Interactive bento grid

-   Asymmetric card sizes.
-   Featured project tile.
-   Subtle hover movement.
-   Project descriptions revealed accessibly.

### 6. Image reveal

-   Clip-path or mask reveal.
-   Gentle scale transition.
-   Preserve original artwork proportions and text.

### 7. Magnetic buttons

-   Subtle cursor attraction on desktop.
-   No movement that makes buttons hard to click.
-   Touch-friendly fallback.

### 8. Custom cursor

-   Optional `VIEW PROJECT` state over project artwork.
-   Disable on touch devices.
-   Preserve native cursor accessibility.

### 9. Branded preloader

-   THOUFIKUR wordmark.
-   Short progress indicator.
-   Never impose an unnecessary delay.

### 10. Page/project transitions

-   Subtle fade/mask transitions.
-   Preserve browser back/forward behaviour.
-   Avoid disorienting motion.

### 11. Limited 3D / particles

-   Optional lightweight brand-coloured particle or geometry effect in
    hero only.
-   Use Three.js only if it materially improves the design.
-   Provide static fallback on mobile and lower-powered devices.

### 12. Experience timeline

-   Scroll-triggered line drawing.
-   Sequential content reveal.
-   Reduced-motion fallback.

### 13. Project lightbox

-   Full-screen original artwork.
-   Previous/next.
-   Zoom where practical.
-   Escape-to-close.
-   Keyboard navigation.
-   Descriptive image alt text.

### 14. Scroll progress

-   Minimal page progress.
-   Active navigation state.
-   Do not obscure content.

## Motion accessibility

-   Respect `prefers-reduced-motion`.
-   Avoid continuous movement when reduced motion is requested.
-   Avoid flashing.
-   Avoid scroll-jacking.
-   Keep animations smooth and performant.
-   Do not run multiple animation libraries on the same element
    unnecessarily.

------------------------------------------------------------------------

# 5. Technical Implementation

## Preferred stack

-   React.
-   Vite.
-   TypeScript.
-   Tailwind CSS.
-   GSAP and ScrollTrigger for complex scroll storytelling.
-   Framer Motion for component/interface animation.
-   Lenis only if it does not harm native scrolling/accessibility.
-   Three.js only for a small, justified 3D effect.
-   Lucide React for icons.

Do not install all libraries automatically if a simpler solution is
better. Keep dependencies purposeful.

## Architecture

Use reusable components and structured data.

Suggested structure:

``` text
D:\portfolio
│
├── GRAPHIC DESIGN (1).pdf
├── mine.jpg
├── mine1.jpg
├── [resume PDF — actual filename discovered during audit]
│
├── public
│   ├── images
│   │   ├── thoufikur-hero.jpg
│   │   └── thoufikur-about.jpg
│   ├── projects
│   │   ├── creative
│   │   ├── engineering
│   │   └── technology
│   └── documents
│       └── thoufikur-rahaman-resume.pdf
│
├── src
│   ├── components
│   ├── sections
│   ├── pages
│   ├── data
│   ├── hooks
│   ├── animations
│   ├── styles
│   └── assets
│
├── scripts
│   └── extract-pdf-assets
│
├── PROJECT_AUDIT.md
├── CONTENT_QUESTIONS.md
├── README.md
└── package.json
```

The source files must remain untouched. Create copies for web use.

## Image extraction

-   Inspect all 79 PDF pages.
-   Extract embedded images where possible.
-   Otherwise render pages at suitable resolution.
-   Crop only when the crop preserves all important content.
-   Preserve original aspect ratios.
-   Create optimised WebP/AVIF derivatives for web use.
-   Keep original extracted artwork available.
-   Record the source page number in the project manifest.

## Performance

-   Lazy-load below-the-fold images.
-   Preload only the hero image and essential fonts.
-   Use responsive image sizes.
-   Avoid enormous image payloads.
-   Code-split project-detail pages.
-   Avoid layout shift.
-   Test mobile performance.
-   Do not allow a decorative animation to delay content.

## SEO and accessibility

-   Proper page title and meta description.
-   Open Graph metadata.
-   Sitemap and robots.txt.
-   Semantic headings.
-   Keyboard navigation.
-   Visible focus states.
-   Alt text.
-   Colour contrast.
-   Accessible dialogs/lightboxes.
-   Reduced-motion support.

------------------------------------------------------------------------

# 6. Required Project Audit and Content Reports

Before building, create these files:

## `PROJECT_AUDIT.md`

Include:

1.  Complete file inventory.
2.  Confirmation that all 79 PDF pages were inspected.
3.  Page-by-page artwork inventory.
4.  Duplicate/variation analysis.
5.  Selected projects.
6.  Excluded pages and reasons.
7.  Image extraction filenames.
8.  Category assignments.
9.  Recommended featured projects.
10. Recommended case studies.

## `CONTENT_QUESTIONS.md`

List only information that is genuinely missing or conflicting, such as:

-   Current sixth-semester CGPA.
-   Unclear dates or titles in leadership roles.
-   Internship dates if the resume is incomplete.
-   Project implementation status where the evidence is unclear.
-   Any missing contact details needed for publication.

Do not interrupt implementation for minor unknowns. Use a clearly marked
internal placeholder and continue. Do not publish unsupported claims.

## `PROJECT_MANIFEST.json`

For each project, store:

-   `id`
-   `title`
-   `category`
-   `sourcePdfPage`
-   `image`
-   `aspectRatio`
-   `year` (nullable)
-   `description`
-   `featured`
-   `caseStudy`
-   `variationGroup` (nullable)

Keep project data separate from UI code.

------------------------------------------------------------------------

# 7. Quality Assurance and Acceptance Criteria

Before calling the work complete, verify:

## Source integrity

-   All 79 PDF pages inspected.
-   All selected artwork originates from the supplied PDF.
-   No fabricated portfolio artwork.
-   Duplicate designs consolidated.
-   Original files preserved.

## Content integrity

-   Resume details verified.
-   Education and semester accurate.
-   No fabricated experience.
-   No invented metrics or testimonials.
-   AI-assisted coding described honestly.
-   C/Java and database knowledge separated from basic AI-assisted
    web-development exposure.
-   No unconfirmed software skills.

## Interaction

-   Navigation works.
-   Track switching works.
-   Category filters work.
-   Project detail pages work.
-   Lightbox works.
-   Keyboard navigation works.
-   Email opens the email application.
-   LinkedIn opens the supplied profile.
-   GitHub opens the supplied profile.
-   Resume download works.

## Visual

-   Exact brand palette applied.
-   Portrait appears correctly.
-   Typography is consistent.
-   Original artwork is not distorted.
-   No broken image paths.
-   No horizontal overflow.
-   Desktop, tablet and mobile layouts work.

## Technical

-   Production build succeeds.
-   No significant console errors.
-   No dead buttons.
-   No fake links.
-   Reduced-motion mode works.
-   Mobile performance is acceptable.
-   README includes local run and deployment instructions.

------------------------------------------------------------------------

# 8. Execution Order

Do not stop after generating a plan or wireframe.

Execute the following phases:

1.  Inspect `D:\portfolio` and identify the resume filename.
2.  Inspect both portraits.
3.  Inspect all 79 PDF pages.
4.  Generate `PROJECT_AUDIT.md`.
5.  Generate `CONTENT_QUESTIONS.md`.
6.  Extract and organise the original artwork.
7.  Create `PROJECT_MANIFEST.json`.
8.  Establish the design system.
9.  Build the hero and navigation.
10. Build creative work and case studies.
11. Build engineering and technology sections.
12. Build experience, About, skills, leadership, achievements and
    contact.
13. Implement animations and responsive behaviour.
14. Integrate the actual resume.
15. Test all external profile/contact links.
16. Run production build and quality checks.
17. Refine visual details and fix errors.
18. Provide a concise completion report with run instructions and
    unresolved questions.

Ask the owner only when essential information cannot be established from
the supplied files or this brief. Do not repeatedly ask for details
already supplied.

**Final objective:** A distinctive, premium, honest and
recruiter-friendly multidisciplinary portfolio that immediately presents
THOUFIKUR as a creative designer while making engineering and technology
work easy to explore.
