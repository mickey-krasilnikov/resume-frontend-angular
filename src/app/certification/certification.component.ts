import { Component, OnInit } from '@angular/core';
import { IconName, IconPrefix } from '@fortawesome/free-brands-svg-icons';
import { Certification, CertificationWithIcon } from './certification.model';
import { CertificationService } from './certification.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css'],
})
export class CertificationComponent implements OnInit {
  public certification: CertificationWithIcon[] = [];
  public isLoading: boolean = false;

  constructor(private certificationService: CertificationService) {}

  ngOnInit(): void {
    this.loadCertification();
  }

  loadCertification(): void {
    this.isLoading = true;
    this.certificationService
      .getCertificates()
      .subscribe((data: Certification[]) => {
        this.certification = [...data]
          .map((i) => {
            let issuerIconPrefix: IconPrefix;
            let issuerIconName: IconName;
            switch (i.issuer.toLowerCase()) {
              case 'microsoft':
                issuerIconPrefix = 'fab';
                issuerIconName = 'microsoft';
                break;
              case 'google':
                issuerIconPrefix = 'fab';
                issuerIconName = 'google';
                break;
              case 'amazon':
                issuerIconPrefix = 'fab';
                issuerIconName = 'amazon';
                break;
              default:
                issuerIconPrefix = 'fas';
                issuerIconName = 'medal';
            }
            return new CertificationWithIcon(
              i.id,
              i.name,
              i.issuer,
              issuerIconPrefix,
              issuerIconName,
              i.verificationUrl,
              i.issueDate,
              i.expirationDate
            );
          })
          .sort((a, b) =>
            a.issuer != b.issuer
              ? b.issuer.localeCompare(a.issuer)
              : a.name.localeCompare(b.name)
          );

        this.isLoading = false;
      });
  }
}
