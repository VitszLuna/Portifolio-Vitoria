import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Oportunidade Profissional',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(`[Contato Portfólio] ${formData.subject} - ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Olá, Vitória!\n\nMeu nome é ${formData.name} (${formData.email}).\n\nAssunto: ${formData.subject}\n\nMensagem:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${mailSubject}&body=${mailBody}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 relative overflow-hidden border-t border-[var(--border-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-accent-blue text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Vamos Conversar</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-main)]">
            Entre em contato & <span className="text-accent-blue font-serif-italic capitalize">conecte-se comigo</span>
          </h2>
          <p className="mt-4 text-[var(--text-sub)] max-w-2xl text-base">
            Se você tem interesse no meu trabalho, propostas de oportunidades ou queira apenas bater um papo sobre tecnologia, sinta-se à vontade para me contatar através de qualquer um dos canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Cards Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Direct Card */}
            <div className="p-6 rounded-3xl natural-card border border-[var(--border-main)] flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-accent-blue">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[var(--text-sub)] font-mono block">E-mail Profissional</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-base font-bold text-[var(--text-main)] hover:text-accent-blue transition-colors break-all"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-[var(--bg-main)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] border border-[var(--border-main)] transition-colors shrink-0"
                title="Copiar e-mail"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl natural-card border border-[var(--border-main)] flex items-center justify-between gap-4 group block hover:border-accent-blue transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[var(--text-sub)] font-mono block">Rede Profissional</span>
                  <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-accent-blue transition-colors">
                    LinkedIn / Vitória Luna
                  </h4>
                  <p className="text-xs text-[var(--text-sub)] mt-0.5">Conecte-se para networking & vagas</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[var(--text-sub)] group-hover:text-accent-blue transition-colors shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl natural-card border border-[var(--border-main)] flex items-center justify-between gap-4 group block hover:border-accent-blue transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-[var(--text-sub)] font-mono block">Repositórios de Código</span>
                  <h4 className="text-base font-bold text-[var(--text-main)] group-hover:text-accent-blue transition-colors">
                    GitHub / VitszLuna
                  </h4>
                  <p className="text-xs text-[var(--text-sub)] mt-0.5">Veja códigos, commits e projetos</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[var(--text-sub)] group-hover:text-accent-blue transition-colors shrink-0" />
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-3xl natural-card border border-[var(--border-main)] flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[var(--text-sub)] font-mono block">Localização</span>
                <h4 className="text-base font-bold text-[var(--text-main)]">{personal.location}</h4>
                <p className="text-xs text-[var(--text-sub)] mt-0.5">Disponível para oportunidades remotas ou presenciais</p>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl natural-panel border border-[var(--border-main)] space-y-6 shadow-md"
            >
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-main)] font-display uppercase">
                  Enviar Mensagem Direta
                </h3>
                <p className="text-xs text-[var(--text-sub)] mt-1">
                  Envie uma mensagem e retornarei o mais breve possível.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-main)] text-[var(--text-main)] placeholder-[var(--text-sub)] focus:outline-none focus:border-accent-blue transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-main)] text-[var(--text-main)] placeholder-[var(--text-sub)] focus:outline-none focus:border-accent-blue transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2">
                  Assunto
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-main)] text-[var(--text-main)] focus:outline-none focus:border-accent-blue transition-colors text-sm"
                >
                  <option value="Oportunidade Profissional">Oportunidade Profissional / Vaga</option>
                  <option value="Projeto Web">Interesse em Desenvolvimento de Projeto</option>
                  <option value="Dúvida ou Networking">Dúvida / Troca de Ideias / Networking</option>
                  <option value="Outro Assunto">Outro Assunto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2">
                  Sua Mensagem *
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Escreva sua mensagem aqui..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-main)] border border-[var(--border-main)] text-[var(--text-main)] placeholder-[var(--text-sub)] focus:outline-none focus:border-accent-blue transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-accent-blue hover:bg-accent-blue-hover text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Mensagem por E-mail</span>
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 text-accent-blue text-xs font-semibold text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Seu aplicativo de e-mail foi iniciado com a mensagem pronta para envio!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
