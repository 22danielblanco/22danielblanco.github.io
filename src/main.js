import * as THREE from 'three'
import './style.css'

const PROFILE = {
  name: 'Daniel Blanco',
  brand: 'DANI PROJECTS',
  githubUser: '22danielblanco',
  github: 'https://github.com/22danielblanco',
  linkedin: 'https://www.linkedin.com/in/daniel-blanco-de-miguel/'
}

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const projects = [
  {
    id: 'avi',
    title: 'AVI-MAMA',
    domain: { es: 'Health AI', en: 'Health AI' },
    cluster: 'health',
    maturity: { es: 'Prototipo avanzado', en: 'Advanced prototype' },
    kicker: {
      es: 'Asistente conversacional para educación y acompañamiento en salud',
      en: 'Conversational assistant for health education and patient support'
    },
    summary: {
      es: 'Interfaz multimodal orientada a pacientes que combina avatar 3D, voz, conversación multilingüe, conocimiento médico curado y recursos contextuales.',
      en: 'A patient-oriented multimodal interface combining a 3D avatar, voice, multilingual conversation, curated medical knowledge and contextual resources.'
    },
    challenge: {
      es: 'Convertir información sanitaria compleja en una interacción comprensible, natural y segura, sin presentar al asistente como sustituto del profesional sanitario.',
      en: 'Turn complex health information into a clear, natural and safe interaction without presenting the assistant as a substitute for clinical professionals.'
    },
    solution: {
      es: 'Un asistente visual con interacción por voz y texto, contenido médico trazable, experiencia local-first y apoyo multimedia sincronizado con la conversación.',
      en: 'A visual assistant with voice and text interaction, traceable medical content, a local-first experience and multimedia support tied to the conversation.'
    },
    stack: ['Angular', 'Three.js / GLB', 'Blender', 'Voice UX', 'RAG', 'Local AI'],
    highlights: {
      es: ['Avatar 3D animado', 'Voz y conversación continua', 'ES / EN / FR / DE', 'Conocimiento médico curado', 'Modo local sin backend'],
      en: ['Animated 3D avatar', 'Voice and continuous conversation', 'ES / EN / FR / DE', 'Curated medical knowledge', 'Local mode without backend']
    },
    metrics: [
      [{ es: 'Interacción', en: 'Interaction' }, 'Voice + text'],
      [{ es: 'Idiomas', en: 'Languages' }, '4'],
      [{ es: 'Enfoque', en: 'Approach' }, 'Local-first']
    ],
    preview: 'real',
    screenshots: [
      { src: asset('projects/avi/avi-main.png'), alt: 'AVI-MAMA main conversational interface' },
      { src: asset('projects/avi/avi-visual.png'), alt: 'AVI-MAMA visual conversation mode' }
    ],
    demo: 'avi'
  },
  {
    id: 'career',
    title: 'HealthTech Career Studio',
    domain: { es: 'CareerTech · HealthTech', en: 'CareerTech · HealthTech' },
    cluster: 'health',
    maturity: { es: 'v0.10+', en: 'v0.10+' },
    kicker: {
      es: 'Inteligencia de empleo y optimización de CV para HealthTech',
      en: 'Job intelligence and CV optimisation for HealthTech'
    },
    summary: {
      es: 'Workspace para descubrir empresas y ofertas, normalizar fuentes, filtrar oportunidades y adaptar CVs a procesos ATS y sistemas de matching.',
      en: 'A workspace to discover companies and roles, normalise sources, filter opportunities and adapt CVs to ATS and matching workflows.'
    },
    challenge: {
      es: 'Las oportunidades HealthTech están fragmentadas entre bolsas de empleo, páginas corporativas y ATS, con datos inconsistentes y procesos difíciles de comparar.',
      en: 'HealthTech opportunities are fragmented across job boards, company sites and ATS platforms, with inconsistent data and hard-to-compare application flows.'
    },
    solution: {
      es: 'Una capa de inteligencia que consolida oferta, empresa, encaje del perfil, skills y preparación del CV en un único flujo de decisión.',
      en: 'An intelligence layer that consolidates roles, companies, fit, skills and CV preparation into one decision workflow.'
    },
    stack: ['Angular', 'Ingestion', 'Data quality', 'AI matching', 'ATS research'],
    highlights: {
      es: ['Ingesta multi-fuente', 'Normalización de descripciones', 'Matching de skills', 'CV Studio', 'Catálogo de empresas'],
      en: ['Multi-source ingestion', 'Description normalisation', 'Skill matching', 'CV Studio', 'Company catalogue']
    },
    metrics: [
      [{ es: 'Ámbito', en: 'Scope' }, 'HealthTech'],
      [{ es: 'Flujo', en: 'Workflow' }, 'Discover → Match'],
      [{ es: 'Fuentes', en: 'Sources' }, 'Multi-source']
    ],
    preview: 'synthetic', demo: 'career'
  },
  {
    id: 'has',
    title: 'Health Analytics Studio',
    domain: { es: 'Data · HealthTech', en: 'Data · HealthTech' },
    cluster: 'data',
    maturity: { es: 'Diseño de producto', en: 'Product design' },
    kicker: {
      es: 'Analítica operacional e investigación sobre OpenSearch',
      en: 'Operational analytics and investigation over OpenSearch'
    },
    summary: {
      es: 'Studio seguro para descubrir índices y campos, construir consultas, explorar relaciones, crear visualizaciones, investigar eventos y organizar dashboards.',
      en: 'A secure studio to discover indices and fields, build queries, explore relationships, create visualisations, investigate events and organise dashboards.'
    },
    challenge: {
      es: 'Reducir la fricción entre datos operacionales complejos y usuarios que necesitan investigar, visualizar y validar información sin depender continuamente de desarrollo.',
      en: 'Reduce the friction between complex operational data and users who need to investigate, visualise and validate information without constant developer dependency.'
    },
    solution: {
      es: 'Una interfaz de exploración con seguridad integrada, herramientas de consulta y visualización y flujos de investigación orientados a usuarios analíticos.',
      en: 'An exploration interface with integrated security, query and visualisation tools, and investigation workflows for analytical users.'
    },
    stack: ['OpenSearch', 'Keycloak', 'Analytics', 'Dashboards', 'DevTools'],
    highlights: {
      es: ['Descubrimiento de índices', 'Joins y agregaciones', 'Dashboards', 'Investigate', 'DevTools integrado'],
      en: ['Index discovery', 'Joins and aggregations', 'Dashboards', 'Investigate', 'Integrated DevTools']
    },
    metrics: [
      [{ es: 'Búsqueda', en: 'Search' }, 'Index-aware'],
      [{ es: 'Seguridad', en: 'Security' }, 'SSO / RBAC'],
      [{ es: 'Flujo', en: 'Workflow' }, 'Explore → Investigate']
    ],
    preview: 'synthetic', demo: 'analytics'
  },
  {
    id: 'des',
    title: 'Data Engineering Studio',
    domain: { es: 'Data Engineering', en: 'Data Engineering' },
    cluster: 'data',
    maturity: { es: 'Diseño de producto', en: 'Product design' },
    kicker: {
      es: 'Autoría de ETL, consultas y DAGs desde una interfaz controlada',
      en: 'ETL, query and DAG authoring from a controlled interface'
    },
    summary: {
      es: 'Herramienta para modelar lógica ETL, queries y agregaciones y generar scripts o DAGs manteniendo convenciones, metadatos y trazabilidad del proceso.',
      en: 'A tool to model ETL logic, queries and aggregations and generate scripts or DAGs while preserving conventions, metadata and process traceability.'
    },
    challenge: {
      es: 'Estandarizar patrones repetitivos de ingeniería de datos sin perder control sobre la lógica, el contexto ni las convenciones de despliegue.',
      en: 'Standardise repetitive data-engineering patterns without losing control of logic, context or deployment conventions.'
    },
    solution: {
      es: 'Una capa visual que convierte decisiones de proceso en artefactos técnicos reproducibles, con salida a scripts y DAGs.',
      en: 'A visual layer that converts process decisions into reproducible technical artefacts, with script and DAG outputs.'
    },
    stack: ['Airflow', 'OpenSearch', 'ETL', 'Code generation', 'Keycloak'],
    highlights: {
      es: ['Queries automáticas/manuales', 'Generación de DAGs', 'Plantillas de proceso', 'Metadatos persistentes', 'Autenticación común'],
      en: ['Automatic/manual queries', 'DAG generation', 'Process templates', 'Persistent metadata', 'Shared authentication']
    },
    metrics: [
      [{ es: 'Salida', en: 'Output' }, 'Scripts / DAGs'],
      [{ es: 'Queries', en: 'Queries' }, 'Auto / Manual'],
      [{ es: 'Objetivo', en: 'Goal' }, 'Repeatability']
    ],
    preview: 'synthetic', demo: 'data'
  },
  {
    id: 'businessos',
    title: 'BusinessOS Studio',
    domain: { es: 'B2B SaaS', en: 'B2B SaaS' },
    cluster: 'platform',
    maturity: { es: 'Camino a v1.0', en: 'Towards v1.0' },
    kicker: {
      es: 'Builder de CRM vertical y operaciones para pequeños negocios',
      en: 'Vertical CRM and operations builder for small businesses'
    },
    summary: {
      es: 'Núcleo configurable para comercio, restauración, peluquerías y administración de fincas, con módulos operativos, finanzas, clientes y control por roles.',
      en: 'A configurable core for retail, restaurants, salons and property administration, with operations, finance, customer and role-based modules.'
    },
    challenge: {
      es: 'Ofrecer software muy adaptado a cada negocio sin convertir cada cliente en un proyecto completamente distinto y difícil de mantener.',
      en: 'Provide highly tailored software without turning every customer into a completely separate and hard-to-maintain project.'
    },
    solution: {
      es: 'Un núcleo modular configurable por vertical, con permisos, módulos y procesos activables según el modelo de negocio.',
      en: 'A modular core configurable by vertical, with permissions, modules and processes enabled according to the business model.'
    },
    stack: ['Angular', 'RBAC', 'CRM', 'Operations', 'Modular architecture'],
    highlights: {
      es: ['Roles y permisos', 'Módulos por vertical', 'Clientes y citas', 'Finanzas y facturación', 'Operación diaria'],
      en: ['Roles and permissions', 'Vertical modules', 'Customers and bookings', 'Finance and invoicing', 'Daily operations']
    },
    metrics: [
      [{ es: 'Modelo', en: 'Model' }, 'Multi-vertical'],
      [{ es: 'Acceso', en: 'Access' }, 'Role-based'],
      [{ es: 'Entrega', en: 'Delivery' }, 'Configurable']
    ],
    preview: 'synthetic', demo: 'business'
  },
  {
    id: 'aula',
    title: 'Aula Studio',
    domain: { es: 'EdTech', en: 'EdTech' },
    cluster: 'platform',
    maturity: { es: 'v1.0', en: 'v1.0' },
    kicker: {
      es: 'Plataforma multi-centro para presencia digital de colegios',
      en: 'Multi-school digital presence platform'
    },
    summary: {
      es: 'Plataforma común con contenidos y permisos separados por centro, identidades visuales distintas, previsualización, publicación y salida exportable.',
      en: 'A shared platform with separate content and permissions per school, distinct visual identities, preview/publish workflows and exportable delivery.'
    },
    challenge: {
      es: 'Mantener una base de producto reutilizable sin sacrificar la identidad, autonomía y necesidades de publicación de cada centro educativo.',
      en: 'Maintain a reusable product base without sacrificing each school’s identity, autonomy and publishing needs.'
    },
    solution: {
      es: 'Una plataforma multi-centro con separación de contenido, permisos y temas visuales, más un flujo seguro de borrador y publicación.',
      en: 'A multi-school platform separating content, permissions and visual themes, with a safe draft and publishing workflow.'
    },
    stack: ['Angular', 'CMS', 'Permissions', 'Themes', 'Maps'],
    highlights: {
      es: ['Tres sistemas visuales', 'Editor por centro', 'Draft / preview / publish', 'Mapas y contacto', 'Salida exportable'],
      en: ['Three visual systems', 'School-specific editor', 'Draft / preview / publish', 'Maps and contact', 'Exportable delivery']
    },
    metrics: [
      [{ es: 'Diseños', en: 'Designs' }, '3'],
      [{ es: 'Publicación', en: 'Publishing' }, 'Draft / Live'],
      [{ es: 'Modelo', en: 'Model' }, 'Multi-centre']
    ],
    preview: 'synthetic', demo: 'aula'
  },
  {
    id: 'wealth',
    title: 'Wealthpilot',
    domain: { es: 'FinTech · Decision support', en: 'FinTech · Decision support' },
    cluster: 'decision',
    maturity: { es: 'Prototipo', en: 'Prototype' },
    kicker: {
      es: 'Sistema operativo personal para patrimonio y decisiones financieras',
      en: 'Personal operating system for wealth and financial decisions'
    },
    summary: {
      es: 'Cockpit local-first para integrar nómina, ahorro, inversión, vivienda, fiscalidad, protección y simulaciones financieras en una sola vista.',
      en: 'A local-first cockpit integrating salary, savings, investments, property, taxes, protection and financial scenarios into one view.'
    },
    challenge: {
      es: 'Unificar decisiones que normalmente están repartidas entre bancos, hojas de cálculo, portales de inversión y cálculos aislados.',
      en: 'Unify decisions normally spread across banks, spreadsheets, investment portals and isolated calculations.'
    },
    solution: {
      es: 'Una interfaz orientada a decisiones que consolida balance, escenarios, rentabilidad y contexto en un modelo personal único.',
      en: 'A decision-oriented interface consolidating balance sheet, scenarios, returns and context into one personal model.'
    },
    stack: ['Angular', 'Capacitor', 'Local AI', 'Market data', 'Scenario modelling'],
    highlights: {
      es: ['Balance patrimonial', 'Simulación de escenarios', 'Vivienda e hipoteca', 'Inversiones', 'IA local'],
      en: ['Personal balance sheet', 'Scenario simulation', 'Property and mortgage', 'Investments', 'Local AI']
    },
    metrics: [
      [{ es: 'Cobertura', en: 'Coverage' }, 'Full balance sheet'],
      [{ es: 'IA', en: 'AI' }, 'Local-first'],
      [{ es: 'Vista', en: 'View' }, 'Decision cockpit']
    ],
    preview: 'synthetic', demo: 'wealth'
  }
]

const copy = {
  es: {
    role: 'Ingeniero biomédico · Soluciones Digitales en Salud',
    navWork: 'Proyectos', navCapabilities: 'Capacidades', navAbout: 'Enfoque', navContact: 'Contacto',
    eyebrow: 'DANI PROJECTS · PRIVATE PRODUCT LAB',
    heroLine1: 'Diseño y construyo', heroLine2: 'productos digitales útiles.',
    intro: 'Portfolio de proyectos privados en HealthTech, IA, datos y producto. El código permanece privado; aquí muestro decisiones de producto, arquitectura, interfaces y demos públicas controladas.',
    cta: 'Explorar proyectos', secondary: 'Cómo protejo el código', github: 'GitHub', linkedin: 'LinkedIn',
    statProjects: 'proyectos seleccionados', statCode: 'código privado', statLanguages: 'portfolio bilingüe',
    selected: 'Trabajo seleccionado',
    selectedSub: 'Cada caso explica el problema, la solución y la ingeniería detrás del producto. AVI-MAMA utiliza capturas reales aprobadas; el resto emplea recreaciones sintéticas hasta disponer de material público.',
    realPreview: 'CAPTURA REAL APROBADA', syntheticPreview: 'DEMO SINTÉTICA', private: 'CÓDIGO PRIVADO', openCase: 'Ver caso',
    capabilitiesTitle: 'Capacidades que conectan los proyectos',
    capabilitiesBody: 'El hilo conductor no es una tecnología concreta, sino convertir problemas complejos en sistemas comprensibles, trazables y utilizables.',
    capabilityItems: [
      ['Health AI & interfaces', 'Conversación, voz, avatares, conocimiento curado y experiencia centrada en pacientes.'],
      ['Data & intelligence', 'OpenSearch, exploración, dashboards, investigación y flujos de datos reproducibles.'],
      ['Product engineering', 'Arquitectura modular, permisos, workflows, prototipado y diseño de producto.'],
      ['Privacy-aware systems', 'Demos sanitizadas, local-first cuando aporta valor y separación estricta entre escaparate y producto.']
    ],
    approachTitle: 'Del problema al producto',
    approachBody: 'Trabajo iterando sobre tres capas: comprender el contexto y las restricciones, convertirlas en un sistema de datos y procesos, y finalmente diseñar la interfaz que hace útil ese sistema.',
    architecture: [['01', 'Problema', 'usuarios · contexto · restricciones'], ['02', 'Sistema', 'datos · reglas · procesos'], ['03', 'Producto', 'interfaz · feedback · decisiones']],
    contactTitle: 'Código privado. Producto visible.',
    contactBody: 'Los repositorios de las aplicaciones no se publican. Para enseñar el trabajo utilizo demos sanitizadas, capturas seleccionadas y case studies que permiten evaluar el producto sin exponer código, credenciales ni datos sensibles.',
    contactCta: 'Ver perfil en GitHub', contactLinkedin: 'Conectar en LinkedIn',
    footer: 'Daniel Blanco · Ingeniero biomédico · DANI PROJECTS',
    privacyTitle: 'Portfolio público, productos privados',
    privacyBody: 'Todo activo incluido en una web pública debe tratarse como público. Por eso el portfolio no importa los repositorios de producción: usa únicamente capturas aprobadas, datos ficticios y recreaciones de interfaz.',
    privacyPublic: 'Puede mostrarse', privacyPublicBody: 'Narrativa de producto, capturas aprobadas, stack seleccionado, diagramas de alto nivel y demos sintéticas.',
    privacyNever: 'No se publica', privacyNeverBody: 'Código fuente de producción, claves, endpoints privados, datos reales, corpus propietarios o lógica sensible.',
    modalChallenge: 'Reto', modalSolution: 'Solución', modalHighlights: 'Puntos clave', modalStack: 'Tecnología seleccionada', modalSignals: 'Indicadores',
    gallery: 'Interfaz real aprobada', demo: 'Demo pública', synthetic: 'DEMO SINTÉTICA · SIN DATOS REALES', noLive: 'NO LIVE DATA', close: 'Cerrar',
    caseDisclaimerReal: 'Estas capturas proceden del prototipo real y han sido seleccionadas para exposición pública. El código y la lógica interna no forman parte del portfolio.',
    caseDisclaimerSynthetic: 'Esta demo recrea la experiencia del producto con datos ficticios. No carga código, APIs ni datos del proyecto privado.'
  },
  en: {
    role: 'Biomedical Engineer · Digital Health Solutions',
    navWork: 'Projects', navCapabilities: 'Capabilities', navAbout: 'Approach', navContact: 'Contact',
    eyebrow: 'DANI PROJECTS · PRIVATE PRODUCT LAB',
    heroLine1: 'I design and build', heroLine2: 'useful digital products.',
    intro: 'A portfolio of private projects across HealthTech, AI, data and product engineering. The code stays private; this site exposes product decisions, architecture, interfaces and controlled public demos.',
    cta: 'Explore projects', secondary: 'How the code stays private', github: 'GitHub', linkedin: 'LinkedIn',
    statProjects: 'selected projects', statCode: 'private code', statLanguages: 'bilingual portfolio',
    selected: 'Selected work',
    selectedSub: 'Each case explains the problem, solution and engineering behind the product. AVI-MAMA uses approved real screenshots; the remaining projects use synthetic recreations until public-ready material is available.',
    realPreview: 'APPROVED REAL SCREENSHOT', syntheticPreview: 'SYNTHETIC DEMO', private: 'PRIVATE CODE', openCase: 'View case',
    capabilitiesTitle: 'Capabilities connecting the projects',
    capabilitiesBody: 'The common thread is not one technology. It is turning complex problems into understandable, traceable and usable systems.',
    capabilityItems: [
      ['Health AI & interfaces', 'Conversation, voice, avatars, curated knowledge and patient-centred experiences.'],
      ['Data & intelligence', 'OpenSearch, exploration, dashboards, investigation and reproducible data workflows.'],
      ['Product engineering', 'Modular architecture, permissions, workflows, prototyping and product design.'],
      ['Privacy-aware systems', 'Sanitised demos, local-first when valuable and strict separation between showcase and product.']
    ],
    approachTitle: 'From problem to product',
    approachBody: 'I iterate across three layers: understand context and constraints, translate them into a system of data and processes, then design the interface that makes the system useful.',
    architecture: [['01', 'Problem', 'users · context · constraints'], ['02', 'System', 'data · rules · workflows'], ['03', 'Product', 'interface · feedback · decisions']],
    contactTitle: 'Private code. Visible product.',
    contactBody: 'The application repositories are not published. I use sanitised demos, selected screenshots and case studies to show the work without exposing code, credentials or sensitive data.',
    contactCta: 'View GitHub profile', contactLinkedin: 'Connect on LinkedIn',
    footer: 'Daniel Blanco · Biomedical Engineer · DANI PROJECTS',
    privacyTitle: 'Public portfolio, private products',
    privacyBody: 'Anything included in a public website should be treated as public. This portfolio never imports production repositories: it uses only approved screenshots, fictitious data and re-created interface behaviour.',
    privacyPublic: 'Safe to show', privacyPublicBody: 'Product narrative, approved screenshots, selected stack, high-level diagrams and synthetic demos.',
    privacyNever: 'Never published', privacyNeverBody: 'Production source code, keys, private endpoints, real data, proprietary corpora or sensitive logic.',
    modalChallenge: 'Challenge', modalSolution: 'Solution', modalHighlights: 'Key points', modalStack: 'Selected stack', modalSignals: 'Signals',
    gallery: 'Approved real interface', demo: 'Public demo', synthetic: 'SYNTHETIC DEMO · NO REAL DATA', noLive: 'NO LIVE DATA', close: 'Close',
    caseDisclaimerReal: 'These screenshots come from the real prototype and were selected for public display. The code and internal logic are not part of the portfolio.',
    caseDisclaimerSynthetic: 'This demo recreates the product experience with fictitious data. It does not load code, APIs or data from the private project.'
  }
}

let lang = localStorage.getItem('dani-portfolio-lang') || (navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en')

const L = (value) => typeof value === 'string' ? value : value[lang]
const t = () => copy[lang]

function appHtml() {
  const c = t()
  return `
    <canvas id="scene" aria-hidden="true"></canvas>
    <div class="noise"></div>
    <header class="topbar">
      <a class="brand" href="#top" aria-label="${PROFILE.name}">
        <span class="brand-mark">DB</span>
        <span class="brand-copy"><b>${PROFILE.name}</b><small>${PROFILE.brand}</small></span>
      </a>
      <nav>
        <a href="#work">${c.navWork}</a>
        <a href="#capabilities">${c.navCapabilities}</a>
        <a href="#approach">${c.navAbout}</a>
        <a href="#contact">${c.navContact}</a>
        <button class="lang" id="langToggle" aria-label="Change language">${lang === 'es' ? 'EN' : 'ES'}</button>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <div class="eyebrow"><span class="dot"></span>${c.eyebrow}</div>
          <div class="role">${c.role}</div>
          <h1><span>${c.heroLine1}</span><br><em>${c.heroLine2}</em></h1>
          <p>${c.intro}</p>
          <div class="hero-actions">
            <a class="button primary" href="#work">${c.cta}<span>↘</span></a>
            <button class="button ghost" id="privacyBtn">${c.secondary}</button>
          </div>
          <div class="social-row">
            <a href="${PROFILE.github}" target="_blank" rel="noopener noreferrer">↗ ${c.github} / ${PROFILE.githubUser}</a>
            <a href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer">↗ ${c.linkedin}</a>
          </div>
          <div class="hero-stats">
            <div><b>07</b><span>${c.statProjects}</span></div>
            <div><b>100%</b><span>${c.statCode}</span></div>
            <div><b>ES / EN</b><span>${c.statLanguages}</span></div>
          </div>
        </div>
        <div class="hero-orbit" aria-hidden="true">
          <span class="orbit-title">PRODUCT CONSTELLATION</span>
          <div class="orbit-label orbit-a">HEALTH AI</div>
          <div class="orbit-label orbit-b">DATA</div>
          <div class="orbit-label orbit-c">PRODUCT</div>
          <div class="orbit-label orbit-d">DECISION</div>
        </div>
      </section>

      <section class="work section" id="work">
        <div class="section-head">
          <div><span class="section-index">01 · WORK</span><h2>${c.selected}</h2></div>
          <p>${c.selectedSub}</p>
        </div>
        <div class="project-grid">${projects.map((p, i) => projectCard(p, i)).join('')}</div>
      </section>

      <section class="capabilities section" id="capabilities">
        <div class="section-head">
          <div><span class="section-index">02 · CAPABILITIES</span><h2>${c.capabilitiesTitle}</h2></div>
          <p>${c.capabilitiesBody}</p>
        </div>
        <div class="capability-grid">
          ${c.capabilityItems.map((item, i) => `<article><span>0${i+1}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}
        </div>
      </section>

      <section class="approach section" id="approach">
        <div class="section-head">
          <div><span class="section-index">03 · PROCESS</span><h2>${c.approachTitle}</h2></div>
          <p>${c.approachBody}</p>
        </div>
        <div class="architecture">
          ${c.architecture.map((item, i) => `${i ? '<div class="arch-arrow">→</div>' : ''}<div class="arch-layer"><span>${item[0]}</span><b>${item[1]}</b><small>${item[2]}</small></div>`).join('')}
        </div>
      </section>

      <section class="contact section" id="contact">
        <span class="section-index">04 · CONTACT</span>
        <h2>${c.contactTitle}</h2>
        <p>${c.contactBody}</p>
        <div class="contact-actions">
          <a class="button primary" href="${PROFILE.github}" target="_blank" rel="noopener noreferrer">${c.contactCta}<span>↗</span></a>
          <a class="button ghost" href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer">${c.contactLinkedin}<span>↗</span></a>
        </div>
      </section>
    </main>

    <footer><span>${c.footer}</span><span>© 2026 · ${PROFILE.githubUser}.github.io</span></footer>

    <dialog id="projectModal" class="modal"><div class="modal-shell"><button class="modal-close" aria-label="${c.close}">×</button><div id="modalContent"></div></div></dialog>
    <dialog id="privacyModal" class="modal"><div class="modal-shell privacy-shell"><button class="modal-close" aria-label="${c.close}">×</button>${privacyHtml()}</div></dialog>
  `
}

function privacyHtml() {
  const c = t()
  return `
    <span class="section-index">PRIVACY MODEL</span>
    <h2>${c.privacyTitle}</h2>
    <p>${c.privacyBody}</p>
    <div class="privacy-grid">
      <div><b>✓ ${c.privacyPublic}</b><span>${c.privacyPublicBody}</span></div>
      <div><b>× ${c.privacyNever}</b><span>${c.privacyNeverBody}</span></div>
    </div>
    <div class="privacy-flow"><span>PRIVATE REPO</span><i>×</i><span>PUBLIC PORTFOLIO</span><i>→</i><span>SANITISED DEMO</span></div>
  `
}

function projectCard(p, i) {
  const c = t()
  const badge = p.preview === 'real' ? c.realPreview : c.syntheticPreview
  return `<article class="project-card" data-project="${p.id}" tabindex="0">
    <div class="card-top"><span class="project-no">0${i+1}</span><span class="status">${L(p.maturity)}</span></div>
    <div class="project-visual ${p.preview === 'real' ? 'real-preview' : ''}">
      ${p.preview === 'real' ? `<img src="${p.screenshots[0].src}" alt="${p.screenshots[0].alt}" loading="lazy"><div class="image-shade"></div>` : syntheticVisual(p.demo)}
      <span class="preview-badge">${badge}</span>
    </div>
    <div class="card-copy"><span class="domain">${L(p.domain)}</span><h3>${p.title}</h3><h4>${L(p.kicker)}</h4><p>${L(p.summary)}</p></div>
    <div class="tags">${p.stack.slice(0,4).map(s => `<span>${s}</span>`).join('')}</div>
    <div class="card-bottom"><span class="private-tag">${c.private}</span><button>${c.openCase} ↗</button></div>
  </article>`
}

function syntheticVisual(kind) {
  if (kind === 'career') return `<div class="mini-window"><div class="mini-nav"><i></i><i></i><i></i></div><div class="job"><b>Clinical AI · Remote</b><span>92% match</span></div><div class="job"><b>Health Data · Madrid</b><span>87% match</span></div><div class="job"><b>Product · EU</b><span>81% match</span></div></div>`
  if (kind === 'business') return `<div class="crm"><div class="crm-side">${['⌂','◫','◎','▦'].map(x=>`<i>${x}</i>`).join('')}</div><div class="crm-main"><div class="kpi"><b>24</b><span>Today</span></div><div class="kpi"><b>8</b><span>Open</span></div><div class="bars"><i></i><i></i><i></i><i></i><i></i></div></div></div>`
  if (kind === 'aula') return `<div class="school"><div class="school-hero"><span>AULA</span><b>Learn · Connect · Grow</b></div><div class="school-cards"><i></i><i></i><i></i></div></div>`
  if (kind === 'wealth') return `<div class="wealth"><div class="ring"><span>74%</span></div><div class="wealth-lines"><b>Portfolio</b><i></i><i></i><i></i><small>scenario model</small></div></div>`
  if (kind === 'analytics') return `<div class="analytics"><div class="chart-bars">${[42,68,51,82,62,92,75].map(v=>`<i style="height:${v}%"></i>`).join('')}</div><div class="query">index: operations-*<br><span>status: active</span></div></div>`
  return `<div class="pipeline"><span>Source</span><i>→</i><span>Transform</span><i>→</i><span>DAG</span><div class="code-lines"><b></b><b></b><b></b></div></div>`
}

function demoPanel(p) {
  const c = t()
  const toolbar = `<div class="demo-toolbar"><span>${c.synthetic}</span><span>${c.noLive}</span></div>`
  if (p.preview === 'real') {
    return `<div class="demo-toolbar"><span>${c.gallery}</span><span>${c.private}</span></div>
      <div class="real-gallery">
        ${p.screenshots.map((s, i) => `<figure class="shot shot-${i+1}"><img src="${s.src}" alt="${s.alt}" loading="lazy"><figcaption>AVI-MAMA · ${i === 0 ? 'main interface' : 'visual mode'}</figcaption></figure>`).join('')}
      </div>`
  }
  if (p.demo === 'career') return `${toolbar}<div class="demo-career"><div class="filters"><b>HealthTech roles</b><span>Spain</span><span>Remote</span><span>Product / Data</span></div><div class="opportunities"><div><strong>Senior Product Analyst</strong><small>Digital Health · Remote EU</small><em>92</em></div><div><strong>Health Data Specialist</strong><small>Madrid · Hybrid</small><em>87</em></div><div><strong>AI Operations Lead</strong><small>Barcelona · Hybrid</small><em>84</em></div></div></div>`
  if (p.demo === 'business') return `${toolbar}<div class="demo-dashboard"><div class="dash-kpis"><div><small>Bookings</small><b>24</b></div><div><small>Revenue</small><b>€3.8K</b></div><div><small>Open tasks</small><b>8</b></div></div><div class="dash-table"><span>09:30 · New booking</span><span>11:15 · Stock review</span><span>14:00 · Staff shift</span><span>17:30 · Customer follow-up</span></div></div>`
  if (p.demo === 'aula') return `${toolbar}<div class="demo-aula"><div class="aula-preview"><div class="aula-nav">ALAMEDA <span>News · Calendar · Contact</span></div><div class="aula-body"><h4>Learning starts with curiosity.</h4><p>Draft preview — content remains unpublished until approved.</p><button>Preview mode</button></div></div><div class="publish-flow"><span>Draft</span><i>→</i><span>Review</span><i>→</i><span>Publish</span></div></div>`
  if (p.demo === 'wealth') return `${toolbar}<div class="demo-wealth"><div class="portfolio-total"><small>Net position · demo</small><b>€184,300</b><span>+4.8% modelled</span></div><div class="allocation">${[['Cash',28],['Funds',35],['Equity',20],['Property',17]].map(([n,v])=>`<div><span>${n}</span><i><b style="width:${v*2}%"></b></i><em>${v}%</em></div>`).join('')}</div></div>`
  if (p.demo === 'analytics') return `${toolbar}<div class="demo-analytics"><div class="query-editor"><code>FROM operations-*<br>WHERE active = true<br>GROUP BY service<br>SORT count DESC</code><button>Run query</button></div><div class="result-chart">${[72,48,88,61,95,67].map((v,i)=>`<div><i style="height:${v}%"></i><span>S${i+1}</span></div>`).join('')}</div></div>`
  return `${toolbar}<div class="demo-data"><div class="node source"><b>OpenSearch</b><small>source</small></div><i>→</i><div class="node transform"><b>Rule layer</b><small>transform</small></div><i>→</i><div class="node dag"><b>Airflow DAG</b><small>generated</small></div><pre>task = PythonOperator(...)
validate >> transform >> publish</pre></div>`
}

function projectModal(p) {
  const c = t()
  return `<div class="modal-header"><div><span class="domain">${L(p.domain)}</span><h2>${p.title}</h2><p>${L(p.kicker)}</p></div><span class="private-tag">${c.private}</span></div>
    ${demoPanel(p)}
    <p class="demo-disclaimer">${p.preview === 'real' ? c.caseDisclaimerReal : c.caseDisclaimerSynthetic}</p>
    <div class="case-grid">
      <article><h4>${c.modalChallenge}</h4><p>${L(p.challenge)}</p></article>
      <article><h4>${c.modalSolution}</h4><p>${L(p.solution)}</p></article>
    </div>
    <div class="modal-info">
      <div><h4>${c.modalHighlights}</h4><ul class="highlight-list">${L(p.highlights).map(x => `<li>${x}</li>`).join('')}</ul></div>
      <div><h4>${c.modalStack}</h4><div class="tags">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div></div>
      <div><h4>${c.modalSignals}</h4><div class="metrics">${p.metrics.map(([a,b])=>`<div><small>${L(a)}</small><b>${b}</b></div>`).join('')}</div></div>
    </div>`
}

function bindUI() {
  document.getElementById('langToggle').addEventListener('click', () => {
    const y = window.scrollY
    lang = lang === 'es' ? 'en' : 'es'
    localStorage.setItem('dani-portfolio-lang', lang)
    render()
    requestAnimationFrame(() => window.scrollTo(0, y))
  })

  document.querySelectorAll('.project-card').forEach(card => {
    const open = () => {
      const p = projects.find(x => x.id === card.dataset.project)
      document.getElementById('modalContent').innerHTML = projectModal(p)
      document.getElementById('projectModal').showModal()
    }
    card.addEventListener('click', open)
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open() } })
  })

  document.getElementById('privacyBtn').addEventListener('click', () => document.getElementById('privacyModal').showModal())
  document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', () => btn.closest('dialog').close()))
  document.querySelectorAll('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close() }))
}

let threeState
function initThree() {
  const canvas = document.getElementById('scene')
  if (!canvas) return

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.1, 100)
  camera.position.set(0, 0, 9)

  const constellation = new THREE.Group()
  scene.add(constellation)

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.78, 2),
    new THREE.MeshStandardMaterial({ color: 0x152131, emissive: 0x0b3443, roughness: 0.22, metalness: 0.75 })
  )
  constellation.add(core)

  const coreWire = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.02, 2),
    new THREE.MeshBasicMaterial({ color: 0x78e6ff, wireframe: true, transparent: true, opacity: 0.27 })
  )
  constellation.add(coreWire)

  const nodePositions = [
    [2.35, 1.15, .2], [1.0, 2.35, -.4], [-1.25, 2.0, .1], [-2.45, .45, -.3],
    [-1.75, -1.8, .35], [.45, -2.5, -.2], [2.25, -1.3, .25]
  ]
  const nodes = []
  const linePoints = []
  nodePositions.forEach((pos, i) => {
    const size = i === 0 ? .28 : .20 + (i % 3) * .025
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(size, 18, 18),
      new THREE.MeshStandardMaterial({
        color: i < 2 ? 0x78e6ff : i < 4 ? 0x99a8ff : 0x98ffc9,
        emissive: i < 2 ? 0x163c48 : i < 4 ? 0x20274a : 0x173d2d,
        roughness: .28,
        metalness: .48
      })
    )
    sphere.position.set(...pos)
    sphere.userData.phase = i * .7
    constellation.add(sphere)
    nodes.push(sphere)
    linePoints.push(new THREE.Vector3(0,0,0), new THREE.Vector3(...pos))
  })

  const adjacency = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[0,6],[2,4]]
  adjacency.forEach(([a,b]) => linePoints.push(new THREE.Vector3(...nodePositions[a]), new THREE.Vector3(...nodePositions[b])))
  const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints)
  const lines = new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({ color: 0x5f7d91, transparent: true, opacity: .22 }))
  constellation.add(lines)

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.25, .011, 6, 180),
    new THREE.MeshBasicMaterial({ color: 0x99a8ff, transparent: true, opacity: .23 })
  )
  ring.rotation.x = 1.1
  ring.rotation.y = .28
  constellation.add(ring)

  const pCount = 900
  const positions = new Float32Array(pCount * 3)
  for (let i = 0; i < pCount; i++) {
    const r = 4.5 + Math.random() * 7.5
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i*3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i*3+2] = r * Math.cos(phi)
  }
  const particleGeo = new THREE.BufferGeometry()
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particles = new THREE.Points(particleGeo, new THREE.PointsMaterial({ color: 0x6b89b0, size: .018, transparent: true, opacity: .45 }))
  scene.add(particles)

  scene.add(new THREE.AmbientLight(0xffffff, 1.1))
  const light = new THREE.PointLight(0x78e6ff, 20, 22)
  light.position.set(3, 3, 5)
  scene.add(light)
  const light2 = new THREE.PointLight(0x99a8ff, 12, 20)
  light2.position.set(-4, -2, 3)
  scene.add(light2)

  let mx = 0, my = 0
  const pointerMove = (e) => {
    mx = e.clientX / innerWidth - .5
    my = e.clientY / innerHeight - .5
  }
  window.addEventListener('pointermove', pointerMove)

  const resize = () => {
    renderer.setSize(innerWidth, innerHeight, false)
    camera.aspect = innerWidth / innerHeight
    camera.updateProjectionMatrix()
  }
  resize()
  window.addEventListener('resize', resize)

  const clock = new THREE.Clock()
  let raf
  const tick = () => {
    const time = clock.getElapsedTime()
    const targetX = innerWidth > 940 ? 2.65 : .8
    constellation.position.x += (targetX - constellation.position.x) * .03
    constellation.rotation.y = time * .05 + mx * .18
    constellation.rotation.x = Math.sin(time * .18) * .045 + my * .12
    coreWire.rotation.y = -time * .16
    coreWire.rotation.x = time * .08
    ring.rotation.z = time * .06
    nodes.forEach((node, i) => {
      const s = 1 + Math.sin(time * 1.4 + node.userData.phase) * .08
      node.scale.setScalar(s)
      node.position.z = nodePositions[i][2] + Math.sin(time * .65 + i) * .08
    })
    particles.rotation.y = time * .004
    renderer.render(scene, camera)
    raf = requestAnimationFrame(tick)
  }
  tick()

  threeState = {
    cleanup() {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', pointerMove)
      window.removeEventListener('resize', resize)
      renderer.dispose()
      core.geometry.dispose(); core.material.dispose(); coreWire.geometry.dispose(); coreWire.material.dispose()
      nodes.forEach(n => { n.geometry.dispose(); n.material.dispose() })
      lineGeo.dispose(); lines.material.dispose(); ring.geometry.dispose(); ring.material.dispose(); particleGeo.dispose(); particles.material.dispose()
    }
  }
}

function render() {
  if (threeState) { threeState.cleanup(); threeState = null }
  document.documentElement.lang = lang
  document.title = `${PROFILE.name} — ${t().role}`
  document.querySelector('meta[name="description"]')?.setAttribute('content', t().intro)
  document.getElementById('app').innerHTML = appHtml()
  bindUI()
  initThree()
}

render()
