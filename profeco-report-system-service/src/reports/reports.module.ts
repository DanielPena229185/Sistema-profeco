import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Reports, ReportSchema} from './schemas/report.schema';
import { RabbitService } from 'src/rabbit/rabbit.service';
import { RabbitConfig } from 'src/configs/rabbit.config';

@Module({
  imports:[RabbitConfig,MongooseModule.forFeature([{name:Reports.name,schema:ReportSchema}])],
  controllers: [ReportsController],
  providers: [ReportsService,RabbitService],
})
export class ReportsModule {}
