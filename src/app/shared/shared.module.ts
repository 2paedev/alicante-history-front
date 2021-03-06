import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  SearchModalComponent,
  SettingsModalComponent,
  TextPopoverComponent
} from '@components/index';
import { TagsListComponent } from '@components/tags-list/tags-list.component';
import { IonicModule } from '@ionic/angular';
import { ArticleImageComponent } from './components/article-image/article-image.component';
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
    AuthorAvatarComponent,
    AvatarCardComponent,
    GalleryPopoverComponent,
    ImageModalComponent,
    SearchModalComponent,
    SettingsModalComponent,
    TagsListComponent,
    TextFormattedComponent,
    TextPopoverComponent,
    SafeHtmlPipe,
    HideHeaderDirective
  ],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    ArticleImageComponent,
    AuthorAvatarComponent,
    AvatarCardComponent,
    GalleryPopoverComponent,
    ImageModalComponent,
    SearchModalComponent,
    SettingsModalComponent,
    TagsListComponent,
    TextFormattedComponent,
    TextPopoverComponent,
    SafeHtmlPipe,
    HideHeaderDirective
  ],
  entryComponents: [
    TextPopoverComponent,
    GalleryPopoverComponent,
    ImageModalComponent,
    SearchModalComponent,
    SettingsModalComponent
  ]
})
export class SharedModule {}
