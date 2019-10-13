import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalComponent } from './../image-modal/image-modal.component';

@Component({
  selector: 'app-gallery-popover',
  templateUrl: 'gallery-popover.component.html',
  styleUrls: ['gallery-popover.component.scss']
})
export class GalleryPopoverComponent {
  public sliderOpts = {
    zoom: false,
    slidesPerView: 1.5
    // centeredSlides: true
    // spaceBetween: 20
  };

  constructor(private readonly modalCtrl: ModalController) {}

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
