import { Component } from '@angular/core';

//Global Providers
import { GlobalService } from './../../providers/global-service';

//Pages
import { AboutAppPage } from './../about-app/about-app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  aboutApp = AboutAppPage;

  constructor(public global: GlobalService) {}

}
