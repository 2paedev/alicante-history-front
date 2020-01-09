import { HelpersService } from '@services/index';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { AuthorAvatarComponent } from './author-avatar.component';

const HELPERS_SERVICE_MOCK = {
  getImageUrl(): string {
    return 'aFakeUrl';
  },
};

describe('AuthorAvatarComponent', () => {
  let shallow: Shallow<AuthorAvatarComponent>;

  beforeEach((): void => {
    shallow = new Shallow(AuthorAvatarComponent, SharedModule)
      .provide(HelpersService)
      .mock(HelpersService, HELPERS_SERVICE_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should exists a ion-avatar', async (): Promise<void> => {
    const { find } = await shallow.render();
    expect(find('ion-avatar')).toHaveFoundOne();
  });

  it('should show the correct name and surname', async (): Promise<void> => {
    const { find } = await shallow.render({
      bind: { name: '2pae', surname: 'dev' },
    });
    expect(find('.author-avatar__text').nativeElement.innerText).toBe(
      '2pae dev'
    );
  });
});
