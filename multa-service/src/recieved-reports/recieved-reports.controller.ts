import { Body, Controller, Post } from '@nestjs/common';
import { RecievedReportsService } from './recieved-reports.service';
import { RecievedReportDTO } from './types';

@Controller('recieved-reports')
export class RecievedReportsController {
    constructor(
        private readonly rrService:RecievedReportsService
    ){}

    @Post()
    async create(@Body() rr:RecievedReportDTO){
        return await this.rrService.create(rr);
    }
}
