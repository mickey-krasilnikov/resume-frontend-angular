import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})

export class CertificationComponent {
  public head: any = { title: 'CERTIFICATION', subtitle: 'PERSONAL ACHIEVEMENT & COURSES' };
  public certification: any = [
    { title: 'COURSE', name: 'COURSE NAME - 2022' },
    { title: 'ACHIEVEMENT', name: 'ACHIEVEMENT NAME - 2021' }
  ];
}
