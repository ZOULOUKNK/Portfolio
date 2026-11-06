/* ==========================================================================
   DONNÉES À PERSONNALISER
   ========================================================================== */

// Logos officiels des technologies (CDN devicon — gratuit, pas d'installation)
const TECH_LOGOS = {
  "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  // "C++ Builder" : pas d'icône officielle disponible sur ce CDN gratuit — reste en texte simple
};

// Compétences — regroupées par catégorie
// "Langages" utilise des jauges de pourcentage (champ "level"), les autres restent en tags simples (avec logo si disponible)
const SKILLS = [
  {
    category: "Langages",
    type: "gauge",
    items: [
      { name: "HTML", level: 70 },
      { name: "CSS", level: 68 },
      { name: "PHP", level: 80 },
      { name: "JavaScript", level: 60 },
      { name: "C++", level: 50 },
      { name: "SQL", level: 60 }
    ]
  },
  {
    category: "Frameworks & librairies",
    type: "tags",
    tags: ["Laravel", "Flutter", "Node.js", "Express"]
  },
  {
    category: "Bases de données",
    type: "tags",
    tags: ["MySQL", "PostgreSQL"]
  },
  {
    category: "Outils",
    type: "tags",
    tags: ["Git", "GitHub", "C++ Builder", "VS Code"]
  }
];

// Projets — ajoute / modifie des objets ici pour mettre à jour la section Projets
const PROJECTS = [
  {
    name: "TicketPro",
    tag: "TICKETPRO",
    description: "Application de helpdesk pour la gestion de tickets de support, avec suivi des demandes et des statuts.",
    stack: ["Laravel", "PHP", "MySQL"],
    githubUrl: "https://github.com/ZOULOUKNK/HELPDESK",
    demoUrl: ""
  },
  {
    name: "StockParfum",
    tag: "STOCKPARFUM",
    description: "Application mobile de gestion de stock pour une boutique de parfums, déodorants et soins du visage.",
    stack: ["Flutter", "Node.js", "Express", "MySQL"],
    githubUrl: "https://github.com/ZOULOUKNK/PARFUM",
    demoUrl: ""
  },
  {
    name: "TaskFlow",
    tag: "TASKFLOW",
    description: "Application de gestion de tâches et de projets, avec tableaux collaboratifs et suivi de l'avancement.",
    stack: ["React"],
    githubUrl: "https://github.com/ZOULOUKNK/TASKFLOW",
    demoUrl: ""
  }
];

/* ==========================================================================
   RENDU DYNAMIQUE
   ========================================================================== */

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map(group => `
    <div class="skill-card reveal">
      <h3>${group.category}</h3>
      ${group.type === 'gauge' ? `
        <div class="skill-gauges">
          ${group.items.map(item => `
            <div class="skill-gauge">
              <div class="skill-gauge-top">
                <span class="skill-gauge-name">${item.name}</span>
                <span class="skill-gauge-percent">${item.level}%</span>
              </div>
              <div class="skill-gauge-track">
                <div class="skill-gauge-fill" style="width: ${item.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="skill-tags">
          ${group.tags.map(t => `
            <span class="skill-tag">
              ${TECH_LOGOS[t] ? `<img src="${TECH_LOGOS[t]}" alt="" class="skill-tag-logo" loading="lazy">` : ''}
              ${t}
            </span>
          `).join('')}
        </div>
      `}
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card reveal">
      <div class="project-thumb">${p.tag}</div>
      <div class="project-body">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="project-stack">
          ${p.stack.map(s => `<span>${s}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener">Code source →</a>` : ''}
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener">Démo →</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   THÈME (dark / light) — persistant via localStorage
   ========================================================================== */

function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = saved || (prefersLight ? 'light' : 'dark');
  applyTheme(theme);
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('iconSun').style.display = 'none';
    document.getElementById('iconMoon').style.display = 'block';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('iconSun').style.display = 'block';
    document.getElementById('iconMoon').style.display = 'none';
  }
  localStorage.setItem('theme', theme);
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  applyTheme(isLight ? 'dark' : 'light');
});

/* ==========================================================================
   MENU MOBILE
   ========================================================================== */

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ==========================================================================
   SCROLL SPY — surligne le lien de nav actif + fait avancer le nœud de piste
   ========================================================================== */

const sections = ['home', 'about', 'skills', 'projects', 'contact'];
const traceNode = document.getElementById('traceNode');

function onScroll() {
  const scrollY = window.scrollY;
  const headerH = document.getElementById('header').offsetHeight;

  // Lien actif
  let current = sections[0];
  for (const id of sections) {
    const el = document.getElementById(id);
    if (el && el.offsetTop - headerH - 40 <= scrollY) current = id;
  }
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });

  // Position du nœud sur la piste = progression de scroll dans la page
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docH > 0 ? Math.min(scrollY / docH, 1) : 0;
  const railH = document.querySelector('.trace-rail').offsetHeight;
  traceNode.style.top = `${progress * railH}px`;
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ==========================================================================
   REVEAL AU SCROLL
   ========================================================================== */

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

/* ==========================================================================
   FORMULAIRE DE CONTACT — ouvre le client mail avec les infos pré-remplies
   (remplace par une intégration Formspree / EmailJS si tu préfères)
   ========================================================================== */

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent(`Contact portfolio — ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:andrianirinahonorat@gmail.com?subject=${subject}&body=${body}`;

  document.getElementById('formNote').textContent = "Ouverture de votre client mail...";
});

/* ==========================================================================
   INIT
   ========================================================================== */

document.getElementById('year').textContent = new Date().getFullYear();

initTheme();
renderSkills();
renderProjects();
initReveal();
onScroll();
