export class Education {
   constructor(
    public id: string,
    public name: string,
    public degree: string,
    public fieldOfStudy: string,
    public url: URL,
    public startDate: Date,
    public endDate?: Date) {
  }
}
