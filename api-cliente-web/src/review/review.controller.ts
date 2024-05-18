import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReviewService } from './review.service';
import {
  CreateReviewRequest,
  GetMarketReviewsRequest,
  Review,
} from './review.types';
import { DATA, ReviewDTO } from 'src/utils/persistencia/entidad.dao';


@Controller('review')
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
    private data:DATA
    ) {}

  @Post()
  async createReview(@Body() review: ReviewDTO): Promise<ReviewDTO> {
    //return this.reviewService.createReview(review);
    return await this.data.createReview(review);
  }

  @Get()
  async getReviews(@Query() query: GetMarketReviewsRequest): Promise<ReviewDTO[]> {
    //return this.reviewService.getReviews(query);
    return await this.data.getReviewsByMarketId(query.market_id);
  }
}
