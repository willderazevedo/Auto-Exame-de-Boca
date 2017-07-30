import { Injectable } from '@angular/core';
import { App } from 'ionic-angular';

@Injectable()
export class GlobalService {

  constructor(public app: App) {}

  public pageNavigation(page, params = {}, canGoBack = false) {

    if(canGoBack) {
      this.app.getActiveNav().push(page, params);

      return false;
    }

    this.app.getActiveNav().setRoot(page, params);
  }
  
}
