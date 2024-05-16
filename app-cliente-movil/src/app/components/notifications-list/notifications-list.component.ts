import { Component, Input, OnInit } from '@angular/core';
import { DealDTO } from './notifications.types';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { closeOutline, mailOpenOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
    CommonModule,
  ]
  
})
export class NotificationsListComponent  implements OnInit {
  @Input() dealsList:DealDTO[];
  constructor(
    private readonly modalController: ModalController,
  ) {
    addIcons({closeOutline,mailOpenOutline});
  }

  ngOnInit() {
    this.initDeals();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  private initDeals(){
    this.dealsList=[
      {
        id:'1',
        date:'Martes 21 2020',
        description: 'Descuento de arroz de 20 pesos a solo 20 pesos y solamente asi ser por el resto del dia',
        market:{
          id: '1',
          name:'market_name',
          img:'https://thelogisticsworld.com/wp-content/uploads/2023/04/walmart-2.jpg'
        },
        oldPrice: 20,
        newPrice: 20,
        product:{
          id:'1',
          name:'Arroz',
          img:'https://www.costco.com.mx/medias/sys_master/products/hbc/h81/114806758735902.jpg'
        }
      },
      {
        id:'1',
        date:'Martes 21 2020',
        description: 'Arroz blanco de grano largo.',
        market:{
          id: '1',
          name:'market_name',
          img:'https://thelogisticsworld.com/wp-content/uploads/2023/04/walmart-2.jpg'
        },
        oldPrice: 20,
        newPrice: 20,
        product:{
          id:'1',
          name:'product_name',
          img:'https://www.costco.com.mx/medias/sys_master/products/hbc/h81/114806758735902.jpg'
        }
      },
    ]
  }
}
