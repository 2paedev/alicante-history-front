import { Component, OnDestroy, OnInit } from '@angular/core';
import { ERRORS } from '@constants/index';
import { Article, ArticleResume } from '@models/index';
import { AdMobService, ArticlesService, ToastService } from '@services/index';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  public homePageData: ArticleResume[] = [];
  public lastArticleData: Article;
  public lastFiveArticlesData: Article[] = [];

  private articlesSubscription: Subscription;

  constructor(
    private articlesService: ArticlesService,
    private toastService: ToastService,
    private adMobService: AdMobService
  ) {
    this.adMobService.pushBanner();
    this.articlesService.lastFive$
      .pipe(filter((lastFive): boolean => !!lastFive))
      .subscribe((lastFive): void => {
        this.lastFiveArticlesData = lastFive;
        [this.lastArticleData] = lastFive;
      });
    this.articlesService.resume$
      .pipe(filter((resume): boolean => !!resume))
      .subscribe((resume): void => {
        this.homePageData = resume;
      });
  }

  public ngOnInit(): void {
    if (
      Array.isArray(this.lastFiveArticlesData) &&
      this.lastFiveArticlesData.length === 0
    ) {
      this.getLastFiveArticles();
    }

    if (Array.isArray(this.homePageData) && this.homePageData.length === 0) {
      this.getResumeData();
    }
  }

  public ngOnDestroy(): void {
    this.articlesSubscription.unsubscribe();
  }

  public refreshPage(event: any): void {
    setTimeout(() => {
      this.getLastFiveArticles();
      this.getResumeData();
      event.target.complete();
    }, 2000);
  }

  private getLastFiveArticles(): void {
    this.articlesSubscription = this.articlesService.getLastFive().subscribe(
      (response: Article[]) => {
        this.lastFiveArticlesData = response;
        [this.lastArticleData] = response;
      },
      () => {
        this.toastService.presentToastError(ERRORS.MESSAGES.ALL_ARTICLES);
        throw new Error(ERRORS.MESSAGES.ALL_ARTICLES);
      }
    );
  }

  private getResumeData(): void {
    this.articlesService.getResumeData().subscribe(
      (response: ArticleResume[]) => {
        this.homePageData = response;
      },
      () => {
        this.toastService.presentToastError(ERRORS.MESSAGES.ALL_ARTICLES);
        throw new Error(ERRORS.MESSAGES.ALL_ARTICLES);
      }
    );
  }

  public getLastArticleImage(): string {
    return this.lastArticleData.images[0].url;
  }
}
