export interface MarketOptionDTO{
    id: string;
    name: string;
}

export interface ProductOptionDTO{
    id: string;
    name: string;
}

export interface SearchParamsMarketOptionDTO{
    page: number;
    count: number;
    fields: string;
    relations: string;
    exclusive: boolean;
    name: string;
    address: string;
}

export interface MarketDTO{
    id: string;
    name: string;
    urlImg: string;
    address: string;
}

export interface SearchParamsMarketDTO{
    fields: string;
    relations: string;
}