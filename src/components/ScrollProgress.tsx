import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// ─── Scroll Progress Bar ────────────────────────────────────────────────────
// Thin accent bar pinned to the top that tracks reading progress.
const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left
                 bg-gradient-to-r from-accent via-accent-light to-accent"
      aria-hidden
    />
  );
};

export default ScrollProgress;
