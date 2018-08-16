import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fill-blanks-question',
  templateUrl: './fill-blanks-question.component.html',
  styleUrls: ['./fill-blanks-question.component.css']
})
export class FillBlanksQuestionComponent implements OnInit {

  disableFlag = false;
  @Input() question;
  @Input() flag;
  constructor() { }

  ngOnInit() {
    if (this.flag) {
      this.disableFlag = true;
      let localFillBlanksAnswers = this.question.fillBlanksAnswers;
      this.question= this.question.question;
      this.question.fillBlanksAnswers=localFillBlanksAnswers;
    }
    else
      this.question.fillBlanksAnswers={};
  }

}
