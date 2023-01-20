import {Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  public skills: any = [
    {
      title: 'skill 1',
      info: [
        [{ title: 'SUB SKILL 1', progress: 95 }],
        [{ title: 'SUB SKILL 2', progress: 90 }],
        [{ title: 'SUB SKILL 3', progress: 85 }]
      ]
    },
    {
      title: 'skill 2',
      info: [
        [{ title: 'SUB SKILL 1', progress: 90 }],
        [{ title: 'SUB SKILL 2', progress: 95 }]
      ]
    },
    {
      title: 'skill 3',
      info: [
        [{ title: 'SUB SKILL 1', progress: 90 }],
        [{ title: 'SUB SKILL 2', progress: 95 }]
      ]
    },
  ];
}
