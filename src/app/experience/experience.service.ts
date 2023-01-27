import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of as ObservableOf } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Experience } from './experience.model';
import { Skill } from '../skills/skill.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ExperienceService {

  private url: string = 'api/resumeservice/experience';
  private useMocks: boolean;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.useMocks = environment.useMocks;
    this.baseUrl = environment.apiBaseUrl;
   }

  getExperience(): Observable<Experience[]>  {
    if (this.useMocks) {
      const experience: Experience[] = [
        new Experience(
          '3cf5c116-a819-49f8-a89a-9197b4e444b0',
          'Lead Software Engineer',
          'EPAM Systems',
          'San Jose, CA, USA',
          [
            new Skill('65b83ad3-d212-47ea-8505-163fa2bd31cd', 'Clouds', 'AWS'),
            new Skill('10377099-74a3-41f8-a8f5-52750a063d97', 'Backend', 'C#','.NET Core 6.0'),
            new Skill('0a27a648-249f-4c72-a9e4-9a5614810503', 'Backend', 'ASP.NET Core Web API'),
            new Skill('cb113bf8-6ede-4882-8db5-cc0c7f1374b6', 'Backend', 'Python 3.9'),
            new Skill('c5e0758e-f159-47f7-a19f-944c3877bf19', 'Frontend', 'Vue.js'),
            new Skill('e6666c58-e357-43f1-9b10-8b2957330cfb', 'Frontend', 'JavaScript'),
            new Skill('e0b8ab94-bfc0-499b-9d9c-e707ff8e351c', 'Frontend', 'TypeScript'),
            new Skill('1129dc91-39f7-4253-ab61-f45e4845d9ce', 'Frontend', 'HTML'),
            new Skill('a9a8baa4-3a5e-417d-9c50-8972de9acdd1', 'Frontend', 'CSS'),
            new Skill('42f8a037-cca6-48c8-ac6e-33d9c17d6171', 'Database', 'MySQL'),
            new Skill('82e94ce0-6d2a-496a-97aa-b674e94d7c8a', 'Tools', 'Docker'),
            new Skill('064b6547-ccbe-45d1-b1ed-f8481d4e0e28', 'Tools', 'Jenkins'),
            new Skill('b0af0f64-a45e-4514-b057-ff9a115acb43', 'Tools', 'NUnit')
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
          'c083e92e-deeb-4a0c-9a7c-513f2052041f',
          'Lead Software Engineer',
          'EPAM Systems',
          'Wroclaw, Poland',
          [
            new Skill('91bd8653-08c8-4153-9a73-c73e4efb6a9f', 'Clouds', 'Azure'),
            new Skill('077aee0c-1ffe-4920-8040-52890328de3b', 'Backend', 'C#','.NET Core 6.0'),
            new Skill('b89c8863-d092-4f6d-8d21-72259c7f6e45', 'Backend', 'ASP.NET Core Web API'),
            new Skill('1722742b-c6bd-445a-b2c5-c8983dad6f45', 'Backend', 'GoLang', 'Gin'),
            new Skill('a319538e-0b7e-40d0-9eb4-f780806f4b45', 'Frontend', 'Angular 13'),
            new Skill('80fd4c80-93a8-4919-9e20-0b62ed40cb05', 'Frontend', 'JavaScript'),
            new Skill('3c33bab3-eb64-45ee-bb24-bf5a33459a41', 'Frontend', 'TypeScript'),
            new Skill('672ad3f5-3504-4bd8-9382-78785eb980c5', 'Frontend', 'HTML'),
            new Skill('60391025-2c46-41b7-b61f-2aff7462ba48', 'Frontend', 'CSS'),
            new Skill('d357695c-8d7c-4b5e-8172-fcc5f19c1655', 'Database', 'Cosmos DB'),
            new Skill('754377b1-654d-423e-b34e-9b3c24f0e42d', 'Database', 'Redis'),
            new Skill('a1538348-d515-46a2-83f5-5f32e968685a', 'Tools', 'Azure DevOps'),
            new Skill('9eb4ae28-b6f0-45bf-a586-3cb955469f6a', 'Tools', 'OKTA'),
            new Skill('936d7c45-386b-48c5-9f11-d10ae3b548bd', 'Tools', 'xUnit')
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
          'd89325f4-3a4c-4d91-b4c7-771a9d42692d',
          'Senior Software Engineer',
          'Credit Suisse',
          'Wroclaw, Poland',
          [
            new Skill('ef9f8922-003b-4794-a008-3ea2f658e486', 'Backend', 'C#','.NET Core 2.1 and .NET 4.6'),
            new Skill('2e4e4594-e7e9-4530-9c2f-5f249375b834', 'Backend', 'WCF'),
            new Skill('babb6eeb-87bc-43cc-9c65-2dc60b1eaa1e', 'Frontend', 'WPF'),
            new Skill('6d57b67b-aed3-4891-9392-28cc4f60ca27', 'Frontend', 'XAML'),
            new Skill('5b5a1731-138e-4f1a-8e3d-72d0e1f65a84', 'Database', 'MS SQL'),
            new Skill('c2be5ee4-8cef-47d9-9829-94bf2a9423b3', 'Database', 'MS SSAS'),
            new Skill('b60b7044-9037-43c7-ba8c-780d9cfb7dba', 'Tools', 'Entity Framework'),
            new Skill('547723f8-990e-4720-a6e9-e8d3b1754d12', 'Tools', 'NUnit'),
            new Skill('bfba0c35-059d-4235-a274-433d9b5d74c1', 'Tools', 'TeamCity'),
            new Skill('fa34463a-8533-4d2b-a369-67675cdd7f2e', 'Tools', 'Jenkins'),
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
          '24423e3d-4325-4070-bed3-b636bdcd70fb',
          'Senior Software Engineer',
          'Yandex',
          'Moscow, Russia',
          [
            new Skill('f463749c-61d5-4162-9efd-80f8ed52bb18', 'Backend', 'C#','.NET 4.5'),
            new Skill('141bf1ba-903c-4dbd-aca7-0d158773b434', 'Backend', 'ASP.NET Web API'),
            new Skill('fc34d23d-cda5-4bd5-8c45-d301f09666ad', 'Frontend', 'ASP.NET', 'MVC 5'),
            new Skill('c35a91b6-d0b0-4251-bf22-1a5996776cf2', 'Frontend', 'JavaScript'),
            new Skill('f9eff09e-fc39-4617-ac7d-4ccc97917b88', 'Frontend', 'HTML'),
            new Skill('853e2a69-f929-43c0-996a-9536d92463f7', 'Frontend', 'CSS'),
            new Skill('53ddb506-5c19-48b2-b26f-606b8c0e30f4', 'Frontend', 'WPF'),
            new Skill('08d5b0c6-21b5-417e-bc4b-a7e2db207c50', 'Frontend', 'XAML'),
            new Skill('d29a6d03-3c62-4712-b6d3-131e965afd94', 'Database', 'MS SQL'),
            new Skill('7dde6b0e-44c4-4ca5-b6cb-2d61c2545b58', 'Tools', 'Entity Framework'),
            new Skill('57712ad0-b9be-4b63-9d65-79e2ead2fb70', 'Tools', 'NUnit'),
            new Skill('d7af6c33-a33d-48cc-9c1c-23cf40b6bff6', 'Tools', 'TeamCity'),
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
          'a5373e5b-a685-48fa-9a67-d0ac1e55f00c',
          'Software Engineer',
          'Gollard',
          'Moscow, Russia',
          [
            new Skill('fb249cd2-8a58-40d0-b7ff-e2f1d382e92a', 'Backend', 'C#','.NET 4.5'),
            new Skill('93a2467a-4ac7-4b18-b304-766244e22c74', 'Backend', 'ASP.NET Web API'),
            new Skill('7f1155f2-c8f9-4d6e-8c73-bbe4ebd240d3', 'Backend', 'WCF'),
            new Skill('d33d2b23-e316-4a5e-9e16-8cca269ce5a5', 'Frontend', 'WPF'),
            new Skill('3d9164ca-41e5-41a6-bac1-b46a5e515cbb', 'Frontend', 'XAML'),
            new Skill('c83f9ef2-ff6c-4232-b69e-f62440840927', 'Database', 'MS SQL'),
            new Skill('b717c27b-bae7-40d5-80d3-a2968cea1c12', 'Database', 'MySQL'),
            new Skill('f107cbb5-765a-45ba-a26b-d49ce9f597e0', 'Tools', 'Esri ArcGIS'),
            new Skill('01e6599c-c00d-4ee0-aa29-eee352ddd6dd', 'Tools', 'TeamCity'),
            new Skill('66b778b3-1331-4334-a7cb-351362e60006', 'Tools', 'NUnit'),
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
          '7468bc0c-59ed-458d-aae2-60eed503b647',
          'Software Engineer',
          'SGC',
          'Moscow, Russia',
          [
            new Skill('e8ddd38a-1fc8-42e3-bfa9-821b68b0fa9b', 'Backend', 'C#','.NET 4.0'),
            new Skill('dee181da-1a68-4f6c-92b9-a911c3b68449', 'Backend', 'SOAP'),
            new Skill('38ad3603-99ed-4672-8930-bac81e19da48', 'Frontend', 'WPF'),
            new Skill('6a51d1a7-2eb2-40ec-9dea-680b2b97f941', 'Frontend', 'XAML'),
            new Skill('560d1816-5331-4429-97eb-8a75495bb2a5', 'Database', 'MS SQL'),
            new Skill('e2fa6ce1-2dfd-4b06-8af6-a5c97f86e998', 'Tools', 'MSTest'),
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
          'f7a9c9dd-4305-4ea4-893b-d3c5709c7b77',
          'Software Engineer',
          'Research and Production Center "Start"',
          'Penza, Russia',
          [
            new Skill('d09c2943-56c3-421a-8a98-eda799f6c692', 'Backend', 'C#','.NET 3.5'),
            new Skill('12b3a943-6dae-4c94-bb2e-2b3f3b8bf90b', 'Backend', 'SOAP'),
            new Skill('a6ea01b4-f7f3-4c68-ac4d-c70e8050c719', 'Frontend', 'WinForms'),
            new Skill('659fd947-0ad0-4e65-9dfe-b5ed240181f2', 'Database', 'MS SQL')
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
      return ObservableOf(experience);
    }
    else {
      return this.http.get<Experience[]>(this.url);
    }
  }
}
