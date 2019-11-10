import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from '@constants/index';
import { CustomPost } from '@models/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  public constructor(private readonly http: HttpClient) {}

  public getAllData(): Observable<any> {
    const url = API_ROUTE.ARTICLES.RESUME;
    return this.http.get(url);
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
