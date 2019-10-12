import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { User } from '@models/index';
import { UserService } from '@services/index';
import { Subscription } from 'rxjs';
import { TextPopoverComponent } from '../text-popover/text-popover.component';
import { READ_MODE } from './../../constants/global.constants';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'app-text-formatted',
  templateUrl: './text-formatted.component.html',
  styleUrls: ['./text-formatted.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextFormattedComponent implements OnInit, OnDestroy {
  @Input() public textAsHtml: string;

  private userSubscription: Subscription;
  private userData: User;
  public ready = false;

  constructor(
    public readonly popoverController: PopoverController,
    private readonly userService: UserService,
    private readonly storageService: StorageService
  ) {}

  public ngOnInit(): void {
    this.userSubscription = this.userService.getUser().subscribe((userData: User) => {
      this.userData = userData;
      this.storageService.setReadMode(this.userData.readMode.color, this.userData.readMode.size);
      this.ready = true;
    });
  }

  public async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: TextPopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'custom-popover',
      componentProps: {
        isCheckedDay: true,
        isCheckedNormal: true
      }
    });
    return await popover.present();
  }

  public getColorClass(): string {
    if (this.ready) {
      return this.userData.readMode.color === READ_MODE.DAY ? 'day' : 'night';
    }
    return '';
  }

  public getSizeClass(): string {
    if (this.ready) {
      return this.userData.readMode.size === READ_MODE.NORMAL ? 'normal' : 'big';
    }
    return '';
  }

  public ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
