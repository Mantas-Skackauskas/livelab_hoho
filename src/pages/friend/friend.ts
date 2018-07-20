import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendPage');
  }


  swipe(event) {
    if(event.direction === 4) {
      //this.navCtrl.push(HomePage);
      this.navCtrl.popToRoot()
    }
  }

  
  presentAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'John seems to be having pain for the last 3 weeks',
      title: 'Reach him out!',
      buttons: ['Okay']
    });
    alert.present();
  }

}
