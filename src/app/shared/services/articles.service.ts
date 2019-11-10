import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from '@constants/index';
import { Article, ArticleResume, CustomPost } from '@models/index';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public readonly articlesSubject = new BehaviorSubject<Article[]>(null);
  public readonly articles$ = this.articlesSubject.asObservable();

  public readonly resumeSubject = new BehaviorSubject<ArticleResume[]>(null);
  public readonly resume$ = this.resumeSubject.asObservable();

  public readonly lastFiveSubject = new BehaviorSubject<Article[]>(null);
  public readonly lastFive$ = this.lastFiveSubject.asObservable();

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  public constructor(private readonly http: HttpClient) {
    // this.articlesSubject.next([]);
    // this.resumeSubject.next([]);
  }

  public updateArticles(articles?: Article[]): void {
    const currentArticles = this.articlesSubject.value;
    this.articlesSubject.next(articles || currentArticles);
  }

  public updateLastFive(lastFive?: Article[]): void {
    const currentLastFive = this.lastFiveSubject.value;
    this.lastFiveSubject.next(lastFive || currentLastFive);
  }

  public updateResume(resume?: ArticleResume[]): void {
    const currentResume = this.resumeSubject.value;
    this.resumeSubject.next(resume || currentResume);
  }

  public getResumeData(): Observable<any> {
    const url = API_ROUTE.ARTICLES.RESUME;
    return this.http.get(url).pipe(
      tap((resume: ArticleResume[]): void => {
        this.updateResume(resume);
      })
    );
  }

  public getLastFive(): Observable<any> {
    const url = API_ROUTE.ARTICLES.LAST_FIVE;
    return this.http.get(url).pipe(
      tap((lastFive: Article[]): void => {
        this.updateLastFive(lastFive);
      })
    );
  }

  public getAll(): Observable<any> {
    const url = API_ROUTE.ARTICLES.ALL;
    return this.http.get(url).pipe(
      tap((articles: Article[]): void => {
        this.updateArticles(articles);
      })
    );
  }

  public getDetail(id: string): Observable<any> {
    const url = API_ROUTE.ARTICLES.DETAIL(id);
    return this.http.get(url);
  }

  public setLike(id: string): Observable<CustomPost> {
    return this.http.put<any>(`${API_ROUTE.ARTICLES.LIKES(id)}`, this.httpOptions);
  }

  public removeLike(id: string): Observable<CustomPost> {
    return this.http.delete<any>(`${API_ROUTE.ARTICLES.LIKES(id)}`);
  }
}
