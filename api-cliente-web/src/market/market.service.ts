import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { GetAllMarketsRequest, GetAllMarketsResponse } from 'src/microservices/market.interface';

@Injectable()
export class MarketService implements OnModuleInit {
  
  private marketService;

  constructor(@Inject('MARKET_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.marketService = this.client.getService('Market');
  }

  async getAllMarkets(getAllMarketsRequest: GetAllMarketsRequest) : Promise<GetAllMarketsResponse>{
    const response : Observable<GetAllMarketsResponse> = this.marketService.GetAllMarkets(getAllMarketsRequest);
    const merketResponse : GetAllMarketsResponse = await response.toPromise();
    return merketResponse;
  }
}
