import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomImage } from '@models/index';
import { HelpersService } from '@services/index';
import { ImageModalComponent } from './../image-modal/image-modal.component';

@Component({
  selector: 'app-gallery-popover',
  templateUrl: 'gallery-popover.component.html',
  styleUrls: ['gallery-popover.component.scss']
})
export class GalleryPopoverComponent {
  @Input() public articleImages: CustomImage[];

  public imageUrl: string;

  public sliderOpts = {
    zoom: false,
    slidesPerView: 1.5
    // centeredSlides: true
    // spaceBetween: 20
  };

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly helper: HelpersService
  ) {}

  public getImageUrl(url: string): string {
    return this.helper.getImageUrl(url);
  }

  public openPreview(img: any): void {
    this.modalCtrl
      .create({
        component: ImageModalComponent,
        componentProps: {
          img
        }
      })
      .then(modal => modal.present());
  }
}
