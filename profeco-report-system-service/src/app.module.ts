import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CONNECTION } from './configs/mogo-connection';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    ReportsModule,
    MongooseModule.forRoot(CONNECTION),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
