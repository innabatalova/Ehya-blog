$(document).ready(function(){
const studiesSlider = new Swiper('.studies-slider', {
  // Optional parameters
  
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  

  // Navigation arrows
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },

 
});

});
