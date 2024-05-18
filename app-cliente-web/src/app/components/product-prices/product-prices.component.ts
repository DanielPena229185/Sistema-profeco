import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { PriceDTO, ProductDTO, ProductInfoDTO } from './product-prices.types';
import { PriceItemComponent } from '../price-item/price-item.component';
import {ProductPricesService} from './product-prices.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-prices',
  standalone: true,
  imports: [CommonModule, PriceItemComponent,HttpClientModule],
  templateUrl: './product-prices.component.html',
  styleUrl: './product-prices.component.css',
  providers:[ProductPricesService]
})
export class ProductPricesComponent implements OnInit {
  showLoading: boolean = true;
  product: ProductDTO;
  items: PriceDTO[];
  constructor(
    public dialogRef: MatDialogRef<ProductPricesComponent>,
    @Inject(MAT_DIALOG_DATA) public productInfo: ProductDTO,
    private readonly productPricesService:ProductPricesService
  ) {
    this.showLoading = false;
  }
  ngOnInit(): void {
      this.getProductById(this.productInfo.name);
  }

  close() {
    this.dialogRef.close(this);
  }

  nothing() {}

  shouldAddClass(): boolean {
    return this.items.length > 4;
  }

  getProductById(productId: string) {
      this.productPricesService
        .getPrices(productId)
        .subscribe({
          next: (productInfo: ProductInfoDTO) => {
            this.product = productInfo.product;
            this.items = productInfo.prices;
          },
          error: (error) => {
          },
    });
  }
}
