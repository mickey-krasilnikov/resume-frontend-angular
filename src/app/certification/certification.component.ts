import { Component } from '@angular/core';
import { Certification } from '../models/certification';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})

export class CertificationComponent {
  public certification: Certification[] = [
    new Certification('', 'Azure Solutions Architect Expert', 'Microsoft', 'microsoft', new URL('https://www.credly.com/badges/8ea21901-34c7-4cb4-bc48-71e0c5cf3e85'), new Date(2020, 5, 10), new Date(2023,5,10)),
    new Certification('', 'DevOps Engineer Expert', 'Microsoft', 'microsoft', new URL('https://www.credly.com/badges/eaedb35f-5ea9-45b2-b551-acad69b94488'), new Date(2020, 11, 10), new Date(2023,11,10)),
    new Certification('', 'Azure Developer Associate', 'Microsoft', 'microsoft', new URL('https://www.credly.com/badges/49ab14ad-ffe5-47ae-b3d1-9d29b00ef4dc'), new Date(2020, 4, 13), new Date(2022,4,13)),
    new Certification('', 'AWS Certified Solutions Architect', 'Amazon', 'amazon', new URL('https://www.credly.com/badges/dc95ff2a-12d8-4816-91b2-a9292ae5df85'), new Date(2020, 3, 28), new Date(2024,3,28)),
    new Certification('', 'Professional Cloud Architect', 'Google', 'google', new URL('https://www.credential.net/786961ad-0225-4bb0-883a-3c2feceb5174'), new Date(2020, 9, 27), new Date(2022,9,27)),
    new Certification('', 'Associate Cloud Engineer', 'Google', 'google', new URL('https://www.credential.net/f4054913-d10c-4cd4-89cb-e286f00de2ae'), new Date(2020, 8, 29), new Date(2023,8,29))
  ];
}
