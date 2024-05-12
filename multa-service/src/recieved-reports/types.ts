export interface RecievedReportDTO{
    report:Reports;
    idMarket:string;
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