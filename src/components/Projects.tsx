import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, Rocket, Code2, Cpu, Layout } from 'lucide-react';
import { portfolioData, Project, ProjectTrack } from '../data/portfolio.ts';

// ─── Track Config ───────────────────────────────────────────────────────────
const TRACK_CONFIG: Record<ProjectTrack, { icon: any, label: string, color: string }> = {
  'Full-Stack':   { icon: Rocket,  label: 'Full-Stack Applications', color: 'text-accent' },
  'Backend':      { icon: Code2,   label: 'Backend Engineering',    color: 'text-[#c27c3e]' },
  'AI / Systems': { icon: Cpu,     label: 'AI & Core Systems',      color: 'text-[#5b6fa6]' },
  'Frontend':     { icon: Layout,  label: 'Frontend Architectures', color: 'text-[#2e7d56]' },
};

const TRACK_STYLES: Record<ProjectTrack, string> = {
  'Full-Stack':   'bg-accent/10 text-accent border-accent/20',
  'Backend':      'bg-[#c27c3e]/10 text-[#c27c3e] border-[#c27c3e]/20',
  'Frontend':     'bg-[#2e7d56]/10 text-[#2e7d56] border-[#2e7d56]/20',
  'AI / Systems': 'bg-[#5b6fa6]/10 text-[#5b6fa6] border-[#5b6fa6]/20',
};

const TrackBadge: React.FC<{ track: ProjectTrack }> = ({ track }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wide border ${TRACK_STYLES[track]}`}
  >
    {track}
  </span>
);

// ─── Individual Project Card ────────────────────────────────────────────────
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="card p-6 flex flex-col gap-5 bg-panel/50 hover:bg-panel-tint transition-colors border border-border/50"
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1 min-w-0 space-y-1.5">
        <TrackBadge track={project.track} />
        <h3 className="text- ink font-semibold leading-snug text-sm">
          {project.title}
        </h3>
      </div>
    </div>

    <p className="text-[13px] text-ink-secondary leading-relaxed flex-1">
      {project.description}
    </p>

    <div className="space-y-4 pt-1">
      <p className="text-[11px] text-accent font-medium border-l-2 border-accent/30 pl-3 leading-snug">
        {project.result}
      </p>

      <div className="flex flex-wrap gap-1.5 ">
        {project.technologies.slice(0, 8).map(tech => (
          <span key={tech} className="chip text-[10px] px-2 py-0.5">{tech}</span>
        ))}
      </div>
    </div>

    {(project.githubUrl || project.liveUrl) && (
      <div className="flex items-center gap-3 pt-3 border-t border-border mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !px-3 !py-2 !text-[9px] uppercase tracking-widest font-mono group flex-1 justify-center gap-2"
          >
            <Github size={12} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            <span>Source</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent !px-3 !py-2 !text-[9px] uppercase tracking-widest font-mono group flex-1 justify-center gap-2"
          >
            <ExternalLink size={12} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            <span>Demo</span>
          </a>
        )}
      </div>
    )}
  </motion.div>
);

// ─── Expandable Section ─────────────────────────────────────────────────────
interface SectionProps {
  title: string;
  count: number;
  icon: any;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  colorClass?: string;
  isFeatured?: boolean;
}const ProjectSection: React.FC<SectionProps> = ({ 
  title, count, icon: Icon, isOpen, onToggle, children, colorClass = "text-ink", isFeatured = false 
}) => (
  <div className={`border-b border-border/60 last:border-0 transition-colors ${isOpen ? 'bg-canvas-soft/30' : ''}`}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 sm:py-8 px-4 sm:px-6 hover:bg-canvas-soft/50 transition-all group"
    >
      <div className="flex items-center gap-3 sm:gap-5 min-w-0">
        <div className={`p-2 sm:p-2.5 rounded-lg bg-canvas border border-border group-hover:border-accent/30 transition-colors shrink-0 ${isOpen ? 'border-accent/40 shadow-sm' : ''}`}>
          <Icon size={18} className={`sm:w-5 sm:h-5 ${isOpen ? 'text-accent' : colorClass}`} strokeWidth={1.5} />
        </div>
        <div className="text-left min-w-0">
          <h2 className={`text-base sm:text-xl font-semibold tracking-tight transition-colors truncate sm:whitespace-normal ${isOpen ? 'text-ink' : 'text-ink-secondary group-hover:text-ink'}`}>
            {title}
            {isFeatured && <span className="hidden sm:inline-block ml-3 text-[10px] font-mono uppercase tracking-widest text-accent align-middle">Featured</span>}
          </h2>
          <p className="text-[10px] sm:text-xs text-ink-faint font-mono mt-0.5">{count} {count === 1 ? 'Project' : 'Projects'}</p>
        </div>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-ink-muted group-hover:text-accent transition-colors ml-4 shrink-0"
      >
        <ChevronDown size={18} strokeWidth={1.5} className="sm:w-5 sm:h-5" />
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="px-4 sm:px-6 pb-12 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// ─── Main Projects Component ────────────────────────────────────────────────
const Projects: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>(['featured']);

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const featured = portfolioData.projects.filter(p => p.featured);
  
  // Group non-featured by track
  const byTrack = portfolioData.projects.reduce((acc, p) => {
    if (p.featured) return acc;
    if (!acc[p.track]) acc[p.track] = [];
    acc[p.track].push(p);
    return acc;
  }, {} as Record<ProjectTrack, Project[]>);

  const tracks = Object.keys(TRACK_CONFIG) as ProjectTrack[];

  return (
    <section id="projects" className="section-pad border-t border-border overflow-hidden">
      <div className="page-container">
        {/* Header Area */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p className="section-label">Selected Work</p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink max-w-2xl">
              Scaling systems, optimizing interfaces, and engineering intelligence.
            </h1>
          </motion.div>
        </div>

        {/* Expandable List */}
        <div className="border-y border-border/60">
          {/* ── Featured Section ── */}
          <ProjectSection
            title="Flagship Showpieces"
            count={featured.length}
            icon={Rocket}
            isOpen={openSections.includes('featured')}
            onToggle={() => toggleSection('featured')}
            isFeatured
            colorClass="text-accent"
          >
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </ProjectSection>

          {/* ── Track Sections ── */}
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
                colorClass={config.color}
              >
                {projects.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} />
                ))}
              </ProjectSection>
            );
          })}
        </div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
          >
            <Github size={16} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-mono tracking-tight">View complete repository audit on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

