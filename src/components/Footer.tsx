import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio.ts';
import Reveal from './Reveal.tsx';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-border/60 bg-canvas">
      <Reveal>
        <div className="page-container py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <motion.span
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400, damping: 14 }}
                className="font-display text-sm font-semibold tracking-tight text-ink"
              >
                {personal.initials}
              </motion.span>
              <p className="text-[13px] text-ink-faint">
                {personal.name} · {year}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="link-underline text-[13px] text-ink-faint hover:text-ink transition-colors">
                GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-[13px] text-ink-faint hover:text-ink transition-colors">
                LinkedIn
              </a>
              <a href={`mailto:${personal.email}`} className="link-underline text-[13px] text-ink-faint hover:text-ink transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
