import { Controller, Get } from '@nestjs/common';
import { DealService } from './deal.service';

@Controller('deal')
export class DealController {
  constructor(private readonly productsService: DealService) {}

  @Get('create')
  async createDeal(): Promise<any> {
    const deal = await this.productsService.createDeal({});
    return deal;
  }
}
