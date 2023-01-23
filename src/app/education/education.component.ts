import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
public education: any = [
    { title: 'Bachelor\'s degree, Design and technology of radio-electronic devices', universityName: 'Penza State University', dates: 'September 2006 – June 2013' },
  ];
}
