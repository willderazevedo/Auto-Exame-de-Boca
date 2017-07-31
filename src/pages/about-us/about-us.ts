import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  childColor = this.navParams.get('childColor');

  constructor(public navParams: NavParams) {}

}
