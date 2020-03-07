import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';
import { ModalController, PopoverController } from '@ionic/angular';
import { FCMService, StorageService, UserService } from '@services/index';
import {
  ModalControllerMock,
  RouterMock,
  STORAGE_SERVICE_MOCK,
  USER_SERVICE_MOCK,
} from '@testing/index';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { FCM_SERVICE_MOCK } from '../../testing/mocks/fcm.mocks';
import {} from '../../testing/mocks/ionic-services.mocks';
import { SettingsModalComponent } from './settings-modal.component';

function setupSettings(): { shallow: Shallow<SettingsModalComponent> } {
  const shallow = new Shallow(SettingsModalComponent, SharedModule)
    .provide(
      Router,
      ModalController,
      UserService,
      StorageService,
      FCMService,
      PopoverController
    )
    .mock(Router, { ...RouterMock })
    .mock(ModalController, { ...ModalControllerMock })
    .mock(UserService, { ...USER_SERVICE_MOCK })
    .mock(StorageService, { ...STORAGE_SERVICE_MOCK })
    .mock(PopoverController, { ...ModalControllerMock })
    .mock(FCMService, { ...FCM_SERVICE_MOCK });
  return { shallow };
}

describe('SettingsModalComponent', () => {
  it('should create', async (): Promise<void> => {
    const { shallow } = setupSettings();
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should render the title', async (): Promise<void> => {
    const { shallow } = setupSettings();
    const { find } = await shallow.render();
    const title = find('.privacy-policy ion-label');
    expect(title.nativeElement.innerText).toEqual('Política de privacidad');
  });

  it('should hide the privacy policy when click icon and is in opened state ', async (): Promise<
    void
  > => {
    const { shallow } = setupSettings();
    const { find, fixture } = await shallow.render();
    fixture.detectChanges();
    const iconCollapse = find('.privacy-policy .down');
    iconCollapse[0].nativeElement.click();
    fixture.detectChanges();
    const text = find('.privacy-policy ion-button');
    expect(text).toHaveFoundOne();
  });

  it('should open the read mode info popover when click icon info', async (): Promise<
    void
  > => {
    const { shallow } = setupSettings();
    const { find, fixture, get } = await shallow.render();
    fixture.detectChanges();
    const popoverController = get(PopoverController);
    const iconCollapse = find('.read-mode .info-icon');
    iconCollapse[0].nativeElement.click();
    expect(popoverController.create).toHaveBeenCalled();
  });

  it('should open the contact info popover when click icon info', async (): Promise<
    void
  > => {
    const { shallow } = setupSettings();
    const { find, fixture, get } = await shallow.render();
    fixture.detectChanges();
    const popoverController = get(PopoverController);
    const iconCollapse = find('.contact .info-icon');
    iconCollapse[0].nativeElement.click();
    expect(popoverController.create).toHaveBeenCalled();
  });

  // it('should open the notifications info popover when click icon info', async (): Promise<
  //   void
  // > => {
  //   const { shallow } = setupSettings();
  //   const { find, fixture, get } = await shallow.render();
  //   fixture.detectChanges();
  //   const popoverController = get(PopoverController);
  //   const iconCollapse = find('.notifications .info-icon');
  //   iconCollapse[0].nativeElement.click();
  //   expect(popoverController.create).toHaveBeenCalled();
  // });

  it('should open the privacy policy popover when click icon info', async (): Promise<
    void
  > => {
    const { shallow } = setupSettings();
    const { find, fixture, get } = await shallow.render();
    fixture.detectChanges();
    const popoverController = get(PopoverController);
    const iconCollapse = find('.privacy-policy .info-icon');
    iconCollapse[0].nativeElement.click();
    expect(popoverController.create).toHaveBeenCalled();
  });

  it('should go to privacy page when click in button', async (): Promise<
    void
  > => {
    const { shallow } = setupSettings();
    const { find, fixture, get } = await shallow.render();
    const router = get(Router);
    fixture.detectChanges();
    const iconCollapse = find('.privacy-policy .down');
    iconCollapse[0].nativeElement.click();
    fixture.detectChanges();
    const buttonPrivacy = find('.privacy-policy ion-button');
    buttonPrivacy.nativeElement.click();
    expect(router.navigate).toHaveBeenCalledWith([ROUTE.PRIVACY_POLICY]);
  });
});
