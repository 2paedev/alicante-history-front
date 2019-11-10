import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '@models/index';
import { ArticlesService } from '@services/index';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-all-articles',
  templateUrl: 'all-articles.page.html',
  styleUrls: ['all-articles.page.scss']
})
export class AllArticlesPage implements OnInit, OnDestroy {
  public allArticlesData: Article[] = [];

  private articlesSubscription: Subscription;

  constructor(private readonly articlesService: ArticlesService) {
    this.articlesSubscription = this.articlesService.articles$
      .pipe(filter((articles): boolean => !!articles))
      .subscribe((articles): void => {
        this.allArticlesData = articles;
      });
  }

  public ngOnInit(): void {
    if (Array.isArray(this.allArticlesData) && this.allArticlesData.length === 0) {
      this.getAllArticles();
    }
  }

  public ngOnDestroy(): void {
    this.articlesSubscription.unsubscribe();
  }

  public refreshPage(event: any): void {
    setTimeout(() => {
      this.getAllArticles();
      event.target.complete();
    }, 2000);
  }

  private getAllArticles(): void {
    this.articlesService.getAll().subscribe(
      (response: Article[]) => {
        this.allArticlesData = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
