export class Skill {
  constructor(
    public id: string,
    public name: string,
    public skillGroup: string,
    public experienceIds: string[]
  ) {}
}
