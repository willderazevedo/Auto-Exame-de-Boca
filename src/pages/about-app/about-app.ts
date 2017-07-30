import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about-app',
  templateUrl: 'about-app.html',
})
export class AboutAppPage {

  childColor = this.navParams.get('childColor');

  constructor(public navParams: NavParams) {}

}
