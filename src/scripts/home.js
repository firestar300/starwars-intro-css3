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
  // Appliquer les backgrounds blur depuis data-bg
  const slides = document.querySelectorAll('.swiper-slide[data-bg]');
  slides.forEach(slide => {
    const bgImage = slide.getAttribute('data-bg');
    const bgElement = slide.querySelector('.slide-bg');
    if (bgElement && bgImage) {
      bgElement.style.backgroundImage = `url(${bgImage})`;
    }
  });

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
      delay: 5000,
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
  });
});
