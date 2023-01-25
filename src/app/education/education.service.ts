import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Education } from './education.model';

@Injectable({ providedIn: 'root' })
export class EducationService {

  private url: string = 'api/resumeservice/education';
  private useMock: boolean = true;

  constructor(private http: HttpClient) { }

  getEducation(): Observable<Education[]>  {
    if (this.useMock) {
      const education: Education[] = [
        new Education('c7c2ea36-d031-4e3b-b2fb-7ee2e56d2f02', 'Penza State University','Bachelor\'s degree', 'Design and technology of radio-electronic devices', new URL('https://international.pnzgu.ru/'), new Date(2006,8,1), new Date(2013, 5, 1))
      ];
      return ObservableOf(education);
    }
    else {
      return this.http.get<Education[]>(this.url);
    }
  }
}
