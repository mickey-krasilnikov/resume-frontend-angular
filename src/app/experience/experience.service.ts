import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, forkJoin, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Experience, ExperienceWithSkills } from './experience.model';
import { Skill } from '../skills/skill.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private experienceUrl: string;
  private skillsUrl: string;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
    this.experienceUrl = environment.useMocks
      ? '../../mock-data/mock-experience.json'
      : 'api/resumeservice/experience';

    this.skillsUrl = environment.useMocks
      ? '../../mock-data/mock-skills.json'
      : 'api/resumeservice/skills';
  }

  getExperience(): Observable<[Experience[], Skill[]]> {
    const experience$ = this.http.get<Experience[]>(
      this.baseUrl + this.experienceUrl
    );
    const skills$ = this.http.get<Skill[]>(this.baseUrl + this.skillsUrl);

    return forkJoin([experience$, skills$]);
  }

  mergeData(experience: Experience[], skills: Skill[]): ExperienceWithSkills[] {
    const mergedData: ExperienceWithSkills[] = [];

    for (const exp of experience) {
      const relatedSkills = skills.filter((s) => exp.skillIds.includes(s.id));

      mergedData.push({
        id: exp.id,
        title: exp.title,
        company: exp.company,
        location: exp.location,
        environment: relatedSkills,
        taskPerformed: exp.taskPerformed,
        startDate: exp.startDate,
        endDate: exp.endDate,
      });
    }

    return mergedData;
  }
}
