import { Component } from '@angular/core';

//Global Providers
import { GlobalService } from './../../providers/global-service';

//Pages
import { AboutAppPage } from './../about-app/about-app';
import { OrientationsPage } from './../orientations/orientations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  aboutApp     = AboutAppPage;
  orientations = OrientationsPage;

  constructor(public global: GlobalService) {}

}
