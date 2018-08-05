import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username;
  password;
  password2;
  constructor(private router:Router,
              private service:UserServiceClient) {

  }

  register(username, password, password2) {
    this.service
      .createUser(username, password)
      .then(() => {
      alert("You are registered successfully");
      this.router.navigate(['profile'])});


  }


  ngOnInit() {
  }

}
