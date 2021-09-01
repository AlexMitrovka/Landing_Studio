// Swiper

const teamslider = new Swiper(".team-slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 4.2,
  spaceBetween: 15,
  centeredSlides: true,
  slideToClickedSlide: true,
  speed: 600,
  threshold: 30,
});
const swiper_slider_thumb = new Swiper(".service-slider_thumb", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const service_slider = new Swiper(".service-slider", {
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 600,
  thumbs: {
    swiper: swiper_slider_thumb
  }
});

  /**
   * Portfolio details slider
   */
document.querySelectorAll('.container').forEach(n =>{
const swiper_portfolioModal_thumb = new Swiper(n.querySelector(".portfolio-modal_slider_thumb"), {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: false,
  watchSlidesProgress: true,
});

const portfolioModal_slider = new Swiper(n.querySelector(".portfolio-modal_slider"), {
  slidesPerView: 1,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  speed: 600,
  thumbs: {
    swiper: swiper_portfolioModal_thumb
  }
});
});
  /**
   *      END
   * Portfolio details slider
   */
const swiper_about = new Swiper(".swiper-about", {
  direction: "vertical",
  slidesPerView: 1,

  mousewheel: true,
});
// Mobile-Menu
$(document).ready(function () {
  $('#simple-menu').sidr({
    displace: false,
    side: 'right',
  });
});
$('#overlay, #close-menu-button').click(function () {
  $.sidr('close', 'sidr');
});


