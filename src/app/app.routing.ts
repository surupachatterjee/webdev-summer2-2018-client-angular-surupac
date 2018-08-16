import { Routes, RouterModule } from '@angular/router';
import { WhiteBoardComponent } from "./white-board/white-board.component";
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {CourseNavigatorComponent} from "./course-navigator/course-navigator.component";
import {CourseGridComponent} from "./course-grid/course-grid.component";
import {SectionListComponent} from "./section-list/section-list.component";
import {AdminComponent} from "./admin/admin.component";
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import {QuizTakerComponent} from "./quiz/quiz-taker.component";
import {QuizAnswersComponent} from "./quiz-answers/quiz-answers.component";
import {QuizSubmissionsComponent} from "./quiz-submissions/quiz-submissions.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'quizzes', component: QuizListComponent},
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'courses/grid', component: CourseGridComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'quiz/:quizId', component: QuizTakerComponent },
  { path: 'course/:courseId/section', component: SectionListComponent },
  { path: 'quiz/:quizId/submissions', component: QuizSubmissionsComponent },
  { path: 'quiz/:quizId/submission/:submissionId', component: QuizAnswersComponent },
  { path: 'course/:courseId/module/:moduleId',component:CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId',component:CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent },
  { path: '**', component: WhiteBoardComponent} // last
];

export const routing = RouterModule.forRoot(appRoutes);
