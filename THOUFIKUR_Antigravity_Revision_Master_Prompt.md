# THOUFIKUR --- Antigravity Website Revision & Final Build Prompt

**Owner:** THOUFIKUR RAHAMAN Y\
**Existing project folder:** `D:\portfolio`\
**Website currently running:** `http://localhost:5173/`\
**Primary objective:** Revise the existing portfolio website, not
rebuild it blindly. Correct the visual identity, remove unwanted
artwork, add the approved original designs, implement visible premium
motion, fix navigation/track consistency, and add verified project
links.

------------------------------------------------------------------------

# 0. CRITICAL INSTRUCTION --- MODIFY THE EXISTING WEBSITE

You are working on an existing portfolio implementation. The current
website is running locally at `http://localhost:5173/`.

**Do not discard the existing project or start a completely new
application unless the current code is genuinely unusable.** First
inspect the current codebase, components, routes, styles, assets,
project data and package scripts. Preserve working functionality while
correcting the problems listed in this document.

The owner has supplied screenshots showing the current website and the
artwork that must be removed. Treat those screenshots as visual QA
references, not as artwork to publish.

Before changing code:

1.  Inspect the complete `D:\portfolio` directory.
2.  Inspect `package.json`, the current routing setup, styles, animation
    libraries and project data.
3.  Locate the original PDF, portraits and resume.
4.  Locate the current project gallery data and identify the source PDF
    page for each currently displayed poster.
5.  Create a backup or use version control before major edits.
6.  Prepare a short implementation checklist.
7.  Then make the changes in the existing project.

Do not merely provide suggestions or a wireframe. Implement the changes,
run the website, inspect it in a browser and fix the problems.

------------------------------------------------------------------------

# 1. SOURCE FILES AND ASSET DISCOVERY

The project folder is:

`D:\portfolio`

Expected source files:

-   `GRAPHIC DESIGN (1).pdf` --- original design portfolio,
    approximately 79 pages.
-   `mine.jpg` --- original portrait photograph.
-   `mine1.jpg` --- second original portrait photograph.
-   A resume PDF already added by the owner. **Discover its actual
    filename by inspecting the directory. Do not assume its filename.**

There may also be extracted images, existing React source code and
project assets.

## Source-of-truth rules

-   Original graphic artwork must come from the supplied PDF, not
    AI-generated replacement designs.
-   The two original photographs must be used for the owner's real
    portrait.
-   The resume is the source of truth for formal education and
    internship descriptions, except where the owner has explicitly
    confirmed updated details in this prompt.
-   The owner's explicit skill-level clarification in this prompt is
    authoritative.
-   Never invent project results, clients, metrics, testimonials,
    employment, awards or technical implementation.
-   Never claim an AI-assisted project was entirely independently coded.
-   Do not modify the original PDF, portrait photographs or resume.
-   Make web-optimised copies in the website asset directory.

If the resume is missing, report that fact and continue with confirmed
information. Do not block all website work.

------------------------------------------------------------------------

# 2. FIX THE BRAND WORDMARK

The current website displays:

`THOUFIKUR.`

The purple dot after the name is unwanted.

**Change the wordmark everywhere to exactly:**

`THOUFIKUR`

Requirements:

-   Remove the trailing full stop completely.
-   Do not replace it with a dot, circle or decorative punctuation.
-   Do not add a purple dot beside the wordmark.
-   Keep the wordmark typography strong, clean and premium.
-   Use Forest Green for the main wordmark.
-   Ensure the same spelling is used in the header, footer, preloader,
    mobile menu and metadata where appropriate.

------------------------------------------------------------------------

# 3. CORRECT THE TRACK AND NAVIGATION LOGIC

The current screenshot shows a serious inconsistency:

-   Engineering is highlighted as the active track.
-   The hero content still introduces the owner as a graphic designer.
-   The status badge says Engineering portfolio track active.
-   The page URL in the screenshot includes `#technology`.
-   Navigation contains both track selectors and repeated links such as
    Engineering and Tech.

This must be fixed.

## Three portfolio tracks

1.  **CREATIVE** --- default active track.
2.  **ENGINEERING** --- electrical and electronics work.
3.  **TECHNOLOGY** --- software, AI and development projects.

### Initial state

When the website is opened at `/` with no track hash:

-   Creative must be active.
-   Hero badge must say `CREATIVE PORTFOLIO TRACK ACTIVE`.
-   Hero role must prioritise Graphic Designer.
-   Main CTA must say `Explore Creative Work`.
-   Creative project highlights must appear first.

### Track switching

When the visitor selects Engineering:

-   Engineering becomes visibly active.
-   Hero badge, introduction, selected projects and CTA must update to
    Engineering content.
-   Engineering must not leave a Graphic Designer-only active badge.

When the visitor selects Technology:

-   Technology becomes visibly active.
-   Hero badge, introduction, selected projects and CTA must update to
    technology content.

When the visitor selects Creative:

-   Restore the Creative state.

### URL synchronisation

Use consistent URL state:

-   `/#creative`
-   `/#engineering`
-   `/#technology`

The selected track must match the URL hash. Directly opening any of
these URLs must display the correct active track. Browser back/forward
navigation must also work.

Do not leave the selected tab, badge, hero text and URL out of sync.

## Simplify the main navigation

The current navigation duplicates track labels and section links.

Recommended header:

-   THOUFIKUR
-   Track selector: Creative / Engineering / Technology
-   Work
-   Archive
-   Case Studies
-   Experience
-   About
-   Resume
-   Contact

Do not show duplicate Engineering and Tech links if those already exist
as track selectors. Section navigation should point to real sections and
work correctly on mobile.

Make the header sticky, with a refined background and subtle
scroll-state change. Do not let it consume too much vertical space.

------------------------------------------------------------------------

# 4. EXACT BRAND COLOURS --- DO NOT SUBSTITUTE

The required palette is:

  -----------------------------------------------------------------------
  Name                    Exact hex               Use
  ----------------------- ----------------------- -----------------------
  Forest Green            `#1F5D2B`               Main brand, strong
                                                  headings, buttons, dark
                                                  sections

  Sand Beige              `#E8DCC4`               Warm backgrounds,
                                                  panels and editorial
                                                  surfaces

  Electric Purple         `#8B5CF6`               Visible accents, active
                                                  states, selected
                                                  surfaces, motion
                                                  highlights

  Soft Ivory              `#F8F5ED`               Light neutral
                                                  background

  Charcoal                `#20231F`               Main text and contrast
  -----------------------------------------------------------------------

These exact three brand colours were selected by the owner from a
reference palette. Do not replace them with a different green, pale
yellow, orange, blue or generic purple.

## Why the current colour treatment needs correction

The supplied screenshot looks mostly beige and green, with purple barely
visible. The owner wants the complete three-colour identity, not a
nearly monochrome beige/green site.

Use a deliberate approximate distribution:

-   55% Sand Beige / Soft Ivory.
-   30% Forest Green.
-   15% Electric Purple accents and selected surfaces.

This is a visual guide, not a requirement to make every section a flat
block of one colour.

## Required colour application

-   Main page backgrounds: Sand Beige and Soft Ivory.
-   Header and wordmark: Forest Green.
-   Primary buttons: Forest Green with white text.
-   Secondary buttons: Sand Beige/ivory with Forest Green borders and
    text.
-   Selected track pill: Forest Green with white text.
-   Purple: visibly used for active indicators, project category labels,
    selected card accents, small decorative surfaces, animated orbs,
    timelines and selected interaction states.
-   Purple must appear in more than the logo or a tiny decorative dot.
-   Use Forest Green and Electric Purple together carefully, with
    readable contrast.
-   Do not use a large purple gradient everywhere.
-   Avoid random colours not in the palette, except colours inherent in
    the original artwork thumbnails.

Create central CSS variables/design tokens. All sections and components
must use the same tokens. Do not hardcode inconsistent one-off colours.

Example tokens:

``` css
:root {
  --forest-green: #1F5D2B;
  --sand-beige: #E8DCC4;
  --electric-purple: #8B5CF6;
  --soft-ivory: #F8F5ED;
  --charcoal: #20231F;
}
```

------------------------------------------------------------------------

# 5. HERO SECTION --- PORTRAIT AND PREMIUM SCROLL EXPERIENCE

The current hero has a large portrait, but it looks static. The owner
wants the photograph to become an integrated animated design element.

## Use the actual photographs

-   Inspect `mine.jpg` and `mine1.jpg`.
-   Choose the better photograph for the hero.
-   Use the other photograph in About or a secondary visual section.
-   Preserve the actual person, facial features, hair, clothing, body
    proportions and natural appearance.
-   Do not generate a replacement face or a different person.
-   Do not use a low-resolution crop from the browser screenshot if the
    original photograph exists in the folder.

## Produce a transparent cutout

Create a high-quality transparent-background portrait from the best
original photograph.

Preferred output:

`public/images/thoufikur-cutout.png`

Also create:

-   `public/images/thoufikur-hero.webp` --- original or carefully
    optimised hero photograph.
-   `public/images/thoufikur-about.webp` --- second portrait or
    alternate crop.
-   `public/images/thoufikur-cutout-preview.webp` --- optional preview
    on a neutral background.

Use a real background-removal/segmentation method, such as a suitable
local `rembg`/U²-Net workflow or another reliable segmentation tool
available in the environment.

Important:

-   Preserve hair edges as carefully as possible.
-   Do not remove parts of the suit, shirt, hands or face.
-   Do not alter facial appearance.
-   Inspect the transparent PNG against both light and dark backgrounds.
-   Keep the original photograph as a fallback.
-   Do not claim the background is removed if the output still has a
    rectangular background.

If automatic removal is poor, do not publish a visibly damaged cutout.
Use the original photograph with a refined mask/frame and report the
limitation.

## Hero composition

Create a premium editorial two-column hero:

Left: - Role label. - Main headline. - Supporting introduction. - Main
CTA. - Secondary resume/contact actions.

Right: - Large cutout portrait layered over an abstract background. -
Floating decorative elements. - A subtle circular/orb composition. -
Small professional labels.

Headline:

`Creative mind. Engineering mindset.`

Supporting copy:

"I explore the intersection of visual communication, electrical
engineering and technology --- turning ideas into designs and practical
projects."

The hero should make Graphic Design the primary hiring target while
showing the engineering and technology dimensions.

## Portrait motion

Implement all of these carefully:

1.  Masked entrance reveal when the page loads.
2.  Gentle floating motion (slow vertical movement).
3.  Scroll-linked parallax: the portrait moves slightly at a different
    rate from the text.
4.  A subtle scale or position transition as the user scrolls away from
    the hero.
5.  Mouse-responsive depth on desktop, with very small movement.
6.  Floating role labels that move at different speeds.
7.  A circular/orb element behind or around the cutout.
8.  A subtle image shadow/edge treatment so the cutout separates from
    the background.

Do not rotate or distort the face/body. Keep movement subtle and
premium.

------------------------------------------------------------------------

# 6. SCROLL-TRIGGERED BUBBLES, ORBS AND FLOWING EFFECTS

The owner specifically wants round/bubble/orb elements and flowing
motion to appear while scrolling.

Implement a coherent motion system, not random bubbles everywhere.

## Required effect: floating orb field

Create a set of soft circular elements around the portrait and selected
section transitions:

-   Different sizes.
-   Forest Green, Electric Purple and soft ivory tints.
-   Some solid translucent circles.
-   Some thin outlined circles.
-   Some blurred glow orbs.
-   Subtle depth and parallax.
-   Slow, organic movement.

The orbs should be decorative and must never cover important text or the
person's face.

## Scroll interaction

As the visitor scrolls:

-   Orbs gently rise, drift sideways or change scale.
-   A few circles enter from the edges of the viewport.
-   Some circles expand into soft circular reveals between sections.
-   The portrait and decorative orbs move at different parallax speeds.
-   A small number of bubbles may follow a controlled path along the
    section transition.
-   Use scroll progress to control their position and opacity.
-   Keep the motion continuous and smooth.

## Bubble appearance

Use a polished visual treatment:

-   Soft translucent fill.
-   Subtle border.
-   Light blur where appropriate.
-   Controlled shadow.
-   Avoid excessive glassmorphism.
-   Avoid a childish soap-bubble appearance.
-   Avoid large opaque circles blocking content.

## Additional flowing effects

-   Smooth text reveal.
-   Image mask reveal.
-   Section background transition.
-   Animated line or path drawing.
-   Small floating particles only in selected areas.
-   Subtle parallax layers.

Respect `prefers-reduced-motion`. For reduced-motion users, show a
static composition.

Do not use scroll-jacking. Do not make the website difficult to read or
navigate.

------------------------------------------------------------------------

# 7. PREMIUM EFFECTS --- THE CURRENT SITE MUST NOT REMAIN STATIC

The screenshots show that the current implementation has very little
visible motion. Add the following effects and make them actually work.

## A. Cinematic hero entrance

-   Staggered headline reveal.
-   Masked portrait reveal.
-   Role label entrance.
-   CTA entrance.
-   Decorative orbs enter with slight delay.

## B. Kinetic typography

-   Reveal headline line by line.
-   Animate selected words.
-   Use a restrained moving marquee:
    `DESIGN · ENGINEERING · TECHNOLOGY · MULTIMEDIA`
-   Do not animate every paragraph.

## C. Scroll reveal

-   Sections reveal as they enter the viewport.
-   Images use clip-path or mask transitions.
-   Headings reveal with a slight vertical movement.
-   Cards enter with staggered timing.
-   No large delays that make content feel slow.

## D. Horizontal project storytelling

-   Use a horizontal project rail on desktop only if it is smooth and
    accessible.
-   Mobile must use normal vertical scrolling.
-   Add a subtle progress indicator.
-   Do not trap the user in a pinned section.

## E. Interactive bento grid

-   Different card sizes.
-   A few larger featured artworks.
-   Smaller supporting artwork cards.
-   Refined hover states.
-   Smooth transitions.
-   Do not make all cards look identical.

## F. Project image interactions

-   Slight scale on hover.
-   Image reveal on scroll.
-   Project title and category reveal.
-   Full-size artwork viewer.
-   Preserve original artwork ratio.

## G. Cursor and buttons

-   Optional custom cursor over artwork with `VIEW PROJECT`.
-   Subtle magnetic CTA movement.
-   Disable custom cursor on mobile.
-   Never make controls hard to click.

## H. Page transitions

-   Subtle fade/mask transitions for project details.
-   Preserve browser back/forward navigation.
-   Do not delay route changes unnecessarily.

## I. Timeline animation

-   Timeline line draws on scroll.
-   Internship and leadership items reveal sequentially.
-   Use purple and green indicators.

## J. Performance and accessibility

-   Respect reduced-motion settings.
-   Use transform/opacity where possible.
-   Avoid layout thrashing.
-   Avoid excessive simultaneous animations.
-   Keep mobile performance acceptable.
-   Do not add a heavy 3D scene unless it adds genuine value.

Use the existing animation dependencies if already installed. Otherwise
choose a purposeful combination such as GSAP/ScrollTrigger for complex
scroll storytelling and Framer Motion for component transitions. Do not
run competing animation systems on the same element.

------------------------------------------------------------------------

# 8. REMOVE THE UNWANTED POSTERS FROM THE CURRENT WEBSITE

The owner attached screenshots 2--6 showing posters currently appearing
in the portfolio. **Remove those artworks from every part of the
website.**

This is a specific exclusion list. Match both the artwork and the source
PDF page number.

## Exclude these source PDF pages/artworks

  -----------------------------------------------------------------------
                                  PDF page Artwork to remove
  ---------------------------------------- ------------------------------
                                         2 Science Club Executive Board
                                           2026--27 announcement /
                                           Thoufikur Multimedia Executive
                                           Director poster

                                         6 Guest Lecture poster

                                         7 MSME IDEA HACKATHON 6.0 poster

                                        11 ETCHED / SOHU AI Chip Startup
                                           Spotlight poster

                                        19 E-Cell Certificate of
                                           Appreciation

                                        35 Dussehra / Happy Dussehra
                                           poster

                                        48 Title Sponsor Recognition /
                                           Gyaan Overseas poster

                                        71 HIGHWAYS '26 TakuMania poster

                                        72 HIGHWAYS '26 GreenScreen
                                           competition poster

                                        73 HIGHWAYS '26 Powerplay Arena
                                           poster
  -----------------------------------------------------------------------

Also inspect the screenshots carefully and exclude any additional
partially visible artwork that can be matched to the PDF, even if it is
not legible in the screenshot.

### Important

-   The TakuMania artwork must not appear anywhere.
-   The birthday poster must not appear anywhere.
-   Do not merely hide these posters from the homepage while leaving
    them in the Archive.
-   Remove them from featured work, archive, case studies,
    related-project recommendations, sliders, carousels and any other
    project collection.
-   Remove their project records from the active project manifest or
    mark them explicitly excluded.
-   Do not delete the original PDF or source images. Exclude them from
    website presentation only.
-   Do not reuse the same poster with a different crop or filename.

Create an explicit exclusion list in the project manifest, for example:

``` json
{
  "excludedSourcePdfPages": [2, 6, 7, 11, 19, 35, 48, 71, 72, 73],
  "exclusionReason": "Owner explicitly requested removal based on supplied website screenshots"
}
```

------------------------------------------------------------------------

# 9. REPLACE THE REMOVED POSTERS WITH BETTER ORIGINAL DESIGNS

The owner wants the archive to show other distinct designs from the
supplied 79-page PDF.

Prioritise finding and using the following types of artwork, if present
in the original PDF:

1.  Office-bearer / leadership announcement designs featuring Thoufikur
    Rahaman.
2.  E-Cell creative designs and event communications.
3.  Secretary or student-organisation leadership announcement designs.
4.  Gandhi Jayanti designs.
5.  Other distinct event, festival, recruitment, institutional and
    promotional designs that are not excluded.
6.  Strong designs that demonstrate different visual styles and design
    capabilities.

## Artwork selection rules

-   Search the full PDF visually; do not assume page numbers for the
    replacement designs.
-   Use actual PDF pages as the source.
-   Identify the best eligible artwork.
-   Give each unique artwork one project ID.
-   Do not repeat a poster in multiple sections.
-   Do not use birthday posters.
-   Do not use the excluded artwork listed above.
-   Do not make up an office-bearer design if it does not exist in the
    PDF.
-   If a requested design cannot be found, list it in the audit report
    and select another eligible design.
-   Prefer variety: formal institutional design, festival design, event
    campaign, social media creative, recruitment/leadership creative and
    promotional design.
-   Do not fill the portfolio with only one style or one organisation's
    posters.

## Important: no repeated artwork anywhere

The same artwork must not appear in: - Selected Work. - Archive. - Case
Studies. - Related Projects. - Homepage carousel. - Engineering or
Technology sections.

A case study may reference a project already in the gallery, but do not
display a second duplicate project card or duplicate artwork image. Link
to the existing project record instead.

Create one canonical project record for each artwork. Use references to
that record rather than creating copies.

------------------------------------------------------------------------

# 10. REBUILD THE CREATIVE PORTFOLIO PRESENTATION

The current screenshots show some cards with large white empty areas,
inconsistent image presentation and awkward crop/height behaviour.

Fix the project cards.

## Card design

-   Use a consistent editorial grid.
-   Preserve artwork aspect ratios.
-   Do not stretch images.
-   Do not show blank white areas caused by fixed-height containers.
-   Use `object-fit: contain` for posters where all text/artwork must
    remain visible.
-   Use `object-fit: cover` only for carefully selected contextual
    imagery where cropping is acceptable.
-   Ensure each card has consistent padding and readable typography.
-   Keep the page number/source metadata discreet, not as a large
    distracting badge.
-   Use refined hover transitions and clear project labels.

## Suggested categories

-   Event & Promotional Posters
-   Festival & Occasion Designs
-   Recruitment & Announcements
-   Social Media Creatives
-   Certificates & Institutional
-   Branding & Profile Designs
-   Commercial & Creative Compositions

Only include categories supported by the actual artwork.

## Project card information

-   Title.
-   Category.
-   Year only if known.
-   One-sentence factual description.
-   Source PDF page stored as internal metadata.
-   View Project action.

Do not invent the year from the current date. Read it from the artwork
or reliable source.

------------------------------------------------------------------------

# 11. PROJECT LINKS --- ADD THESE EXACT DESTINATIONS

Add working external links to the correct project detail pages.

## A. RetinaScan AI / Diabetic Retinopathy Detection

Live website:

`https://sightsheild-ai.vercel.app/`

GitHub repository:

`https://github.com/THOUFIKUR/sih2026`

Project status:

Experimental diabetic retinopathy detection model and associated
application development.

Buttons:

-   `Visit Live Project` → `https://sightsheild-ai.vercel.app/`
-   `View Source Code` → `https://github.com/THOUFIKUR/sih2026`

Preserve the exact spelling `sightsheild-ai` in the URL. Do not
autocorrect it.

## B. Smart Attendance System

GitHub repository:

`https://github.com/THOUFIKUR/attandance-for-the-pc`

Project status:

Working hardware/software prototype involving computer vision,
attendance automation and Raspberry Pi integration. Winner at iCUBE
Hackathon, as confirmed by the owner.

Button:

-   `View Source Code` →
    `https://github.com/THOUFIKUR/attandance-for-the-pc`

Do not invent a live demo URL.

## C. Adaptive Quiz AI Platform

GitHub repository:

`https://github.com/THOUFIKUR/adaptive-quiz-LAST1`

Project status:

Algorithmic prototype that adapts question difficulty using response
accuracy and response time.

Button:

-   `View Source Code` →
    `https://github.com/THOUFIKUR/adaptive-quiz-LAST1`

Do not invent a live demo URL.

## D. Smart Track Safety System

Project status:

SIH project prototype involving ESP32, sensors and fault-detection
alerts for overhead line safety.

No repository URL has been supplied in this brief. Do not invent one.
Show a project detail page without a fake GitHub button until a verified
link is supplied.

## Link behaviour

-   Use actual anchor links.
-   Open external sites in a new tab.
-   Use safe `rel="noopener noreferrer"` attributes.
-   Use clear labels and icons.
-   Test each link by opening it in the browser if browser access is
    available.
-   Do not claim a link was verified if it was not actually tested.

------------------------------------------------------------------------

# 12. CONFIRMED CONTENT --- USE THESE FACTS

## Identity and education

Name: THOUFIKUR RAHAMAN Y\
Degree: B.E. Electrical and Electronics Engineering\
Institution: Sri Venkateswara College of Engineering\
Academic period: September 2024 -- June 2028\
Current academic stage: Third year / Sixth semester

CGPA must be displayed exactly as:

**8.39 / 10.0 (Up to 4th Semester)**

Do not describe this as the current sixth-semester CGPA.

## Internship 1 --- Schwing Stetter

Organisation: Schwing Stetter\
Location: Sriperumbudur\
Role: Student Intern\
Duration: **1 July 2026 -- 15 July 2026**

Areas of exposure: - Industrial electrical design. - Control systems. -
Industrial automation.

## Internship 2 --- Chennai Metro Rail Limited

Organisation: Chennai Metro Rail Limited (CMRL)\
Location: Chennai\
Role: Student Intern\
Duration: **1 December 2025 -- 30 December 2025**

Areas of exposure: - Metro power distribution. - Transformers. - Relay
protection. - Switchgear. - Busbars. - Overhead traction systems. -
Pantograph operations. - SCADA.

Display these dates clearly in the Experience timeline.

## Leadership

Use these exact roles:

-   Chief Design Officer --- E-Cell, SVCE.
-   Executive Director of Multimedia --- Science Club, SVCE (2026--27).
-   Deputy Secretary --- BIS Student Chapter, SVCE.
-   Team Leader --- aegisAI.

Do not change titles without the owner's confirmation.

## Project status

### Smart Attendance System

-   Working hardware/software prototype.
-   Python, OpenCV, MediaPipe, SQLite and Raspberry Pi project context.
-   iCUBE Hackathon winner.
-   Repository: `https://github.com/THOUFIKUR/attandance-for-the-pc`

### Smart Track Safety System

-   SIH project prototype.
-   ESP32, sensors and fault-detection alert mechanism.
-   Do not describe it as a deployed railway/utility safety system.

### Adaptive Quiz AI Platform

-   Algorithmic prototype.
-   Uses accuracy and response time to adapt question difficulty.
-   Repository: `https://github.com/THOUFIKUR/adaptive-quiz-LAST1`

### RetinaScan AI

-   Experimental diabetic retinopathy detection model and associated
    application development.
-   Live website: `https://sightsheild-ai.vercel.app/`
-   Repository: `https://github.com/THOUFIKUR/sih2026`

## Contact

Name: THOUFIKUR RAHAMAN Y\
Email: `thoufikurrahaman@gmail.com`\
Email action: `mailto:thoufikurrahaman@gmail.com`\
LinkedIn: `https://linkedin.com/in/thoufikur-rahaman-y-9a66a0388`\
GitHub: `https://github.com/THOUFIKUR`

Keep the phone number private on the public website by default.

------------------------------------------------------------------------

# 13. SKILLS --- DO NOT OVERSTATE PROGRAMMING PROFICIENCY

## Creative tools confirmed

-   Canva.
-   Adobe Express.
-   CapCut.

Creative capabilities: - Poster design. - Visual communication. - Social
media creatives. - Festival and event designs. - Typography. - Layout
and composition. - Multimedia coordination.

## Programming and database fundamentals

The owner explicitly identifies:

-   C.  
-   Java.
-   Supabase.
-   SQLite.

Describe C and Java as languages studied/used at an academic or
project-fundamentals level. Supabase and SQLite are database
technologies, not programming languages.

## AI-assisted development and basic familiarity

The owner has explored these technologies through AI-assisted/vibe-coded
projects and has basic conceptual understanding and project-level
exposure:

-   Python.
-   JavaScript.
-   HTML and CSS.
-   React.
-   Vite.
-   Tailwind CSS.
-   FastAPI.

Label these as **AI-assisted development / basic project exposure**. Do
not display them as advanced independently mastered programming skills.
Do not assign proficiency percentages.

## AI and computer vision project exposure

Only show tools supported by actual project evidence:

-   OpenCV.
-   MediaPipe.
-   YOLOv8.
-   EfficientNetB3.
-   ONNX.

Describe these as project technologies or exposure, not expert-level
mastery.

## Electrical and engineering tools

Where supported by the resume and previous confirmed work:

-   AutoCAD.
-   MATLAB.
-   TIA Portal.
-   EPLAN.
-   Fusion 360.
-   KiCad.
-   Tinkercad.
-   PLC and SCADA fundamentals.
-   Industrial automation.
-   Embedded systems.
-   IoT.
-   Electrical control systems.
-   Power systems fundamentals.

Do not add Photoshop, Illustrator, InDesign or After Effects unless the
owner separately confirms them.

------------------------------------------------------------------------

# 14. CASE STUDIES AND PROJECT STORYTELLING

Create detailed case studies for selected genuine projects, not every
poster.

Possible creative case studies should be selected only after the PDF
audit and exclusion list have been applied.

For each case study:

1.  Project context.
2.  Objective.
3.  Target audience.
4.  Actual role.
5.  Design direction.
6.  Typography and colour choices.
7.  Layout and composition.
8.  Final artwork.
9.  Deliverables.
10. Honest reflection.

Do not invent client feedback, research, sketches, metrics or results.

A project may appear as a featured card and have one detail page, but
its artwork must not be duplicated as another independent gallery item.

------------------------------------------------------------------------

# 15. IMPLEMENTATION TECHNOLOGY

Inspect the existing project before changing dependencies.

Preferred technologies if compatible with the current project:

-   React.
-   Vite.
-   TypeScript.
-   Tailwind CSS.
-   GSAP / ScrollTrigger for advanced scroll motion.
-   Framer Motion for interface transitions.
-   Lenis only if it improves the experience without harming
    accessibility.
-   Three.js only for a limited, purposeful 3D/orb effect.
-   Lucide icons.

Do not install unnecessary libraries. Reuse existing dependencies where
practical.

Keep the application responsive, accessible and performant.

------------------------------------------------------------------------

# 16. REQUIRED AUDIT FILES

Update or create the following files.

## `PROJECT_AUDIT.md`

Include:

-   All source files found.
-   All 79 PDF pages inspected.
-   Artwork inventory and page numbers.
-   Existing projects removed from the site.
-   New replacement projects selected.
-   Duplicate artwork removed.
-   Final featured projects.
-   Final archive selection.
-   Portrait processing result.
-   Resume file found and integration status.

## `CONTENT_QUESTIONS.md`

The previously unresolved questions have been answered. Remove the
resolved CGPA and internship-date questions.

Keep only genuinely unresolved questions. Do not ask the owner again for
confirmed information.

## `PROJECT_MANIFEST.json`

Maintain one canonical record per artwork/project.

Include: - `id` - `title` - `category` - `sourcePdfPage` - `image` -
`aspectRatio` - `year` (nullable) - `description` - `featured` -
`caseStudy` - `excluded` - `variationGroup` (nullable)

Include the exclusion list:

``` json
{
  "excludedSourcePdfPages": [2, 6, 7, 11, 19, 35, 48, 71, 72, 73],
  "exclusionReason": "Owner explicitly requested removal based on supplied website screenshots"
}
```

If additional visible artwork in screenshots 2--6 can be matched to the
PDF, exclude it too and record its page.

## `CHANGELOG_PORTFOLIO.md`

Record:

-   What was changed.
-   Components edited.
-   Styles and colour tokens changed.
-   Artwork excluded.
-   Artwork added.
-   Motion effects implemented.
-   Links added.
-   Tests performed.
-   Known remaining issues.

------------------------------------------------------------------------

# 17. BROWSER VISUAL QA --- USE THE PROVIDED SCREENSHOTS

The owner supplied six screenshots.

Use them as a before-state reference.

## Screenshot 1 --- Hero/header

Problems to correct: - Remove the dot after THOUFIKUR. - Fix active
track mismatch. - Improve the colour distribution. - Add visible premium
animation. - Add floating portrait and scroll-triggered orb/bubble
effects. - Simplify duplicate navigation links.

## Screenshot 2 --- Project cards

Remove the MSME Idea Hackathon poster and the HIGHWAYS TakuMania
artwork. Fix card proportions and avoid empty white image regions.

## Screenshot 3 --- Project cards

Remove the ETCHED / SOHU AI Chip poster and the Science Club Executive
Board poster shown in this screenshot.

## Screenshot 4 --- Project cards

Remove the GreenScreen, Powerplay Arena and Guest Lecture artwork shown
in this screenshot.

## Screenshot 5 --- Project cards

Remove the Dussehra poster and E-Cell Certificate of Appreciation shown
in this screenshot.

## Screenshot 6 --- Project cards

Remove the Title Sponsor Recognition artwork and any other visible
artwork that matches the excluded source pages.

Do not publish the screenshots themselves as portfolio artwork.

------------------------------------------------------------------------

# 18. FINAL QUALITY CHECKLIST

Before finishing, verify all of the following.

## Branding and colours

-   [ ] Wordmark is exactly `THOUFIKUR`, with no full stop.
-   [ ] Forest Green is `#1F5D2B`.
-   [ ] Sand Beige is `#E8DCC4`.
-   [ ] Electric Purple is `#8B5CF6`.
-   [ ] Purple is visibly used throughout the site, not only as a tiny
    accent.
-   [ ] No unrelated replacement palette has been introduced.

## Navigation and tracks

-   [ ] Creative is the default active track.
-   [ ] Engineering selection updates all relevant hero content.
-   [ ] Technology selection updates all relevant hero content.
-   [ ] URL hash matches active track.
-   [ ] Browser back/forward works.
-   [ ] No duplicate navigation labels.

## Portrait and motion

-   [ ] Original portrait is used.
-   [ ] Transparent cutout is created and inspected.
-   [ ] Hair and clothing edges are acceptable.
-   [ ] Floating portrait works.
-   [ ] Scroll parallax works.
-   [ ] Orb/bubble elements appear on scroll.
-   [ ] Section reveal effects work.
-   [ ] Reduced-motion mode works.

## Artwork

-   [ ] Pages 2, 6, 7, 11, 19, 35, 48, 71, 72 and 73 are excluded.
-   [ ] Other excluded artworks visible in screenshots 2--6 are also
    removed.
-   [ ] TakuMania poster is absent everywhere.
-   [ ] Birthday poster is absent everywhere.
-   [ ] Replacement artwork is from the original PDF.
-   [ ] Office-bearer/Thoufikur/E-Cell/Secretary/Gandhi Jayanti artwork
    is prioritised where present.
-   [ ] No artwork is duplicated anywhere.
-   [ ] Original aspect ratios are preserved.
-   [ ] No blank white image regions remain.

## Project links

-   [ ] RetinaScan live website works.
-   [ ] RetinaScan GitHub link works.
-   [ ] Attendance GitHub link works.
-   [ ] Adaptive Quiz GitHub link works.
-   [ ] No invented Smart Track repository link.
-   [ ] Email, LinkedIn and GitHub contact links work.

## Content

-   [ ] CGPA says `8.39 / 10.0 (Up to 4th Semester)`.
-   [ ] Schwing Stetter dates say `1 July 2026 – 15 July 2026`.
-   [ ] CMRL dates say `1 December 2025 – 30 December 2025`.
-   [ ] Leadership titles are correct.
-   [ ] Project status is honest.
-   [ ] AI-assisted coding exposure is represented accurately.
-   [ ] Phone number is not published by default.

## Build and usability

-   [ ] Desktop tested.
-   [ ] Tablet tested.
-   [ ] Mobile tested.
-   [ ] Navigation and buttons work.
-   [ ] No broken images.
-   [ ] No console errors that affect functionality.
-   [ ] Production build succeeds.
-   [ ] `CHANGELOG_PORTFOLIO.md` is updated.
-   [ ] `PROJECT_AUDIT.md` is updated.
-   [ ] `CONTENT_QUESTIONS.md` contains only unresolved questions.

------------------------------------------------------------------------

# 19. EXECUTION INSTRUCTIONS

Execute in this order:

1.  Inspect existing source code and assets.
2.  Back up current implementation.
3.  Fix the wordmark and track/navigation logic.
4.  Implement exact palette tokens and update the entire site.
5.  Inspect both portrait images and produce a transparent cutout.
6.  Implement hero animation, scroll parallax and bubble/orb effects.
7.  Audit all 79 PDF pages.
8.  Exclude the unwanted posters listed above from every website
    collection.
9.  Find and select eligible replacement designs from the original PDF.
10. Remove duplicates globally.
11. Fix card aspect ratios and blank image regions.
12. Add the three supplied project repository links and the RetinaScan
    live website link.
13. Update all confirmed education, internship, leadership and project
    content.
14. Update audit, manifest and changelog files.
15. Run the website and inspect it in the browser.
16. Test every track, interaction, image, link and responsive
    breakpoint.
17. Run the production build.
18. Fix errors and refine until the implementation matches this
    specification.

Do not stop after writing a plan. Do not ask again for information
already confirmed in this document. If a requested replacement poster
cannot be found in the PDF, report it and use another eligible original
design rather than inventing one.

------------------------------------------------------------------------

# 20. HOW TO RUN THE WEBSITE

After implementation, inspect `package.json` and use the project's
actual package manager and scripts.

For a standard npm/Vite project, the expected commands are:

``` bat
cd /d D:\portfolio
npm install
npm run dev
```

Open:

`http://localhost:5173/`

For production verification:

``` bat
cd /d D:\portfolio
npm run build
npm run preview
```

If the dev server is already running, do not start a duplicate server.
Use the existing terminal session or stop it with `Ctrl + C` before
restarting.

If the project uses `pnpm`, `yarn`, or another package manager, follow
the lockfile and existing scripts instead of forcing npm.

**Final instruction:** The result must be visibly different from the
current static-looking screenshots: the exact three-colour brand must be
apparent, the logo dot must be gone, the Creative track must be the
default, the portrait must have polished motion and scroll-triggered
orbs, the specified posters must be absent everywhere, replacement
artwork must be unique and authentic, and all project links must lead to
the supplied destinations.
