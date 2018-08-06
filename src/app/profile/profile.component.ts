import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../models/user.model.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserServiceClient,
              private router:Router) { }


  user: User =new User();


  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  ngOnInit() {
    this.service.profile()
      .then(user => this.user = user );
  }

}
