import { InterceptingListenerImpl } from "@grpc/grpc-js/build/src/call-interface";

export interface Empty{}
export interface CreateReportDto{
    user:User;
    market:Market;
    product:Product;
}

export interface Report{
    id:string;
    status:Status;
    date_attended:Date;
    user?:User;
    market?:Market;
    product?:Product
}

export enum Status{
    ATTENDED,
    UNATTENDED
}

interface User{
    id:string;
    names:string;
    lastnames:string;
    email:string;
}

interface Market{
    id:string;
    name:string;
    url_img:string;
}

interface Product{
    id:string;
    brand:string
    name:string;
    url_img:string;
}