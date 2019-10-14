import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';
import { ModalController } from '@ionic/angular';
import { SearchModalComponent } from './../search-modal/search-modal.component';
import { SettingsModalComponent } from './../settings-modal/settings-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  constructor(private readonly router: Router, private readonly modalCtrl: ModalController) {}

  public goToHomePage(): void {
    this.router.navigate([ROUTE.HOME]);
  }

  public goToMyList(): void {
    this.router.navigate([ROUTE.MY_LIST]);
  }

  public presentSearchModal() {
    this.modalCtrl
      .create({
        component: SearchModalComponent
      })
      .then(modal => modal.present());
  }

  public presentSettingsModal() {
    this.modalCtrl
      .create({
        component: SettingsModalComponent
      })
      .then(modal => modal.present());
  }
}
