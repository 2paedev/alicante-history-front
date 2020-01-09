import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { ArticleDetailPage } from './article-detail.page';
import { ARTICLE_DETAIL_ROUTES } from './article-detail.routes';
import { BibliographyModalComponent } from './components/bibliography-modal/bibliography-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(ARTICLE_DETAIL_ROUTES),
    SharedModule,
  ],
  declarations: [ArticleDetailPage, BibliographyModalComponent],
})
export class ArticleDetailPageModule {}
