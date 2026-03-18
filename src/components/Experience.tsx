import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, Experience as ExperienceData } from '../data/portfolio.ts';

// ─── Individual experience entry ───────────────────────────────────────────
interface ExpEntryProps {
  exp: ExperienceData;
  isLast: boolean;
  index: number;
}

const ExpEntry: React.FC<ExpEntryProps> = ({ exp, isLast, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.07 }}
    viewport={{ once: true }}
    className={`grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 ${!isLast ? 'pb-10 border-b border-border' : ''}`}
  >
    {/* ── Left: meta ── */}
    <div className="sm:pt-0.5">
      <p className="text-xs font-mono text-ink-faint leading-relaxed">{exp.period}</p>
      <p className="text-xs text-ink-faint mt-0.5">{exp.location}</p>
    </div>

    {/* ── Right: content ── */}
    <div>
      {/* Role + Company */}
      <div className="mb-3">
        <p className="text-sm font-semibold text-ink leading-tight">{exp.role}</p>
        <p className="text-sm text-accent font-medium mt-0.5">{exp.company}</p>
      </div>

      {/* Impact bullets */}
      <ul className="space-y-2 mb-4">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2.5 text-[14px] text-ink-secondary leading-relaxed">
            <span className="mt-[7px] w-1 h-1 rounded-full bg-border-dark shrink-0" aria-hidden />
            {bullet}
          </li>
        ))}
      </ul>

      {/* Stack chips */}
      <div className="flex flex-wrap gap-1.5">
        {exp.stack.map(tech => (
          <span key={tech} className="chip">{tech}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

// ─── Experience Section ─────────────────────────────────────────────────────
const Experience: React.FC = () => (
  <section id="experience" className="section-pad border-t border-border">
    <div className="page-container">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">

        {/* ── Label col ── */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Experience</p>
        </motion.div>

        {/* ── Entries col ── */}
        <div className="space-y-10">
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
