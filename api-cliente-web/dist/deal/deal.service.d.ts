import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Deal, GetDealByIdRequest, GetDealsRequest } from './deal.types';
export declare class DealService implements OnModuleInit {
    private client;
    private dealService;
    constructor(client: ClientGrpc);
    onModuleInit(): void;
    getDeals(getDealsRequest: GetDealsRequest): Promise<Deal[]>;
    getDealById(getDealByIdRequest: GetDealByIdRequest): Promise<Deal>;
}
