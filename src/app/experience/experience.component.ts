import { Component } from '@angular/core';
import { Experience, ExperienceWithSkills } from './experience.model';
import { Skill } from '../skills/skill.model';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  public experience: ExperienceWithSkills[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.loadExperience();
  }

  loadExperience(): void {
    this.experienceService.getExperience().subscribe(([experience, skills]) => {
      const data = this.experienceService.mergeData(experience, skills);
      this.experience = [...data].sort(
        (a, b) =>
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      );
    });
  }
}
