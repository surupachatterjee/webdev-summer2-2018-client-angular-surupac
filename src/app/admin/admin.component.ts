import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private sectionService:SectionServiceClient) { }

  courses = [];
  courseID='';
  selectedCourse = {};
  selectedSection={};
  sectionName='';
  seats='';
  sectionId='';
  sections=[];

  selectSection(section){
    this.selectedSection = section;
  }

  deleteSection(section){
    console.log(section._id);
    this.sectionService
      .deleteSection(section._id)
      .then(() =>{
        this.sectionService.findAllSectionsForCourse(this.courseID)
          .then(sections => this.sections = sections)
      });
  }

  editSection(section){
    this.sectionId = section._id;
    this.sectionName = section.name;
    this.seats = section.seats;
  }

  updateSection(sectionName,seats){
    console.log("Update : " + sectionName + " : " + seats + ": " + this.sectionId);
    this.sectionService
      .updateSection(sectionName,seats,this.sectionId)
      .then(() =>{
        this.sectionService.findAllSectionsForCourse(this.courseID)
          .then(sections => this.sections = sections)
      });
  }

  selectCourse(course) {
    this.courseID = course.id;
    this.sectionService
      .findAllSectionsForCourse(this.courseID)
      .then(sections => this.sections = sections)
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      });

  }

  createSection(sectionName,seats){
    this.sectionService
      .createSection(this.courseID,sectionName,seats)
      .then(() =>{
        this.sectionService.findAllSectionsForCourse(this.courseID)
          .then(sections => this.sections = sections)
      });


  }

}
