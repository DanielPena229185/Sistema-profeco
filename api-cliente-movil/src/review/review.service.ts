import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  CreateReviewRequest,
  CreateReviewResponse,
  GetMarketReviewsRequest,
  Review,
  ReviewsResponse,
} from './review.types';
import { Observable } from 'rxjs';

@Injectable()
export class ReviewService implements OnModuleInit {
  private reviewService;

  constructor(@Inject('REVIEW_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.reviewService.client.getService('Reviews');
  }

  async createReview(review: CreateReviewRequest): Promise<Review> {
    const response: Observable<CreateReviewResponse> =
      this.reviewService.CreateReview(review);
    const reviewResponse: CreateReviewResponse = await response.toPromise();
    return reviewResponse.review;
  }

  async getReviews(
    getMarketReviewsRequest: GetMarketReviewsRequest,
  ): Promise<Review[]> {
    const response: Observable<ReviewsResponse> =
      this.reviewService.GetMarketReviews(getMarketReviewsRequest);
    const reviewsResponse: ReviewsResponse = await response.toPromise();
    return reviewsResponse.reviews;
  }
}
