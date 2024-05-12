import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export enum Status{
    ATTENDED = 'ATTENDED',
    UNATTENDED = 'UNATTENDED'
}

export type ReportDocument = HydratedDocument<Reports>;

@Schema()
export class Reports{

    @Prop()
    reason:string;

    @Prop({enum:Status})
    status:Status;

    @Prop({default:null})
    dateAttended?:string;

    @Prop(raw({
        id:{type:String},
        name:{type:String},
        lastname:{type:String},
        email:{type:String},
    }))
    user: User;

    @Prop(raw({
        id:{type:String},
        name:{type:String},
        urlImg:{type:String},
    }))
    market: Market;

    @Prop(raw({
        id:{type:String},
        name:{type:String},
        urlImg:{type:String},
    }))
    product: Product;
}

export const ReportSchema = SchemaFactory.createForClass(Reports);

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

