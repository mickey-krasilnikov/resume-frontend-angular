import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})

export class CertificationComponent {
  public certification: any = [
    { title: 'Azure Solutions Architect Expert', name: 'Microsoft - June 2020 - June 2023' },
    { title: 'Professional Cloud Architect', name: 'Google - October 2020 - October 2022' },
    { title: 'AWS Certified Solutions Architect – Associate', name: 'Amazon - April 2021 - April 2024' },
    { title: 'DevOps Engineer Expert', name: 'Microsoft - December 2020 - December 2023' },
    { title: 'Azure Developer Associate', name: 'May 2020 - May 2022' },
    { title: 'Associate Cloud Engineer', name: 'Google - September 2020 - September 2022' }
  ];
}
