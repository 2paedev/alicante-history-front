import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Article, ArticlePage } from '@models/index';
import { ArticlesService, ToastService } from '@services/index';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {
  public searchData: ArticlePage;
  public results: Article[];
  public searchControl: FormControl;
  public items: any;
  public searching = false;

  private articlesSubscription: Subscription;

  constructor(
    private readonly articlesService: ArticlesService,
    private readonly toastService: ToastService
  ) {
    this.searchControl = new FormControl();
    this.articlesSubscription = this.articlesService.articles$
      .pipe(filter((articles: ArticlePage): boolean => !!articles))
      .subscribe((articles: ArticlePage): void => {
        this.searchData = articles;
        this.results = this.searchData.results;
      });
  }

  public ngOnInit(): void {
    // this.setFilteredItems("");
    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.searching = false;
        this.setFilteredItems(search);
      });
    if (!this.searchData) {
      this.getAllArticles();
    }
  }

  public ngOnDestroy(): void {
    this.articlesSubscription.unsubscribe();
  }

  public onSearchInput(): void {
    this.searching = true;
  }

  public setFilteredItems(searchTerm: string): void {
    this.results = this.articlesService.filterArticles(
      searchTerm,
      this.searchData.results
    );
  }

  private getAllArticles(): void {
    this.articlesService.getAll().subscribe(
      (response: ArticlePage) => {
        this.searchData = response;
        this.results = this.searchData.results;
      },
      () => {
        this.toastService.presentToastError();
        throw new Error('No se han podido obtener los datos.');
      }
    );
  }
}
