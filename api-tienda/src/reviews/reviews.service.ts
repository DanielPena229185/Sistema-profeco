import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class ReviewsService {
  private reviewsService;

  constructor(@Inject('PRODUCTS_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.reviewsService = this.client.getService('Products');
  }

  async getMarketReviews() {
    const $reviews = this.reviewsService.GetReviews({});
    const reviews = await $reviews.toPromise();
    return reviews;
  }
}
