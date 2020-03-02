import { ModalController } from '@ionic/angular';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { ModalControllerMock } from '../../testing/mocks/ionic-services.mocks';
import { BasicTextModalComponent } from './basic-text-modal.component';

const bindWithoutImage = {
  title: 'Título de ejemplo',
  contentText: 'Esto es un texto fake para los test.',
};

const bind = {
  title: 'Título de ejemplo',
  contentText: 'Esto es un texto fake para los test.',
  image: 'http://afakeurl.com',
};

describe('BasicTextModalComponent', () => {
  let shallow: Shallow<BasicTextModalComponent>;

  beforeEach((): void => {
    shallow = new Shallow(BasicTextModalComponent, SharedModule).mock(
      ModalController,
      ModalControllerMock
    );
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render({ bind });
    expect(element).toBeTruthy();
  });

  it('should dismiss on pressing close icon', async (): Promise<void> => {
    const { find, get } = await shallow.render({ bind });
    const modalController = get(ModalController);
    const closeIcon = find('.modal__close');
    closeIcon.nativeElement.click();
    expect(modalController.dismiss).toHaveBeenCalledTimes(1);
  });

  it('should render the title', async (): Promise<void> => {
    const { find } = await shallow.render({ bind });
    const nameElement = find('.basic-text__header--title');
    expect(nameElement.nativeElement.innerText).toEqual('Título de ejemplo');
  });

  it('should render the content text', async (): Promise<void> => {
    const { find } = await shallow.render({ bind });
    const descriptionElement = find('.basic-text__content--text');
    expect(descriptionElement.nativeElement.innerText).toEqual(
      'Esto es un texto fake para los test.'
    );
  });

  it('should render an image if exists', async (): Promise<void> => {
    const { find } = await shallow.render({ bind });
    const image = find('.basic-text__header--avatar');
    expect(image).toHaveFoundOne();
  });

  it('should render an image if not exists', async (): Promise<void> => {
    const { find } = await shallow.render({ bind: bindWithoutImage });
    const image = find('.basic-text__header--avatar');
    expect(image).toHaveFound(0);
  });
});
