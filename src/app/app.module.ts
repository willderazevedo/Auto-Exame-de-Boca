import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Other Plugins
import { Camera } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//Pages
import { HomePage } from '../pages/home/home';
import { AboutAppPage } from '../pages/about-app/about-app';
import { OrientationsPage } from './../pages/orientations/orientations';
import { AboutCancerPage } from './../pages/about-cancer/about-cancer';
import { AboutUsPage } from './../pages/about-us/about-us';
import { HelpMapPage } from './../pages/help-map/help-map';
import { ExamPage } from './../pages/exam/exam';

//Template Pages
import { HelpMapModalPage } from './../pages/help-map-modal/help-map-modal';

//Components
import { MapComponent } from './../components/map/map';

//Global Providers
import { GlobalService } from './../providers/global-service';

//Splash Screen Page
import { AnimatedSplashScreen } from './../pages/animated-splash-screen/animated-splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutAppPage,
    OrientationsPage,
    AboutCancerPage,
    AboutUsPage,
    HelpMapPage,
    HelpMapModalPage,
    ExamPage,
    AnimatedSplashScreen,
    MapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      pageTransition: 'ios-transition',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutAppPage,
    OrientationsPage,
    AboutCancerPage,
    AboutUsPage,
    HelpMapPage,
    HelpMapModalPage,
    ExamPage,
    AnimatedSplashScreen
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalService,
    Camera,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
