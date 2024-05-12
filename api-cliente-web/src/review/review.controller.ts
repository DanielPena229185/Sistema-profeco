import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReviewService } from './review.service';
import {
  CreateReviewRequest,
  GetMarketReviewsRequest,
  Review,
} from './review.types';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  createReview(@Body() review: CreateReviewRequest): Promise<Review> {
    return this.reviewService.createReview(review);
  }

  @Get()
  getReviews(@Query() query: GetMarketReviewsRequest): Promise<Review[]> {
    return this.reviewService.getReviews(query);
  }
}
