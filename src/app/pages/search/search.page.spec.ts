import { ArticlesService } from '@services/index';
import { of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { buildArticlePageFixture } from 'src/app/shared/fixtures/articles';
import { SearchPageModule } from './search.module';
import { SearchPage } from './search.page';

const ARTICLES_SERVICE_MOCK = {
  articles$: of(buildArticlePageFixture()),
};

describe('SearchPage', () => {
  let shallow: Shallow<SearchPage>;

  beforeEach((): void => {
    shallow = new Shallow(SearchPage, SearchPageModule)
      .provide(ArticlesService)
      .mock(ArticlesService, ARTICLES_SERVICE_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should render a searchbar', async (): Promise<void> => {
    const { find } = await shallow.render();
    expect(find('ion-searchbar')).toHaveFoundOne();
  });
});
