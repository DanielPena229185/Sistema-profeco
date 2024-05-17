import { Controller, Get, Param, Query } from '@nestjs/common';
import { DealService } from './deal.service';
import { Deal, GetDealByIdRequest, GetDealsRequest } from './deal.types';
import { DealDTO } from './output/getDeals.dto';

@Controller('deal')
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Get()
  async getDeals(@Query() params: GetDealsRequest): Promise<DealDTO[]> {
    return this.dealService.getDeals(params);
  }

  @Get(':id')
  async getDealById(@Param() getDeal: GetDealByIdRequest): Promise<Deal> {
    return this.dealService.getDealById(getDeal);
  }
}
