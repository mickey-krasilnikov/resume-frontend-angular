import { IconName } from "@fortawesome/fontawesome-svg-core";

export class Certification {
   constructor(
    public id: string,
    public name: string,
    public issuer: string,
    public issuerIcon: IconName,
    public verificationUrl: URL,
    public issueDate: Date,
    public expirationDate?: Date) {
  }
}
