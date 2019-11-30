import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CustomImage } from '@models/index';
import { HelpersService } from '@services/index';

@Component({
  selector: 'app-image-modal',
  templateUrl: 'image-modal.component.html',
  styleUrls: ['image-modal.component.scss'],
})
export class ImageModalComponent implements OnInit {
  private image: CustomImage;

  public imageUrl: string;

  public sliderOpts = {
    zoom: {
      maxRatio: 5,
    },
  };

  @ViewChild('slider', { read: ElementRef, static: false }) slider: ElementRef;

  constructor(
    private readonly navParams: NavParams,
    private readonly modalCtrl: ModalController,
    private readonly helper: HelpersService
  ) {}

  public ngOnInit(): void {
    this.image = this.navParams.get('img');
    this.imageUrl = this.helper.getImageUrl(this.image.url);
  }

  public zoom(zoomIn: boolean): void {
    const { zoom } = this.slider.nativeElement.swiper;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }

  public close(): void {
    this.modalCtrl.dismiss();
  }
}
