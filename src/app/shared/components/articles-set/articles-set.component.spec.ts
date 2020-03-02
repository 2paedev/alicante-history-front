import { ArticlesService } from '@services/index';
import { ARTICLES_SERVICE_MOCK } from '@testing/index';
import { Shallow } from 'shallow-render';
import { buildArticlePageFixture } from '../../fixtures/articles';
import { buildLastFiveFixture } from '../../fixtures/resume';
import { SharedModule } from '../../shared.module';
import { ArticlesSetComponent } from './articles-set.component';

function searchSetupWithoutErrorsInArticles(): {
  shallow: Shallow<ArticlesSetComponent>;
} {
  const shallow = new Shallow(ArticlesSetComponent, SharedModule)
    .provide(ArticlesService)
    .mock(ArticlesService, ARTICLES_SERVICE_MOCK);
  return { shallow };
}

function buildBindWithoutData(): any {
  return {
    title: 'theTitle',
    results: [],
    data: {},
  };
}

function buildBindWithData(): any {
  return {
    title: 'theTitle',
    results: buildLastFiveFixture(),
    data: buildArticlePageFixture(),
  };
}

fdescribe('ArticlesSetComponent', () => {
  it('should create', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should render the correct title', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find } = await shallow.render({ bind: buildBindWithData() });
    const title = find('.articles-set__title');
    expect(title).toHaveFoundOne();
    expect(title.nativeElement.innerText).toEqual('theTitle');
  });

  it('should render the avatar-card when there are content', async (): Promise<
    void
  > => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find } = await shallow.render({ bind: buildBindWithData() });
    const avatarCardItems = find('app-avatar-card');
    expect(avatarCardItems).toHaveFound(5);
  });

  it('should message noData when there is not data', async (): Promise<
    void
  > => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find, instance, fixture } = await shallow.render({
      bind: buildBindWithoutData(),
    });
    const noDataText = find('.articles-set__warning');
    instance.noDataText = 'No data';
    fixture.detectChanges();
    expect(noDataText).toHaveFoundOne();
    expect(noDataText.nativeElement.innerText).toEqual('No data');
  });

  it('should load data when doing scroll', async (): Promise<void> => {
    const EXPECTED_PAGE = '2';
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find, get, instance } = await shallow.render();
    // instance.ionViewDidEnter();

    find('ion-infinite-scroll').triggerEventHandler('ionInfinite', {});
    expect(get(ArticlesService).getAll).toHaveBeenCalledWith(EXPECTED_PAGE);
  });
});
