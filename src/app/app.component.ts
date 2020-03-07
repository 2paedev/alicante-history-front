import { Component } from '@angular/core';
// import { FCM } from '@ionic-native/fcm/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { User } from '@models/index';
import { FCMService, UserService } from '@services/index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly platform: Platform,
    private readonly splashScreen: SplashScreen,
    private readonly statusBar: StatusBar,
    private readonly fcmService: FCMService,
    private readonly user: UserService
  ) {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.user.getUser().subscribe((userData: User) => {
        if (userData.notificationsActivated) {
          this.fcmService.saveToken();
        }
      });
    });
  }
}
