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
  SearchParamsDTO,
} from './market-report-form.types';
import { HttpClientModule } from '@angular/common/http';
import { MarketReportFormService } from './market-report-form.service';

@Component({
  selector: 'app-market-report-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './market-report-form.component.html',
  styleUrl: './market-report-form.component.css',
  providers: [MarketReportFormService],
})
export class MarketReportFormComponent implements OnInit {

  //Constantes
  NO_AVAILABLE = 'No disponible';

  //Atributos
  marketId: string;
  isEspecificReport: boolean = false;
  optionMarkets: MarketOptionDTO[] = [];
  marketSelected: MarketDTO;
  optionProducts: ProductOptionDTO[] = [];
  productSelected: ProductDTO;

  //Form
  reportForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MarketReportFormComponent>,
    @Inject(MAT_DIALOG_DATA) public market_id: string,
    private readonly marketReportFormService: MarketReportFormService
  ) {
    this.marketId = market_id;

  }

  ngOnInit() {
    this.createForm();
    this.initParams();
  }

  createForm() {
    //Formulario de reporte
    this.reportForm = new FormGroup({
      selectMarket: new FormControl(this.NO_AVAILABLE, [this.mustNotBeNoAvailable()]),
      selectProduct: new FormControl({
        value: this.NO_AVAILABLE,
        disabled: true,
      }, [this.mustNotBeNoAvailable()]),
      reportContent: new FormControl('', [Validators.required]),
    })
  }

  //Validations
  mustNotBeNoAvailable(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === this.NO_AVAILABLE) {
        return { mustNotBeNoAvailable: true };
      }
      return null;
    };
  }

  //forms getters
  get selectMarket() {
    return this.reportForm.get('selectMarket');
  }

  get selectProduct() {
    return this.reportForm.get('selectProduct');
  }

  selectProductDisable() {
    this.selectProduct.disable();
    this.selectProduct.setValue(this.NO_AVAILABLE);
  }

  selectProductEnable() {
    this.selectProduct.enable();
    this.selectProduct.setValue(this.NO_AVAILABLE);
  }

  modifyFormControlsEspecificReport() {
    this.selectMarket.setValue(this.marketId);
    this.selectMarket.disable();
  }

  initParams() {
    this.isEspecificReport = this.checkReportType(this.marketId);
    if (this.isEspecificReport) {
      this.initConfigEspecificReport();
      return;
    }
    this.getMarketOptions();
  }

  initConfigEspecificReport() {
    //Para reportes específicos
    this.getMarketById(this.marketId);
    this.modifyFormControlsEspecificReport();
    this.getProductsOptionsByMarketId(this.marketId);
  }

  checkReportType(marketId: string): boolean {
    if (marketId) {
      return true;
    }
    return false;
  }

  getMarketById(marketId: string) {
    this.marketReportFormService.getMarketById(marketId, 'id,name,address,urlImage', '').subscribe({
      next: (response: MarketDTO) => {
        this.marketSelected = response;
      },
      error: (error) => {
        console.log('Error getMarketById', error);
      },
    });
  }

  getMarketOptions() {
    this.marketReportFormService.getMarketsOptions('id,name', '').subscribe({
      next: (response: MarketOptionDTO[]) => {
        this.optionMarkets = response;
      },
      error: (error) => {
        console.log('Error getMarketOptions', error);
      },
    });
  }

  getProductById(productId: string) {
    //TODO: Implementar
    //Ya está en el service, falta implementar en la api
  }

  getProductsOptionsByMarketId(marketId: string) {
    //TODO: Implementar
    //Ya está en el service, falta implementar en la api
    this.selectProductEnable();
  }

  //On change select market
  onChangeSelectMarket(event: any) {
    const marketId = event.target.value;
    if (marketId === this.NO_AVAILABLE) {
      this.marketNoAvailable();
      return;
    }
    this.marketAvailable(marketId);
  }

  marketNoAvailable() {
    this.optionProducts = [];
    this.marketSelected = null;
    this.selectProductDisable();
  }

  marketAvailable(marketId: string) {
    this.selectProductEnable();
    this.getMarketById(marketId);
    this.getProductsOptionsByMarketId(marketId);
  }

  //On change select product
  onChangeSelectProduct(event: any) {
    const productId = event.target.value;
    if (productId === this.NO_AVAILABLE) {
      this.productNoAvailable();
      return;
    }
    this.productAvailable(productId);
  }

  productNoAvailable() {
    this.productSelected = null;
  }

  productAvailable(productId: string) {
    this.getProductById(productId);
  }

  createReport() {
    if(this.reportForm.invalid) {
      return;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
