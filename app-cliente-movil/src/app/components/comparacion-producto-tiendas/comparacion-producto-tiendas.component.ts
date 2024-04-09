import { Component, OnInit } from '@angular/core';
import {
  PriceDTO,
  ProductDTO,
  ProductInfoDTO,
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
  ModalController, IonSkeletonText, IonListHeader } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { DineroFormatoPipe } from './pipes/dinero-formato/dinero-formato.pipe';
import { ComparacionProductosTiendasService } from './comparacion-productos-tiendas.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-comparacion-producto-tiendas',
  templateUrl: './comparacion-producto-tiendas.component.html',
  styleUrls: ['./comparacion-producto-tiendas.component.scss'],
  standalone: true,
  imports: [IonListHeader, IonSkeletonText, 
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
  product: ProductDTO;
  prices: PriceDTO[];

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly comparacionProductoTiendas: ComparacionProductosTiendasService,
    private readonly loadingCtrl: LoadingController,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.getProductById(this.productoId);
  }
  
  closeModal() {
    this.modalCtrl.dismiss();
  }

  async showLoading(): Promise<any>{
    const loading = await this.loadingCtrl.create({
      message: 'Cargando precios',
      cssClass: 'spinner',
      translucent: true
    });
    loading.present();
    return loading;
  }

  getProductById(productId: string) {
    this.showLoading().then((loading) => {
      this.comparacionProductoTiendas.getProductInfoByProductId(productId).subscribe({
        next: ((productInfo: ProductInfoDTO) => {
          this.product = productInfo.product;
          this.prices = productInfo.prices;
          loading.dismiss();
        }),
        error: ((error) => {
          this.notificationService.presentToast('Ocurrio un error al cargar los precios', 'danger')
          loading.dismiss();
        })
      })
    })
  }
}
