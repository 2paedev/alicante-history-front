import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TextPopoverComponent } from '@components/index';
import { TagsListComponent } from '@components/tags-list/tags-list.component';
import { IonicModule } from '@ionic/angular';
import { ArticleImageComponent } from './components/article-image/article-image.component';
import { AuthorAvatarComponent } from './components/author-avatar/author-avatar.component';
import { HeaderComponent } from './components/header/header.component';
import { TextFormattedComponent } from './components/text-formatted/text-formatted.component';
import { HideHeaderDirective } from './directives/hide-header.directive';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    ArticleImageComponent,
    AuthorAvatarComponent,
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
    TagsListComponent,
    TextFormattedComponent,
    TextPopoverComponent,
    SafeHtmlPipe,
    HideHeaderDirective
  ],
  entryComponents: [TextPopoverComponent]
})
export class SharedModule {}
