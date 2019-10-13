import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: 'image-modal.component.html',
  styleUrls: ['image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {
  img: any;

  @ViewChild('slider', { read: ElementRef, static: true }) slider: ElementRef;

  sliderOpts = {
    zoom: {
      maxRatio: 5
    }
  };

  constructor(private readonly navParams: NavParams, private readonly modalCtrl: ModalController) {}

  public ngOnInit(): void {
    this.img = this.navParams.get('img');
  }

  zoom(zoomIn: boolean) {
    const zoom = this.slider.nativeElement.swiper.zoom;
    if (zoomIn) {
      zoom.in();
    } else {
      zoom.out();
    }
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
