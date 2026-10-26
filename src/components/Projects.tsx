import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, Rocket, Code2, Cpu, Layout } from 'lucide-react';
import { portfolioData, Project, ProjectTrack } from '../data/portfolio.ts';
import TiltCard from './TiltCard.tsx';
import Reveal from './Reveal.tsx';

const TRACK_CONFIG: Record<ProjectTrack, { icon: any; label: string }> = {
  'Full-Stack': { icon: Rocket, label: 'Full-Stack Applications' },
  Backend: { icon: Code2, label: 'Backend Engineering' },
  'AI / Systems': { icon: Cpu, label: 'AI & Core Systems' },
  Frontend: { icon: Layout, label: 'Frontend Architectures' },
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
  >
    <TiltCard className="card p-6 flex flex-col gap-5 h-full">
      <div className="space-y-2">
        <span className="chip-accent text-[10px]">{project.track}</span>
        <h3 className="font-display text-[15px] font-semibold text-ink leading-snug tracking-tight">
          {project.title}
        </h3>
      </div>

      <p className="text-[14px] text-ink-secondary leading-relaxed flex-1">{project.description}</p>

      <p className="text-[12px] text-accent font-medium border-l-2 border-accent/40 pl-3 leading-snug">
        {project.result}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 7).map((tech) => (
          <span key={tech} className="chip text-[10px]">{tech}</span>
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="flex items-center gap-2 pt-3 border-t border-border/60 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-3 !py-2 !text-[12px] flex-1 justify-center"
            >
              <Github size={13} strokeWidth={1.5} />
              Source
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent !px-3 !py-2 !text-[12px] flex-1 justify-center"
            >
              <ExternalLink size={13} strokeWidth={1.5} />
              Demo
            </a>
          )}
        </div>
      )}
    </TiltCard>
  </motion.div>
);

interface SectionProps {
  title: string;
  count: number;
  icon: any;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  isFeatured?: boolean;
}

const ProjectSection: React.FC<SectionProps> = ({
  title,
  count,
  icon: Icon,
  isOpen,
  onToggle,
  children,
  isFeatured = false,
}) => (
  <div className={`border-b border-border/50 last:border-0 ${isOpen ? 'bg-white/40' : ''}`}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-7 sm:py-8 px-2 sm:px-4 hover:bg-canvas-muted/40 transition-colors group rounded-2xl"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div
          className={`p-2.5 rounded-xl bg-white border border-border/60 transition-colors shrink-0
            ${isOpen ? 'border-accent/40 shadow-card' : 'group-hover:border-accent/25'}`}
        >
          <Icon size={18} className={isOpen ? 'text-accent' : 'text-ink-muted'} strokeWidth={1.5} />
        </div>
        <div className="text-left min-w-0">
          <h2 className={`font-display text-lg sm:text-xl font-semibold tracking-tight truncate ${isOpen ? 'text-ink' : 'text-ink-secondary group-hover:text-ink'}`}>
            {title}
            {isFeatured && (
              <span className="hidden sm:inline-block ml-3 text-[10px] font-mono uppercase tracking-widest text-accent align-middle">
                Featured
              </span>
            )}
          </h2>
          <p className="text-[12px] text-ink-faint font-mono mt-0.5">
            {count} {count === 1 ? 'Project' : 'Projects'}
          </p>
        </div>
      </div>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.35 }} className="text-ink-muted ml-4">
        <ChevronDown size={18} strokeWidth={1.5} />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="px-2 sm:px-4 pb-12 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Projects: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>(['featured']);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  };

  const featured = portfolioData.projects.filter((p) => p.featured);
  const byTrack = portfolioData.projects.reduce((acc, p) => {
    if (p.featured) return acc;
    if (!acc[p.track]) acc[p.track] = [];
    acc[p.track].push(p);
    return acc;
  }, {} as Record<ProjectTrack, Project[]>);

  const tracks = Object.keys(TRACK_CONFIG) as ProjectTrack[];

  return (
    <section id="projects" className="section-pad overflow-hidden">
      <div className="page-container">
        <Reveal className="mb-14">
          <p className="section-label mb-4">Selected work</p>
          <h2 className="heading-lg max-w-2xl">
            Systems, interfaces, and intelligence.
          </h2>
        </Reveal>

        <Reveal>
          <div className="border-y border-border/60">
            <ProjectSection
              title="Flagship Showpieces"
              count={featured.length}
              icon={Rocket}
              isOpen={openSections.includes('featured')}
              onToggle={() => toggleSection('featured')}
              isFeatured
            >
              {featured.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </ProjectSection>

            {tracks.map((track) => {
              const projects = byTrack[track] || [];
              if (projects.length === 0) return null;
              const config = TRACK_CONFIG[track];
              const sectionId = `track-${track}`;
              return (
                <ProjectSection
                  key={track}
                  title={config.label}
                  count={projects.length}
                  icon={config.icon}
                  isOpen={openSections.includes(sectionId)}
                  onToggle={() => toggleSection(sectionId)}
                >
                  {projects.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} />
                  ))}
                </ProjectSection>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
            <Github size={15} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform" />
            View more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
