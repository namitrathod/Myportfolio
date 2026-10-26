import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 36,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="pointer-events-none fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-accent will-change-transform"
      aria-hidden
    />
  );
};

export default ScrollProgress;
