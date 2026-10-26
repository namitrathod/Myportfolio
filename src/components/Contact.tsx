import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';
import Reveal from './Reveal.tsx';
import Magnetic from './Magnetic.tsx';

const Contact: React.FC = () => {
  const { personal, closingLine } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, copyable: true },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, copyable: false },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/namit-rathod', href: personal.linkedin, copyable: false },
    { icon: Github, label: 'GitHub', value: 'github.com/namitrathod', href: personal.github, copyable: false },
    { icon: MapPin, label: 'Location', value: personal.location, href: null, copyable: false },
  ];

  return (
    <section id="contact" className="section-pad bg-white/50">
      <div className="page-container">
        <Reveal>
          <p className="section-label mb-4">Contact</p>
          <h2 className="heading-lg max-w-2xl mb-5">Let&apos;s build something that lasts.</h2>
          <p className="text-ink-muted text-[17px] max-w-lg mb-3">{closingLine}</p>
          <p className="text-ink-faint text-[15px] mb-12">Email is the fastest way to reach me.</p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
          <motion.div
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
          >
            {contactItems.map(({ icon: Icon, label, value, href, copyable }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, x: -16, filter: 'blur(6px)' },
                  visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.5 } },
                }}
                className="group flex items-center gap-4 p-3 -mx-3 rounded-2xl hover:bg-canvas-muted/70 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-border/60 flex items-center justify-center shrink-0
                                transition-transform duration-300 group-hover:scale-110 group-hover:border-accent/30">
                  <Icon size={16} strokeWidth={1.5} className="text-ink-muted group-hover:text-accent transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="section-label mb-0.5 !normal-case !tracking-wide">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[15px] text-ink hover:text-accent transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[15px] text-ink-secondary truncate">{value}</p>
                  )}
                </div>
                {copyable && (
                  <button
                    onClick={copyEmail}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-border
                               text-ink-faint hover:text-ink hover:border-border-dark transition-colors shrink-0"
                    aria-label="Copy email"
                  >
                    {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} strokeWidth={1.5} />}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.2}>
            <Magnetic strength={0.25}>
              <a href={`mailto:${personal.email}`} className="btn-accent text-base !px-8 !py-3.5">
                <Mail size={16} />
                Say hello
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
