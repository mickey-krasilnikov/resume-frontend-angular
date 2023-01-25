import { Component, OnInit } from '@angular/core';
import { Certification } from './certification.model';
import { CertificationService } from './certification.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})

export class CertificationComponent implements OnInit {

  public certification: Certification[] = [];

  constructor(private certificationService: CertificationService) { }

  ngOnInit(): void {
    this.loadCertification();
  }

  loadCertification(): void {
    this.certificationService
      .getCertificates()
      .subscribe((data: Certification[]) => this.certification = [ ...data ]);
  }
}
