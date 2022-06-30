const mySwiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  loop: true,
  loopAdditionalSlides: 1,

  speed: 400,

  autoplay: {
    delay: 1800,
    disableOnInteraction: false,
    waitForTransition: false,
  },
});
