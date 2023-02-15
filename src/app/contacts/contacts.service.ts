import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Contact } from './contacts.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  private url: string = 'api/resumeservice/contacts';
  private useMocks: boolean;

  constructor(private http: HttpClient) {
    this.useMocks = environment.useMocks;
  }

  getContacts(): Observable<Contact[]> {
    if (this.useMocks) {
      const contacts:Contact[] = [];
      contacts.push(new Contact('phone', '+14084803600', 'tel:+14084803600'));
      contacts.push(new Contact(
        'telegram',
        'Telegram',
        'https://t.me/+14084803600'
      ));
      contacts.push(new Contact(
        'whatsapp',
        'Whatsapp',
        'https://wa.me/+14084803600'
      ));
      contacts.push(new Contact(
        'email',
        'Mickey.Krasilnikov@gmail.com',
        'mailto:Mickey.Krasilnikov@gmail.com'
      ));
        contacts.push(new Contact(
          'location',
          'Sunyvale, CA, 94085',
          'https://www.google.com/maps/place/Sunyvale%20CA%2094085/'
        ));
      contacts.push(new Contact(
        'github',
        '@mickey-krasilnikov',
        'https://github.com/mickey-krasilnikov'
      ));
      contacts.push(new Contact(
        'linkedin',
        '@mickeykrasilnikov',
        'https://www.linkedin.com/in/mickeykrasilnikov'
      ));
      contacts.push(new Contact(
        'credly',
        '@mickey-krasilnikov',
        'https://www.credly.com/users/mickey-krasilnikov/badges'
      ));
      contacts.push(new Contact(
        'accredible',
        '@mikhailkrasilnikov328966',
        'https://www.credential.net/profile/mikhailkrasilnikov328966/wallet'
      ));
      contacts.push(new Contact(
        'instagram',
        '@mickey.krasilnikov',
        'https://www.instagram.com/mickey.krasilnikov'
      ));
      contacts.push(new Contact(
        'facebook',
        '@mickey.krasilnikov',
        'https://www.facebook.com/mickey.krasilnikov'
      ));
      contacts.push(new Contact(
        'twitter',
        '@mickey_kras',
        'https://twitter.com/mickey_kras'
      ));
      return ObservableOf(contacts);
    } else {
      return this.http.get<Contact[]>(this.url);
    }
  }
}
