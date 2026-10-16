/**
 * LUIZ ODONEL - PORTFOLIO INTERACTIVITY & DATA
 */

const projectsData = [
  {
    id: 'comboio',
    title: 'Comboio Logística',
    category: 'fullstack',
    shortDesc: 'Motor de logística com roteirização em malha rodoviária real.',
    tags: [
      { name: 'Java 17', class: 'badge-java-tag' },
      { name: 'Spring Boot', class: 'badge-spring-tag' },
      { name: 'Angular 21', class: 'badge-angular-tag' },
      { name: 'PostgreSQL', class: 'badge-postgres-tag' }
    ],
    previewType: 'chart',
    previewData: {
      title: 'comboio.luizodonel.cloud',
      status: ['Rota Otimizada 2-Opt', 'Checkpoint Ativo', 'Telemetria OK'],
      colors: ['pill-green', 'pill-cyan', 'pill-amber']
    },
    demoUrl: 'https://comboio.luizodonel.cloud',
    repoFrontend: 'https://github.com/luizodonel/comboioWeb',
    repoBackend: 'https://github.com/luizodonel/comboioAPI',
    fullReport: {
      headline: 'Comboio Logística — Visão Técnica do Projeto',
      overview: 'Desenvolvido para solucionar a dor real de operações de transporte: planejar rotas eficientes, monitorar frotas em tempo real e controlar custos de viagem. Foco central no motor de logística no mapa e telemetria inteligente.',
      techStack: 'Java 17, Spring Boot, Spring Data JPA, Hibernate, Angular 21 (Signals e Standalone Components), PostgreSQL 16 (schema isolado), Docker Multi-stage, Coolify.',
      integrations: [
        'Rotas em malha rodoviária real: Integração do Leaflet.js com a engine OSRM via requisições GeoJSON. A rota segue rigorosamente as rodovias e vias reais transitadas pelo motorista, sem linhas retas simplórias.',
        'Algoritmo de Otimização (2-Opt): Resolução prática do problema do Caixeiro Viajante (TSP). Ao cadastrar múltiplos destinos fora de ordem, o sistema reordena os pontos para traçar o menor trajeto viário possível, economizando combustível e tempo.',
        'Telemetria dos Checkpoints: Acompanhamento da posição do veículo, cálculo dinâmico da "Distância da Base" desde o ponto de partida até o último checkpoint confirmado, além da proximidade entre outros veículos da frota em trânsito.'
      ],
      architecture: 'Front-end em Angular 21 reativo com Signals e CSS Puro Dark Mode, protegido por Guards de Rota. Back-end em Java 17 + Spring Boot estruturado em Controller ➔ Service ➔ Repository ➔ Entity, com controle rigoroso de transações (@Transactional) e autenticação RBAC (ADMIN, GESTOR, OPERADOR, MOTORISTA).',
      database: 'PostgreSQL com schema relacional isolado (comboio), assegurando integridade e integridade referencial com chaves estrangeiras entre frotas, motoristas, abastecimentos e rotas de entrega.',
      devops: 'Docker Multi-stage builds: Front-end compilado em Node e entregue por Nginx otimizado para rotas; Back-end compilado com Maven e executado em container isolado; deploy contínuo em VPS gerenciado via Coolify.'
    }
  },
  {
    id: 'bacbo',
    title: 'Casino Online (API / Web)',
    category: 'fullstack',
    shortDesc: 'Monitoramento em tempo real de resultados de cassino ao vivo com Selenium Headless, gestão de bancas e processamento automático de assinaturas via PIX.',
    tags: [
      { name: 'Java 17', class: 'badge-java-tag' },
      { name: 'Spring Boot 3', class: 'badge-spring-tag' },
      { name: 'Angular 21 SSR', class: 'badge-angular-tag' },
      { name: 'PostgreSQL 16', class: 'badge-postgres-tag' },
      { name: 'Docker', class: 'badge-docker-tag' }
    ],
    previewType: 'table',
    previewData: {
      title: 'bacbo.live/painel',
      status: ['Vitória Azul', 'Empate Tie', 'Vitória Vermelho'],
      colors: ['pill-cyan', 'pill-green', 'pill-rose']
    },
    demoUrl: 'https://www.sinaiscassino.com.br',
    repoFrontend: 'https://github.com/luizodonel/bacboweb',
    repoFrontendName: 'bacboweb',
    repoBackend: 'https://github.com/luizodonel/bacboAPI',
    repoBackendName: 'bacboAPI',
    fullReport: {
      headline: 'Casino Online — Visão Técnica & Arquitetura',
      overview: 'Plataforma fullstack de alta disponibilidade para monitoramento de resultados de cassino ao vivo, gestão financeira de bancas e processamento automático de assinaturas.',
      techStack: 'Back-end: Java 17, Spring Boot 3.2.5 (Spring MVC, Spring Data JPA, Spring Validation, Spring Mail). Front-end & SSR: Angular 21 (Standalone Components, Signals), TypeScript, Node.js 22, Express 5. Mobile: Capacitor 8 (empacotamento híbrido para Android e iOS). Banco de Dados: PostgreSQL 16 (Produção) e H2 Database (Testes locais). Scraping / Automação: Selenium WebDriver 4.24 + Google Chrome Headless + WebDriverManager. DevOps: Docker (Multi-stage builds), Docker Compose, Coolify (PaaS / VPS).',
      integrations: [
        'Mercado Pago API (Cobranças PIX & Assinaturas): Criação de pagamentos via API REST do Mercado Pago; geração de QR Code com lib Google ZXing no backend (Base64 e Copia-e-Cola síncronos); Webhook transacional (POST /pagamentos/webhook) com validação de status "approved" e extensão atômica da assinatura do usuário em 30 dias com @Transactional.',
        'SuitPay API (Gateway de Depósitos e Saques): Integração de serviços de carteira digital (CarteiraService e SuitPayService) para processar cash-in e cash-out via PIX para os usuários.',
        'Playfiver API (Provedor de Cassino): Integração com agregador externo via chaves de autenticação (playfiver.agent.token e secret); implementação de Webhook (PlayfiverWebhookController) para resolução de apostas, débitos/créditos de saldo e validação de sessão em tempo real.',
        'TheOddsApi (Apostas Esportivas): Consumo de dados esportivos externos com parsing de odds e partidas para a camada de apostas (ApostaEsportiva).',
        'Jakarta Mail / SMTP Gmail: Envio assíncrono de e-mails transacionais (EmailService) para fluxo de recuperação de senha com geração e validação de tokens numéricos de 6 dígitos com expiração.'
      ],
      architecture: '1. Back-end (Spring Boot 3): Arquitetura em Camadas (Controller ➔ Service ➔ Repository ➔ Model + DTO) com blindagem DTO/Entity e validação Bean Validation (@Valid, @NotNull, @NotBlank); segurança de senhas com BCrypt; worker do Selenium rodando em container Linux com Chrome estável headless (--headless=new, --no-sandbox) contornando proteções via CDP. 2. Front-end (Angular 21 + SSR Express): Padrão BFF / Proxy Reverso com Express 5 interceptando /api/* com http-proxy-middleware, eliminando CORS e blindando o IP do backend; HttpInterceptor para normalização de rotas relativas no SSR e estado reativo com Standalone Components.',
      database: 'PostgreSQL 16: Relacionamentos e integridade referencial com deleção em cascata (usuarios 1:N bancas 1:N bancas_diarias ON DELETE CASCADE, usuarios 1:N pagamentos e apostas); controle transacional estrito com @Transactional em liquidações financeiras; índices criados especificamente em colunas de consulta frequente (cpf, email, usuario_id, data_criacao).',
      devops: 'Docker Multi-Stage no Back-end (Stage 1 Maven builder ➔ Stage 2 imagem enxuta eclipse-temurin:17-jdk-jammy com Google Chrome estável instalado e JAVA_OPTS limitando heap/metaspace para servidores de 1GB a 2GB RAM). Docker Multi-Stage no Front-end (Build Angular SSR com Node 22 e execução leve com Express). Deploy em Produção orquestrado via Docker Compose e Coolify com rede bridge interna, volumes persistentes e certificados SSL automáticos.'
    }
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp (Envio de Mensagens corporativas)',
    category: 'automacao',
    shortDesc: 'Motor de automação em escala para WhatsApp com inteligência anti-banimento (Spintax, delays humanizados), fila assíncrona e auto-resposta.',
    tags: [
      { name: 'Node.js', class: 'badge-node-tag' },
      { name: 'Express', class: 'badge-node-tag' },
      { name: 'Angular 18', class: 'badge-angular-tag' },
      { name: 'WWebJS / Puppeteer', class: 'badge-docker-tag' },
      { name: 'Docker', class: 'badge-docker-tag' }
    ],
    demoUrl: '#',
    repoUrl: 'https://github.com/luizodonel/whatsappMensagens',
    fullReport: {
      headline: 'WhatsApp — Visão Técnica & Arquitetura',
      overview: 'Motor fullstack para automação de mensagens em escala com algoritmos inteligentes de prevenção de bloqueios (anti-ban), processamento de filas assíncronas tolerante a falhas e auto-resposta conversacional baseada em eventos.',
      techStack: 'Back-end: Node.js, Express, whatsapp-web.js (WWebJS), Puppeteer (Chromium Headless), Multer. Front-end: Angular 18 (Standalone Components, TypeScript, RxJS). Autenticação: WWebJS LocalAuth (sessão persistente em disco sem re-scan). Datastore: JSON com serialização atômica.',
      integrations: [
        'Validação de 9º Dígito e Validade de Conta: Consulta via getNumberId para descartar números sem WhatsApp antes do envio, evitando flags.',
        'Spintax & Rotação de Mensagens: Intercalação de múltiplos modelos de mensagens para evitar detecção de spam por repetição de padrões.',
        'Delays Humanizados com Jitter: Intervalos dinâmicos aleatórios entre 60 e 90 segundos entre disparos para respeitar os limites da rede.',
        'Simulação de Digitação Humana: Emulação de chat.sendStateTyping() por 3 segundos antes do envio de respostas automáticas.',
        'Auto-Resposta com Deduplicação: Escuta em tempo real (client.on) com persistência em replied.json para responder novos leads sem repetições nem loops.'
      ],
      architecture: 'Back-end orientado por eventos desacoplado onde o envio roda em background após resposta HTTP imediata. O Front-end em Angular monitora o progresso em tempo real através de polling reativo no endpoint /api/status. Tolerância a falhas com remoção atômica pós-envio garantindo retomada imediata em caso de reinicialização.',
      database: 'Persistência em datastore local serializado (contacts.json e replied.json) com arquivo de auditoria de exceções (erros_envio.txt).',
      devops: 'Container Docker configurado com runtime Chromium e flags (--no-sandbox, --disable-setuid-sandbox) para execução ininterrupta na VPS.'
    }
  }
];

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  setupFilters();
  setupModal();
  setupSmoothScroll();
});

// Render Projects Cards
function renderProjects(filter) {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const filtered = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => {
    const hasLiveDemo = p.demoUrl && p.demoUrl !== '#';

    return `
      <div class="project-card" data-id="${p.id}">
        <div class="card-body">
          <h3 class="card-title" onclick="openProjectModal('${p.id}')" style="cursor: pointer;">
            ${p.title}
          </h3>
          <p class="card-description">${p.shortDesc}</p>
          
          <div class="card-tags">
            ${p.tags.map(t => `<span class="tech-badge ${t.class}">${t.name}</span>`).join('')}
          </div>

          <div class="card-footer">
            ${hasLiveDemo
        ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="action-link">
                   Acessar Sistema <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                 </a>`
        : `<a href="javascript:void(0)" class="action-link" onclick="openProjectModal('${p.id}')">
                   Ver Detalhes <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                 </a>`
      }
            ${p.repoFrontend
        ? `<a href="javascript:void(0)" class="action-link-source" onclick="openProjectModal('${p.id}')">
                   Código-fonte
                 </a>`
        : `<a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="action-link-source">
                   Código-fonte ↗
                 </a>`
      }
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Setup Filters
function setupFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

// Open Technical Details Modal
window.openProjectModal = function (id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <div>
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 1px;">Visão Técnica do Projeto</span>
        <h3>${project.title}</h3>
      </div>
      <button class="modal-close-btn" onclick="closeModal('projectModal')">&times;</button>
    </div>

    <!-- Botões na Parte Superior -->
    <div class="modal-top-actions">
      ${project.demoUrl && project.demoUrl !== '#'
      ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 18px; font-size: 0.88rem;">Acessar Sistema ↗</a>`
      : ''
    }
      ${project.repoFrontend
      ? `<a href="${project.repoFrontend}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 10px 18px; font-size: 0.88rem;">Front-end (Código Fonte) ↗</a>`
      : ''
    }
      ${project.repoBackend
      ? `<a href="${project.repoBackend}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 10px 18px; font-size: 0.88rem;">Back-end (Código Fonte) ↗</a>`
      : ''
    }
      ${project.repoUrl && !project.repoFrontend
      ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 10px 18px; font-size: 0.88rem;">Repositório GitHub ↗</a>`
      : ''
    }
    </div>

    <div class="modal-body">
      <p style="font-size: 1.05rem; font-weight: 600; color: #f8fafc; margin-bottom: 12px;">${project.fullReport.headline}</p>
      <p>${project.fullReport.overview}</p>

      <h4>Stack de Tecnologias</h4>
      <div class="modal-tech-pills">
        ${project.tags.map(t => `<span class="tech-badge ${t.class}" style="font-size: 0.85rem; padding: 5px 12px;">${t.name}</span>`).join('')}
      </div>
      <p style="font-size: 0.9rem; color: #94a3b8;">${project.fullReport.techStack}</p>

      <h4>Integrações & Desafios Técnicos Superados</h4>
      <ul>
        ${project.fullReport.integrations.map(item => `<li>${item}</li>`).join('')}
      </ul>

      <h4>Arquitetura & Design</h4>
      <p>${project.fullReport.architecture}</p>

      <h4>Banco de Dados & Modelagem</h4>
      <p>${project.fullReport.database}</p>

      <h4>DevOps</h4>
      <p>${project.fullReport.devops}</p>
    </div>

    <div class="modal-footer">
      <button class="btn-secondary" onclick="closeModal('projectModal')" style="padding: 10px 20px; font-size: 0.9rem;">Fechar</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Open Resume/Curriculum Modal
window.openCurriculumModal = function () {
  const modal = document.getElementById('curriculumModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Open Contact Modal
window.openContactModal = function () {
  const modal = document.getElementById('contactModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Close Modals
window.closeModal = function (modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
};

// Close when clicking on backdrop
function setupModal() {
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // ESC to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlays.forEach(o => o.classList.remove('active'));
      document.body.style.overflow = 'auto';
    }
  });
}

// Smooth scroll & Active Nav Indicator
function setupSmoothScroll() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
}
