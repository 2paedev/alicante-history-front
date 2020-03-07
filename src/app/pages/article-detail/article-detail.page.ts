import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicTextModalComponent } from '@components/index';
import { ERRORS } from '@constants/index';
import { ModalController } from '@ionic/angular';
import { Article, Author, BasicText } from '@models/index';
import { AdMobService, ArticlesService, ToastService } from '@services/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-detail',
  templateUrl: 'article-detail.page.html',
  styleUrls: ['article-detail.page.scss'],
})
export class ArticleDetailPage {
  public articleData: Article;

  private articleSubscription: Subscription;

  private id: number;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly articlesService: ArticlesService,
    private readonly toastService: ToastService,
    private readonly adMobService: AdMobService,
    private readonly modalController: ModalController
  ) {}

  public ionViewDidEnter(): void {
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
    this.articleSubscription = this.articlesService
      .getDetail(this.id)
      .subscribe(
        (response: Article) => {
          this.articleData = response;
        },
        () => {
          this.toastService.presentToastError(ERRORS.MESSAGES.ONE_ARTICLE);
          throw new Error(ERRORS.MESSAGES.ONE_ARTICLE);
        }
      );
  }

  public async presentAuthorModal(): Promise<void> {
    const modalOptions = {
      component: BasicTextModalComponent,
      cssClass: 'author-modal',
      componentProps: this.getAuthorModalProps(this.articleData.author),
    };

    const modal = await this.modalController.create(modalOptions);
    await modal.present();
  }

  private getAuthorModalProps(data: Author): BasicText {
    return {
      title: `${data.name} ${data.surname}`,
      contentText: data.description,
      image: data.image,
    };
  }

  public ionViewDidLeave(): void {
    this.articleSubscription.unsubscribe();
  }
}
