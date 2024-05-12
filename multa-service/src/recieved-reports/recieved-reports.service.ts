import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RecievedReport } from './schemas/recieved-report.schema';
import { Model } from 'mongoose';
import { RecievedReportDTO } from './types';
import { RpcException } from '@nestjs/microservices';
import { MultaService } from 'src/multa/multa.service';

@Injectable()
export class RecievedReportsService {
    constructor(
        @InjectModel(RecievedReport.name) private recievedReportModel:Model<RecievedReport>,
        private readonly multaService:MultaService
    ){}

    async create(reportRecieved:RecievedReportDTO):Promise<RecievedReport>{
        if(!reportRecieved){
            throw new RpcException("empty params");
        }
        const createdReport = new this.recievedReportModel(reportRecieved);
        const savedReport:RecievedReport = await createdReport.save();
        this.checkMultaGenerator(savedReport.idMarket);
        return savedReport;
    }

    async checkMultaGenerator(idMarket:string){
        const reportsFound:RecievedReport[]= await this.getRecievedReportsByIdMarketAndWithoutMulta(idMarket);
        if(reportsFound.length!=3){
            return null;
        }
        const multaId:string = await this.multaService.createMulta(idMarket,reportsFound);
        reportsFound.forEach((report:RecievedReport)=>{
            report.idMulta=multaId;
            const createdReport = new this.recievedReportModel(report);
            createdReport.save();
        });
    }

    async getRecievedReportsByIdMarketAndWithoutMulta(idMarket:string):Promise<RecievedReport[]>{
        if(!idMarket){
            throw new RpcException("empty params");
        }

        const query = {'idMarket':idMarket,'idMulta':null};

        const reports:RecievedReport[] = await this.recievedReportModel
        .find(query)
        .exec();
        return reports;
    }
}
