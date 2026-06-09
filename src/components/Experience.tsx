import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { portfolioData, Experience as ExperienceData } from '../data/portfolio.ts';
import CountUp from './CountUp.tsx';

// Headline metrics, counted up when scrolled into view
const STATS = [
  { to: 3,      suffix: '+',  label: 'Years Experience' },
  { to: 1000,   suffix: '+',  label: 'Concurrent Users' },
  { to: 100000, suffix: '+',  label: 'Tasks Processed' },
  { to: 80,     suffix: '%',  label: 'Payload Reduced' },
];

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
    className={`relative grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 ${!isLast ? 'pb-10 border-b border-border' : ''}`}
  >
    {/* ── Timeline node (aligns to the drawn spine) ── */}
    <motion.span
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: index * 0.07 + 0.1, type: 'spring', stiffness: 400, damping: 16 }}
      viewport={{ once: true }}
      className="hidden sm:block absolute -left-[39px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-canvas"
      aria-hidden
    />

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
const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 60%'],
  });
  const spineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
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

          {/* ── Content col ── */}
          <div>
            {/* Count-up stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 pb-10 border-b border-border">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-semibold text-accent tracking-tight tabular-nums">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="text-[11px] text-ink-faint font-mono tracking-wide uppercase mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Timeline + entries ── */}
            <div ref={timelineRef} className="relative sm:pl-8">
              {/* Static track */}
              <div className="hidden sm:block absolute left-0 top-1.5 bottom-1.5 w-px bg-border" aria-hidden />
              {/* Drawn progress spine */}
              <motion.div
                style={{ scaleY: spineScale }}
                className="hidden sm:block absolute left-0 top-1.5 bottom-1.5 w-px bg-accent origin-top"
                aria-hidden
              />

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
        </div>
      </div>
    </section>
  );
};

export default Experience;
