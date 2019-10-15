import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';
import { ArticleResumeData } from '@models/index';
import { StorageService } from '@services/index';
import { CustomPost } from './../../models/custom-post';
import { ArticlesService } from './../../services/articles.service';

@Component({
  selector: 'app-article-image',
  templateUrl: './article-image.component.html',
  styleUrls: ['./article-image.component.scss']
})
export class ArticleImageComponent implements OnInit {
  @Input() public data: ArticleResumeData;
  @Input() public showReadIcon = true;

  public title: string;
  public tags: string[];
  public isAddedInMyList: boolean;
  public isLiked: boolean;

  private id: string;

  constructor(
    private readonly router: Router,
    private readonly storageService: StorageService,
    private readonly articlesService: ArticlesService
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
    this.router.navigate([ROUTE.ARTICLE_DETAIL(this.id)]);
  }

  public addLike(): void {
    this.articlesService.setLike(this.id).subscribe(
      (response: CustomPost) => {
        this.isLiked = true;
        this.storageService.setItemInMyLikedList(this.id);
      },
      (error: CustomPost) => {
        console.log(error.error.message);
      }
    );
  }

  public removeLike(): void {
    this.articlesService.removeLike(this.id).subscribe(
      (response: CustomPost) => {
        this.isLiked = false;
        this.storageService.removeItemInMyLikedList(this.id);
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
    this.id = this.data.id;
    this.title = this.data.title;
    this.tags = this.data.tags;

    const likeList = this.storageService.getMyLikedList();
    if (likeList !== null) {
      this.isLiked = likeList.includes(this.id);
    }

    const myList = this.storageService.getMyList();
    if (myList !== null) {
      this.isAddedInMyList = myList.includes(this.data);
    }
  }
}
