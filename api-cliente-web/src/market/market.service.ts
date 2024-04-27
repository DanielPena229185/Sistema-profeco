import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { GetAllMarketsRequest, GetAllMarketsResponse, GetMarketByIdRequest, GetMarketByIdResponse, MarketEntity } from 'src/microservices/market.interface';

@Injectable()
export class MarketService implements OnModuleInit {
  
  private marketService;

  constructor(@Inject('MARKET_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.marketService = this.client.getService('Market');
  }

  async getAllMarkets(getAllMarketsRequest: GetAllMarketsRequest) : Promise<MarketEntity[]>{
    const response : Observable<GetAllMarketsResponse> = this.marketService.GetAllMarkets(getAllMarketsRequest);
    const merketResponse : GetAllMarketsResponse = await response.toPromise();
    return merketResponse.markets;
  }

  async getMarketById(getMarketByIdRequest: GetMarketByIdRequest) : Promise<MarketEntity>{
    const response : Observable<GetMarketByIdResponse> = this.marketService.GetMarketById(getMarketByIdRequest);
    const marketResponse : GetMarketByIdResponse = await response.toPromise();
    return marketResponse.market;    
  }
}
