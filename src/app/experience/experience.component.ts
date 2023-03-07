import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { ExperienceWithSkills } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  @Input() experience!: ExperienceWithSkills[];
  public swiper!: Swiper;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.swiper = new Swiper('.product-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: false,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      on: {
        init: (swiper: Swiper) => {
          var target = document
            .querySelectorAll('.product-slider__item')
            [swiper.activeIndex].getAttribute('data-target');

          var imageElements = document.querySelectorAll('.product-img__item');
          for (let i = 0; i < imageElements.length; i++) {
            if (imageElements[i].id === target) {
              this.renderer.addClass(imageElements[i], 'active');
            } else {
              this.renderer.removeClass(imageElements[i], 'active');
            }
          }
        },
        slideChange: (swiper: Swiper) => {
          var target = document
            .querySelectorAll('.product-slider__item')
            [swiper.activeIndex].getAttribute('data-target');

          var imageElements = document.querySelectorAll('.product-img__item');
          for (let i = 0; i < imageElements.length; i++) {
            if (imageElements[i].id === target) {
              this.renderer.addClass(imageElements[i], 'active');
            } else {
              this.renderer.removeClass(imageElements[i], 'active');
            }
          }
        },
      },
    });
  }
}
