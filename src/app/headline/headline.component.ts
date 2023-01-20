import { Component } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})

export class HeadlineComponent {
  public name: string = "Hi, my name is Mikhail";
  public title = "and I am full-stack software developer";
}
