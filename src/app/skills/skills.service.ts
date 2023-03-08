import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Skill } from './skill.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private skillsUrl: string;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.useMocks ? '' : environment.apiUrl;
    this.skillsUrl = environment.useMocks
      ? '../../mock-data/mock-skills.json'
      : 'api/resumeservice/skills';
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.baseUrl + this.skillsUrl);
  }
}
