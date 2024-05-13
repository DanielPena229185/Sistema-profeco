import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { BusinessRuleException } from 'libs/exceptions/src';

@Injectable()
export class ReviewsService {
  private reviewsService;

  constructor(@Inject('PRODUCTS_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.reviewsService = this.client.getService('Products');
  }

  async getMarketReviews(data: string) {
    if (!data) {
      throw new BusinessRuleException('Market id empty');
    }
    const $reviews = this.reviewsService.GetMarketReviews(data);
    const reviews = await $reviews.toPromise();
    return reviews;
  }
}
