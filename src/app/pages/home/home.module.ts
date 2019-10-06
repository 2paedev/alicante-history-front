import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AvatarCardComponent } from './components/avatar-card/avatar-card.component';
import { AvatarsListComponent } from './components/avatars-list/avatars-list.component';
import { LastArticleComponent } from './components/last-article/last-article.component';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { HomePage } from './home.page';
import { HOME_ROUTES } from './home.routes';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(HOME_ROUTES)],
  declarations: [
    HomePage,
    LastArticleComponent,
    TagsListComponent,
    AvatarsListComponent,
    AvatarCardComponent
  ]
})
export class HomePageModule {}
