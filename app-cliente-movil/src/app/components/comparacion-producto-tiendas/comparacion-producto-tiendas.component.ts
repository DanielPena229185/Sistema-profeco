import { Component, OnInit } from '@angular/core';
import {
  ProductDTO,
  ProductoDTO,
} from './comparacion-producto-tiendas.component.types';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DineroFormatoPipe } from './pipes/dinero-formato/dinero-formato.pipe';
import { ComparacionProductosTiendasService } from './comparacion-productos-tiendas.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-comparacion-producto-tiendas',
  templateUrl: './comparacion-producto-tiendas.component.html',
  styleUrls: ['./comparacion-producto-tiendas.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonLabel,
    IonItem,
    IonThumbnail,
    IonList,
    CommonModule,
    IonChip,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    DineroFormatoPipe,
    HttpClientModule
  ],
  providers: [
    ComparacionProductosTiendasService
  ]
})
export class ComparacionProductoTiendasComponent implements OnInit {
  productoId: string;
  producto: ProductoDTO;
  product: ProductDTO;

  constructor(
    private modalCtrl: ModalController,
    private readonly comparacionProductoTiendas: ComparacionProductosTiendasService
  ) {}

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  getProductById(productId: string) {
    
  }
}
