import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FriendPage} from '../friend/friend';
import { MorePage } from '../more/more';
import { BonusPage } from '../bonus/bonus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showProfilePage() {
    this.navCtrl.push(FriendPage);
  }

  swipe(event) {
    if(event.direction == 2) {
      this.navCtrl.push(FriendPage);
    }else if (event.direction == 4){
      this.navCtrl.push(MorePage);
    }else if(event.direction == 24)
      this.navCtrl.push(BonusPage);

  }

}
