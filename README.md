# Portfolio — Honorat Andrianirina

Site en ligne : **https://zoulouknk.github.io/Portfolio/**

Portfolio statique (HTML/CSS/JS vanilla, sans build), publié par GitHub Pages depuis la branche `main`, dossier racine.

## Comment modifier

| Je veux changer... | Où aller |
|---|---|
| Accroche, présentation, textes des sections | `index.html` (sections `#home`, `#about`, `#journey`, `#projects`, `#skills`, `#contact`) |
| Couleurs (thème sombre et clair) | `style.css`, blocs `:root` et `[data-theme="light"]` en haut du fichier |
| Expérience et formation | `script.js`, tableaux `EXPERIENCE` et `EDUCATION` |
| Projets | `script.js`, tableau `PROJECTS` (`featured: true` = grande carte ; `categories` = filtres Stage / Web / Mobile) |
| Compétences | `script.js`, tableau `SKILLS` (logos dans `TECH_LOGOS`) |
| Email, WhatsApp, GitHub, LinkedIn | `index.html` (accueil, section `#contact`, bouton WhatsApp flottant) et `script.js` (adresse du formulaire) |
| CV téléchargeable | remplacer `cv.pdf` à la racine |
| Polices | `index.html` (lien Google Fonts) + `style.css` (variables `--font-*`) |

## Aperçu local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```bash
python -m http.server 5500
```

puis ouvrir http://127.0.0.1:5500/.

## Publier une modification

```bash
git add -A
git commit -m "Décrire la modification"
git push
```

GitHub Pages met le site à jour en une à deux minutes.

## Structure

```
Portfolio/
├── index.html    → structure et textes
├── style.css     → design (thèmes sombre et clair)
├── script.js     → données (parcours, projets, compétences) et interactions
├── photo.jpg     → photo de profil
├── cv.pdf        → CV téléchargé par le bouton « Mon CV »
├── cv-source/    → sources HTML de deux autres versions du CV (graphique et sobre)
└── README.md
```

Pour régénérer un PDF depuis `cv-source/` (Microsoft Edge) :

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --no-pdf-header-footer --virtual-time-budget=10000 --print-to-pdf="cv-genere.pdf" "file:///CHEMIN/VERS/cv-source/cv.html"
```

## Fonctionnalités

- Responsive (mobile, tablette, ordinateur) et thème sombre / clair mémorisé
- Chiffres clés animés, parcours en frise, projets filtrables
- Contact par formulaire (ouvre le logiciel de messagerie, avec type de demande), WhatsApp et copie de l'email
- Lien d'évitement, menu mobile accessible au clavier, animations réduites si le système le demande
- Aucune dépendance npm — 100 % statique
