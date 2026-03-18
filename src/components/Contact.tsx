import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio.ts';

// ─── Contact Section ───────────────────────────────────────────────────────
const Contact: React.FC = () => {
  const { personal, closingLine } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback silently
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      id: 'contact-email',
      copyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      id: 'contact-phone',
      copyable: false,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/namit-rathod',
      href: personal.linkedin,
      id: 'contact-linkedin',
      copyable: false,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/namitrathod',
      href: personal.github,
      id: 'contact-github',
      copyable: false,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: null,
      id: 'contact-location',
      copyable: false,
    },
  ];

  return (
    <section id="contact" className="section-pad border-t border-border">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">

          {/* ── Label col ── */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="section-label">Contact</p>
          </motion.div>

          {/* ── Content col ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            {/* Closing statement */}
            <p className="text-base text-ink-secondary leading-relaxed mb-1">
              {closingLine}
            </p>
            <p className="text-sm text-ink-muted mb-10">
              Email is the fastest way to reach me. I check it daily.
            </p>

            {/* ── Contact rows ── */}
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href, id, copyable }) => (
                <div key={id} className="flex items-center gap-4">

                  {/* Icon badge */}
                  <div className="w-8 h-8 rounded bg-canvas-soft border border-border flex items-center justify-center shrink-0">
                    <Icon size={14} strokeWidth={1.5} className="text-ink-muted" />
                  </div>

                  {/* Label + value */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-ink-faint font-mono tracking-wide uppercase mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        id={id}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-ink hover:text-accent transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-ink-secondary truncate">{value}</p>
                    )}
                  </div>

                  {/* Copy button — email only */}
                  {copyable && (
                    <button
                      onClick={copyEmail}
                      className="w-7 h-7 flex items-center justify-center rounded border border-border
                                 text-ink-faint hover:text-ink hover:border-border-dark transition-colors shrink-0"
                      aria-label="Copy email"
                      title="Copy email"
                    >
                      {copied
                        ? <Check size={12} strokeWidth={2} className="text-accent" />
                        : <Copy size={12} strokeWidth={1.5} />
                      }
                    </button>
                  )}
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
