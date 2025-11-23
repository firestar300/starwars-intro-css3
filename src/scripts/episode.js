/**
 * Star Wars Episode Animation Controller
 * Gère le démarrage, l'arrêt et le replay des animations d'épisodes
 */

document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('start-button');
  const homeButton = document.getElementById('home-button');
  const replayButton = document.getElementById('replay-button');
  const startScreen = document.getElementById('start-screen');
  const animationContent = document.getElementById('animation-content');
  const audio = document.getElementById('intro-audio');
  const endButtons = document.getElementById('end-buttons');

  // Démarrer l'animation au clic sur le bouton "Commencer"
  startButton.addEventListener('click', function() {
    startAnimation();
  });

  // Retour à l'accueil
  homeButton.addEventListener('click', function() {
    window.location.href = './index.html';
  });

  // Rejouer l'animation
  replayButton.addEventListener('click', function() {
    // Cacher les boutons de fin
    endButtons.style.display = 'none';

    // Réinitialiser les animations CSS
    animationContent.style.display = 'none';

    // Forcer un reflow pour redémarrer les animations CSS
    void animationContent.offsetHeight;

    // Relancer l'animation
    startAnimation();
  });

  /**
   * Démarre l'animation et l'audio
   */
  function startAnimation() {
    // Cacher l'écran de démarrage
    startScreen.style.display = 'none';

    // Afficher le contenu de l'animation
    animationContent.style.display = 'block';

    // Supprimer l'ancien listener s'il existe
    audio.removeEventListener('ended', showEndButtons);

    // Afficher les boutons quand l'audio se termine
    audio.addEventListener('ended', showEndButtons);

    // Réinitialiser et lancer l'audio
    audio.currentTime = 0;
    audio.play().catch(e => console.log('Audio play failed:', e));
  }

  /**
   * Affiche les boutons de fin d'animation
   */
  function showEndButtons() {
    endButtons.style.display = 'flex';
  }
});
