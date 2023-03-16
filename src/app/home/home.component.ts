import { AfterViewInit, Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Certification } from '../certification/certification.model';
import { CertificationService } from '../certification/certification.service';
import { Contact } from '../contacts/contacts.model';
import { ContactsService } from '../contacts/contacts.service';
import {
  Experience,
  ExperienceWithSkills,
} from '../experience/experience.model';
import { ExperienceService } from '../experience/experience.service';
import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  isLoading: boolean = false;
  isLongLoading: boolean = false;
  public highlightedSkills!: Skill[];
  public experience!: ExperienceWithSkills[];
  public certification!: Certification[];
  public contacts!: Map<string, Contact>;

  constructor(
    private certificationService: CertificationService,
    private contactsService: ContactsService,
    private experienceService: ExperienceService,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit() {
    setTimeout(() => (this.isLongLoading = true), 4000);
  }

  getData() {
    this.isLoading = true;
    forkJoin([
      this.certificationService.getCertificates(),
      this.contactsService.getContacts(),
      this.experienceService.getExperience(),
      this.skillsService.getSkills(),
    ]).subscribe(async (responses) => {
      // await this.sleep(2000);
      this.certification = this.preprocessCertData(responses[0]);
      this.contacts = this.preprocessContactData(responses[1]);
      this.experience = this.preprocessExperienceData(
        responses[2],
        responses[3]
      );
      this.highlightedSkills = this.preprocessSkillData(responses[3]);
      this.isLoading = false;
    });
  }

  preprocessCertData(data: Certification[]): Certification[] {
    return [...data];
  }

  preprocessContactData(data: Contact[]): Map<string, Contact> {
    return new Map(data.map((o) => [o.key, o]));
  }

  preprocessSkillData(data: Skill[]): Skill[] {
    return [...data.filter((s) => s.isHighlighted)].sort(
      (a, b) => a.priority - b.priority
    );
  }

  preprocessExperienceData(
    expData: Experience[],
    skillData: Skill[]
  ): ExperienceWithSkills[] {
    const mergedData: ExperienceWithSkills[] = [];

    for (const exp of expData) {
      const relatedSkills = skillData.filter((s) =>
        exp.skillIds.includes(s.id)
      );

      mergedData.push(
        new ExperienceWithSkills(
          exp.id,
          exp.title,
          exp.company,
          exp.companyLogoImageUrl,
          exp.location,
          exp.countryFlagImageUrl,
          exp.skillIds,
          relatedSkills.sort((a, b) => a.priority - b.priority),
          exp.taskPerformed,
          exp.startDate,
          exp.endDate
        )
      );
    }

    return mergedData.sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
