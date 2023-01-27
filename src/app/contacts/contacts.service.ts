import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Contacts } from './contacts.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactsService {

  private url: string = 'api/resumeservice/contacts';
  private useMocks: boolean;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.useMocks = environment.useMocks;
    this.baseUrl = environment.apiBaseUrl;
   }

  getContacts(): Observable<Contacts>  {
    if (this.useMocks) {
      const contacts: Contacts = {
        'phone': '+14084803600',
        'email': 'Mickey.Krasilnikov@gmail.com',
        'location': 'Sunyvale, CA, 94085',
        'github': 'https://github.com/mickey-krasilnikov',
        'linkedin': 'https://www.linkedin.com/in/mickeykrasilnikov',
        'instagram': 'https://www.instagram.com/mickey.krasilnikov',
        'facebook': 'https://www.facebook.com/mickey.krasilnikov',
        'twitter': 'https://twitter.com/mickey_kras'
      };
      return ObservableOf(contacts);
    }
    else {
      return this.http.get<Contacts>(this.url);
    }
  }

}