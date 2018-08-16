import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  disableFlag = false;
  @Input() question;
  @Input() flag;
  constructor() { }

  selected = choice =>{
    this.question.multipleChoiceAnswer = this.question.choices.indexOf(choice);
  }

  ngOnInit() {
    if (this.flag){
      this.disableFlag=true;
      let localMCA = this.question.multipleChoiceAnswer;
      this.question = this.question.question;
      this.question.multipleChoiceAnswer = localMCA;
    }
  }

}
