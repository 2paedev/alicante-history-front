import { Routes } from '@angular/router';
import { MyListPage } from './my-list.page';

export const MY_LIST_ROUTES: Routes = [
  {
    path: '',
    component: MyListPage
  }
];

export class MyListRoutingModule {}
