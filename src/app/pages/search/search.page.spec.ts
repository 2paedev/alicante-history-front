import { ArticlesService } from '@services/index';
import { ARTICLES_SERVICE_MOCK } from '@testing/index';
import { Shallow } from 'shallow-render';
import { SearchPageModule } from './search.module';
import { SearchPage } from './search.page';

function searchSetupWithoutErrorsInArticles(): {
  shallow: Shallow<SearchPage>;
} {
  const shallow = new Shallow(SearchPage, SearchPageModule)
    .provide(ArticlesService)
    .mock(ArticlesService, ARTICLES_SERVICE_MOCK);
  return { shallow };
}

describe('SearchPage', () => {
  it('should create', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should render a searchbar', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find } = await shallow.render();
    expect(find('ion-searchbar')).toHaveFoundOne();
  });

  it('should unsubscribe when leave the page', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { instance } = await shallow.render();
    instance.ionViewDidEnter();
    spyOn(instance.articlesSubscription, 'unsubscribe').and.callThrough();
    instance.ionViewDidLeave();
    expect(instance.articlesSubscription.unsubscribe).toHaveBeenCalled();
  });
});
