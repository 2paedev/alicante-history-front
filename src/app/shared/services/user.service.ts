import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from '@constants/index';
import { ReadMode, User } from '@models/index';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  public $user = new Subject<User>();

  constructor(private readonly http: HttpClient) {}

  sendUser(readMode: ReadMode) {
    this.$user.next({ readMode });
  }

  clear() {
    this.$user.next();
  }

  getUser(): Observable<User> {
    return this.$user.asObservable();
  }

  getMyListData(): Observable<any> {
    const url = API_ROUTE.MY_LIST.ALL;
    return this.http.get(url);
  }
}
