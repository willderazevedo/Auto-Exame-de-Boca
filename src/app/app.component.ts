import { Component } from '@angular/core';
import { Platform, ModalController, App, AlertController } from 'ionic-angular';
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
  modalCtrl: ModalController, public app: App,
  public alertCtrl: AlertController) {
    platform.ready().then(() => {
      let animatedSplash = modalCtrl.create(AnimatedSplashScreen);

      statusBar.backgroundColorByHexString('#ff6535');
      this._backButtonHardwareAction(platform);
      animatedSplash.present();
    });
  }

  /**
   * Método responsável por registrar botão de voltar do próprio celular
   * @param   {Platform}      platform Biblioteca nativa responsável por conter as informações da plataforma atual
   * @returns {void|boolean}
   */
  private _backButtonHardwareAction(platform) {
    platform.registerBackButtonAction(() => {
      let modalPortal   = this.app._appRoot._modalPortal.getActive();
      let overlayPortal = this.app._appRoot._overlayPortal.getActive();

      if(overlayPortal) {
        overlayPortal.dismiss();

        return false;
      }

      if(modalPortal) {
        modalPortal.dismiss();

        return false;
      }

      if(this.app.getActiveNav().canGoBack()) {
        this.app.getRootNav().pop();

        return false;
      }

      this.alertCtrl.create({
        message: "Você deseja mesmo sair?",
        buttons: [
          {
            text: "Não"
          },
          {
            text: "Sim",
            handler: () => {
              platform.exitApp();
            }
          }
        ]
      }).present();
    });
  }
}

