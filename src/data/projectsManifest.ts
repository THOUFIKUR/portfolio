export interface CreativeProject {
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
  {
    id: 'creative-p53',
    title: "Chief Design Officer Profile \u2014 E-Cell SVCE",
    category: "Branding & Profiles",
    sourcePdfPage: 53,
    image: '/projects/creative/ecell-chief-design-officer-thoufikur.webp',
    imageJpg: '/projects/creative/ecell-chief-design-officer-thoufikur.jpg',
    rawArtwork: '/projects/creative/art_p53_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Office-bearer announcement graphic featuring layered halftone portrait lighting, bold condensed display type, and high-contrast purple aura.",
    featured: true,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "E-Cell SVCE"
  },
  {
    id: 'creative-p33',
    title: "iCUBE 6.0 \u2014 National Intercollegiate Technical Event",
    category: "Event & Promotional Posters",
    sourcePdfPage: 33,
    image: '/projects/creative/icube-6-national-technical-symposium.webp',
    imageJpg: '/projects/creative/icube-6-national-technical-symposium.jpg',
    rawArtwork: '/projects/creative/art_p33_1240x1754.jpeg',
    aspectRatio: 0.71,
    width: 1240,
    height: 1754,
    year: "2026",
    description: "Stamp-edged print-inspired symposium poster combining architectural campus framing with modular track blocks for Innowel and Idea-O-Lite.",
    featured: true,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p40',
    title: "E-Cell SVCE Inauguration Ceremony \u2014 16:9 Stage Backdrop",
    category: "E-Cell & Institutional",
    sourcePdfPage: 40,
    image: '/projects/creative/e-cell-inauguration-auditorium-backdrop.webp',
    imageJpg: '/projects/creative/e-cell-inauguration-auditorium-backdrop.jpg',
    rawArtwork: '/projects/creative/art_p40_3000x1687.jpeg',
    aspectRatio: 1.78,
    width: 3000,
    height: 1687,
    year: "2026",
    description: "Widescreen stage visual banner structured for clear auditorium legibility across geometric institutional framing.",
    featured: true,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "E-Cell SVCE"
  },
  {
    id: 'creative-p60',
    title: "Gandhi Jayanti Commemorative Illustration",
    category: "Festival & Occasion Designs",
    sourcePdfPage: 60,
    image: '/projects/creative/gandhi-jayanti-peace-reflection.webp',
    imageJpg: '/projects/creative/gandhi-jayanti-peace-reflection.jpg',
    rawArtwork: '/projects/creative/art_p60_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2025",
    description: "Minimal heritage poster featuring a spinning-wheel illustration over textured paper with serene serif hierarchy.",
    featured: true,
    caseStudy: false,
    role: "Designer",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p49',
    title: "iCUBE 5.0 \u2014 24-Hour Hackathon Campaign",
    category: "Event & Promotional Posters",
    sourcePdfPage: 49,
    image: '/projects/creative/icube-24hr-hackathon-campaign.webp',
    imageJpg: '/projects/creative/icube-24hr-hackathon-campaign.jpg',
    rawArtwork: '/projects/creative/art_p49_1800x2400.jpeg',
    aspectRatio: 0.75,
    width: 1800,
    height: 2400,
    year: "2025",
    description: "Night-sky themed technical hackathon poster balancing stylized character illustration, clear date locks, and prize callouts.",
    featured: true,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p64',
    title: "Mankatha \u2014 Where Business Meets Kollywood",
    category: "Commercial & Creative Compositions",
    sourcePdfPage: 64,
    image: '/projects/creative/where-business-meets-kollywood-conclave.webp',
    imageJpg: '/projects/creative/where-business-meets-kollywood-conclave.jpg',
    rawArtwork: '/projects/creative/art_p64_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "High-contrast warm amber and obsidian event visual merging cinema-inspired typography with business conclave details and QR registration.",
    featured: true,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "E-Cell SVCE"
  },
  {
    id: 'creative-p69',
    title: "Science Club Core Members Issue #01 \u2014 Editorial Cover",
    category: "Branding & Profiles",
    sourcePdfPage: 69,
    image: '/projects/creative/science-club-core-members-issue-01-thoufikur.webp',
    imageJpg: '/projects/creative/science-club-core-members-issue-01-thoufikur.jpg',
    rawArtwork: '/projects/creative/art_p69_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Magazine-style core team feature with ivory textured ground, blue display header, and crisp cutout portrait integration.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p68',
    title: "Science Club ED Multimedia \u2014 Monochrome Kinetic Profile",
    category: "Branding & Profiles",
    sourcePdfPage: 68,
    image: '/projects/creative/science-club-ed-multimedia-typography-thoufikur.webp',
    imageJpg: '/projects/creative/science-club-ed-multimedia-typography-thoufikur.jpg',
    rawArtwork: '/projects/creative/art_p68_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Full-bleed dark editorial portrait layered behind bold cream cutout block typography.",
    featured: false,
    caseStudy: true,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p16',
    title: "Introducing Executive Director Multimedia \u2014 Filmstrip Grid",
    category: "Branding & Profiles",
    sourcePdfPage: 16,
    image: '/projects/creative/introducing-thoufikur-ed-multimedia-grid.webp',
    imageJpg: '/projects/creative/introducing-thoufikur-ed-multimedia-grid.jpg',
    rawArtwork: '/projects/creative/art_p16_1696x2263.jpeg',
    aspectRatio: 0.75,
    width: 1696,
    height: 2263,
    year: "2026",
    description: "Polaroid contact-sheet backdrop accented with crimson typography introducing the incoming 2026\u201327 multimedia lead.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p20',
    title: "Science Club Multimedia Lead \u2014 Wide Profile Banner",
    category: "Branding & Profiles",
    sourcePdfPage: 20,
    image: '/projects/creative/science-club-executive-director-multimedia-thoufikur.webp',
    imageJpg: '/projects/creative/science-club-executive-director-multimedia-thoufikur.jpg',
    rawArtwork: '/projects/creative/art_p20_2270x800.jpeg',
    aspectRatio: 2.84,
    width: 2270,
    height: 800,
    year: "2025",
    description: "Horizontal widescreen office-bearer card featuring clean neutral marble backdrop and structured role alignment.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p13',
    title: "Deputy Secretary \u2014 Editorial Portrait Composition",
    category: "Branding & Profiles",
    sourcePdfPage: 13,
    image: '/projects/creative/deputy-secretary-editorial-magazine-thoufikur.webp',
    imageJpg: '/projects/creative/deputy-secretary-editorial-magazine-thoufikur.jpg',
    rawArtwork: '/projects/creative/art_p13_1752x2190.jpeg',
    aspectRatio: 0.8,
    width: 1752,
    height: 2190,
    year: "2025",
    description: "Ultra-minimal ivory editorial layout pairing studio portraiture with thin architectural display serifs.",
    featured: false,
    caseStudy: false,
    role: "Deputy Secretary",
    client: "BIS Student Chapter SVCE"
  },
  {
    id: 'creative-p14',
    title: "BIS Student Chapter \u2014 Deputy Secretary Metallic Badge",
    category: "Branding & Profiles",
    sourcePdfPage: 14,
    image: '/projects/creative/bis-student-chapter-deputy-secretary.webp',
    imageJpg: '/projects/creative/bis-student-chapter-deputy-secretary.jpg',
    rawArtwork: '/projects/creative/art_p14_2592x1481.jpeg',
    aspectRatio: 1.75,
    width: 2592,
    height: 1481,
    year: "2025",
    description: "Glass-and-steel brushed identification card crafted for the Bureau of Indian Standards student chapter office bearer.",
    featured: false,
    caseStudy: false,
    role: "Deputy Secretary",
    client: "BIS Student Chapter SVCE"
  },
  {
    id: 'creative-p77',
    title: "E-Cell President Profile \u2014 M. Roshan",
    category: "Branding & Profiles",
    sourcePdfPage: 77,
    image: '/projects/creative/ecell-president-roshan-editorial-profile.webp',
    imageJpg: '/projects/creative/ecell-president-roshan-editorial-profile.jpg',
    rawArtwork: '/projects/creative/art_p77_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Duotone grayscale leadership announcement framed by vertical varsity typography.",
    featured: false,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "E-Cell SVCE"
  },
  {
    id: 'creative-p03',
    title: "Photography Director Profile \u2014 Naveen Harish",
    category: "Branding & Profiles",
    sourcePdfPage: 3,
    image: '/projects/creative/naveen-harish-photography-director-profile.webp',
    imageJpg: '/projects/creative/naveen-harish-photography-director-profile.jpg',
    rawArtwork: '/projects/creative/art_p03_2619x1465.jpeg',
    aspectRatio: 1.79,
    width: 2619,
    height: 1465,
    year: "2026",
    description: "Landscape member introduction banner with curved navy accent panels and clean institutional crest lockup.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p23',
    title: "Vice President Announcement \u2014 Rayeesha Bhat P",
    category: "Branding & Profiles",
    sourcePdfPage: 23,
    image: '/projects/creative/rayeesha-bhat-science-club-vice-president.webp',
    imageJpg: '/projects/creative/rayeesha-bhat-science-club-vice-president.jpg',
    rawArtwork: '/projects/creative/art_p23_2350x1675.jpeg',
    aspectRatio: 1.4,
    width: 2350,
    height: 1675,
    year: "2026",
    description: "Soft sky-gradient office-bearer banner with geometric framing and centered portrait badge.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p62',
    title: "E-Cell Inauguration Ceremony \u2014 Keynote Speaker Poster",
    category: "E-Cell & Institutional",
    sourcePdfPage: 62,
    image: '/projects/creative/e-cell-inauguration-keynote-poster.webp',
    imageJpg: '/projects/creative/e-cell-inauguration-keynote-poster.jpg',
    rawArtwork: '/projects/creative/art_p62_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Warm cream keynote announcement honoring guest speaker Dr. P.K. Praveen Kumar with structured date and venue metadata.",
    featured: false,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "E-Cell SVCE"
  },
  {
    id: 'creative-p79',
    title: "E-Cell SVCE Website Launch \u2014 Dream It. Build It. Launch It.",
    category: "E-Cell & Institutional",
    sourcePdfPage: 79,
    image: '/projects/creative/e-cell-svce-official-platform-launch.webp',
    imageJpg: '/projects/creative/e-cell-svce-official-platform-launch.jpg',
    rawArtwork: '/projects/creative/art_p79_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Vibrant violet social announcement incorporating laptop device mockup framing and clear URL CTA strip.",
    featured: false,
    caseStudy: true,
    role: "Chief Design Officer",
    client: "E-Cell SVCE"
  },
  {
    id: 'creative-p38',
    title: "Meet The Tech Team 2026\u201327 \u2014 E-Cell",
    category: "E-Cell & Institutional",
    sourcePdfPage: 38,
    image: '/projects/creative/ecell-meet-the-tech-team-2026-27.webp',
    imageJpg: '/projects/creative/ecell-meet-the-tech-team-2026-27.jpg',
    rawArtwork: '/projects/creative/art_p38_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Energetic amber-yellow carousel cover featuring sketchy vector doodle accents and tight display lockup.",
    featured: false,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "E-Cell SVCE"
  },
  {
    id: 'creative-p39',
    title: "Meet Our Office Bearers \u2014 Ready for Takeoff",
    category: "E-Cell & Institutional",
    sourcePdfPage: 39,
    image: '/projects/creative/ecell-meet-our-office-bearers-takeoff.webp',
    imageJpg: '/projects/creative/ecell-meet-our-office-bearers-takeoff.jpg',
    rawArtwork: '/projects/creative/art_p39_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Deep violet gradient series opener using paper-plane motion lines to cue horizontal swipe storytelling.",
    featured: false,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "E-Cell SVCE"
  },
  {
    id: 'creative-p47',
    title: "E-Cell Pitching League \u2014 Entrepreneurship Stage Event",
    category: "E-Cell & Institutional",
    sourcePdfPage: 47,
    image: '/projects/creative/ecell-pitching-league-competition.webp',
    imageJpg: '/projects/creative/ecell-pitching-league-competition.jpg',
    rawArtwork: '/projects/creative/art_p47_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2025",
    description: "Deep cobalt stage-spotlight visual pairing team illustration with condensed sans event schedule details.",
    featured: false,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "E-Cell SVCE"
  },
  {
    id: 'creative-p74',
    title: "Meet Our Team \u2014 E-Cell Core Members Monochrome",
    category: "E-Cell & Institutional",
    sourcePdfPage: 74,
    image: '/projects/creative/ecell-meet-our-team-core-members.webp',
    imageJpg: '/projects/creative/ecell-meet-our-team-core-members.jpg',
    rawArtwork: '/projects/creative/art_p74_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Monochrome team group composition with oversized geometric club emblem overlay.",
    featured: false,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "E-Cell SVCE"
  },
  {
    id: 'creative-p46',
    title: "SVCE-EPIC Minor in Entrepreneurship Bulletin",
    category: "E-Cell & Institutional",
    sourcePdfPage: 46,
    image: '/projects/creative/svce-epic-minor-in-entrepreneurship.webp',
    imageJpg: '/projects/creative/svce-epic-minor-in-entrepreneurship.jpg',
    rawArtwork: '/projects/creative/art_p46_4000x1999.jpeg',
    aspectRatio: 2.0,
    width: 4000,
    height: 1999,
    year: "2026",
    description: "High-density halftone bulletin board presenting program credits, QR registration, and faculty coordinator contacts.",
    featured: false,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "SVCE-EPIC & E-Cell"
  },
  {
    id: 'creative-p05',
    title: "Science Club Annual Induction Ceremony \u2014 Agenda",
    category: "Event & Promotional Posters",
    sourcePdfPage: 5,
    image: '/projects/creative/science-club-annual-induction-agenda.webp',
    imageJpg: '/projects/creative/science-club-annual-induction-agenda.jpg',
    rawArtwork: '/projects/creative/art_p05_1696x2263.jpeg',
    aspectRatio: 0.75,
    width: 1696,
    height: 2263,
    year: "2026",
    description: "Structured numbered ceremony program combining warm classical serif indices with geometric azure edge accents.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p28',
    title: "Momento of Honour \u2014 Cinema Clapper Guest Tribute",
    category: "Event & Promotional Posters",
    sourcePdfPage: 28,
    image: '/projects/creative/svce-film-clapper-memento-design.webp',
    imageJpg: '/projects/creative/svce-film-clapper-memento-design.jpg',
    rawArtwork: '/projects/creative/art_p28_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2025",
    description: "Atmospheric theatrical spotlight design featuring an authentic cinema slate framing chief guest recognition.",
    featured: false,
    caseStudy: true,
    role: "Designer",
    client: "E-Cell & SVCE"
  },
  {
    id: 'creative-p32',
    title: "Abiento \u2014 State Level Science Expo & Engineers Day",
    category: "Event & Promotional Posters",
    sourcePdfPage: 32,
    image: '/projects/creative/abiento-science-expo-engineers-day.webp',
    imageJpg: '/projects/creative/abiento-science-expo-engineers-day.jpg',
    rawArtwork: '/projects/creative/art_p32_873x1240.jpeg',
    aspectRatio: 0.7,
    width: 873,
    height: 1240,
    year: "2025",
    description: "Playful STEM-illustrated grid poster created for National Engineers Day experimental demonstrations.",
    featured: false,
    caseStudy: false,
    role: "Designer",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p37',
    title: "The Power of Innovation \u2014 Auditorium Seminar",
    category: "Event & Promotional Posters",
    sourcePdfPage: 37,
    image: '/projects/creative/power-of-innovation-science-club-seminar.webp',
    imageJpg: '/projects/creative/power-of-innovation-science-club-seminar.jpg',
    rawArtwork: '/projects/creative/art_p37_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2025",
    description: "Glowing filament globe centerpiece with bold condensed event date and MPH Auditorium callout block.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p42',
    title: "Dream 2 Reality \u2014 IT & EPIC Idea Competition",
    category: "Event & Promotional Posters",
    sourcePdfPage: 42,
    image: '/projects/creative/dream-2-reality-idea-competition.webp',
    imageJpg: '/projects/creative/dream-2-reality-idea-competition.jpg',
    rawArtwork: '/projects/creative/art_p42_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2025",
    description: "Crisp white modular card layout using hand-drawn sketch icons to organize date, venue, eligibility, and QR signup.",
    featured: false,
    caseStudy: false,
    role: "Chief Design Officer",
    client: "Dept of IT & SVCE-EPIC"
  },
  {
    id: 'creative-p50',
    title: "iCUBE 5.0 \u2014 4 Hours To Go Deadline Countdown",
    category: "Event & Promotional Posters",
    sourcePdfPage: 50,
    image: '/projects/creative/icube-5-4hrs-to-go-countdown.webp',
    imageJpg: '/projects/creative/icube-5-4hrs-to-go-countdown.jpg',
    rawArtwork: '/projects/creative/art_p50_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2025",
    description: "Urgency-driven royal-indigo and lime-green registration countdown creative designed for social story shares.",
    featured: false,
    caseStudy: false,
    role: "Designer",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p41',
    title: "Science Club Recruitment Result \u2014 2026\u20132027",
    category: "Recruitment & Announcements",
    sourcePdfPage: 41,
    image: '/projects/creative/science-club-recruitment-result-2026-27.webp',
    imageJpg: '/projects/creative/science-club-recruitment-result-2026-27.jpg',
    rawArtwork: '/projects/creative/art_p41_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Warm golden editorial announcement using paper-note texture, tape graphics, and playful star doodles.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p57',
    title: "Science Club Open Positions \u2014 Multi-Track Recruitment",
    category: "Recruitment & Announcements",
    sourcePdfPage: 57,
    image: '/projects/creative/science-club-open-positions-call.webp',
    imageJpg: '/projects/creative/science-club-open-positions-call.jpg',
    rawArtwork: '/projects/creative/art_p57_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2025",
    description: "Friendly illustrated hiring poster organizing 6 sub-teams (Web, Marketing, Multimedia, Podcast, Content, Photo) clearly.",
    featured: false,
    caseStudy: false,
    role: "Designer",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p63',
    title: "We're Hiring! Join Our Team \u2014 Textured Kraft Call",
    category: "Recruitment & Announcements",
    sourcePdfPage: 63,
    image: '/projects/creative/science-club-recruitment-multimedia-web-marketing.webp',
    imageJpg: '/projects/creative/science-club-recruitment-multimedia-web-marketing.jpg',
    rawArtwork: '/projects/creative/art_p63_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Warm kraft-paper recruitment poster pairing a Director's Chair vector with department checklist and scannable QR.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p66',
    title: "Podcast Team Recruitment \u2014 Speak, Edit, Create, Inspire",
    category: "Recruitment & Announcements",
    sourcePdfPage: 66,
    image: '/projects/creative/podcast-team-recruitment-speak-edit-create.webp',
    imageJpg: '/projects/creative/podcast-team-recruitment-speak-edit-create.jpg',
    rawArtwork: '/projects/creative/art_p66_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Editorial torn-paper layout highlighting voice hosts, audio engineers, and reel editors with bold navy accent type.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p67',
    title: "Web Development Team Recruitment \u2014 We Need You",
    category: "Recruitment & Announcements",
    sourcePdfPage: 67,
    image: '/projects/creative/science-club-tech-web-recruitment.webp',
    imageJpg: '/projects/creative/science-club-tech-web-recruitment.jpg',
    rawArtwork: '/projects/creative/art_p67_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Mustard-gold vintage call-to-action poster tailored for campus Frontend, Backend, and UI/UX developers.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p01',
    title: "Earth Day \u2014 Green Choices Today, Greener Planet Tomorrow",
    category: "Festival & Occasion Designs",
    sourcePdfPage: 1,
    image: '/projects/creative/earth-day-green-choices-april-22.webp',
    imageJpg: '/projects/creative/earth-day-green-choices-april-22.jpg',
    rawArtwork: '/projects/creative/art_p01_3000x1687.jpeg',
    aspectRatio: 1.78,
    width: 3000,
    height: 1687,
    year: "2026",
    description: "Layered botanical environmental graphic blending bold green environmental typography with crisp paper-cut elements.",
    featured: false,
    caseStudy: false,
    role: "Designer",
    client: "Campus Sustainability Creative"
  },
  {
    id: 'creative-p29',
    title: "80th Independence Day Commemorative Poster",
    category: "Festival & Occasion Designs",
    sourcePdfPage: 29,
    image: '/projects/creative/80th-independence-day-commemorative-poster.webp',
    imageJpg: '/projects/creative/80th-independence-day-commemorative-poster.jpg',
    rawArtwork: '/projects/creative/art_p29_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Tricolor atmospheric gradient blended over Red Fort silhouette with gold brush greetings for 15th August.",
    featured: false,
    caseStudy: false,
    role: "Designer",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p31',
    title: "Happy Diwali \u2014 Festival of Lights Greeting",
    category: "Festival & Occasion Designs",
    sourcePdfPage: 31,
    image: '/projects/creative/deepavali-festival-creative.webp',
    imageJpg: '/projects/creative/deepavali-festival-creative.jpg',
    rawArtwork: '/projects/creative/art_p31_2479x3506.jpeg',
    aspectRatio: 0.71,
    width: 2479,
    height: 3506,
    year: "2025",
    description: "Rich midnight-indigo and glowing diya flame motif creating warm ceremonial contrast for club social greetings.",
    featured: false,
    caseStudy: false,
    role: "Designer",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p36',
    title: "Milad-un-Nabi Mubarak \u2014 Commemorative Greeting",
    category: "Festival & Occasion Designs",
    sourcePdfPage: 36,
    image: '/projects/creative/milad-un-nabi-12-rabi-ul-awwal-greeting.webp',
    imageJpg: '/projects/creative/milad-un-nabi-12-rabi-ul-awwal-greeting.jpg',
    rawArtwork: '/projects/creative/art_p36_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2025",
    description: "Clean ivory and emerald architectural mosque motif enriched with delicate Arabic calligraphy.",
    featured: false,
    caseStudy: false,
    role: "Designer",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p43',
    title: "Happy Onam \u2014 Cultural Unity & Vallam Kali Greeting",
    category: "Festival & Occasion Designs",
    sourcePdfPage: 43,
    image: '/projects/creative/onam-festival-celebration-creative.webp',
    imageJpg: '/projects/creative/onam-festival-celebration-creative.jpg',
    rawArtwork: '/projects/creative/art_p43_1696x2263.jpeg',
    aspectRatio: 0.75,
    width: 1696,
    height: 2263,
    year: "2025",
    description: "Traditional Kathakali, snake boat, and pookalam imagery balanced against warm ivory sky space.",
    featured: false,
    caseStudy: false,
    role: "Designer",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p51',
    title: "Happy New Year 2026 \u2014 Celebration Greeting",
    category: "Festival & Occasion Designs",
    sourcePdfPage: 51,
    image: '/projects/creative/happy-new-year-2026-greeting.webp',
    imageJpg: '/projects/creative/happy-new-year-2026-greeting.jpg',
    rawArtwork: '/projects/creative/art_p51_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2025",
    description: "Warm charcoal and metallic gold typography celebration card issued on behalf of SVCE Science Club.",
    featured: false,
    caseStudy: false,
    role: "Designer",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p65',
    title: "65th Happy Teacher's Day \u2014 Chalkboard Editorial",
    category: "Festival & Occasion Designs",
    sourcePdfPage: 65,
    image: '/projects/creative/happy-65th-teachers-day-chalkboard.webp',
    imageJpg: '/projects/creative/happy-65th-teachers-day-chalkboard.jpg',
    rawArtwork: '/projects/creative/art_p65_1687x2108.jpeg',
    aspectRatio: 0.8,
    width: 1687,
    height: 2108,
    year: "2026",
    description: "Chalk-handwritten tribute overlay on a classroom study table still life.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p08',
    title: "Classic Fitness Gym \u2014 Commercial Advertising Composition",
    category: "Commercial & Creative Compositions",
    sourcePdfPage: 8,
    image: '/projects/creative/classic-fitness-gym-commercial-poster.webp',
    imageJpg: '/projects/creative/classic-fitness-gym-commercial-poster.jpg',
    rawArtwork: '/projects/creative/art_p08_2479x3506.jpeg',
    aspectRatio: 0.71,
    width: 2479,
    height: 3506,
    year: "2025",
    description: "High-impact black, white, and neon-lime athletic visual crafted to highlight local gym membership drives.",
    featured: false,
    caseStudy: true,
    role: "Freelance Graphic Designer",
    client: "Classic Fitness Gym"
  },
  {
    id: 'creative-p18',
    title: "Science Club Certificate of Appreciation \u2014 Presidential",
    category: "Certificates & Institutional",
    sourcePdfPage: 18,
    image: '/projects/creative/science-club-presidential-certificate.webp',
    imageJpg: '/projects/creative/science-club-presidential-certificate.jpg',
    rawArtwork: '/projects/creative/art_p18_2350x1650.jpeg',
    aspectRatio: 1.42,
    width: 2350,
    height: 1650,
    year: "2025",
    description: "Formal landscape institutional certificate framed with subtle classical corner ornaments and signature hierarchy.",
    featured: false,
    caseStudy: false,
    role: "Designer",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p25',
    title: "Student Coordinator Certificate of Appreciation",
    category: "Certificates & Institutional",
    sourcePdfPage: 25,
    image: '/projects/creative/science-club-coordinator-appreciation-certificate.webp',
    imageJpg: '/projects/creative/science-club-coordinator-appreciation-certificate.jpg',
    rawArtwork: '/projects/creative/art_p25_1240x1754.jpeg',
    aspectRatio: 0.71,
    width: 1240,
    height: 1754,
    year: "2026",
    description: "Portrait institutional citation featuring gold geometric crest borders and clean typographic signatory blocks.",
    featured: false,
    caseStudy: false,
    role: "Executive Director of Multimedia",
    client: "SVCE Science Club"
  },
  {
    id: 'creative-p27',
    title: "MSME Idea Hackathon 6.0 Workshop Camp Certificate",
    category: "Certificates & Institutional",
    sourcePdfPage: 27,
    image: '/projects/creative/msme-workshop-certificate-thoufikur.webp',
    imageJpg: '/projects/creative/msme-workshop-certificate-thoufikur.jpg',
    rawArtwork: '/projects/creative/art_p27_1128x800.jpeg',
    aspectRatio: 1.41,
    width: 1128,
    height: 800,
    year: "2025",
    description: "Official institutional participation citation template bearing Ministry of MSME, SVCE-EPIC, and E-Cell co-branding.",
    featured: false,
    caseStudy: false,
    role: "Designer & Participant",
    client: "SVCE-EPIC & E-Cell"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-science-club-kinetic',
    title: 'Science Club ED Multimedia — Monochrome Kinetic Profile',
    summary: 'Full-bleed dark editorial portrait layered behind oversized cream cutout block typography for leadership announcement feeds.',
    role: 'Executive Director of Multimedia',
    organization: 'SVCE Science Club',
    category: 'Branding & Profiles',
    tools: ['Canva'],
    linkedProjectId: 'creative-p68',
    coverImage: '/projects/creative/science-club-ed-multimedia-typography-thoufikur.webp',
    coverImageJpg: '/projects/creative/science-club-ed-multimedia-typography-thoufikur.jpg',
    observations: [
      'Subject depth masking places the portrait cleanly in front of monumental cream serif/display background lettering.',
      'Strict monochrome contrast framed by a deep obsidian vignette draws immediate focus to facial expression and role badge.',
      'Structured lower name and Executive Director lockup reads cleanly even at compact mobile feed scales.'
    ],
    retrospectiveNote: 'Retrospective note: Subtle edge feathering around shoulders helped separate the foreground figure from condensed background typography.'
  },
  {
    id: 'cs-ecell-website-launch',
    title: 'E-Cell SVCE Website Launch — Dream It. Build It. Launch It.',
    summary: 'High-contrast violet platform release creative pairing a perspective device showcase with three-beat launch typography.',
    role: 'Chief Design Officer',
    organization: 'E-Cell SVCE',
    category: 'E-Cell & Institutional',
    tools: ['Canva'],
    linkedProjectId: 'creative-p79',
    coverImage: '/projects/creative/e-cell-svce-official-platform-launch.webp',
    coverImageJpg: '/projects/creative/e-cell-svce-official-platform-launch.jpg',
    observations: [
      'Diagonal violet gradient lighting ties the central laptop viewport directly into the glowing call-to-action pill below.',
      'Tri-part rhythmic headline establishes instant campaign recall above the browser mockup.',
      'Balanced top institutional lockup anchors E-Cell and SVCE crests without crowding the visual stage.'
    ],
    retrospectiveNote: 'Retrospective note: Elevating the live URL strip into a pill badge improved scan speed across campus social shares.'
  },
  {
    id: 'cs-classic-fitness-commercial',
    title: 'Classic Fitness Gym — Commercial Advertising Composition',
    summary: 'High-impact commercial flyer contrasting grayscale athletic photography against saturated electric-lime hierarchy and membership blocks.',
    role: 'Freelance Graphic Designer',
    organization: 'Classic Fitness Gym',
    category: 'Commercial & Creative Compositions',
    tools: ['Canva'],
    linkedProjectId: 'creative-p08',
    coverImage: '/projects/creative/classic-fitness-gym-commercial-poster.webp',
    coverImageJpg: '/projects/creative/classic-fitness-gym-commercial-poster.jpg',
    observations: [
      'Desaturated high-contrast subject treatment keeps intense lighting textures unified with bold condensed headlines.',
      'Neon-lime highlight accents guide eye flow directly to key offers, timings, and membership calls to action.',
      'Modular bottom footer cleanly groups contact channels and facility details on a clean dark ground.'
    ],
    retrospectiveNote: 'Retrospective note: Restraining colour accents strictly to lime on monochrome imagery prevented visual noise around dense flyer details.'
  },
  {
    id: 'cs-cinema-clapper-memento',
    title: 'Momento of Honour — Cinema Clapper Guest Tribute',
    summary: 'Atmospheric theatrical spotlight composition integrating an authentic cinema slate to honour chief guests.',
    role: 'Designer',
    organization: 'E-Cell & SVCE',
    category: 'Event & Promotional Posters',
    tools: ['Canva'],
    linkedProjectId: 'creative-p28',
    coverImage: '/projects/creative/svce-film-clapper-memento-design.webp',
    coverImageJpg: '/projects/creative/svce-film-clapper-memento-design.jpg',
    observations: [
      'Overhead stage spotlight beam isolates the monochrome slate against a deep theatrical backdrop.',
      'Diagonal slate bars create natural modular compartments for event name, guest citation, and date.',
      'Crisp cream serif highlights balance cinematic mood without obscuring guest tribute text.'
    ],
    retrospectiveNote: 'Retrospective note: Subtle ambient vignette darkening kept metallic trim legible under bright projector screens.'
  }
];

export const ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    id: "smart-track-safety-system",
    title: "Smart Track Safety System — Overhead Line Fault Detection",
    subtitle: "SIH (Smart India Hackathon) project prototype focusing on railway overhead transmission safety.",
    status: "Prototype / Working Model",
    context: "Railway overhead traction systems (25 kV lines) face critical disruption and severe hazard when overhead transmission wires snap or lose tension. Rapid detection is essential to prevent accidents.",
    problem: "Conventional manual inspection and delayed relay feedback can leave fallen live lines energized or undetected across vast railway stretches, endangering passenger transit and crew safety.",
    architecture: "Autonomous sensor-driven telemetry loop connecting line-monitoring nodes to an ESP32 microcontroller, triggering immediate alert mechanisms and isolation signaling.",
    hardware: [
      "ESP32 Microcontroller",
      "Current & Voltage Sensing Modules",
      "Line Tension & Vibration Sensors",
      "Wireless Communication Transceiver",
      "Fault Indication LEDs & Alarm Buzzer"
    ],
    software: [
      "Embedded C / Arduino IDE",
      "Threshold-based Fault Detection Algorithm",
      "Telemetry & Serial Communication Protocols"
    ],
    actualImplementation: "Engineered and demonstrated a laboratory-scale hardware prototype that registers instantaneous voltage drops and physical disconnection, triggering automated warning flags.",
    lessonsLearned: "Gained hands-on experience in sensor debouncing, handling transient electrical noise in telemetry lines, and architecting fail-safe alert sequences.",
    badge: "SIH Hackathon Project"
  },
  {
    id: "industrial-electrical-cmrl-schwing",
    title: "Industrial Electrical Systems & Metro Power Distribution",
    subtitle: "Field technical study and industrial internship experience at CMRL & Schwing Stetter.",
    status: "Field Exposure / Industrial Study",
    context: "Two intensive student internships observing high-capacity power distribution, industrial machine control, and municipal transit electrification.",
    problem: "Understanding how theoretical electrical engineering principles (switchgear, relay coordination, SCADA, motor control) are operationalized in rigorous commercial and heavy industrial settings.",
    architecture: "High-voltage substation feed -> Step-down transformers -> Medium-voltage switchgear & busbars -> Overhead catenary / pantograph traction & industrial machinery motor control panels.",
    hardware: [
      "Step-Down Power Transformers",
      "Air Circuit Breakers (ACB) & Vacuum Circuit Breakers (VCB)",
      "Busbar Distribution Systems",
      "Overhead Traction Lines & Pantographs",
      "Protective Relays & Contactors",
      "Industrial Motor Control Centers"
    ],
    software: [
      "SCADA Monitoring Interfaces",
      "Siemens TIA Portal & PLC Fundamentals",
      "Single Line Diagrams (SLD) & Schematic Reading"
    ],
    actualImplementation: "Observed live maintenance, transformer inspection protocols, switchgear interlocks, pantograph current collection dynamics, and industrial automation safety standards at Schwing Stetter Sriperumbudur (1 July 2026 – 15 July 2026) and CMRL Chennai (1 Dec 2025 – 30 Dec 2025).",
    lessonsLearned: "Solidified practical understanding of electrical protection margins, arc flash hazards, redundancy in critical transport power, and industrial automation architectures.",
    badge: "CMRL & Schwing Stetter"
  },
  {
    id: "smart-attendance-hardware-integration",
    title: "Edge Computer Vision & IoT Hardware Integration",
    subtitle: "Hardware implementation for the iCUBE Hackathon-winning Smart Attendance System.",
    status: "Hardware Integration",
    context: "Integrating real-time edge computer vision with embedded hardware in classroom environments without requiring expensive cloud infrastructure.",
    problem: "Balancing local processing latency on resource-constrained embedded boards while maintaining frame rates sufficient for multi-face detection.",
    architecture: "Edge camera module feeds video stream to local Raspberry Pi processor running lightweight inference pipelines, outputting verification state to local display and local SQLite database.",
    hardware: [
      "Raspberry Pi 4 Model B",
      "High-Resolution Wide-Angle Camera Module",
      "Status OLED / LCD Display",
      "Local Storage (MicroSD / SSD)"
    ],
    software: [
      "Linux / Raspberry Pi OS",
      "Python 3",
      "OpenCV Video Capture Pipeline",
      "GPIO Control Scripts"
    ],
    actualImplementation: "Assembled the edge hardware housing, calibrated camera positioning for classroom lighting, and integrated hardware trigger loops with the computer vision pipeline.",
    lessonsLearned: "Mastered thermal throttling mitigation, camera exposure tuning in varying ambient sunlight, and reliable peripheral power management on Raspberry Pi.",
    badge: "Hardware & Edge Integration"
  }
];

export const TECHNOLOGY_PROJECTS: TechnologyProject[] = [
  {
    id: "retinascan-ai",
    title: "RetinaScan AI (Diabetic Retinopathy Detection)",
    subtitle: "Deep learning exploration for retinal fundus-image lesion detection.",
    classification: "Experimental Deep Learning Prototype",
    status: "Experimental Prototype",
    liveUrl: "https://sightsheild-ai.vercel.app/",
    githubUrl: "https://github.com/THOUFIKUR/sih2026",
    description: "An AI-assisted computer vision model designed to analyze retinal fundus photography, identifying microaneurysms, hemorrhages, and exudates associated with diabetic retinopathy.",
    ownerContribution: "Explored public retinal imaging datasets, ran model inference pipelines using OpenCV and ONNX, and crafted a visual prototype interface.",
    technologiesUsed: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "EfficientNetB3",
      "ONNX Runtime",
      "Vite",
      "React"
    ],
    aiAssistedPortion: "Developed through AI-assisted coding and pre-trained transfer learning architectures, with AI assistance for dataset preprocessing and evaluation metrics calculation.",
    implementedFeatures: [
      "Fundus image preprocessing (clahe contrast enhancement, resizing)",
      "Inference testing using EfficientNetB3 backbone",
      "Grad-CAM visual explanation overlay prototype",
      "Live web interface deployment on Vercel"
    ],
    plannedFeatures: [
      "Clinical grade validation",
      "Integration into local clinic ophthalmology workstation",
      "Multi-class severity grading (Mild, Moderate, Severe, Proliferative)"
    ]
  },
  {
    id: "smart-attendance-system",
    title: "Smart Attendance System",
    subtitle: "IoT-based computer vision attendance system with period-based logging and reporting.",
    classification: "Award-Winning IoT / CV System",
    status: "Working Hardware/Software Prototype",
    award: "Winner — iCUBE Hackathon",
    githubUrl: "https://github.com/THOUFIKUR/attandance-for-the-pc",
    description: "Built an automated student attendance system that uses computer vision to detect and recognize student faces in classroom sessions, recording period-based attendance directly into a structured database with automated reporting.",
    ownerContribution: "Led the system architecture, hardware setup on Raspberry Pi, OpenCV camera capture integration, database schema in SQLite, and end-to-end testing during the hackathon.",
    technologiesUsed: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "SQLite",
      "Raspberry Pi"
    ],
    aiAssistedPortion: "Used AI development tools to accelerate database schema scripting, boilerplate reporting logic, and OpenCV facial landmark optimization routines.",
    implementedFeatures: [
      "Real-time video feed face detection via MediaPipe",
      "Period-based timetable attendance matching",
      "Local SQLite persistent attendance logging",
      "CSV attendance report export for faculty"
    ],
    plannedFeatures: [
      "Centralized cloud sync via Supabase",
      "Multi-camera room coverage",
      "Parent notification automated webhooks"
    ]
  },
  {
    id: "adaptive-quiz-ai-platform",
    title: "Adaptive Quiz AI Platform",
    subtitle: "Dynamic assessment backend adjusting question difficulty based on accuracy and speed.",
    classification: "Algorithmic Platform Prototype",
    status: "Algorithmic Prototype",
    githubUrl: "https://github.com/THOUFIKUR/adaptive-quiz-LAST1",
    description: "An adaptive testing engine that dynamically evaluates student proficiency in real time, serving easier or more challenging questions based on consecutive correctness and response latency.",
    ownerContribution: "Designed the scoring heuristic, question state engine, and API endpoints using FastAPI and SQLite.",
    technologiesUsed: [
      "Python",
      "FastAPI",
      "SQLite",
      "React"
    ],
    aiAssistedPortion: "Built with AI assistance for FastAPI endpoint routing, test dataset generation, and client-side question fetching logic.",
    implementedFeatures: [
      "Proficiency scoring algorithm factoring question weight and answer duration",
      "Dynamic next-question selector",
      "Session history and analytics recording"
    ],
    plannedFeatures: [
      "Item Response Theory (IRT) statistical modeling",
      "Full web dashboard built with Vite and Tailwind CSS"
    ]
  },
  {
    id: "smart-track-safety-system-software",
    title: "Smart Track Safety System — Telemetry & Sensor Logic",
    subtitle: "SIH project prototype alert firmware and sensor processing engine.",
    classification: "Embedded Firmware & Telemetry",
    status: "SIH Project Prototype",
    description: "Embedded firmware and threshold alert logic processing telemetry from transmission line tension and voltage sensors on the ESP32.",
    ownerContribution: "Configured sensor polling frequencies, debounce logic, and emergency alarm trigger routines.",
    technologiesUsed: [
      "Embedded C",
      "ESP32",
      "Telemetry Protocols"
    ],
    aiAssistedPortion: "Used AI tools for boilerplate sensor calibration calculations and communication state machine templates.",
    implementedFeatures: [
      "Sensor anomaly threshold monitoring",
      "Immediate trip alert relay signalling",
      "Serial debug interface"
    ],
    plannedFeatures: [
      "Long-range LoRaWAN telemetry backhaul",
      "Central railway control room dashboard integration"
    ]
  }
];
