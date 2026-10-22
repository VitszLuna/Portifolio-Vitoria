import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ClosingHero() {
  const { closingHero } = portfolioData;

  return (
    <section className="py-24 relative overflow-hidden bg-[var(--bg-main)] border-t border-[var(--border-main)] flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Massive Headline reproduction from user image */}
        <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95] text-[var(--text-main)] uppercase mb-8 select-none">
          <span className="block tracking-wider">
            {closingHero.titleLine1}
          </span>
          <span className="block text-accent-blue font-serif-italic capitalize tracking-normal my-1">
            {closingHero.titleLine2}
          </span>
          <span className="block tracking-wider">
            {closingHero.titleLine3}
          </span>
        </h2>

        {/* Subtitle text matching user image */}
        <p className="text-[var(--text-sub)] text-sm sm:text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed mb-6">
          {closingHero.subtitle}
        </p>

        {/* Interactive link with underline style matching the user image */}
        <div className="inline-flex items-center justify-center">
          <a
            href={closingHero.actionLink}
            className="group relative text-sm sm:text-base font-bold text-accent-blue hover:text-accent-blue-hover transition-colors duration-300 flex items-center gap-1.5 uppercase tracking-wider"
          >
            <span>{closingHero.actionText}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-blue transform scale-x-100 group-hover:scale-x-105 transition-all duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
