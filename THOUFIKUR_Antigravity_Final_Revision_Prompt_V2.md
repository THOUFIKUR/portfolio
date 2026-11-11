# THOUFIKUR RAHAMAN Y --- FINAL ANTIGRAVITY REVISION PROMPT (V2)

**Project:** Existing portfolio in `D:\portfolio`\
**Local URL:** `http://localhost:5173/` (use the actual port shown by
Vite)\
**Brand palette:** Forest Green `#1F5D2B`, Sand Beige `#E8DCC4`,
Electric Purple `#8B5CF6`.

## 1. Implement the redesign in the existing project

Do not rebuild from scratch unless the current code is unusable. Inspect
the source code, assets, routes, `package.json`, current project data
and original PDF. Back up the current version. Implement the changes,
run the site, inspect it in a browser and fix issues. Do not stop at a
plan or mockup.

The current result is too plain, static and generic. The gallery needs
more work, the portrait looks awkward, floating labels overlap the
person, the case-study text sounds AI-generated, PDF page badges are
visible, and the visual direction is not what I requested.

## 2. Understand the attached screenshots

Use the latest screenshots as follows:

1.  **Gallery screenshot:** expand the gallery and improve card size,
    typography, image treatment and layout.
2.  **Hero screenshot with red markings:** redesign the hero. The
    portrait and floating labels/icons are badly composed and overlap
    the person.
3.  **Case-study overview:** replace generic, dense AI-sounding text
    with concise, factual copy.
4.  **Case-study modal:** remove clutter and unsupported long
    paragraphs; create a clean, responsive detail view.
5.  **Gallery/filter screenshot:** remove all website-generated PDF
    page-number badges from the public UI.
6.  **MSME IDEA HACKATHON poster marked Page 12:** remove this exact
    artwork everywhere on the website.
7.  **Final Formwood website screenshot:** this is a UI inspiration
    reference, NOT portfolio artwork. Borrow its visual language---dark
    forest/teal atmosphere, purple ambient glow, cream typography,
    floating dashboard-like cards, rounded panels, pill navigation,
    layered backgrounds and subtle particles. Do not copy its brand,
    text, logo, plant imagery or exact layout. Never add this screenshot
    to my gallery.

If attachment numbering differs, identify screenshots by their visible
content.

## 3. Exact palette and visual direction

Use these exact CSS tokens:

``` css
:root {
  --forest-green: #1F5D2B;
  --sand-beige: #E8DCC4;
  --electric-purple: #8B5CF6;
  --soft-ivory: #F8F5ED;
  --charcoal: #20231F;
}
```

The current site looks almost entirely beige/green. Purple must be
clearly visible, not limited to a tiny accent. Use: - Light editorial
sections in ivory and sand beige. - Immersive dark sections in deep
forest green/charcoal. - Electric-purple radial glows, active states,
selected card details and motion accents. - Soft green ambient light,
faint grain, sparse particles and subtle moving gradients. - Cream/ivory
typography on dark surfaces. - Balanced contrast and readable text.

Do not introduce random bright blue/orange UI colours. Original poster
artwork may retain its own colours. Do not make every section dark;
alternate light and dark sections.

## 4. Typography

Replace the generic font treatment with a coherent editorial system: -
Display: `Space Grotesk` or `Sora`. - Body/UI: `DM Sans` or `Manrope`. -
Optional restrained editorial accent: `Playfair Display` or
`Cormorant Garamond`.

Choose a coherent pairing, not all fonts. Use responsive `clamp()`
sizing, large confident headlines, readable body text, clear hierarchy
and consistent button labels. Current gallery text is too small. Avoid
excessive italics, all-caps and decorative purple heading dots.

## 5. Wordmark and navigation

The wordmark must be exactly `THOUFIKUR`---no trailing dot, purple dot,
circle or punctuation.

Navigation: - THOUFIKUR - Creative / Engineering / Technology track
selector - Work - Archive - Case Studies - Experience - About - Skills -
Resume - Contact

Avoid duplicate track links. Make the header sticky, compact and
refined.

Track state must remain consistent across selected tab, hero copy,
badge, CTA, projects and URL: - Default: Creative. - `/#creative` -
`/#engineering` - `/#technology`

Browser back/forward must work. Never show Engineering active while
Creative hero copy remains visible.

## 6. Hero portrait --- professional photographic composition

Inspect `mine.jpg` and `mine1.jpg`. Use the best original photograph. Do
not generate another face or alter my facial features, hair, clothing,
skin or body proportions.

The current transparent cutout looks pasted onto an empty background. Do
NOT use a naked cutout as the only portrait treatment.

Create a professional image composition: - Use the original photograph
with its natural background or a carefully designed photographic
frame. - Place it in a large rounded editorial image panel or premium
portrait composition. - Add a deep forest/charcoal backdrop and a soft
purple glow behind the subject. - Add subtle depth, shadow and natural
context. - A transparent cutout may be a secondary layer only if it
looks natural and has a convincing backdrop/shadow. - Preserve the real
person and original appearance.

**Absolute no-overlap rule:** floating cards, labels and icons must
never cover the face, eyes, hair, neck or important parts of the body.
Keep all labels outside the face-safe region. On mobile, reposition them
below/next to the portrait or hide decorative labels.

Hero copy: - `Creative mind. Engineering mindset.` - "I explore the
intersection of visual communication, electrical engineering and
technology --- turning ideas into designs and practical projects." -
`Graphic Designer · EEE Undergraduate · Technology Enthusiast`

Creative CTA: `Explore Creative Work`\
Engineering CTA: `Explore Engineering Systems`\
Technology CTA: `Explore Technology Projects`\
Secondary actions: `View Resume`, `Contact`.

Use a clean two-column desktop layout and natural stacked mobile layout.

## 7. Floating cards

Use 3--4 purposeful floating information cards inspired by the Formwood
reference: - Creative Direction --- Graphic Design / Visual
Communication. - Engineering --- Electrical & Electronics / Industrial
Systems. - Technology --- AI / Software Projects / Computer Vision. -
Identity --- THOUFIKUR RAHAMAN Y / EEE · SVCE.

Cards should have rounded corners, forest-green/charcoal surfaces, ivory
text, purple accents, fine borders, controlled shadows and subtle depth.
Gentle independent floating motion is welcome. Do not add fake
statistics, ratings or achievements. Do not cover the portrait. On
mobile, turn these into a normal stacked row or compact cards.

## 8. Motion and scrolling --- must be visibly implemented

The current site still looks static. Add a coherent motion system: -
Slowly moving radial background gradients. - Soft purple and green
ambient glow. - Sparse drifting particles/dots. - Subtle curved paths or
lines that draw as sections enter view. - Staggered hero headline
reveal. - Portrait mask reveal. - Floating-card motion. - Scroll-linked
portrait/background parallax. - Scroll-triggered heading and image
reveals. - Staggered project-card entrance. - Timeline line drawing on
scroll. - Subtle expanding circles/orbs during section transitions. -
Project hover lift and image scale. - Smooth button/icon transitions and
clear focus states.

Do not scroll-jack or trap scrolling. Respect `prefers-reduced-motion`.
Keep mobile performance smooth. Reuse existing libraries where possible;
GSAP/ScrollTrigger and Framer Motion are options, but do not install
unnecessary packages or animate the same element with competing systems.

## 9. Expand the gallery significantly

The current gallery has roughly 22 items and feels sparse. Audit the
entire original `GRAPHIC DESIGN (1).pdf` (approximately 79 pages).
Expand to **35--45 distinct, high-quality eligible designs if the PDF
contains that many usable unique works**. Do not pad with duplicates or
weak pages. If fewer exist, include every suitable unique design and
explain the limitation in `PROJECT_AUDIT.md`.

Prioritise variety: - Office-bearer / leadership announcements. - E-Cell
designs and event communications. - Science Club designs. - Secretary /
student-organisation leadership designs. - Gandhi Jayanti designs. -
Festival/cultural posters. - Recruitment and announcements. - Event
promotions. - Social media creatives. - Certificates/institutional
designs. - Branding/profile designs. - Commercial/creative compositions.

Use only authentic artwork from the original PDF. Do not generate
replacement posters. Preserve aspect ratios and poster text/logos. Use
`object-fit: contain` when the full artwork must remain visible. Fix
large blank image areas, tiny cards and unreadable text. Desktop: 3--4
columns; tablet: 2; mobile: 1--2. Use larger featured cards for standout
designs. Filters must work, show accurate counts and wrap/scroll
properly on mobile.

### Exclude these works everywhere

Previously confirmed exclusions: - Page 2 --- Science Club Executive
Board announcement. - Page 6 --- Guest Lecture poster. - Page 7 --- MSME
IDEA HACKATHON 6.0 poster. - Page 11 --- ETCHED / SOHU AI Chip poster. -
Page 19 --- E-Cell Certificate of Appreciation. - Page 35 --- Dussehra
poster. - Page 48 --- Title Sponsor Recognition / Gyaan Overseas. - Page
71 --- HIGHWAYS '26 TakuMania. - Page 72 --- HIGHWAYS '26 GreenScreen. -
Page 73 --- HIGHWAYS '26 Powerplay Arena.

New exclusions: - **Page 12 --- MSME IDEA HACKATHON 6.0 / SVCE hosting
poster shown in the latest screenshot. Remove globally.** - Birthday
poster: remove globally. - Formwood UI screenshot: reference only, never
portfolio artwork. - Exclude any other artwork clearly marked by the
owner for removal in the screenshots.

Start with this manifest exclusion data:

``` json
{
  "excludedSourcePdfPages": [2, 6, 7, 11, 12, 19, 35, 48, 71, 72, 73],
  "excludedOther": [
    "Birthday poster",
    "Formwood UI reference screenshot — not portfolio artwork"
  ]
}
```

Do not delete the original PDF/source files. Exclude the works from
public website data. Do not re-add excluded designs with a different
crop or filename.

One artwork must have one canonical project record and one gallery card.
Do not duplicate it in Featured Work, Archive, Case Studies, carousels,
related projects or track-specific sections. A case study can link to an
existing gallery record, but must not create a second gallery card.

## 10. Remove all visible PDF page-number badges

The public website must not display badges such as `Page 20`, `Page 62`,
`Page 64`, `Page 27`, `Page 12`, `PDF Page` or any other
website-generated source-page label.

Remove them from: - Gallery cards and image overlays. - Lightboxes. -
Case-study cards and modals. - Featured work. - Archive. - Related
projects and sliders.

Keep source page numbers only as internal metadata in
`PROJECT_MANIFEST.json` and `PROJECT_AUDIT.md`. Do not remove text that
is actually printed inside the original poster itself---only the extra
website-generated badge.

## 11. Rebuild case studies and modal

Current case-study cards and modal text look generic, dense and
AI-generated. Replace with 3--4 strong, genuine case studies only.

Use: 1. Project title. 2. One-line factual summary. 3. Actual role, only
if known. 4. Organisation/context, only if known. 5. Actual artwork
preview. 6. Design observations grounded in visible artwork. 7. Tools
only if confirmed. 8. Optional short retrospective reflection, clearly
labelled as such.

Remove invented briefs, audience research, feedback, timelines, metrics,
outcomes, unsupported page ranges, fake quotes and long generic
paragraphs. Do not claim official visual identity or project impact
unless confirmed. Let the real artwork be the focus.

Make the detail view responsive, clean, scrollable and easy to close;
support Escape. No duplicate gallery artwork cards.

## 12. Buttons, icons and interactions

Use one consistent icon family, preferably Lucide. Use meaningful icons
only; avoid icons on every line and avoid emoji mixed with professional
UI icons. No icon or badge should cover the portrait or text.

Buttons: - Primary filled Forest Green. - Secondary outlined. -
Tertiary/quiet Purple accent. - Consistent rounded corners, icon
alignment and typography. - Smooth hover/focus states, subtle lift and
arrow movement. - Keyboard focus visible.

All buttons, filters, track selectors, navigation anchors and modal
controls must perform real actions. Do not create decorative
non-functional controls.

## 13. Confirmed project links

**RetinaScan AI** - Live: `https://sightsheild-ai.vercel.app/` - GitHub:
`https://github.com/THOUFIKUR/sih2026` - Status: Experimental diabetic
retinopathy detection model and associated application development. -
Actions: Visit Live Project / View Source Code. - Preserve exact URL
spelling `sightsheild-ai`.

**Smart Attendance System** - GitHub:
`https://github.com/THOUFIKUR/attandance-for-the-pc` - Status: Working
hardware/software prototype; iCUBE Hackathon winner. - Action: View
Source Code.

**Adaptive Quiz AI Platform** - GitHub:
`https://github.com/THOUFIKUR/adaptive-quiz-LAST1` - Status: Algorithmic
prototype. - Action: View Source Code.

**Smart Track Safety System** - Status: SIH project prototype involving
ESP32, sensors and fault-detection alerts. - No repository URL supplied.
Do not invent one.

Use external links with `target="_blank"` and
`rel="noopener noreferrer"`. Test them if browser access is available;
do not claim verification if not tested.

## 14. Confirmed content

Name: THOUFIKUR RAHAMAN Y\
Degree: B.E. Electrical and Electronics Engineering\
Institution: Sri Venkateswara College of Engineering\
Academic period: September 2024 -- June 2028\
Current stage: Third Year / Sixth Semester

Display CGPA exactly: **8.39 / 10.0 (Up to 4th Semester)**. Do not call
it the current sixth-semester CGPA.

Internships: - **Schwing Stetter --- Sriperumbudur:** Student Intern, 1
July 2026 -- 15 July 2026. Exposure: industrial electrical design,
control systems and industrial automation. - **Chennai Metro Rail
Limited (CMRL) --- Chennai:** Student Intern, 1 December 2025 -- 30
December 2025. Exposure: metro power distribution, transformers, relay
protection, switchgear, busbars, overhead traction systems, pantograph
operations and SCADA.

Leadership: - Chief Design Officer --- E-Cell, SVCE. - Executive
Director of Multimedia --- Science Club, SVCE (2026--27). - Deputy
Secretary --- BIS Student Chapter, SVCE. - Team Leader --- aegisAI.

Project status: - Smart Attendance System --- Working hardware/software
prototype; iCUBE Hackathon winner. - Smart Track Safety System --- SIH
project prototype involving ESP32, sensors and fault-detection alerts. -
Adaptive Quiz AI Platform --- Algorithmic prototype. - RetinaScan AI ---
Experimental diabetic retinopathy detection model and associated
application development.

Contact: - Email: `thoufikurrahaman@gmail.com` - LinkedIn:
`https://linkedin.com/in/thoufikur-rahaman-y-9a66a0388` - GitHub:
`https://github.com/THOUFIKUR` - Keep phone number private by default.

Do not exaggerate project implementation or claim all AI-generated code
was independently written.

## 15. Skills --- represent honestly

Creative: Canva, Adobe Express, CapCut, poster design, visual
communication, social media creatives, typography, layout/composition,
multimedia coordination.

Programming/database fundamentals: C, Java, Supabase, SQLite. Supabase
and SQLite are database technologies, not programming languages.

AI-assisted development / basic project exposure: Python, JavaScript,
HTML, CSS, React, Vite, Tailwind CSS, FastAPI. Do not present these as
advanced independently mastered skills.

AI/computer vision project exposure where supported: OpenCV, MediaPipe,
YOLOv8, EfficientNetB3, ONNX.

Engineering tools where supported by resume and prior confirmation:
AutoCAD, MATLAB, TIA Portal, EPLAN, Fusion 360, KiCad, Tinkercad,
PLC/SCADA fundamentals, industrial automation, embedded systems, IoT,
electrical control systems and power systems fundamentals.

Do not invent proficiency percentages or add unconfirmed software
skills.

## 16. Source files and audit

Inspect: - `GRAPHIC DESIGN (1).pdf` (approximately 79 pages). -
`mine.jpg`. - `mine1.jpg`. - Existing resume PDF (discover filename;
never modify original resume).

Audit the PDF visually, not just by extracting text. Export sharp
web-optimised images. Do not crop off poster text/logos. Preserve
original files.

Update/create:

**`PROJECT_MANIFEST.json`** --- one canonical record per artwork, with
`id`, `title`, `category`, `sourcePdfPage` (internal only), `image`,
`aspectRatio`, `year` (nullable), `description`, `featured`,
`caseStudy`, `excluded`, `variationGroup`.

**`PROJECT_AUDIT.md`** --- source files, PDF audit, selected works,
excluded works, gallery count, duplicate audit, case-study audit,
portrait treatment and QA.

**`CONTENT_QUESTIONS.md`** --- remove resolved CGPA and internship-date
questions; keep only genuinely unresolved questions. Do not ask again
for confirmed details.

**`CHANGELOG_PORTFOLIO.md`** --- record design, content, gallery,
motion, asset, link and QA changes.

## 17. Responsive/accessibility

Test desktop, laptop, tablet and mobile. No horizontal overflow.
Floating cards must reposition on mobile. Gallery filters and modals
must fit the viewport. Buttons must be touch-friendly. Text must be
readable. Keyboard navigation and visible focus states must work. Add
useful alt text. Hide decorative effects from screen readers. Respect
reduced-motion preferences.

## 18. Execution order

1.  Inspect existing project and source assets; back up.
2.  Fix wordmark and track/navigation state.
3.  Rebuild palette, typography and background atmosphere.
4.  Redesign portrait composition and floating cards.
5.  Implement background motion and scroll effects.
6.  Visually audit all PDF pages.
7.  Exclude all specified artwork, including Page 12 and birthday
    poster.
8.  Expand gallery to 35--45 eligible unique designs if supported by
    source.
9.  Remove every visible website-generated page-number badge.
10. Rewrite case studies/modal with verified facts only.
11. Add project links and confirmed profile content.
12. Update manifest, audit, questions and changelog.
13. Inspect in browser at desktop/tablet/mobile.
14. Fix issues and run production build.

For a standard npm/Vite project:

``` bat
cd /d D:\portfolio
npm install
npm run dev
```

Open the actual local URL printed in the terminal. Do not start a
duplicate dev server if one is already running.

Then:

``` bat
cd /d D:\portfolio
npm run build
npm run preview
```

Follow the existing lockfile/package manager if the project uses pnpm or
yarn.

## FINAL ACCEPTANCE STANDARD

Do not call the task complete merely because it builds. The result must
be visibly redesigned: immersive forest-green/charcoal backgrounds with
controlled purple glow, stylish readable typography, a professionally
framed portrait, floating cards that never cover the face, real scroll
animations, a larger unique artwork gallery, no visible PDF page badges,
Page 12 MSME poster removed, birthday poster removed, no duplicate
designs, concise credible case studies and working links.
