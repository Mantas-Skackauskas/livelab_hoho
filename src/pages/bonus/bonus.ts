import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the BonusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var FullScreen:any

@IonicPage()
@Component({
  selector: 'page-bonus',
  templateUrl: 'bonus.html',
})
export class BonusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,private photoViewer: PhotoViewer
    ,private file: File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonusPage');
  }

  onViewImg(img, title){
    console.log(this.file.applicationDirectory , img);
    this.photoViewer.show(this.file.applicationDirectory + img, title, {share: true});
  }

  swipe(event) {
    if(event.direction === 8) {
      //this.navCtrl.push(HomePage);
      this.navCtrl.popToRoot()
    }
  }

}
