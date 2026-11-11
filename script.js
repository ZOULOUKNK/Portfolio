/* ==========================================================================
   DONNÉES À PERSONNALISER
   ========================================================================== */

// Logos officiels des technologies (CDN devicon)
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const TECH_LOGOS = {
  "PHP": DEVICON + "php/php-original.svg",
  "Laravel": DEVICON + "laravel/laravel-original.svg",
  "Node.js": DEVICON + "nodejs/nodejs-original.svg",
  "Express": DEVICON + "express/express-original.svg",
  "JavaScript": DEVICON + "javascript/javascript-original.svg",
  "TypeScript": DEVICON + "typescript/typescript-original.svg",
  "React": DEVICON + "react/react-original.svg",
  "React Native": DEVICON + "react/react-original.svg",
  "HTML / CSS": DEVICON + "html5/html5-original.svg",
  "Tailwind CSS": DEVICON + "tailwindcss/tailwindcss-original.svg",
  "Flutter": DEVICON + "flutter/flutter-original.svg",
  "MySQL": DEVICON + "mysql/mysql-original.svg",
  "SQLite": DEVICON + "sqlite/sqlite-original.svg",
  "Git": DEVICON + "git/git-original.svg",
  "GitHub": DEVICON + "github/github-original.svg",
  "Docker": DEVICON + "docker/docker-original.svg",
  "Linux": DEVICON + "linux/linux-original.svg",
  "Playwright": DEVICON + "playwright/playwright-original.svg",
  "C++": DEVICON + "cplusplus/cplusplus-original.svg",
  "VS Code": DEVICON + "vscode/vscode-original.svg"
};

// Compétences regroupées par domaine
const SKILLS = [
  { category: "Back-end", items: ["PHP", "Laravel", "Node.js", "Express"] },
  { category: "Front-end", items: ["JavaScript", "TypeScript", "React", "HTML / CSS", "Tailwind CSS"] },
  { category: "Mobile", items: ["React Native", "Flutter"] },
  { category: "Données", items: ["MySQL", "SQLite"] },
  { category: "Qualité & outils", items: ["Git", "GitHub", "Docker", "Linux", "Playwright", "PHPUnit", "C++", "VS Code"] }
];

// Expérience professionnelle (du plus récent au plus ancien)
const EXPERIENCE = [
  {
    period: "2026",
    title: "Stagiaire développeur web",
    org: "DRETFP Boeny — Direction Régionale de l'Enseignement Technique et de la Formation Professionnelle",
    current: true,
    points: [
      "Conception et développement de Sport National Manager, plateforme de gestion du sport scolaire national.",
      "Réalisation de l'application de pointage du personnel par QR code, déployée sur le réseau local.",
      "Recueil des besoins auprès des services, rédaction des guides d'installation et d'utilisation."
    ]
  },
  {
    period: "2024 – 2025",
    title: "Magasinier",
    org: "Entreprise du Boina, Mahajanga",
    points: ["Gestion des stocks, inventaires et suivi des marchandises."]
  }
];

const EDUCATION = [
  { period: "2025 – 2026", title: "Licence 3 Génie Informatique", org: "ISSTM, Université de Mahajanga", current: true },
  { period: "2021 – 2022", title: "Baccalauréat série D", org: "École privée Notre-Dame" }
];

// Projets — "featured: true" affiche une grande carte en tête de section
// categories : "stage", "web", "mobile" (utilisées par les filtres)
const PROJECTS = [
  {
    name: "Sport National Manager",
    context: "Stage DRETFP Boeny",
    icon: "trophy",
    featured: true,
    categories: ["stage", "web"],
    description: "Plateforme de gestion du sport scolaire national : événements, compétitions, participants, résultats, repas et logements.",
    highlights: [
      "Tickets repas par QR code, contrôlés au scan",
      "Exports PDF, Excel et Word des listes et résultats",
      "Application installable (PWA) et droits par rôle",
      "Tests PHPUnit et parcours navigateur Playwright"
    ],
    kpis: [{ value: "141", label: "routes API" }, { value: "63", label: "migrations" }],
    stack: ["Laravel 12", "React 18", "Tailwind", "SQLite"],
    githubUrl: "",
    note: "Code privé — application d'administration"
  },
  {
    name: "Gestion de pointage par QR code",
    context: "Stage DRETFP Boeny",
    icon: "qr",
    featured: true,
    categories: ["stage", "web"],
    description: "Pointage d'entrée et de sortie du personnel par scan de QR code, en HTTPS sur le réseau local de la direction.",
    highlights: [
      "Anti-double pointage et pointage manuel encadré",
      "3 rôles, journal d'audit complet",
      "Archives par date et tableau de bord en temps réel",
      "Exports Excel, PDF et Word par période ou par agent"
    ],
    kpis: [{ value: "43", label: "agents" }, { value: "3", label: "rôles" }],
    stack: ["Node.js", "Express", "React", "TypeScript", "SQLite"],
    githubUrl: "",
    note: "Code privé — application d'administration"
  },
  {
    name: "Helpdesk",
    context: "Projet académique",
    icon: "ticket",
    categories: ["web"],
    description: "Gestion de tickets de support : rôles, assignation, suivi des statuts et pièces jointes sécurisées.",
    stack: ["Laravel 12", "PHP", "SQLite"],
    githubUrl: "https://github.com/ZOULOUKNK/HELPDESK"
  },
  {
    name: "TaskFlow",
    context: "Projet académique",
    icon: "check",
    categories: ["web"],
    description: "Gestionnaire de tâches pour la promotion L3 : catégories, priorités, filtres, recherche et statistiques.",
    stack: ["React", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/ZOULOUKNK/TASKFLOW"
  },
  {
    name: "StockParfum",
    context: "Projet académique",
    icon: "box",
    categories: ["mobile"],
    description: "Application mobile de gestion de stock d'une parfumerie, avec mouvements d'entrée et de sortie tracés.",
    stack: ["Flutter", "Node.js", "Express", "MySQL"],
    githubUrl: "https://github.com/ZOULOUKNK/PARFUM"
  },
  {
    name: "TalkyMG",
    context: "Projet personnel",
    icon: "chat",
    categories: ["mobile"],
    description: "Application mobile de messagerie locale fonctionnant hors ligne.",
    stack: ["React Native"],
    githubUrl: ""
  }
];

/* ==========================================================================
   ICÔNES (traits simples)
   ========================================================================== */

const ICONS = {
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM21 14v.01M14 21h.01M17 21h4v-4"/>',
  ticket: '<path d="M3 8a2 2 0 002-2h14a2 2 0 002 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4V8z"/><path d="M13 6v12" stroke-dasharray="2 2"/>',
  check: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12l3 3 5-6"/>',
  box: '<path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8"/>',
  chat: '<path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z"/>',
  arrow: '<path d="M7 17L17 7M9 7h8v8"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>'
};
const icon = (name, size = 20) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

/* ==========================================================================
   RENDU
   ========================================================================== */

function renderSkills() {
  document.getElementById('skillsGrid').innerHTML = SKILLS.map(group => `
    <div class="skill-card reveal">
      <h3>${group.category}</h3>
      <ul class="skill-tags">
        ${group.items.map(t => `
          <li class="skill-tag">
            ${TECH_LOGOS[t] ? `<img src="${TECH_LOGOS[t]}" alt="" class="skill-tag-logo" width="22" height="22">` : '<span class="skill-tag-dot" aria-hidden="true"></span>'}
            ${t}
          </li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderTimeline(id, entries) {
  document.getElementById(id).innerHTML = entries.map(e => `
    <li class="timeline-item reveal${e.current ? ' is-current' : ''}">
      <span class="timeline-period">${e.period}</span>
      <h4>${e.title}</h4>
      <p class="timeline-org">${e.org}</p>
      ${e.points ? `<ul class="timeline-points">${e.points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
    </li>
  `).join('');
}

function projectLinks(p) {
  if (p.githubUrl) {
    return `<a class="project-link" href="${p.githubUrl}" target="_blank" rel="noopener">Code source ${icon('arrow', 16)}</a>`;
  }
  if (p.note) return `<span class="project-private">${icon('lock', 14)} ${p.note}</span>`;
  return '';
}

function renderProjects() {
  document.getElementById('featuredGrid').innerHTML = PROJECTS.filter(p => p.featured).map(p => `
    <article class="feature-card reveal" data-categories="${p.categories.join(' ')}">
      <div class="feature-main">
        <div class="feature-head">
          <span class="project-icon">${icon(p.icon, 22)}</span>
          <div>
            <p class="project-context">${p.context}</p>
            <h3>${p.name}</h3>
          </div>
        </div>
        <p class="feature-desc">${p.description}</p>
        <ul class="feature-list">${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
        <div class="project-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
        <div class="project-foot">${projectLinks(p)}</div>
      </div>
      <div class="feature-kpis">
        ${p.kpis.map(k => `<div class="kpi"><strong>${k.value}</strong><span>${k.label}</span></div>`).join('')}
      </div>
    </article>
  `).join('');

  document.getElementById('projectsGrid').innerHTML = PROJECTS.filter(p => !p.featured).map(p => `
    <article class="project-card reveal" data-categories="${p.categories.join(' ')}">
      <div class="project-card-top">
        <span class="project-icon small">${icon(p.icon, 18)}</span>
        <p class="project-context">${p.context}</p>
      </div>
      <h3>${p.name}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
      <div class="project-foot">${projectLinks(p)}</div>
    </article>
  `).join('');
}

/* ==========================================================================
   FILTRES DE PROJETS
   ========================================================================== */

function initFilters() {
  const buttons = document.querySelectorAll('#filters .filter');
  buttons.forEach(btn => btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    buttons.forEach(b => {
      const active = b === btn;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    document.querySelectorAll('#projects [data-categories]').forEach(card => {
      const show = filter === 'all' || card.dataset.categories.split(' ').includes(filter);
      card.hidden = !show;
      if (show) { visible++; card.classList.add('visible'); }
    });
    document.getElementById('projectsEmpty').hidden = visible > 0;
  }));
}

/* ==========================================================================
   THÈME (sombre / clair) — mémorisé dans le navigateur
   ========================================================================== */

const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme, save) {
  const light = theme === 'light';
  if (light) document.documentElement.setAttribute('data-theme', 'light');
  else document.documentElement.removeAttribute('data-theme');
  themeToggle.setAttribute('aria-pressed', String(light));
  themeToggle.setAttribute('aria-label', light ? 'Passer au thème sombre' : 'Passer au thème clair');
  if (save) { try { localStorage.setItem('theme', theme); } catch (e) {} }
}

applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);
themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  applyTheme(isLight ? 'dark' : 'light', true);
});

/* ==========================================================================
   MENU MOBILE
   ========================================================================== */

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
  hamburger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
}
hamburger.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

/* ==========================================================================
   DÉFILEMENT : lien actif, barre de progression, en-tête compact
   ========================================================================== */

const sections = ['home', 'about', 'journey', 'projects', 'skills', 'contact'];
const header = document.getElementById('header');
const progressBar = document.getElementById('progressBar');

function onScroll() {
  const scrollY = window.scrollY;
  const headerH = header.offsetHeight;

  let current = sections[0];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.offsetTop - headerH - 80 <= scrollY) current = id;
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    const active = link.dataset.section === current;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
  });

  const docH = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${docH > 0 ? Math.min(scrollY / docH, 1) : 0})`;
  header.classList.toggle('scrolled', scrollY > 8);
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ==========================================================================
   APPARITION AU DÉFILEMENT + COMPTEURS
   ========================================================================== */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

function initCounters() {
  if (reduceMotion) return;
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const duration = 1100;
    const step = now => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + (t === 1 ? suffix : '');
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

/* ==========================================================================
   CONTACT
   ========================================================================== */

document.getElementById('copyEmail').addEventListener('click', async e => {
  const btn = e.currentTarget;
  try {
    await navigator.clipboard.writeText(btn.dataset.email);
    btn.textContent = 'Copié ✓';
  } catch (err) {
    btn.textContent = 'Échec';
  }
  setTimeout(() => { btn.textContent = 'Copier'; }, 1800);
});

// Le formulaire ouvre le client mail avec les informations pré-remplies
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  const note = document.getElementById('formNote');
  const fields = ['name', 'email', 'message'].map(id => document.getElementById(id));
  let firstInvalid = null;
  fields.forEach(f => {
    const ok = f.checkValidity() && f.value.trim() !== '';
    f.setAttribute('aria-invalid', String(!ok));
    if (!ok && !firstInvalid) firstInvalid = f;
  });
  if (firstInvalid) {
    note.textContent = 'Merci de remplir les trois champs avec une adresse email valide.';
    note.classList.add('is-error');
    firstInvalid.focus();
    return;
  }
  note.classList.remove('is-error');
  const [name, email, message] = fields.map(f => f.value.trim());
  const topic = document.getElementById('topic').value;
  const subject = encodeURIComponent(`${topic} — ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:andrianirinahonorat@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = 'Votre logiciel de messagerie va s\'ouvrir avec le message prêt à envoyer.';
  form.reset();
});

/* ==========================================================================
   INIT
   ========================================================================== */

document.getElementById('year').textContent = new Date().getFullYear();
renderSkills();
renderTimeline('experienceList', EXPERIENCE);
renderTimeline('educationList', EDUCATION);
renderProjects();
initFilters();
initReveal();
initCounters();
onScroll();
