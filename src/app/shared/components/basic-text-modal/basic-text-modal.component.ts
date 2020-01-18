import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HelpersService } from '@services/index';

@Component({
  selector: 'app-basic-text-modal',
  templateUrl: 'basic-text-modal.component.html',
  styleUrls: ['basic-text-modal.component.scss'],
})
export class BasicTextModalComponent implements OnInit {
  @Input() public title: string;
  @Input() public contentText: string;
  @Input() public image?: string;

  public imageUrl: string;

  constructor(
    private readonly helper: HelpersService,
    private readonly modalCtrl: ModalController
  ) {}

  public ngOnInit(): void {
    if (this.image) {
      this.imageUrl = this.helper.getImageUrl(this.image);
    }
  }

  public onDismissModal(): void {
    this.modalCtrl.dismiss();
  }
}
