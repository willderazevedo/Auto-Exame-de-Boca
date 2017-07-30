import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Pages
import { HomePage } from '../pages/home/home';

//Animated Splash Screen
import { AnimatedSplashScreen } from './../pages/animated-splash-screen/animated-splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
  modalCtrl: ModalController) {
    platform.ready().then(() => {
      let animatedSplash = modalCtrl.create(AnimatedSplashScreen);

      statusBar.backgroundColorByHexString('#ff6535');
      animatedSplash.present();
    });
  }
}

