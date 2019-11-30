import { ModalController } from '@ionic/angular';
import { CustomPost, User } from '@models/index';
import { StorageService, UserService } from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { ModalControllerMock } from '../../mocks/ionic-services.mocks';
import { SharedModule } from '../../shared.module';
import { SettingsModalComponent } from './settings-modal.component';

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

describe('SettingsModalComponent', () => {
  let shallow: Shallow<SettingsModalComponent>;

  beforeEach((): void => {
    shallow = new Shallow(SettingsModalComponent, SharedModule)
      .provide(UserService, ModalController, StorageService)
      .mock(UserService, USER_SERVICE_MOCK)
      .mock(StorageService, STORAGE_SERVICE_MOCK)
      .mock(ModalController, ModalControllerMock);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
