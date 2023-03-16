export class Skill {
  constructor(
    public id: string,
    public name: string,
    public skillGroup: string,
    public imageUrl: string,
    public experienceIds: string[],
    public priority: number,
    public isHighlighted: boolean
  ) {}
}
