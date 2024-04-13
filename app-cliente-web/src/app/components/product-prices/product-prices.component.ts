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
  items: { itemNumber: number, price: number, nombreTienda: string }[] = [
    { itemNumber: 1, price: 75, nombreTienda: 'Tienda A' },
    { itemNumber: 2, price: 90, nombreTienda: 'Tienda B' },
    { itemNumber: 3, price: 105, nombreTienda: 'Tienda C' },
    { itemNumber: 4, price: 110, nombreTienda: 'Tienda D' },
    { itemNumber: 5, price: 115, nombreTienda: 'Tienda E' },
    { itemNumber: 6, price: 115, nombreTienda: 'Tienda F' },
    { itemNumber: 7, price: 115, nombreTienda: 'Tienda G' },
    { itemNumber: 8, price: 115, nombreTienda: 'Tienda H' },
    { itemNumber: 9, price: 115, nombreTienda: 'Tienda I' },
  ];
  constructor(
    public dialogRef: MatDialogRef<ProductPricesComponent>,
    @Inject(MAT_DIALOG_DATA) public product: ProductDTO
  ) {
    this.showLoading = false;
  }

  close() {
    this.dialogRef.close(this);
  }

  nothing() {}

  shouldAddClass(): boolean {
    return this.items.length > 4;
  }
}
