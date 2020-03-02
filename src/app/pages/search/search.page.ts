import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ERRORS } from '@constants/index';
import { ArticlePage } from '@models/index';
import { ArticlesService, ToastService } from '@services/index';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  public searchData: ArticlePage;
  public searchControl: FormControl;
  public searching = false;

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
        },
        () => {
          this.toastService.presentToastError(ERRORS.MESSAGES.ALL_ARTICLES);
          throw new Error(ERRORS.MESSAGES.ALL_ARTICLES);
        }
      );
  }

  public ionViewDidEnter(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.searching = false;
        this.setFilteredItems(search);
      });
    if (!this.searchData) {
      this.articlesService.getAll().subscribe();
    }
  }

  public onSearchInput(): void {
    this.searching = true;
  }

  public setFilteredItems(searchTerm: string): void {
    this.searchData.results = this.articlesService.filterArticles(
      searchTerm,
      this.searchData.results
    );
  }

  public ionViewDidLeave(): void {
    this.articlesSubscription.unsubscribe();
  }
}
