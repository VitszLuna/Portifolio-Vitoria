import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Mail, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['inicio', 'sobre', 'projetos', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mim', href: '#sobre', id: 'sobre' },
    { name: 'Projetos', href: '#projetos', id: 'projetos' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 natural-panel shadow-md backdrop-blur-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-blue p-[1px] shadow-sm group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[var(--bg-main)] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-accent-blue group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-[var(--text-main)] flex items-center gap-1">
                {portfolioData.personal.name} <span className="text-accent-blue">.</span>
              </span>
              <span className="text-[10px] text-[var(--text-sub)] font-mono tracking-wider uppercase">
                Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full natural-panel border border-[var(--border-main)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-blue text-white shadow-sm'
                      : 'text-[var(--text-sub)] hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Contact CTA */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Dark/Light Mode Switcher */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-[var(--border-main)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-accent-blue transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Alternar Tema Claro/Escuro"
              title={darkMode ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-sky-600" />
              )}
            </button>

            {/* Contact CTA */}
            <a
              href="#contato"
              className="px-5 py-2.5 rounded-xl bg-accent-blue hover:bg-accent-blue-hover text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Fale Comigo</span>
            </a>
          </div>

          {/* Mobile menu toggle & Theme toggle for mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-[var(--border-main)] bg-[var(--bg-card)] text-[var(--text-main)]"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-sky-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[var(--border-main)] bg-[var(--bg-card)] text-[var(--text-main)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl natural-panel shadow-xl space-y-4 border border-[var(--border-main)]">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors ${
                  activeSection === link.id
                    ? 'bg-accent-blue text-white'
                    : 'text-[var(--text-sub)] hover:bg-black/5 dark:hover:bg-white/5 hover:text-[var(--text-main)]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[var(--border-main)]">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-accent-blue text-white font-bold text-center flex items-center justify-center gap-2 shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Fale Comigo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
