import {Component } from '@angular/core';
import { Skill } from '../models/skill';
import * as _ from 'lodash';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  public groupedSkills: _.Dictionary<Skill[]>;

  constructor() {
    this.groupedSkills = _.groupBy(this.typedSkills, 'skillGroup');

  }

  public typedSkills: Skill[] = [
    new Skill('', 'Backend', 'C#', '.NET/.NET Core'),
    new Skill('', 'Backend', 'GoLang', 'Gin'),
    new Skill('', 'Backend', 'JavaScript'),
    new Skill('', 'Backend', 'TypeScript'),
    new Skill('', 'Backend', 'Python'),
    new Skill('', 'Frontend', 'Angular'),
    new Skill('', 'Frontend', 'Vue.js'),
    new Skill('', 'Frontend', 'ASP.NET'),
    new Skill('', 'Frontend', 'JavaScript'),
    new Skill('', 'Frontend', 'TypeScript'),
    new Skill('', 'Frontend', 'HTML'),
    new Skill('', 'Frontend', 'CSS'),
    new Skill('', 'Frontend', 'WPF'),
    new Skill('', 'Database', 'T-SQL', 'MS SQL'),
    new Skill('', 'Database', 'SQL/PSM', 'MySQL'),
    new Skill('', 'Database', 'PL-SQL', 'PostgreSQL, Oracle'),
    new Skill('', 'Database', 'MongoDB'),
    new Skill('', 'Database', 'CosmosDB'),
    new Skill('', 'Database', 'DynamoDB'),
    new Skill('', 'Database', 'Redis'),
    new Skill('', 'Tools', 'Docker'),
    new Skill('', 'Tools', 'Kubernetes'),
    new Skill('', 'Tools', 'Azure DevOps'),
    new Skill('', 'Tools', 'GitHub Actions'),
    new Skill('', 'Tools', 'AWS CodePipeline'),
    new Skill('', 'Tools', 'Octopus'),
    new Skill('', 'Tools', 'Jenkins'),
    new Skill('', 'Tools', 'TeamCity'),
    new Skill('', 'Tools', 'Okta'),
    new Skill('', 'Tools', 'Jira'),
    new Skill('', 'Clouds', 'Azure'),
    new Skill('', 'Clouds', 'AWS'),
    new Skill('', 'Clouds', 'GCP'),
  ];
}
