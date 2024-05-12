import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  GetMarketByIdRequest,
  GetMarketByIdResponse,
  MarketEntity,
} from './market.types';
import { Observable } from 'rxjs';

@Injectable()
export class MarketService {
  private marketService;

  constructor(@Inject('MARKET_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.marketService = this.client.getService('Market');
  }

  async getMarketById(
    getMarketByIdRequest: GetMarketByIdRequest,
  ): Promise<MarketEntity> {
    const response: Observable<GetMarketByIdResponse> =
      this.marketService.GetMarketById(getMarketByIdRequest);
    const marketResponse: GetMarketByIdResponse = await response.toPromise();
    return marketResponse.market;
  }
}
