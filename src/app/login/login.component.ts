import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,
              private service: UserServiceClient) { }

  username ='';
  password= '';

  login(username,password){
    if(username === ''){
      alert("Enter valid username");
    }else if(password === ''){
      alert("Please enter your password");
    }else{
    const user={
      username:username,
      password:password
    };
    this.service.login(user)
      .then((user) =>{
      console.log("user that came back" + user.username);
      if(user.username === 'Invalid credentials'){
        alert("Invalid username or password ");
        this.router.navigate(['login']);
      }
      else if(user.username !== 'No session maintained'){
        console.log(user.username);
        this.router.navigate(['profile']);
      }

      })}
    ;



  }
  ngOnInit() {
  }

}
