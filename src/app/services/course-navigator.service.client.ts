import {getResponseURL} from "@angular/http/src/http_utils";

export  class CourseNavigatorServiceClient {

  findAllCourses() {
   return fetch("https://course-management-stc.herokuapp.com/api/course")
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch("https://course-management-stc.herokuapp.com/api/course/" + courseId + "/module")
      .then(response => response.json());
  }


  findAllLessonsForModule(courseId, moduleId) {
    return fetch("https://course-management-stc.herokuapp.com/api/course/" + courseId + "/module/" + moduleId + "/lesson")
      .then(response => response.json());

  }

  findAllTopicsForLesson(courseId, moduleId, lessonId){
    return fetch("https://course-management-stc.herokuapp.com/api/course/" + courseId + "/module/"
      + moduleId + "/lesson/" + lessonId + "/topic")
      .then(response => response.json());
  }

}
