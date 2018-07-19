import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FriendPage} from '../friend/friend';

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
    if(event.direction === 2) {
      this.navCtrl.push(FriendPage);
    }
  }

}
