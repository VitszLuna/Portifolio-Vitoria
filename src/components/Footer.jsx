import React from 'react';
import { Code2, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[var(--bg-card)] border-t border-[var(--border-main)] text-[var(--text-sub)] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-main)]">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-blue p-[1px]">
              <div className="w-full h-full bg-[var(--bg-main)] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-accent-blue" />
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-[var(--text-main)] text-base uppercase">{personal.name}</span>
              <p className="text-xs text-[var(--text-sub)]">Desenvolvimento Front-End & Soluções Digitais</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--bg-main)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] border border-[var(--border-main)] transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--bg-main)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] border border-[var(--border-main)] transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--bg-main)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] border border-[var(--border-main)] transition-colors"
              aria-label="Instagram"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-[var(--bg-main)] hover:bg-[var(--bg-card-hover)] text-accent-blue border border-[var(--border-main)] transition-colors"
              aria-label="E-mail"
              title="Enviar E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[var(--bg-main)] hover:bg-accent-blue text-[var(--text-main)] hover:text-white border border-[var(--border-main)] transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            <span>Topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-sub)] gap-4">
          <p>© {new Date().getFullYear()} {personal.name} - Todos os direitos reservados.</p>
          <p className="font-mono">
            Criado com <span className="text-accent-blue font-bold">React</span> & <span className="text-accent-blue font-bold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
