export interface MarketOption{
    actionOption: ActionOption;
    title: string;
}

export enum ActionOption{
    REPORT = 'report',
    ADDWISHLIST = 'add-wishlist',
    ADDREVIEW = 'add-review'
}

export interface MarketDTO{
    id: string;
    name: string;
    address: string;
    urlImg: string;
}