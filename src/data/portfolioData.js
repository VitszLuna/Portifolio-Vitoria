export const portfolioData = {
  personal: {
    name: "Vitória Luna",
    title: "Desenvolvedora Front-End & Criadora de Experiências Digitais",
    subtitle: "Especializada em criar Websites completos com HTML, CSS e JavaScript.",
    bio: "Transformo ideias em experiências virtuais memoráveis. Desenvolvo websites modernos, intuitivos e focados em alta performance, ajudando marcas e empresas a se destacarem no mercado digital.",
    location: "São Paulo, Brasil",
    email: "isabeli.vitoria.luna@gmail.com",
    whatsapp: "+55 (11) 94765-3045",
    whatsappLink: "https://wa.me/5511947653045?text=Ol%C3%A1!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    github: "https://github.com/VitszLuna",
    linkedin: "https://www.linkedin.com/in/vitoria-luna-205241283/",
    instagram: "https://instagram.com",
    availableForHire: true,
    photoUrl: "/sobremim.jpeg",
  },

  services: [
    {
      id: "websites",
      title: "Websites Institucionais",
      subtitle: "Presença digital marcante e profissional",
      description: "Criação de websites modernos e responsivos sob medida para empresas, profissionais liberais e freelancers que buscam credibilidade.",
      icon: "Globe",
      badge: "Mais Solicitado",
      features: [
        "Design exclusivo e alta performance",
        "Totalmente adaptado a celulares e tablets",
        "Otimização SEO para o Google",
        "Integração com WhatsApp e Redes Sociais"
      ]
    },
    {
      id: "landing-pages",
      title: "Landing Pages de Alta Conversão",
      subtitle: "Foco total em vendas e geração de leads",
      description: "Páginas de vendas de alto impacto projetadas para capturar clientes, divulgar produtos ou serviços e maximizar sua taxa de conversão.",
      icon: "Rocket",
      badge: "Foco em Vendas",
      features: [
        "Copywriting visual estratégico",
        "Carregamento ultra-rápido (< 1 segundo)",
        "Botões e CTAs com rastreamento",
        "Integração com E-mail Marketing & CRM"
      ]
    },
    {
      id: "web-apps",
      title: "Aplicações Web & SaaS",
      subtitle: "Sistemas interativos completos",
      description: "Desenvolvimento de painéis administrativos, plataformas interativas e sistemas web sob medida utilizando React e arquitetura moderna.",
      icon: "Code2",
      badge: "Sob Medida",
      features: [
        "Interface moderna em React e Tailwind",
        "Consumo e integração de APIs REST",
        "Gerenciamento de estado e autenticação",
        "Código limpo, escalável e documentado"
      ]
    },
    {
      id: "redesign",
      title: "Redesign & Otimização de Performance",
      subtitle: "Modernize seu site existente",
      description: "Seu site antigo está lento ou ultrapassado? Faço a reformulação visual completa e acelero o tempo de resposta da sua página.",
      icon: "Zap",
      badge: "Upgrade Digital",
      features: [
        "Análise de métricas Core Web Vitals",
        "Melhoria na nota do Google Lighthouse",
        "Reformulação da interface do usuário (UI)",
        "Correção de erros de código e layout"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Sistema Integrado Justiça Restaurativa",
      category: "Aplicações Web",
      tag: "React / Tailwind / SupaBase / Node.js",
      description: "Sistema integrado para automatização de processos de justiça restaurativa, com painel administrativo e relatórios detalhados.",
      longDescription: "Esse projeto foi desenvolvido para conclusão de TCC, com foco de criar uma plataforma que auxilie na gestão de casos de justiça restaurativa. Essa plataforma é um projeto real em processo de integraçãoo com o TJSP.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite", "REST API"],
      image: "/tcc.png",
      liveUrl: "https://tcc-nucleojr.vercel.app/",
      githubUrl: "https://github.com/pietromurillo/TCC-nucleojr",
      featured: true
    },
    {
      id: 2,
      title: "SRD Ache",
      category: "Websites",
      tag: "HTML5 / CSS3 / JavaScript",
      description: "Projeto feito como proposta de solução para um problema real, excesso de cachorros abandonados na cidade de São Paulo, com o objetivo de conectar pessoas interessadas em adotar animais.",
      longDescription: "Projeto final do 2º ano do técnico em Informática, focado em análise de problemas e soluções eficientes.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "/srd.png",
      liveUrl: "https://vitszluna.github.io/SRDProjeto/",
      githubUrl: "https://github.com/VitszLuna/SRDProjeto",
      featured: true
    },
    {
      id: 3,
      title: "Ponto-Estoque App",
      category: "Aplicações Web",
      tag: "React / Tailwind / Animations / Node.js / SupaBase",
      description: "Sistema Integrado de Frequência, Banco de Horas & Materiais",
      longDescription: "Um sistema web corporativo real, moderno e responsivo para gestão de ponto eletrônico, acúmulo de banco de horas (CLT 8h48m/dia com 1h de almoço) e controle de movimentações de estoque.",
      technologies: ["React", "Tailwind CSS", "Lucide Icons"],
      image: "/estoque.png",
      liveUrl: "https://ponto-estoque-app.vercel.app/",
      githubUrl: "https://github.com/VitszLuna/ponto-estoque-app",
      featured: true,
      metrics: "< 0.8s Carregamento"
    },
   {
      id: 4,
      title: "Brecho Online",
      category: "Landing Pages",
      tag: "React / Tailwind / SupaBase",
      description: "Brecho feito para publicação de produtos de segunda mão, com sistema de cadastro e listagem de itens.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "/brecho.png",
      liveUrl: "https://brecho-online-rose.vercel.app/",
      githubUrl: "https://github.com/VitszLuna/brecho-online",
      featured: false
    }
  ],

  closingHero: {
    titleLine1: "EXPERIÊNCIA",
    titleLine2: "DIGITAL",
    titleLine3: "EXCEPCIONAL",
    subtitle: "Especializada em criar Websites completos com HTML, CSS e JavaScript.",
    actionText: "Confira meus projetos",
    actionLink: "#projetos"
  }
};
