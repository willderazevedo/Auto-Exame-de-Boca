import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#42afdd');
      this._hideSplashScreen(splashScreen)
    });
  }

  /**
   * Fix da tela branca na tela de load
   * @param {SplashScreen} splashScreen Biblioteca nativa responsável pelo controle da tela de splash
   */
  private _hideSplashScreen(splashScreen) {
    setTimeout(() => {
      splashScreen.hide();
    }, 100);
  }
}

