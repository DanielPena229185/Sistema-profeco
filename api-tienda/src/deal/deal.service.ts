import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class DealService {
  private dealsService;
  constructor(@Inject('DEALS_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.dealsService = this.client.getService('Deals');
  }

  async createDeal(data: any): Promise<any> {
    const $deal = this.dealsService.CreateDeal(data);
    const deal = await $deal.toPromise();
    return deal;
  }

  async getDealsByMarket(data: any): Promise<any> {
    const $deals = this.dealsService.GetDealsByMarket(data);
    const deals = await $deals.toPromise();
    return deals;
  }
}
