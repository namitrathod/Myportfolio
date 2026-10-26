import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio.ts';
import Reveal from './Reveal.tsx';

const About: React.FC = () => {
  const { personal, education } = portfolioData;

  const tracks = [
    {
      label: 'AI / Machine Learning',
      points: [
        'Python · PyTorch · TensorFlow · Hugging Face',
        'QLoRA · PEFT · model fine-tuning',
        'Validation · guardrails · structured outputs',
        'Clinical NLP · ICD-10 classification',
      ],
    },
    {
      label: 'Generative AI',
      points: [
        'LLMs · RAG · GraphRAG · LangChain',
        'Agentic and human-in-the-loop workflows',
        'Context assembly from EHR and patient data',
        'Grounded clinical content generation',
      ],
    },
    {
      label: 'Data & MLOps',
      points: [
        'PySpark · Kafka · Airflow · ETL pipelines',
        'FastAPI · Docker · Kubernetes · CI/CD',
        'Monitored production AI services',
        'AWS · Azure · scalable data infrastructure',
      ],
    },
  ];

  const focusSkills = [
    'Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain',
    'RAG', 'GraphRAG', 'Agentic AI', 'QLoRA', 'PEFT', 'FastAPI',
    'PySpark', 'Kafka', 'Airflow', 'Docker', 'Kubernetes', 'MLOps',
  ];

  const quickFacts = [
    { label: 'Status', value: 'Work authorized · Open to opportunities' },
    { label: 'Focus', value: 'Software Engineer · Applied AI' },
    { label: 'Education', value: 'M.S. Computer Science, UHCL' },
    { label: 'Location', value: 'USA · Open to relocate' },
  ];

  return (
    <section id="about" className="section-pad">
      <div className="page-container">
        <Reveal>
          <p className="section-label mb-4">About</p>
          <h2 className="heading-lg max-w-2xl mb-14">
            Building AI that holds up in production.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-20">
          <Reveal delay={0.08} className="space-y-5 text-ink-secondary text-[17px] leading-relaxed">
            {personal.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <div className="panel p-6 lg:p-7">
              <p className="section-label mb-3">Education</p>
              <p className="font-display text-lg font-semibold text-ink tracking-tight">{education.degree}</p>
              <p className="text-accent font-medium mt-1">{education.institution}</p>
              <p className="text-sm text-ink-muted mt-0.5">{education.period}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <p className="section-label mb-4">Core focus</p>
          <div className="flex flex-wrap gap-2">
            {focusSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="chip-accent cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tracks.map((track, i) => (
            <Reveal key={track.label} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="panel p-6 h-full"
              >
                <p className="font-display text-[15px] font-semibold text-ink mb-4">{track.label}</p>
                <ul className="space-y-2.5">
                  {track.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[13px] text-ink-secondary leading-snug">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 pt-10 border-t border-border/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map(({ label, value }) => (
            <div key={label}>
              <p className="section-label mb-2 !normal-case !tracking-wide">{label}</p>
              <p className="text-[15px] text-ink font-medium leading-snug">{value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default About;
