import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ModalController,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonButton,
  IonList,
  IonItem,
  IonPopover, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { MarketDTO, searchParamsDTO } from './markets.types';
import { ReportMarketFormComponent } from '../components/report-market-form/report-market-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MarketsService } from './markets.service';
import { MarketReviewComponent } from '../components/market-review/market-review.component';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.page.html',
  styleUrls: ['./markets.page.scss'],
  standalone: true,
  imports: [IonIcon, 
    IonPopover,
    IonItem,
    IonList,
    IonButton,
    IonGrid,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCol,
    IonRow,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    HttpClientModule,
  ],
  providers: [MarketsService],
})
export class MarketsPage implements OnInit {

  markets: MarketDTO[] = [];
  searchParams: searchParamsDTO;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly marketsService: MarketsService
  ) {}

  ngOnInit() {
    this.initSearchParams();
    this.getMarkets(this.searchParams);
  }

  getMarkets(searchParams: searchParamsDTO) {
    this.marketsService.getMarkets(searchParams).subscribe({
      next: (response: MarketDTO[]) => {
        Array.prototype.push.apply(this.markets, response);
      }
    })
  }

  initSearchParams() {
    this.searchParams = {
      page: 0,
      count: 10,
      fields: 'id,name,address,urlImage',
      relations: '',
      exclusive: false,
      name: '',
      address: '',
    };
  }

  async openReportMarket(marketId: string) {
    const modal = await this.modalCtrl.create({
      component: ReportMarketFormComponent,
      componentProps: {
        marketId,
      },
    });
    modal.present();
  }

  async openReviewMarket(marketId: string) {
    const modal = await this.modalCtrl.create({
      component: MarketReviewComponent,
      componentProps: {
        marketId,
      },
    });
    modal.present();
  }
}
