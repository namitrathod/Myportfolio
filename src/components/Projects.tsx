import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { portfolioData, Project, ProjectTrack } from '../data/portfolio.ts';

// ─── Track badge colours ────────────────────────────────────────────────────
// Maps each track to a subtle pill style using only our design tokens.
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
interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.07 }}
    viewport={{ once: true }}
    className={`card p-6 flex flex-col gap-5 ${featured ? 'bg-panel-tint' : ''}`}
  >
    {/* ── Top: Title + track badge ── */}
    <div className="flex items-start justify-between gap-3">
      <div className="flex-1 min-w-0 space-y-1.5">
        <TrackBadge track={project.track} />
        <h3 className={`text-ink font-semibold leading-snug ${featured ? 'text-base' : 'text-sm'}`}>
          {project.title}
        </h3>
      </div>
    </div>

    {/* ── Description ── */}
    <p className="text-[14px] text-ink-secondary leading-relaxed flex-1">
      {project.description}
    </p>

    {/* ── Result / Impact line ── */}
    <div className="space-y-4 pt-1">
      <p className="text-xs text-accent font-medium border-l-2 border-accent/30 pl-3 leading-snug">
        {project.result}
      </p>

      {/* ── Stack chips ── */}
      <div className="flex flex-wrap gap-1.5 ">
        {project.technologies.slice(0, 6).map(tech => ( // Cap at 6 for readability
          <span key={tech} className="chip">{tech}</span>
        ))}
      </div>
    </div>

    {/* ── Links: High-visibility buttons ── */}
    {(project.githubUrl || project.liveUrl) && (
      <div className="flex items-center gap-3 pt-3 border-t border-border mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost !px-3 !py-2 !text-[10px] uppercase tracking-widest font-mono group flex-1 justify-center gap-2"
          >
            <Github size={14} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            <span>Source</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent !px-3 !py-2 !text-[10px] uppercase tracking-widest font-mono group flex-1 justify-center gap-2"
          >
            <ExternalLink size={13} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            <span>Demo</span>
          </a>
        )}
      </div>
    )}
  </motion.div>
);

// ─── Projects Section ───────────────────────────────────────────────────────
const Projects: React.FC = () => {
  const featured   = portfolioData.projects.filter(p => p.featured);
  const additional = portfolioData.projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">

          {/* ── Label col ── */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-2">Projects</p>
            {/* Quick track legend */}
            <div className="hidden lg:flex flex-col gap-1.5 mt-4">
              {(Object.keys(TRACK_STYLES) as ProjectTrack[]).map(track => (
                <TrackBadge key={track} track={track} />
              ))}
            </div>
          </motion.div>

          {/* ── Cards col ── */}
          <div className="space-y-12">

            {/* Featured: 2-column grid */}
            <div>
              <p className="text-xs text-ink-faint font-mono tracking-wide uppercase mb-4">Featured</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featured.map((p, i) => (
                  <ProjectCard key={p.id} project={p} featured index={i} />
                ))}
              </div>
            </div>

            {/* Additional projects */}
            {additional.length > 0 && (
              <div>
                <p className="text-xs text-ink-faint font-mono tracking-wide uppercase mb-4">More work</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additional.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i + featured.length} />
                  ))}
                </div>
              </div>
            )}

            {/* GitHub link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs"
              >
                <Github size={13} strokeWidth={1.5} />
                All repositories on GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
