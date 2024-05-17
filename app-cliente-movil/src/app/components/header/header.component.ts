import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {IonicModule,ModalController} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { notificationsOutline} from 'ionicons/icons';
import { NotificationsListComponent } from '../notifications-list/notifications-list.component';
import { DealDTO } from './header.types';
import { Router } from '@angular/router';
import { Client } from '@stomp/stompjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HeaderComponent implements OnInit {
  private client:Client;
  constructor(
    private readonly router: Router, 
  ) {
    addIcons({notificationsOutline});
  }

  ngOnInit() {
    this.client = new Client({
      brokerURL: 'ws://localhost:15674/ws',
      onConnect:()=>{
        this.client.subscribe('/topic/reports-queue',(message)=>{
          console.log(`Recieved ${message.body}`)
        });
        this.client.publish({destination:'/topic/reports-queue',body:JSON.stringify('Message')});
      }
    });
    this.client.activate();
  }

  async goToNotifications(){
    this.router.navigate(["/posts"]);
  }
}
