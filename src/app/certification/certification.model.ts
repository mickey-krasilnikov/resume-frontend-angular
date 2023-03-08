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
