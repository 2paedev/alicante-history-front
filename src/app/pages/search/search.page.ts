import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ERRORS } from '@constants/index';
import { Article, ArticlePage } from '@models/index';
import { ArticlesService, ToastService } from '@services/index';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  public searchData: ArticlePage;
  public initialArticles: Article[];
  public searchControl: FormControl;

  public articlesSubscription: Subscription;

  constructor(
    private readonly articlesService: ArticlesService,
    private readonly toastService: ToastService
  ) {
    this.searchControl = new FormControl();
    this.articlesSubscription = this.articlesService.articles$
      .pipe(filter((articles: ArticlePage): boolean => !!articles))
      .subscribe(
        (articles: ArticlePage): void => {
          this.searchData = articles;
          this.initialArticles = articles.results;
        },
        () => {
          this.toastService.presentToastError(ERRORS.MESSAGES.ALL_ARTICLES);
          throw new Error(ERRORS.MESSAGES.ALL_ARTICLES);
        }
      );
  }

  public ionViewDidEnter(): void {
    this.searchControl.valueChanges.subscribe(search => {
      this.setFilteredItems(search);
    });
    if (!this.searchData) {
      this.articlesService.getAll().subscribe();
    }
  }

  public setFilteredItems(searchTerm: string): void {
    this.searchData.results = this.articlesService.filterArticles(
      searchTerm,
      this.initialArticles
    );
  }

  public ionViewDidLeave(): void {
    this.articlesSubscription.unsubscribe();
  }
}
