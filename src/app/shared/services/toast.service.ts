import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private readonly toastController: ToastController) {}

  async presentToastError(message: string): Promise<void> {
    const toast = await this.toastController.create({
      header: '¡Error!',
      message,
      position: 'top',
      duration: 2000,
      cssClass: 'custom-toast',
      color: 'danger',
    });
    toast.present();
  }
}
