import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts';

// ─── Spotlight ──────────────────────────────────────────────────────────────
// A soft accent-tinted radial glow that follows the cursor across the page.
// Disabled for touch devices and users who prefer reduced motion.
const Spotlight: React.FC = () => {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const x = useSpring(mouseX, { stiffness: 120, damping: 25, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 25, mass: 0.4 });

  useEffect(() => {
    const hasFinePointer =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(pointer: fine)').matches;
    if (reduced || !hasFinePointer) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none fixed top-0 left-0 z-[55] h-[600px] w-[600px] rounded-full
                 bg-[radial-gradient(circle,rgba(45,106,79,0.10),rgba(45,106,79,0.04)_40%,transparent_70%)]
                 blur-2xl mix-blend-multiply"
    />
  );
};

export default Spotlight;
