import { Routes } from '@angular/router';
import { ROUTE } from '@constants/index';
import { ArticleDetailPage } from './article-detail.page';

export const ARTICLE_DETAIL_ROUTES: Routes = [
  {
    path: ROUTE.EMPLOYEE_ID,
    component: ArticleDetailPage
  }
];

export class ArticleDetailRoutingModule {}
