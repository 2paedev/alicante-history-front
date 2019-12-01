import { Router } from '@angular/router';
import { Article } from '@models/index';
import {
  ArticlesService,
  HelpersService,
  StorageService,
} from '@services/index';
import { Observable, of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { buildLastFiveFixture } from '../../fixtures/resume';
import { SharedModule } from '../../shared.module';
import { ArticleImageComponent } from './article-image.component';

const ARTICLES_SERVICE_MOCK = {
  setLike(): Observable<any> {
    return of({});
  },
  removeLike(): Observable<any> {
    return of({});
  },
};

const HELPERS_SERVICE_MOCK = {
  getImageUrl(): string {
    return 'aFakeUrl';
  },
};

const STORAGE_SERVICE_MOCK = {
  // eslint-disable-next-line no-empty-function
  setItemInMyList(): void {},
  // eslint-disable-next-line no-empty-function
  removeItemInMyList(): void {},
  // eslint-disable-next-line no-empty-function
  setItemInMyLikedList(): void {},
  // eslint-disable-next-line no-empty-function
  removeItemInMyLikedList(): void {},
  getMyLikedList(): number[] {
    return [];
  },
  getMyList(): Article[] {
    return buildLastFiveFixture();
  },
};

const ROUTER_MOCK = {
  navigate: jasmine.createSpy('navigate'),
  events: of({}),
};

function buildBind(): any {
  return {
    showReadIcon: false,
    image: 'aFakeImage',
    title: 'theTitle',
    tags: [],
    data: {
      id: 1,
    },
  };
}

describe('ArticleImageComponent', () => {
  let shallow: Shallow<ArticleImageComponent>;

  beforeEach((): void => {
    shallow = new Shallow(ArticleImageComponent, SharedModule)
      .provide(ArticlesService, StorageService, HelpersService, Router)
      .mock(ArticlesService, ARTICLES_SERVICE_MOCK)
      .mock(HelpersService, HELPERS_SERVICE_MOCK)
      .mock(StorageService, STORAGE_SERVICE_MOCK)
      .mock(Router, ROUTER_MOCK);
  });

  it('should create', async (): Promise<void> => {
    const { element } = await shallow.render({ bind: buildBind() });
    expect(element).toBeTruthy();
  });
});
