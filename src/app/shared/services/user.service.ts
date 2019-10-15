import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReadMode, User } from '@models/index';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  public $user = new Subject<User>();

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
}
