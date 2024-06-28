import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { LAPTOP_MAX_WIDTH, TABLET_MAX_WIDTH, PHONE_MAX_WIDTH } from '../../shared/constants/global-vars';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  exportAs: "app-carousel",
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  /* path for the images inside folder*/
  slides = [
    { img: '../../assets/images/wmb.jpg' },
    { img: '../../assets/images/fire_pillar.jpg' },
    { img: '../../assets/images/church_ages.jpg' },
    { img: '../../assets/images/pyramid.jpg' },
    { img: '../../assets/images/bride_tree.jpg' }
  ];

  /* configs for the slider */
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: LAPTOP_MAX_WIDTH,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        },
      },
      {
        breakpoint: TABLET_MAX_WIDTH,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: PHONE_MAX_WIDTH,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true
        },
      },
    ],
    autoplay: true,
    infinite: true,
    speed: 1400,
    autoplaySpeed: 2000,
    cssEase: 'ease',
    dots: true,
    easing: 'linear',
    pauseOnHover: true
  };



}
