import { Article, ArticlePage, ArticleResume } from '@models/index';
import { Observable, of, throwError } from 'rxjs';
import { buildArticlePageFixture } from 'src/app/shared/fixtures/articles';
import {
  buildLastFiveFixture,
  buildResumeFixture,
} from 'src/app/shared/fixtures/resume';

export const ARTICLES_SERVICE_MOCK = {
  articles$: of(buildArticlePageFixture()),
  lastFive$: of(buildLastFiveFixture()),
  resume$: of(buildResumeFixture()),
  getResumeData(): Observable<ArticleResume[]> {
    return of(buildResumeFixture());
  },
  getLastFive(): Observable<Article[]> {
    return of(buildLastFiveFixture());
  },
  getAll(): Observable<ArticlePage> {
    return of(buildArticlePageFixture());
  },
  setLike(): Observable<any> {
    return of({});
  },
  removeLike(): Observable<any> {
    return of({});
  },
};

export const ARTICLES_ADD_LIKE_ERROR_MOCK = {
  lastFive$: throwError(''),
  resume$: of(buildResumeFixture()),
  getResumeData(): Observable<ArticleResume[]> {
    return of(buildResumeFixture());
  },
  getLastFive(): Observable<Article[]> {
    return of(buildLastFiveFixture());
  },
  setLike(): Observable<any> {
    return throwError('');
  },
  removeLike(): Observable<any> {
    return of({});
  },
};

export const ARTICLES_REMOVE_LIKE_ERROR_MOCK = {
  lastFive$: throwError(''),
  resume$: of(buildResumeFixture()),
  getResumeData(): Observable<ArticleResume[]> {
    return of(buildResumeFixture());
  },
  getLastFive(): Observable<Article[]> {
    return of(buildLastFiveFixture());
  },
  setLike(): Observable<any> {
    return of({});
  },
  removeLike(): Observable<any> {
    return throwError('');
  },
};

export const ARTICLES_SERVICE_LAST_FIVE_ERROR_MOCK = {
  lastFive$: throwError(''),
  resume$: of(buildResumeFixture()),
  getResumeData(): Observable<ArticleResume[]> {
    return of(buildResumeFixture());
  },
  getLastFive(): Observable<Article[]> {
    return of(buildLastFiveFixture());
  },
};

export const ARTICLES_SERVICE_RESUME_ERROR_MOCK = {
  lastFive$: of(buildLastFiveFixture()),
  resume$: throwError(''),
  getResumeData(): Observable<ArticleResume[]> {
    return of(buildResumeFixture());
  },
  getLastFive(): Observable<Article[]> {
    return of(buildLastFiveFixture());
  },
};
