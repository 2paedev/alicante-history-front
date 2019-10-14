import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from './../../constants/routes.constants';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}

  public goToHomePage(): void {
    this.router.navigate([ROUTE.HOME]);
  }

  public goToMyList(): void {
    this.router.navigate([ROUTE.MY_LIST]);
  }

  public openSearchModal() {}
}
