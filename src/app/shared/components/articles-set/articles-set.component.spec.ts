import { ArticlesService } from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';
import { ArticlesSetComponent } from './articles-set.component';

const ARTICLES_SERVICE_MOCK = {
  getAll(): Observable<any> {
    return of({});
  },
};

describe('ArticlesSetComponent', () => {
  let shallow: Shallow<ArticlesSetComponent>;

  beforeEach((): void => {
    shallow = new Shallow(ArticlesSetComponent, SharedModule)
      .provide(ArticlesService)
      .mock(ArticlesService, ARTICLES_SERVICE_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });
});
