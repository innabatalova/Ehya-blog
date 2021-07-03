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
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

 
});

});

//переключатель для меню
let menuButton = $(".navigation__mobile")

menuButton.on("click", function(){
  //  console.log ("Клик по кнопке меню")
   $(".navbar").toggleClass("navbar__mobile") 
   $(".select__link").toggleClass("navbar__link")
   $(".icon-arrow").toggleClass("icon-arrow__mobile")
   $(".container-select").toggleClass("container-select__mobile")
   $(".navbar__link").toggleClass("navbar__link_mobile")
   $(".navbar__linker").toggleClass("navbar__linker_mobile")
   $(".navbar__item").toggleClass("navbar__item_mobile")
   $(".navigation-fixed").toggleClass("navigation-color")
  

});