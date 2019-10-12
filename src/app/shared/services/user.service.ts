import { Injectable } from '@angular/core';
import { ReadMode, User } from '@models/index';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  public $user = new Subject<User>();

  sendUser(readMode: ReadMode) {
    this.$user.next({ readMode });
  }

  clear() {
    this.$user.next();
  }

  getUser(): Observable<User> {
    return this.$user.asObservable();
  }
}
