import { Component } from '@angular/core';
import { Experience } from '../models/experience';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  public experience: Experience[] = [
    new Experience(
      '',
      'Lead Software Engineer',
      'EPAM Systems',
      'San Jose, CA, USA',
      [
        new Skill('', 'Clouds', 'AWS'),
        new Skill('', 'Backend', 'C#','.NET Core 6.0'),
        new Skill('', 'Backend', 'ASP.NET Core Web API'),
        new Skill('', 'Backend', 'Python 3.9'),
        new Skill('', 'Frontend', 'Vue.js'),
        new Skill('', 'Frontend', 'JavaScript'),
        new Skill('', 'Frontend', 'TypeScript'),
        new Skill('', 'Frontend', 'HTML'),
        new Skill('', 'Frontend', 'CSS'),
        new Skill('', 'Database', 'MySQL'),
        new Skill('', 'Tools', 'Docker'),
        new Skill('', 'Tools', 'Jenkins'),
        new Skill('', 'Tools', 'NUnit')
      ],
      [
        'Developed cloud-native Execution Compliance and Trade Surveillance System.',
        'Designed and implemented a web dashboard for monitoring and analyzing using Vue.js.',
        'Developed backend services following a RESTful approach using.NET Core.',
        'Implemented event-driven workflow of loading and parsing large data files with Amazon SQS and AWS Lambdas written in Python.'
      ],
      new Date(2021, 10, 1)
    ),
    new Experience(
      '',
      'Lead Software Engineer',
      'EPAM Systems',
      'Wroclaw, Poland',
      [
        new Skill('', 'Clouds', 'Azure'),
        new Skill('', 'Backend', 'C#','.NET Core 6.0'),
        new Skill('', 'Backend', 'ASP.NET Core Web API'),
        new Skill('', 'Backend', 'GoLang', 'Gin'),
        new Skill('', 'Frontend', 'Angular 13'),
        new Skill('', 'Frontend', 'JavaScript'),
        new Skill('', 'Frontend', 'TypeScript'),
        new Skill('', 'Frontend', 'HTML'),
        new Skill('', 'Frontend', 'CSS'),
        new Skill('', 'Database', 'Cosmos DB'),
        new Skill('', 'Database', 'Redis'),
        new Skill('', 'Tools', 'Azure DevOps'),
        new Skill('', 'Tools', 'OKTA'),
        new Skill('', 'Tools', 'xUnit')
      ],
      [
        'Designed and developed a cloud-native microservice-based system for managing insurance claims, underwriting, and reporting.',
        'Developed a web self-service portal using Angular, and RESTful Web APIs using .NET Core.',
        'Implemented performance-critical internal services using GoLang with Gin web framework.',
        'Achieved and maintained 80% code coverage by unit and contract tests, and established automated quality gates in CI/CD.',
      ],
      new Date(2019, 4, 1),
      new Date(2021, 10, 1)
    ),
    new Experience(
      '',
      'Senior Software Engineer',
      'Credit Suisse',
      'Wroclaw, Poland',
      [
        new Skill('', 'Backend', 'C#','.NET Core 2.1 and .NET 4.6'),
        new Skill('', 'Backend', 'WCF'),
        new Skill('', 'Frontend', 'WPF'),
        new Skill('', 'Frontend', 'XAML'),
        new Skill('', 'Database', 'MS SQL'),
        new Skill('', 'Database', 'MS SSAS'),
        new Skill('', 'Tools', 'Entity Framework'),
        new Skill('', 'Tools', 'NUnit'),
        new Skill('', 'Tools', 'TeamCity'),
        new Skill('', 'Tools', 'Jenkins'),
      ],
      [
        'Developed a risk management desktop application for the Credit Suisse front office using WPF and C#.',
        'Converted an existing backend monolithic architecture into microservices and implemented new RESTful Web APIs using .NET Core.',
        'Maintained and improved the performance of the in-house distributed cache written in C#.',
        'Supported worldwide users as a part of the SL3 team.',
      ],
      new Date(2015, 8, 1),
      new Date(2019, 3, 1)
    ),
    new Experience(
      '',
      'Senior Software Engineer',
      'Yandex',
      'Moscow, Russia',
      [
        new Skill('', 'Backend', 'C#','.NET 4.5'),
        new Skill('', 'Backend', 'ASP.NET Web API'),
        new Skill('', 'Frontend', 'ASP.NET', 'MVC 5'),
        new Skill('', 'Frontend', 'JavaScript'),
        new Skill('', 'Frontend', 'HTML'),
        new Skill('', 'Frontend', 'CSS'),
        new Skill('', 'Frontend', 'WPF'),
        new Skill('', 'Frontend', 'XAML'),
        new Skill('', 'Database', 'MS SQL'),
        new Skill('', 'Tools', 'Entity Framework'),
        new Skill('', 'Tools', 'NUnit'),
        new Skill('', 'Tools', 'TeamCity'),
      ],
      [
        'Developed a payment system that allows employees to pay for lunch at nearby cafes and restaurants with the office access card (RFID tag)',
        'Developed a personal page for users, a desktop application for administrators, and payment service middleware.',
        'Participated in the software integration process.'
      ],
      new Date(2014,8,1),
      new Date(2015,8,1)
    ),
    new Experience(
      '',
      'Software Engineer',
      'Gollard',
      'Moscow, Russia',
      [
        new Skill('', 'Backend', 'C#','.NET 4.5'),
        new Skill('', 'Backend', 'ASP.NET Web API'),
        new Skill('', 'Backend', 'WCF'),
        new Skill('', 'Frontend', 'WPF'),
        new Skill('', 'Frontend', 'XAML'),
        new Skill('', 'Database', 'MS SQL'),
        new Skill('', 'Database', 'MySQL'),
        new Skill('', 'Tools', 'Esri ArcGIS'),
        new Skill('', 'Tools', 'TeamCity'),
        new Skill('', 'Tools', 'NUnit'),
      ],
      [
        'Developed a desktop GIS application for an energy distribution company that deals with electrical grids, stations, and facilities.',
        'Implemented real-time tracking of service transport location and engine state.',
        'Developed an alerting system that uses biometric data from cameras and events from sensors.'
      ],
      new Date(2013, 6, 1),
      new Date(2014, 7, 1)
    ),
    new Experience(
      '',
      'Software Engineer',
      'SGC',
      'Moscow, Russia',
      [
        new Skill('', 'Backend', 'C#','.NET 4.0'),
        new Skill('', 'Backend', 'SOAP'),
        new Skill('', 'Frontend', 'WPF'),
        new Skill('', 'Frontend', 'XAML'),
        new Skill('', 'Database', 'MS SQL'),
        new Skill('', 'Tools', 'MSTest'),
      ],
      [
        'Developed software for composing estimates to determine the cost of construction.',
        'Added functionality for converting files from other well-known systems for composing estimates available on the market.',
        'Implemented logic that allows exporting the final result to Excel, Word, etc.'
      ],
      new Date(2012, 7, 1),
      new Date(2013, 6, 1)
    ),
    new Experience(
      '',
      'Software Engineer',
      'Research and Production Center "Start"',
      'Penza, Russia',
      [
        new Skill('', 'Backend', 'C#','.NET 3.5'),
        new Skill('', 'Backend', 'SOAP'),
        new Skill('', 'Frontend', 'WinForms'),
        new Skill('', 'Database', 'MS SQL')
      ],
      [
        'Developed in-house CAD for designing microboards.',
        'Implemented functionality for printing photomasks of microboards using special equipment.',
        'Added the possibility to import AutoCAD files.'
      ],
      new Date(2010, 8, 1),
      new Date(2012, 6, 1)
    )
  ];
}
