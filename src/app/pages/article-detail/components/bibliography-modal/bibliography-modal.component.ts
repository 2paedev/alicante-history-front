import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bibliography-modal',
  templateUrl: 'bibliography-modal.component.html',
  styleUrls: ['bibliography-modal.component.scss'],
})
export class BibliographyModalComponent {
  public data: string;

  constructor(private readonly modalCtrl: ModalController) {}
}
