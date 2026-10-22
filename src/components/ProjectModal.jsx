import React from 'react';
import { X, ExternalLink, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg-card)] border border-[var(--border-main)] rounded-3xl shadow-2xl text-[var(--text-main)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[var(--bg-main)] text-[var(--text-main)] border border-[var(--border-main)] hover:border-accent-blue transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-3xl bg-[var(--bg-main)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-accent-blue text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-main)] font-display uppercase">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metrics highlight */}
          {project.metrics && (
            <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center gap-3">
              <Zap className="w-5 h-5 text-accent-blue shrink-0" />
              <span className="text-sm font-semibold text-accent-blue">
                Destaque: {project.metrics}
              </span>
            </div>
          )}

          {/* Long Description */}
          <div>
            <h4 className="text-xs font-bold text-[var(--text-sub)] uppercase tracking-wider mb-2 font-mono">
              Sobre o Projeto
            </h4>
            <p className="text-base text-[var(--text-main)] leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold text-[var(--text-sub)] uppercase tracking-wider mb-3 font-mono">
              Tecnologias Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[var(--bg-main)] border border-[var(--border-main)] text-xs font-medium text-accent-blue"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-[var(--border-main)] flex flex-wrap items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-6 rounded-xl bg-accent-blue hover:bg-accent-blue-hover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              <span>Acessar Projeto Online</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-[var(--bg-main)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] font-semibold text-xs border border-[var(--border-main)] flex items-center justify-center gap-2"
            >
              <GithubIcon className="w-4 h-4 text-accent-blue" />
              <span>Código-Fonte (GitHub)</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
