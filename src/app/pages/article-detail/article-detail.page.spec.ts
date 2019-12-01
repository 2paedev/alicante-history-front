import { ActivatedRoute } from '@angular/router';
import { Article } from '@models/index';
import { ArticlesService } from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { buildArticleDetailFixture } from 'src/app/shared/fixtures/articles';
import { ArticleDetailPageModule } from './article-detail.module';
import { ArticleDetailPage } from './article-detail.page';

const ACTIVATED_ROUTE_MOCK = {
  snapshot: {
    params: {
      id: 0,
    },
  },
};

const ARTICLES_SERVICE_MOCK = {
  getDetail(id: number): Observable<Article> {
    return of(buildArticleDetailFixture(id));
  },
};

const EXPECTED_ERROR = 'No se han podido obtener los datos.';

describe('ArticleDetailPage', () => {
  let shallow: Shallow<ArticleDetailPage>;

  beforeEach((): void => {
    shallow = new Shallow(ArticleDetailPage, ArticleDetailPageModule)
      .provide(ActivatedRoute, ArticlesService)
      .mock(ArticlesService, ARTICLES_SERVICE_MOCK)
      .mock(ActivatedRoute, ACTIVATED_ROUTE_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should render the main article image', async (): Promise<void> => {
    const { find } = await shallow.render();
    expect(find('app-article-image')).toHaveFoundOne();
  });

  it('should render the author avatar', async (): Promise<void> => {
    const { find } = await shallow.render();
    expect(find('app-author-avatar')).toHaveFoundOne();
  });

  it('should render the article publish date', async (): Promise<void> => {
    const { find } = await shallow.render();
    const dateText = find('.article-detail__info--date')[0].children[0];
    expect(dateText.nativeElement.textContent).toEqual('2019-11-09');
  });

  it('should render the text formatted', async (): Promise<void> => {
    const { find } = await shallow.render();
    expect(find('app-text-formatted')).toHaveFoundOne();
  });

  it('should throw an error if does not have article data when try to retrieve image', async (): Promise<
    void
  > => {
    const { instance } = await shallow
      .provide(ArticlesService)
      .mock(ArticlesService, {
        getDetail(): Observable<Article> {
          return of(null);
        },
      })
      .render();
    expect((): void => {
      instance.getArticleImage();
    }).toThrowError(EXPECTED_ERROR);
  });
});
