$(document).ready(function ($) {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
      autoplay:true,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
       

    });
  

});
