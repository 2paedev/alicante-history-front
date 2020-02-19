import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ERRORS, ROUTE, STORAGE_KEY } from '@constants/index';
import { Article, Tag } from '@models/index';
import {
  ArticlesService,
  HelpersService,
  StorageService,
  ToastService,
} from '@services/index';

@Component({
  selector: 'app-article-image',
  templateUrl: './article-image.component.html',
  styleUrls: ['./article-image.component.scss'],
})
export class ArticleImageComponent implements OnInit {
  @Input() public showReadIcon = true;
  @Input() public image: string;
  @Input() public title: string;
  @Input() public tags: Tag[];
  @Input() public data: Article;

  public isAddedInMyList: boolean;
  public isLiked: boolean;
  public imageUrl;

  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
    private readonly articlesService: ArticlesService,
    private readonly helper: HelpersService,
    private readonly toastService: ToastService
  ) {}

  public ngOnInit(): void {
    this.assembleDataCard();
  }

  public addToMyList(): void {
    this.isAddedInMyList = true;
    this.storageService.addItemInList(this.data, STORAGE_KEY.MY_LIST);
  }

  public removeToMyList(): void {
    this.isAddedInMyList = false;
    this.storageService.removeItemInList(this.data.id, STORAGE_KEY.MY_LIST);
  }

  public goToArticle(article: Article): void {
    this.router.navigate([ROUTE.ARTICLE_DETAIL(article.id)]);
  }

  public addLike(): void {
    this.articlesService.setLike(this.data.id).subscribe(
      () => {
        this.isLiked = true;
        this.storageService.addItemInList(
          this.data.id,
          STORAGE_KEY.MY_LIKED_LIST
        );
      },
      () => {
        this.toastService.presentToastError(ERRORS.MESSAGES.UPDATE);
        throw new Error(ERRORS.MESSAGES.UPDATE);
      }
    );
  }

  public removeLike(): void {
    this.articlesService.removeLike(this.data.id).subscribe(
      () => {
        this.isLiked = false;
        this.storageService.removeItemInList(
          this.data.id,
          STORAGE_KEY.MY_LIKED_LIST
        );
      },
      () => {
        this.toastService.presentToastError(ERRORS.MESSAGES.UPDATE);
        throw new Error(ERRORS.MESSAGES.UPDATE);
      }
    );
  }

  public getColorClass(): string {
    return this.isLiked ? 'fav' : '';
  }

  private assembleDataCard(): void {
    this.imageUrl = this.helper.getImageUrl(this.image);
    this.storageService
      .getStorageValue(STORAGE_KEY.MY_LIKED_LIST)
      .then(value => {
        if (value !== null) {
          const valueAsJson = JSON.parse(value);
          this.isLiked = valueAsJson.some(
            (articleId: number) => articleId === this.data.id
          );
        }
      });
    this.storageService.getStorageValue(STORAGE_KEY.MY_LIST).then(value => {
      if (value !== null) {
        const valueAsJson = JSON.parse(value);
        this.isAddedInMyList = valueAsJson.some(
          (article: Article) => article.id === this.data.id
        );
      }
    });
  }
}
