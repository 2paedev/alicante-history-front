import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ERRORS, ROUTE, STORAGE_KEY } from '@constants/index';
import { Article, Tag } from '@models/index';
import {
  ArticlesService,
  HelpersService,
  StorageService,
  ToastService,
} from '@services/index';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-article-image',
  templateUrl: './article-image.component.html',
  styleUrls: ['./article-image.component.scss'],
})
export class ArticleImageComponent implements OnInit, OnDestroy {
  @Input() public showReadIcon = true;
  @Input() public image: string;
  @Input() public title: string;
  @Input() public tags: Tag[];
  @Input() public data: Article;

  public isAddedInMyList: boolean;
  public isLiked: boolean;
  public imageUrl;

  public myListSubscription: Subscription;
  public myLikedListSubscription: Subscription;

  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
    private readonly articlesService: ArticlesService,
    private readonly helper: HelpersService,
    private readonly toastService: ToastService
  ) {
    this.myLikedListSubscription = this.storageService.myLikedList$
      .pipe(filter((data: any): boolean => !!data))
      .subscribe(value => {
        const myLikedListJson = JSON.parse(value);
        this.isLiked = myLikedListJson.some(
          (articleId: number) => articleId === this.data.id
        );
      });
    this.myListSubscription = this.storageService.myList$
      .pipe(filter((data: any): boolean => !!data))
      .subscribe(value => {
        const myListJson = JSON.parse(value);
        this.isAddedInMyList = myListJson.some(
          (article: Article) => article.id === this.data.id
        );
      });
  }

  public ngOnInit(): void {
    this.getDataForComponent();
  }

  private getDataForComponent(): void {
    this.imageUrl = this.helper.getImageUrl(this.image);
    this.storageService.getStorageValue(STORAGE_KEY.MY_LIST).then(value => {
      this.storageService.updateMyList(value);
    });
    this.storageService
      .getStorageValue(STORAGE_KEY.MY_LIKED_LIST)
      .then(value => {
        this.storageService.updateMyLikedList(value);
      });
  }

  public addToMyList(): void {
    this.isAddedInMyList = true;
    this.storageService.addItemInList(this.data, STORAGE_KEY.MY_LIST);
  }

  public removeToMyList(): void {
    this.isAddedInMyList = false;
    this.storageService.removeItemInMyList(this.data.id, STORAGE_KEY.MY_LIST);
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
        this.storageService.removeItemInMyLikedList(
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

  public ngOnDestroy(): void {
    this.myListSubscription.unsubscribe();
    this.myLikedListSubscription.unsubscribe();
  }
}
