import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { VibrationPage, GeolocationPage, ShakePage, PhotoViewerPage, CameraPage, BarcodePage, DMotionPage, LNotfsPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    VibrationPage,
    GeolocationPage,
    ShakePage,
    PhotoViewerPage,
    CameraPage,
    BarcodePage,
    DMotionPage,
    LNotfsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VibrationPage,
    GeolocationPage,
    ShakePage,
    PhotoViewerPage,
    CameraPage,
    BarcodePage,
    DMotionPage,
    LNotfsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
