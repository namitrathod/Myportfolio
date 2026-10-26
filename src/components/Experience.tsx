import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, Experience as ExperienceData } from '../data/portfolio.ts';
import Reveal from './Reveal.tsx';

interface ExpEntryProps {
  exp: ExperienceData;
  isLast: boolean;
  index: number;
}

const ExpEntry: React.FC<ExpEntryProps> = ({ exp, isLast, index }) => (
  <Reveal delay={Math.min(index * 0.06, 0.18)} className={`relative pl-0 sm:pl-10 ${!isLast ? 'pb-12 mb-12 border-b border-border/60' : ''}`}>
    <span
      className="hidden sm:block absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-[6px] ring-canvas"
      aria-hidden
    />

    <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-10">
      <div>
        <p className="font-mono text-[12px] text-ink-faint">{exp.period}</p>
        <p className="text-[13px] text-ink-muted mt-1">{exp.location}</p>
      </div>

      <div>
        <p className="font-display text-lg font-semibold text-ink tracking-tight">{exp.role}</p>
        <p className="text-accent font-medium mt-0.5">{exp.company}</p>

        <ul className="mt-5 space-y-3">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-[15px] text-ink-secondary leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-border-dark shrink-0" aria-hidden />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  </Reveal>
);

const Experience: React.FC = () => (
  <section id="experience" className="section-pad bg-white/50">
    <div className="page-container">
      <Reveal>
        <p className="section-label mb-4">Experience</p>
        <h2 className="heading-lg max-w-xl mb-16">
          Roles that shaped the work.
        </h2>
      </Reveal>

      <div className="relative">
        {/* Static spine — no scroll-linked spring (that caused scroll jank) */}
        <div className="hidden sm:block absolute left-[4px] top-2 bottom-2 w-px bg-border/80" aria-hidden />
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden sm:block absolute left-[4px] top-2 bottom-2 w-px bg-accent origin-top"
          aria-hidden
        />

        <div>
          {portfolioData.experience.map((exp, i) => (
            <ExpEntry
              key={exp.id}
              exp={exp}
              isLast={i === portfolioData.experience.length - 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
