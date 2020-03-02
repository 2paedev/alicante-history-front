import { ModalController } from '@ionic/angular';
import { HelpersService } from '@services/index';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { ModalControllerMock } from '../../testing/mocks/ionic-services.mocks';
import { GalleryPopoverComponent } from './gallery-popover.component';

const HELPERS_SERVICE_MOCK = {
  getImageUrl(): string {
    return 'aFakeUrl';
  },
};

describe('GalleryPopoverComponent', () => {
  let shallow: Shallow<GalleryPopoverComponent>;

  beforeEach((): void => {
    shallow = new Shallow(GalleryPopoverComponent, SharedModule)
      .provide(HelpersService, ModalController)
      .mock(HelpersService, HELPERS_SERVICE_MOCK)
      .mock(ModalController, ModalControllerMock);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
