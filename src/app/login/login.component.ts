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

  username;
  password;

  login(username,password){
    const user={
      username:username,
      password:password
    };
    this.service.login(user)
      .then((user) =>{
      if(user.username !== 'No session maintained'){
        console.log(user.username);
        this.router.navigate(['profile']);
      }

      });



  }
  ngOnInit() {
  }

}
