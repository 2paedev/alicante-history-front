import { Component } from '@angular/core';
// import { FCM } from '@ionic-native/fcm/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar // private fcm: FCM
  ) {
    this.initializeApp();
  }

  // public ionViewDidEnter() {
  // subscribe to a topic
  // this.fcm.subscribeToTopic('Deals');

  // get FCM token
  // this.fcm.getToken().then(token => {
  //   console.log(token);
  // });

  // ionic push notification example
  // this.fcm.onNotification().subscribe(data => {
  //   console.log(data);
  //   if (data.wasTapped) {
  //     console.log('Received in background');
  //   } else {
  //     console.log('Received in foreground');
  //   }
  // });

  // refresh the FCM token
  // this.fcm.onTokenRefresh().subscribe(token => {
  //   console.log(token);
  // });

  // unsubscribe from a topic
  // this.fcm.unsubscribeFromTopic('offers');
  // }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
