export class LessonServiceClient {

  /*MODULE_URL = "http://localhost:8080/api/course/COURSE_ID/module/MODULE_ID/lesson";*/
  MODULE_URL = "https://course-management-stc.herokuapp.com/api/course/COURSE_ID/module/MODULE_ID/lesson";

  findAllLessonForModule(courseId, moduleId) {
    return fetch(this.MODULE_URL.replace("COURSE_ID", courseId)
      .replace("MODULE_ID", moduleId))
      .then(response => response.json());
  }
}
