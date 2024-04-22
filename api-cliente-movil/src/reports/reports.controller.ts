import { Body, Controller, Post } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto, Report } from './types';

@Controller('reports')
export class ReportsController {
    constructor(
        private readonly reportsService:ReportsService,
    ){}

    @Post()
    async createReport(@Body() createReportDto:CreateReportDto):Promise<Report>{
        const report:Report = await this.reportsService.createReport(createReportDto);
        return report;
    }
}
