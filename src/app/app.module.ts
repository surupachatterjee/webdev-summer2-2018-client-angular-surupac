import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseNavigatorServiceClient} from './services/course-navigator.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseNavigatorServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
