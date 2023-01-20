import { Component } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  public jobs: Job[] = [
    new Job('DESCRIPTION', '2020-2022', 'COMPANY', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p><ul><li>TASK 1</il><li>TASK 2</li></ul>', 1),
    new Job('DESCRIPTION', '2019', 'COMPANY', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>', 1),
    new Job('DESCRIPTION', '2017-2019', 'SCHOOL', '<p>SOME DESCRIPTION.</p>', 1)
  ];
}
