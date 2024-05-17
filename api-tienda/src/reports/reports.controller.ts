import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportList } from './reports.type';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  @UseInterceptors(GrpcToHttpInterceptor)
  async FindReportsByMarket(@Query() data): Promise<ReportList> {
    console.log(data);
    return this.reportsService.FindReportsByMarket(data);
  }
}
