import {Injectable} from "@angular/core";

@Injectable()
export class UserServiceClient{

  USER_URL = "http://localhost:3000/api/user"

  profile(){
    return fetch('http://localhost:3000/api/profile')
      .then(response => response.json());
  }

  login = (user) => {
    return fetch("http://localhost:3000/api/login",{
      method:'post',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)

    }).then(response => response.json());
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
      headers:{
        'content-type':'application/json'
      }
    })

  }


}
