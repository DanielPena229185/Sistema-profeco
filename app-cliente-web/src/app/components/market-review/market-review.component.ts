import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MarketReviewService } from './market-review.service';
import { MarketDTO, MarketSearchParamsDTO, ReviewDTO } from './market-review.types';
import { RatingStarComponent } from '../rating-star/rating-star.component';
import { FormsModule } from '@angular/forms';
import { AuthInformationService } from '../../share/services/auth-information.service';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-market-review',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RatingStarComponent,FormsModule],
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

  reviews:ReviewDTO[]=[];
  newComment:string ='';

  constructor(
    public dialogRef: MatDialogRef<MarketReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public market_id: string,
    private readonly marketReviewService: MarketReviewService,
    private readonly authInfoService:AuthInformationService,
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
    /*
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
      */
     this.marketReviewService.getReviewByMarketId(this.marketId).
     subscribe({
      next:(review:ReviewDTO[])=>{
        this.reviews = review;
        this.market = review[0].market;
      },
      error:(error)=>{
        console.log(error);
      }
     });
  }

  async postReview(){
    this.authInfoService.getUserInfo().subscribe((user:User|null)=>{
      const userReport:User = user;
      if(user){
        const review:ReviewDTO={
          rating : this.ratingValue,
          content: this.newComment,
          created_at: new Date().toISOString(),
          customer:{
            id:user.sub,
            firstName:user.given_name,
            lastName:user.family_name,
            email:user.email,
          },
          market: this.market
        }
         this.marketReviewService.postReview(review).subscribe({
          next:(res:any)=>{
            console.log(res);
          }
         });
      }
    })
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

  ratingChange(value: number) {
    this.ratingValue = value;
  }
}
