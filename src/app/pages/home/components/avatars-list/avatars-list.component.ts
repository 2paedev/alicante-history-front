import { Component, Input } from '@angular/core';
import { ArticleResume } from '@models/index';

@Component({
  selector: 'app-avatars-list',
  templateUrl: './avatars-list.component.html',
  styleUrls: ['./avatars-list.component.scss']
})
export class AvatarsListComponent {
  @Input() public title: string;
  @Input() public data: ArticleResume;

  constructor() {}
}
