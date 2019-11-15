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
  img: CustomImage;

  public imageUrl: string;

  @ViewChild('slider', { read: ElementRef, static: false }) slider: ElementRef;

  sliderOpts = {
    zoom: {
      maxRatio: 5,
    },
  };

  constructor(
    private readonly navParams: NavParams,
    private readonly modalCtrl: ModalController,
    private readonly helper: HelpersService
  ) {}

  public ngOnInit(): void {
    this.img = this.navParams.get('img');
    this.imageUrl = this.helper.getImageUrl(this.img.url);
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
