import { Component, OnInit } from '@angular/core';
import { Article, ArticleResume } from '@models/index';
import { ArticlesService } from '@services/index';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public homePageData: ArticleResume[];
  public lastArticleData: Article;

  constructor(private articlesService: ArticlesService) {}

  public ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.articlesService.getAllData().subscribe(
      (response: ArticleResume[]) => {
        this.homePageData = response;
        this.lastArticleData = this.homePageData[0].articles[0];
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  public getLastArticleImage(): string {
    return this.lastArticleData.images[0].url;
  }
}
