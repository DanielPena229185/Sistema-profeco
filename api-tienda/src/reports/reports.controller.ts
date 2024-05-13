import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Report } from './reports.type';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get(':id')
  @UseInterceptors(GrpcToHttpInterceptor)
  async FindReportsByMarket(@Param() id: string): Promise<Report[]> {
    return this.reportsService.FindReportsByMarket(id);
  }
}
