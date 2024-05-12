export interface MultaDTO{
    id?:string;
    idMarket:string;
    reports:MultasReport[];
}

export interface MultasReport{
    id:string;
    reason:string;
    product:Product;        
}

interface Product{
    id:string;
    name:string;
    urlImg:string;
}