import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { VibrationPage, GeolocationPage, PhotoViewerPage, ShakePage, CameraPage, BarcodePage, DMotionPage, LNotfsPage } from '../pages/pages';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LNotfsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Vibration', component: VibrationPage },
      { title: 'Geolocation', component: GeolocationPage },
      { title: 'PhotoViewer', component: PhotoViewerPage },
      { title: 'Shake', component: ShakePage },
      { title: 'Camera', component: CameraPage },
      { title: 'Barcode', component: BarcodePage },
      { title: 'Device Motion', component: DMotionPage },
      { title: 'Local Notification', component: LNotfsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
