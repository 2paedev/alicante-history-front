import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArticleDetailPage } from './article-detail.page';
import { ARTICLE_DETAIL_ROUTES } from './article-detail.routes';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(ARTICLE_DETAIL_ROUTES)],
  declarations: [ArticleDetailPage]
})
export class ArticleDetailPageModule {}
