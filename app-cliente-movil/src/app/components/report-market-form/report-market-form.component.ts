import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import {
  IonItem,
  IonList,
  IonCol,
  IonHeader,
  IonToolbar,
  IonGrid,
  IonTitle,
  IonContent,
  IonRow,
  IonSelect,
  IonSelectOption, IonLabel } from '@ionic/angular/standalone';
import { MarketDTO, MarketOptionDTO, ProductOptionDTO, SearchParamsMarketDTO, SearchParamsMarketOptionDTO } from './report-market-form.types';
import { ReportMarketFormService } from './report-market-form.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDTO } from '../product-prices/product-prices';

@Component({
  selector: 'app-report-market-form',
  templateUrl: './report-market-form.component.html',
  styleUrls: ['./report-market-form.component.scss'],
  standalone: true,
  imports: [IonLabel, 
    IonRow,
    IonContent,
    IonTitle,
    IonGrid,
    IonToolbar,
    IonHeader,
    IonCol,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ReportMarketFormService],
})
export class ReportMarketFormComponent implements OnInit {
  //Constantes
  NO_AVAILABLE = 'No disponible';

  //Atributos
  @Input() marketId: string;
  isEspecificReport: boolean = false;
  optionMarkets: MarketOptionDTO[] = [];
  marketSelected: MarketDTO;
  optionProducts: ProductOptionDTO[] = [];
  productSelected: ProductDTO;
  searchParamsMarketOptionDTO: SearchParamsMarketOptionDTO;

  //Form
  reportForm: FormGroup;

  constructor(
    private readonly marketReportFormService: ReportMarketFormService
  ) {}

  ngOnInit() {
    this.isEspecificReport = this.checkReportType(this.marketId);
    this.createForm();
    this.initParams();
  }

  getDeafaultValue(isEspecificReport: boolean): string | number {
    if (isEspecificReport) {
      return this.marketId;
    }
    return this.NO_AVAILABLE;
  }

  createForm() {
    //Formulario de reporte
    this.reportForm = new FormGroup({
      selectMarket: new FormControl(this.NO_AVAILABLE, [
        this.mustNotBeNoAvailable(),
      ]),
      selectProduct: new FormControl(
        {
          value: this.NO_AVAILABLE,
          disabled: true,
        },
        [this.mustNotBeNoAvailable()]
      ),
      reportContent: new FormControl('', [Validators.required]),
    });
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

  initParams() {
    if (this.isEspecificReport) {
      this.initConfigEspecificReport();
      return;
    }
    this.initSearchParamsMarketOptionDTO();
    this.getMarketOptions();
  }

  initSearchParamsMarketOptionDTO() {
    this.searchParamsMarketOptionDTO = {
      page: 0,
      count: 10,
      fields: 'id,name',
      relations: '',
      exclusive: true,
      name: '',
      address: '',
    };
  }

  initConfigEspecificReport() {
    //Para reportes específicos
    this.getMarketById(this.marketId);
    //this.getProductsOptionsByMarketId(this.marketId);
  }

  checkReportType(marketId: string): boolean {
    if (marketId) {
      return true;
    }
    return false;
  }

  getMarketById(marketId: string) {
    const searchParamsMarketDTO: SearchParamsMarketDTO = {
      fields: 'id,name,urlImage,address',
      relations: '',
    };
    this.marketReportFormService
      .getMarketById(marketId, searchParamsMarketDTO)
      .subscribe({
        next: (response: MarketDTO) => {
          this.marketSelected = response;
        },
        error: (error) => {
          console.log('Error getMarketById', error);
        },
      });
  }

  getMarketOptions() {
    this.marketReportFormService.getMarketsOptions(this.searchParamsMarketOptionDTO).subscribe({
      next: (response: MarketOptionDTO[]) => {
        Array.prototype.push.apply(this.optionMarkets, response);
      },
      error: (error) => {
        console.log('Error getMarketOptions', error);
      },
    });
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
  }

  marketAvailable(marketId: string) {
    this.getMarketById(marketId);
  }
}
