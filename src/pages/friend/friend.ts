import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { AlertController } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the FriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html',
})
export class FriendPage {


  loadProgress:number = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,private photoViewer: PhotoViewer
    ,private file: File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendPage');
  }


  swipe(event) {
    if(event.direction == 4) {
      //this.navCtrl.push(HomePage);
      this.navCtrl.popToRoot()
    }
  }

  
  presentAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'John seems to be having tooth pain for the last 3 weeks',
      title: 'Reach him out!',
      buttons: ['Okay']
    });
    alert.present();
  }

  onViewImg(img, title){
    console.log(this.file.applicationDirectory , img);
    this.photoViewer.show(this.file.applicationDirectory + img, title, {share: true});
  }

}
