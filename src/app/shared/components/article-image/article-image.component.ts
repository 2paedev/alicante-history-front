import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ERRORS, ROUTE } from '@constants/index';
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
    this.storageService.setItemInMyList(this.data);
  }

  public removeToMyList(): void {
    this.isAddedInMyList = false;
    this.storageService.removeItemInMyList(this.data);
  }

  public goToArticle(article: Article): void {
    this.router.navigate([ROUTE.ARTICLE_DETAIL(article.id)]);
  }

  public addLike(): void {
    this.articlesService.setLike(this.data.id).subscribe(
      () => {
        this.isLiked = true;
        this.storageService.setItemInMyLikedList(this.data.id);
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
        this.storageService.removeItemInMyLikedList(this.data.id);
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
    this.storageService.getMyLikedList().then(value => {
      if (value !== null) {
        const valueAsJson = JSON.parse(value);
        this.isLiked = valueAsJson.includes(this.data.id);
      }
    });
    this.storageService.getMyList().then(value => {
      if (value !== null) {
        const valueAsJson = JSON.parse(value);
        this.isAddedInMyList = valueAsJson.includes(this.data);
      }
    });
  }
}
