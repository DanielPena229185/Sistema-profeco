export interface MarketDTO {
    id: string;
    name: string;
    address: string;
    urlImg: string;
}

export interface MarketOptionsDTO {
    text: string;
    color: string;
    marketOption: MarketOptions;
}

export enum MarketOptions {
    REPORT = 'report',
    ADDWISHLIST = 'addWishlist',
}