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
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizServiceClient} from "./services/quiz.service.client";
import { QuizTakerComponent } from './quiz/quiz-taker.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';
import {SubmissionServiceClient} from "./services/submission.service.client";


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
    WidgetListComponent,
    QuizListComponent,
    QuizTakerComponent,
    TrueFalseQuestionComponent,
    FillBlanksQuestionComponent,
    MultipleChoiceQuestionComponent,
    EssayQuestionComponent,
    QuizSubmissionsComponent,
    QuizAnswersComponent
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
    WidgetServiceClient,
    QuizServiceClient,
    SubmissionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
