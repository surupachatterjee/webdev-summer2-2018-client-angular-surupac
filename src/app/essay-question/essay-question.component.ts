import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-essay-question',
  templateUrl: './essay-question.component.html',
  styleUrls: ['./essay-question.component.css']
})
export class EssayQuestionComponent implements OnInit {

  disableFlag = false;
  @Input() question;
  @Input() flag;
  constructor() { }

  ngOnInit() {
    if (this.flag)
      this.disableFlag=true;
  }

}
