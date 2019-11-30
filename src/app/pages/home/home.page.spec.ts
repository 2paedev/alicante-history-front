import { Article, ArticleResume } from '@models/index';
import { ArticlesService } from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import {
  buildLastFiveFixture,
  buildResumeFixture,
} from 'src/app/shared/fixtures/resume';
import { HomePageModule } from './home.module';
import { HomePage } from './home.page';

const ARTICLES_SERVICE_MOCK = {
  lastFive$: of(buildLastFiveFixture()),
  resume$: of(buildResumeFixture()),
  getResumeData(): Observable<ArticleResume[]> {
    return of(buildResumeFixture());
  },
  getLastFive(): Observable<Article[]> {
    return of(buildLastFiveFixture());
  },
};

describe('HomePage', () => {
  let shallow: Shallow<HomePage>;

  beforeEach((): void => {
    shallow = new Shallow(HomePage, HomePageModule)
      .provide(ArticlesService)
      .mock(ArticlesService, ARTICLES_SERVICE_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render();
    expect(element).toBeTruthy();
  });

  it('should render the main article image', async (): Promise<void> => {
    const { find } = await shallow.render();
    expect(find('app-article-image')).toHaveFoundOne();
  });

  it('should render the list of avatars', async (): Promise<void> => {
    const { find } = await shallow.render();
    expect(find('app-avatars-list')).toHaveFound(2);
  });

  it('should format the last article', async (): Promise<void> => {
    const { instance } = await shallow.render();
    expect(instance.lastArticleData.id).toEqual(5);
  });

  it('should format the last five article', async (): Promise<void> => {
    const { instance } = await shallow.render();
    expect(instance.lastFiveArticlesData.length).toEqual(5);
  });
});
