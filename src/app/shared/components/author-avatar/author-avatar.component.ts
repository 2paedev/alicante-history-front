import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-avatar',
  templateUrl: './author-avatar.component.html',
  styleUrls: ['./author-avatar.component.scss']
})
export class AuthorAvatarComponent {
  @Input() public name: string;
  @Input() public avatar: string;
}
