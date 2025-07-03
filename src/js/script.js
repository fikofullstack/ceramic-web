import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import "../sass/style.scss";


const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    ...
  });