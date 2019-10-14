import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextPopoverComponent } from '@components/index';
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
    TagsListComponent,
    TextFormattedComponent,
    TextPopoverComponent,
    SafeHtmlPipe,
    HideHeaderDirective
  ],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [
    HeaderComponent,
    ArticleImageComponent,
    AuthorAvatarComponent,
    AvatarCardComponent,
    GalleryPopoverComponent,
    ImageModalComponent,
    TagsListComponent,
    TextFormattedComponent,
    TextPopoverComponent,
    SafeHtmlPipe,
    HideHeaderDirective
  ],
  entryComponents: [TextPopoverComponent, GalleryPopoverComponent, ImageModalComponent]
})
export class SharedModule {}
