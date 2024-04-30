import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastController: ToastController
  ) { }

  async presentToast(message: string, color: string = 'success', time: number = 2000){
    const toast = await this.toastController.create({
      message: message,
      duration: time,
      color: color,
      position: 'bottom',
    });
    await toast.present();
  }
}
