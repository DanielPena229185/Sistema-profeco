export interface MarketDTO {
    id: string;
    name: string;
    address: string;
    urlImg: string;
}

export interface SearchParamsDTO {
    fields: string;
    relations: string;
    page: number;
    limit: number;
    name: string;
    address: string;
}