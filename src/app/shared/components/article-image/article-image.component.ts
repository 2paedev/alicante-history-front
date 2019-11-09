import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';
import { Article, CustomPost, Tag } from '@models/index';
import { ArticlesService, HelpersService, StorageService } from '@services/index';

@Component({
  selector: 'app-article-image',
  templateUrl: './article-image.component.html',
  styleUrls: ['./article-image.component.scss']
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
    private readonly helper: HelpersService
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

  public goToArticle(): void {
    this.router.navigate([ROUTE.ARTICLE_DETAIL(this.data.id)]);
  }

  public addLike(): void {
    this.articlesService.setLike(this.data.id).subscribe(
      (response: CustomPost) => {
        this.isLiked = true;
        this.storageService.setItemInMyLikedList(this.data.id);
      },
      (error: CustomPost) => {
        console.log(error.error.message);
      }
    );
  }

  public removeLike(): void {
    this.articlesService.removeLike(this.data.id).subscribe(
      (response: CustomPost) => {
        this.isLiked = false;
        this.storageService.removeItemInMyLikedList(this.data.id);
      },
      (error: CustomPost) => {
        console.log(error.error.message);
      }
    );
  }

  public getColorClass(): string {
    return this.isLiked ? 'fav' : '';
  }

  private assembleDataCard(): void {
    this.imageUrl = this.helper.getImageUrl(this.image);
    const likeList = this.storageService.getMyLikedList();
    if (likeList !== null) {
      this.isLiked = likeList.includes(this.data.id);
    }
    const myList = this.storageService.getMyList();
    if (myList !== null) {
      this.isAddedInMyList = myList.includes(this.data);
    }
  }
}
