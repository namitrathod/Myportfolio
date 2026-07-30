import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio.ts';

// ─── About Section ─────────────────────────────────────────────────────────
const About: React.FC = () => {
  const { personal, education } = portfolioData;

  // What each type of recruiter needs to see quickly
  const tracks = [
    {
      label: 'Machine Learning',
      color: 'text-accent border-accent/20 bg-accent/5',
      dot: 'bg-accent',
      points: [
        'Python · PyTorch · Scikit-Learn · XGBoost',
        'Feature engineering & cross-validation strategies',
        'NumPy · Pandas · data preprocessing pipelines',
        'Predictive modeling & statistical data analysis'
      ],
    },
    {
      label: 'Generative AI',
      color: 'text-[#c27c3e] border-[#c27c3e]/20 bg-[#c27c3e]/5',
      dot: 'bg-[#c27c3e]',
      points: [
        'GPT-4o · Gemini 2.5 · LangChain · OpenAI APIs',
        'RAG pipelines & FAISS/ChromaDB vector search',
        'Prompt engineering & structured JSON outputs',
        'Semantic retrieval & context-aware document QA'
      ],
    },
    {
      label: 'MLOps & Systems',
      color: 'text-[#5b6fa6] border-[#5b6fa6]/20 bg-[#5b6fa6]/5',
      dot: 'bg-[#5b6fa6]',
      points: [
        'FastAPI · Docker · Kubernetes · PostgreSQL · Redis',
        'Model training, deployment & monitoring pipelines',
        'Inference optimization & response latency reduction',
        'GitHub Actions CI/CD & cloud infrastructure (AWS/Azure)'
      ],
    },
  ];

  // Headline tools the user is actively working with
  const focusSkills = [
    'Python', 'PyTorch', 'Scikit-Learn', 'XGBoost', 'LangChain',
    'RAG', 'OpenAI API', 'Gemini 2.5', 'FAISS', 'ChromaDB',
    'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'MLOps'
  ];

  const quickFacts = [
    { label: 'Status',        value: 'Open to work · Seeking AI/ML Engineering roles' },
    { label: 'Focus',         value: 'Machine Learning · Generative AI · MLOps' },
    { label: 'Education',     value: 'M.S. Computer Science, University of Houston' },
    { label: 'Available',     value: 'Full-time, globally' },
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

            {/* ── Core focus chips ── */}
            <div className="mt-6">
              <p className="text-xs font-mono tracking-widest uppercase text-ink-faint mb-3">
                Core Focus
              </p>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.03 } },
                }}
              >
                {focusSkills.map(skill => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    className="chip-accent cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* ── 3-Track strength strip ── */}
            <motion.div
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {tracks.map(track => (
                <motion.div
                  key={track.label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  whileHover={{ y: -4 }}
                  className={`rounded-lg border p-4 transition-shadow hover:shadow-card-hover ${track.color}`}
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
                </motion.div>
              ))}
            </motion.div>

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
            <div className="mt-6 pt-6 border-t border-border grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
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
