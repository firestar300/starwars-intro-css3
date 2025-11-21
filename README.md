# Star Wars Intro CSS3

![Ben Kenobi](./.github/benken.png)

Intros animées des 6 épisodes de Star Wars en CSS3 avec l'effet de défilement 3D iconique.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Builder pour la production
pnpm build

# Prévisualiser le build de production
pnpm preview
```

## 📁 Structure du projet

```
starwars-intro-css3/
├── index.html              # Page d'accueil avec la grille des 6 épisodes
├── episode1.html           # Épisode I : La Menace Fantôme
├── episode2.html           # Épisode II : L'Attaque des Clones
├── episode3.html           # Épisode III : La Revanche des Sith
├── episode4.html           # Épisode IV : Un Nouvel Espoir
├── episode5.html           # Épisode V : L'Empire Contre-Attaque
├── episode6.html           # Épisode VI : Le Retour du Jedi
├── src/
│   └── styles/
│       └── episode-animation.css  # Styles CSS3 pour tous les épisodes
├── public/
│   ├── img/                       # Images de la page d'accueil
│   ├── fonts/                     # Fonts locales (Six Caps, Droid Sans)
│   └── assets/
│       ├── img/                   # Images communes (background, logo)
│       └── sounds/                # Audio commun (intro)
├── main.js                 # Point d'entrée JavaScript
├── style.css              # Styles de la page d'accueil
└── vite.config.js         # Configuration Vite (multi-page app)
```

## ✨ Fonctionnalités

- ✅ Animation CSS3 pure (pas de JavaScript pour l'animation)
- ✅ Effet 3D du texte défilant iconique
- ✅ Logo Star Wars animé
- ✅ Audio synchronisé avec l'animation
- ✅ Responsive design
- ✅ Multi-page app avec Vite
- ✅ Structure moderne et organisée

## 🎨 Technologies

- **Vite.js** v7 - Build tool moderne
- **CSS3** - Animations et transformations 3D
- **HTML5** - Structure sémantique
- **pnpm** - Gestionnaire de paquets

## 📝 Notes

Les animations utilisent les propriétés CSS modernes :

- `transform: perspective()` et `rotateX()` pour l'effet 3D
- `@keyframes` pour les animations
- `linear-gradient` pour les effets de fondu

## 📜 Licence

Projet éducatif - Star Wars est une marque déposée de Lucasfilm Ltd.
