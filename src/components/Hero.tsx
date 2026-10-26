import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';
import Typewriter from './Typewriter.tsx';
import Magnetic from './Magnetic.tsx';

const ROLES = ['Software Engineer, Applied AI', 'Software Engineer', 'AI Engineer'];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any,
  },
};

const Hero: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Full-bleed atmospheric plane */}
      <div className="absolute inset-0 hero-mesh md:animate-mesh" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 40%, black, transparent)',
        }}
      />

      <div className="page-container relative z-10 pt-20 pb-16">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl">
          <motion.p variants={itemVariants} className="section-label mb-8">
            {personal.location}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-display text-ink mb-6"
          >
            {personal.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-display text-xl sm:text-2xl md:text-3xl text-ink-secondary font-medium tracking-tight mb-6 min-h-[2.5rem]"
          >
            <Typewriter phrases={ROLES} className="text-ink" />
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[17px] sm:text-lg text-ink-muted max-w-xl leading-relaxed mb-10"
          >
            {personal.sublines[0]}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Magnetic>
              <a href={personal.resumeUrl} download="Namit_Rathod_Resume.pdf" className="btn-accent">
                <FileText size={15} strokeWidth={2} />
                Download Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Linkedin size={15} strokeWidth={2} />
                LinkedIn
              </a>
            </Magnetic>
            <Magnetic>
              <button type="button" onClick={copyEmail} className="btn-ghost">
                {copied ? <Check size={15} strokeWidth={2} className="text-accent" /> : <Mail size={15} strokeWidth={2} />}
                {copied ? 'Copied' : 'Email'}
              </button>
            </Magnetic>
            <Magnetic>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Github size={15} strokeWidth={2} />
                GitHub
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={() => scrollTo('#about')}
          className="mt-24 flex items-center gap-2 text-ink-faint text-[13px] tracking-wide group"
          aria-label="Scroll to about"
        >
          <ArrowDown size={14} strokeWidth={1.5} className="animate-bob group-hover:text-accent transition-colors" />
          <span className="group-hover:text-accent transition-colors">Scroll</span>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
