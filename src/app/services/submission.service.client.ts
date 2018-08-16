import {Injectable} from "@angular/core";


@Injectable()
export class SubmissionServiceClient{
  /*
  base_url = 'http://localhost:3000/api/quiz/';
  sub_url = 'http://localhost:3000/api/submission/';
  */

  base_url ="https://course-mgmt-nodejs-server-stc.herokuapp.com/api/quiz/"
  sub_url = "https://course-mgmt-nodejs-server-stc.herokuapp.com/api/submission/";

  getQuizSubmissionsForStudent(quizId){
    return fetch( this.base_url+ quizId +'/submission',{
      headers:{
        'content-type':'application/json'
      },
      credentials:"include"
    }).then(response => response.json())
  }

  getSubmission(subId){
    return fetch( this.sub_url + subId,{
    headers:{
      'content-type':'application/json'
    },
    credentials:"include"
  }).then(response => response.json())}


  getQuizSubmissionForStudent(quizId,subId){
    return fetch(this.base_url + quizId +'/submission/' + subId,{
      headers:{
        'content-type':'application/json'
      },
      credentials:"include"
    }).then(response => response.json())
  }


  getQuizSubmissionsForAllStudent(quizId){
    return fetch(this.base_url + quizId +'/submissions',{
      headers:{
        'content-type':'application/json'
      }
    }).then(response => response.json())
  }

}
