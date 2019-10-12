import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from '@constants/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public constructor(private readonly http: HttpClient) {}

  getAllData(): Observable<any> {
    const url = API_ROUTE.ARTICLES.ALL;
    return this.http.get(url);
  }

  getDetail(id: string): Observable<any> {
    const url = API_ROUTE.ARTICLES.DETAIL(id);
    return this.http.get(url);
  }
}
