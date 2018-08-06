import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  courseId;
  sectionName='';
  seats='';
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']) );
  }

  loadSections(courseId){
    this.courseId = courseId;
  }
  ngOnInit() {
  }

}
