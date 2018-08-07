import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  courseId;
  sectionName='';
  seats='';
  sections =[];
  constructor(private route:ActivatedRoute,
              private service:SectionServiceClient) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']) );
  }

  loadSections(courseId){
    this.courseId = courseId;
    this.service.findAllSectionsForCourse(courseId)
      .then(sections => this.sections =sections);
  }
  ngOnInit() {
  }

}
