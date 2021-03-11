// import Swiper from 'swiper';
import {slides} from './assets/data-slides';

// const swiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
slides.forEach(e => {
  let slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.style = `background-img:url(${e.img})`;
  slide.innerHTML = `<h4>${e.name}</h4><span>${e.description}</span>`;
  document.getElementsByClassName('swiper-wrapper').append(slide);
})

