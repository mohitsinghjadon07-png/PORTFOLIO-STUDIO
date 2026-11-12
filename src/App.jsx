
import { useMemo, useState } from "react";
import {
  Search, Sun, Moon, Menu, ChevronLeft, ChevronRight,
  WandSparkles, LayoutGrid, X, Palette, Rocket, Code2,
  ShieldCheck, PenTool, GraduationCap, Camera, Clapperboard,
  BookOpen, BriefcaseBusiness, Layers3
} from "lucide-react";

import softwareDeveloperTemplates from "./templates/softwareDeveloper";
import cybersecurityTemplates from "./templates/cybersecurity";
import uiUxDesignerTemplates from "./templates/uiUxDesigner";
import graphicDesignerTemplates from "./templates/graphicDesigner";
import studentTemplates from "./templates/student";
import photographerTemplates from "./templates/photographer";
import videoCreatorTemplates from "./templates/videoCreator";
import writerTemplates from "./templates/writer";
import businessProfessionalTemplates from "./templates/businessProfessional";
import creativeAgencyTemplates from "./templates/creativeAgency";
import "./profession-libraries.css";

const featuredTemplates = [
  { tag: "Developer Portfolio", headline: <>Build. Create.<br /><span>Inspire.</span></>, description: "Turning ideas into impactful digital experiences.", action: "Explore My Work", name: "Alex Morgan", role: "Full Stack Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85", background: "one" },
  { tag: "Creative Portfolio", headline: <>Make it<br /><span>Remarkable.</span></>, description: "A creative space for bold ideas and thoughtful design.", action: "View Projects", name: "Jordan Lee", role: "Visual Designer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85", background: "two" },
  { tag: "Minimal Portfolio", headline: <>Less noise.<br /><span>More impact.</span></>, description: "Simple, intentional work made to leave a lasting impression.", action: "Discover More", name: "Taylor Reed", role: "Product Designer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85", background: "three" },
  { tag: "Professional Portfolio", headline: <>Ideas into<br /><span>Action.</span></>, description: "Building meaningful products through strategy and craft.", action: "See My Work", name: "Sam Rivera", role: "Product Strategist", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85", background: "four" }
];

const libraries = [
  { id: "developer", name: "Software Developer", description: "Portfolios for developers and engineers.", icon: Code2, templates: softwareDeveloperTemplates, accent: "#79B8FF" },
  { id: "cybersecurity", name: "Cybersecurity", description: "Showcase security skills, labs, and projects.", icon: ShieldCheck, templates: cybersecurityTemplates, accent: "#67D6C0" },
  { id: "uiux", name: "UI/UX Designer", description: "Present product thinking and interface work.", icon: Palette, templates: uiUxDesignerTemplates, accent: "#D5A0FF" },
  { id: "graphic", name: "Graphic Designer", description: "Display visual identity and creative projects.", icon: PenTool, templates: graphicDesignerTemplates, accent: "#FF9C87" },
  { id: "student", name: "Student", description: "Highlight education, skills, and achievements.", icon: GraduationCap, templates: studentTemplates, accent: "#F4C66A" },
  { id: "photographer", name: "Photographer", description: "Build an image-first photography portfolio.", icon: Camera, templates: photographerTemplates, accent: "#D9B58A" },
  { id: "video", name: "Video Creator", description: "Showreels, films, edits, and motion work.", icon: Clapperboard, templates: videoCreatorTemplates, accent: "#FF8C9D" },
  { id: "writer", name: "Writer", description: "Showcase articles, stories, and publications.", icon: BookOpen, templates: writerTemplates, accent: "#B7C98B" },
  { id: "business", name: "Business Professional", description: "Present your experience and business impact.", icon: BriefcaseBusiness, templates: businessProfessionalTemplates, accent: "#86B9D9" },
  { id: "agency", name: "Creative Agency", description: "Showcase studio work, services, and campaigns.", icon: Layers3, templates: creativeAgencyTemplates, accent: "#D6A0E8" }
];

export default function App() {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLibrary, setActiveLibrary] = useState(null);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const current = featuredTemplates[active];

  const visibleLibraries = useMemo(
    () => libraries.filter(item =>
      `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase())
    ),
    [query]
  );

  const move = direction =>
    setActive(value => (value + direction + featuredTemplates.length) % featuredTemplates.length);

  const openLibrary = library => {
    setActiveLibrary(library);
    document.getElementById("profession-templates")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <main className={dark ? "site dark" : "site light"}>

      <header className="topbar">
        <a className="brand" href="#">
          <span className="brand-mark">P</span>
          <span>PORTFOLIO <b>STUDIO</b></span>
        </a>

        <label className="search-box">
          <Search size={22} />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search templates or professions..."
            aria-label="Search templates"
          />
          <kbd>Ctrl + K</kbd>
        </label>

        <div className="nav-actions">
          <button className="theme-switch" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            <Sun size={19} className={!dark ? "selected" : ""} />
            <span className="switch-divider" />
            <Moon size={19} className={dark ? "selected" : ""} />
          </button>
          <span className="nav-divider" />
          <button className="icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

        {menuOpen && (
          <div className="menu-popover">
            <button onClick={() => {
              setMenuOpen(false);
              setQuery("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}>Home</button>
            <button onClick={() => {
              setMenuOpen(false);
              document.getElementById("profession-libraries")?.scrollIntoView({ behavior: "smooth" });
            }}>Profession Libraries</button>
            <button onClick={() => {
              setMenuOpen(false);
              window.location.hash = "build";
            }}>Build Your Own Design</button>
          </div>
        )}
      </header>

      {/* Existing featured portfolio showcase */}
      <section className="showcase" id="showcase" aria-label="Featured portfolio templates">
        <div className="sparkle sparkle-a">✦</div>
        <div className="sparkle sparkle-b">✧</div>
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />

        <button className="carousel-arrow arrow-left" onClick={() => move(-1)} aria-label="Previous template">
          <ChevronLeft size={29} />
        </button>

        <div className="template-stage">
          <article className="side-card side-card-left" onClick={() => move(-1)}>
            <div className="side-mini-tag">PORTFOLIO</div>
            <h2>Modern<br /><span>Portfolio</span></h2>
            <p>Simple. Elegant. Powerful.</p>
            <span className="small-outline">Explore <b>→</b></span>
            <div className="purple-wave wave-left" />
          </article>

          <article className={`hero-card theme-${current.background}`}>
            <div className="portfolio-nav">
              <span>Home</span><span>About</span><span>Projects</span><span>Contact</span>
              <i><Moon size={14} /></i>
            </div>
            <div className="hero-copy">
              <span className="template-tag">{current.tag}</span>
              <h1>{current.headline}</h1>
              <p>{current.description}</p>
              <button className="hero-cta">{current.action}<span>→</span></button>
            </div>
            <div className="portrait-glow" />
            <img className="portrait" src={current.image} alt={`${current.name} portfolio portrait`} />
            <div className="hero-bottom-line" />
          </article>

          <article className="side-card side-card-right" onClick={() => move(1)}>
            <div className="right-copy">
              <h2>Hello,<br />I'm <span>{current.role.split(" ")[0]}</span></h2>
              <p>Crafting digital experiences with passion.</p>
              <span className="small-outline">Let's Connect <b>→</b></span>
            </div>
            <div className="purple-ribbon" />
          </article>
        </div>

        <button className="carousel-arrow arrow-right" onClick={() => move(1)} aria-label="Next template">
          <ChevronRight size={29} />
        </button>

        <div className="pagination">
          {featuredTemplates.map((template, index) => (
            <button
              key={template.tag}
              className={index === active ? "dot active" : "dot"}
              onClick={() => setActive(index)}
              aria-label={`Show ${template.tag}`}
            />
          ))}
        </div>
      </section>

      {/* Keep the two original homepage options */}
      <section className="choice-grid">
        <button className="choice-card" onClick={() => window.location.hash = "build"}>
          <span className="choice-icon"><WandSparkles size={40} /></span>
          <span className="choice-divider" />
          <span className="choice-copy"><strong>Build Your Own Design</strong></span>
          <span className="choice-arrow"><ChevronRight size={24} /></span>
        </button>

        <button className="choice-card" onClick={() =>
          document.getElementById("template-gallery")?.scrollIntoView({ behavior: "smooth" })
        }>
          <span className="choice-icon grid-icon"><LayoutGrid size={40} /></span>
          <span className="choice-divider" />
          <span className="choice-copy"><strong>Choose a Template</strong></span>
          <span className="choice-arrow"><ChevronRight size={24} /></span>
        </button>
      </section>

      {/* 10 clickable profession libraries */}
      <section className="library-section" id="profession-libraries">
        <div className="section-heading">
          <span className="section-kicker">10 PROFESSION LIBRARIES · 120 DESIGNS</span>
          <h2>Choose your <span>profession.</span></h2>
        </div>

        <div className="library-grid">
          {visibleLibraries.map(library => {
            const Icon = library.icon;

            return (
              <button
                className={`library-card ${activeLibrary?.id === library.id ? "library-card-active" : ""}`}
                key={library.id}
                onClick={() => openLibrary(library)}
                style={{ "--library-accent": library.accent }}
              >
                <span className="library-card-icon"><Icon size={28} /></span>
                <span className="library-card-copy">
                  <strong>{library.name}</strong>
                  <small>{library.description}</small>
                </span>
                <span className="library-card-count">12 <small>DESIGNS</small></span>
                <ChevronRight className="library-card-arrow" size={21} />
              </button>
            );
          })}
        </div>
      </section>

      {/* Selected library: its 12 templates */}
      <section className="profession-templates" id="profession-templates">
        {activeLibrary ? (
          <>
            <div className="profession-heading">
              <div>
                <span className="section-kicker">PROFESSION COLLECTION</span>
                <h2>{activeLibrary.name} <span>Templates</span></h2>
                <p>Choose from these 12 designs to preview their style and details.</p>
              </div>
              <button className="back-libraries" onClick={() => {
                setActiveLibrary(null);
                document.getElementById("profession-libraries")?.scrollIntoView({ behavior: "smooth" });
              }}>
                <ChevronLeft size={18} /> All Libraries
              </button>
            </div>

            <div className="profession-template-grid">
              {activeLibrary.templates.map((template, index) => (
                <button
                  className={`profession-template-card ${selectedTemplate?.id === template.id ? "is-selected" : ""}`}
                  key={template.id}
                  onClick={() => setPreviewTemplate({ ...template, libraryName: activeLibrary.name })}
                >
                  <div
                    className="template-swatch"
                    style={{
                      background: template.colors.background,
                      color: template.colors.text,
                      borderColor: template.colors.accent
                    }}
                  >
                    <div className="swatch-top">
                      <i /><i /><i />
                      <span>{template.profession}</span>
                    </div>
                    <div className="swatch-body">
                      <small>{template.style}</small>
                      <strong>{template.name}</strong>
                      <span className="swatch-lines" />
                      <span className="swatch-block" style={{ background: template.colors.accent }} />
                    </div>
                    <span className="swatch-index">{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <span className="profession-template-label">
                    <strong>{template.name}</strong>
                    <small>{template.style}</small>
                    <ChevronRight size={18} />
                  </span>

                  {selectedTemplate?.id === template.id && (
                    <span className="selected-template-tag">Selected</span>
                  )}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="library-empty-state">
            <LayoutGrid size={28} />
            <strong>Select a profession library above</strong>
            <span>Each library contains 12 individually designed template concepts.</span>
          </div>
        )}
      </section>

      {/* Template preview modal */}
      {previewTemplate && (
        <div
          className="template-modal-backdrop"
          role="presentation"
          onMouseDown={e => {
            if (e.target === e.currentTarget) setPreviewTemplate(null);
          }}
        >
          <section className="template-modal" role="dialog" aria-modal="true" aria-labelledby="template-modal-title">
            <button className="template-modal-close" onClick={() => setPreviewTemplate(null)} aria-label="Close preview">
              <X size={22} />
            </button>

            <div
              className="template-modal-preview"
              style={{
                background: previewTemplate.colors.background,
                color: previewTemplate.colors.text,
                borderColor: previewTemplate.colors.accent
              }}
            >
              <span>{previewTemplate.profession} · {previewTemplate.style}</span>
              <strong>{previewTemplate.name}</strong>
              <p>{previewTemplate.description}</p>
              <div className="modal-color-row">
                {[
                  previewTemplate.colors.background,
                  previewTemplate.colors.surface,
                  previewTemplate.colors.text,
                  previewTemplate.colors.accent
                ].map((color, index) => <i key={index} style={{ background: color }} />)}
              </div>
            </div>

            <div className="template-modal-details">
              <span className="section-kicker">{previewTemplate.libraryName}</span>
              <h2 id="template-modal-title">{previewTemplate.name}</h2>
              <p>{previewTemplate.description}</p>

              <h3>Included sections</h3>
              <div className="modal-section-list">
                {previewTemplate.sections.map(section => <span key={section}>{section}</span>)}
              </div>

              <h3>Design features</h3>
              <ul>
                {previewTemplate.features.map(feature => <li key={feature}>{feature}</li>)}
              </ul>

              <button className="use-template-button" onClick={() => {
                setSelectedTemplate(previewTemplate);
                setPreviewTemplate(null);
              }}>
                <WandSparkles size={18} /> Select This Template
              </button>
            </div>
          </section>
        </div>
      )}

      {selectedTemplate && (
        <div className="selection-strip">
          <span>
            <strong>{selectedTemplate.name}</strong> selected from {selectedTemplate.libraryName || selectedTemplate.profession}
          </span>
          <button onClick={() => setSelectedTemplate(null)}>Clear selection <X size={15} /></button>
        </div>
      )}

      {/* Existing template gallery */}
      <section className="gallery-section" id="template-gallery">
        <div className="section-heading">
          <span className="section-kicker">THE COLLECTION</span>
          <h2>Find your <span>style.</span></h2>
        </div>

        <div className="gallery-grid">
          {featuredTemplates.map((template, index) => (
            <button
              className={`gallery-card gallery-${template.background}`}
              key={template.tag}
              onClick={() => {
                setActive(index);
                document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="gallery-preview">
                <div className="preview-top"><i /><i /><i /></div>
                <div className="preview-content">
                  <span>{template.tag}</span>
                  <strong>{template.name}</strong>
                  <small>{template.role}</small>
                  <img src={template.image} alt="" />
                </div>
              </div>
              <div className="gallery-label">
                <strong>{template.tag}</strong>
                <ChevronRight size={20} />
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="steps-section" id="how-it-works">
        <div className="section-heading">
          <span className="section-kicker">YOUR PORTFOLIO, YOUR WAY</span>
          <h2>Three steps. <span>One great portfolio.</span></h2>
        </div>
        <div className="steps-grid">
          <article className="step-card">
            <span className="step-number">01</span>
            <span className="step-icon"><LayoutGrid size={30} /></span>
            <h3>Choose</h3><p>Start with a template or a blank canvas.</p>
          </article>
          <article className="step-card">
            <span className="step-number">02</span>
            <span className="step-icon"><Palette size={30} /></span>
            <h3>Customize</h3><p>Make the layout, colors and content yours.</p>
          </article>
          <article className="step-card">
            <span className="step-number">03</span>
            <span className="step-icon"><Rocket size={30} /></span>
            <h3>Publish</h3><p>Share your portfolio with the world.</p>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#">
          <span className="brand-mark">P</span>
          <span>PORTFOLIO <b>STUDIO</b></span>
        </a>
        <span className="footer-line" />
        <span className="footer-note">Create. Customize. Showcase.</span>
        <a className="back-top" href="#">Back to top ↑</a>
      </footer>
    </main>
  );
}
