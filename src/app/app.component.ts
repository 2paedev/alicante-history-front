import { Component } from '@angular/core';
import { STORAGE_KEY } from '@constants/index';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { FCMService, StorageService } from '@services/index';

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
    private readonly storage: StorageService
  ) {
    this.initializeApp();
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage
        .getStorageValue(STORAGE_KEY.NOTIFICATIONS)
        .then((isChecked: boolean) => {
          if (!isChecked) {
            this.fcmService.saveToken();
          }
        });
    });
  }
}
