import { Controller, Get } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get(':id')
  async getMarketReviews() {
    const reviews = await this.reviewsService.getMarketReviews();
    return reviews;
  }
}
