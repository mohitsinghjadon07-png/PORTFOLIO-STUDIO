
const studentTemplates = [
  {
    id: "student-modern-minimal",
    name: "Modern Student",
    profession: "Student",
    style: "Minimal",
    layout: "split-hero",
    colors: { background: "#F5F6F3", surface: "#FFFFFF", text: "#202820", accent: "#5C8B72" },
    description: "A clean student portfolio for education, skills and personal projects.",
    sections: ["Hero", "About Me", "Education", "Skills", "Projects", "Contact"],
    features: ["Simple navigation", "Education timeline", "Project cards"]
  },
  {
    id: "student-dark-academic",
    name: "Dark Academic",
    profession: "Student",
    style: "Editorial",
    layout: "dark-editorial",
    colors: { background: "#141414", surface: "#222222", text: "#F2EEE6", accent: "#D0A56B" },
    description: "A sophisticated dark portfolio for ambitious students and researchers.",
    sections: ["Hero", "Academic Profile", "Research", "Projects", "Achievements", "Contact"],
    features: ["Dark aesthetic", "Editorial typography", "Academic highlights"]
  },
  {
    id: "student-campus",
    name: "Campus Life",
    profession: "Student",
    style: "Playful",
    layout: "playful-cards",
    colors: { background: "#FFF5E9", surface: "#FFFFFF", text: "#302820", accent: "#E99A50" },
    description: "A friendly portfolio showcasing campus experiences and extracurricular work.",
    sections: ["Hero", "My Story", "Education", "Activities", "Projects", "Contact"],
    features: ["Friendly cards", "Activity highlights", "Personal introduction"]
  },
  {
    id: "student-professional",
    name: "Career Ready",
    profession: "Student",
    style: "Corporate",
    layout: "corporate-profile",
    colors: { background: "#F1F5F9", surface: "#FFFFFF", text: "#1B2B3C", accent: "#3479B8" },
    description: "A recruiter-friendly portfolio for internships and placement applications.",
    sections: ["Profile", "Career Objective", "Education", "Skills", "Projects", "Experience", "Contact"],
    features: ["Resume-style structure", "Skill highlights", "Recruiter-friendly layout"]
  },
  {
    id: "student-swiss-grid",
    name: "Academic Grid",
    profession: "Student",
    style: "Swiss",
    layout: "structured-grid",
    colors: { background: "#F5F5F2", surface: "#FFFFFF", text: "#202020", accent: "#D94B43" },
    description: "A structured portfolio for presenting academic and technical achievements.",
    sections: ["Hero", "Profile", "Education", "Skills", "Projects", "Achievements"],
    features: ["Structured grid", "Numbered sections", "Clear information hierarchy"]
  },
  {
    id: "student-gradient",
    name: "Fresh Start",
    profession: "Student",
    style: "Gradient",
    layout: "gradient-hero",
    colors: { background: "#F0F0FF", surface: "#FFFFFF", text: "#29264B", accent: "#8575E8" },
    description: "A modern and approachable portfolio for students starting their careers.",
    sections: ["Hero", "About", "Education", "Skills", "Projects", "Contact"],
    features: ["Soft gradients", "Rounded panels", "Modern typography"]
  },
  {
    id: "student-brutalist",
    name: "Bold Achiever",
    profession: "Student",
    style: "Brutalist",
    layout: "brutalist-panels",
    colors: { background: "#F6EF59", surface: "#FFFFFF", text: "#191919", accent: "#F05B3F" },
    description: "A bold portfolio for students who want to stand out with confidence.",
    sections: ["Hero", "About", "Achievements", "Projects", "Skills", "Contact"],
    features: ["Bold typography", "Strong borders", "High contrast"]
  },
  {
    id: "student-magazine",
    name: "Student Journal",
    profession: "Student",
    style: "Magazine",
    layout: "magazine-columns",
    colors: { background: "#F1EEE7", surface: "#FBF9F4", text: "#28241F", accent: "#A6503D" },
    description: "A story-led portfolio documenting learning, projects and experiences.",
    sections: ["Cover Hero", "My Journey", "Featured Projects", "Learning Notes", "Achievements", "Contact"],
    features: ["Editorial layout", "Personal storytelling", "Featured project sections"]
  },
  {
    id: "student-tech",
    name: "Tech Learner",
    profession: "Student",
    style: "Terminal",
    layout: "terminal-interface",
    colors: { background: "#08100C", surface: "#142019", text: "#DDF6E3", accent: "#48D987" },
    description: "A developer-focused student portfolio for coding projects and technical learning.",
    sections: ["Intro", "About", "Tech Stack", "GitHub Projects", "Learning Journey", "Contact"],
    features: ["Monospace typography", "Code-inspired panels", "Technical project cards"]
  },
  {
    id: "student-creative",
    name: "Creative Learner",
    profession: "Student",
    style: "Creative",
    layout: "creative-mosaic",
    colors: { background: "#FFF0EA", surface: "#FFFFFF", text: "#2A211F", accent: "#FA7059" },
    description: "A visual portfolio for students combining creative work and academic projects.",
    sections: ["Hero", "About", "Creative Work", "Projects", "Activities", "Contact"],
    features: ["Mosaic gallery", "Expressive headings", "Colourful project blocks"]
  },
  {
    id: "student-luxury",
    name: "Scholar",
    profession: "Student",
    style: "Luxury",
    layout: "luxury-columns",
    colors: { background: "#171715", surface: "#24231F", text: "#EEE8DA", accent: "#C6AA76" },
    description: "An elegant portfolio for academic achievements and research experience.",
    sections: ["Hero", "Academic Profile", "Research", "Education", "Recognition", "Contact"],
    features: ["Elegant typography", "Spacious layout", "Refined accent palette"]
  },
  {
    id: "student-futuristic",
    name: "Future Graduate",
    profession: "Student",
    style: "Futuristic",
    layout: "futuristic-interface",
    colors: { background: "#0A1020", surface: "#172139", text: "#EAF1FF", accent: "#56D7E8" },
    description: "A futuristic portfolio for students interested in emerging technology.",
    sections: ["Hero", "Profile", "Capabilities", "Projects", "Certifications", "Contact"],
    features: ["Digital interface panels", "Neon accents", "Modern visual system"]
  }
];

export default studentTemplates;
