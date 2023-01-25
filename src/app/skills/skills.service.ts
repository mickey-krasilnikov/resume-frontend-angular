import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Skill } from './skill.model';

@Injectable({ providedIn: 'root' })
export class SkillsService {

  private url: string = 'api/resumeservice/skills';
  private useMock: boolean = true;

  constructor(private http: HttpClient) { }

  getCertificates(): Observable<Skill[]>  {
    if (this.useMock) {
      const Skills: Skill[] = [

        new Skill('798110c8-7669-4c96-a90c-98b6aee4277c', 'Backend', 'C#', '.NET/.NET Core'),
        new Skill('4ffbcf85-b370-4c3c-80b0-520fe788f382', 'Backend', 'GoLang', 'Gin'),
        new Skill('5a4e4364-9190-48d3-8296-3c4de88376ff', 'Backend', 'JavaScript'),
        new Skill('b7e4006f-8f82-411f-ba40-7f2459b50f43', 'Backend', 'TypeScript'),
        new Skill('13db1758-3b82-45ea-8fcf-9af828c0a309', 'Backend', 'Python'),
        new Skill('a4d4125c-8733-426c-9329-675513f71ad5', 'Frontend', 'Angular'),
        new Skill('d79d128f-6513-40b7-a792-7205c2e77650', 'Frontend', 'Vue.js'),
        new Skill('fe59ff92-4c7c-40d5-9819-2daac4373850', 'Frontend', 'ASP.NET'),
        new Skill('40c9e6dc-71d0-4037-a675-3aa94106ce94', 'Frontend', 'JavaScript'),
        new Skill('49ea45f5-d672-4c92-a5fd-e5b38575d47f', 'Frontend', 'TypeScript'),
        new Skill('c9ccd04f-f07d-49e1-be92-a8da4424ad4b', 'Frontend', 'HTML'),
        new Skill('5e73adf6-8a21-4e3c-9700-151592e5ed93', 'Frontend', 'CSS'),
        new Skill('a9c7ba10-4521-49e5-a26f-221714b41cf8', 'Frontend', 'WPF'),
        new Skill('705d5b4a-b417-41ea-9210-06c7abca1f7b', 'Database', 'T-SQL', 'MS SQL'),
        new Skill('73d6a8e4-8451-4f9c-bda8-149c10c4a793', 'Database', 'SQL/PSM', 'MySQL'),
        new Skill('298cd55d-f293-4ad1-95d5-e822295590fa', 'Database', 'PL-SQL', 'PostgreSQL, Oracle'),
        new Skill('482b225f-347e-4000-bc08-1ccd486e37ea', 'Database', 'MongoDB'),
        new Skill('6d981847-f2f6-40c6-8ad3-2e323e216210', 'Database', 'CosmosDB'),
        new Skill('5b54c66d-4a52-4f13-959e-c5954685435b', 'Database', 'DynamoDB'),
        new Skill('5e7283b6-d75f-4820-b69c-231de042679d', 'Database', 'Redis'),
        new Skill('1a8bf659-3f2d-4e92-b096-5b7ead948273', 'Tools', 'Docker'),
        new Skill('19fadc6b-a7d1-4465-a2a7-41008ae6209e', 'Tools', 'Kubernetes'),
        new Skill('e5c381ef-69c4-4796-9d4e-92e43bb00e13', 'Tools', 'Azure DevOps'),
        new Skill('8bcce18a-6a87-464a-aead-931b72d435e1', 'Tools', 'GitHub Actions'),
        new Skill('8934a0cb-a365-4a93-aa07-0c35d98627e2', 'Tools', 'AWS CodePipeline'),
        new Skill('f21b6cd7-562e-4625-b183-9b8c4d4e719d', 'Tools', 'Octopus'),
        new Skill('7a20ef82-2949-407e-9e13-1d00823dcd9b', 'Tools', 'Jenkins'),
        new Skill('900c6c68-b858-42fd-ba35-afad599cb599', 'Tools', 'TeamCity'),
        new Skill('ea6a1528-739e-4c5e-b844-a63e11730c68', 'Tools', 'Okta'),
        new Skill('717a9ba9-2931-45c6-b25b-c0398ec17ed3', 'Tools', 'Jira'),
        new Skill('9fa930f2-9798-4ce6-ad53-ff84806eb0f2', 'Clouds', 'Azure'),
        new Skill('b9b51fa1-cafd-49d4-b4c5-e62f254e5f79', 'Clouds', 'AWS'),
        new Skill('f2a29be7-ee24-400c-8f3a-5bde2b6ae918', 'Clouds', 'GCP'),
      ];
      return ObservableOf(Skills);
    }
    else {
      return this.http.get<Skill[]>(this.url);
    }
  }
}
