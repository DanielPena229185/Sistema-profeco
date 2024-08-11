import { Injectable } from '@nestjs/common';
import { CreateReportDto,FindReportById,FindReportsByMarketDto,RecievedReportDTO,ReportsList } from './types';
import { InjectModel } from '@nestjs/mongoose';
import { Reports, Status } from './schemas/report.schema';
import { Model } from 'mongoose';
import {
  GrpcNotFoundException,
  GrpcInvalidArgumentException,
} from "nestjs-grpc-exceptions";
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { MultaDTO, MultasReport } from 'src/rabbit/types';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Reports.name) private reportsModel:Model<Reports>,
    private readonly amqpConnection:AmqpConnection,
){}

  async updateReportToAttended(multa:MultaDTO){
    multa.reports.forEach(async (report:MultasReport)=>{
      const reportFound:Reports = await this.reportsModel.findById(report.id);
      reportFound.dateAttended = new Date().toString();
      reportFound.status = Status.ATTENDED;
      const reportUpdated = new this.reportsModel(reportFound);
      reportUpdated.save();
    });
  }

  async create(createReportDto:CreateReportDto):Promise<Reports>{
    if(!createReportDto.market || !createReportDto.product || !createReportDto.user || !createReportDto.reason){
      throw new GrpcInvalidArgumentException("empty params");
    }
    const report:Reports = {
      reason: createReportDto.reason,
      status: Status.UNATTENDED,
      user: createReportDto.user,
      market: createReportDto.market,
      product: createReportDto.product
    }
    const createdReport = new this.reportsModel(report);
    const savedReport = await createdReport.save();
    this.sendReportRabbit(savedReport);
    return savedReport;
  }
  async sendReportRabbit(report){
    const reportRecieved:RecievedReportDTO ={
      idMarket:report.market.id,
      report: {
          id:report._id,
          reason:report.reason,
          product:{
              id:report.product.id,
              name: report.product.name,
              urlImg: report.product.urlImg
          }
      }
  }
    await this.amqpConnection.publish('notifier','reports-route',reportRecieved);
    console.log(`[X] Message published ${reportRecieved}`);
  }
  
async findReportByMarketId(data:FindReportsByMarketDto):Promise<ReportsList>{

  if(!data.id || !data.limit || !data.page){
    throw new GrpcInvalidArgumentException("empty params");
  }
  const query = {'market.id':data.id};

  const reports:Array<Reports> = await this.reportsModel
    .find(query)
    .skip((data.page-1)*data.limit)
    .limit(data.limit)
    .exec();
  const reportes:ReportsList = {
    reports: reports
  };
    return reportes;
}

async getReportById(data:FindReportById):Promise<Reports>{
  if(!data.id){
    throw new GrpcInvalidArgumentException("empty params");
  }

  const report:Reports = await this.reportsModel.findById(data.id);
  return report;
}
}
