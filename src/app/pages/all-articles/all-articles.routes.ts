import { Routes } from '@angular/router';
import { AllArticlesPage } from './all-articles.page';

export const ALL_ARTICLES_ROUTES: Routes = [
  {
    path: '',
    component: AllArticlesPage
  }
];

export class AllArticlesRoutingModule {}
