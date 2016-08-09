import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {CameraPreview} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private platform: Platform) {

  }

  refresh(){
    window['location'].reload();
  }
}
