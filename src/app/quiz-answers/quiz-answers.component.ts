import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SubmissionServiceClient} from "../services/submission.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../models/user.model.client";

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  username;
  password;
  userRole;
  admin = false;
  loginVal = false;
  quizId;
  subId;
  quizSubmission = {
    submissionDate: Date,
    quiz: {
      title: String,
      questions: []
    },
    answers: [],
    _id: '',
    student: {
      username: String,
      password: String,
      firstName: String,
      lastName: String,
      role: String,
      email: String,
      phone: String,
      dateOfBirth: Date
    }
  };
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
    this.activatedRoute.params.subscribe(
      params => this.subId = params['submissionId']
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
            this.service.getSubmission(this.subId)
              .then(submission => this.quizSubmission = submission);
          }
          else {
            console.log("user role:" + this.userRole);
            this.service.getQuizSubmissionForStudent(this.quizId, this.subId)
              .then(submission => this.quizSubmission = submission);
          }
        }
      );
  }
}
