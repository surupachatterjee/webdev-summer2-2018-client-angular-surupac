import {Injectable} from "@angular/core";

@Injectable()
export class UserServiceClient{

  /*URL = "http://localhost:3000/api"*/
  URL = "https://course-mgmt-nodejs-server-stc.herokuapp.com/api"

  /*findUserById(userId){
    return fetch("http://localhost:3000/api/user/"+userId)
      .then(response => response.json());

  }
*/
  profile(){
    return fetch(this.URL+'/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  login = (user) => {
    return fetch(this.URL+"/login",{
      method: 'post',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }

    }).then(response => response.json());
  }


  logout() {
    return fetch(this.URL+'/logout', {
      method: 'post',
      credentials: 'include'
    });
  }


  createUser(username,password)
  {
    const userToCreate ={
      username : username,
      password: password,
      role:'STUDENT'
    };
    return fetch(this.URL + "/user",{
      body: JSON.stringify(userToCreate),
      method:'POST',
      credentials: 'include',
      headers:{
        'content-type':'application/json'
      }
    })

  }

  updateUser(userId, user) {
    return fetch(this.URL+'/user/' + userId, {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUserByUsername(username){
    return fetch(this.URL +"/user/"+username,{
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response =>response.json());
  }




}
