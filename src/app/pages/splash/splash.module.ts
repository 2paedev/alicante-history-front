import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { SplashPage } from './splash.page';
import { SPLASH_ROUTES } from './splash.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(SPLASH_ROUTES),
    SharedModule,
  ],
  declarations: [SplashPage],
})
export class SplashPageModule {}
