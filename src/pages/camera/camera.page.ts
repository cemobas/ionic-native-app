import { Component } from '@angular/core';
import { Camera, CameraOptions } from 'ionic-native';

@Component({
  templateUrl: 'camera.page.html'
})
export class CameraPage {

    imgSrc: any;
    buttext = "Şipşak";

    constructor() { }
  
    takePhoto() {
        let options : CameraOptions = {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.PNG,
            targetHeight: 500,
            targetWidth: 500,
            saveToPhotoAlbum: false
        };
        Camera.getPicture(options).then((imageData) => {
                this.imgSrc = imageData;
            }, (err) => {
                console.log('Cekemedi.');
            });
    }
}
