import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MarketDTO,
  MarketOptionDTO,
  ProductDTO,
  ProductOptionDTO,
} from './report-market-form.types';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-report-market-form',
  templateUrl: './report-market-form.component.html',
  styleUrls: ['./report-market-form.component.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonSelect,
    IonSelectOption,
  ],
})
export class ReportMarketFormComponent implements OnInit {

  @Input() marketId: string;
  isEspecificReport: boolean;
  notAvaliableOption: string = 'Opción no disponible';
  marketsOptions: MarketOptionDTO[] = [];
  productsOptions: ProductOptionDTO[] = [];
  marketSelected: MarketDTO;
  productSelected: ProductDTO;
  reportForm: FormGroup;
  defaultMarketOption: string;
  defaultProductOption: string;

  constructor() {}

  ngOnInit() {
    this.initParams();
  }

  initParams() {
    this.checkIsEspecificReport();
    if (this.isEspecificReport) {
      this.defaultMarketOption = this.marketId;
      this.defaultProductOption = this.notAvaliableOption;
      this.getMarketByMarketId(this.marketId);
      this.getProductOptions(this.marketId);
      this.createFormEspecificReport(this.marketSelected);
    }
    if (!this.isEspecificReport) {
      this.defaultMarketOption = this.notAvaliableOption;
      this.defaultProductOption = this.notAvaliableOption;
      this.getMarketOptions();
      this.createFormGeneralReport();
    }
  }

  createFormEspecificReport(market: MarketDTO) {
    this.reportForm = new FormGroup({
      selectMarket: new FormControl(Validators.required),
      selectProduct: new FormControl(Validators.required),
      reportContent: new FormControl(Validators.required
      ),
    });
  }

  createFormGeneralReport() {
    this.reportForm = new FormGroup({
      selectMarket: new FormControl(
        {
          value: this.notAvaliableOption,
          disabled: false,
        },
        Validators.required
      ),
      selectProduct: new FormControl(
        {
          value: this.notAvaliableOption,
          disabled: true,
        },
        Validators.required
      ),
      reportContent: new FormControl(
        {
          value: this.notAvaliableOption,
          disabled: this.productSelected ? false : true,
        },
        Validators.required
      ),
    });
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

  onSelectedProduct(event: any) {
    const productId = event.target.value;
    if (productId !== this.notAvaliableOption) {
      this.getProductByProductId(productId);
    }
  }

  onSelectedMarket(event: any) {
    const marketId = event.target.value;
    if (marketId !== this.notAvaliableOption) {
      this.getProductOptions(marketId);
    }
    if (marketId === this.notAvaliableOption) {
      this.productsOptions = [];
    }
  }

  checkIsEspecificReport() {
    if (this.marketId) {
      console.log('isEspecificReport');
      this.isEspecificReport = true;
    } else {
      this.isEspecificReport = false;
    }
  }

  getMarketOptions() {
    this.marketsOptions = [
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

  getMarketByMarketId(marketId: string) {
    switch (marketId) {
      case '1':
        this.marketSelected = {
          id: '1',
          name: 'Market 1',
          address: 'Address 1',
          urlImg: 'urlImg1',
        };
        break;
      default:
        this.marketSelected = {
          id: '2',
          name: 'Market 2',
          address: 'Address 2',
          urlImg: 'urlImg2',
        };
        break;
    }
  }

  getProductByProductId(productId: string) {
    switch (productId) {
      case '1':
        this.productSelected = {
          id: '1',
          name: 'Product 1',
          urlImg: 'urlImg1',
          detail: 'Detail 1',
        };
        break;
      default:
        this.productSelected = {
          id: '2',
          name: 'Product 2',
          urlImg: 'urlImg2',
          detail: 'Detail 2',
        };
        break;
    }
  }

  getProductOptions(marketId: string) {
    switch (marketId) {
      case '1':
        this.productsOptions = [
          {
            id: '1',
            name: 'Product 1',
          },
          {
            id: '2',
            name: 'Product 2',
          },
          {
            id: '3',
            name: 'Product 3',
          },
        ];
        break;
      default:
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
        break;
    }
  }
}
