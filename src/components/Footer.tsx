import React from 'react';
import { portfolioData } from '../data/portfolio.ts';

// ─── Footer ────────────────────────────────────────────────────────────────
const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-border bg-canvas-soft">
      <div className="page-container py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* Left: name + year */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded bg-ink text-canvas text-[10px] font-bold flex items-center justify-center">
              {personal.initials}
            </span>
            <p className="text-xs text-ink-faint">
              {personal.name} · {year}
            </p>
          </div>

          {/* Right: quick links */}
          <div className="flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-faint hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-faint hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-xs text-ink-faint hover:text-ink transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
