import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from "../services/user.service.client";
import {User} from "../models/user.model.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service:UserServiceClient,
              private router:Router,
              private courseService:CourseServiceClient,
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
  //role:'';
  email:'';
  address='';
  phone:'';
  //dateOfBirth:Date;
  sections =[];
  courseIds=[];
  coursesEnrolled=[];

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
    //role:this.role,
    email:this.email,
    phone:this.phone,
    address:this.address
    //dateOfBirth:this.dateOfBirth

    };
    this.service.updateUser(this.userId,this.updatedUser)
      .then(user =>{
        this.user =user;
      } );

  }


  fetchCourse(courseId){
   for(let i=0;i<this.coursesEnrolled.length;i++){
     if(courseId === this.coursesEnrolled[i].id){
       return (this.coursesEnrolled[i].title)
     }
   }
  }

  drop(enrollment){
      this.sectionService
        .dropStudentFromSection(enrollment.section._id,enrollment._id)
        .then(() => {
            this.sectionService.findEnrolledSectionsForStudent()
              .then(sections => {
                this.sections = sections;
                for (let i = 0; i < this.sections.length; i++) {
                  this.courseIds.push({
                    'section': this.sections[i].section.name,
                    'course': this.sections[i].section.courseId
                  });
                }
                for (let i = 0; i < this.courseIds.length; i++) {
                  (this.courseService.findCourseById(this.courseIds[i].course)
                    .then((course) => {
                      this.coursesEnrolled.push(course);
                    }));
                }
              })
        })
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
        //this.role =user.role;
        this.email=user.email;
        this.address =user.address;
        //this.dateOfBirth =user.dateOfBirth;
        this.sectionService.findEnrolledSectionsForStudent()
          .then(sections => {
            this.sections = sections;
            for (let i = 0; i < this.sections.length; i++) {
              this.courseIds.push({
                'section': this.sections[i].section.name,
                'course': this.sections[i].section.courseId
              });
            }
            for (let i = 0; i < this.courseIds.length; i++) {
              (this.courseService.findCourseById(this.courseIds[i].course)
                .then((course) => {
                  this.coursesEnrolled.push(course);
                }));
            }
          })
        }
      } );
  }


}
