import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { MultaDTO } from './types';
import { ReportsService } from 'src/reports/reports.service';

@Injectable()
export class RabbitService {

    constructor(
        private readonly reportServide:ReportsService,
    ){}
    
    @RabbitSubscribe({
        exchange: 'notifier',
        routingKey: 'multas-route',
        queue: 'multas-queue',
    })
    async multaHandler(multa:MultaDTO){
        console.log(`[X] Multa Message Recieved: ${JSON.stringify(multa)}`);
        this.reportServide.updateReportToAttended(multa);
    }
}
