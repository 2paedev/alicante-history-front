import { Component } from '@angular/core';
import { ERRORS } from '@constants/index';
import { Platform } from '@ionic/angular';
import { Article, ArticleResume } from '@models/index';
import { AdMobService, ArticlesService, ToastService } from '@services/index';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public homePageData: ArticleResume[] = [];
  public lastArticleData: Article;
  public lastFiveArticlesData: Article[] = [];

  public backButtonSubscription: Subscription;
  public lastFiveSubscription: Subscription;
  public resumeSubscription: Subscription;

  constructor(
    private articlesService: ArticlesService,
    private toastService: ToastService,
    private adMobService: AdMobService,
    private platform: Platform
  ) {}

  public ionViewDidEnter(): void {
    this.adMobService.pushBanner();
    this.initSubscribers();
    if (this.lastFiveArticlesData.length === 0) {
      this.articlesService.getLastFive().subscribe();
    }

    if (this.homePageData.length === 0) {
      this.articlesService.getResumeData().subscribe();
    }
  }

  private initSubscribers(): void {
    this.lastFiveSubscription = this.articlesService.lastFive$
      .pipe(filter((lastFive): boolean => !!lastFive))
      .subscribe(
        (lastFive): void => {
          this.lastFiveArticlesData = lastFive;
          [this.lastArticleData] = lastFive;
        },
        () => {
          this.toastService.presentToastError(ERRORS.MESSAGES.ALL_ARTICLES);
          throw new Error(ERRORS.MESSAGES.ALL_ARTICLES);
        }
      );
    this.resumeSubscription = this.articlesService.resume$
      .pipe(filter((resume): boolean => !!resume))
      .subscribe(
        (resume): void => {
          this.homePageData = resume;
        },
        () => {
          this.toastService.presentToastError(ERRORS.MESSAGES.ALL_ARTICLES);
          throw new Error(ERRORS.MESSAGES.ALL_ARTICLES);
        }
      );
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      /* eslint-disable dot-notation */
      navigator['app'].exitApp();
    });
  }

  public refreshPage(event: any): void {
    setTimeout(() => {
      this.articlesService.getLastFive().subscribe();
      this.articlesService.getResumeData().subscribe();
      event.target.complete();
    }, 2000);
  }

  public getLastArticleImage(): string {
    return this.lastArticleData.images[0].url;
  }

  public ionViewDidLeave(): void {
    this.backButtonSubscription.unsubscribe();
    this.lastFiveSubscription.unsubscribe();
    this.resumeSubscription.unsubscribe();
  }
}
