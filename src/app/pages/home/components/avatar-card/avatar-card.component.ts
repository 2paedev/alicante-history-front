import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';
import { ArticleResumeData } from '@models/index';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.scss']
})
export class AvatarCardComponent {
  @Input() public data: ArticleResumeData;

  constructor(private readonly router: Router) {}

  public goToArticle(article: ArticleResumeData) {
    this.router.navigate([ROUTE.ARTICLE_DETAIL(article.id)]);
  }
}
