import { Component } from '@angular/core';
import { ArticleResume, ArticleResumeData, HomeResume } from '@models/index';
import { HomeDataService } from '@services/index';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public homePageData: HomeResume;
  public lastArticleData: ArticleResumeData;
  public lists: ArticleResume[];

  constructor(private homeDataService: HomeDataService) {
    this.homeDataService.getAllData().subscribe(
      (response: HomeResume) => {
        this.homePageData = response;
        this.setLastArticle();
        this.lists = this.homePageData.list;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private setLastArticle() {
    const lastArticlesResume: ArticleResume[] = this.homePageData.list.filter(
      elem => elem.id === 'HR1'
    );
    const LAST_TEN_ARTICLES_LENGTH = lastArticlesResume[0].data.length;
    this.lastArticleData = lastArticlesResume[0].data[LAST_TEN_ARTICLES_LENGTH - 1];
  }
}
