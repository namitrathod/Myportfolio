import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';
import Typewriter from './Typewriter.tsx';
import Magnetic from './Magnetic.tsx';

// Roles cycled through by the hero typewriter
const ROLES = [
  'AI/ML Engineer',
  'Machine Learning Engineer',
  'AI Engineer',
  'Software Engineer'
];

// ─── Stagger container + child variants ────────────────────────────────────
// Using Variants avoids the TS issue with spreading inline transition objects.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' } as any,
  },
};

const Hero: React.FC = () => {
  const { personal, credibilityChips } = portfolioData;

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-panel-tint/70 blur-3xl animate-float-slow" />
        {/* Faint dotted grid for texture */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #C4BFB8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 35%, black 0%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 35%, black 0%, transparent 75%)',
          }}
        />
      </div>

      <div className="page-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── Top eyebrow ── */}
          <motion.p
            variants={itemVariants}
            className="section-label mb-6"
          >
            {personal.role} · {personal.location}
          </motion.p>

          {/* ── Name ── */}
          <motion.h1
            variants={itemVariants}
            className="text-gradient-accent text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-5 pb-1"
            style={{ letterSpacing: '-0.03em' }}
          >
            {personal.name}
          </motion.h1>

          {/* ── Rotating role (typewriter) ── */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-2xl font-medium text-ink-secondary mb-5 h-8 flex items-center"
          >
            <span className="text-accent font-mono mr-2">{'>'}</span>
            <Typewriter phrases={ROLES} className="text-ink" />
          </motion.p>

          {/* ── Tagline ── */}
          {personal.tagline && (
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-ink-secondary max-w-2xl mb-3 leading-snug"
            >
              {personal.tagline}
            </motion.p>
          )}

          {/* ── Supporting lines ── */}
          <motion.div
            variants={itemVariants}
            className="text-sm text-ink-muted max-w-xl leading-relaxed mb-9 space-y-0.5"
          >
            {personal.sublines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </motion.div>

          {/* ── CTA Buttons ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-8"
          >
            {/* Primary: Resume */}
            <Magnetic>
              <motion.a
                whileTap={{ scale: 0.96 }}
                href={personal.resumeUrl}
                download="Namit_Rathod_Resume.pdf"
                className="btn-accent gap-2 hover:shadow-card-hover"
                id="hero-resume-btn"
              >
                <FileText size={14} strokeWidth={2} />
                Download Resume
              </motion.a>
            </Magnetic>

            {/* Ghost: LinkedIn */}
            <Magnetic>
              <motion.a
                whileTap={{ scale: 0.96 }}
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                id="hero-linkedin-btn"
              >
                <Linkedin size={14} strokeWidth={2} />
                LinkedIn
              </motion.a>
            </Magnetic>

            {/* Copy Email Button */}
            <Magnetic>
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(personal.email);
                    // Quick visual feedback
                    const btn = document.getElementById("hero-email-btn");
                    if (btn) {
                      const originalText = btn.innerHTML;
                      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent Lucide LucideCheck"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
                      btn.classList.add("text-accent");
                      setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.classList.remove("text-accent");
                      }, 2000);
                    }
                  } catch (err) {
                    // Fallback
                    window.location.href = `mailto:${personal.email}`;
                  }
                }}
                className="btn-ghost"
                id="hero-email-btn"
              >
                <Mail size={14} strokeWidth={2} />
                Copy Email
              </motion.button>
            </Magnetic>

            {/* Ghost: GitHub */}
            <Magnetic>
              <motion.a
                whileTap={{ scale: 0.96 }}
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                id="hero-github-btn"
              >
                <Github size={14} strokeWidth={2} />
                GitHub
              </motion.a>
            </Magnetic>
          </motion.div>

          {/* ── Credibility chips ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2"
          >
            {credibilityChips.map((chip) => (
              <span
                key={chip}
                className={chip === "Open to Relocation" ? "chip-accent" : "chip"}
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Scroll hint (separate animation, delayed) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-20 flex items-center gap-2 text-ink-faint text-xs cursor-pointer group"
          onClick={() => scrollTo('#about')}
          role="button"
          tabIndex={0}
          aria-label="Scroll to about"
        >
          <ArrowDown
            size={13}
            strokeWidth={1.5}
            className="animate-bob group-hover:text-accent transition-colors duration-200"
          />
          <span className="group-hover:text-accent transition-colors duration-200">Keep reading</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;