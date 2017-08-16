import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about-cancer',
  templateUrl: 'about-cancer.html',
})
export class AboutCancerPage {

  childColor = this.navParams.get('childColor');

  constructor(public navParams: NavParams) {}

}
