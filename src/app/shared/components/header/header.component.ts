import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTE } from "@constants/index";
import { ModalController } from "@ionic/angular";
import { SettingsModalComponent } from "./../settings-modal/settings-modal.component";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html",
  styleUrls: ["header.component.scss"]
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    private readonly modalCtrl: ModalController
  ) {}

  public goToHomePage(): void {
    this.router.navigate([ROUTE.HOME]);
  }

  public goToMyList(): void {
    this.router.navigate([ROUTE.MY_LIST]);
  }

  public goToSearchPage() {
    this.router.navigate([ROUTE.SEARCH]);
  }

  public presentSettingsModal() {
    this.modalCtrl
      .create({
        component: SettingsModalComponent
      })
      .then(modal => modal.present());
  }
}
