import { Injectable } from '@angular/core';
import { ADD_MOBS } from '@constants/index';
import { AdMobFree } from '@ionic-native/admob-free/ngx';

@Injectable({
  providedIn: 'root',
})
export class AdMobService {
  public constructor(private readonly adMobFree: AdMobFree) {}

  public pushBannerTest(): void {
    this.adMobFree.banner.config(ADD_MOBS.BANNER_TEST);
    this.adMobFree.banner
      .prepare()
      .then(() => {
        this.adMobFree.banner.show();
      })
      .catch(() => {
        throw new Error('Problema al cargar admob');
      });
  }

  public pushInterstitialTest(): void {
    const isVideo = Math.random() >= 0.5;
    let config = ADD_MOBS.INTERSTITIAL_TEST;
    if (isVideo) {
      config = ADD_MOBS.INTERSTITIAL_VIDEO_TEST;
    }
    this.adMobFree.interstitial.config(config);
    this.adMobFree.interstitial
      .prepare()
      .then(() => {
        this.adMobFree.interstitial.show();
      })
      .catch(() => {
        throw new Error('Problema al cargar admob');
      });
  }
}
