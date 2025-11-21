# Déploiement sur GitHub Pages

## 📋 Configuration à effectuer sur GitHub

### Étape 1 : Activer GitHub Pages

1. Allez sur votre dépôt GitHub : `https://github.com/VOTRE-USERNAME/starwars-intro-css3`
2. Cliquez sur **Settings** (⚙️)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Dans la section **Source**, sélectionnez :
   - **Source** : `GitHub Actions`

   ![GitHub Pages Source](https://docs.github.com/assets/cb-47267/mw-1440/images/help/pages/select-github-actions-source.webp)

### Étape 2 : Vérifier les permissions

1. Toujours dans **Settings**, allez dans **Actions** > **General**
2. Scrollez jusqu'à **Workflow permissions**
3. Sélectionnez **Read and write permissions**
4. Cochez **Allow GitHub Actions to create and approve pull requests**
5. Cliquez sur **Save**

## 🚀 Déploiement automatique

Une fois configuré, le déploiement se fera automatiquement :

1. **Poussez vos commits sur `master`** :

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin master
   ```

2. **Le workflow se lance automatiquement** :
   - Build du projet avec Vite
   - Déploiement sur GitHub Pages

3. **Vérifiez le déploiement** :
   - Allez dans l'onglet **Actions** de votre repo
   - Vous verrez le workflow "Deploy to GitHub Pages" en cours
   - Une fois terminé (✅), votre site sera accessible à :

     ```
     https://VOTRE-USERNAME.github.io/starwars-intro-css3/
     ```

## 🔧 Configuration technique

### Workflow GitHub Actions

Le workflow (`.github/workflows/deploy.yml`) :

- **Déclenché** : à chaque push sur `master`
- **Étapes** :
  1. Checkout du code
  2. Installation de pnpm
  3. Installation des dépendances
  4. Build avec Vite
  5. Déploiement sur GitHub Pages

### Configuration Vite

Le `vite.config.js` inclut :

```js
base: '/starwars-intro-css3/'
```

⚠️ **Important** : Si votre repo s'appelle différemment, modifiez cette ligne dans `vite.config.js` :

```js
base: '/NOM-DE-VOTRE-REPO/'
```

## 🌐 URL finale

Une fois déployé, votre site sera accessible à :

```
https://VOTRE-USERNAME.github.io/starwars-intro-css3/
```

## 📊 Monitoring

Pour voir l'état des déploiements :

1. Allez dans l'onglet **Actions**
2. Cliquez sur un workflow pour voir les logs détaillés
3. En cas d'erreur, les logs vous indiqueront le problème

## 🔄 Redéploiement

Pour redéployer :

- Faites simplement un push sur `master`
- Le workflow se relancera automatiquement

## ⚡ Build local

Pour tester le build en local avant de déployer :

```bash
pnpm build
pnpm preview
```

Le preview sera disponible sur `http://localhost:4173`
