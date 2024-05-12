import { DealService } from './deal.service';
import { Deal, GetDealByIdRequest, GetDealsRequest } from './deal.types';
export declare class DealController {
    private readonly dealService;
    constructor(dealService: DealService);
    getDeals(params: GetDealsRequest): Promise<Deal[]>;
    getDealById(getDeal: GetDealByIdRequest): Promise<Deal>;
}
