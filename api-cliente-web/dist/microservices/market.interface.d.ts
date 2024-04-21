export interface MarketService {
    getAllMarkets(getAllMarketsRequest: GetAllMarketsRequest): GetAllMarketsResponse;
    getMarketById(getMarketByIdRequest: GetMarketByIdRequest): GetMarketByIdResponse;
}
export interface PaginationParams {
    page: number;
    count: number;
}
export interface GetAllMarketsRequest {
    query: GetAllMarketsQuery;
}
export interface GetMarketByIdRequest {
    query: GetMarketByIdQuery;
}
export interface GetMarketByIdQuery {
    marketId: string;
    fields: string;
    relations: string;
}
export interface GetMarketByIdResponse {
    market: MarketEntity;
}
export interface GetAllMarketsResponse {
    markets: MarketEntity[];
}
export interface GetAllMarketsQuery {
    paginationParams: PaginationParams;
    fields: string;
    relations: string;
    marketName: string;
    address: string;
    exclusive: boolean;
}
export interface CompanyEntity {
    id: string;
    name: string;
    urlImg: string;
}
export interface MarketEntity {
    id: string;
    name: string;
    urlImg: string;
    address: string;
    company: CompanyEntity;
    createdAt: string;
    updatedAt: string;
}
