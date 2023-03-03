import { Component } from '@angular/core';
import { Education } from './education.model';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  public education: Education[] = [];
  public isLoading: boolean = false;

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.loadEducation();
  }

  loadEducation(): void {
    this.isLoading = true;
    this.educationService.getEducation().subscribe((data: Education[]) => {
      this.education = [...data];
      this.isLoading = false;
    });
  }
}
