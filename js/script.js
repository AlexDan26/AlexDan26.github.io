const swiper = new Swiper(".swiper-screenshots", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  height: 700,
  centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
