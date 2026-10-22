import React, { useState } from 'react';
import { FolderKanban, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['Todos', 'Websites', 'Aplicações Web', 'Landing Pages', 'UI/UX & Design'];

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 relative overflow-hidden border-t border-[var(--border-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-accent-blue text-xs font-bold uppercase tracking-wider mb-4">
            <FolderKanban className="w-4 h-4" />
            <span>Portfólio de Projetos</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-main)]">
            Projetos Selecionados <span className="text-accent-blue font-serif-italic capitalize">& Demonstrações</span>
          </h2>
          <p className="mt-4 text-[var(--text-sub)] max-w-2xl text-base">
            Explore abaixo meus trabalhos recentes. Clique para acessar o projeto online ou examinar o código fonte.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-accent-blue text-white shadow-md scale-105'
                  : 'bg-[var(--bg-card)] text-[var(--text-sub)] hover:text-[var(--text-main)] border border-[var(--border-main)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl natural-card border border-[var(--border-main)] overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative h-56 overflow-hidden bg-[var(--bg-main)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-3 rounded-full bg-accent-blue text-white hover:bg-accent-blue-hover transition-colors shadow-lg"
                      title="Ver Detalhes"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-colors shadow-lg"
                      title="Acessar Projeto"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-main)] text-accent-blue text-[11px] font-mono font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full bg-accent-blue text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3" /> Destaque
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--text-main)] mb-1 group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-accent-blue font-mono mb-3">{project.tag}</p>
                  <p className="text-[var(--text-sub)] text-sm leading-relaxed mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[var(--bg-main)] border border-[var(--border-main)] text-[11px] text-[var(--text-sub)] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-[var(--border-main)] flex items-center justify-between gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-accent-blue hover:bg-accent-blue-hover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <span>Acessar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[var(--bg-main)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] font-semibold text-xs border border-[var(--border-main)] flex items-center justify-center gap-1.5 transition-all"
                  title="Ver no GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-accent-blue" />
                  <span>Código</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="p-2.5 rounded-xl bg-[var(--bg-main)] hover:bg-[var(--bg-card-hover)] text-[var(--text-sub)] hover:text-[var(--text-main)] border border-[var(--border-main)] transition-colors"
                  title="Ver detalhes"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal display when project active */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}

      </div>
    </section>
  );
}
