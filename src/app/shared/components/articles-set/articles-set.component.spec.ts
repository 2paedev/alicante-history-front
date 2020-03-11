import { ArticlesService } from '@services/index';
import { ARTICLES_SERVICE_MOCK } from '@testing/index';
import { Shallow } from 'shallow-render';
import { buildArticlePageFixture } from '../../fixtures/articles';
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
    data: {
      next: null,
      results: [],
    },
    noDataText: 'Without articles',
  };
}

function buildBindWithData(): any {
  return {
    title: 'theTitle',
    data: buildArticlePageFixture(),
    noDataText: 'Without articles',
  };
}

describe('ArticlesSetComponent', () => {
  xit('should create', async (): Promise<void> => {
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

  it('should render cards when there are content', async (): Promise<void> => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find } = await shallow.render({ bind: buildBindWithData() });
    const avatarCardItems = find('app-avatar-card');
    expect(avatarCardItems).toHaveFound(2);
  });

  it('should show a message when there is not data', async (): Promise<
    void
  > => {
    const { shallow } = searchSetupWithoutErrorsInArticles();
    const { find, fixture } = await shallow.render({
      bind: buildBindWithoutData(),
    });
    const noDataText = find('.articles-set__warning');
    fixture.detectChanges();
    expect(noDataText).toHaveFoundOne();
    expect(noDataText.nativeElement.innerText).toEqual('Without articles');
  });
});
