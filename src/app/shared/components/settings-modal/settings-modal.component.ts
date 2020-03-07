import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPopoverComponent } from '@components/info-popover/info-popover.component';
import { INFO_POPOVER, ROUTE, STORAGE_KEY } from '@constants/index';
import { ModalController, PopoverController } from '@ionic/angular';
import { User } from '@models/index';
import { FCMService, StorageService, UserService } from '@services/index';
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
  public popoverShowed = {
    readMode: false,
    contact: false,
    notifications: false,
    privacyPolicy: false,
  };

  public notificationsIsChecked = false;

  // public mailIsBeingSent = false;
  // public emailShowed = false;

  private userSubscription: Subscription;

  constructor(
    private readonly router: Router,
    private readonly modalCtrl: ModalController,
    private readonly userService: UserService,
    private readonly storageService: StorageService,
    private readonly popoverController: PopoverController,
    private readonly fcm: FCMService,
    private readonly user: UserService
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

  public close(): void {
    this.modalCtrl.dismiss();
  }

  public async presentPopover(ev: any, type: string): Promise<void> {
    const popoverSelected = {
      readMode: INFO_POPOVER.READ_MODE,
      contact: INFO_POPOVER.CONTACT,
      notifications: INFO_POPOVER.READ_MODE,
      privacyPolicy: INFO_POPOVER.PRIVACY_POLICY,
    };
    const popover = await this.popoverController.create({
      component: InfoPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        textInfo: popoverSelected[type],
      },
    });
    await popover.present();
  }

  public goToPrivacyPolicyPage(): void {
    this.close();
    this.router.navigate([ROUTE.PRIVACY_POLICY]);
  }

  public onChangeNotifications(event: CustomEvent): void {
    this.notificationsIsChecked = event.detail.checked;
    this.user.setNotifications(this.notificationsIsChecked);
    if (this.notificationsIsChecked) {
      this.fcm.saveToken();
    } else {
      this.fcm.removeNotificationSubscription();
    }
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  // public sendMail(): void {
  //   this.mailIsBeingSent = true;
  //   const bodyParams = { mail: this.mailText };
  //   this.userService.setEmailUser(bodyParams).subscribe(
  //     () => {
  //       this.isMailSent = true;
  //       this.mailIsBeingSent = false;
  //       this.storageService.setStorageValue(
  //         STORAGE_KEY.MAIL.IS_SENDED,
  //         this.isMailSent
  //       );
  //     },
  //     () => {
  //       this.mailIsBeingSent = true;
  //       this.toastService.presentToastError(ERRORS.MESSAGES.UPDATE);
  //       throw new Error(ERRORS.MESSAGES.UPDATE);
  //     }
  //   );
  // }

  // public isEmailValid(email: string): boolean {
  //   const regexp = new RegExp(
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   );
  //   return regexp.test(email);
  // }

  // public toggleEmail(): void {
  //   this.emailShowed = !this.emailShowed;
  // }
}
