import { Controller, Get, Param, Post } from '@nestjs/common';
import { DealService } from './deal.service';
import {
  DealEntity,
  GetDealsByMarketRequest,
  GetDealsByMarketResponse,
} from './deal.types';

import { Body } from '@nestjs/common';

@Controller('deal')
export class DealController {
  constructor(private readonly productsService: DealService) {}

  @Post('create')
  async createDeal(@Body() deal: DealEntity): Promise<DealEntity> {
    const createdDeal = await this.productsService.createDeal(deal);
    return createdDeal;
  }

  @Get(':id')
  async getDealsByMarket(
    @Param('id') id: string,
  ): Promise<GetDealsByMarketResponse> {
    const request: GetDealsByMarketRequest = { marketId: id };
    const deals = await this.productsService.getDealsByMarket(request);
    return deals;
  }
}
