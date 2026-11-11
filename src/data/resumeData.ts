export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  currentStage: string;
  cgpa: string;
  cgpaNote: string;
  highlights: string[];
}

export interface InternshipItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  periodText: string;
  description: string;
  verifiedExposure: string[];
}

export interface LeadershipItem {
  role: string;
  organization: string;
  institution: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export interface AchievementItem {
  title: string;
  event: string;
  type: 'Award' | 'Hackathon Project' | 'Leadership';
  description: string;
  projectLink?: string;
}

export const EDUCATION_DATA: EducationItem = {
  degree: "B.E. Electrical and Electronics Engineering",
  institution: "Sri Venkateswara College of Engineering (SVCE)",
  location: "Pennalur, Sriperumbudur, Tamil Nadu",
  period: "September 2024 – June 2028",
  currentStage: "Third year / Sixth semester",
  cgpa: "8.39 / 10.0 (Up to 4th Semester)",
  cgpaNote: "Official academic record as confirmed; currently in 6th semester",
  highlights: [
    "Specializing in Power Distribution, Control Systems, Industrial Automation & Embedded Systems",
    "Active contributor across prominent campus societies: E-Cell, Science Club, and BIS Chapter",
    "Balanced rigorous engineering coursework with student leadership and creative direction"
  ]
};

export const INTERNSHIPS_DATA: InternshipItem[] = [
  {
    company: "Schwing Stetter",
    role: "Student Intern",
    location: "Sriperumbudur, Tamil Nadu",
    duration: "1 July 2026 – 15 July 2026",
    periodText: "Student Internship (1 July 2026 – 15 July 2026)",
    description: "Gained direct practical exposure to industrial electrical design, automation practices, and motor control panels in a heavy manufacturing plant.",
    verifiedExposure: [
      "Industrial electrical design & control panel wiring",
      "Control systems & automation practices used in industrial concrete machinery",
      "Motor control centers, starters, and industrial safety interlocks",
      "Observation of factory-floor PLC operation and sensor integration"
    ]
  },
  {
    company: "Chennai Metro Rail Limited (CMRL)",
    role: "Student Intern",
    location: "Chennai, Tamil Nadu",
    duration: "1 December 2025 – 30 December 2025",
    periodText: "Student Internship (1 December 2025 – 30 December 2025)",
    description: "Observed the high-reliability municipal electrical infrastructure powering Chennai's rapid transit metro network.",
    verifiedExposure: [
      "Metro power distribution & step-down transformers",
      "Switchgear operations, Air & Vacuum Circuit Breakers, and busbar systems",
      "Relay protection mechanisms and fault isolation protocols",
      "Overhead 25 kV AC traction catenary systems & pantograph operations",
      "SCADA monitoring interfaces and municipal electrical safety standards"
    ]
  }
];

export const SKILL_GROUPS = [
  {
    title: "Creative & Multimedia",
    description: "Visual design, typography, brand communication and multimedia coordination.",
    skills: [
      { name: "Canva", level: "Primary Design Tool" },
      { name: "Adobe Express", level: "Visual Editing" },
      { name: "CapCut", level: "Video & Motion Edits" },
      { name: "Poster Design", level: "Core Strength" },
      { name: "Visual Communication", level: "Strategic Framing" },
      { name: "Social Media Creatives", level: "Multi-Platform Campaigns" },
      { name: "Festival & Event Designs", level: "Cultural & Campus Work" },
      { name: "Typography & Layout", level: "Grid & Hierarchy" },
      { name: "Multimedia Coordination", level: "Team Leadership" }
    ]
  },
  {
    title: "Electrical & Electronics Engineering",
    description: "Core power engineering, protection, industrial control and hardware.",
    skills: [
      { name: "Power Systems Fundamentals", level: "Academic & Field Exposure" },
      { name: "Transformers & Switchgear", level: "Field & Practical Study" },
      { name: "Relay Protection Fundamentals", level: "Substation Protection" },
      { name: "Motor Control Fundamentals", level: "Industrial Control" },
      { name: "Electrical Control Systems", level: "Industrial Systems" },
      { name: "PLC & SCADA Fundamentals", level: "Automation Concepts" },
      { name: "Industrial Automation", level: "Manufacturing Exposure" },
      { name: "ESP32 Embedded Systems", level: "Embedded Prototyping" },
      { name: "Raspberry Pi & IoT", level: "Edge Systems" }
    ]
  },
  {
    title: "Programming & Database Fundamentals",
    description: "Core academic programming and database technologies used across projects.",
    skills: [
      { name: "C", level: "Academic Fundamentals" },
      { name: "Java", level: "Academic Fundamentals" },
      { name: "SQLite", level: "Local Project Databases" },
      { name: "Supabase", level: "Database & Backend" }
    ]
  },
  {
    title: "AI-Assisted Development & Web Exposure",
    description: "Web and backend technologies explored through AI-assisted and project-level development.",
    skills: [
      { name: "Python", level: "AI-Assisted / Project Exposure" },
      { name: "JavaScript", level: "Basic Web Exposure" },
      { name: "HTML & CSS", level: "Layout & Markup" },
      { name: "React", level: "Component Exposure" },
      { name: "Vite", level: "Build Tooling" },
      { name: "Tailwind CSS", level: "Utility Styling" },
      { name: "FastAPI", level: "API Prototyping" }
    ]
  },
  {
    title: "AI & Computer Vision Project Exposure",
    description: "Frameworks applied in hackathon prototypes and deep learning experiments.",
    skills: [
      { name: "OpenCV", level: "Image Capture & Preprocessing" },
      { name: "MediaPipe", level: "Facial Landmarks & Detection" },
      { name: "YOLOv8", level: "Object Detection Exposure" },
      { name: "EfficientNetB3", level: "Transfer Learning Model" },
      { name: "ONNX", level: "Cross-Platform Inference" }
    ]
  },
  {
    title: "Engineering Software & CAD Tools",
    description: "Tools studied and applied for schematics, drafting, circuit simulation and modeling.",
    skills: [
      { name: "AutoCAD", level: "Schematics & Drafting" },
      { name: "MATLAB", level: "Analysis & Simulation" },
      { name: "Siemens TIA Portal", level: "PLC Configuration" },
      { name: "EPLAN", level: "Electrical Documentation" },
      { name: "Fusion 360", level: "3D CAD Modeling" },
      { name: "KiCad", level: "PCB & Schematic Design" },
      { name: "Tinkercad", level: "Circuit Prototyping" }
    ]
  }
];

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    role: "Chief Design Officer",
    organization: "Entrepreneurship Cell (E-Cell)",
    institution: "Sri Venkateswara College of Engineering",
    period: "2025 – Present",
    description: "Heads the creative visual identity and branding for all E-Cell events, startup showcases, and institutional entrepreneurship campaigns.",
    responsibilities: [
      "Led design for E-Cell SVCE Inauguration Ceremony backdrop and keynote posters",
      "Directed official platform launch campaign (Dream It. Build It. Launch It.) and Kollywood Conclave",
      "Mentored junior design team members in typography, hierarchy, and brand consistency"
    ]
  },
  {
    role: "Executive Director of Multimedia",
    organization: "SVCE Science Club",
    institution: "Sri Venkateswara College of Engineering",
    period: "2026 – 2027",
    description: "Directs visual storytelling, promotional campaigns, technical symposium branding, and multimedia broadcasts.",
    responsibilities: [
      "Spearheaded the complete visual campaign for iCUBE 6.0 and the 24-Hour Hackathon",
      "Orchestrated cross-departmental recruitment campaigns across Web, Content, Media, and Podcast teams",
      "Designed cultural festival celebrations, Gandhi Jayanti memorial graphics, and official induction agenda"
    ]
  },
  {
    role: "Deputy Secretary",
    organization: "Bureau of Indian Standards (BIS) Student Chapter",
    institution: "Sri Venkateswara College of Engineering",
    period: "2025 – Present",
    description: "Coordinates student engagement with national standardisation initiatives, quality protocols, and institutional activities.",
    responsibilities: [
      "Assisted in coordinating standards seminars and technical workshops for engineering students",
      "Designed official chapter announcements and student communication materials"
    ]
  },
  {
    role: "Team Leader",
    organization: "aegisAI",
    institution: "Multidisciplinary Project Team",
    period: "2025 – 2026",
    description: "Led technical and visual direction for student innovation initiatives and hackathon teams.",
    responsibilities: [
      "Coordinated project sprints, interface prototyping, and presentation assets",
      "Facilitated team alignment across hardware, software, and creative storytelling"
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "1st Place Winner — iCUBE Hackathon",
    event: "Smart Attendance System",
    type: "Award",
    description: "Won first prize for engineering an IoT edge computer-vision attendance tracking platform with Raspberry Pi, OpenCV, and SQLite."
  },
  {
    title: "Smart India Hackathon (SIH) Project",
    event: "Smart Track Safety System",
    type: "Hackathon Project",
    description: "Engineered an embedded fault-detection prototype for railway overhead transmission line breaks using ESP32 and telemetry sensing."
  },
  {
    title: "E-Cell Design Leadership Recognition",
    event: "SVCE Entrepreneurship Cell",
    type: "Leadership",
    description: "Recognized for creative excellence as Chief Design Officer directing major campus conclaves."
  },
  {
    title: "Office Bearer across 3 Active Societies",
    event: "SVCE Campus Community",
    type: "Leadership",
    description: "Concurrent leadership positions across E-Cell (Chief Design Officer), Science Club (Executive Director Multimedia), and BIS Chapter (Deputy Secretary)."
  }
];
