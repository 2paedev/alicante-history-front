import { ArticlesService, ToastService } from '@services/index';
import { ARTICLES_SERVICE_MOCK, TOAST_SERVICE_MOCK } from '@testing/index';
import { Shallow } from 'shallow-render';
import { ARTICLES_SERVICE_ERRORS_MOCK } from '../../shared/testing/mocks/articles.mocks';
import { SearchPageModule } from './search.module';
import { SearchPage } from './search.page';

function searchSetupWithoutErrorsInArticles(): {
  shallow: Shallow<SearchPage>;
} {
  const shallow = new Shallow(SearchPage, SearchPageModule)
    .provide(ArticlesService)
    .mock(ArticlesService, { ...ARTICLES_SERVICE_MOCK });
  return { shallow };
}

function searchSetupWithErrorsInArticles(): {
  shallow: Shallow<SearchPage>;
} {
  const shallow = new Shallow(SearchPage, SearchPageModule)
    .provide(ArticlesService, ToastService)
    .mock(ArticlesService, { ...ARTICLES_SERVICE_ERRORS_MOCK })
    .mock(ToastService, { ...TOAST_SERVICE_MOCK });
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

  it('should search items when write in the searchbar coincidences ', async (): Promise<
    void
  > => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find, instance, fixture } = await shallow.render();
    instance.ionViewDidEnter();
    fixture.detectChanges();
    const input = find('ion-searchbar');
    expect(input).toHaveFoundOne();
    input.nativeElement.value = 'something';
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(instance.searchData.results.length).toEqual(2);
    });
  });

  xit('should show toast error if there are a problem with article observable', async (): Promise<
    void
  > => {
    const { shallow } = searchSetupWithErrorsInArticles();
    const { instance, fixture, get } = await shallow.render();
    instance.ionViewDidEnter();
    fixture.detectChanges();
    const toast = get(ToastService);
    expect(toast.presentToastError).toHaveBeenCalled();
  });
});
