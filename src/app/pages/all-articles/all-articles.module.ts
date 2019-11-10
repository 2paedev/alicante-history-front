import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { AllArticlesPage } from './all-articles.page';
import { ALL_ARTICLES_ROUTES } from './all-articles.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(ALL_ARTICLES_ROUTES),
    SharedModule
  ],
  declarations: [AllArticlesPage]
})
export class AllArticlesPageModule {}
