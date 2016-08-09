import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar, CameraPreview} from 'ionic-native';
import {HomePage} from './pages/home/home';

// declare var cordova;

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      let cameraOptions = {
        tapPhoto: false,
        previewDrag: false,
        toBack: true,
        x: 0,
        y: 0,
        width: platform.width(),
        height: platform.height(),
        alpha: 1,
        camera: 'front',
      };

      var o = CameraPreview.startCamera(cameraOptions);
      console.log('started camera', o);

    });
  }
}

ionicBootstrap(MyApp);
