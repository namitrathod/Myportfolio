import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.28, className }) => {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.3 });

  useEffect(() => {
    const fine =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches;
    setEnabled(!reduced && fine);
  }, [reduced]);

  if (!enabled) {
    return <div className={`inline-flex ${className ?? ''}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      className={`inline-flex ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
