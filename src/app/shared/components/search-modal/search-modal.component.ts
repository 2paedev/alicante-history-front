import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-modal',
  templateUrl: 'search-modal.component.html',
  styleUrls: ['search-modal.component.scss']
})
export class SearchModalComponent {
  constructor(private readonly modalCtrl: ModalController, private readonly router: Router) {}

  public close(): void {
    this.modalCtrl.dismiss();
  }

  public goToAllArticles(): void {
    this.router.navigate([ROUTE.ALL_ARTICLES]);
    this.close();
  }
}
