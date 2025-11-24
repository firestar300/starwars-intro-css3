/**
 * Star Wars Home Page Slider
 * Initialise le slider Swiper avec autoplay et effets
 */

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Initialiser Swiper après le chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
  // Créer les éléments audio pour chaque épisode
  // Utiliser import.meta.env.BASE_URL pour gérer le base path en production
  const basePath = import.meta.env.BASE_URL;
  const audioFiles = {
    0: `${basePath}assets/sounds/episode1.mp3`,
    1: `${basePath}assets/sounds/episode2.mp3`,
    2: `${basePath}assets/sounds/episode3.mp3`,
    3: `${basePath}assets/sounds/episode4.mp3`,
    4: `${basePath}assets/sounds/episode5.mp3`,
    5: `${basePath}assets/sounds/episode6.mp3`,
    6: `${basePath}assets/sounds/episode7.mp3`,
    7: `${basePath}assets/sounds/episode8.mp3`,
    8: `${basePath}assets/sounds/episode9.mp3`
  };

  // Précharger tous les fichiers audio
  const preloadedAudios = {};
  Object.entries(audioFiles).forEach(([index, url]) => {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = url;
    audio.volume = 0.5;
    preloadedAudios[index] = audio;
  });

  let currentAudio = null;
  let audioEnabled = false;
  const soundToggle = document.getElementById('sound-toggle');
  const soundOnIcon = document.querySelector('.sound-on');
  const soundOffIcon = document.querySelector('.sound-off');
  let fadeInterval = null;

  // Éléments de la modale
  const welcomeModal = document.getElementById('welcome-modal');
  const modalSoundOn = document.getElementById('modal-sound-on');
  const modalSoundOff = document.getElementById('modal-sound-off');

  // Élément de la barre de progression
  const progressFill = document.querySelector('.progress-fill');

  // Fonction pour faire un fade out
  function fadeOut(audio, duration = 500) {
    return new Promise((resolve) => {
      if (!audio) {
        resolve();
        return;
      }

      const startVolume = audio.volume;
      const step = startVolume / (duration / 10);

      const fade = setInterval(() => {
        if (audio.volume > step) {
          audio.volume = Math.max(0, audio.volume - step);
        } else {
          audio.volume = 0;
          audio.pause();
          clearInterval(fade);
          resolve();
        }
      }, 10);
    });
  }

  // Fonction pour faire un fade in
  function fadeIn(audio, targetVolume = 0.5, duration = 500) {
    if (!audio) return;

    audio.volume = 0;
    audio.currentTime = 0;
    audio.play().catch(e => console.log('Audio play failed:', e));

    const step = targetVolume / (duration / 10);

    const fade = setInterval(() => {
      if (audio.volume < targetVolume - step) {
        audio.volume = Math.min(targetVolume, audio.volume + step);
      } else {
        audio.volume = targetVolume;
        clearInterval(fade);
      }
    }, 10);
  }

  // Fonction pour jouer l'audio d'un épisode avec crossfade
  async function playEpisodeAudio(index) {
    if (!audioEnabled) return;

    const newAudio = preloadedAudios[index];
    if (!newAudio) return;

    // Si un audio est en cours, faire un crossfade
    if (currentAudio && currentAudio !== newAudio) {
      // Lancer le fade out de l'ancien audio et le fade in du nouveau en parallèle
      fadeOut(currentAudio, 800);
      fadeIn(newAudio, 0.5, 800);
    } else {
      // Première lecture, juste un fade in
      fadeIn(newAudio, 0.5, 800);
    }

    currentAudio = newAudio;
  }

  // Fonction pour basculer le son
  async function toggleSound() {
    audioEnabled = !audioEnabled;

    if (audioEnabled) {
      soundToggle.classList.add('active');
      soundOffIcon.style.display = 'none';
      soundOnIcon.style.display = 'block';
      playEpisodeAudio(swiper.realIndex);
    } else {
      soundToggle.classList.remove('active');
      soundOffIcon.style.display = 'block';
      soundOnIcon.style.display = 'none';
      if (currentAudio) {
        await fadeOut(currentAudio, 500);
        currentAudio.currentTime = 0;
      }
    }
  }

  // Fonction pour fermer la modale
  function closeModal() {
    welcomeModal.classList.add('hidden');
    setTimeout(() => {
      welcomeModal.style.display = 'none';
    }, 500);
  }

  // Fonction pour activer le son depuis la modale
  function enableSoundFromModal() {
    audioEnabled = true;
    soundToggle.classList.add('active');
    soundOffIcon.style.display = 'none';
    soundOnIcon.style.display = 'block';
    closeModal();
    // Démarrer la musique de la première slide
    playEpisodeAudio(swiper.realIndex);
    // Démarrer l'autoplay du slider
    startSliderAutoplay();
  }

  // Fonction pour désactiver le son depuis la modale
  function disableSoundFromModal() {
    audioEnabled = false;
    soundToggle.classList.remove('active');
    soundOffIcon.style.display = 'block';
    soundOnIcon.style.display = 'none';
    closeModal();
    // Démarrer l'autoplay du slider (même sans son)
    startSliderAutoplay();
  }

  // Fonction pour démarrer l'autoplay du slider
  function startSliderAutoplay() {
    // Configurer l'autoplay avec les bons paramètres
    swiper.params.autoplay = {
      delay: 15000,
      disableOnInteraction: false,
    };
    // Démarrer l'autoplay
    swiper.autoplay.start();
  }

  // Écouter les clics sur les boutons de la modale
  modalSoundOn.addEventListener('click', enableSoundFromModal);
  modalSoundOff.addEventListener('click', disableSoundFromModal);

  // Écouter le clic sur le bouton de son
  soundToggle.addEventListener('click', toggleSound);

  // Initialiser Swiper (sans autoplay au départ)
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: false, // Désactivé au départ, sera démarré après choix de l'utilisateur
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      // Jouer l'audio à chaque changement de slide
      slideChange: function() {
        playEpisodeAudio(this.realIndex);
      },
      // Mettre à jour la barre de progression
      autoplayTimeLeft(swiper, time, progress) {
        // progress va de 1 (début) à 0 (fin)
        // On veut que la barre se remplisse de 0% à 100%
        const fillProgress = (1 - progress) * 100;
        progressFill.style.width = `${fillProgress}%`;
      }
    }
  });
});
