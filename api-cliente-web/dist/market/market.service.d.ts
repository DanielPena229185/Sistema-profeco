import { OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { GetAllMarketsRequest, GetAllMarketsResponse } from 'src/microservices/market.interface';
export declare class MarketService implements OnModuleInit {
    private client;
    private marketService;
    constructor(client: ClientGrpc);
    onModuleInit(): void;
    getAllMarkets(getAllMarketsRequest: GetAllMarketsRequest): Promise<GetAllMarketsResponse>;
}
