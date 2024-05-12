import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { CreateReportDto, Report } from './reports.type';
import { Observable } from 'rxjs';

@Injectable()
export class ReportsService implements OnModuleInit {
    private reportsService;
    constructor(@Inject('REPORTS_SERVICE') private client:ClientGrpc){}

    onModuleInit() {
        this.reportsService = this.client.getService('ReportService');
    }

    async createReport(data:CreateReportDto){
        const $report:Observable<Report> = this.reportsService.CreateReport(data);
        const reportCreated = await $report.toPromise();
        return reportCreated;
    }
}