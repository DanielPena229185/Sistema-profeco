import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductDTO } from './product-prices.types';

@Component({
  selector: 'app-product-prices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-prices.component.html',
  styleUrl: './product-prices.component.css',
})
export class ProductPricesComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductPricesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDTO
  ) {}

  close() {
    this.dialogRef.close(this);
  }

  nothing() {}
}
