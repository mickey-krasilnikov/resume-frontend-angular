import { Component } from '@angular/core';
import { Experience } from './experience.model';
import { Skill } from '../skills/skill.model';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  public experience: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.loadExperience();
  }

  loadExperience(): void {
    this.experienceService
      .getExperience()
      .subscribe((data: Experience[]) => this.experience = [ ...data ]);
  }
}
