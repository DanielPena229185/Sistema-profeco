import { InterceptingListenerImpl } from "@grpc/grpc-js/build/src/call-interface";
import { Reports } from "./schemas/report.schema";

export interface FindReportById{
    id:string;
}

export interface CreateReportDto{
    reason:string;
    user:User;
    market:Market;
    product:Product;
}

export interface FindReportsByMarketDto{
    id:string;
    page:number;
    limit:number;
}

export interface ReportsList{
reports:Array<Reports>;
}

export interface Report{
    id:string;
    reason:string;
    status:Status;
    dateAttended:string;
    user:User;
    market:Market;
    product:Product
}

export enum Status{
    ATTENDED,
    UNATTENDED
}

interface User{
    id:string;
    name:string;
    lastname:string;
    email:string;
}

interface Market{
    id:string;
    name:string;
    urlImg:string;
}

interface Product{
    id:string;
    name:string;
    urlImg:string;
}

export interface RecievedReportDTO{
    report:ReportsDTO;
    idMarket:string;
}

interface ReportsDTO{
    id:string;
    reason:string;
    product:Product;        
}