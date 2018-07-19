import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }



  swipe(event) {
    if(event.direction === 2) {
      this.presentLoadingDefault();
    }
  }





  presentLoadingDefault() {
    let loading = this.toastCtrl.create({
      message: 'Thanks! +200 Points',
      duration: 800,
      position: 'top'
    });
    

    this.navCtrl.popToRoot();

    loading.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    loading.present();
  }

}
