import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from '@constants/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  private readonly url = API_ROUTE.HOME_DATA;

  public constructor(private readonly http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http.get(this.url);
  }
}
