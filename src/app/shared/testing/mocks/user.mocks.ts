import { CustomPost, User } from '@models/index';
import { Observable, of } from 'rxjs';

export const USER_SERVICE_MOCK = {
  getUser(): Observable<User> {
    return of({
      readMode: {
        color: 'aColor',
        size: 'aSize',
      },
      notificationActivated: true,
    });
  },
  setEmailUser(): Observable<CustomPost> {
    return of({
      message: 'aMessage',
      error: null,
    });
  },
};
