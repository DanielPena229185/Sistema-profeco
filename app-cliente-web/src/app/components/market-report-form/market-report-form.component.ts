import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MarketDTO, ProductDTO } from './market-report-form.types';

@Component({
  selector: 'app-market-report-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './market-report-form.component.html',
  styleUrl: './market-report-form.component.css',
})
export class MarketReportFormComponent implements OnInit {
  @Input() marketId: string;
  isReportEspecificMarket: boolean = true;
  marketSelected: MarketDTO;
  markets: MarketDTO[];
  productSelected: ProductDTO;
  reportForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MarketReportFormComponent>,
    @Inject(MAT_DIALOG_DATA) public market_id: string
  ) {
    this.marketId = market_id;
  }

  ngOnInit() {
    this.setDataForm();
    this.initForm();
  }

  getMarketWithProductsByMarketId(marketId: string) {
    this.marketSelected = {
      id: marketId,
      name: 'Market 1',
      urlImage: 'https://url.com',
      address: 'Market 1 address',
      products: [
        {
          id: '1',
          name: 'Product 1',
          price: 100,
          urlImage: 'https://url.com',
        },
        {
          id: '2',
          name: 'Product 2',
          price: 200,
          urlImage: 'https://url.com',
        },
      ],
    };
  }

  setDataForm() {
    if (this.marketId) {
      this.getMarketWithProductsByMarketId(this.marketId);
      this.isReportEspecificMarket = true;
    }
    if (!this.marketId) {
      this.getMarketsWithProducts();
    }
  }

  getMarketsWithProducts() {
    // Get markets with products
  }

  // Inicialización del formulario
  initForm() {
    this.reportForm = new FormGroup({
      selectMarket: new FormControl({
        value: this.marketSelected ? this.marketSelected.id : null,
        disabled: this.marketSelected ? true : false,
      }),
    });
  }

  get selectMarket() {
    return this.reportForm.get('selectMarket');
  }

  close() {
    this.dialogRef.close();
  }
}
