import { MarketService } from './market.service';
import { GetMarketsDTO } from './input-dto/get-markets-query.dto';
import { GetMarketByIdDTO } from './input-dto/get-market-by-id-query.dto';
export declare class MarketController {
    private readonly marketService;
    constructor(marketService: MarketService);
    getMarkets(query: GetMarketsDTO): Promise<import("./market.types").MarketEntity[]>;
    getMarketById(query: GetMarketByIdDTO, id: string): Promise<import("./market.types").MarketEntity>;
}
