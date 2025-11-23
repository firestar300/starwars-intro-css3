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
  const audioFiles = {
    0: '/assets/sounds/episode1.mp3',
    1: '/assets/sounds/episode2.mp3',
    2: '/assets/sounds/episode3.mp3',
    3: '/assets/sounds/episode4.mp3',
    4: '/assets/sounds/episode5.mp3',
    5: '/assets/sounds/episode6.mp3',
    6: '/assets/sounds/episode7.mp3',
    7: '/assets/sounds/episode8.mp3',
    8: '/assets/sounds/episode9.mp3'
  };

  let currentAudio = null;
  let audioEnabled = false;
  const soundToggle = document.getElementById('sound-toggle');
  const soundOnIcon = document.querySelector('.sound-on');
  const soundOffIcon = document.querySelector('.sound-off');

  // Fonction pour jouer l'audio d'un épisode
  function playEpisodeAudio(index) {
    if (!audioEnabled) return;

    // Arrêter l'audio en cours
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Créer et jouer le nouvel audio
    if (audioFiles[index]) {
      currentAudio = new Audio(audioFiles[index]);
      currentAudio.volume = 0.5; // Volume à 50%
      currentAudio.play().catch(e => console.log('Audio play failed:', e));
    }
  }

  // Fonction pour basculer le son
  function toggleSound() {
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
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }
  }

  // Écouter le clic sur le bouton de son
  soundToggle.addEventListener('click', toggleSound);

  // Initialiser Swiper
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
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
      }
    }
  });
});
