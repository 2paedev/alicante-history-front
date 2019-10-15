import { Component, OnDestroy, OnInit } from '@angular/core';
import { READ_MODE } from '@constants/index';
import { ModalController } from '@ionic/angular';
import { User } from '@models/index';
import { StorageService, UserService } from '@services/index';
import { Subscription } from 'rxjs';
import { CustomPost } from './../../models/custom-post';

@Component({
  selector: 'app-settings-modal',
  templateUrl: 'settings-modal.component.html',
  styleUrls: ['settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit, OnDestroy {
  public isCheckedDay: boolean;
  public isCheckedNormal: boolean;
  public isMailSended: boolean;
  public mailText: string;

  private userSubscription: Subscription;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly userService: UserService,
    private readonly storageService: StorageService
  ) {}

  public ngOnInit(): void {
    this.isMailSended = this.storageService.getIsMailSended();
    this.isCheckedDay = this.storageService.getReadModeColor() === READ_MODE.DAY ? true : false;
    this.isCheckedNormal = this.storageService.getReadModeSize() === READ_MODE.NORMAL ? true : false;
    this.userSubscription = this.userService.getUser().subscribe((userData: User) => {
      this.storageService.setReadMode(userData.readMode.color, userData.readMode.size);
    });
  }

  public sendMail(): void {
    const bodyParams = { mail: this.mailText };
    this.userService.setEmailUser(bodyParams).subscribe(
      (response: CustomPost) => {
        debugger;
        this.isMailSended = true;
        this.storageService.setIsMailSended(this.isMailSended);
      },
      (error: CustomPost) => {
        console.log(error.error.message);
      }
    );
  }

  public close(): void {
    this.modalCtrl.dismiss();
  }

  public isEmailValid(email: string): boolean {
    const regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return regexp.test(email);
  }

  public ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
