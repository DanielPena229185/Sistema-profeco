import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {IonicModule,ModalController} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { notificationsOutline} from 'ionicons/icons';
import { NotificationsListComponent } from '../notifications-list/notifications-list.component';
import { DealDTO } from './header.types';
import { Router } from '@angular/router';

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
    private readonly router: Router, 
  ) {
    addIcons({notificationsOutline});
  }

  ngOnInit() {}

  async goToNotifications(){
    this.router.navigate(["/posts"]);
  }
}
