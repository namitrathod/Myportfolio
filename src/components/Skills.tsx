import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData, SkillGroup } from '../data/portfolio.ts';
import Reveal from './Reveal.tsx';

const SkillGroupBox: React.FC<{ group: SkillGroup; index: number }> = ({ group, index }) => (
  <Reveal delay={index * 0.08}>
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="panel p-6 h-full"
    >
      <p className="section-label mb-4">{group.category}</p>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ y: -2, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="chip text-ink-secondary cursor-default hover:border-accent/30 hover:text-accent hover:bg-accent/5"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </Reveal>
);

const Skills: React.FC = () => (
  <section id="skills" className="section-pad">
    <div className="page-container">
      <Reveal>
        <p className="section-label mb-4">Skills</p>
        <h2 className="heading-lg max-w-lg mb-4">The stack I ship with.</h2>
        <p className="text-ink-muted max-w-md mb-14">Curated. Not exhaustive.</p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portfolioData.skillGroups.map((group, i) => (
          <SkillGroupBox key={group.category} group={group} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
