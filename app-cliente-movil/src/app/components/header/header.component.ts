import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {IonicModule,ModalController} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { notificationsOutline} from 'ionicons/icons';
import { NotificationsListComponent } from '../notifications-list/notifications-list.component';
import { DealDTO } from './header.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HeaderComponent implements OnInit {
  private dealsList:DealDTO[] =[];
  constructor(
    private readonly modalController: ModalController,
  ) {
    addIcons({notificationsOutline});
  }

  ngOnInit() {}

  async goToNotifications(){
    const modal = await this.modalController.create({
      component:NotificationsListComponent,
      componentProps:{
        dealsList:this.dealsList
      }
    });
    modal.present();
  }
}
