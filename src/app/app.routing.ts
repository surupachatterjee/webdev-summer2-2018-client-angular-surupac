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

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'courses/grid', component: CourseGridComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/section', component: SectionListComponent },
  { path: 'course/:courseId/module/:moduleId',component:CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId',component:CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent },
  { path: '**', component: WhiteBoardComponent} // last
];

export const routing = RouterModule.forRoot(appRoutes);
