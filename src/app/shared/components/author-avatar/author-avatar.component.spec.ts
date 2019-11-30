import { HelpersService } from '@services/index';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { AuthorAvatarComponent } from './author-avatar.component';

const HELPERS_SERVICE_MOCK = {
  getImageUrl(url: string): string {
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
});
