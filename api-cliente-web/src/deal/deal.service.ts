import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  Deal,
  GetDealByIdRequest,
  GetDealByIdResponse,
  GetDealsRequest,
  GetDealsResponse,
} from './deal.types';
import { Observable } from 'rxjs';

@Injectable()
export class DealService implements OnModuleInit {
  private dealService;

  constructor(@Inject('DEAL_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.dealService = this.client.getService('Deals');
  }

  async getDeals(getDealsRequest: GetDealsRequest): Promise<Deal[]> {
    const respone: Observable<GetDealsResponse> =
      this.dealService.GetDeals(getDealsRequest);
    const dealResponse: GetDealsResponse = await respone.toPromise();
    return dealResponse.deals;
  }

  async getDealById(getDealByIdRequest: GetDealByIdRequest): Promise<Deal> {
    const response: Observable<GetDealByIdResponse> =
      this.dealService.GetDealById(getDealByIdRequest);
    const dealResponse: GetDealByIdResponse = await response.toPromise();
    return dealResponse.deal;
  }
}
