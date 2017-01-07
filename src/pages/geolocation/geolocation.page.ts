import { Component } from '@angular/core';
import { Geolocation, Toast } from 'ionic-native';

@Component({
  templateUrl: 'geolocation.page.html'
})
export class GeolocationPage {
  location: { lat: number, lng: number };

  constructor() {}

  getGeolocation() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.location = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
    });
  }

  toastMsg() {
    let toastMsg = "lat: " + this.location.lat + "/n lng: " + this.location.lng;
    Toast.show(toastMsg, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      }
    );
  }
}
