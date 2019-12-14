import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  SettingsModalComponent,
  TextPopoverComponent,
} from '@components/index';
import { TagsListComponent } from '@components/tags-list/tags-list.component';
import { IonicModule } from '@ionic/angular';
import { IonicImageLoader } from 'ionic-image-loader';
import { ArticleImageComponent } from './components/article-image/article-image.component';
import { ArticlesSetComponent } from './components/articles-set/articles-set.component';
import { AuthorAvatarComponent } from './components/author-avatar/author-avatar.component';
import { AvatarCardComponent } from './components/avatar-card/avatar-card.component';
import { GalleryPopoverComponent } from './components/gallery-popover/gallery-popover.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { TextFormattedComponent } from './components/text-formatted/text-formatted.component';
import { HideHeaderDirective } from './directives/hide-header.directive';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    ArticleImageComponent,
    ArticlesSetComponent,
    AuthorAvatarComponent,
    AvatarCardComponent,
    GalleryPopoverComponent,
    ImageModalComponent,
    SettingsModalComponent,
    TagsListComponent,
    TextFormattedComponent,
    TextPopoverComponent,
    SafeHtmlPipe,
    HideHeaderDirective,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IonicImageLoader,
  ],
  exports: [
    HeaderComponent,
    ArticleImageComponent,
    ArticlesSetComponent,
    AuthorAvatarComponent,
    AvatarCardComponent,
    GalleryPopoverComponent,
    ImageModalComponent,
    SettingsModalComponent,
    TagsListComponent,
    TextFormattedComponent,
    TextPopoverComponent,
    SafeHtmlPipe,
    HideHeaderDirective,
  ],
  entryComponents: [
    TextPopoverComponent,
    GalleryPopoverComponent,
    ImageModalComponent,
    SettingsModalComponent,
  ],
})
export class SharedModule {}
