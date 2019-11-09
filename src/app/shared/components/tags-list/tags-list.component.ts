import { Component, Input } from '@angular/core';
import { Tag } from '@models/index';

@Component({
  selector: 'app-tags-list',
  templateUrl: 'tags-list.component.html',
  styleUrls: ['tags-list.component.scss']
})
export class TagsListComponent {
  @Input() public tags: Tag[];
}
