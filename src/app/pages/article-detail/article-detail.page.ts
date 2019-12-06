import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ERRORS } from '@constants/index';
import { Article } from '@models/index';
import { AdMobService, ArticlesService, ToastService } from '@services/index';

@Component({
  selector: 'app-article-detail',
  templateUrl: 'article-detail.page.html',
  styleUrls: ['article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {
  public articleData: Article;

  private id: number;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly articlesService: ArticlesService,
    private readonly toastService: ToastService,
    private readonly adMobService: AdMobService
  ) {}

  public ngOnInit(): void {
    this.adMobService.pushInterstitial();
    [this.id] = this.activatedRoute.snapshot.params.id;
    this.getArticleData();
  }

  public getArticleImage(): string {
    if (!this.articleData) {
      throw new Error(ERRORS.MESSAGES.IMAGE);
    }
    return this.articleData.images[0].url;
  }

  public getArticleData(): void {
    this.articlesService.getDetail(this.id).subscribe(
      (response: Article) => {
        this.articleData = response;
      },
      () => {
        this.toastService.presentToastError(ERRORS.MESSAGES.ONE_ARTICLE);
        throw new Error(ERRORS.MESSAGES.ONE_ARTICLE);
      }
    );
  }
}
