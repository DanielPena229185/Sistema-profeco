import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { GetReportsByMarketDto, ReportList } from './reports.type';
import { Observable } from 'rxjs';

@Injectable()
export class ReportsService implements OnModuleInit {
  private reportsService;
  constructor(@Inject('REPORTS_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.reportsService = this.client.getService('ReportService');
  }

  async FindReportsByMarket(data: GetReportsByMarketDto): Promise<ReportList> {
    const $reports: Observable<ReportList> =
      this.reportsService.FindReportsByMarket(data);
    const reports = await $reports.toPromise();
    return reports;
  }
}
