import { Controller, Get, Param, Query } from '@nestjs/common';
import { DealService } from './deal.service';
import { Deal, GetDealByIdRequest, GetDealsRequest } from './deal.types';

@Controller('deal')
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Get()
  getDeals(@Query() params: GetDealsRequest): Promise<Deal[]> {
    return this.dealService.getDeals(params);
  }

  @Get(':id')
  getDealById(@Param() getDeal: GetDealByIdRequest): Promise<Deal> {
    return this.dealService.getDealById(getDeal);
  }
}
