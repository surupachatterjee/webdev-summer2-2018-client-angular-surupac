import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from "../services/quiz.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes =[];
  username;
  password;
  userRole;
  admin = false;
  loginVal = false;

  constructor(private service:QuizServiceClient,
              private userService:UserServiceClient,
              private router:Router) { }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.userService
      .profile()
      .then((user) => {
          console.log('logged in as : ', user);
          this.username = user.username;
          this.userRole = user.role;
          if (this.username !== 'No session maintained') {
            this.loginVal = true;
          }
          if (this.username === 'admin') {
            this.admin = true;
          }
        }
      );

    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);

  }

}
