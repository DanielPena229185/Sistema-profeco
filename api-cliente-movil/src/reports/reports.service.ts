import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateReportDto,Report } from './types';
import { Observable } from 'rxjs';

@Injectable()
export class ReportsService implements OnModuleInit {
    private reportsService;
    constructor(@Inject('REPORTS_SERVICE') private client:ClientGrpc){}

    onModuleInit() {
        this.reportsService = this.client.getService('ReportService')
    }

    async createReport(createReportDto:CreateReportDto):Promise<Report>{
        const $report:Observable<Report> = this.reportsService.CreateReport(createReportDto);
        const report:Report = await $report.toPromise();
        return report;
    }
}
