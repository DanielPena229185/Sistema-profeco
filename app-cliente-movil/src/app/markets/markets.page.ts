import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonButton, IonList, IonItem, IonPopover } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { MarketDTO, MarketOptions, MarketOptionsDTO } from './markets.types';
import { ReportMarketFormComponent } from '../components/report-market-form/report-market-form.component';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.page.html',
  styleUrls: ['./markets.page.scss'],
  standalone: true,
  imports: [IonPopover, IonItem, IonList, IonButton, IonGrid, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCol, IonRow, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class MarketsPage implements OnInit {

  marketOptions: MarketOptionsDTO[];
  markets: MarketDTO[];

  constructor(
    private readonly modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.getMarkets();
    this.initMarketOptions();
  }

  getMarkets() {
    this.markets = [
      {
        id: '1',
        name: 'Walmart',
        address: 'Av. Guerrero y Michoacan S/N, 85000 CIUDAD OBREGON, SONORA',
        urlImg: 'https://th.bing.com/th/id/R.cba9989d9a166fd0b5d6ccc2c6e1e0f4?rik=uszVEE8zXTWMiw&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fEmblem-Walmart.jpg&ehk=uYehZzXhw1a4kdy%2budI%2f8jlOhYVTg7BvqpZMdsw%2fRAo%3d&risl=&pid=ImgRaw&r=0'
      },
      {
        id: '2',
        name: 'Bodega Aurrera',
        address: '5 De Febrero 3300 Reforma,, 85070 Cajeme, Sonora',
        urlImg: 'https://th.bing.com/th/id/R.af77da9676b6928af3e2f6618c0ef105?rik=lW%2fm2B%2b%2ffYfnCA&riu=http%3a%2f%2fcdn.corporate.walmart.com%2f46%2fb5%2f9152b1d44bcf91bf37e4d6b4834b%2fbodega-aurrera-exterior-walmex.JPG&ehk=QZOKmuc0JtE3FgGnTdTQTVQ6x10teXNovy5olTQhVPg%3d&risl=1&pid=ImgRaw&r=0'
      }
    ];
  }

  initMarketOptions() {
    this.marketOptions = [
      {
        text: 'Report',
        color: 'danger',
        marketOption: MarketOptions.REPORT
      },
      {
        text: 'Add to Wishlist',
        color: 'primary',
        marketOption: MarketOptions.ADDWISHLIST
      }
    ];
  }

  async openReportMarket(marketId: string) {
    const modal = await this.modalCtrl.create({
      component: ReportMarketFormComponent,
      componentProps: {
        marketId
      }
    });
    modal.present();
  }

}
