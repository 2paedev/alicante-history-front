import { ModalController } from '@ionic/angular';
import { Shallow } from 'shallow-render';
import { ModalControllerMock } from '../../mocks/ionic-services.mocks';
import { SharedModule } from '../../shared.module';
import { BibliographyModalComponent } from './bibliography-modal.component';

const bibliographyData = ['enlace 1', 'enlace 2'];

const bind = {
  data: bibliographyData,
};

describe('BibliographyModalComponent', () => {
  let shallow: Shallow<BibliographyModalComponent>;

  beforeEach((): void => {
    shallow = new Shallow(BibliographyModalComponent, SharedModule).mock(
      ModalController,
      ModalControllerMock
    );
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should dismiss on pressing close icon', async (): Promise<void> => {
    const { find, get } = await shallow.render({ bind });
    const modalController = get(ModalController);
    const closeIcon = find('.modal__close');
    closeIcon.nativeElement.click();
    expect(modalController.dismiss).toHaveBeenCalledTimes(1);
  });

  it('should render a list of bibliography resources', async (): Promise<
    void
  > => {
    const { find } = await shallow.render({ bind });
    const linkList = find('.bibliography__content--link');
    expect(linkList.length).toEqual(2);
  });
});
