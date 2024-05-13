import { Controller, Get, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get(':id')
  async getMarketReviews(@Param() data: string) {
    const reviews = await this.reviewsService.getMarketReviews(data);
    return reviews;
  }
}
