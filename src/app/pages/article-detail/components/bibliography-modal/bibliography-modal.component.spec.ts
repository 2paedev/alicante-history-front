import { ModalController } from '@ionic/angular';
import { Shallow } from 'shallow-render';
import { ModalControllerMock } from '../../../../shared/mocks/ionic-services.mocks';
import { SharedModule } from '../../../../shared/shared.module';
import { BibliographyModalComponent } from './bibliography-modal.component';

describe('BibliographyModalComponent', () => {
  let shallow: Shallow<BibliographyModalComponent>;

  beforeEach((): void => {
    shallow = new Shallow(BibliographyModalComponent, SharedModule)
      .provide(ModalController)
      .mock(ModalController, ModalControllerMock);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
