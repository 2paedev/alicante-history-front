import { Shallow } from 'shallow-render';
import { SplashPageModule } from './splash.module';
import { SplashPage } from './splash.page';

describe('SplashPage', () => {
  let shallow: Shallow<SplashPage>;

  beforeEach((): void => {
    shallow = new Shallow(SplashPage, SplashPageModule);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
