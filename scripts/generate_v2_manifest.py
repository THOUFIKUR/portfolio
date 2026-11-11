import json
import pathlib

root = pathlib.Path("D:/portfolio")
raw_manifest = json.loads((root / "scripts" / "raw_manifest.json").read_text(encoding="utf-8"))
raw_by_page = {item["page"]: item for item in raw_manifest}

# Clean P09 & P10 from public/projects/creative so only the exact 44 active works exist
pub_creative = root / "public" / "projects" / "creative"
for f in list(pub_creative.iterdir()):
    if any(k in f.name for k in ("mahalakshmi", "perumal", "art_p09", "art_p10")):
        f.unlink()

# 44 Curated Unique Works: 6 Featured + 38 Archive
PROJECTS_DEF = [
    # --- 6 FEATURED FLAGSHIPS ---
    {
        "page": 53,
        "id": "creative-p53",
        "slug": "ecell-chief-design-officer-thoufikur",
        "title": "Chief Design Officer Profile — E-Cell SVCE",
        "category": "Branding & Profiles",
        "year": "2026",
        "description": "Office-bearer announcement graphic featuring layered halftone portrait lighting, bold condensed display type, and high-contrast purple aura.",
        "featured": True,
        "caseStudy": True,
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE",
        "variationGroup": None,
    },
    {
        "page": 33,
        "id": "creative-p33",
        "slug": "icube-6-national-technical-symposium",
        "title": "iCUBE 6.0 — National Intercollegiate Technical Event",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Stamp-edged print-inspired symposium poster combining architectural campus framing with modular track blocks for Innowel and Idea-O-Lite.",
        "featured": True,
        "caseStudy": True,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 40,
        "id": "creative-p40",
        "slug": "e-cell-inauguration-auditorium-backdrop",
        "title": "E-Cell SVCE Inauguration Ceremony — 16:9 Stage Backdrop",
        "category": "E-Cell & Institutional",
        "year": "2026",
        "description": "Widescreen stage visual banner structured for clear auditorium legibility across geometric institutional framing.",
        "featured": True,
        "caseStudy": True,
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE",
        "variationGroup": None,
    },
    {
        "page": 60,
        "id": "creative-p60",
        "slug": "gandhi-jayanti-peace-reflection",
        "title": "Gandhi Jayanti Commemorative Illustration",
        "category": "Festival & Occasion Designs",
        "year": "2025",
        "description": "Minimal heritage poster featuring a spinning-wheel illustration over textured paper with serene serif hierarchy.",
        "featured": True,
        "caseStudy": True,
        "role": "Designer",
        "client": "SVCE Science Club",
        "variationGroup": "gandhi-jayanti",
    },
    {
        "page": 49,
        "id": "creative-p49",
        "slug": "icube-24hr-hackathon-campaign",
        "title": "iCUBE 5.0 — 24-Hour Hackathon Campaign",
        "category": "Event & Promotional Posters",
        "year": "2025",
        "description": "Night-sky themed technical hackathon poster balancing stylized character illustration, clear date locks, and prize callouts.",
        "featured": True,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": "icube-5",
    },
    {
        "page": 64,
        "id": "creative-p64",
        "slug": "where-business-meets-kollywood-conclave",
        "title": "Mankatha — Where Business Meets Kollywood",
        "category": "Commercial & Creative Compositions",
        "year": "2026",
        "description": "High-contrast warm amber and obsidian event visual merging cinema-inspired typography with business conclave details and QR registration.",
        "featured": True,
        "caseStudy": False,
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE",
        "variationGroup": None,
    },

    # --- 38 CURATED UNIQUE ARCHIVE WORKS ---
    {
        "page": 69,
        "id": "creative-p69",
        "slug": "science-club-core-members-issue-01-thoufikur",
        "title": "Science Club Core Members Issue #01 — Editorial Cover",
        "category": "Branding & Profiles",
        "year": "2026",
        "description": "Magazine-style core team feature with ivory textured ground, blue display header, and crisp cutout portrait integration.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": "ed-multimedia-profile",
    },
    {
        "page": 68,
        "id": "creative-p68",
        "slug": "science-club-ed-multimedia-typography-thoufikur",
        "title": "Science Club ED Multimedia — Monochrome Kinetic Profile",
        "category": "Branding & Profiles",
        "year": "2026",
        "description": "Full-bleed dark editorial portrait layered behind bold cream cutout block typography.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": "ed-multimedia-profile",
    },
    {
        "page": 16,
        "id": "creative-p16",
        "slug": "introducing-thoufikur-ed-multimedia-grid",
        "title": "Introducing Executive Director Multimedia — Filmstrip Grid",
        "category": "Branding & Profiles",
        "year": "2026",
        "description": "Polaroid contact-sheet backdrop accented with crimson typography introducing the incoming 2026–27 multimedia lead.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": "ed-multimedia-profile",
    },
    {
        "page": 20,
        "id": "creative-p20",
        "slug": "science-club-executive-director-multimedia-thoufikur",
        "title": "Science Club Multimedia Lead — Wide Profile Banner",
        "category": "Branding & Profiles",
        "year": "2025",
        "description": "Horizontal widescreen office-bearer card featuring clean neutral marble backdrop and structured role alignment.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 13,
        "id": "creative-p13",
        "slug": "deputy-secretary-editorial-magazine-thoufikur",
        "title": "Deputy Secretary — Editorial Portrait Composition",
        "category": "Branding & Profiles",
        "year": "2025",
        "description": "Ultra-minimal ivory editorial layout pairing studio portraiture with thin architectural display serifs.",
        "featured": False,
        "caseStudy": False,
        "role": "Deputy Secretary",
        "client": "BIS Student Chapter SVCE",
        "variationGroup": None,
    },
    {
        "page": 14,
        "id": "creative-p14",
        "slug": "bis-student-chapter-deputy-secretary",
        "title": "BIS Student Chapter — Deputy Secretary Metallic Badge",
        "category": "Branding & Profiles",
        "year": "2025",
        "description": "Glass-and-steel brushed identification card crafted for the Bureau of Indian Standards student chapter office bearer.",
        "featured": False,
        "caseStudy": False,
        "role": "Deputy Secretary",
        "client": "BIS Student Chapter SVCE",
        "variationGroup": None,
    },
    {
        "page": 77,
        "id": "creative-p77",
        "slug": "ecell-president-roshan-editorial-profile",
        "title": "E-Cell President Profile — M. Roshan",
        "category": "Branding & Profiles",
        "year": "2026",
        "description": "Duotone grayscale leadership announcement framed by vertical varsity typography.",
        "featured": False,
        "caseStudy": False,
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE",
        "variationGroup": None,
    },
    {
        "page": 3,
        "id": "creative-p03",
        "slug": "naveen-harish-photography-director-profile",
        "title": "Photography Director Profile — Naveen Harish",
        "category": "Branding & Profiles",
        "year": "2026",
        "description": "Landscape member introduction banner with curved navy accent panels and clean institutional crest lockup.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 23,
        "id": "creative-p23",
        "slug": "rayeesha-bhat-science-club-vice-president",
        "title": "Vice President Announcement — Rayeesha Bhat P",
        "category": "Branding & Profiles",
        "year": "2026",
        "description": "Soft sky-gradient office-bearer banner with geometric framing and centered portrait badge.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 62,
        "id": "creative-p62",
        "slug": "e-cell-inauguration-keynote-poster",
        "title": "E-Cell Inauguration Ceremony — Keynote Speaker Poster",
        "category": "E-Cell & Institutional",
        "year": "2026",
        "description": "Warm cream keynote announcement honoring guest speaker Dr. P.K. Praveen Kumar with structured date and venue metadata.",
        "featured": False,
        "caseStudy": False,
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE",
        "variationGroup": None,
    },
    {
        "page": 79,
        "id": "creative-p79",
        "slug": "e-cell-svce-official-platform-launch",
        "title": "E-Cell SVCE Website Launch — Dream It. Build It. Launch It.",
        "category": "E-Cell & Institutional",
        "year": "2026",
        "description": "Vibrant violet social announcement incorporating laptop device mockup framing and clear URL CTA strip.",
        "featured": False,
        "caseStudy": False,
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE",
        "variationGroup": None,
    },
    {
        "page": 38,
        "id": "creative-p38",
        "slug": "ecell-meet-the-tech-team-2026-27",
        "title": "Meet The Tech Team 2026–27 — E-Cell",
        "category": "E-Cell & Institutional",
        "year": "2026",
        "description": "Energetic amber-yellow carousel cover featuring sketchy vector doodle accents and tight display lockup.",
        "featured": False,
        "caseStudy": False,
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE",
        "variationGroup": None,
    },
    {
        "page": 39,
        "id": "creative-p39",
        "slug": "ecell-meet-our-office-bearers-takeoff",
        "title": "Meet Our Office Bearers — Ready for Takeoff",
        "category": "E-Cell & Institutional",
        "year": "2026",
        "description": "Deep violet gradient series opener using paper-plane motion lines to cue horizontal swipe storytelling.",
        "featured": False,
        "caseStudy": False,
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE",
        "variationGroup": None,
    },
    {
        "page": 47,
        "id": "creative-p47",
        "slug": "ecell-pitching-league-competition",
        "title": "E-Cell Pitching League — Entrepreneurship Stage Event",
        "category": "E-Cell & Institutional",
        "year": "2025",
        "description": "Deep cobalt stage-spotlight visual pairing team illustration with condensed sans event schedule details.",
        "featured": False,
        "caseStudy": False,
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE",
        "variationGroup": None,
    },
    {
        "page": 74,
        "id": "creative-p74",
        "slug": "ecell-meet-our-team-core-members",
        "title": "Meet Our Team — E-Cell Core Members Monochrome",
        "category": "E-Cell & Institutional",
        "year": "2026",
        "description": "Monochrome team group composition with oversized geometric club emblem overlay.",
        "featured": False,
        "caseStudy": False,
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE",
        "variationGroup": None,
    },
    {
        "page": 46,
        "id": "creative-p46",
        "slug": "svce-epic-minor-in-entrepreneurship",
        "title": "SVCE-EPIC Minor in Entrepreneurship Bulletin",
        "category": "E-Cell & Institutional",
        "year": "2026",
        "description": "High-density halftone bulletin board presenting program credits, QR registration, and faculty coordinator contacts.",
        "featured": False,
        "caseStudy": False,
        "role": "Chief Design Officer",
        "client": "SVCE-EPIC & E-Cell",
        "variationGroup": None,
    },
    {
        "page": 5,
        "id": "creative-p05",
        "slug": "science-club-annual-induction-agenda",
        "title": "Science Club Annual Induction Ceremony — Agenda",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Structured numbered ceremony program combining warm classical serif indices with geometric azure edge accents.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 28,
        "id": "creative-p28",
        "slug": "svce-film-clapper-memento-design",
        "title": "Momento of Honour — Cinema Clapper Guest Tribute",
        "category": "Event & Promotional Posters",
        "year": "2025",
        "description": "Atmospheric theatrical spotlight design featuring an authentic cinema slate framing chief guest recognition.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "E-Cell & SVCE",
        "variationGroup": None,
    },
    {
        "page": 32,
        "id": "creative-p32",
        "slug": "abiento-science-expo-engineers-day",
        "title": "Abiento — State Level Science Expo & Engineers Day",
        "category": "Event & Promotional Posters",
        "year": "2025",
        "description": "Playful STEM-illustrated grid poster created for National Engineers Day experimental demonstrations.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 37,
        "id": "creative-p37",
        "slug": "power-of-innovation-science-club-seminar",
        "title": "The Power of Innovation — Auditorium Seminar",
        "category": "Event & Promotional Posters",
        "year": "2025",
        "description": "Glowing filament globe centerpiece with bold condensed event date and MPH Auditorium callout block.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 42,
        "id": "creative-p42",
        "slug": "dream-2-reality-idea-competition",
        "title": "Dream 2 Reality — IT & EPIC Idea Competition",
        "category": "Event & Promotional Posters",
        "year": "2025",
        "description": "Crisp white modular card layout using hand-drawn sketch icons to organize date, venue, eligibility, and QR signup.",
        "featured": False,
        "caseStudy": False,
        "role": "Chief Design Officer",
        "client": "Dept of IT & SVCE-EPIC",
        "variationGroup": None,
    },
    {
        "page": 50,
        "id": "creative-p50",
        "slug": "icube-5-4hrs-to-go-countdown",
        "title": "iCUBE 5.0 — 4 Hours To Go Deadline Countdown",
        "category": "Event & Promotional Posters",
        "year": "2025",
        "description": "Urgency-driven royal-indigo and lime-green registration countdown creative designed for social story shares.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "SVCE Science Club",
        "variationGroup": "icube-5",
    },
    {
        "page": 41,
        "id": "creative-p41",
        "slug": "science-club-recruitment-result-2026-27",
        "title": "Science Club Recruitment Result — 2026–2027",
        "category": "Recruitment & Announcements",
        "year": "2026",
        "description": "Warm golden editorial announcement using paper-note texture, tape graphics, and playful star doodles.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 57,
        "id": "creative-p57",
        "slug": "science-club-open-positions-call",
        "title": "Science Club Open Positions — Multi-Track Recruitment",
        "category": "Recruitment & Announcements",
        "year": "2025",
        "description": "Friendly illustrated hiring poster organizing 6 sub-teams (Web, Marketing, Multimedia, Podcast, Content, Photo) clearly.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 63,
        "id": "creative-p63",
        "slug": "science-club-recruitment-multimedia-web-marketing",
        "title": "We're Hiring! Join Our Team — Textured Kraft Call",
        "category": "Recruitment & Announcements",
        "year": "2026",
        "description": "Warm kraft-paper recruitment poster pairing a Director's Chair vector with department checklist and scannable QR.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 66,
        "id": "creative-p66",
        "slug": "podcast-team-recruitment-speak-edit-create",
        "title": "Podcast Team Recruitment — Speak, Edit, Create, Inspire",
        "category": "Recruitment & Announcements",
        "year": "2026",
        "description": "Editorial torn-paper layout highlighting voice hosts, audio engineers, and reel editors with bold navy accent type.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 67,
        "id": "creative-p67",
        "slug": "science-club-tech-web-recruitment",
        "title": "Web Development Team Recruitment — We Need You",
        "category": "Recruitment & Announcements",
        "year": "2026",
        "description": "Mustard-gold vintage call-to-action poster tailored for campus Frontend, Backend, and UI/UX developers.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 1,
        "id": "creative-p01",
        "slug": "earth-day-green-choices-april-22",
        "title": "Earth Day — Green Choices Today, Greener Planet Tomorrow",
        "category": "Festival & Occasion Designs",
        "year": "2026",
        "description": "Layered botanical environmental graphic blending bold green environmental typography with crisp paper-cut elements.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "Campus Sustainability Creative",
        "variationGroup": None,
    },
    {
        "page": 29,
        "id": "creative-p29",
        "slug": "80th-independence-day-commemorative-poster",
        "title": "80th Independence Day Commemorative Poster",
        "category": "Festival & Occasion Designs",
        "year": "2026",
        "description": "Tricolor atmospheric gradient blended over Red Fort silhouette with gold brush greetings for 15th August.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 31,
        "id": "creative-p31",
        "slug": "deepavali-festival-creative",
        "title": "Happy Diwali — Festival of Lights Greeting",
        "category": "Festival & Occasion Designs",
        "year": "2025",
        "description": "Rich midnight-indigo and glowing diya flame motif creating warm ceremonial contrast for club social greetings.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 36,
        "id": "creative-p36",
        "slug": "milad-un-nabi-12-rabi-ul-awwal-greeting",
        "title": "Milad-un-Nabi Mubarak — Commemorative Greeting",
        "category": "Festival & Occasion Designs",
        "year": "2025",
        "description": "Clean ivory and emerald architectural mosque motif enriched with delicate Arabic calligraphy.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 43,
        "id": "creative-p43",
        "slug": "onam-festival-celebration-creative",
        "title": "Happy Onam — Cultural Unity & Vallam Kali Greeting",
        "category": "Festival & Occasion Designs",
        "year": "2025",
        "description": "Traditional Kathakali, snake boat, and pookalam imagery balanced against warm ivory sky space.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 51,
        "id": "creative-p51",
        "slug": "happy-new-year-2026-greeting",
        "title": "Happy New Year 2026 — Celebration Greeting",
        "category": "Festival & Occasion Designs",
        "year": "2025",
        "description": "Warm charcoal and metallic gold typography celebration card issued on behalf of SVCE Science Club.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 65,
        "id": "creative-p65",
        "slug": "happy-65th-teachers-day-chalkboard",
        "title": "65th Happy Teacher's Day — Chalkboard Editorial",
        "category": "Festival & Occasion Designs",
        "year": "2026",
        "description": "Chalk-handwritten tribute overlay on a classroom study table still life.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 8,
        "id": "creative-p08",
        "slug": "classic-fitness-gym-commercial-poster",
        "title": "Classic Fitness Gym — Commercial Advertising Composition",
        "category": "Commercial & Creative Compositions",
        "year": "2025",
        "description": "High-impact black, white, and neon-lime athletic visual crafted to highlight local gym membership drives.",
        "featured": False,
        "caseStudy": False,
        "role": "Freelance Graphic Designer",
        "client": "Classic Fitness Gym",
        "variationGroup": None,
    },
    {
        "page": 18,
        "id": "creative-p18",
        "slug": "science-club-presidential-certificate",
        "title": "Science Club Certificate of Appreciation — Presidential",
        "category": "Certificates & Institutional",
        "year": "2025",
        "description": "Formal landscape institutional certificate framed with subtle classical corner ornaments and signature hierarchy.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 25,
        "id": "creative-p25",
        "slug": "science-club-coordinator-appreciation-certificate",
        "title": "Student Coordinator Certificate of Appreciation",
        "category": "Certificates & Institutional",
        "year": "2026",
        "description": "Portrait institutional citation featuring gold geometric crest borders and clean typographic signatory blocks.",
        "featured": False,
        "caseStudy": False,
        "role": "Executive Director of Multimedia",
        "client": "SVCE Science Club",
        "variationGroup": None,
    },
    {
        "page": 27,
        "id": "creative-p27",
        "slug": "msme-workshop-certificate-thoufikur",
        "title": "MSME Idea Hackathon 6.0 Workshop Camp Certificate",
        "category": "Certificates & Institutional",
        "year": "2025",
        "description": "Official institutional participation citation template bearing Ministry of MSME, SVCE-EPIC, and E-Cell co-branding.",
        "featured": False,
        "caseStudy": False,
        "role": "Designer & Participant",
        "client": "SVCE-EPIC & E-Cell",
        "variationGroup": None,
    },
]

assert len(PROJECTS_DEF) == 44, f"Expected 44 works, got {len(PROJECTS_DEF)}"
featured_count = sum(1 for x in PROJECTS_DEF if x["featured"])
assert featured_count == 6, f"Expected 6 featured, got {featured_count}"

# Build TS entries
ts_entries = []
manifest_json_items = []
for item in PROJECTS_DEF:
    p = item["page"]
    raw = raw_by_page[p]
    w, h, ar = raw["width"], raw["height"], raw["aspect"]
    raw_fn = raw["filename"]
    slug = item["slug"]

    ts_entries.append(f"""  {{
    id: '{item["id"]}',
    title: {json.dumps(item["title"])},
    category: {json.dumps(item["category"])},
    sourcePdfPage: {p},
    image: '/projects/creative/{slug}.webp',
    imageJpg: '/projects/creative/{slug}.jpg',
    rawArtwork: '/projects/creative/{raw_fn}',
    aspectRatio: {ar},
    width: {w},
    height: {h},
    year: {json.dumps(item["year"])},
    description: {json.dumps(item["description"])},
    featured: {'true' if item['featured'] else 'false'},
    caseStudy: {'true' if item['caseStudy'] else 'false'},
    role: {json.dumps(item["role"])},
    client: {json.dumps(item["client"])}
  }}""")

    manifest_json_items.append({
        "id": item["id"],
        "title": item["title"],
        "category": item["category"],
        "sourcePdfPage": p,
        "image": f"/projects/creative/{slug}.webp",
        "aspectRatio": ar,
        "year": item["year"],
        "description": item["description"],
        "featured": item["featured"],
        "caseStudy": item["caseStudy"],
        "excluded": False,
        "variationGroup": item["variationGroup"],
    })

CASE_STUDIES_TS = """export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-ecell-cdo-profile',
    title: 'Chief Design Officer Profile — E-Cell SVCE',
    summary: 'Office-bearer announcement graphic pairing studio portraiture with condensed display typography and a purple vignette.',
    role: 'Chief Design Officer',
    organization: 'E-Cell SVCE',
    category: 'Branding & Profiles',
    tools: ['Canva'],
    linkedProjectId: 'creative-p53',
    coverImage: '/projects/creative/ecell-chief-design-officer-thoufikur.webp',
    coverImageJpg: '/projects/creative/ecell-chief-design-officer-thoufikur.jpg',
    observations: [
      'Centered vertical portrait layered in front of skewed translucent office-bearer header tags.',
      'Deep violet-black ambient vignette gives crisp contrast behind bright white display lettering.',
      'Structured top institution/club lockup mirrors standard E-Cell social announcement grids.'
    ],
    retrospectiveNote: 'Retrospective note: Revisiting this composition with tighter margins around the lower name lockup would improve thumbnail legibility in small social feeds.'
  },
  {
    id: 'cs-icube-symposium',
    title: 'iCUBE 6.0 — National Intercollegiate Technical Event',
    summary: 'Print-inspired symposium poster combining perforated stamp borders, campus photography, and dual event track blocks.',
    role: 'Executive Director of Multimedia',
    organization: 'SVCE Science Club',
    category: 'Event & Promotional Posters',
    tools: ['Canva'],
    linkedProjectId: 'creative-p33',
    coverImage: '/projects/creative/icube-6-national-technical-symposium.webp',
    coverImageJpg: '/projects/creative/icube-6-national-technical-symposium.jpg',
    observations: [
      'Scalloped postage-stamp edge frames the entire poster as a self-contained collectible visual.',
      'Clean central vertical typography anchors the Science Club crest above the geometric iCUBE logotype.',
      'Two bottom callout cards separate Innowel and Idea-O-Lite track descriptions cleanly.'
    ],
    retrospectiveNote: 'Retrospective note: Standardizing icon stroke weights across both bottom track callouts would refine visual unity.'
  },
  {
    id: 'cs-ecell-stage-backdrop',
    title: 'E-Cell SVCE Inauguration Ceremony Backdrop',
    summary: 'Widescreen 16:9 auditorium stage visual designed for clean institutional branding from across a large hall.',
    role: 'Chief Design Officer',
    organization: 'E-Cell SVCE',
    category: 'E-Cell & Institutional',
    tools: ['Canva'],
    linkedProjectId: 'creative-p40',
    coverImage: '/projects/creative/e-cell-inauguration-auditorium-backdrop.webp',
    coverImageJpg: '/projects/creative/e-cell-inauguration-auditorium-backdrop.jpg',
    observations: [
      'High-contrast off-white central panel surrounded by dark slate geometric bands prevents stage washout.',
      'Generous whitespace around the bold Inauguration Ceremony lockup preserves distance legibility.',
      'Balanced top-left E-Cell emblem and top-right SVCE institutional crest alignment.'
    ],
    retrospectiveNote: 'Retrospective note: Keeping copy minimal was intentional so photographs taken on stage remain readable behind speakers.'
  },
  {
    id: 'cs-gandhi-jayanti',
    title: 'Gandhi Jayanti Commemorative Illustration',
    summary: 'Minimal editorial tribute pairing a spinning-wheel illustration and textured paper grain with a single quote.',
    role: 'Designer',
    organization: 'SVCE Science Club',
    category: 'Festival & Occasion Designs',
    tools: ['Canva'],
    linkedProjectId: 'creative-p60',
    coverImage: '/projects/creative/gandhi-jayanti-peace-reflection.webp',
    coverImageJpg: '/projects/creative/gandhi-jayanti-peace-reflection.jpg',
    observations: [
      'Restrained earth-tone palette aligns naturally with handspun khadi and historic paper aesthetics.',
      'Diagonal quote placement creates negative space above the illustration without crowding the charkha subject.',
      'Clear bottom anchor bars lock 2nd October and Gandhi Jayanti into a calm closing base.'
    ],
    retrospectiveNote: 'Retrospective note: Compared to earlier dark photographic drafts, the bright minimalist illustration communicates with stronger clarity.'
  }
];"""

# Preserve ENGINEERING_PROJECTS & TECHNOLOGY_PROJECTS verbatim from current projectsManifest.ts
existing_manifest = (root / "src" / "data" / "projectsManifest.ts").read_text(encoding="utf-8")
eng_idx = existing_manifest.index("export const ENGINEERING_PROJECTS: EngineeringProject[] =")
preserved_tail = existing_manifest[eng_idx:]

header_types = """export interface CreativeProject {
  id: string;
  title: string;
  category: string;
  sourcePdfPage: number;
  image: string;
  imageJpg: string;
  rawArtwork: string;
  aspectRatio: number;
  width: number;
  height: number;
  year: string;
  description: string;
  featured: boolean;
  caseStudy: boolean;
  role: string;
  client: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  role: string;
  organization: string;
  category: string;
  tools: string[];
  linkedProjectId: string;
  coverImage: string;
  coverImageJpg: string;
  observations: string[];
  retrospectiveNote?: string;
}

export interface EngineeringProject {
  id: string;
  title: string;
  subtitle: string;
  status: 'Prototype / Working Model' | 'Field Exposure / Industrial Study' | 'Hardware Integration';
  context: string;
  problem: string;
  architecture: string;
  hardware: string[];
  software: string[];
  actualImplementation: string;
  lessonsLearned: string;
  badge: string;
}

export interface TechnologyProject {
  id: string;
  title: string;
  subtitle: string;
  classification: string;
  status: string;
  description: string;
  ownerContribution: string;
  technologiesUsed: string[];
  aiAssistedPortion: string;
  implementedFeatures: string[];
  plannedFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  award?: string;
}

// Permanent exclusion list (Pages 2, 6, 7, 11, 12, 19, 35, 48, 71, 72, 73, 76 + drafts/duplicates)
export const EXCLUDED_SOURCE_PAGES = [2, 6, 7, 11, 12, 19, 35, 48, 71, 72, 73, 76];

export const CREATIVE_PROJECTS: CreativeProject[] = [
""" + ",\n".join(ts_entries) + "\n];\n\n" + CASE_STUDIES_TS + "\n\n" + preserved_tail

(root / "src" / "data" / "projectsManifest.ts").write_text(header_types, encoding="utf-8")

# Write PROJECT_MANIFEST.json per Section 16 spec
manifest_doc = {
    "meta": {
        "candidate": "Thoufikur Rahaman Y",
        "sourcePdf": "GRAPHIC DESIGN (1).pdf",
        "totalSourcePages": 79,
        "curatedWorksCount": len(manifest_json_items),
        "featuredWorksCount": featured_count,
        "archiveWorksCount": len(manifest_json_items) - featured_count,
        "excludedSourcePdfPages": [2, 6, 7, 11, 12, 19, 35, 48, 71, 72, 73],
        "excludedOther": [
            "Page 76: Birthday poster",
            "Page 52: Latin draft placeholder",
            "Page 56: Incomplete empty template",
            "Formwood UI reference screenshot (ui design.png) — inspiration only, not portfolio artwork"
        ]
    },
    "artworks": manifest_json_items,
}
(root / "PROJECT_MANIFEST.json").write_text(json.dumps(manifest_doc, indent=2), encoding="utf-8")
print(f"Wrote projectsManifest.ts and PROJECT_MANIFEST.json ({len(manifest_json_items)} artworks: 6 Featured + 38 Archive).")

