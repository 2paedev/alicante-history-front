import { Component, OnDestroy, OnInit } from '@angular/core';
import { READ_MODE } from '@constants/index';
import { ModalController } from '@ionic/angular';
import { User } from '@models/index';
import { StorageService, UserService } from '@services/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings-modal',
  templateUrl: 'settings-modal.component.html',
  styleUrls: ['settings-modal.component.scss'],
})
export class SettingsModalComponent implements OnInit, OnDestroy {
  public isCheckedDay: boolean;
  public isCheckedNormal: boolean;
  public isMailSended: boolean;
  public mailText: string;
  public readModeShowed = false;
  public emailShowed = false;
  public contactShowed = false;

  private userSubscription: Subscription;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly userService: UserService,
    private readonly storageService: StorageService
  ) {}

  public ngOnInit(): void {
    this.isMailSended = this.storageService.getIsMailSended();
    this.isCheckedDay =
      this.storageService.getReadModeColor() === READ_MODE.DAY;
    this.isCheckedNormal =
      this.storageService.getReadModeSize() === READ_MODE.NORMAL;
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
    const bodyParams = { mail: this.mailText };
    this.userService.setEmailUser(bodyParams).subscribe(
      () => {
        this.isMailSended = true;
        this.storageService.setIsMailSended(this.isMailSended);
      },
      () => {
        // console.log(error.error.message);
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

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
