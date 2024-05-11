export interface MarketDTO{
    id: string;
    name: string;
    urlImg: string;
    address: string;
}

export interface MarketSearchParamsDTO{
    fields: string;
    relations: string;
}
