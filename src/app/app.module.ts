import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HeadlineComponent } from './headline/headline.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationComponent } from './certification/certification.component';
import { FooterComponent } from './footer/footer.component';

import { PhonePipe } from './shared/pipes/phone.pipe';

import { BusyIndicatorDirective } from './shared/directives/busy-indicator.directive';

import { register } from 'swiper/element/bundle';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeadlineComponent,
    ContactsComponent,
    SkillsComponent,
    ExperienceComponent,
    CertificationComponent,
    FooterComponent,
    PhonePipe,
    BusyIndicatorDirective,
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
