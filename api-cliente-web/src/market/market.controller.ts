import { Controller, Get } from '@nestjs/common';
import { MarketService } from './market.service';
import { GetMarketsQueryDTO } from './decorators/get-markets.dto';
import { GetMarketsDTO } from './input-dto/get-markets-query.dto';
import { GetAllMarketsRequest } from 'src/microservices/market.interface';

@Controller('market')
export class MarketController {

  constructor(private readonly marketService: MarketService) {}

  @Get()
  getMarkets(@GetMarketsQueryDTO() query: GetMarketsDTO){
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
}
