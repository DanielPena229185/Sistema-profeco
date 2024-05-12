import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Report } from './reports.type';
import { Observable } from 'rxjs';

@Injectable()
export class ReportsService implements OnModuleInit {
  private reportsService;
  constructor(@Inject('REPORTS_SERVICE') private client: ClientGrpc) {}

  onModuleInit() {
    this.reportsService = this.client.getService('ReportService');
  }

  async FindReportsByMarket(marketId: string) {
    const $reports: Observable<Report[]> =
      this.reportsService.FindReportsByMarket({ marketId });
    const reports = await $reports.toPromise();
    return reports;
  }
}
