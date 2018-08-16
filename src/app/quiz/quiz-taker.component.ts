import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizServiceClient} from "../services/quiz.service.client";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quizId ='';
  quiz ={
    title:'',
    questions:[]
  };
  quizTitle ='';
  username;
  password;
  admin = false;
  loginVal = false;

  constructor(private activatedRoute:ActivatedRoute,
              private userService:UserServiceClient,
              private route:Router,
              private service:QuizServiceClient) {

  }

  submitQuiz(quiz){
    console.log(quiz);
    this.service.submitQuiz(quiz)
      .then(submission => {
        console.log(submission);
        alert('Quiz submitted successfully');
        this.route.navigate(['home'])
        });

  }

  cancelQuiz(){
    this.route.navigate(['quizzes'])
  }

  loadParams(params)
  {
    this.quizId = params['quizId'];
    console.log(this.quizId)
  }


  logout() {
    this.userService
      .logout()
      .then(() =>
        this.route.navigate(['login']));

  }

  ngOnInit() {
    this.userService
      .profile()
      .then((user) => {
          console.log('logged in as : ', user);
          this.username = user.username;
          if (this.username !== 'No session maintained') {
            this.loginVal = true;
          }
          if (this.username === 'admin') {
            this.admin = true;
          }
        }
      );
    this.activatedRoute.params.subscribe(
      params =>
        this.service.findQuizById(
          params['quizId']
        ).then(quiz => this.quiz = quiz))
  }

    /*this.activatedRoute.params.subscribe(
      params => this.loadParams(params));
     this.service.findQuizById(this.quizId)
       .then(quiz => {
         this.quiz = quiz;
       console.log(this.quiz)});*/


}
