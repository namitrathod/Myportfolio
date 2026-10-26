import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  max?: number;
}

// 3D tilt for fine-pointer desktops only — skipped on touch to keep scroll smooth
const TiltCard: React.FC<TiltCardProps> = ({ children, className, max = 7 }) => {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 220, damping: 24 });
  const sy = useSpring(py, { stiffness: 220, damping: 24 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);

  useEffect(() => {
    const fine =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches;
    setEnabled(!reduced && fine);
  }, [reduced]);

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        px.set(0);
        py.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 900 }}
      className={`relative ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
