import { Component, Input } from '@angular/core';
import { CertificationWithIcon } from './certification.model';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css'],
})
export class CertificationComponent {
  @Input() certification!: CertificationWithIcon[];
}
