import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { GetAllMarketsRequest, GetMarketByIdRequest, MarketEntity } from './market.types';
export declare class MarketService implements OnModuleInit {
    private client;
    private marketService;
    constructor(client: ClientGrpc);
    onModuleInit(): void;
    getAllMarkets(getAllMarketsRequest: GetAllMarketsRequest): Promise<MarketEntity[]>;
    getMarketById(getMarketByIdRequest: GetMarketByIdRequest): Promise<MarketEntity>;
}
