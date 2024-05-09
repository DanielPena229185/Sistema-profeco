import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MarketReviewService } from './market-review.service';
import { MarketDTO, MarketSearchParamsDTO } from './market-review.types';
import { RatingStarComponent } from '../rating-star/rating-star.component';

@Component({
  selector: 'app-market-review',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RatingStarComponent],
  templateUrl: './market-review.component.html',
  styleUrl: './market-review.component.css',
  providers: [MarketReviewService],
})
export class MarketReviewComponent implements OnInit {
  ratingValue = 0;
  maxLenghtComment = 250;
  market: MarketDTO;
  marketId: string;
  marketSearchParams: MarketSearchParamsDTO;

  constructor(
    public dialogRef: MatDialogRef<MarketReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public market_id: string,
    private readonly marketReviewService: MarketReviewService
  ) {
    this.marketId = market_id;
  }

  ngOnInit() {
    this.initMarketSearchParams();
    this.getMarketById();
  }

  initMarketSearchParams() {
    this.marketSearchParams = {
      fields: 'id,name,urlImage,address',
      relations: '',
    };
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

  close() {
    this.dialogRef.close();
  }

  ratingChange(value: number) {
    this.ratingValue = value;
  }
}
