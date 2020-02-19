import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPopoverComponent } from '@components/info-popover/info-popover.component';
import { ERRORS, INFO_POPOVER, ROUTE, STORAGE_KEY } from '@constants/index';
import { ModalController, PopoverController } from '@ionic/angular';
import { User } from '@models/index';
import { StorageService, ToastService, UserService } from '@services/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings-modal',
  templateUrl: 'settings-modal.component.html',
  styleUrls: ['settings-modal.component.scss'],
})
export class SettingsModalComponent implements OnInit, OnDestroy {
  public checkedColorValue: string;
  public checkedSizeValue: string;
  public isMailSent: boolean;
  public mailText: string;
  public readModeShowed = true;
  public emailShowed = true;
  public contactShowed = true;
  public privacyPolicyShowed = true;
  public mailIsBeingSent = false;

  private userSubscription: Subscription;

  constructor(
    private readonly router: Router,
    private readonly modalCtrl: ModalController,
    private readonly userService: UserService,
    private readonly storageService: StorageService,
    private readonly toastService: ToastService,
    private readonly popoverController: PopoverController
  ) {}

  public ngOnInit(): void {
    this.storageService
      .getStorageValue(STORAGE_KEY.MAIL.IS_SENDED)
      .then(value => {
        this.isMailSent = value;
      });
    this.storageService
      .getStorageValue(STORAGE_KEY.READ_MODE.COLOR)
      .then(value => {
        this.checkedColorValue = value;
      });
    this.storageService
      .getStorageValue(STORAGE_KEY.READ_MODE.SIZE)
      .then(value => {
        this.checkedSizeValue = value;
      });

    this.userSubscription = this.userService
      .getUser()
      .subscribe((userData: User) => {
        this.storageService.setReadMode(
          userData.readMode.color,
          userData.readMode.size
        );
      });
  }

  public sendMail(): void {
    this.mailIsBeingSent = true;
    const bodyParams = { mail: this.mailText };
    this.userService.setEmailUser(bodyParams).subscribe(
      () => {
        this.isMailSent = true;
        this.mailIsBeingSent = false;
        this.storageService.setStorageValue(
          STORAGE_KEY.MAIL.IS_SENDED,
          this.isMailSent
        );
      },
      () => {
        this.mailIsBeingSent = true;
        this.toastService.presentToastError(ERRORS.MESSAGES.UPDATE);
        throw new Error(ERRORS.MESSAGES.UPDATE);
      }
    );
  }

  public close(): void {
    this.modalCtrl.dismiss();
  }

  public isEmailValid(email: string): boolean {
    const regexp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regexp.test(email);
  }

  public toggleReadMode(): void {
    this.readModeShowed = !this.readModeShowed;
  }

  public toggleEmail(): void {
    this.emailShowed = !this.emailShowed;
  }

  public toggleContact(): void {
    this.contactShowed = !this.contactShowed;
  }

  public togglePrivacyPolicy(): void {
    this.privacyPolicyShowed = !this.privacyPolicyShowed;
  }

  public async presentContactInfoPopover(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: InfoPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        textInfo: INFO_POPOVER.CONTACT,
      },
    });
    await popover.present();
  }

  public async presentReadModeInfoPopover(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: InfoPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        textInfo: INFO_POPOVER.READ_MODE,
      },
    });
    await popover.present();
  }

  public async presentEmailInfoPopover(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: InfoPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        textInfo: INFO_POPOVER.EMAIL,
      },
    });
    await popover.present();
  }

  public goToPrivacyPolicyPage(): void {
    this.close();
    this.router.navigate([ROUTE.PRIVACY_POLICY]);
  }

  public async presentPrivacyPolicyInfoPopover(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: InfoPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        textInfo: INFO_POPOVER.PRIVACY_POLICY,
      },
    });
    await popover.present();
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
