import { Router } from '@angular/router';
import { ArticleImageComponent } from '@components/index';
import {
  ArticlesService,
  HelpersService,
  StorageService,
  ToastService,
} from '@services/index';
import {
  ARTICLES_ADD_LIKE_ERROR_MOCK,
  ARTICLES_REMOVE_LIKE_ERROR_MOCK,
  ARTICLES_SERVICE_MOCK,
  HELPERS_SERVICE_MOCK,
  RouterMock,
  STORAGE_SERVICE_MOCK,
  TOAST_SERVICE_MOCK,
} from '@testing/index';
import { Shallow } from 'shallow-render';
import { SharedModule } from '../../shared.module';

export function buildBindWithReadButton(): any {
  return {
    showReadIcon: true,
    image: 'aFakeImage',
    title: 'theTitle',
    tags: [
      { id: 0, name: 'tag1' },
      { id: 1, name: 'tag2' },
    ],
    data: {
      id: 1,
    },
  };
}

export function searchSetupWithoutErrorsInArticles(): {
  shallow: Shallow<ArticleImageComponent>;
} {
  const shallow = new Shallow(ArticleImageComponent, SharedModule)
    .provide(ArticlesService, StorageService, HelpersService, Router)
    .mock(ArticlesService, ARTICLES_SERVICE_MOCK)
    .mock(HelpersService, HELPERS_SERVICE_MOCK)
    .mock(StorageService, STORAGE_SERVICE_MOCK)
    .mock(Router, RouterMock);
  return { shallow };
}

export function searchSetupWithErrorsWhenAddLike(): {
  shallow: Shallow<ArticleImageComponent>;
} {
  const shallow = new Shallow(ArticleImageComponent, SharedModule)
    .provide(ArticlesService, StorageService, HelpersService, Router)
    .mock(ArticlesService, ARTICLES_ADD_LIKE_ERROR_MOCK)
    .mock(HelpersService, HELPERS_SERVICE_MOCK)
    .mock(StorageService, STORAGE_SERVICE_MOCK)
    .mock(ToastService, TOAST_SERVICE_MOCK)
    .mock(Router, RouterMock);
  return { shallow };
}

export function searchSetupWithErrorsWhenRemoveLike(): {
  shallow: Shallow<ArticleImageComponent>;
} {
  const shallow = new Shallow(ArticleImageComponent, SharedModule)
    .provide(ArticlesService, StorageService, HelpersService, Router)
    .mock(ArticlesService, ARTICLES_REMOVE_LIKE_ERROR_MOCK)
    .mock(HelpersService, HELPERS_SERVICE_MOCK)
    .mock(StorageService, STORAGE_SERVICE_MOCK)
    .mock(ToastService, TOAST_SERVICE_MOCK)
    .mock(Router, RouterMock);
  return { shallow };
}
