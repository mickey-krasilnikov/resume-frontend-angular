import {Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  public skills: any = [
    {
      title: 'Backend',
      info: [
        { title: 'C# (.NET/.NET Core)', progress: 95 },
        { title: 'GoLang (Gin)', progress: 90 },
        { title: 'JavaScript / TypeScript', progress: 85 },
        { title: 'Python', progress: 85 }
      ]
    },
    {
      title: 'Frontend',
      info: [
        { title: 'Angular', progress: 90 },
        { title: 'Vue.js', progress: 90 },
        { title: 'ASP.NET', progress: 90 },
        { title: 'JavaScript / TypeScript', progress: 90 },
        { title: 'HTML', progress: 90 },
        { title: 'CSS', progress: 90 },
        { title: 'WPF', progress: 95 }
      ]
    },
    {
      title: 'Database',
      info: [
        { title: 'T-SQL (MS SQL)', progress: 90 },
        { title: 'SQL/PSM (MySQL)', progress: 90 },
        { title: 'PL-SQL (PostgreSQL, Oracle)', progress: 90 },
        { title: 'MongoDB', progress: 90 },
        { title: 'Redis', progress: 90 },
        { title: 'CosmosDB', progress: 90 },
        { title: 'DynamoDB', progress: 90 }
      ]
    },
    {
      title: 'Tools',
      info: [
        { title: 'Docker', progress: 90 },
        { title: 'Kubernetes', progress: 90 },
        { title: 'Azure DevOps', progress: 90 },
        { title: 'GitHub Actions', progress: 90 },
        { title: 'AWS CodePipeline', progress: 90 },
        { title: 'Octopus', progress: 90 },
        { title: 'Jenkins', progress: 90 },
        { title: 'TeamCity', progress: 90 },
        { title: 'Okta', progress: 90 },
        { title: 'Jira', progress: 95 }
      ]
    },
    {
      title: 'Clouds',
      info: [
        { title: 'Azure', progress: 90 },
        { title: 'AWS', progress: 95 },
        { title: 'GCP', progress: 95 }
      ]
    },
  ];
}
