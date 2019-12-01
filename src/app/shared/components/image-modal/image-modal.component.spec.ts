import { ModalController, NavParams } from '@ionic/angular';
import { HelpersService } from '@services/index';
import { Shallow } from 'shallow-render';
import {
  ModalControllerMock,
  NavParamsMock,
} from '../../mocks/ionic-services.mocks';
import { SharedModule } from '../../shared.module';
import { ImageModalComponent } from './image-modal.component';

const HELPERS_SERVICE_MOCK = {
  getImageUrl(): string {
    return 'aFakeUrl';
  },
};

describe('ImageModalComponent', () => {
  let shallow: Shallow<ImageModalComponent>;

  beforeEach((): void => {
    shallow = new Shallow(ImageModalComponent, SharedModule)
      .provide(HelpersService, ModalController, NavParams)
      .mock(HelpersService, HELPERS_SERVICE_MOCK)
      .mock(NavParams, NavParamsMock)
      .mock(ModalController, ModalControllerMock);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
