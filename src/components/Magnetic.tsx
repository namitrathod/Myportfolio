import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts';

interface MagneticProps {
  children: React.ReactNode;
  /** How strongly the element leans toward the cursor (0–1). */
  strength?: number;
  className?: string;
}

// ─── Magnetic ───────────────────────────────────────────────────────────────
// Wraps any element so it gently leans toward the cursor while hovered, then
// springs back on leave. No-ops for reduced-motion users.
const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.35, className }) => {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 18, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 300, damping: 18, mass: 0.3 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`inline-flex ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
