
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  courseId;
  sectionName='';
  seats='';
  username;
  loginVal = true;
  admin = false;
  userId;
  course = {};
  courseTitle='';
  sections =[];
  constructor(private route:ActivatedRoute,
              private router:Router,
              private service:SectionServiceClient,
              private courseService:CourseServiceClient,
              private userService :UserServiceClient) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']) );
  }

  loadSections(courseId){
    this.courseId = courseId;
    this.courseService.findCourseById(courseId)
      .then(course => {
        this.courseTitle = course.title;
        this.service.findAllSectionsForCourse(courseId)
          .then(sections => this.sections =sections);
      })

  }


  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  enrollStudent(section){
    console.log("inside enrolll" + this.loginVal);
    if(this.loginVal === true){
      this.service.findEnrollmentForStudent(this.userId,section._id)
        .then(enrollment => {
          if(section.seats === 0 ){
            alert("Seats are no longer Available");
          }else if(enrollment != null){
            alert("you are already enrolled for this section");
          }
          else{
            this.service.enrollStudentInSection(section._id)
              .then(() =>{
              this.router.navigate(['profile']);
              })
          }

        })
    }else{
      alert("Please Login to Enroll");
      this.router.navigate(['login']);
    }
  }



  ngOnInit() {
    this.userService.profile()
      .then(user => {
        this.username = user.username;
        this.userId = user._id;
        if(this.username === 'No session maintained'){
          this.loginVal = false;
        }
        if(this.username === 'admin'){
          this.admin = true;
        }
      }
      );
  }

}
