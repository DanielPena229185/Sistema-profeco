import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProductDTO, PriceDTO, ProductInfoDTO } from './product-prices';
import { LoadingController, ModalController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
  IonListHeader,
  IonSkeletonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MoneyFormatterPipe } from './pipes/money-formatter/money-formatter.pipe';
import { ProductPricesService } from './product-prices.service';
import { HeaderModalComponent } from '../header-modal/header-modal.component';

@Component({
  selector: 'app-product-prices',
  templateUrl: './product-prices.component.html',
  styleUrls: ['./product-prices.component.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonSkeletonText,
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
    MoneyFormatterPipe,
    HeaderModalComponent,
    HttpClientModule,
  ],
  providers: [ProductPricesService],
})
export class ProductPricesComponent implements OnInit {
  title: string = 'Precios'
  productId: string;
  product: ProductDTO;
  prices: PriceDTO[];

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly productPricesService: ProductPricesService,
    private readonly loadingCtrl: LoadingController,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.getProductById(this.productId);
  }

  async showLoading(): Promise<any> {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando precios',
      cssClass: 'spinner',
      translucent: true,
    });
    loading.present();
    return loading;
  }

  getProductById(productId: string) {
    this.showLoading().then((loading) => {
      this.productPricesService
        .getPrices(productId)
        .subscribe({
          next: (productInfo: ProductInfoDTO) => {
            this.product = productInfo.product;
            this.prices = productInfo.prices;
            loading.dismiss();
          },
          error: (error) => {
            this.notificationService.presentToast(
              'Ocurrio un error al cargar los precios',
              'danger'
            );
            loading.dismiss();
          },
        });
    });
  }
}
