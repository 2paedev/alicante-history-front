import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE, STORAGE_KEY } from '@constants/index';
import { Article } from '@models/index';
import { HelpersService, StorageService } from '@services/index';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.scss'],
})
export class AvatarCardComponent implements OnInit {
  @Input() public data: Article;
  @Input() public showRemove: boolean;

  public imageUrl: string;

  constructor(
    private readonly router: Router,
    private readonly helper: HelpersService,
    private readonly storageService: StorageService
  ) {}

  public ngOnInit(): void {
    this.imageUrl = this.helper.getImageUrl(this.data.images[0].url);
  }

  public goToArticle(article: Article): void {
    this.router.navigate([ROUTE.ARTICLE_DETAIL(article.id)]);
  }

  public removeArticle(): void {
    this.storageService.removeItemInMyList(this.data.id, STORAGE_KEY.MY_LIST);
  }
}
