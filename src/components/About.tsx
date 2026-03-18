import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio.ts';

// ─── About Section ─────────────────────────────────────────────────────────
const About: React.FC = () => {
  const { personal, education } = portfolioData;

  // What each type of recruiter needs to see quickly
  const tracks = [
    {
      label: 'Frontend',
      color: 'text-accent border-accent/20 bg-accent/5',
      dot: 'bg-accent',
      points: ['React · Next.js · Angular · TypeScript', 'State management at scale (Redux, Zustand, Context)', 'Component perf: memoization, Lighthouse, Web Vitals', '1,000+ concurrent users — zero UI lag'],
    },
    {
      label: 'Backend',
      color: 'text-[#c27c3e] border-[#c27c3e]/20 bg-[#c27c3e]/5',
      dot: 'bg-[#c27c3e]',
      points: ['FastAPI · Node.js · Java Spring Boot', 'PostgreSQL · Redis · MongoDB · AWS', 'OAuth 2.0 · JWT · async task pipelines', 'API design, query optimization, secure auth'],
    },
    {
      label: 'Full-Stack',
      color: 'text-[#5b6fa6] border-[#5b6fa6]/20 bg-[#5b6fa6]/5',
      dot: 'bg-[#5b6fa6]',
      points: ['End-to-end ownership: API → UI → telemetry', '3+ years in production SaaS environments', 'Cross-functional: product, design, backend teams', 'CI/CD · Azure · Docker · GitHub Actions'],
    },
  ];

  const quickFacts = [
    { label: 'Currently at',  value: 'ScriptChain Health — SWE Intern' },
    { label: 'Previously',    value: 'Cognizant, 2.5+ years' },
    { label: 'Location',      value: personal.location },
    { label: 'Available',     value: 'Full-time, May 2026' },
  ];

  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">

          {/* ── Left label col ── */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="section-label">About</p>
          </motion.div>

          {/* ── Right content col ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            {/* Paragraphs */}
            <div className="space-y-4 text-ink-secondary leading-relaxed text-[15px]">
              {personal.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* ── 3-Track strength strip ── */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {tracks.map(track => (
                <div
                  key={track.label}
                  className={`rounded-lg border p-4 ${track.color}`}
                >
                  <p className="text-[11px] font-mono tracking-widest uppercase font-semibold mb-3">
                    {track.label}
                  </p>
                  <ul className="space-y-1.5">
                    {track.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2 text-[12px] leading-snug text-ink-secondary">
                        <span className={`mt-[5px] w-1 h-1 rounded-full shrink-0 ${track.dot}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education callout strip */}
            <div className="mt-6 p-4 rounded-lg border border-accent/15 bg-panel-tint">
              <p className="text-xs font-mono tracking-wide uppercase text-ink-faint mb-1">
                Education
              </p>
              <p className="text-sm font-semibold text-ink">{education.degree}</p>
              <p className="text-sm text-accent font-medium">{education.institution} · {education.period}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {education.coursework.map(c => (
                  <span key={c} className="chip-accent text-xs">{c}</span>
                ))}
              </div>
            </div>

            {/* Quick facts strip */}
            <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6">
              {quickFacts.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-ink-faint mb-0.5 font-mono tracking-wide uppercase">{label}</p>
                  <p className="text-sm text-ink font-medium leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
