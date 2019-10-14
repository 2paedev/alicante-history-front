import { Component, OnDestroy, OnInit } from '@angular/core';
import { READ_MODE } from '@constants/index';
import { ModalController } from '@ionic/angular';
import { User } from '@models/index';
import { StorageService, UserService } from '@services/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings-modal',
  templateUrl: 'settings-modal.component.html',
  styleUrls: ['settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit, OnDestroy {
  public isCheckedDay: boolean;
  public isCheckedNormal: boolean;

  private userSubscription: Subscription;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly userService: UserService,
    private readonly storageService: StorageService
  ) {}

  public ngOnInit(): void {
    this.isCheckedDay = this.storageService.getReadModeColor() === READ_MODE.DAY ? true : false;
    this.isCheckedNormal = this.storageService.getReadModeSize() === READ_MODE.NORMAL ? true : false;
    this.userSubscription = this.userService.getUser().subscribe((userData: User) => {
      this.storageService.setReadMode(userData.readMode.color, userData.readMode.size);
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }

  public ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
