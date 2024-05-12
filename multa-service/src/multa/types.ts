
export interface MultaDTO{
    id?:string;
    idMarket:string;
    reports:Reports[];
}

interface Reports{
    id:string;
    reason:string;
    product:Product;        
}

interface Product{
    id:string;
    name:string;
    urlImg:string;
}

export interface RecievedReportList{
    id:string;
    report:Reports;
}
