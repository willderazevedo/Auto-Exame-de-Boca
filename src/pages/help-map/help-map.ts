import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-help-map',
  templateUrl: 'help-map.html',
})
export class HelpMapPage {

  childColor = this.navParams.get('childColor');

  constructor(public navParams: NavParams) {}

}
