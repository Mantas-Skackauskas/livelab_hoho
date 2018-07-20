import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FriendPage } from '../pages/friend/friend';
import { MorePage } from '../pages/more/more';
import { BonusPage } from '../pages/bonus/bonus';
import { MePage } from '../pages/me/me';
import { DataPage } from '../pages/data/data';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { File } from '@ionic-native/file';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FriendPage,
    MorePage,
    BonusPage,
    MePage,
    DataPage,
    ProgressBarComponent
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FriendPage,
    MorePage,
    BonusPage,
    MePage,
    DataPage
    
  ],
  providers: [
    StatusBar,
    PhotoViewer,
    SplashScreen,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
