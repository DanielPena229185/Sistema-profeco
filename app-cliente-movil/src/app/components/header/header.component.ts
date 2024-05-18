import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {IonicModule,ModalController} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { notificationsOutline} from 'ionicons/icons';
import { DealDTO } from './header.types';
import { Router } from '@angular/router';
import { Client } from '@stomp/stompjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
  ],
})
export class HeaderComponent implements OnInit {
  private client:Client;
  cantNotifications:number = 0;
  constructor(
    private readonly router: Router, 
  ) {
    addIcons({notificationsOutline});
  }

  ngOnInit() {
    //this.cantNotifications=0;
    this.client = new Client({
      brokerURL: 'ws://localhost:15674/ws',
      onConnect:()=>{
        //En la ruta el primero es especifica el tipo de conexion si a un exchange,topic o queue
        //despues ya dependiendo de lo que pongas pon el nombre del tipo escpecificado
        //y el ultimo parametro es para el key-route
        this.client.subscribe('/exchange/notifier/',(message)=>{
          console.log(`Recieved ${message.body}`)
          this.cantNotifications++;
        });
        //this.client.publish({destination:'/exchange/notifier',body:JSON.stringify('Message')});
      }
    });
    this.client.activate();
  }

  async goToNotifications(){
    this.cantNotifications=0;
    this.router.navigate(["/posts"]);
  }
}