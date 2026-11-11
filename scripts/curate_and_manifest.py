import os
import json
import shutil
from PIL import Image

# Load data
with open(r"D:\portfolio\scripts\ocr_79_pages.json", "r", encoding="utf-8-sig") as f:
    ocr_data = json.load(f)

with open(r"D:\portfolio\scripts\raw_manifest.json", "r", encoding="utf-8") as f:
    raw_manifest = json.load(f)

raw_by_page = {item["page"]: item for item in raw_manifest}
ocr_by_page = {item["Page"]: item for item in ocr_data}

# Curated Project Definitions
# Mapping key pages to semantic project entries
curated_definitions = {
    33: {
        "slug": "icube-6-national-technical-symposium",
        "title": "iCUBE 6.0 — National Intercollegiate Technical Event",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Visual identity and promotional poster for iCUBE 6th Edition featuring Innowel and Idea-O-Lite competitive technical tracks.",
        "featured": True,
        "caseStudy": True,
        "rationale": "High-impact technical symposium branding combining dark modern typography with dynamic geometric accents.",
        "role": "Lead Visual Designer & Multimedia Coordinator",
        "client": "SVCE Science Club"
    },
    49: {
        "slug": "icube-24hr-hackathon-campaign",
        "title": "iCUBE 24-Hour Hackathon Promotional Campaign",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Bold editorial event campaign poster for the SVCE Science Club & Student Council 24-hour hackathon.",
        "featured": True,
        "caseStudy": True,
        "rationale": "Flagship hackathon poster with strong typographic hierarchy, neon contrast, and clear multi-channel event details.",
        "role": "Multimedia Executive Director",
        "client": "SVCE Science Club & Student Council"
    },
    50: {
        "slug": "icube-5-ideate-innovate-investigate",
        "title": "iCUBE 5.0 — Ideate, Innovate, Investigate",
        "category": "Event & Promotional Posters",
        "year": "2025",
        "description": "High-contrast technical event poster announcing prize pools and internship opportunities for the 5th edition.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Strong promotional design demonstrating structured information design for student competitions.",
        "role": "Visual Designer",
        "client": "SVCE Science Club"
    },
    7: {
        "slug": "msme-idea-hackathon-themes",
        "title": "MSME Idea Hackathon — 6 Frontier Technology Themes",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Official thematic infographic poster breaking down the 6 key technology pillars for the Ministry of MSME evaluation meeting.",
        "featured": True,
        "caseStudy": True,
        "rationale": "Government-affiliated institutional design with clean thematic hexagonal/pill grid information architecture.",
        "role": "Design Lead",
        "client": "Ministry of MSME & SVCE-EPIC"
    },
    12: {
        "slug": "msme-idea-hackathon-6-funding-announcement",
        "title": "MSME Idea Hackathon 6.0 — Startup Funding Announcement",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Vibrant startup innovation poster announcing financial assistance and incubation support from the Ministry of MSME.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Clean corporate-academic design bridging institutional prestige with dynamic startup energy.",
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE & MSME"
    },
    30: {
        "slug": "msme-hackathon-turn-idea-startup",
        "title": "MSME 6.0 — Turn Your Idea Into a Funded Startup",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "High-energy promotional poster with deadline countdown and key highlights for aspiring student founders.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Persuasive call-to-action layout highlighting zero-prototype entry and substantial funding tiers.",
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE"
    },
    71: {
        "slug": "highways-26-technical-symposium",
        "title": "HIGHWAYS '26 — Technical Symposium Event Series (Track A)",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Official event poster for SVCE Highways symposium featuring a ₹105K prize pool and QR-based registration.",
        "featured": True,
        "caseStudy": False,
        "rationale": "Modern cyber-editorial aesthetic tailored for engineering students and symposium attendees.",
        "role": "Visual Designer",
        "client": "SVCE Highways"
    },
    72: {
        "slug": "highways-26-competition-track-b",
        "title": "HIGHWAYS '26 — Competition Track B Poster",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Second series entry for HIGHWAYS '26 highlighting individual competition guidelines and event schedule.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Part of a cohesive visual identity system designed for symposium marketing.",
        "role": "Visual Designer",
        "client": "SVCE Highways"
    },
    73: {
        "slug": "highways-26-team-event-track-c",
        "title": "HIGHWAYS '26 — 5-Member Team Challenge",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Symposium series poster focusing on team-based problem solving and interactive competitions.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Completes the tri-fold event poster series with consistent branding.",
        "role": "Visual Designer",
        "client": "SVCE Highways"
    },
    11: {
        "slug": "startup-spotlight-etched-sohu-chip",
        "title": "Startup Spotlight — ETCHED & The SOHU AI Chip",
        "category": "Social Media Creatives",
        "year": "2026",
        "description": "Editorial tech deep-dive poster exploring ETCHED's radical hardware bet on pure transformer architectures.",
        "featured": True,
        "caseStudy": False,
        "rationale": "High-level information design explaining hardware economics, funding metrics, and Silicon Valley startup strategy.",
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE"
    },
    6: {
        "slug": "cpo-guest-lecture-future-ready-skills",
        "title": "Guest Lecture — Are You Future-Ready or Just Exam-Ready?",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Speaker spotlight and lecture poster featuring Dr. T. Ilango, Chief Placement Officer, on AI-era career strategies.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Balanced corporate portraiture with editorial typography and event logistics.",
        "role": "Executive Director Multimedia",
        "client": "SVCE Science Club"
    },
    2: {
        "slug": "science-club-executive-directors-announcement",
        "title": "SVCE Science Club — Executive Board 2026–27 Announcement",
        "category": "Recruitment & Announcements",
        "year": "2026",
        "description": "Official announcement graphic establishing the leadership council including Multimedia, Content, Web Dev, and Events.",
        "featured": True,
        "caseStudy": True,
        "rationale": "Core leadership identity showcasing hierarchical information architecture and executive team roster.",
        "role": "Executive Director Multimedia",
        "client": "SVCE Science Club"
    },
    21: {
        "slug": "science-club-leadership-roster-alt",
        "title": "Executive Director Board — Editorial Roster (Edition B)",
        "category": "Recruitment & Announcements",
        "year": "2026",
        "description": "Alternate high-contrast typographic layout for the Science Club executive board release.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Clean typographic alternative exploring tabular alignment and bold department labels.",
        "role": "Executive Director Multimedia",
        "client": "SVCE Science Club"
    },
    63: {
        "slug": "science-club-recruitment-multimedia-web-marketing",
        "title": "Science Club Recruitment — Call for Creative & Technical Leads",
        "category": "Recruitment & Announcements",
        "year": "2026",
        "description": "Recruitment visual inviting applicants for Web Development, Multimedia, Podcast, and Creative Content.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Clean card layout with clear department badges and deadline messaging.",
        "role": "Executive Director Multimedia",
        "client": "SVCE Science Club"
    },
    57: {
        "slug": "science-club-open-positions-call",
        "title": "Open Positions — Multi-Year Student Creative Recruitment",
        "category": "Recruitment & Announcements",
        "year": "2026",
        "description": "Direct recruitment poster specifying open roles across 1st, 2nd, and 3rd year engineering students.",
        "featured": False,
        "caseStudy": False,
        "rationale": "High readability bulletin design optimized for campus physical and social broadcast.",
        "role": "Executive Director Multimedia",
        "client": "SVCE Science Club"
    },
    66: {
        "slug": "podcast-team-recruitment-speak-edit-create",
        "title": "Podcast Team Recruitment — Speak, Edit, Create, Inspire",
        "category": "Recruitment & Announcements",
        "year": "2026",
        "description": "Targeted media recruitment poster for audio engineers, hosts, and episode editors.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Minimalist audio-centric design targeting multimedia storytelling talent.",
        "role": "Executive Director Multimedia",
        "client": "SVCE Science Club"
    },
    67: {
        "slug": "science-club-tech-web-recruitment",
        "title": "Engineering & Web Team Recruitment — Frontend, Backend & UI/UX",
        "category": "Recruitment & Announcements",
        "year": "2026",
        "description": "Technical recruitment card welcoming developers and UI/UX designers to build club platforms.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Modern developer-focused aesthetic with technical badge styling.",
        "role": "Executive Director Multimedia",
        "client": "SVCE Science Club"
    },
    31: {
        "slug": "deepavali-festival-creative",
        "title": "Deepavali Festival of Lights — Official SVCE Greeting",
        "category": "Festival & Occasion Designs",
        "year": "2025",
        "description": "Rich festive celebration creative with warm golden lighting, traditional Diya aesthetics, and elegant festive greeting.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Celebratory cultural creative demonstrating refined lighting effects and festive color treatment.",
        "role": "Visual Designer",
        "client": "SVCE Science Club"
    },
    36: {
        "slug": "milad-un-nabi-12-rabi-ul-awwal-greeting",
        "title": "Milad-un-Nabi (12 Rabi-ul-Awwal) — Commemorative Greeting",
        "category": "Festival & Occasion Designs",
        "year": "2025",
        "description": "Serene spiritual creative celebrating Milad-un-Nabi with Quranic verses and values of compassion, peace, and family.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Sophisticated Islamic geometric and architectural visual cues with reverent editorial typography.",
        "role": "Visual Designer",
        "client": "SVCE Science Club"
    },
    43: {
        "slug": "onam-festival-celebration-creative",
        "title": "Onam — Festival of Joy & Unity",
        "category": "Festival & Occasion Designs",
        "year": "2025",
        "description": "Vibrant harvest festival visual celebrating Kerala's tradition of Onam with floral pookalam styling.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Culturally authentic visual celebration emphasizing community, unity, and festive colors.",
        "role": "Visual Designer",
        "client": "SVCE Science Club"
    },
    60: {
        "slug": "gandhi-jayanti-peace-reflection",
        "title": "Gandhi Jayanti — Peace Begins With the Courage to Choose It",
        "category": "Festival & Occasion Designs",
        "year": "2025",
        "description": "Thoughtful national occasion creative with timeless monochrome portraiture and poignant quotation.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Minimalist memorial poster with disciplined typography and subdued tone.",
        "role": "Visual Designer",
        "client": "SVCE Science Club"
    },
    35: {
        "slug": "dussehra-triumph-of-good-greeting",
        "title": "Dussehra — Triumph of Good Over Evil",
        "category": "Festival & Occasion Designs",
        "year": "2025",
        "description": "Celebratory cultural poster marking Vijayadashami / Dussehra with inspirational messaging.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Warm festive typography and traditional iconography.",
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE"
    },
    19: {
        "slug": "e-cell-certificate-of-appreciation-thoufikur",
        "title": "Certificate of Appreciation — E-Cell Design Leadership",
        "category": "Certificates & Institutional",
        "year": "2026",
        "description": "Official institutional certificate designed for E-Cell contributors and dedicated design team members.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Formal institutional certificate with guilloche-style borders, formal seals, and refined serif typography.",
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE"
    },
    18: {
        "slug": "science-club-presidential-certificate",
        "title": "Certificate of Appreciation — Science Club Presidential Service",
        "category": "Certificates & Institutional",
        "year": "2025",
        "description": "Formal certificate awarded to the outgoing President of SVCE Science Club for departmental excellence.",
        "featured": False,
        "caseStudy": False,
        "rationale": "High-prestige academic certification layout with official institutional accreditation credentials.",
        "role": "Visual Designer",
        "client": "SVCE Science Club"
    },
    27: {
        "slug": "msme-workshop-participation-certificate",
        "title": "Certificate of Participation — MSME Hackathon 6.0 Workshop Camp",
        "category": "Certificates & Institutional",
        "year": "2026",
        "description": "Official workshop participation certificate issued jointly by E-Cell SVCE, EPIC, and the Ministry of MSME.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Three-way organizational branding combining college, incubation center, and federal ministry seals.",
        "role": "Chief Design Officer",
        "client": "Ministry of MSME & E-Cell SVCE"
    },
    40: {
        "slug": "e-cell-inauguration-ceremony-backdrop",
        "title": "E-Cell SVCE Inauguration Ceremony 2026–27 (Auditorium Backdrop)",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Wide-format 16:9 stage backdrop banner for the official annual inauguration of E-Cell SVCE.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Panoramic stage branding designed for high legibility across a large auditorium setting.",
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE"
    },
    62: {
        "slug": "e-cell-inauguration-ceremony-portrait-poster",
        "title": "E-Cell SVCE Inauguration Ceremony — Guest Keynote Poster",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Official portrait event announcement featuring Chief Guest Dr. P.K. Praveen Kumar at Library Seminar Hall.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Sophisticated event announcement balancing dignitary profile and ceremonial identity.",
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE"
    },
    64: {
        "slug": "where-business-meets-kollywood",
        "title": "Where Business Meets Kollywood — Film & Entrepreneurship Conclave",
        "category": "Commercial & Creative Compositions",
        "year": "2026",
        "description": "Creative concept event merging media, entertainment dynamics, and business fundamentals.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Playful pop-culture crossover design with film reel motifs and lively typography.",
        "role": "Chief Design Officer",
        "client": "E-Cell SVCE"
    },
    42: {
        "slug": "dream-2-reality-idea-competition",
        "title": "Dream 2 Reality — Departmental Idea Competition",
        "category": "Event & Promotional Posters",
        "year": "2026",
        "description": "Academic innovation competition poster organized with the Department of IT and SVCE-EPIC.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Technical competition marketing with multi-partner logos and structured student guidelines.",
        "role": "Visual Designer",
        "client": "SVCE IT Dept & EPIC"
    },
    32: {
        "slug": "abiento-science-expo-engineers-day",
        "title": "Abiento — State Level Science Expo & National Engineers Day",
        "category": "Event & Promotional Posters",
        "year": "2025",
        "description": "State-level expo announcement promoting hands-on experimental demonstrations and student engineering exhibits.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Engaging STEM event poster communicating experimental energy and project displays.",
        "role": "Visual Designer",
        "client": "SVCE Science Club"
    },
    8: {
        "slug": "legend-classic-gym-functional-training",
        "title": "Legend Classic Gym — Functional Training & Fitness Campaign",
        "category": "Commercial & Creative Compositions",
        "year": "2025",
        "description": "Commercial fitness club promotional creative emphasizing functional training, strength weights, and cardio coaching.",
        "featured": False,
        "caseStudy": False,
        "rationale": "High-contrast commercial sports and gym design with intense typography and promotional callouts.",
        "role": "Graphic Designer",
        "client": "Legend Classic Gym"
    },
    13: {
        "slug": "featherdraw-technique-vietnam-poster",
        "title": "Featherdraw Technique Vietnam — Commercial Specialty Poster",
        "category": "Commercial & Creative Compositions",
        "year": "2025",
        "description": "International commercial poster featuring delicate micro-precision aesthetic and client contact directory.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Commercial composition demonstrating clean layout for international cosmetic and beauty clients.",
        "role": "Graphic Designer",
        "client": "Featherdraw Vietnam"
    },
    79: {
        "slug": "e-cell-svce-official-website-launch",
        "title": "E-Cell SVCE Official Platform Launch — Dream It. Build It. Launch It.",
        "category": "Social Media Creatives",
        "year": "2026",
        "description": "Digital platform promotion poster showcasing the newly launched e-cell-svce.vercel.app web portal.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Digital product launch creative promoting student web access and club resources.",
        "role": "Chief Design Officer & Web Lead",
        "client": "E-Cell SVCE"
    },
    14: {
        "slug": "bis-student-chapter-executive-profile",
        "title": "Bureau of Indian Standards (BIS) — Executive Office Profile",
        "category": "Branding & Profile Designs",
        "year": "2026",
        "description": "Official leadership identity card for Deputy Secretary, BIS Student Chapter at SVCE.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Clean corporate-standard personal profile card showcasing national standards chapter involvement.",
        "role": "Deputy Secretary & Designer",
        "client": "BIS Student Chapter SVCE"
    },
    28: {
        "slug": "svce-film-clapper-memento-design",
        "title": "Chief Guest Commemorative Memento — Film Clapper Design",
        "category": "Branding & Profile Designs",
        "year": "2025",
        "description": "Custom clapperboard memento graphic created for film director / chief guest felicitation.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Novel dimensional design mimicking actual cinematic production equipment.",
        "role": "Visual Designer",
        "client": "SVCE Film & Media"
    },
    48: {
        "slug": "gyaan-overseas-title-sponsor-recognition",
        "title": "Title Sponsor Recognition — Gyaan Overseas Gratitude Poster",
        "category": "Commercial & Creative Compositions",
        "year": "2026",
        "description": "Corporate sponsor acknowledgement creative expressing gratitude to international education partners.",
        "featured": False,
        "caseStudy": False,
        "rationale": "Professional corporate partnership appreciation graphic.",
        "role": "Visual Designer",
        "client": "SVCE Science Club"
    }
}

# Process each curated project: copy/convert image to public/projects/creative/
dest_dir = r"D:\portfolio\public\projects\creative"
raw_art_dir = r"D:\portfolio\extracted_artwork"

curated_list = []

for page_num, meta in curated_definitions.items():
    raw_info = raw_by_page[page_num]
    raw_fn = raw_info["filename"]
    raw_path = os.path.join(raw_art_dir, raw_fn)
    
    # Destination web image name
    slug = meta["slug"]
    web_jpg = f"{slug}.jpg"
    web_webp = f"{slug}.webp"
    
    dest_jpg_path = os.path.join(dest_dir, web_jpg)
    dest_webp_path = os.path.join(dest_dir, web_webp)
    
    # Open and save optimised derivatives
    with Image.open(raw_path) as im:
        # Save high quality JPEG
        im.save(dest_jpg_path, "JPEG", quality=92, optimize=True)
        # Save WebP
        im.save(dest_webp_path, "WEBP", quality=88)
        w, h = im.size
        aspect = round(w / h, 2)
    
    entry = {
        "id": slug,
        "title": meta["title"],
        "category": meta["category"],
        "sourcePdfPage": page_num,
        "image": f"/projects/creative/{web_webp}",
        "imageJpg": f"/projects/creative/{web_jpg}",
        "rawArtwork": f"/projects/creative/{raw_fn}",
        "aspectRatio": aspect,
        "width": w,
        "height": h,
        "year": meta["year"],
        "description": meta["description"],
        "featured": meta["featured"],
        "caseStudy": meta["caseStudy"],
        "role": meta["role"],
        "client": meta["client"],
        "variationGroup": None
    }
    
    # Also copy the raw extracted file for uncompressed fallback
    shutil.copy2(raw_path, os.path.join(dest_dir, raw_fn))
    curated_list.append(entry)

# Sort curated by featured first, then by page order
curated_list.sort(key=lambda x: (not x["featured"], x["sourcePdfPage"]))

# Write PROJECT_MANIFEST.json
manifest_path = r"D:\portfolio\PROJECT_MANIFEST.json"
with open(manifest_path, "w", encoding="utf-8") as f:
    json.dump({"projects": curated_list, "totalCurated": len(curated_list)}, f, indent=2)

print(f"Generated manifest with {len(curated_list)} curated projects.")

