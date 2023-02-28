import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Education } from './education.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class EducationService {
  private educationUrl: string;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
    this.educationUrl = environment.useMocks
      ? '../../mock-data/mock-education.json'
      : 'api/resumeservice/education';
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.baseUrl + this.educationUrl);
  }
}
