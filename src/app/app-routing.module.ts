import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ROUTE } from '@constants/index';

const routes: Routes = [
  { path: '', redirectTo: ROUTE.HOME, pathMatch: 'full' },
  {
    path: ROUTE.HOME,
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: ROUTE.ARTICLE,
    loadChildren: './pages/article-detail/article-detail.module#ArticleDetailPageModule'
  },
  {
    path: ROUTE.MY_LIST,
    loadChildren: './pages/my-list/my-list.module#MyListPageModule'
  },
  {
    path: ROUTE.ALL_ARTICLES,
    loadChildren: './pages/all-articles/all-articles.module#AllArticlesPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
