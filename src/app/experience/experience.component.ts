import { Component } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  public jobs: Job[] = [
    new Job('Lead Software Engineer', 'November 2021 - Present', 'EPAM Systems', '<p>Environment: AWS, C# (.NET Core 6.0), Vue.js, JavaScript/TypeScript, HTML, CSS, Python 3.9, Docker, Jenkins, MySQL, NUnit<ul><li>Developed cloud-native Execution Compliance and Trade Surveillance System.</li><li>Designed and implemented a web dashboard for monitoring and analyzing using Vue.js.</li><li>Developed backend services following a RESTful approach using .NET Core.</li><li>Implemented event-driven workflow of loading and parsing large data files with Amazon SQS and AWS Lambdas written in Python.</li></ul></p>', 1),
    new Job('Lead Software Engineer', 'May 2019 - November 2021', 'EPAM Systems', '<p>Environment: Azure, C# (.NET Core 6.0), Angular 13, JavaScript/TypeScript, HTML, CSS, Go Lang, Azure DevOps, OKTA, Cosmos DB, Redis, xUnit<ul><li>Designed and developed a cloud-native microservice-based system for managing insurance claims, underwriting, and reporting.</li><li>Developed a web self-service portal using Angular, and RESTful Web APIs using .NET Core.</li><li>Implemented performance-critical internal services using GoLang with Gin web framework.</li><li>Achieved and maintained 80% code coverage by unit and contract tests, and established automated quality gates in CI/CD.</li></ul></p>', 1),
    new Job('Senior Software Engineer', 'September 2015 - April 2019', 'Credit Suisse', '<p>Environment: C# (.NET Core 2.1 and .NET 4.6), WPF, WCF, EF, MS SQL, MS SSAS, TeamCity, Jenkins, NUnit<ul><li>Developed a risk management desktop application for the Credit Suisse front office using WPF and C#.</li><li>Converted an existing backend monolithic architecture into microservices and implemented new RESTful Web APIs using .NET Core.</li><li>Maintained and improved the performance of the in-house distributed cache written in C#.</li><li>Supported worldwide users as a part of the SL3 team.</li></ul></p>', 1),
    new Job('Senior Software Engineer', 'September 2014 - September 2015', 'Sintegro Soft (contractor at Yandex)', '<p>Environment: C# (.NET 4.5), ASP.NET Web API, ASP.NET MVC 5, JavaScript, HTML, CSS, WPF, MS SQL, NUnit<ul><li>Developed a payment system that allows employees to pay for lunch at nearby cafes and restaurants with the office access card (RFID tag)</li><li>Developed a personal page for users, a desktop application for administrators, and payment service middleware.</li><li>Participated in the software integration process.</li></ul></p>', 1),
    new Job('Software Engineer', 'July 2013 - August 2014', 'Gollard', '<p>Environment: C# (.NET 4.5), WPF, WCF, ASP.NET Web API, Esri ArcGIS, MS SQL, MySQL, NUnit<ul><li>Developed a desktop GIS application for an energy distribution company that deals with electrical grids, stations, and facilities.</li><li>Implemented real-time tracking of service transport location and engine state.</li><li>Developed an alerting system that uses biometric data from cameras and events from sensors.</li></ul></p>', 1),
    new Job('Software Engineer', 'August 2012 - July 2013', 'SGC', '<p>Environment: C# (.NET 4.0), WPF, SOAP, MS SQL<ul><li>Developed software for composing estimates to determine the cost of construction.</li><li>Added functionality for converting files from other well-known systems for composing estimates available on the market.</li><li>Implemented logic that allows exporting the final result to Excel, Word, etc.</li></ul></p>', 1),
    new Job('Software Engineer', 'September 2010 - July 2012', 'Research and Production Center "Start"', '<p>Environment: C# (.NET 3.5), WinForms, SOAP, MS SQL<ul><li>Developed in-house CAD for designing microboards.</li><li>Implemented functionality for printing photomasks of microboards using special equipment.</li><li>Added the possibility to import AutoCAD files.</li></ul></p>', 1),
  ];
}
