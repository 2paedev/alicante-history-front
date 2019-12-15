import { CustomPost, User } from '@models/index';
import { UserService } from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { InfoPopoverComponent } from './info-popover.component';

const USER_SERVICE_MOCK = {
  getUser(): Observable<User> {
    return of({
      readMode: {
        color: 'aColor',
        size: 'aSize',
      },
    });
  },
  setEmailUser(): Observable<CustomPost> {
    return of({
      message: 'aMessage',
      error: null,
    });
  },
};

describe('InfoPopoverComponent', () => {
  let shallow: Shallow<InfoPopoverComponent>;

  beforeEach((): void => {
    shallow = new Shallow(InfoPopoverComponent, SharedModule)
      .provide(UserService)
      .mock(UserService, USER_SERVICE_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
