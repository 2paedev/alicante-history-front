import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';
import { ModalController, PopoverController } from '@ionic/angular';
import { CustomPost, User } from '@models/index';
import { StorageService, UserService } from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { ModalControllerMock } from '../../mocks/ionic-services.mocks';
import { SharedModule } from '../../shared.module';
import { SettingsModalComponent } from './settings-modal.component';

const STORAGE_SERVICE_MOCK = {
  getStorageValue(): Promise<string> {
    return Promise.resolve('aFakeModeColor');
  },
  // eslint-disable-next-line no-empty-function
  setReadMode(): void {},
  // eslint-disable-next-line no-empty-function
  setStorageValue(): void {},
};

const router = {
  navigate: jasmine.createSpy('navigate'),
  events: of({}),
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

describe('SettingsModalComponent', () => {
  let shallow: Shallow<SettingsModalComponent>;

  beforeEach((): void => {
    shallow = new Shallow(SettingsModalComponent, SharedModule)
      .provide(
        UserService,
        ModalController,
        StorageService,
        Router,
        PopoverController
      )
      .mock(UserService, USER_SERVICE_MOCK)
      .mock(StorageService, STORAGE_SERVICE_MOCK)
      .mock(ModalController, ModalControllerMock)
      .mock(PopoverController, ModalControllerMock)
      .mock(Router, router);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should render the title', async (): Promise<void> => {
    const { find } = await shallow.render();
    const title = find('.privacy-policy ion-label');
    expect(title.nativeElement.innerText).toEqual('Política de privacidad');
  });

  it('should show the privacy policy when click icon and is in closed state and default state', async (): Promise<
    void
  > => {
    const { find, fixture } = await shallow.render();
    fixture.detectChanges();
    const text = find('.privacy-policy ion-button');
    expect(text).toHaveFoundOne();
  });

  it('should hide the privacy policy when click icon and is in opened state ', async (): Promise<
    void
  > => {
    const { find, fixture } = await shallow.render();
    fixture.detectChanges();
    const iconCollapse = find('.privacy-policy ion-icon');
    iconCollapse[1].nativeElement.click();
    fixture.detectChanges();
    const text = find('.privacy-policy ion-button');
    expect(text).not.toHaveFoundOne();
  });

  it('should open the privacy policy popover when click icon info', async (): Promise<
    void
  > => {
    const { find, fixture, get } = await shallow.render();
    fixture.detectChanges();
    const popoverController = get(PopoverController);
    const iconCollapse = find('.privacy-policy ion-icon');
    iconCollapse[0].nativeElement.click();
    expect(popoverController.create).toHaveBeenCalled();
  });

  it('should go to privacy page when click in button', async (): Promise<
    void
  > => {
    const { find } = await shallow.render();
    const buttonPrivacy = find('.privacy-policy ion-button');
    buttonPrivacy.nativeElement.click();
    expect(router.navigate).toHaveBeenCalledWith([ROUTE.PRIVACY_POLICY]);
  });
});
