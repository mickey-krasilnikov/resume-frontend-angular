import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

export class Certification {
  constructor(
    public id: string,
    public name: string,
    public issuer: string,
    public verificationUrl: URL,
    public issueDate: Date,
    public expirationDate?: Date
  ) {}
}

export class CertificationWithIcon extends Certification {
  constructor(
    id: string,
    name: string,
    issuer: string,
    public issuerIconPrefix: IconPrefix,
    public issuerIconName: IconName,
    verificationUrl: URL,
    issueDate: Date,
    expirationDate?: Date
  ) {
    super(id, name, issuer, verificationUrl, issueDate, expirationDate);
  }
}
