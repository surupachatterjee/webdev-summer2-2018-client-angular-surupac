import {Injectable} from "@angular/core";

@Injectable()
export class QuizServiceClient{

  /*base_url = 'http://localhost:3000/api/quiz/';*/
  base_url ="https://course-mgmt-nodejs-server-stc.herokuapp.com/api/quiz/"

  createQuiz(quiz){}

  findAllQuizzes(){
    return fetch(this.base_url)
      .then(response => response.json());
  }
  findQuizById(quizId){
    return fetch(this.base_url + quizId)
      .then(response => response.json());
  }

  submitQuiz(quiz){
    return fetch(this.base_url + quiz._id +'/submission',{
      method:'post',
      body:JSON.stringify(quiz),
      headers:{
        'content-type':'application/json'
      },
      credentials:"include"
    }).then(response => response.json())
  }



  /*updateQuiz(quizId,newQuiz){}
  deleteQuiz(quizId){}*/

}
