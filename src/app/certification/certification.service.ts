import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Certification } from './certification.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CertificationService {

  private endpointUrl: string = 'api/resumeservice/certification';
  private useMocks: boolean;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.useMocks = environment.useMocks;
    this.baseUrl = environment.apiBaseUrl;
   }

  getCertificates(): Observable<Certification[]>  {
    if (this.useMocks) {
      const certification: Certification[] = [
        new Certification('9fd195f9-e53d-4a2e-8019-a1b276372ab5', 'Azure Solutions Architect Expert', 'Microsoft', 'microsoft', new URL('https://www.credly.com/badges/8ea21901-34c7-4cb4-bc48-71e0c5cf3e85'), new Date(2020, 5, 10), new Date(2023, 5, 10)),
        new Certification('fa79fbf3-184f-4a49-a94e-d59fbf4a9b43', 'DevOps Engineer Expert', 'Microsoft', 'microsoft', new URL('https://www.credly.com/badges/eaedb35f-5ea9-45b2-b551-acad69b94488'), new Date(2020, 11, 10), new Date(2023, 11, 10)),
        new Certification('a5518d44-f884-4a6c-bce3-c77a7d5bda6a', 'Azure Developer Associate', 'Microsoft', 'microsoft', new URL('https://www.credly.com/badges/49ab14ad-ffe5-47ae-b3d1-9d29b00ef4dc'), new Date(2020, 4, 13), new Date(2022, 4, 13)),
        new Certification('fb8c72ea-72db-423c-b5a4-b26d0264fa14', 'AWS Certified Solutions Architect', 'Amazon', 'amazon', new URL('https://www.credly.com/badges/dc95ff2a-12d8-4816-91b2-a9292ae5df85'), new Date(2020, 3, 28), new Date(2024, 3, 28)),
        new Certification('092b2834-b406-4c92-81d0-8714e53efa5b', 'Professional Cloud Architect', 'Google', 'google', new URL('https://www.credential.net/786961ad-0225-4bb0-883a-3c2feceb5174'), new Date(2020, 9, 27), new Date(2022, 9, 27)),
        new Certification('6d2f85ed-6cd8-4fdf-b2a6-fde4611e998d', 'Associate Cloud Engineer', 'Google', 'google', new URL('https://www.credential.net/f4054913-d10c-4cd4-89cb-e286f00de2ae'), new Date(2020, 8, 29), new Date(2023, 8, 29))
      ];
      return ObservableOf(certification);
    }
    else {
      return this.http.get<Certification[]>(`${this.baseUrl}/${this.endpointUrl}`);
    }
  }

}
