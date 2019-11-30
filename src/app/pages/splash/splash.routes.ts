import { Routes } from '@angular/router';
import { ROUTE } from '@constants/index';
import { SplashPage } from './splash.page';

export const SPLASH_ROUTES: Routes = [
  {
    path: ROUTE.SPLASH,
    component: SplashPage,
  },
];

export class SplashRoutingModule {}
