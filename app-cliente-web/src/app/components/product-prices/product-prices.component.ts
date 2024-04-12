import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProductDTO } from './product-prices.types';
import { PriceItemComponent } from '../price-item/price-item.component';

@Component({
  selector: 'app-product-prices',
  standalone: true,
  imports: [CommonModule, PriceItemComponent],
  templateUrl: './product-prices.component.html',
  styleUrl: './product-prices.component.css',
})
export class ProductPricesComponent {
  showLoading: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<ProductPricesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDTO
  ) {
    this.showLoading = false;
  }

  close() {
    this.dialogRef.close(this);
  }

  nothing() {}
}
