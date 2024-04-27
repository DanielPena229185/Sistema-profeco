import { Component, Input, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonRow,
  IonGrid,
  IonCol,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonTextarea,
  IonContent,
  IonTitle,
  IonButton,
  ModalController,
} from '@ionic/angular/standalone';
import {
  MarketDTO,
  MarketOptionDTO,
  MarketReportForm,
  ProductDTO,
  ProductOptionDTO,
} from './report-market-form.types';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-report-market-form',
  templateUrl: './report-market-form.component.html',
  styleUrls: ['./report-market-form.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonTitle,
    IonContent,
    IonTextarea,
    IonLabel,
    IonItem,
    IonList,
    IonCol,
    IonGrid,
    IonRow,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonToolbar,
    IonHeader,
    IonSelect,
    IonSelectOption,
  ],
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

  //Form
  reportForm: FormGroup;

  constructor(private readonly modalCtrl: ModalController) { }

  ngOnInit() {
    this.initParams();
  }

  initParams() {
    this.isEspecificReport = this.checkReportType(this.marketId);
    if (this.isEspecificReport) {
      this.initConfigEspecificReport();
      return;
    }
    this.initConfigGeneralReport();
  }

  checkReportType(marketId: string): boolean {
    if (marketId) {
      return true;
    }
    return false;
  }

  initConfigEspecificReport() {
    this.getMarketByMarketId(this.marketId);
    this.getProductsByMarketId(this.marketId);
    this.configFormEspecificReport();
  }

  initConfigGeneralReport() {
    this.configFormGeneralReport();
    this.getMarkets();
  }

  //Configuracion del formulario
  configFormEspecificReport() {
    this.reportForm = new FormGroup({
      selectMarket: new FormControl(
        {
          value: this.marketId,
          disabled: true,
        },
        Validators.required
      ),
      selectProduct: new FormControl(
        {
          value: this.NO_AVAILABLE,
          disabled: false,
        },
        [Validators.required, this.mustNotSelectNoOption()]
      ),
      reportContent: new FormControl(null, [
        Validators.required,
        Validators.minLength(45),
        Validators.maxLength(250),
        this.noEmptyReportContent(),
      ]),
    });
  }

  configFormGeneralReport() {
    this.reportForm = new FormGroup({
      selectMarket: new FormControl(
        {
          value: this.NO_AVAILABLE,
          disabled: false,
        },
        [Validators.required, this.mustNotSelectNoOption()]
      ),
      selectProduct: new FormControl(
        {
          value: this.NO_AVAILABLE,
          disabled: true,
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

  //Metodos para obtener los controles del formulario
  get selectMarket() {
    return this.reportForm.get('selectMarket');
  }

  get selectProduct() {
    return this.reportForm.get('selectProduct');
  }

  get reportContent() {
    return this.reportForm.get('reportContent');
  }

  //Metodos para validar el formulario
  mustNotSelectNoOption(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === this.NO_AVAILABLE) {
        return { mustNotSelectNoOption: true };
      }
      return null;
    };
  }

  noEmptyReportContent(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const trimmedValue = value ? value.trim() : '';
      const characterCount = trimmedValue.replace(/\s/g, '').length;
      if (characterCount < 45) {
        return { noEmptyReportContent: true };
      }
      return null;
    };
  }

  //Metodos para obtener informacion de los mercados
  getMarketByMarketId(marketId: string) {
    switch (marketId) {
      case '1':
        this.marketSelected = {
          id: '1',
          name: 'Walmart',
          address: 'Av. Guerrero y Michoacan S/N, 85000 CIUDAD OBREGON, SONORA',
          urlImg:
            'https://th.bing.com/th/id/R.cba9989d9a166fd0b5d6ccc2c6e1e0f4?rik=uszVEE8zXTWMiw&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fEmblem-Walmart.jpg&ehk=uYehZzXhw1a4kdy%2budI%2f8jlOhYVTg7BvqpZMdsw%2fRAo%3d&risl=&pid=ImgRaw&r=0',
        };
        break;
      default:
        this.marketSelected = {
          id: '2',
          name: 'Bodega Aurrera',
          address: '5 De Febrero 3300 Reforma,, 85070 Cajeme, Sonora',
          urlImg:
            'https://th.bing.com/th/id/R.af77da9676b6928af3e2f6618c0ef105?rik=lW%2fm2B%2b%2ffYfnCA&riu=http%3a%2f%2fcdn.corporate.walmart.com%2f46%2fb5%2f9152b1d44bcf91bf37e4d6b4834b%2fbodega-aurrera-exterior-walmex.JPG&ehk=QZOKmuc0JtE3FgGnTdTQTVQ6x10teXNovy5olTQhVPg%3d&risl=1&pid=ImgRaw&r=0',
        };
        break;
    }
  }

  getMarkets() {
    this.optionMarkets = [
      {
        id: '1',
        name: 'Walmart',
      },
      {
        id: '2',
        name: 'Bodega Aurrera',
      }
    ];
  }

  //Metodos para obtener informacion de los productos
  getProductsByMarketId(marketId: string) {
    switch (marketId) {
      case '2':
        this.optionProducts = [
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
        this.optionProducts = [
          {
            id: '1',
            name: 'Arroz',
          },
          {
            id: '2',
            name: 'Frijoles',
          },
        ];
        break;
    }
  }

  getProductByProductId(productId: string) {
    switch (productId) {
      case '1':
        this.productSelected = {
          id: '1',
          name: 'Arroz',
          urlImg:
            'https://www.costco.com.mx/medias/sys_master/products/hbc/h81/114806758735902.jpg',
          detail: 'Arroz blanco de grano largo.',
        };
        break;
      default:
        this.productSelected = {
          id: '2',
          name: 'Frijoles',
          urlImg:
            'https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwf4f40cfe/images/product/7501071301353_A.jpg',
          detail: 'Frijoles negros de la marca tradicional.',
        };
        break;
    }
  }

  //Metodos para obtener la informacion del formulario
  onSelectMarketChange(event) {
    const marketId = event.target.value;
    if (marketId === this.NO_AVAILABLE) {
      this.marketNoAvailableSelected();
      return;
    }
    this.marketAvailableSelected(marketId);

  }

  onSelectProductChange(event) {
    const productId = event.target.value;
    if (productId === this.NO_AVAILABLE) {
      this.resetProductSelected();
      return;
    }
    this.getProductByProductId(productId);
  }

  resetProductSelected() {
    this.productSelected = null;
  }

  marketAvailableSelected(marketId: string) {
    this.reportForm.get('selectProduct').enable();
    this.getMarketByMarketId(marketId);
    this.getProductsByMarketId(marketId);
  }

  marketNoAvailableSelected() {
    this.reportForm.get('selectProduct').setValue(this.NO_AVAILABLE);
    this.reportForm.get('selectProduct').disable();
    this.resetProductSelected();
  }

  sendReport() {
    if (this.reportForm.invalid) {
      this.reportForm.markAllAsTouched();
      return;
    }
    const report: MarketReportForm = {
      marketSelected: this.marketSelected,
      productSelected: this.productSelected,
      reportContent: this.reportContent.value,
    };
    this.modalCtrl.dismiss();
  }
}
