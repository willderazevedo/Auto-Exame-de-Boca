import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  childColor = this.navParams.get('childColor');
  tutorialOn = true;

  constructor(public navParams: NavParams) {}

}
