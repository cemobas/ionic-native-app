import { Component } from '@angular/core';
import { AccelerationData, AccelerometerOptions, DeviceMotion } from 'ionic-native';

@Component({
  templateUrl: 'dmotion.page.html'
})
export class DMotionPage {
    data: any;
    subscription: any;

    constructor() { }
  
    startWatching() {
        var options: AccelerometerOptions = {
            frequency: 500
        };

        this.subscription = DeviceMotion.watchAcceleration(options).subscribe((acceleration: AccelerationData) => {
            this.data = acceleration;
        });
    }

    stopWatching() {
        this.subscription.unsubscribe();
    }
}
