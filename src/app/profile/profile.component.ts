import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../models/user.model.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserServiceClient,
              private router:Router,
              private sectionService :SectionServiceClient) { }

  admin = false;
  loginVal = true;
  user: {};
  updatedUser={};
  userId='';
  username: '';
  password: '';
  firstName: '';
  lastName: '';
  role:'';
  email:'';
  phone:'';
  dateOfBirth:Date;
  sections =[];


  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  updateProfile(){
    this.updatedUser={
      username: this.username,
    password: this.password,
    firstName: this.firstName,
    lastName: this.lastName,
    role:this.role,
    email:this.email,
    phone:this.phone,
    dateOfBirth:this.dateOfBirth

    };
    this.service.updateUser(this.userId,this.updatedUser)
      .then(user =>{
        this.user =user;
      } );

  }

  ngOnInit() {
    this.service.profile()
      .then(user => {
        if(user.username === 'No session maintained'){
          this.loginVal =false;
          this.router.navigate(['[login']);
        }
        if(user.username === 'admin'){
          this.admin = true;
        }else{
        this.user = user;
        this.userId = user._id;
        this.username = user.username;
        this.firstName =user.firstName;
        this.lastName =user.lastName;
        this.phone =user.phone;
        this.password =user.password;
        this.role =user.role;
        this.email=user.email;
        this.dateOfBirth =user.dateOfBirth;
        this.sectionService.findEnrolledSectionsForStudent()
          .then(sections => {
            this.sections = sections;
          })
        }
      } );
  }


}
