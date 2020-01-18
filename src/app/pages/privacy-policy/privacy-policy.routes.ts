import { Routes } from '@angular/router';
import { PrivacyPolicyPage } from './privacy-policy.page';

export const PRIVACY_POLICY_ROUTES: Routes = [
  {
    path: '',
    component: PrivacyPolicyPage,
  },
];

export class PrivacyPolicyRoutingModule {}
