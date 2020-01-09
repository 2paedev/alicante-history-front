import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Author } from '@models/index';
import { HelpersService } from '@services/index';

@Component({
  selector: 'app-author-modal',
  templateUrl: 'author-modal.component.html',
  styleUrls: ['author-modal.component.scss'],
})
export class AuthorModalComponent implements OnInit {
  @Input() public data: Author;

  public completeName: string;
  public imageUrl: string;

  constructor(
    private readonly helper: HelpersService,
    private readonly modalCtrl: ModalController
  ) {}

  public ngOnInit(): void {
    this.completeName = `${this.data.name} ${this.data.surname}`;
    this.imageUrl = this.helper.getImageUrl(this.data.image);
  }

  public onDismissModal(): void {
    this.modalCtrl.dismiss();
  }
}
