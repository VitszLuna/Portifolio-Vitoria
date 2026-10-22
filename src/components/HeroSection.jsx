import React from 'react';
import { FolderKanban, Mail, ArrowDownRight, Folder } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Typography + Right User Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Social Icons, Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-main)] bg-[var(--bg-card)] text-accent-blue text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-blue"></span>
              </span>
              <span>Disponível para novos projetos & contratações</span>
            </div>

            {/* Cursive Tag inspired by uploaded image */}
            <div className="pt-2">
              <span className="font-serif-italic text-3xl sm:text-4xl md:text-5xl text-accent-blue block leading-none">
                Portfólio
              </span>
              
              {/* Giant Condensed Headline matching reference image style */}
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold uppercase tracking-tight text-[var(--text-main)] leading-[0.95] mt-1 flex flex-wrap items-center gap-3">
                <span>DESENVOLVEDORA</span>
                <span className="inline-flex items-center gap-2 text-accent-blue">
                  <Folder className="w-12 h-12 sm:w-16 sm:h-16 fill-sky-100 dark:fill-sky-950 stroke-accent-blue inline-block align-middle" />
                </span>
                <span className="w-full">FRONT-END</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[var(--text-sub)] max-w-xl font-normal leading-relaxed">
              {personal.subtitle} Foco em resultados reais, estética impecável e alta performance.
            </p>

            {/* Social Icons Row matching reference image */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-sub)] mr-2 font-mono">
                Redes & Contato:
              </span>
              
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-main)] text-[var(--text-main)] hover:border-accent-blue hover:text-accent-blue transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-main)] text-[var(--text-main)] hover:border-accent-blue hover:text-accent-blue transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-main)] text-[var(--text-main)] hover:border-accent-blue hover:text-accent-blue transition-all"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projetos"
                className="px-7 py-3.5 rounded-xl bg-accent-blue hover:bg-accent-blue-hover text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-sky-500/20 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <FolderKanban className="w-4 h-4" />
                <span>Ver Projetos</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#contato"
                className="px-7 py-3.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] font-bold text-sm uppercase tracking-wider border border-[var(--border-main)] transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-accent-blue" />
                <span>Fale Comigo</span>
              </a>
            </div>

          </div>

          {/* Right Column: User Photo Cutout Arch Display */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Arch Photo Container matching uploaded image */}
              <div className="relative aspect-[3/4] rounded-t-[140px] rounded-b-3xl bg-gradient-to-b from-sky-200 to-accent-blue dark:from-sky-900/60 dark:to-accent-blue/40 p-2 border-2 border-[var(--border-main)] shadow-2xl overflow-hidden group">
                <div className="w-full h-full rounded-t-[132px] rounded-b-[20px] bg-[var(--bg-card)] overflow-hidden relative">
                  <img
                    src={personal.photoUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)]/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Quick Floating Badge on Photo */}
              <div className="absolute -bottom-4 left-6 right-6 p-4 rounded-2xl natural-panel border border-[var(--border-main)] shadow-xl flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-main)]">{personal.name}</h4>
                  <p className="text-xs text-accent-blue font-semibold">{personal.title}</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-[10px] font-bold uppercase tracking-wider">
                  Dev Front-End
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
