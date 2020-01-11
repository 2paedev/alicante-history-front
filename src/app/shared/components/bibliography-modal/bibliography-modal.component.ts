import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { HelpersService } from '@services/index';

@Component({
  selector: 'app-bibliography-modal',
  templateUrl: 'bibliography-modal.component.html',
  styleUrls: ['bibliography-modal.component.scss'],
})
export class BibliographyModalComponent {
  @Input() public data: string[];
  // public completeName: string;
  // public imageUrl: string;
  constructor(private readonly modalCtrl: ModalController) {}

  public onDismissModal(): void {
    this.modalCtrl.dismiss();
  }
}
