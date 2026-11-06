# Portfolio — Honorat Andrianirina

Portfolio statique (HTML/CSS/JS vanilla, sans build), prêt à déployer sur GitHub Pages.

## 🎨 Comment personnaliser

| Je veux changer... | Où aller |
|---|---|
| Mon nom, mon accroche, ma présentation | `index.html`, sections `#home` et `#about` |
| Mes couleurs | `style.css`, bloc `:root` en haut du fichier (variables `--bg`, `--accent`, etc.) |
| Mes compétences | `script.js`, tableau `SKILLS` |
| Mes projets | `script.js`, tableau `PROJECTS` — ajoute un objet pour chaque nouveau projet |
| Mes liens (email, GitHub, LinkedIn) | `index.html`, section `#contact`, et `script.js` (adresse mail du formulaire) |
| Mon CV téléchargeable | Place ton fichier `cv.pdf` à la racine du dossier (le bouton "Télécharger mon CV" pointe déjà dessus) |
| Police / typographie | `index.html` (lien Google Fonts) + `style.css` (variables `--font-*`) |

Aucune commande à lancer : tu peux ouvrir `index.html` directement dans un navigateur pour prévisualiser.

## 🚀 Déployer sur GitHub Pages

1. **Crée un dépôt GitHub** (ex. `portfolio` ou `ton-pseudo.github.io` pour une URL courte)
2. Dans le dossier du projet, exécute :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/NOM-DU-DEPOT.git
   git push -u origin main
   ```
3. Sur GitHub : va dans **Settings → Pages**
4. Dans **Source**, sélectionne la branche `main` et le dossier `/ (root)`, puis **Save**
5. Après 1-2 minutes, ton site sera disponible à :
   - `https://TON-PSEUDO.github.io/NOM-DU-DEPOT/` (dépôt classique)
   - ou `https://TON-PSEUDO.github.io/` (si le dépôt s'appelle `TON-PSEUDO.github.io`)

## 📁 Structure

```
portfolio/
├── index.html   → structure et contenu
├── style.css    → design (variables de thème en haut de fichier)
├── script.js    → données (compétences, projets) + interactions
├── cv.pdf       → à ajouter toi-même
└── README.md    → ce guide
```

## ✅ Fonctionnalités incluses

- Responsive (mobile / tablette / desktop)
- Mode sombre / clair avec mémorisation du choix
- Menu mobile
- Animations légères au scroll
- Formulaire de contact (ouvre le client mail — remplaçable par Formspree/EmailJS)
- Aucune dépendance npm — 100% statique
