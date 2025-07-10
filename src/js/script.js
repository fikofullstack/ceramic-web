import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import "../sass/style.scss";

try {
  swiper = new Swiper('.works__slider', {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      1200: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      // when window width is >= 480px
      1920: {
        slidesPerView: 3,
        spaceBetween: 35
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".icon-right-open",
      prevEl: ".icon-left-open",
    },
    modules: [Navigation, Pagination],

  });
}
catch (e) {}
