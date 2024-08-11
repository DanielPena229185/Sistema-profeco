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

export interface ReviewDTO{
    id?:string;
    market:{
        id:string;
        name:string;
        urlImg:string;
        address:string;
    },
    customer:{
        id:string;
        firstName:string;
        lastName:string;
        email:string;
        //curp:string;
    },
    content:string;
    rating:number;
    created_at:string;
}