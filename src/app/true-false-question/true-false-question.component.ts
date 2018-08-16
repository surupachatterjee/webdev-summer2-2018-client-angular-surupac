import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  disableFlag = false;
  @Input() question;
  @Input() flag;
  constructor() { }

  selected = trueOrFalse =>{
    this.question.trueFalseAnswer = trueOrFalse
  }

  ngOnInit() {
    if (this.flag)
      this.disableFlag=true;
  }

}
