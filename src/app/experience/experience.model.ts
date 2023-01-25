import { Skill } from "../skills/skill.model";

export class Experience {
   constructor(
    public id: string,
    public title: string,
    public company: string,
    public location: string,
    public environment: Skill[],
		public taskPerformed: string[],
    public startDate: Date,
    public endDate?: Date) {
  }
}
