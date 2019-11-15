import { Component, Input, OnInit } from '@angular/core';
import { HelpersService } from '@services/index';

@Component({
  selector: 'app-author-avatar',
  templateUrl: './author-avatar.component.html',
  styleUrls: ['./author-avatar.component.scss'],
})
export class AuthorAvatarComponent implements OnInit {
  @Input() public name: string;
  @Input() public surname: string;
  @Input() public image: string;

  public imageUrl: string;

  constructor(private readonly helper: HelpersService) {}

  public ngOnInit(): void {
    this.imageUrl = this.helper.getImageUrl(this.image);
  }
}
