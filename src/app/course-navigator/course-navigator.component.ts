import {Component, OnInit} from "@angular/core";
import {CourseNavigatorServiceClient} from "../services/course-navigator.service.client";

@Component({
  selector: "app-course-navigator",
  templateUrl: "./course-navigator.component.html",
  styleUrls: ["./course-navigator.component.css"]
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient) {
  }

  courses = [];
  topics = [];
  courseID;
  selectedCourse = {};
  selectedModule = {};
  selectedLesson = {};
  moduleID;
  modules = [];
  lessons = [];


  selectCourse(course) {
    alert(course.id);
    this.selectedCourse = course;
    this.courseID = course.id;
    this.service.findAllModulesForCourse(course.id)
      .then(modules => {
        this.modules = modules;
      });
  }

  selectModule(module) {
    alert(module.id);
    this.selectedModule = module;
    this.moduleID = module.id;
    this.service.findAllLessonsForModule(this.courseID, module.id)
      .then(lessons => {
        this.lessons = lessons;
      });
  }

  selectLesson(lesson) {
    alert(lesson.id);
    this.selectedLesson = lesson;
    this.service.findAllTopicsForLesson(this.courseID, this.moduleID, lesson.id)
      .then(topics => {
        this.topics = topics;
      });

  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      });
  }

}
