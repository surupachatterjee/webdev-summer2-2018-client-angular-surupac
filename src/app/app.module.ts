import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {CourseNavigatorServiceClient} from "./services/course-navigator.service.client";
import { CourseNavigatorComponent } from "./course-navigator/course-navigator.component";
import { WhiteBoardComponent } from "./white-board/white-board.component";
import { CourseGridComponent } from "./course-grid/course-grid.component";
import {CourseServiceClient} from "./services/course.service.client";
import {routing} from "./app.routing";
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from "./services/module.service.client";
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from "./services/lesson.service.client";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from "@angular/forms";
import {UserServiceClient} from "./services/user.service.client";
import { SectionListComponent } from './section-list/section-list.component';
import { AdminComponent } from './admin/admin.component';
import {SectionServiceClient} from "./services/section.service.client";
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {TopicServiceClient} from "./services/topic.service.client";
import {WidgetServiceClient} from "./services/widget.service.client";


@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SectionListComponent,
    AdminComponent,
    TopicPillsComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    UserServiceClient,
    SectionServiceClient,
    TopicServiceClient,
    WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
