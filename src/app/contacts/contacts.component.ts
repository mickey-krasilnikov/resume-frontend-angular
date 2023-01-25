import { Component } from '@angular/core';
import { Contacts } from './contacts.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent {

  public contacts: Contacts = { };

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.contactsService
      .getContacts()
      .subscribe((data: Contacts) => this.contacts = { ...data });
  }
}
