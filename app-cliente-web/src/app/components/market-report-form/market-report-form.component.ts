import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MarketDTO,
  MarketOptionDTO,
  MarketReportForm,
  ProductDTO,
  ProductOptionDTO,
} from './market-report-form.types';
import { min } from 'rxjs';

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
  productSelected: ProductDTO;
  reportForm: FormGroup;
  noOptionValue: string = '0';

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
      selectMarket: new FormControl(
        {
          value: this.isReportEspecificMarket
            ? this.marketSelected.id
            : this.noOptionValue,
          disabled: this.isReportEspecificMarket,
        },
        [Validators.required, this.mustNotSelectNoOption()]
      ),
      selectProduct: new FormControl(
        {
          value: this.noOptionValue,
          disabled: this.productsOptions.length === 0,
        },
        [Validators.required, this.mustNotSelectNoOption()]
      ),
      reportContent: new FormControl(null, [
        Validators.required,
        Validators.minLength(45),
        Validators.maxLength(250),
      ]),
    });
  }

  mustNotSelectNoOption(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === this.noOptionValue) {
        return { mustNotSelectNoOption: true };
      }
      return null;
    };
  }

  getMarketByMarketId(marketId: string) {
    this.marketSelected = {
      id: '1',
      name: 'Walmart',
      urlImage:
        'https://imgs.search.brave.com/8V3BgEYzAIQqxzPLn8tp8mJK-0r2dIAonFhi9G_q95I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZG9nL2xh/cmdlLzIwNDMzODIx/LmpwZw',
      address: 'México 15 1073, Zona Nte Comercial, 85000 Cdad. Obregón, Son.',
    };
  }

  getProductByProductId(productId: string) {
    this.productSelected = {
      id: '001',
      name: 'Arroz',
      urlImage:
        'https://www.costco.com.mx/medias/sys_master/products/hbc/h81/114806758735902.jpg',
      details: 'Arroz blanco de grano largo.',
      price: 20.5,
    };
  }

  setDataForm() {
    if (this.marketId) {
      this.getMarketByMarketId(this.marketId);
      this.getProductsOptionsByMarketId(this.marketId);
      this.isReportEspecificMarket = true;
    }
    if (!this.marketId) {
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
    if (event.target.value === '0') {
      this.marketSelected = null;
      this.productSelected = null;
      this.reportForm.get('selectProduct').setValue('0');
      this.reportForm.get('selectProduct').disable();
    }
    if (event.target.value !== '0') {
      this.getProductsOptionsByMarketId(event.target.value);
      this.getMarketByMarketId(event.target.value);
      if (this.productsOptions.length > 0) {
        this.reportForm.get('selectProduct').enable();
      }
    }
  }

  selectProductChange(event) {
    if (event.target.value === '0') {
      this.productSelected = null;
      this.reportForm.get('selectProduct').setValue('0');
    }
    if (event.target.value !== '0') {
      this.getProductByProductId(event.target.value);
    }
  }

  createReport() {
    if (this.reportForm.invalid) {
      this.reportForm.markAllAsTouched();
      return;
    }
    const report: MarketReportForm = {
      marketSelected: this.marketSelected,
      productSelected: this.productSelected,
      reportContent: this.reportContent.value,
    };
  }

  get selectMarket() {
    return this.reportForm.get('selectMarket');
  }

  get selectProduct() {
    return this.reportForm.get('selectProduct');
  }

  get reportContent() {
    return this.reportForm.get('reportContent');
  }

  close() {
    this.dialogRef.close();
  }
}
