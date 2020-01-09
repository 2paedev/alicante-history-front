import { ModalController } from '@ionic/angular';
import { Shallow } from 'shallow-render';
import { ModalControllerMock } from '../../mocks/ionic-services.mocks';
import { SharedModule } from '../../shared.module';
import { AuthorModalComponent } from './author-modal.component';

const authorData = {
  name: 'Diego',
  surname: 'Martínez',
  image: 'http://afakeurl.com',
  description: 'Esto es un texto fake para los test.',
};

const bind = {
  data: authorData,
};

describe('AuthorModalComponent', () => {
  let shallow: Shallow<AuthorModalComponent>;

  beforeEach((): void => {
    shallow = new Shallow(AuthorModalComponent, SharedModule).mock(
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

  it('should render the author name', async (): Promise<void> => {
    const { find } = await shallow.render({ bind });
    const nameElement = find('.author__name');
    expect(nameElement.nativeElement.innerText).toEqual('Diego Martínez');
  });

  it('should render the author image', async (): Promise<void> => {
    const { find } = await shallow.render({ bind });
    const nameElement = find('.author__content--image');
    expect(nameElement).toHaveFoundOne();
  });

  it('should render the author description', async (): Promise<void> => {
    const { find } = await shallow.render({ bind });
    const descriptionElement = find('.author__content--description');
    expect(descriptionElement.nativeElement.innerText).toEqual(
      'Esto es un texto fake para los test.'
    );
  });
});
