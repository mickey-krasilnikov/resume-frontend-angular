import { Component, Input } from '@angular/core';
import { ExperienceWithSkills } from './experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  @Input() experience!: ExperienceWithSkills[];
}
