import { PopoverController } from '@ionic/angular';
import { CustomPost, User } from '@models/index';
import { StorageService, UserService } from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { TextFormattedComponent } from './text-formatted.component';

const STORAGE_SERVICE_MOCK = {
  getIsMailSent(): Promise<boolean> {
    return Promise.resolve(true);
  },
  getReadModeColor(): Promise<string> {
    return Promise.resolve('aFakeModeColor');
  },
  getReadModeSize(): Promise<string> {
    return Promise.resolve('aFakeModeSize');
  },
  // eslint-disable-next-line no-empty-function
  setReadMode(): void {},
  // eslint-disable-next-line no-empty-function
  setIsMailSent(): void {},
};

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

describe('TextFormattedComponent', () => {
  let shallow: Shallow<TextFormattedComponent>;

  beforeEach((): void => {
    shallow = new Shallow(TextFormattedComponent, SharedModule)
      .provide(UserService, PopoverController, StorageService)
      .mock(UserService, USER_SERVICE_MOCK)
      .mock(StorageService, STORAGE_SERVICE_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
