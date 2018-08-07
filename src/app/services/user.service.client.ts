import {Injectable} from "@angular/core";

@Injectable()
export class UserServiceClient{

  USER_URL = "http://localhost:3000/api/user"

  /*findUserById(userId){
    return fetch("http://localhost:3000/api/user/"+userId)
      .then(response => response.json());

  }
*/
  profile(){
    return fetch('http://localhost:3000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  login = (user) => {
    return fetch("http://localhost:3000/api/login",{
      method: 'post',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }

    }).then(response => response.json());
  }


  logout() {
    return fetch('http://localhost:3000/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }


  createUser(username,password)
  {
    const user ={
      username : username,
      password: password
    };
    return fetch("http://localhost:3000/api/user",{
      body: JSON.stringify(user),
      method:'POST',
      credentials: 'include',
      headers:{
        'content-type':'application/json'
      }
    })

  }

  updateUser(userId, user) {
    return fetch('http://localhost:3000/api/user/' + userId, {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUserByUsername(username){
    return fetch(this.USER_URL +"/"+username,{
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response =>response.json());
  }




}
