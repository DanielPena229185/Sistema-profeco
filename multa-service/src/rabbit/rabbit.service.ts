import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { RecievedReportDTO } from './types';
import { RecievedReportsService } from 'src/recieved-reports/recieved-reports.service';

@Injectable()
export class RabbitService {
    constructor(
        private readonly rrService:RecievedReportsService
    ){}

    @RabbitSubscribe({
        exchange: 'notifier',
        //routingKey: 'reports-route',
        routingKey: '',
        queue: 'reports-queue',
    })
    async reportsHandler(report:RecievedReportDTO){
        console.log(`[X] Report recieved: ${JSON.stringify(report)}`);
        this.rrService.create(report);
    } 
}
