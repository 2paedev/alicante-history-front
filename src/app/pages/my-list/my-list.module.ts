import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { MyListPage } from './my-list.page';
import { MY_LIST_ROUTES } from './my-list.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(MY_LIST_ROUTES),
    SharedModule,
  ],
  declarations: [MyListPage],
})
export class MyListPageModule {}
