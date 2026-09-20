var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1260: {
      slidesPerView: 3,
      spaceBetween: 10
    },

    1130: {
      slidesPerView: 3,
      spaceBetween: 10
    },

    678: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});