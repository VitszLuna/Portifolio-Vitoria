import React from 'react';
import { User, Code2, Smartphone, Zap, Search, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo & Semântico",
      desc: "Desenvolvimento estruturado seguindo as melhores práticas de HTML5 semântico e CSS3."
    },
    {
      icon: Smartphone,
      title: "Design 100% Responsivo",
      desc: "Websites perfeitos e otimizados para qualquer tela: smartphones, tablets e desktops."
    },
    {
      icon: Zap,
      title: "Ultra Performance",
      desc: "Páginas leves, rápidas e com pontuação alta nas métricas de velocidade do Google."
    },
    {
      icon: Search,
      title: "Otimizado para SEO",
      desc: "Estruturação pronta para ajudar seu projeto a ranquear melhor nas pesquisas do Google."
    }
  ];

  return (
    <section id="sobre" className="py-20 relative overflow-hidden border-t border-[var(--border-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-accent-blue text-xs font-bold uppercase tracking-wider mb-4">
            <User className="w-4 h-4" />
            <span>Sobre Mim</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-main)]">
            Paixão por criar <span className="text-accent-blue font-serif-italic capitalize">interfaces que conectam</span>
          </h2>
          <div className="w-20 h-1 bg-accent-blue rounded-full mt-4" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Card Profile & Bio */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl natural-card border border-[var(--border-main)] relative overflow-hidden">
              
              {/* Profile Header Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-accent-blue p-1 shadow-md">
                    <img
                      src={personal.photoUrl}
                      alt={personal.name}
                      className="w-full h-full object-cover rounded-[12px]"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-accent-blue text-white flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)]">{personal.name}</h3>
                  <p className="text-sm text-accent-blue font-semibold">{personal.title}</p>
                  <p className="text-xs text-[var(--text-sub)] mt-1">{personal.location}</p>
                </div>
              </div>

              {/* Bio Text */}
              <p className="text-[var(--text-main)] text-base leading-relaxed mb-6 font-normal">
                {personal.bio}
              </p>

              <p className="text-[var(--text-sub)] text-sm leading-relaxed mb-8">
                Foco no desenvolvimento de websites institucionais, sistemas e interfaces completas com visual marcante, usabilidade intuitiva e boas práticas de arquitetura front-end.
              </p>

              {/* Quick Contact Line */}
              <div className="p-4 rounded-xl bg-[var(--bg-main)] border border-[var(--border-main)] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[var(--text-sub)] block">Vamos conversar?</span>
                  <span className="text-sm text-[var(--text-main)] font-semibold">{personal.email}</span>
                </div>
                <a
                  href="#contato"
                  className="px-3.5 py-2 rounded-lg bg-accent-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-blue-hover transition-colors"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl natural-card border border-[var(--border-main)] group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all">
                    <IconComp className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--text-main)] mb-2">{item.title}</h4>
                  <p className="text-sm text-[var(--text-sub)] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
