import { Controller, Get, Param, Query } from '@nestjs/common';
import { DealService } from './deal.service';
import { GetDealByIdRequest, GetDealsRequest } from './deal.types';
import { Deal, DealsDAO } from 'src/utils/persistencia/deal.dao';
import { GetDealsDTO } from './output/get-deals.dto';
import { Market, MarketDAO } from 'src/utils/persistencia/merket.dao';
import { Product, ProductDAO } from 'src/utils/persistencia/products.dao';

@Controller('deal')
export class DealController {
  constructor(
    private readonly dealService: DealService,
    private readonly dealDAO: DealsDAO,
    private readonly marketDAO: MarketDAO,
    private readonly productDAO: ProductDAO
  ) { }

  @Get()
  async getDeals(@Query() params: GetDealsRequest): Promise<GetDealsDTO[]> {
    const deals: Deal[] = this.dealDAO.getAllDeals(params.page, params.count);
    const ids = deals.map(deal => deal.market.id);
    const markets: Market[] = this.marketDAO.getMarketsByIds(ids);
    const products: Product[] = this.productDAO.getProductsByIds(ids);
    const dealsDTO: GetDealsDTO[] = deals.map(deal => {
      const market: Market = markets.find(market => market.id === deal.market.id);
      const product: Product = products.find(product => product.id === deal.product.id);
      const currentPrice = this.productDAO.getPriceByProductIdAndMarketId(product.id, market.id);
      const dealDTO: GetDealsDTO = {
        id: deal.id,
        product: {
          id: product.id,
          name: product.name,
          img: product.imageUrl
        },
        market: {
          id: market.id,
          name: market.name,
          img: market.urlImg
        },
        oldPrice: currentPrice,
        newPrice: deal.price,
        date: this.formatDate(deal.date),
        description: deal.description
      };
      return dealDTO;
    });
    return dealsDTO;
    // return this.dealService.getDeals(params);
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

  @Get(':id')
  async getDealById(@Param() getDeal: GetDealByIdRequest): Promise<Deal> {
    return this.dealService.getDealById(getDeal);
  }
}
