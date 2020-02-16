import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { READ_MODE } from '@constants/index';
import { ModalController, PopoverController } from '@ionic/angular';
import { CustomImage, User } from '@models/index';
import { StorageService, UserService } from '@services/index';
import { Subscription } from 'rxjs';
import { BibliographyModalComponent } from '../bibliography-modal/bibliography-modal.component';
import { GalleryPopoverComponent } from '../gallery-popover/gallery-popover.component';
import { TextPopoverComponent } from '../text-popover/text-popover.component';

@Component({
  selector: 'app-text-formatted',
  templateUrl: './text-formatted.component.html',
  styleUrls: ['./text-formatted.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextFormattedComponent implements OnInit, OnDestroy {
  @Input() public textAsHtml: string;
  @Input() public articleImages: CustomImage[];
  @Input() public bibliography: string[];

  private userSubscription: Subscription;
  private userData: User;
  private checkedColorValue = READ_MODE.DAY;
  private checkedSizeValue = READ_MODE.NORMAL;

  constructor(
    public readonly popoverController: PopoverController,
    private readonly userService: UserService,
    private readonly storageService: StorageService,
    private readonly modalController: ModalController
  ) {}

  public ngOnInit(): void {
    this.userSubscription = this.userService
      .getUser()
      .subscribe((userData: User) => {
        this.userData = userData;
        this.storageService.setReadMode(
          this.userData.readMode.color,
          this.userData.readMode.size
        );
        this.checkedColorValue = this.userData.readMode.color;
        this.checkedSizeValue = this.userData.readMode.size;
      });

    this.storageService.getReadModeColor().then(value => {
      if (value != null) {
        this.checkedColorValue = value;
      }
    });

    this.storageService.getReadModeSize().then(value => {
      if (value != null) {
        this.checkedSizeValue = value;
      }
    });
  }

  public async presentReadModePopover(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: TextPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        checkedColorValue: this.checkedColorValue,
        checkedSizeValue: this.checkedSizeValue,
      },
    });
    await popover.present();
  }

  public async presentGalleryPopover(ev: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: GalleryPopoverComponent,
      event: ev,
      translucent: true,
      cssClass: 'gallery-popover',
      componentProps: {
        articleImages: this.articleImages,
      },
    });
    await popover.present();
  }

  public getColorClass(): string {
    return this.checkedColorValue;
  }

  public getSizeClass(): string {
    return this.checkedSizeValue;
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  public async presentBibliographyModal(): Promise<void> {
    const modalOptions = {
      component: BibliographyModalComponent,
      cssClass: 'bibliography-modal',
      componentProps: {
        data: this.bibliography,
      },
    };
    const modal = await this.modalController.create(modalOptions);
    await modal.present();
  }
}
