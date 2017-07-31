import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-help-map-modal',
  templateUrl: 'help-map-modal.html',
})
export class HelpMapModalPage {

  estateName = this.navParams.get('estateName');
  estateUf   = this.navParams.get('estateUf');

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {}

  public dismissModal() {
    this.viewCtrl.dismiss();
  }
}
