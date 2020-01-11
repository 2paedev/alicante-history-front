import { ActivatedRoute } from '@angular/router';
import { AuthorModalComponent } from '@components/index';
import { ModalController } from '@ionic/angular';
import { Article } from '@models/index';
import { AdMobService, ArticlesService } from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { buildArticleDetailFixture } from 'src/app/shared/fixtures/articles';
import { ModalControllerMock } from 'src/app/shared/mocks/ionic-services.mocks';
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

const ADDMOB_SERVICE_MOCK = {
  pushBanner(): void {},
  getBannerConfig(): any {
    return {
      id: '',
      isTesting: true,
      autoShow: true,
    };
  },
  pushInterstitial(): void {},
  getInterstitialConfig(): any {
    return {
      id: '',
      isTesting: true,
      autoShow: true,
    };
  },
};

const authorData = {
  id: 1,
  image: '/images/aragorn.jpeg',
  created: '2019-11-09T09:36:06.471000Z',
  name: 'Diego',
  surname: 'Martinez',
  email: 'diego@elcorreo.com',
  description: 'DESCRIPTION EXAMPLE',
};

const authorModalOptions = {
  component: AuthorModalComponent,
  cssClass: 'author-modal',
  componentProps: {
    data: authorData,
  },
};

const EXPECTED_ERROR = 'ERROR al obtener la imagen';

describe('ArticleDetailPage', () => {
  let shallow: Shallow<ArticleDetailPage>;

  beforeEach((): void => {
    shallow = new Shallow(ArticleDetailPage, ArticleDetailPageModule)
      .provide(ActivatedRoute, ArticlesService, AdMobService)
      .mock(ModalController, ModalControllerMock)
      .mock(ArticlesService, ARTICLES_SERVICE_MOCK)
      .mock(ActivatedRoute, ACTIVATED_ROUTE_MOCK)
      .mock(AdMobService, ADDMOB_SERVICE_MOCK);
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

  it('should open author modal when clickin on avatar', async (): Promise<
    void
  > => {
    const { get, find, fixture } = await shallow.render();
    fixture.detectChanges();
    const modalController = get(ModalController);
    find('app-author-avatar').nativeElement.click();
    expect(modalController.create).toHaveBeenCalledWith(authorModalOptions);
  });
});
