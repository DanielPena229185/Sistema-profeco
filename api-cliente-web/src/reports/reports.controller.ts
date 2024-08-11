import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto, Report } from './reports.type';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  @UseInterceptors(GrpcToHttpInterceptor)
  async createReport(@Body() data: CreateReportDto): Promise<Report> {
    return this.reportsService.createReport(data);
  }
}
