import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, SkillGroup } from '../data/portfolio.ts';

// ─── Single skill group ────────────────────────────────────────────────────
interface SkillGroupBoxProps {
  group: SkillGroup;
  index: number;
}

const SkillGroupBox: React.FC<SkillGroupBoxProps> = ({ group, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.06 }}
    viewport={{ once: true }}
    className="panel p-5"
  >
    {/* Category label */}
    <p className="text-xs font-mono font-medium tracking-widest uppercase text-ink-faint mb-3">
      {group.category}
    </p>

    {/* Skill pills */}
    <div className="flex flex-wrap gap-2">
      {group.skills.map(skill => (
        <span key={skill} className="chip text-ink-secondary">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

// ─── Skills Section ────────────────────────────────────────────────────────
const Skills: React.FC = () => (
  <section id="skills" className="section-pad border-t border-border">
    <div className="page-container">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">

        {/* ── Label col ── */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Skills</p>
          <p className="text-xs text-ink-faint mt-2 leading-relaxed">
            Curated. Not exhaustive.
          </p>
        </motion.div>

        {/* ── Skill groups grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolioData.skillGroups.map((group, i) => (
            <SkillGroupBox key={group.category} group={group} index={i} />
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default Skills;
