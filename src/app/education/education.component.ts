import { Component } from '@angular/core';
import { Education } from '../models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  public education: Education[] = [
    new Education('', 'Penza State University','Bachelor\'s degree', 'Design and technology of radio-electronic devices', new URL('https://international.pnzgu.ru/'), new Date(2006,8,1), new Date(2013, 5, 1))
  ];
}
