import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-orientations',
  templateUrl: 'orientations.html',
})
export class OrientationsPage {

  childColor = this.navParams.get('childColor');

  constructor(public navParams: NavParams) {}

}
