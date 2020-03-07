import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from '@constants/index';
import { ReadMode, User } from '@models/index';
import { Observable, Subject } from 'rxjs';
import { CustomPost } from '../models/custom-post';

@Injectable({ providedIn: 'root' })
export class UserService {
  public $user = new Subject<User>();

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    }),
  };

  constructor(private readonly http: HttpClient) {}

  public sendUser(readMode: ReadMode): void {
    this.$user.next({ readMode });
  }

  public clear(): void {
    this.$user.next();
  }

  public getUser(): Observable<User> {
    return this.$user.asObservable();
  }

  public setEmailUser(params: any): Observable<CustomPost> {
    return this.http.post<any>(
      `${API_ROUTE.USER.MAIL_SUBSCRIPTION}`,
      params,
      this.httpOptions
    );
  }
}
