import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-help-map-modal',
  templateUrl: 'help-map-modal.html',
})
export class HelpMapModalPage {

  estateName  = this.navParams.get('estateName');
  estateUf    = this.navParams.get('estateUf');
  ufHospitals = this.navParams.get('ufHospitals');
  auxVariable = this.navParams.get('ufHospitals');

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {}

  public filterCities(event) {
    let val = event.target.value;

    this.ufHospitals = this.auxVariable;
    if (val && val.trim() != '') {
      this.ufHospitals = this.ufHospitals.filter((item) => {
        return (item.city.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  public dismissModal() {
    this.viewCtrl.dismiss();
  }
}
