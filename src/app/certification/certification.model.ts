export class Certification {
  constructor(
    public id: string,
    public name: string,
    public issuer: string,
    public importance: number,
    public verificationUrl: URL,
    public badgeImageUrl: URL,
    public issueDate: Date,
    public expirationDate?: Date
  ) {}
}
