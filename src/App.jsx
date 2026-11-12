import { useMemo, useState } from "react";
import {
  Search, Sun, Moon, Menu, ChevronLeft, ChevronRight,
  WandSparkles, LayoutGrid, X
} from "lucide-react";

const templates = [
  {
    tag: "Developer Portfolio",
    headline: <>Build. Create.<br /><span>Inspire.</span></>,
    description: "Turning ideas into impactful digital experiences.",
    action: "Explore My Work",
    name: "Alex Morgan",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    background: "one"
  },
  {
    tag: "Creative Portfolio",
    headline: <>Make it<br /><span>Remarkable.</span></>,
    description: "A creative space for bold ideas and thoughtful design.",
    action: "View Projects",
    name: "Jordan Lee",
    role: "Visual Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    background: "two"
  },
  {
    tag: "Minimal Portfolio",
    headline: <>Less noise.<br /><span>More impact.</span></>,
    description: "Simple, intentional work made to leave a lasting impression.",
    action: "Discover More",
    name: "Taylor Reed",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    background: "three"
  },
  {
    tag: "Professional Portfolio",
    headline: <>Ideas into<br /><span>Action.</span></>,
    description: "Building meaningful products through strategy and craft.",
    action: "See My Work",
    name: "Sam Rivera",
    role: "Product Strategist",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
    background: "four"
  }
];

export default function App() {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const current = templates[active];
  const filtered = useMemo(
    () => templates.filter((item) => `${item.tag} ${item.role} ${item.name}`.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const move = (direction) => setActive((value) => (value + direction + templates.length) % templates.length);

  return (
    <main className={dark ? "site dark" : "site light"}>
      <header className="topbar">
        <a className="brand" href="#" aria-label="Portfolio Studio home">
          <span className="brand-mark">P</span>
          <span>PORTFOLIO <b>STUDIO</b></span>
        </a>

        <label className="search-box">
          <Search size={22} strokeWidth={2.3} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search templates..."
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
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

        {menuOpen && (
          <div className="menu-popover">
            <button onClick={() => { setMenuOpen(false); setQuery(""); }}>Home</button>
            <button onClick={() => { setMenuOpen(false); setActive(0); }}>Templates</button>
            <button onClick={() => setMenuOpen(false)}>Build Your Own Design</button>
          </div>
        )}
      </header>

      <section className="showcase" aria-label="Featured portfolio templates">
        {query && (
          <div className="search-status">
            {filtered.length ? `${filtered.length} matching template${filtered.length === 1 ? "" : "s"}` : "No matching templates"}
          </div>
        )}

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
              <span>Home</span><span>About</span><span>Projects</span><span>Contact</span><i><Moon size={14} /></i>
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

        <div className="pagination" aria-label="Choose featured template">
          {templates.map((template, index) => (
            <button
              key={template.tag}
              className={index === active ? "dot active" : "dot"}
              onClick={() => setActive(index)}
              aria-label={`Show ${template.tag}`}
            />
          ))}
        </div>
      </section>

      <section className="choice-grid">
        <button className="choice-card" onClick={() => window.location.hash = "build"}>
          <span className="choice-icon"><WandSparkles size={53} strokeWidth={1.8} /></span>
          <span className="choice-divider" />
          <span className="choice-copy">
            <strong>Build Your Own Design</strong>
            <small>Create a unique portfolio with our powerful builder.</small>
          </span>
          <span className="choice-arrow"><ChevronRight size={27} /></span>
        </button>

        <button className="choice-card" onClick={() => window.location.hash = "templates"}>
          <span className="choice-icon grid-icon"><LayoutGrid size={53} strokeWidth={1.8} /></span>
          <span className="choice-divider" />
          <span className="choice-copy">
            <strong>Choose a Template</strong>
            <small>Pick from stunning ready-to-use templates.</small>
          </span>
          <span className="choice-arrow"><ChevronRight size={27} /></span>
        </button>
      </section>
    </main>
  );
}