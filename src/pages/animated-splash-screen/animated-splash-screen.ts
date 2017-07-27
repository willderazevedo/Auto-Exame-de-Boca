import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-animated-splash-screen',
  templateUrl: 'animated-splash-screen.html',
})
export class AnimatedSplashScreen {

  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) {}

  ionViewDidEnter(){
    this.splashScreen.hide();

    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);
  }
}
