import { Component, Input, OnInit, Renderer2 } from '@angular/core';
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

  ngOnInit(): void {
    this.swiper = new Swiper('.exprns-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: false,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    });
  }

  isActive(index: number) {
    return this.swiper.activeIndex === index;
  }
}
