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
  IonSelectOption, IonLabel, IonButtons, ModalController, IonTextarea } from '@ionic/angular/standalone';
import { MarketDTO, MarketOptionDTO, ProductOptionDTO, SearchParamsMarketDTO, SearchParamsMarketOptionDTO } from './report-market-form.types';
import { ReportMarketFormService } from './report-market-form.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDTO } from 'src/app/products/products.types';

@Component({
  selector: 'app-report-market-form',
  templateUrl: './report-market-form.component.html',
  styleUrls: ['./report-market-form.component.scss'],
  standalone: true,
  imports: [IonTextarea, IonButtons, IonLabel, 
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
  NO_AVAILABLE = 'Selecciona';

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
    private readonly marketReportFormService: ReportMarketFormService,
    private readonly modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.isEspecificReport = this.checkReportType(this.marketId);
    this.createForm();
    this.initParams();
  }

  //Obtener valor por defecto para el select de mercado
  getDeafaultValueForSelectMarket(isEspecificReport: boolean): string | number {
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

  //Inicializar parámetros
  initParams() {
    if (this.isEspecificReport) {
      this.initConfigEspecificReport();
      return;
    }
    this.initSearchParamsMarketOptionDTO();
    this.getMarketOptions();
  }

  //Inicializar parámetros de búsqueda de opciones de mercados
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
    this.getProductsOptionsByMarketId(this.marketId);
  }

  //Validar tipo de reporte (específico o general)
  checkReportType(marketId: string): boolean {
    if (marketId) {
      return true;
    }
    return false;
  }

  //Obtener mercado por id
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

  //Obtener tiendas 
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

  getProductById(productId: string) {
    //TODO: Implementar
    //Ya está en el service, falta implementar en la api
    console.log('getProductById', productId);
  }

  getProductsOptionsByMarketId(marketId: string) {
    //TODO: Implementar
    //Ya está en el service, falta implementar en la api
    console.log('getProductsOptionsByMarketId', marketId);
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

  //No se selecciona mercado
  marketNoAvailable() {
    this.optionProducts = [];
    this.marketSelected = null;
  }

  //Se selecciona mercado
  marketAvailable(marketId: string) {
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

  close(){
    this.modalCtrl.dismiss();
  }
}
