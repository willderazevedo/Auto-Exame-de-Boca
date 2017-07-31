import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { AboutAppPage } from '../pages/about-app/about-app';
import { OrientationsPage } from './../pages/orientations/orientations';
import { DoctorAreaPage } from './../pages/doctor-area/doctor-area';
import { AboutUsPage } from './../pages/about-us/about-us';
import { HelpMapPage } from './../pages/help-map/help-map';

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
    DoctorAreaPage,
    AboutUsPage,
    HelpMapPage,
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
    DoctorAreaPage,
    AboutUsPage,
    HelpMapPage,
    AnimatedSplashScreen
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
