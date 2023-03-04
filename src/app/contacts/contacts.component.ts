import { Component, Input } from '@angular/core';
import { Contact } from './contacts.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  @Input() contacts!: Map<string, Contact>;
}
