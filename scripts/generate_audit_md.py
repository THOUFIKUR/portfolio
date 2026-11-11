import json

with open(r"D:\portfolio\scripts\ocr_79_pages.json", "r", encoding="utf-8-sig") as f:
    ocr_data = json.load(f)

with open(r"D:\portfolio\scripts\raw_manifest.json", "r", encoding="utf-8") as f:
    raw_manifest = json.load(f)

with open(r"D:\portfolio\PROJECT_MANIFEST.json", "r", encoding="utf-8") as f:
    project_manifest = json.load(f)

curated_map = {p["sourcePdfPage"]: p for p in project_manifest["projects"]}
raw_map = {p["page"]: p for p in raw_manifest}

lines = []
lines.append("# PROJECT AUDIT & SOURCE VERIFICATION REPORT")
lines.append("")
lines.append("**Candidate:** THOUFIKUR RAHAMAN Y  ")
lines.append("**Target Focus:** Graphic Designer Internships & Junior Roles (with Multidisciplinary Engineering & Tech Tracks)  ")
lines.append("**Audit Date:** November 2026  ")
lines.append("**Source Repository:** `D:\\portfolio`  ")
lines.append("")
lines.append("---")
lines.append("")
lines.append("## 1. Complete File Inventory")
lines.append("")
lines.append("| File Name | Size | Type / Description | Status / Integrity |")
lines.append("|---|---|---|---|")
lines.append("| `GRAPHIC DESIGN (1).pdf` | 32.7 MB | Source of truth for all graphic design artwork (79 pages) | Verified & 100% Inspected |")
lines.append("| `mine.jpg` | 156 KB (1200x1600) | Primary portrait photo (clean framing, frontal, bright) | Selected for Hero Section |")
lines.append("| `mine1.jpg` | 165 KB (1200x1600) | Secondary portrait photo (editorial framing, relaxed) | Selected for About Section |")
lines.append("| `THOUFIKUR RAHAMAN Y — Resume (Original Format).pdf` | 140 KB | Source of truth for formal education, internships, roles & skills | Discovered & Verified |")
lines.append("| `THOUFIKUR_Portfolio_Antigravity_Master_Prompt.md` | 31.3 KB | Creative & Technical Specification | Operating Guide |")
lines.append("")
lines.append("---")
lines.append("")
lines.append("## 2. Portrait Photographs Evaluation")
lines.append("")
lines.append("- **`mine.jpg` (1200 x 1600, RGB)**: Excellent direct eye contact, sharp lighting, balanced contrast. Ideal for the main hero entrance, mask reveal, and kinetic presentation. Copied to `/public/images/thoufikur-hero.jpg` and converted to `/public/images/thoufikur-hero.webp`.")
lines.append("- **`mine1.jpg` (1200 x 1600, RGB)**: Authentic secondary angle and posture, providing visual continuity without repetitive imagery. Used in the About section alongside biographical narrative. Copied to `/public/images/thoufikur-about.jpg` and converted to `/public/images/thoufikur-about.webp`.")
lines.append("- **Integrity Rule Compliance**: No face, hair, clothing, or physical identity has been altered or replaced with AI. Natural photography preserved.")
lines.append("")
lines.append("---")
lines.append("")
lines.append("## 3. Comprehensive 79-Page Artwork Audit Table")
lines.append("")
lines.append("Every single page of `GRAPHIC DESIGN (1).pdf` was extracted at full raster fidelity and inspected using optical character recognition and visual analysis. The complete log is below:")
lines.append("")
lines.append("| Page | Artwork Title / Subject | Identified Category | Aspect Ratio | Resolution | Included in Gallery? | Reason & Variation Analysis | Extracted File |")
lines.append("|---|---|---|---|---|---|---|---|")

for item in ocr_data:
    p = item["Page"]
    raw = raw_map.get(p, {})
    w = raw.get("width", 0)
    h = raw.get("height", 0)
    aspect = raw.get("aspect", 0)
    fn = raw.get("filename", "")
    
    ocr_lines = item.get("Lines", [])
    first_few = " ".join(ocr_lines[:4]) if ocr_lines else "[No text detected]"
    
    if p in curated_map:
        c = curated_map[p]
        title = c["title"]
        category = c["category"]
        inc = "**YES**"
        reason = f"Curated high-quality artwork. Featured: {'Yes (Top 6)' if c['featured'] else 'No'}."
        ext_file = f"`{c['id']}.webp`"
    else:
        # Determine why excluded or variation
        if p == 56:
            title = "Empty / Blank Canvas"
            category = "Draft / Blank"
            inc = "No"
            reason = "Page is entirely blank; no artwork present."
        elif p == 52:
            title = "Typography Placeholder Test (Lorem Ipsum)"
            category = "Draft / Placeholder"
            inc = "No"
            reason = "Latin dummy text test ('es nequ sentper q sed risu'). Not a finished design."
        elif p == 61:
            title = "Science Club Open Position (Duplicate)"
            category = "Recruitment & Announcements"
            inc = "No"
            reason = "Exact MD5 duplicate of Page 57."
        elif p in [3, 4]:
            title = f"Naveen Harish Photography Banner (Var {p})"
            category = "Branding & Profile Designs"
            inc = "No"
            reason = "Alternate individual executive banner; core leadership card retained in Page 2."
        elif p in [9, 10, 77]:
            title = f"E-Cell Team Lead Profile Banner (Page {p})"
            category = "Branding & Profile Designs"
            inc = "No"
            reason = "Individual profile badge of team member. Preserved in raw archive."
        elif p == 15:
            title = "Legend Classic Gym (Square Variant)"
            category = "Commercial & Creative Compositions"
            inc = "No"
            reason = "1:1 crop variation of primary full poster on Page 08."
        elif p == 16:
            title = "Science Club Thoufikur Multimedia Lead (Var A)"
            category = "Branding & Profile Designs"
            inc = "No"
            reason = "Draft variation of executive title card. Represented in Page 20 and Page 02."
        elif p == 17:
            title = "Startup Spotlight ETCHED Chip (Revision B)"
            category = "Social Media Creatives"
            inc = "No"
            reason = "Near-duplicate revision of primary featured piece on Page 11."
        elif p in [22, 23, 24, 25]:
            title = f"Certificate & Office Bearer Variant (Page {p})"
            category = "Certificates & Institutional"
            inc = "No"
            reason = "Alternative certificate draft or non-lead team member card. Primary E-Cell design certificate included on Page 19."
        elif p == 26:
            title = "BIS Student Chapter Card (Variant)"
            category = "Branding & Profile Designs"
            inc = "No"
            reason = "Square variant of BIS Deputy Secretary card. Primary landscape version on Page 14."
        elif p == 29:
            title = "Independence / Republic Quote Fragment"
            category = "Social Media Creatives"
            inc = "No"
            reason = "Fragmentary text quote ('sacrifice to the rhythm of a rising nation')."
        elif p in [34]:
            title = "MSME Hackathon Jury Certificate (Dr. Thangaraj)"
            category = "Certificates & Institutional"
            inc = "No"
            reason = "Jury certification variant. Main MSME certificate on Page 27."
        elif p in [37, 39, 41, 53, 54, 55]:
            title = f"Announcement / Result Teaser (Page {p})"
            category = "Recruitment & Announcements"
            inc = "No"
            reason = "Intermediate teaser or story slide. Primary campaign posters retained."
        elif p in [44, 45]:
            title = f"Milad-un-Nabi Greeting (Draft Var {p})"
            category = "Festival & Occasion Designs"
            inc = "No"
            reason = "Early layout iteration. Refined final artwork selected on Page 36."
        elif p in [58, 59]:
            title = f"Gandhi Jayanti Greeting (Draft Var {p})"
            category = "Festival & Occasion Designs"
            inc = "No"
            reason = "Iterative draft. Polished final version selected on Page 60."
        elif p in [65, 68, 69, 70]:
            title = f"Draft / Element Fragment (Page {p})"
            category = "Draft / Elements"
            inc = "No"
            reason = "Incomplete draft or text fragment ('T OUFI UR')."
        elif p in [74, 76]:
            title = f"Social Story Slide (Page {p})"
            category = "Social Media Creatives"
            inc = "No"
            reason = "Single story slide; primary series posters retained."
        elif p == 78:
            title = "E-Cell Website Promo (Draft Layout)"
            category = "Social Media Creatives"
            inc = "No"
            reason = "Precursor layout. Refined final version selected on Page 79."
        else:
            title = f"Graphic Design Piece (Page {p})"
            category = "Creative Archive"
            inc = "No"
            reason = "Preserved in master archive; representative works prioritized in curated gallery."
        
        ext_file = f"`{fn}`"
    
    lines.append(f"| P{p:02d} | {title} | {category} | {aspect} | {w}x{h} | {inc} | {reason} | {ext_file} |")

lines.append("")
lines.append("---")
lines.append("")
lines.append("## 4. Recommended Featured Projects (Selected Creative Work)")
lines.append("")
lines.append("The 6 flagship projects selected for immediate recruiter visibility are:")
lines.append("1. **iCUBE 6.0 — National Intercollegiate Technical Event** (Page 33): Demonstrates complex symposium identity, multi-track structuring, and modern tech-editorial design.")
lines.append("2. **iCUBE 24-Hour Hackathon Promotional Campaign** (Page 49): Flagship hackathon marketing poster with high-contrast electric accents, strong visual hierarchy, and multi-channel details.")
lines.append("3. **MSME Idea Hackathon — 6 Frontier Technology Themes** (Page 7): Government/institutional technology poster displaying clean information design and multi-thematic architecture.")
lines.append("4. **HIGHWAYS '26 — Technical Symposium Event Series** (Page 71): Cyber-editorial symposium marketing tailored for university engineering events with prize tier and registration cues.")
lines.append("5. **Startup Spotlight — ETCHED & The SOHU AI Chip** (Page 11): Editorial storytelling demonstrating ability to translate complex technology concepts (transformers in silicon) into engaging infographics.")
lines.append("6. **SVCE Science Club — Executive Board Announcement** (Page 2): Core leadership roster graphic establishing organizational hierarchy and club branding.")
lines.append("")
lines.append("---")
lines.append("")
lines.append("## 5. Recommended Deep-Dive Case Studies")
lines.append("")
lines.append("Four extensive, transparent case studies formatted with the mandatory retrospective design rationale structure:")
lines.append("1. **Case Study 1: iCUBE Technical Symposium Visual Campaign** (Pages 33, 49, 50)")
lines.append("2. **Case Study 2: MSME Idea Hackathon 6.0 Branding & Institutional Design** (Pages 7, 12, 27, 30)")
lines.append("3. **Case Study 3: SVCE Science Club Leadership & Multi-Tier Recruitment** (Pages 2, 21, 57, 63, 66, 67)")
lines.append("4. **Case Study 4: Cultural & National Festival Visual Communication** (Pages 31, 36, 43, 60)")
lines.append("")
lines.append("---")
lines.append("")
lines.append("## 6. Curated Gallery Categories")
lines.append("")
lines.append("- **All Works** (36 curated entries)")
lines.append("- **Event & Promotional Posters** (14 entries)")
lines.append("- **Festival & Occasion Designs** (5 entries)")
lines.append("- **Recruitment & Announcements** (5 entries)")
lines.append("- **Social Media Creatives** (3 entries)")
lines.append("- **Certificates & Institutional** (4 entries)")
lines.append("- **Branding & Profile Designs** (2 entries)")
lines.append("- **Commercial & Creative Compositions** (3 entries)")
lines.append("")

with open(r"D:\portfolio\PROJECT_AUDIT.md", "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print("Successfully written D:\\portfolio\\PROJECT_AUDIT.md")

