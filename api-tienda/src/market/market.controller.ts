import { Controller, Get, Param } from '@nestjs/common';
import { MarketService } from './market.service';
import { GetMarketByIdQueryDTO } from './decorators/get-market-by-id';
import { GetMarketByIdDTO } from './input-dto/get-market-by-id-query.dto';
import { GetMarketByIdRequest } from './market.types';

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}
  @Get(':id')
  getMarketById(
    @GetMarketByIdQueryDTO() query: GetMarketByIdDTO,
    @Param('id') id: string,
  ) {
    const getMarketByIdRequest: GetMarketByIdRequest = {
      query: {
        marketId: id,
        fields: query.fields.join(','),
        relations: query.relations.join(','),
      },
    };
    return this.marketService.getMarketById(getMarketByIdRequest);
  }
}
