import { ModalController, PopoverController } from '@ionic/angular';
import { CustomPost, User } from '@models/index';
import { StorageService, UserService } from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { ModalControllerMock } from '../../mocks/ionic-services.mocks';
import { SharedModule } from '../../shared.module';
import { BibliographyModalComponent } from '../bibliography-modal/bibliography-modal.component';
import { TextFormattedComponent } from './text-formatted.component';

const STORAGE_SERVICE_MOCK = {
  getStorageValue(): Promise<string> {
    return Promise.resolve('aFakeModeColor');
  },
  // eslint-disable-next-line no-empty-function
  setReadMode(): void {},
  // eslint-disable-next-line no-empty-function
  setStorageValue(): void {},
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

const bibliographyModalOptions = {
  component: BibliographyModalComponent,
  cssClass: 'bibliography-modal',
  componentProps: {},
};

describe('TextFormattedComponent', () => {
  let shallow: Shallow<TextFormattedComponent>;

  beforeEach((): void => {
    shallow = new Shallow(TextFormattedComponent, SharedModule)
      .provide(UserService, PopoverController, StorageService)
      .mock(ModalController, ModalControllerMock)
      .mock(UserService, USER_SERVICE_MOCK)
      .mock(StorageService, STORAGE_SERVICE_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  xit('should open bibliography modal when clickin on icon', async (): Promise<
    void
  > => {
    const { get, find, fixture } = await shallow.render();
    fixture.detectChanges();
    const modalController = get(ModalController);
    find('.bibliography').nativeElement.click();
    expect(modalController.create).toHaveBeenCalledWith(
      bibliographyModalOptions
    );
  });
});
