import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Contact } from './contacts.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  private contactsUrl: string;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.useMocks ? '' : environment.apiUrl;
    this.contactsUrl = environment.useMocks
      ? '../../mock-data/mock-contacts.json'
      : 'api/resumeservice/contacts';
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl + this.contactsUrl);
  }
}
