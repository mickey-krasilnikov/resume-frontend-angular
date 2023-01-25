import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Contacts } from './contacts.model';

@Injectable({ providedIn: 'root' })
export class ContactsService {

  private url: string = 'api/resumeservice/contacts';
  private useMock: boolean = true;

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contacts>  {
    if (this.useMock) {
      const contacts: Contacts = {
        'phone': '4084803600',
        'email': 'mickey.krasilnikov@gmail.com',
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
