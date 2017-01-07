import { Component } from '@angular/core';
import { Shake } from 'ionic-native';

@Component({
  templateUrl: 'shake.page.html'
})
export class ShakePage {
    mesaj: number = 0;
    watch: any;

  constructor() {
  }

  ionViewDidEnter() { 
    this.watch = Shake.startWatch().subscribe(() => {
        this.mesaj++;
    });
  }

  ionViewDidLeave() {
      this.watch.unsubscribe();
  }

}
