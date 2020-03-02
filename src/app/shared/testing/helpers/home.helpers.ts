import { AdMobService, ArticlesService, ToastService } from '@services/index';
import {
  ADDMOB_SERVICE_MOCK,
  ARTICLES_SERVICE_LAST_FIVE_ERROR_MOCK,
  ARTICLES_SERVICE_MOCK,
  ARTICLES_SERVICE_RESUME_ERROR_MOCK,
  TOAST_SERVICE_MOCK,
} from '@testing/index';
import { Shallow } from 'shallow-render';
import { HomePageModule } from 'src/app/pages/home/home.module';
import { HomePage } from 'src/app/pages/home/home.page';

export function setupWithoutErrorsInArticles(): { shallow: Shallow<HomePage> } {
  const shallow = new Shallow(HomePage, HomePageModule)
    .provide(ArticlesService, AdMobService)
    .mock(ArticlesService, ARTICLES_SERVICE_MOCK)

    .mock(AdMobService, ADDMOB_SERVICE_MOCK);
  return { shallow };
}

export function setupWithLastFiveErrorInArticles(): {
  shallow: Shallow<HomePage>;
} {
  const shallow = new Shallow(HomePage, HomePageModule)
    .provide(ArticlesService, AdMobService)
    .mock(ArticlesService, ARTICLES_SERVICE_LAST_FIVE_ERROR_MOCK)
    .mock(ToastService, TOAST_SERVICE_MOCK)
    .mock(AdMobService, ADDMOB_SERVICE_MOCK);
  return { shallow };
}

export function setupWithResumeErrorInArticles(): {
  shallow: Shallow<HomePage>;
} {
  const shallow = new Shallow(HomePage, HomePageModule)
    .provide(ArticlesService, AdMobService)
    .mock(ArticlesService, ARTICLES_SERVICE_RESUME_ERROR_MOCK)
    .mock(ToastService, TOAST_SERVICE_MOCK)
    .mock(AdMobService, ADDMOB_SERVICE_MOCK);
  return { shallow };
}
