import { PopoverController } from '@ionic/angular';
import { CustomPost, User } from '@models/index';
import { StorageService, UserService } from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { TextFormattedComponent } from './text-formatted.component';

const STORAGE_SERVICE_MOCK = {
  getIsMailSended(): boolean {
    return true;
  },
  getReadModeColor(): string {
    return 'aFakeModeColor';
  },
  getReadModeSize(): string {
    return 'aFakeModeSize';
  },
  setReadMode(color: string, size: string): void {},
  setIsMailSended(value: boolean): void {},
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
  setEmailUser(params: any): Observable<CustomPost> {
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
