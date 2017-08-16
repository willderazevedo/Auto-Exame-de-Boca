import { Component } from '@angular/core';

//Global Providers
import { GlobalService } from './../../providers/global-service';

//Pages
import { AboutAppPage } from './../about-app/about-app';
import { OrientationsPage } from './../orientations/orientations';
import { AboutCancerPage } from './../about-cancer/about-cancer';
import { AboutUsPage } from './../about-us/about-us';
import { HelpMapPage } from './../help-map/help-map';
import { ExamPage } from './../exam/exam';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  aboutApp     = AboutAppPage;
  orientations = OrientationsPage;
  aboutCancer  = AboutCancerPage;
  aboutUs      = AboutUsPage;
  helpMap      = HelpMapPage;
  exam         = ExamPage;

  constructor(public global: GlobalService) {}

}
