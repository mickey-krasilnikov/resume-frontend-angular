import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Certification } from './certification.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CertificationService {
  private certUrl: string;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.useMocks ? '' : environment.apiUrl;
    this.certUrl = environment.useMocks
      ? '../../mock-data/mock-certification.json'
      : 'api/resumeservice/certification';
  }

  getCertificates(): Observable<Certification[]> {
    return this.http.get<Certification[]>(this.baseUrl + this.certUrl);
  }
}
