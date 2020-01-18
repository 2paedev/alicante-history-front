import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '@constants/index';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: 'privacy-policy.page.html',
  styleUrls: ['privacy-policy.page.scss'],
})
export class PrivacyPolicyPage {
  constructor(private readonly router: Router) {}

  public goToHomePage(): void {
    this.router.navigate([ROUTE.HOME]);
  }
}
