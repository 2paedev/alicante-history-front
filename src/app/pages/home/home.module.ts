import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { AvatarsListComponent } from './components/avatars-list/avatars-list.component';
import { HomePage } from './home.page';
import { HOME_ROUTES } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(HOME_ROUTES),
    SharedModule,
  ],
  declarations: [HomePage, AvatarsListComponent],
})
export class HomePageModule {}
