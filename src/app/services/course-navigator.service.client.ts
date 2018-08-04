import {getResponseURL} from "@angular/http/src/http_utils";

export  class CourseNavigatorServiceClient {

  findAllCourses() {
   return fetch("http://localhost:8080/api/course")
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch("http://localhost:8080/api/course/" + courseId + "/module")
      .then(response => response.json());
  }


  findAllLessonsForModule(courseId, moduleId) {
    return fetch("http://localhost:8080/api/course/" + courseId + "/module/" + moduleId + "/lesson")
      .then(response => response.json());

  }

  findAllTopicsForLesson(courseId, moduleId, lessonId){
    return fetch("http://localhost:8080/api/course/" + courseId + "/module/"
      + moduleId + "/lesson/" + lessonId + "/topic")
      .then(response => response.json());
  }

}