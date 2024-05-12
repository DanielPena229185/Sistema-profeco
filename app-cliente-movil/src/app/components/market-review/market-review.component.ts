import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  ModalController,
  IonHeader,
  IonToolbar,
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonTextarea, IonButton, IonIcon } from '@ionic/angular/standalone';
import { MarketReviewService } from './market-review.service';
import { HttpClientModule } from '@angular/common/http';
import { MarketDTO, MarketSearchParamsDTO } from './market-review.types';
import { RatingStarComponent } from '../rating-star/rating-star.component';

@Component({
  selector: 'app-market-review',
  standalone: true,
  templateUrl: './market-review.component.html',
  styleUrls: ['./market-review.component.scss'],
  imports: [IonIcon, IonButton, 
    CommonModule,
    IonTextarea,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonLabel,
    IonList,
    IonItem,
    IonContent,
    IonToolbar,
    IonHeader,
    CommonModule,
    HttpClientModule,
    RatingStarComponent
  ],
  providers: [MarketReviewService],
})
export class MarketReviewComponent implements OnInit {
  @Input() marketId: string;
  ratingValue = 0;
  maxLenghtComment = 250;
  market: MarketDTO;
  marketSearchParams: MarketSearchParamsDTO;

  constructor(
    private readonly modalCtrl: ModalController,
    private readonly marketReviewService: MarketReviewService
  ) {}

  ngOnInit() {
    this.initMarketSearchParams();
    this.getMarketById();
  }

  ratingChange(value: number) {
    this.ratingValue = value;
  }

  getMarketById() {
    this.marketReviewService
      .getMarketById(this.marketSearchParams, this.marketId)
      .subscribe({
        next: (market: MarketDTO) => {
          this.market = market;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  initMarketSearchParams() {
    this.marketSearchParams = {
      fields: 'id,name,urlImage,address',
      relations: '',
    };
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
