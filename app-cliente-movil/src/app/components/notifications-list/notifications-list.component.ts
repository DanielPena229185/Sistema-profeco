import { Component, Input, OnInit } from '@angular/core';
import { DealDTO } from './notifications.types';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
  ]
  
})
export class NotificationsListComponent  implements OnInit {
  @Input() dealsList:DealDTO[];
  constructor(
    private readonly modalController: ModalController,
  ) {
    addIcons({closeOutline});
  }

  ngOnInit() {}

  async closeModal() {
    await this.modalController.dismiss();
  }
}
