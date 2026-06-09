import React, { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts';

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
}

// ─── Typewriter ─────────────────────────────────────────────────────────────
// Cycles through phrases with a type → pause → delete loop and a blinking
// caret. Reduced-motion users simply see the first phrase, statically.
const Typewriter: React.FC<TypewriterProps> = ({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseMs = 1600,
  className,
}) => {
  const reduced = usePrefersReducedMotion();
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const current = phrases[phraseIndex % phrases.length];

    // Finished typing → pause, then start deleting
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    // Finished deleting → advance to next phrase
    if (deleting && text === '') {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const delta = deleting ? deletingSpeed : typingSpeed;
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delta);
    return () => clearTimeout(t);
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs, reduced]);

  if (reduced) {
    return <span className={className}>{phrases[0]}</span>;
  }

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block w-[2px] -mb-0.5 h-[1em] bg-accent align-middle animate-caret-blink" />
    </span>
  );
};

export default Typewriter;
