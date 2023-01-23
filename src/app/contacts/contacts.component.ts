import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent {
  public contacts:any = {
    title: 'SOME DESCRIPCTION:',
    data:
      '<p>I\'m a full-stack software developer with over 12 years of professional programming experience in designing and developing commercial applications.</p>' +
      '<p>Certified cloud solution architect and developer (Azure, GCP, AWS)</p>' +
      '<p>Experienced as a Team Leader</p>'+
      '<p>Involved in full Software Development Life Cycle (SDLC)</p>',
  };
}
