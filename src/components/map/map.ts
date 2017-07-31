import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

//Template Pages
import { HelpMapModalPage } from './../../pages/help-map-modal/help-map-modal';

@Component({ 
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  constructor(public modalCtrl: ModalController) {}

  public toggleModal(estateName, estateUf) {
    this.modalCtrl.create(HelpMapModalPage, {estateName: estateName, estateUf: estateUf}).present();
  }

}
