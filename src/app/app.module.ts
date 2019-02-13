import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { SkillsComponent } from './skills/skills.component';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { ProjectHighlightsComponent } from './project-highlights/project-highlights.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    WorkExperienceComponent,
    BasicInformationComponent,
    SkillsComponent,
    ProjectHighlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
