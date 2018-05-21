import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "LoginPage";
  pageSettings: Array<{ title: string, page: any }>;
  @ViewChild(Nav) nav: Nav;
  constructor(
    platform: Platform,
     statusBar: StatusBar,
     private menuCtrl: MenuController,
      splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.pageSettings = [
        { title: 'Give A Ride', page: 'GiveRidePage'},
      ];
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(pageSetting) {
    this.menuCtrl.close();
    if (pageSetting.page == 'HomePage'|| pageSetting.page == 'LoginPage') {
      this.nav.setRoot(pageSetting.page);
    }
    else
      this.nav.push(pageSetting.page);
  }
}

