
export class SectionServiceClient{

  SECTION_URL ="http://localhost:3000/api/course/COURSEID/section";
  BASE_SECTION_URL = "http://localhost:3000/api/section";

  createSection(courseId,name,seats){
    const section={
      name:name,
      seats:seats,
      courseId:courseId
    };
    return fetch(this.SECTION_URL.replace('COURSEID',courseId),{
      method:'post',
      body: JSON.stringify(section),
      credentials:'include',
      headers:{
        'content-type':'application/json'
      }
    });
  }

  findAllSectionsForCourse(courseId){
    return fetch(this.SECTION_URL.replace('COURSEID',courseId))
      .then(response => response.json());
  }

  deleteSection(sectionId){
    return fetch(this.BASE_SECTION_URL +"/" + sectionId ,{
      method: 'delete',
      credentials: 'include',
    });
  }

  updateSection(sectionName,seats,sectionId){
    const section ={
      name:sectionName,
      seats:seats
    };
    return fetch(this.BASE_SECTION_URL +"/" + sectionId,{
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

}
