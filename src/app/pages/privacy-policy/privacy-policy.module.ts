import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { PrivacyPolicyPage } from './privacy-policy.page';
import { PRIVACY_POLICY_ROUTES } from './privacy-policy.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(PRIVACY_POLICY_ROUTES),
    SharedModule,
  ],
  declarations: [PrivacyPolicyPage],
})
export class PrivacyPolicyPageModule {}
