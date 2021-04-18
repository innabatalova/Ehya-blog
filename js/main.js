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
    nextEl: '.studies__button-next',
    prevEl: '.studies__button-prev',
  },

 
});

});
