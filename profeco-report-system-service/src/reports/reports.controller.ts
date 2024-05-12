import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ReportsService } from './reports.service';
import { CreateReportDto, FindReportById, FindReportsByMarketDto, ReportsList } from './types';
import { Reports } from './schemas/report.schema';

@Controller()
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @GrpcMethod('ReportService','CreateReport')
  createReport(data:CreateReportDto):Promise<Reports>{
    console.log("[X] Creating Report")
    const report = this.reportsService.create(data);
    return report;
  }

  @GrpcMethod('ReportService','FindReportsByMarket')
  findReportsByMarketId(data:FindReportsByMarketDto):Promise<ReportsList>{
    console.log("[X] Getting Reports")
    return this.reportsService.findReportByMarketId(data);
  }

  @GrpcMethod('ReportService','GetReportById')
  getReportById(data:FindReportById):Promise<Reports>{
    console.log("[X] Getting Report")
    return this.reportsService.getReportById(data);
  }
}
