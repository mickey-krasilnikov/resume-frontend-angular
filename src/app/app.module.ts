import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadlineComponent } from './headline/headline.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationComponent } from './certification/certification.component';
import { FooterComponent } from './footer/footer.component';

import { PhonePipe } from './shared/pipes/phone.pipe';
import { ExpirationPipe } from './shared/pipes/expiration.pipe';

import { BusyIndicatorDirective } from './shared/directives/busy-indicator.directive';

import { register } from 'swiper/element/bundle';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadlineComponent,
    ContactsComponent,
    SkillsComponent,
    ExperienceComponent,
    CertificationComponent,
    FooterComponent,
    PhonePipe,
    BusyIndicatorDirective,
    NavbarComponent,
    ExpirationPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    register();
  }
}
