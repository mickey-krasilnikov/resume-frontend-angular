import { Component } from '@angular/core';
import { Skill } from './skill.model';
import * as _ from 'lodash';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  public groupedSkills: _.Dictionary<Skill[]> = {};
  public isLoading: boolean = false;

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.isLoading = true;
    this.skillsService.getCertificates().subscribe((data: Skill[]) => {
      this.groupedSkills = _.groupBy(
        [...data.filter((s) => s.isHighlighted)].sort(
          (a, b) => a.priority - b.priority
        ),
        'skillGroup'
      );
      this.isLoading = false;
    });
  }
}
