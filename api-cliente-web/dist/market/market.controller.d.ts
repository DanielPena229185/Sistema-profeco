import { MarketService } from './market.service';
import { GetMarketsDTO } from './input-dto/get-markets-query.dto';
export declare class MarketController {
    private readonly marketService;
    constructor(marketService: MarketService);
    getMarkets(query: GetMarketsDTO): Promise<import("src/microservices/market.interface").GetAllMarketsResponse>;
}
