import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { on } from 'events';
import {
  Deal,
  GetDealByIdRequest,
  GetDealByIdResponse,
  GetDealsRequest,
  GetDealsResponse,
  Market,
  Product,
} from './deal.types';
import { Observable } from 'rxjs';
import { DealDTO } from './output/getDeals.dto';
import { ProductByIdRequest } from 'src/products/input/getPricesByProduct.dto';
import { ProductDTO } from 'src/products/products.types';
import {
  GetMarketByIdRequest,
  GetMarketByIdResponse,
} from 'src/market/market.types';

@Injectable()
export class DealService implements OnModuleInit {
  private dealService;
  private productsService;
  private marketService;

  constructor(
    @Inject('DEAL_SERVICE') private clientDeal: ClientGrpc,
    @Inject('PRODUCTS_SERVICE') private clientProducts: ClientGrpc,
    @Inject('MARKET_PACKAGE') private clientMarkets: ClientGrpc,
  ) {}

  onModuleInit() {
    this.dealService = this.clientDeal.getService('Deals');
    this.productsService = this.clientProducts.getService('Products');
    this.marketService = this.clientMarkets.getService('Market');
  }

  async getDeals(getDealsRequest: GetDealsRequest): Promise<DealDTO[]> {
    const response: Observable<GetDealsResponse> =
      this.dealService.GetDeals(getDealsRequest);
    const dealResponse: GetDealsResponse = await response.toPromise();
    const deals: Deal[] = dealResponse.deals;
    const dealsWithoutId: Deal[] = deals.filter(deal => deal.id !== '66471f89cb0aa77f5c44641b');
    if (deals.length === 0) {
      return [];
    }
    const dealsWithMarketAndProduct: DealDTO[] = await Promise.all(
      deals.map(async (deal: Deal) => {
        const productByIdRequest: ProductByIdRequest = {
          product_id: deal.product.id,
        };
        const $product: Observable<ProductDTO> =
          this.productsService.GetProductById(productByIdRequest);
        const product: ProductDTO = await $product.toPromise();

        const getMarketByIdRequest: GetMarketByIdRequest = {
          query: {
            marketId: deal.market.id,
            fields: 'id,name,urlImage',
            relations: '',
          },
        };
        const $market: Observable<GetMarketByIdResponse> =
          this.marketService.GetMarketById(getMarketByIdRequest);
        const market: GetMarketByIdResponse = await $market.toPromise();

        const dealDTO: DealDTO = {
          id: deal.id,
          description: deal.description,
          oldPrice: 100,
          newPrice: deal.price,
          date: deal.date.toDateString(),
          market: {
            id: market.market.id,
            name: market.market.name,
            img: market.market.urlImg,
          },
          product: {
            id: product.id,
            name: product.name,
            img: product.imageUrl,
          },
        };
        return dealDTO;
      }),
    );

    return dealsWithMarketAndProduct;
  }

  async getDealById(getDealByIdRequest: GetDealByIdRequest): Promise<Deal> {
    const response: Observable<GetDealByIdResponse> =
      this.dealService.GetDealById(getDealByIdRequest);
    const dealResponse: GetDealByIdResponse = await response.toPromise();
    return dealResponse.deal;
  }
}
