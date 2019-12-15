import { Injectable } from '@angular/core';
import { ADD_MOBS, ERRORS } from '@constants/index';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdMobService {
  public constructor(private readonly adMobFree: AdMobFree) {}

  public pushBanner(): void {
    const config = this.getBannerConfig();
    this.adMobFree.banner.config(config);
    this.adMobFree.banner
      .prepare()
      .then(() => {
        this.adMobFree.banner.show();
      })
      .catch(() => {
        throw new Error(ERRORS.MESSAGES.AD_MOBS);
      });
  }

  private getBannerConfig(): any {
    return environment.production ? ADD_MOBS.BANNER : ADD_MOBS.BANNER_TEST;
  }

  public pushInterstitial(): void {
    const config = this.getInterstitialConfig();
    this.adMobFree.interstitial.config(config);
    this.adMobFree.interstitial
      .prepare()
      .then(() => {
        this.adMobFree.interstitial.show();
      })
      .catch(() => {
        throw new Error(ERRORS.MESSAGES.AD_MOBS);
      });
  }

  private getInterstitialConfig(): any {
    return environment.production
      ? ADD_MOBS.INTERSTITIAL
      : ADD_MOBS.INTERSTITIAL_TEST;
  }
}
