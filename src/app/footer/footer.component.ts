import { Component, Input } from '@angular/core';
import { Contact } from '../contacts/contacts.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() contacts!: Map<string, Contact>;
}
