import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from './experience.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private experienceUrl: string;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.useMocks ? '' : environment.apiUrl;
    this.experienceUrl = environment.useMocks
      ? '../../mock-data/mock-experience.json'
      : 'api/resumeservice/experience';
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.baseUrl + this.experienceUrl);
  }
}
