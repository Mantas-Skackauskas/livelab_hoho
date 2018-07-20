import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoadingController, ToastController, AlertController} from 'ionic-angular';
import {FriendPage} from '../friend/friend';
import { MorePage } from '../more/more';
import { BonusPage } from '../bonus/bonus';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  first:boolean = true;
  source:string = "assets/img/tick.png"
  p1:string="assets/img/i16.png";
  p2:string="assets/img/i11.png";
  p3:string="assets/img/i18.png";
  p4:string="assets/img/i12.png";
  p5:string="assets/img/icons3.png";
  p6:string="assets/img/i14.png";
  p7:string="assets/img/i15.png";
  p8:string="assets/img/i17.png";

  constructor(public navCtrl: NavController, public loadCtrl: LoadingController, public toastCtrl: ToastController,private photoViewer: PhotoViewer
    ,private file: File,public platform: Platform, public alertCtrl: AlertController) {

  }


  ionViewDidLoad() {

    
    this.platform.ready().then(() => { 
        if(this.first==true){
          this.first=false;
          this.onViewImg('www/assets/img/sc3.png','')
        }
    });
  }

  showProfilePage() {
    this.presentLoadingDefault();

  }

  swipe(event) {
    if(event.direction == 2) {
      this.navCtrl.push(FriendPage);
    }else if (event.direction == 4){
      this.navCtrl.push(MorePage);
    }else if(event.direction == 24)
      this.navCtrl.push(BonusPage);

  }


  setImg(string){
      if(string == 1){
        this.p1 = this.source;
      }else if(string == 2){
        this.p2 = this.source;
      }
      else if(string == 3){
        this.p3 = this.source;
      }
      else if(string == 4){
        this.p4 = this.source;
      }
      else if(string == 5){
        this.p5 = this.source;
      }
      else if(string == 6){
        this.p6 = this.source;
      }
      else if(string == 7){
        this.p7 = this.source;
      }
      else if(string == 8){
        this.p8 = this.source;
      }
  }



  presentLoadingDefault() {
    let loading = this.toastCtrl.create({
      message: 'Thanks! +150 Points',
      duration: 800,
      position: 'top'
    });
    

    this.navCtrl.push(FriendPage);

    loading.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    loading.present();
  }
  
  onViewImg(img, title){
    console.log(this.file.applicationDirectory , img);
    this.photoViewer.show(this.file.applicationDirectory + img, title, {share: true});
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'You\'ve been having light back pain for the last 2 months. Contact your GP for more information!',
      title: 'Daily contribution! +50 Points',
      buttons: ['Continue']
    });
    alert.present();
  }
}
