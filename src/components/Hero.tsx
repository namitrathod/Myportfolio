import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

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
      className="min-h-screen flex flex-col justify-center pt-14"
    >
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
            Software Engineer · {personal.location}
          </motion.p>

          {/* ── Name ── */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tight leading-tight mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            {personal.name}
          </motion.h1>

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
            <a
              href={personal.resumeUrl}
              download="Namit_Rathod_Resume.pdf"
              className="btn-accent gap-2"
              id="hero-resume-btn"
            >
              <FileText size={14} strokeWidth={2} />
              Download Resume
            </a>

            {/* Ghost: LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              id="hero-linkedin-btn"
            >
              <Linkedin size={14} strokeWidth={2} />
              LinkedIn
            </a>

            {/* Copy Email Button */}
            <button
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
            </button>

            {/* Ghost: GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              id="hero-github-btn"
            >
              <Github size={14} strokeWidth={2} />
              GitHub
            </a>
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
            className="group-hover:translate-y-0.5 transition-transform duration-200"
          />
          <span>Keep reading</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;