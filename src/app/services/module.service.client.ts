export class ModuleServiceClient {

  /*MODULE_URL= "http://localhost:8080/api/course/COURSE_ID/module";*/
  MODULE_URL = "https://course-management-stc.herokuapp.com/api/course/COURSE_ID/module";
  findAllModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace("COURSE_ID", courseId))
      .then(response => response.json());
  }

}
