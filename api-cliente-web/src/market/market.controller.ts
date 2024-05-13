import { Controller, Get, Param } from '@nestjs/common';
import { MarketService } from './market.service';
import { GetMarketsQueryDTO } from './decorators/get-markets.dto';
import { GetMarketsDTO } from './input-dto/get-markets-query.dto';
import { GetMarketByIdQueryDTO } from './decorators/get-market-by-id';
import { GetMarketByIdDTO } from './input-dto/get-market-by-id-query.dto';
import { GetAllMarketsRequest, GetMarketByIdRequest } from './market.types';

@Controller('market')
export class MarketController {

  constructor(private readonly marketService: MarketService) {}

  @Get()
  async getMarkets(@GetMarketsQueryDTO() query: GetMarketsDTO){
    const getAllMarketsRequest : GetAllMarketsRequest = {
      query: {
        paginationParams: {
          page: query.page,
          count: query.count
        },
        fields: query.fields.join(','),
        relations: query.relations.join(','),
        marketName: query.name,
        address: query.address,
        exclusive: query.isExclusive
      }
    };
    return this.marketService.getAllMarkets(getAllMarketsRequest);
  }

  @Get(':id')
  async getMarketById(@GetMarketByIdQueryDTO() query: GetMarketByIdDTO, @Param('id') id: string){
    const getMarketByIdRequest: GetMarketByIdRequest = {
      query: {
        marketId: id,
        fields: query.fields.join(','),
        relations: query.relations.join(',')
      }
    }
    return this.marketService.getMarketById(getMarketByIdRequest);
  }
}
