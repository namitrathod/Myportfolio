import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio.ts';

// ─── Navigation links ──────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeSection, setActive]    = useState('');

  // Add shadow when page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is in view for active link highlight
  useEffect(() => {
    const sectionIds = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200
        bg-canvas border-b
        ${scrolled ? 'border-border shadow-sm' : 'border-transparent'}`}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-14">

          {/* ── Logo / Initials ── */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Home"
          >
            <span className="w-7 h-7 rounded bg-ink text-canvas text-xs font-bold flex items-center justify-center
                             group-hover:bg-accent transition-colors duration-200">
              {portfolioData.personal.initials}
            </span>
            <span className="text-sm font-medium text-ink-secondary hidden sm:block">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative px-3 py-1.5 text-sm rounded transition-colors duration-150
                    ${isActive
                      ? 'text-accent font-medium'
                      : 'text-ink-muted hover:text-ink'
                    }`}
                >
                  {link.label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-copy-email"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(portfolioData.personal.email);
                  const btn = document.getElementById("nav-copy-email");
                  if (btn) {
                    const originalText = btn.innerHTML;
                    btn.innerHTML = `<span class="Lucide LucideCheck">✓</span> Copied!`;
                    btn.classList.add("text-canvas"); // keep contrast
                    setTimeout(() => {
                      btn.innerHTML = originalText;
                    }, 2000);
                  }
                } catch {
                  window.location.href = `mailto:${portfolioData.personal.email}`;
                }
              }}
              className="btn-accent text-xs px-3 py-1.5"
            >
              Copy Email
            </button>
          </div>

          {/* ── Mobile burger ── */}
          <button
            className="md:hidden p-1.5 rounded text-ink-muted hover:text-ink"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              ) : (
                <>
                  <line x1="3" y1="6"  x2="17" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-canvas">
          <nav className="page-container py-3 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`px-3 py-2 text-sm rounded transition-colors
                  ${activeSection === link.href.slice(1)
                    ? 'text-accent font-medium bg-accent/5'
                    : 'text-ink-secondary hover:text-ink hover:bg-canvas-muted'
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="mt-2 btn-accent text-xs self-start"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
