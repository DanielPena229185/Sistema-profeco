import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDTO, ProductsDTO } from './products.types';
import { FormGroup } from '@angular/forms';
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
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../components/header/header.component';
import { ProductPricesComponent } from '../components/product-prices/product-prices.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
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
    HttpClientModule,
    IonGrid,
  ],
  providers: [ProductsService],
})
export class ProductsPage implements OnInit {
  productos: ProductDTO[] = [];

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly productsService: ProductsService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.getProducts();
      event.target.complete();
    }, 2000);
  }

  private getProducts() {
    this.productsService.getProducts().subscribe({
      next: (response: ProductsDTO) => {
        Array.prototype.push.apply(this.productos, response.product);
      },
      error: (error) => {},
    });
  }

  async abrirCompararProducto(productId: string) {
    const modal = await this.modalCtrl.create({
      component: ProductPricesComponent,
      componentProps: {
        productId: productId,
      },
    });
    modal.present();
  }
}
