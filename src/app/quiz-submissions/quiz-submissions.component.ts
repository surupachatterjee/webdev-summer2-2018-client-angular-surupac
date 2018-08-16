import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import {QuizServiceClient} from "../services/quiz.service.client";
import {SubmissionServiceClient} from "../services/submission.service.client";

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  username;
  password;
  userRole;
  admin = false;
  loginVal = false;
  quizId = '';
  quizSubmissions = [];
  search;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserServiceClient,
              private router: Router,
              private service: SubmissionServiceClient) {
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      params => this.quizId = params['quizId']
    );
    this.userService
      .profile()
      .then((user) => {
          console.log('logged in as : ', user);
          this.userRole = user.role;
          this.username = user.username;
          if (this.username !== 'No session maintained') {
            this.loginVal = true;
          }
          if (this.username === 'admin') {
            this.admin = true;
          }
          if (this.userRole === 'ADMIN') {
            console.log("Calling Admin API");
            this.service.getQuizSubmissionsForAllStudent(this.quizId)
              .then(submissions => this.quizSubmissions = submissions);
          }
          else {
            console.log("user role:" + this.userRole);
            this.service.getQuizSubmissionsForStudent(this.quizId)
              .then(submissions => this.quizSubmissions = submissions);
          }
        }
      );


  }
}
