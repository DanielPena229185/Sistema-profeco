export interface MarketOption{
    actionOption: ActionOption;
    title: string;
    color: string;
}

export enum ActionOption{
    REPORT = 'report',
    ADDWISHLIST = 'add-wishlist',
}