import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';

@Component({
  templateUrl: 'barcode.page.html'
})
export class BarcodePage {
    results: any;
    scantext = "Barkodu okut";
    resettext = "Sıfırla";

    constructor() { }
  
    scanBC() {
        BarcodeScanner.scan().then((barcodeData) => {
            this.results = barcodeData;
        }, (err) => {
            // An error occurred
        });
    }

    reset() {
        this.results = null;
    }

    lookup() {
        // http://stackoverflow.com/questions/36234957/internal-navigation-rejected-allow-navigation-not-set-in-cordova-on-ios
        // window.open is manipulated on service.worker.js, please see https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/
        window.open(`http://www.upcindex.com/${this.results.text}`, '_system');
    }
}
