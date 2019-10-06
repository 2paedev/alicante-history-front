import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';
import { ArticleResumeData } from '@models/index';

@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.scss']
})
export class LastArticleComponent implements OnInit {
  @Input() public data: ArticleResumeData;

  public title: string;
  public tags: string[];

  private id: string;

  constructor(private readonly router: Router) {}

  public ngOnInit() {
    this.assembleDataCard();
  }

  public goToArticle() {
    this.router.navigate([ROUTE.ARTICLE_DETAIL(this.id)]);
  }

  assembleDataCard() {
    this.id = this.data.id;
    this.title = this.data.title;
    this.tags = this.data.tags;
  }
}
