/**
 * LUIZ ODONEL - PORTFOLIO INTERACTIVITY & DATA
 */

const projectsData = [
  {
    id: 'comboio',
    title: 'Comboio Logística & Telemetria',
    category: 'fullstack',
    shortDesc: 'Motor de logística com roteirização em malha rodoviária real (OSRM), otimização de rotas com algoritmo 2-Opt e telemetria de frotas.',
    tags: [
      { name: 'Java 17', class: 'badge-java-tag' },
      { name: 'Spring Boot', class: 'badge-spring-tag' },
      { name: 'Angular 21', class: 'badge-angular-tag' },
      { name: 'PostgreSQL', class: 'badge-postgres-tag' },
      { name: 'Leaflet OSRM', class: 'badge-node-tag' }
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
      techStack: 'Java 17, Spring Boot, Spring Data JPA, Hibernate, Angular 21 (Signals e Standalone Components), PostgreSQL 16 (schema isolado), Leaflet.js, OSRM (Open Source Routing Machine), Docker Multi-stage, Coolify.',
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
    title: 'Bac Bo Plataforma & Extrator',
    category: 'fullstack',
    shortDesc: 'Monitoramento em tempo real de mesas de Bac Bo com Selenium Headless, gestão de bancas e processamento de assinaturas via PIX com Webhook.',
    tags: [
      { name: 'Java 17', class: 'badge-java-tag' },
      { name: 'Spring Boot 3', class: 'badge-spring-tag' },
      { name: 'Angular 21 SSR', class: 'badge-angular-tag' },
      { name: 'PostgreSQL', class: 'badge-postgres-tag' },
      { name: 'Docker', class: 'badge-docker-tag' }
    ],
    previewType: 'table',
    previewData: {
      title: 'bacbo.live/painel',
      status: ['Vitória Azul', 'Empate Tie', 'Vitória Vermelho'],
      colors: ['pill-cyan', 'pill-green', 'pill-rose']
    },
    demoUrl: 'https://www.sinaiscassino.com.br',
    repoUrl: 'https://github.com/luizodonel/bacboAPI',
    fullReport: {
      headline: 'Bac Bo Platform — Visão Técnica & Arquitetura',
      overview: 'Plataforma fullstack de alta disponibilidade para monitoramento de resultados de cassino ao vivo, gestão financeira de bancas e processamento automático de assinaturas.',
      techStack: 'Java 17, Spring Boot 3.2.5 (Spring MVC, Spring Data JPA, Spring Validation, Spring Mail), Angular 21 (Standalone Components, Signals, SSR com Express 5 e Capacitor 8 Mobile), PostgreSQL 16, Selenium WebDriver 4.24 + Chrome Headless, Mercado Pago SDK, ZXing, SuitPay, Playfiver API, TheOddsApi, Docker Multi-stage.',
      integrations: [
        'Mercado Pago API (Cobranças PIX): Geração síncrona de QR Code com lib Google ZXing (Base64 + Copia e Cola) e Webhook (POST /pagamentos/webhook) com ativação atômica de 30 dias de assinatura (@Transactional).',
        'SuitPay API: Integração de serviços de carteira digital para processamento de depósitos e saques via PIX.',
        'Playfiver API: Agregador de cassino com autenticação por token/secret e webhooks transacionais de débito, crédito e validação de sessão.',
        'TheOddsApi: Ingestão de cotações esportivas e liquidação automatizada de bilhetes.',
        'Selenium Headless em Linux: Raspagem contínua de resultados de mesas ao vivo dentro do contêiner Docker contornando proteções via CDP.'
      ],
      architecture: 'Back-end em camadas (Controller ➔ Service ➔ Repository ➔ Model/DTO) com BCrypt e validação Bean Validation. Front-end em Angular 21 SSR com Express 5 atuando como BFF e Proxy Reverso (/api/*), blindando rotas internas e eliminando CORS.',
      database: 'PostgreSQL 16 com relacionamentos 1:N com integridade referencial em cascata (ON DELETE CASCADE) e índices em colunas críticas (cpf, email, usuario_id, data_criacao).',
      devops: 'Docker Multi-stage (Maven builder + Debian Jammy com Google Chrome estável instalado), deploy automatizado via Docker Compose e Coolify com SSL automático.'
    }
  },
  {
    id: 'financeiro',
    title: 'Gerenciador Financeiro & Bancas',
    category: 'fullstack',
    shortDesc: 'Controle de saldo, metas de stop-loss e stop-win diários, gráficos de evolução de patrimônio e relatórios analíticos.',
    tags: [
      { name: 'Java', class: 'badge-java-tag' },
      { name: 'Spring Boot', class: 'badge-spring-tag' },
      { name: 'Angular', class: 'badge-angular-tag' },
      { name: 'PostgreSQL', class: 'badge-postgres-tag' }
    ],
    previewType: 'table',
    previewData: {
      title: 'app.banca/relatorios',
      status: ['Meta Atingida', 'Stop Loss', 'Operando'],
      colors: ['pill-green', 'pill-rose', 'pill-cyan']
    },
    demoUrl: '#',
    repoUrl: 'https://github.com/luizodonel',
    fullReport: {
      headline: 'Gestão de Capital com Alertas em Tempo Real',
      overview: 'Dashboard para acompanhamento minucioso de metas financeiras diárias, gestão de risco de capital e histórico detalhado de operações.',
      techStack: 'Java 17, Spring Boot, Spring Data JPA, Angular, Chart.js, PostgreSQL.',
      integrations: [
        'Cálculo automático de metas dinâmicas proporcionais aos dias úteis e volume de operações.',
        'Exportação de extratos e consolidação mensal de resultados com regras estritas de stop-loss.'
      ],
      architecture: 'API RESTful transacional com garantia de consistência de saldos debitados e creditados.',
      database: 'PostgreSQL modelado com particionamento de lançamentos por ano e mês para alta performance em consultas analíticas.',
      devops: 'Containerização Docker com deploy contínuo em VPS.'
    }
  },
  {
    id: 'agendamentos',
    title: 'Sistema de Agendamentos',
    category: 'fullstack',
    shortDesc: 'Plataforma completa de agendamentos para clientes e profissionais com validação de horários conflitantes e notificações.',
    tags: [
      { name: 'Java', class: 'badge-java-tag' },
      { name: 'Spring Boot', class: 'badge-spring-tag' },
      { name: 'Angular', class: 'badge-angular-tag' },
      { name: 'PostgreSQL', class: 'badge-postgres-tag' }
    ],
    previewType: 'table',
    previewData: {
      title: 'agenda.online/painel',
      status: ['Confirmado', 'Pendente', 'Em Atendimento'],
      colors: ['pill-green', 'pill-amber', 'pill-purple']
    },
    demoUrl: '#',
    repoUrl: 'https://github.com/luizodonel',
    fullReport: {
      headline: 'Agendamento Automatizado com Prevenção de Conflitos',
      overview: 'Sistema de agendamento online com calendário dinâmico, confirmação automática de horários e gestão de disponibilidade dos profissionais.',
      techStack: 'Java, Spring Boot, Angular, PostgreSQL, Jakarta Mail.',
      integrations: [
        'Algoritmo de validação de intervalos livres em tempo real para evitar double-booking.',
        'Envio de e-mails automáticos de confirmação e lembretes aos clientes.'
      ],
      architecture: 'Clean Architecture com Services dedicados a regras de agendamento, cancelamento e auditoria.',
      database: 'PostgreSQL com relacionamentos entre prestadores, clientes, serviços e slots de agenda.',
      devops: 'Deploy automatizado em nuvem gerenciada via Docker.'
    }
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Automation Sender',
    category: 'automacao',
    shortDesc: 'Sistema automatizado de disparos em massa, filas de mensagens assíncronas com controle de delay e webhook de respostas.',
    tags: [
      { name: 'Node.js', class: 'badge-node-tag' },
      { name: 'Express', class: 'badge-node-tag' },
      { name: 'WWebJS', class: 'badge-docker-tag' },
      { name: 'Docker', class: 'badge-docker-tag' }
    ],
    previewType: 'table',
    previewData: {
      title: 'wpp.sender/queue',
      status: ['Fila Ativa', 'Enviado 100%', 'Respondido'],
      colors: ['pill-cyan', 'pill-green', 'pill-purple']
    },
    demoUrl: '#',
    repoUrl: 'https://github.com/luizodonel',
    fullReport: {
      headline: 'Engine de Automação de Mensagens e Respostas em Escala',
      overview: 'Motor inteligente para envio de notificações, cobranças e mensagens de suporte via WhatsApp com controle de retenção e prevenção de bloqueios.',
      techStack: 'Node.js, Express, WhatsApp-Web.js, Puppeteer, Docker.',
      integrations: [
        'Gestão de fila assíncrona com rate-limiting e jitter aleatório para emular digitação humana.',
        'Webhook receptor para registro e resposta de mensagens recebidas de clientes.'
      ],
      architecture: 'Arquitetura orientada a eventos para despacho de mensagens com persistência de sessões seguras em disco.',
      database: 'Persistência de histórico de envios, erros e relatórios de entrega.',
      devops: 'Container Docker configurado com Chromium para execução ininterrupta na VPS.'
    }
  },
  {
    id: 'cassino',
    title: 'Engine de Cassino & Mines',
    category: 'backend',
    shortDesc: 'Motor de apostas com lógica Provably Fair, integração de provedores parceiros via Playfiver e liquidação instantânea.',
    tags: [
      { name: 'Java 17', class: 'badge-java-tag' },
      { name: 'Spring Boot', class: 'badge-spring-tag' },
      { name: 'Playfiver API', class: 'badge-docker-tag' },
      { name: 'PostgreSQL', class: 'badge-postgres-tag' }
    ],
    previewType: 'chart',
    previewData: {
      title: 'games.engine/mines',
      status: ['Hash Verificado', 'Cashout 3.4x', 'Aposta Ativa'],
      colors: ['pill-green', 'pill-cyan', 'pill-amber']
    },
    demoUrl: '#',
    repoUrl: 'https://github.com/luizodonel',
    fullReport: {
      headline: 'Engine de Jogos Provably Fair e Liquidação Transacional',
      overview: 'Backend de alta concorrência para processamento de jogos de aposta rápida (Mines) com geração criptográfica verificável e integração a agregadores externos.',
      techStack: 'Java 17, Spring Boot 3, Spring Data JPA, PostgreSQL, Playfiver API.',
      integrations: [
        'Playfiver Agregator API: Autenticação mútua via tokens e secret keys para lançamento de sessões de jogos de terceiros.',
        'Webhooks de saldo: Validação de requisições de débito e crédito enviadas pelo provedor externo em tempo real.'
      ],
      architecture: 'Isolamento rigoroso de regras financeiras com `@Transactional` para evitar race conditions em saldos concorrentes.',
      database: 'PostgreSQL com tabelas de apostas, histórico de multiplicadores e auditoria de transações.',
      devops: 'Deploy em container Docker com parâmetros otimizados de JVM.'
    }
  },
  {
    id: 'pix-gateway',
    title: 'Gateway PIX & Conciliação Automática',
    category: 'backend',
    shortDesc: 'Módulo dedicado para geração de PIX com QR Code dinâmico, idempotência de webhooks e estorno programado.',
    tags: [
      { name: 'Java 17', class: 'badge-java-tag' },
      { name: 'Spring Boot', class: 'badge-spring-tag' },
      { name: 'Mercado Pago', class: 'badge-java-tag' },
      { name: 'ZXing', class: 'badge-angular-tag' }
    ],
    previewType: 'table',
    previewData: {
      title: 'pix.gateway/transacoes',
      status: ['PIX Aprovado', 'QR Code Gerado', 'Conciliado'],
      colors: ['pill-green', 'pill-cyan', 'pill-purple']
    },
    demoUrl: '#',
    repoUrl: 'https://github.com/luizodonel',
    fullReport: {
      headline: 'Solução Completa de Pagamentos Instantâneos via PIX',
      overview: 'Microsserviço de cobrança automática com geração de QR Code Copia e Cola e renderização em imagem sem dependências externas em tempo de execução.',
      techStack: 'Java 17, Spring Boot, Mercado Pago SDK, ZXing (Zebra Crossing), PostgreSQL.',
      integrations: [
        'Mercado Pago Payments API: Geração dinâmica de faturas com expiração configurada.',
        'Google ZXing: Geração in-memory de BitMatrix convertida diretamente em PNG Base64.',
        'Webhook Receiver: Tratamento de notificações com verificação de assinatura e idempotência.'
      ],
      architecture: 'Mecanismo de conciliação assíncrono com polling inteligente de contingência caso o webhook do gateway falhe.',
      database: 'Tabela de pagamentos com chave estrangeira para o cliente e índices em IDs de transação.',
      devops: 'Empacotado em container Docker para uso independente ou integrado.'
    }
  },
  {
    id: 'esportes',
    title: 'Bet Settler & Odds Esportivas',
    category: 'backend',
    shortDesc: 'Consumo contínuo de odds de partidas de futebol via TheOddsApi e liquidação automática de bilhetes esportivos.',
    tags: [
      { name: 'Java 17', class: 'badge-java-tag' },
      { name: 'Spring Boot', class: 'badge-spring-tag' },
      { name: 'TheOddsApi', class: 'badge-node-tag' },
      { name: 'PostgreSQL', class: 'badge-postgres-tag' }
    ],
    previewType: 'chart',
    previewData: {
      title: 'sports.odds/live',
      status: ['Green', 'Ao Vivo', 'Odd 2.15'],
      colors: ['pill-green', 'pill-rose', 'pill-cyan']
    },
    demoUrl: '#',
    repoUrl: 'https://github.com/luizodonel',
    fullReport: {
      headline: 'Processador de Apostas Esportivas e Liquidação Automatizada',
      overview: 'Serviço responsável por capturar cotações esportivas em tempo real, gerenciar apostas múltiplas/simples e liquidar lucros automaticamente assim que os jogos terminam.',
      techStack: 'Java 17, Spring Boot, TheOddsApi, Spring Data JPA, PostgreSQL.',
      integrations: [
        'TheOddsApi: Ingestão de linhas de apostas (Moneyline, Over/Under, Ambas Marcam).',
        'BetSettlementService: Verificação periódica de placares finais para premiação instantânea na carteira do usuário.'
      ],
      architecture: 'Workers agendados com `@Scheduled` e processamento assíncrono de liquidação em lotes.',
      database: 'Modelagem de bilhetes, seleções esportivas, odds contratadas e status do evento.',
      devops: 'Container Docker com monitoramento de integridade e logs detalhados.'
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
        <div class="card-preview" onclick="openProjectModal('${p.id}')" style="cursor: pointer;">
          <div class="preview-bar">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="url-pill"></span>
          </div>
          <div class="preview-content">
            ${renderPreviewGraphic(p)}
          </div>
        </div>

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
                   Acessar Sistema <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                 </a>`
            }
            <a href="javascript:void(0)" class="action-link-source" onclick="openProjectModal('${p.id}')">
              Código-fonte
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Generate UI vector mockups inside preview
function renderPreviewGraphic(project) {
  if (project.previewType === 'chart') {
    return `
      <div class="ui-mockup-table">
        <div class="ui-mockup-header">
          <span style="font-size: 0.68rem; color: #94a3b8; font-family: monospace;">${project.previewData.title}</span>
          <span class="ui-mockup-pill ${project.previewData.colors[0]}"></span>
        </div>
        <div class="ui-mockup-chart">
          <div class="chart-bar" style="height: 35%;"></div>
          <div class="chart-bar" style="height: 60%;"></div>
          <div class="chart-bar" style="height: 45%;"></div>
          <div class="chart-bar" style="height: 85%;"></div>
          <div class="chart-bar" style="height: 70%;"></div>
          <div class="chart-bar" style="height: 95%;"></div>
          <div class="chart-bar" style="height: 65%;"></div>
        </div>
      </div>
    `;
  }

  return `
    <div class="ui-mockup-table">
      <div class="ui-mockup-header">
        <span style="font-size: 0.68rem; color: #94a3b8; font-family: monospace;">${project.previewData.title}</span>
        <span class="ui-mockup-pill ${project.previewData.colors[0]}"></span>
      </div>
      <div class="ui-mockup-row">
        <span style="font-size: 0.65rem; color: #cbd5e1;">Registro 01</span>
        <span class="ui-mockup-pill ${project.previewData.colors[0]}"></span>
      </div>
      <div class="ui-mockup-row">
        <span style="font-size: 0.65rem; color: #cbd5e1;">Registro 02</span>
        <span class="ui-mockup-pill ${project.previewData.colors[1]}"></span>
      </div>
      <div class="ui-mockup-row">
        <span style="font-size: 0.65rem; color: #cbd5e1;">Registro 03</span>
        <span class="ui-mockup-pill ${project.previewData.colors[2]}"></span>
      </div>
    </div>
  `;
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
window.openProjectModal = function(id) {
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
        ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 10px 18px; font-size: 0.88rem;">Acessar Sistema em Produção ↗</a>` 
        : ''
      }
      ${project.repoFrontend 
        ? `<a href="${project.repoFrontend}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 10px 18px; font-size: 0.88rem;">Front-end (comboioWeb) ↗</a>` 
        : ''
      }
      ${project.repoBackend 
        ? `<a href="${project.repoBackend}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 10px 18px; font-size: 0.88rem;">Back-end (comboioAPI) ↗</a>` 
        : ''
      }
      ${project.repoUrl && !project.repoFrontend 
        ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding: 10px 18px; font-size: 0.88rem;">Repositório GitHub ↗</a>` 
        : ''
      }
      <button class="btn-secondary" onclick="closeModal('projectModal')" style="padding: 10px 18px; font-size: 0.88rem;">Fechar</button>
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

      <h4>DevOps & Práticas de Produção</h4>
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
window.openCurriculumModal = function() {
  const modal = document.getElementById('curriculumModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Open Contact Modal
window.openContactModal = function() {
  const modal = document.getElementById('contactModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Close Modals
window.closeModal = function(modalId) {
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
