import { CustomPost } from '@models/index';
import { Observable, of } from 'rxjs';

export const FCM_SERVICE_MOCK = {
  // eslint-disable-next-line no-empty-function
  saveToken(): void {},
  removeNotificationSubscription(): Observable<CustomPost> {
    return of({
      message: 'aMessage',
      error: null,
    });
  },
};
