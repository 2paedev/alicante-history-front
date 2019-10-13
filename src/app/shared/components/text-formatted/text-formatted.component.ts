import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { User } from '@models/index';
import { UserService } from '@services/index';
import { Subscription } from 'rxjs';
import { TextPopoverComponent } from '../text-popover/text-popover.component';
import { READ_MODE } from './../../constants/global.constants';
import { StorageService } from './../../services/storage.service';
import { GalleryPopoverComponent } from './../gallery-popover/gallery-popover.component';

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

  constructor(
    public readonly popoverController: PopoverController,
    private readonly userService: UserService,
    private readonly storageService: StorageService
  ) {}

  public ngOnInit(): void {
    this.userSubscription = this.userService.getUser().subscribe((userData: User) => {
      this.userData = userData;
      this.storageService.setReadMode(this.userData.readMode.color, this.userData.readMode.size);
    });
  }

  public async presentReadModePopover(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: TextPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        isCheckedDay: this.storageService.getReadModeColor() === READ_MODE.DAY ? true : false,
        isCheckedNormal: this.storageService.getReadModeSize() === READ_MODE.NORMAL ? true : false
      }
    });
    return await popover.present();
  }

  public async presentGalleryPopover(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: GalleryPopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'gallery-popover'
    });
    return await popover.present();
  }

  public getColorClass(): string {
    return this.storageService.getReadModeColor() === READ_MODE.DAY ? 'day' : 'night';
  }

  public getSizeClass(): string {
    return this.storageService.getReadModeSize() === READ_MODE.NORMAL ? 'normal' : 'big';
  }

  public ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
