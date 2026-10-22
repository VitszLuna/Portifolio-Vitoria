import React, { useState } from 'react';
import { FileText, Briefcase, GraduationCap, Download, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeSection() {
  const { resume } = portfolioData;
  const [activeTab, setActiveTab] = useState('experiencia');

  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <section id="curriculo" className="py-20 relative overflow-hidden border-t border-[var(--border-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-accent-blue text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4" />
            <span>Trajetória Profissional</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-main)]">
            Currículo & <span className="text-accent-blue font-serif-italic capitalize">Habilidades Técnicas</span>
          </h2>
          <p className="mt-4 text-[var(--text-sub)] max-w-2xl text-base">
            Conheça minha jornada profissional, histórico acadêmico e competências técnicas em desenvolvimento web.
          </p>

          {/* Download CV Action Button */}
          <div className="mt-6">
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-accent-blue font-bold text-xs uppercase tracking-wider border border-[var(--border-main)] transition-all flex items-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Imprimir / Salvar PDF do Currículo</span>
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('experiencia')}
            className={`px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'experiencia'
                ? 'bg-accent-blue text-white shadow-md'
                : 'bg-[var(--bg-card)] text-[var(--text-sub)] hover:text-[var(--text-main)] border border-[var(--border-main)]'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Experiência Profissional</span>
          </button>

          <button
            onClick={() => setActiveTab('formacao')}
            className={`px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === 'formacao'
                ? 'bg-accent-blue text-white shadow-md'
                : 'bg-[var(--bg-card)] text-[var(--text-sub)] hover:text-[var(--text-main)] border border-[var(--border-main)]'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Educação & Certificados</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Timeline Column (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {activeTab === 'experiencia' && (
              <div className="space-y-6">
                {resume.experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl natural-card border border-[var(--border-main)] relative"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-mono font-semibold">
                        {exp.period}
                      </span>
                      <span className="text-xs text-[var(--text-sub)] font-mono">{exp.company}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">{exp.role}</h3>
                    <p className="text-[var(--text-main)] text-sm leading-relaxed mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-sub)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'formacao' && (
              <div className="space-y-6">
                {resume.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl natural-card border border-[var(--border-main)] relative"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-mono font-semibold">
                        {edu.period}
                      </span>
                      <span className="text-xs text-[var(--text-sub)] font-mono">{edu.institution}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">{edu.degree}</h3>
                    <p className="text-[var(--text-main)] text-sm leading-relaxed">{edu.details}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Skills Progress Bars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl natural-panel border border-[var(--border-main)] space-y-6 shadow-sm">
              <div className="flex items-center gap-2 border-b border-[var(--border-main)] pb-4">
                <Award className="w-5 h-5 text-accent-blue" />
                <h3 className="text-lg font-bold text-[var(--text-main)]">Nível de Competências</h3>
              </div>

              {resume.skills.map((skillGroup, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-accent-blue font-mono">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-[var(--text-main)]">{skill.name}</span>
                          <span className="text-accent-blue font-mono">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[var(--bg-main)] overflow-hidden p-0.5 border border-[var(--border-main)]">
                          <div
                            className="h-full rounded-full bg-accent-blue transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
