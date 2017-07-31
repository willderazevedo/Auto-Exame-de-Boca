import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-doctor-area',
  templateUrl: 'doctor-area.html',
})
export class DoctorAreaPage {

  childColor = this.navParams.get('childColor');

  constructor(public navParams: NavParams) {}

}
