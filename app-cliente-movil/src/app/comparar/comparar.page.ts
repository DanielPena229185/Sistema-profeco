import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonRefresher,
  IonRefresherContent,
  IonChip,
  ModalController,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { ProductoDTO } from './comparar.types';
import { ComparacionProductoTiendasComponent } from '../components/comparacion-producto-tiendas/comparacion-producto-tiendas.component';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.page.html',
  styleUrls: ['./comparar.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    HeaderComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonRefresher,
    IonRefresherContent,
    IonChip,
  ],
})
export class CompararPage implements OnInit {
  productos: ProductoDTO[] = [];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.iniciarProductos();
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  private iniciarProductos() {
    this.productos = [
      {
        id: '001',
        nombre: 'Arroz',
        imagen: 'https://www.costco.com.mx/medias/sys_master/products/hbc/h81/114806758735902.jpg',
        detalles: 'Arroz blanco de grano largo.',
      },
      {
        id: '002',
        nombre: 'Frijoles',
        imagen: 'https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwf4f40cfe/images/product/7501071301353_A.jpg',
        detalles: 'Frijoles negros de la marca tradicional.',
      },
      {
        id: '003',
        nombre: 'Leche',
        imagen: 'https://d1zc67o3u1epb0.cloudfront.net/media/catalog/product/2/7/2716_1_2.jpg?width=265&height=390&store=default&image-type=image',
        detalles: 'Leche entera en envase de 1 litro.',
      },
      {
        id: '004',
        nombre: 'Huevo',
        imagen: 'https://chedrauimx.vtexassets.com/arquivos/ids/27977575/7501101525513_00.jpg?v=638465072267700000',
        detalles: 'Huevo blanco, tamaño grande, paquete de 12 unidades.',
      },
      {
        id: '005',
        nombre: 'Pan',
        imagen: 'https://tienda.maqs.com.mx/wp-content/uploads/2021/12/411.jpg',
        detalles: 'Pan blanco de caja, paquete de 500 gramos.',
      },
    ];
  }

  async abrirCompararProducto(productoId: string) {
    const modal = await this.modalCtrl.create({
      component: ComparacionProductoTiendasComponent,
      componentProps: {
        productoId: productoId,
      },
    });
    modal.present();
  }
}
