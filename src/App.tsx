import { useState } from 'react'
import {
  ArrowRight,
  Brain,
  Check,
  CircleDot,
  Eye,
  Hand,
  Menu,
  MousePointer2,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const modes = [
  {
    id: 'focus',
    label: 'Focus',
    icon: Brain,
    color: '#d8ff5f',
    title: 'Less noise. More momentum.',
    text: 'Arigami breaks dense pages into calm, readable sections with a reading line, clear progress, and nothing important removed.',
  },
  {
    id: 'motor',
    label: 'Motor',
    icon: Hand,
    color: '#ff9cc8',
    title: 'Made for movement that’s yours.',
    text: 'Navigate with head movement, a deliberate wink, or dwell. Big targets and simple steps replace precision pointing.',
  },
  {
    id: 'reader',
    label: 'Screen reader',
    icon: Eye,
    color: '#91c8ff',
    title: 'Structure you can hear.',
    text: 'Arigami rebuilds real landmarks, sensible headings, descriptive links, and properly labelled tables and images.',
  },
]

function Logo() {
  return (
    <a href="#" className="logo" aria-label="Arigami home">
      <span className="logo-mark" aria-hidden="true">A</span>
      <span>Arigami</span>
    </a>
  )
}

function ProductPreview({ active }: { active: number }) {
  const mode = modes[active]
  return (
    <div className="preview-wrap">
      <div className="browser">
        <div className="browser-top">
          <div className="traffic"><i /><i /><i /></div>
          <div className="address"><ShieldCheck size={13} /> example.com/article</div>
          <div className="browser-dot" />
        </div>
        <div className="site-nav">
          <div className="fake-brand">JOURNAL</div>
          <div className="fake-links"><span>Stories</span><span>Ideas</span><span>About</span></div>
        </div>
        <div className="page-content">
          <div className="page-copy">
            <span className="eyebrow">SCIENCE · 8 MIN READ</span>
            <h3>How small habits shape the way we think</h3>
            <p>New research reveals how everyday choices can change our attention, memory and sense of time.</p>
            <div className="text-lines"><i /><i /><i /><i /></div>
          </div>
          <div className="page-art"><span /><span /><span /></div>
        </div>
        <div className="access-panel" style={{ '--mode': mode.color } as React.CSSProperties}>
          <div className="access-bar">
            <strong><span className="mini-a">A</span> Arigami</strong>
            <span className="active-mode">{mode.label}</span>
            <X size={14} />
          </div>
          <div className="rebuilt">
            <span className="mode-pill"><mode.icon size={13} /> {mode.label} mode</span>
            <h4>{mode.title}</h4>
            <p>{mode.text}</p>
            {active === 0 && <div className="progress"><span /><small>1 of 5 sections</small></div>}
            {active === 1 && <div className="tile-row"><b>Read article</b><b>Explore topics</b></div>}
            {active === 2 && <div className="reader-list"><span><Check /> Clear heading order</span><span><Check /> Descriptive links</span></div>}
          </div>
        </div>
      </div>
      <div className="privacy-note"><ShieldCheck size={16} /> Your page stays in your browser</div>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <nav className="nav shell">
        <Logo />
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#modes" onClick={() => setMenuOpen(false)}>Arigami modes</a>
          <a href="#privacy" onClick={() => setMenuOpen(false)}>Privacy</a>
        </div>
        <a className="nav-cta" href="#install"><CircleDot size={16} /> Add to Chrome</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="kicker"><Sparkles size={14} /> The web, rebuilt around you</div>
          <h1>Every page.<br /><em>Actually accessible.</em></h1>
          <p className="lede">Arigami is a Chrome extension that reshapes any website in place—making it calmer, easier to control, and ready for screen readers.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#install"><CircleDot size={19} /> Add to Chrome <ArrowRight size={18} /></a>
            <a className="text-button" href="#how"><Play size={16} fill="currentColor" /> See how it works</a>
          </div>
          <p className="micro"><Check size={14} /> Free prototype &nbsp; <Check size={14} /> No page data sold &nbsp; <Check size={14} /> Close anytime</p>
        </div>
        <ProductPreview active={active} />
      </section>

      <section className="trust-strip">
        <div className="shell trust-inner">
          <span>BUILT FOR</span>
          <strong>ADHD &amp; focus</strong><i />
          <strong>Motor impairment</strong><i />
          <strong>Blind &amp; low vision</strong>
        </div>
      </section>

      <section className="how shell" id="how">
        <div className="section-heading">
          <span className="section-number">01</span>
          <div><p>HOW IT WORKS</p><h2>One click. A page that fits.</h2></div>
        </div>
        <div className="steps">
          <article><span>1</span><MousePointer2 /><h3>Open any page</h3><p>Browse as you normally do. Arigami works on the page you’re already viewing.</p></article>
          <article><span>2</span><Sparkles /><h3>Choose your mode</h3><p>Pick Focus, Motor, or Screen reader. Arigami reorganises the page in place.</p></article>
          <article><span>3</span><Check /><h3>Keep everything</h3><p>Links, forms, tables, and content stay connected to the original website.</p></article>
        </div>
      </section>

      <section className="modes-section" id="modes">
        <div className="shell modes-grid">
          <div className="mode-copy">
            <span className="section-number">02</span>
            <p className="section-label">THREE WAYS IN</p>
            <h2>Different needs.<br />Same whole web.</h2>
            <p>Accessibility isn’t one setting. Arigami gives each person a purpose-built way to read, move, and act online.</p>
            <div className="mode-tabs">
              {modes.map((mode, index) => (
                <button key={mode.id} className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
                  <span style={{ background: mode.color }}><mode.icon size={20} /></span>
                  <b>{mode.label}</b>
                  <ArrowRight size={18} />
                </button>
              ))}
            </div>
          </div>
          <ProductPreview active={active} />
        </div>
      </section>

      <section className="privacy shell" id="privacy">
        <div className="privacy-card">
          <div className="shield"><ShieldCheck /></div>
          <div>
            <p className="section-label">PRIVACY BY DESIGN</p>
            <h2>Your data isn’t the product.</h2>
          </div>
          <div className="privacy-points">
            <p><Check /> Passwords and form values are never sent to AI.</p>
            <p><Check /> Camera images never leave your device.</p>
            <p><Check /> AI features only run after you consent.</p>
          </div>
        </div>
      </section>

      <section className="final-cta shell" id="install">
        <div className="cta-mark">A</div>
        <p>YOUR WEB. YOUR WAY.</p>
        <h2>Make the web<br />work for you.</h2>
        <a className="primary-button light" href="#" onClick={(e) => e.preventDefault()}><CircleDot size={20} /> Add Arigami to Chrome <ArrowRight size={18} /></a>
        <small>Prototype for Chrome and Microsoft Edge</small>
      </section>

      <footer className="shell">
        <Logo />
        <p>Built for a web that includes everyone.</p>
        <span>© 2026 Arigami</span>
      </footer>
    </main>
  )
}
