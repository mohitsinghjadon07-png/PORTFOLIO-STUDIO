
const writerTemplates = [
  {
    id: "writer-01",
    name: "The Wordsmith",
    profession: "Writer",
    style: "Literary Editorial",
    layout: "magazine-columns",
    colors: { background: "#F7F3EB", surface: "#EAE3D7", text: "#29251F", accent: "#9C563D" },
    description: "An editorial portfolio for authors, essayists, and professional writers.",
    sections: ["Introduction", "Selected Writing", "Published Work", "About", "Contact"],
    features: ["Editorial typography", "Reading-focused layout", "Publication highlights"]
  },
  {
    id: "writer-02",
    name: "Midnight Pages",
    profession: "Writer",
    style: "Dark Literary",
    layout: "dark-editorial",
    colors: { background: "#111116", surface: "#202027", text: "#F2F0EA", accent: "#C49B69" },
    description: "A moody portfolio for fiction writers, poets, and independent authors.",
    sections: ["Opening Note", "Featured Stories", "Writing Archive", "Biography", "Contact"],
    features: ["Dark reading environment", "Literary styling", "Featured writing"]
  },
  {
    id: "writer-03",
    name: "Ink & Paper",
    profession: "Writer",
    style: "Classic Minimal",
    layout: "minimalist-portfolio",
    colors: { background: "#FFFFFF", surface: "#F5F3EF", text: "#222222", accent: "#777777" },
    description: "A simple and distraction-free portfolio for writers and copywriters.",
    sections: ["About Me", "Selected Articles", "Services", "Experience", "Contact"],
    features: ["Clean typography", "Minimal navigation", "Readable content sections"]
  },
  {
    id: "writer-04",
    name: "Story Architect",
    profession: "Writer",
    style: "Modern Professional",
    layout: "structured-grid",
    colors: { background: "#F1F4F7", surface: "#FFFFFF", text: "#1D2935", accent: "#3975A8" },
    description: "A structured portfolio for content strategists, technical writers, and copywriters.",
    sections: ["Professional Profile", "Writing Samples", "Specialties", "Experience", "Contact"],
    features: ["Organized writing samples", "Skills grid", "Professional presentation"]
  },
  {
    id: "writer-05",
    name: "Poetry in Motion",
    profession: "Writer",
    style: "Artistic Expression",
    layout: "creative-mosaic",
    colors: { background: "#EEE7DC", surface: "#DDD0BE", text: "#332A29", accent: "#A34D55" },
    description: "An expressive portfolio for poets and experimental storytellers.",
    sections: ["Poet's Note", "Selected Poems", "Collections", "Inspiration", "Contact"],
    features: ["Artistic composition", "Expressive typography", "Poetry-focused sections"]
  },
  {
    id: "writer-06",
    name: "Bold Statements",
    profession: "Writer",
    style: "Brutalist Typography",
    layout: "brutalist-panels",
    colors: { background: "#F0F0EC", surface: "#DADAD4", text: "#111111", accent: "#E94E35" },
    description: "A bold portfolio for opinion writers, journalists, and independent publishers.",
    sections: ["Opening Statement", "Featured Articles", "Editorial Work", "About", "Contact"],
    features: ["Oversized typography", "Strong visual hierarchy", "Asymmetric sections"]
  },
  {
    id: "writer-07",
    name: "The Author's Desk",
    profession: "Writer",
    style: "Warm Personal",
    layout: "luxury-columns",
    colors: { background: "#F2EBDD", surface: "#E5D8C5", text: "#382D25", accent: "#9A704B" },
    description: "A warm personal website for authors, novelists, and independent writers.",
    sections: ["Welcome", "Books and Publications", "Author Biography", "Events", "Contact"],
    features: ["Warm color palette", "Book showcase", "Elegant typography"]
  },
  {
    id: "writer-08",
    name: "Draft Zero",
    profession: "Writer",
    style: "Creative Workspace",
    layout: "artboard-canvas",
    colors: { background: "#F6F5F1", surface: "#E8E6DF", text: "#252525", accent: "#6D83A8" },
    description: "A creative canvas for showcasing drafts, ideas, essays, and experiments.",
    sections: ["Creative Introduction", "Selected Drafts", "Experiments", "Process", "Contact"],
    features: ["Canvas-inspired layout", "Flexible content blocks", "Creative project display"]
  },
  {
    id: "writer-09",
    name: "Signal & Story",
    profession: "Writer",
    style: "Digital Publication",
    layout: "technical-grid",
    colors: { background: "#101820", surface: "#1D2B36", text: "#EAF1F5", accent: "#58B6C9" },
    description: "A modern portfolio for technology writers and digital publishers.",
    sections: ["Writer Profile", "Technical Articles", "Case Studies", "Topics", "Contact"],
    features: ["Technical article archive", "Structured information", "Modern digital aesthetic"]
  },
  {
    id: "writer-10",
    name: "Chapter One",
    profession: "Writer",
    style: "Storybook",
    layout: "gradient-hero",
    colors: { background: "#252039", surface: "#37304F", text: "#FFF5E8", accent: "#E7A875" },
    description: "A storytelling-inspired portfolio for fiction writers and novelists.",
    sections: ["Opening Chapter", "Stories", "Books", "About the Author", "Contact"],
    features: ["Atmospheric colors", "Narrative presentation", "Book-focused sections"]
  },
  {
    id: "writer-11",
    name: "The Copy Studio",
    profession: "Writer",
    style: "Creative Agency",
    layout: "bold-blocks",
    colors: { background: "#FFF7ED", surface: "#F0E5D8", text: "#25211D", accent: "#F06A45" },
    description: "A confident portfolio for commercial copywriters and brand storytellers.",
    sections: ["Creative Introduction", "Campaigns", "Copywriting Services", "Clients", "Contact"],
    features: ["Bold content blocks", "Campaign highlights", "Service-focused presentation"]
  },
  {
    id: "writer-12",
    name: "Quiet Chapters",
    profession: "Writer",
    style: "Refined Publishing",
    layout: "split-hero",
    colors: { background: "#EDEBE5", surface: "#FFFFFF", text: "#282820", accent: "#8A8D65" },
    description: "A refined portfolio for literary professionals and published authors.",
    sections: ["Author Introduction", "Selected Publications", "Featured Excerpts", "Biography", "Contact"],
    features: ["Split-screen introduction", "Refined typography", "Publication showcase"]
  }
];

export default writerTemplates;
