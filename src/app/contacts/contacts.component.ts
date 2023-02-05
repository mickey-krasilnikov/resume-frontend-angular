import { Component } from '@angular/core';
import { Contact } from './contacts.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent {

  public contacts: Map<string, Contact> = new Map<string, Contact>();

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactsService
      .getContacts()
      .subscribe((data: Contact[]) => this.contacts = new Map(data.map((o) => [o.key, o])));
  }
}
