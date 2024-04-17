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
import { MarketDTO, MarketOptionDTO, ProductDTO, ProductOptionDTO } from './market-report-form.types';

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
  marketOptions: MarketOptionDTO[] = [];
  productsOptions: ProductOptionDTO[] = [];
  ProductSelected: ProductDTO;
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

  // Inicialización del formulario
  initForm() {
    this.reportForm = new FormGroup({
      selectMarket: new FormControl({
        value: this.isReportEspecificMarket ? this.marketSelected.id : 0,
        disabled: this.isReportEspecificMarket,
      }, Validators.required),
      selectProduct: new FormControl({
        value: 0,
        disabled: (this.productsOptions.length === 0),
      })
    });
  }

  getMarketByMarketId(marketId: string) {
    this.marketSelected = {
      id: '1',
      name: 'Market 1',
      urlImage: 'https://www.market1.com/image',
      address: 'Address 1',
    };
  }

  setDataForm() {
    if (!this.marketId) {
      this.getMarketByMarketId(this.marketId);
      this.getProductsOptionsByMarketId(this.marketId);
      this.isReportEspecificMarket = true;
    }
    if (this.marketId) {
      this.getMarketsOptions();
      this.isReportEspecificMarket = false;
    }
  }

  getProductsOptionsByMarketId(marketId: string) {
    this.productsOptions = [
      {
        id: '1',
        name: 'Product 1',
      },
      {
        id: '2',
        name: 'Product 2',
      },
    ];
    this.reportForm.get('selectProduct').enable();
  }

  getMarketsOptions() {
    this.marketOptions = [
      {
        id: '1',
        name: 'Market 1',
      },
      {
        id: '2',
        name: 'Market 2',
      },
    ];
  }

  selectMarketChange(event) {
    console.log('Market selected: ', event.target.value);
    if(event.target.value === '0'){
      console.log('No market selected');
      this.reportForm.get('selectProduct').setValue('0');
      this.reportForm.get('selectProduct').disable();
    }
    if(event.target.value !== '0'){
      this.getProductsOptionsByMarketId(event.target.value);
    }
  }

  get selectMarket() {
    return this.reportForm.get('selectMarket');
  }

  get selectProduct() {
    return this.reportForm.get('selectProduct');
  }

  close() {
    this.dialogRef.close();
  }
}
