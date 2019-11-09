import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@models/index';
import { ArticlesService } from '@services/index';

@Component({
  selector: 'app-article-detail',
  templateUrl: 'article-detail.page.html',
  styleUrls: ['article-detail.page.scss']
})
export class ArticleDetailPage implements OnInit {
  public articleData: Article;

  private id: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly articlesService: ArticlesService
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      this.id = data.params.id;
      this.getArticleData();
    });
  }

  public getArticleImage(): string {
    return this.articleData.images[0].url;
  }

  private getArticleData(): void {
    this.articlesService.getDetail(this.id).subscribe(
      (response: Article) => {
        this.articleData = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
