import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ReportsController } from './reports/reports.controller';
import { ReportsService } from './reports/reports.service';
import { ClientModules } from './microservices/microservices';

@Module({
  imports: [ClientModules],
  controllers: [AppController, ProductsController, ReportsController],
  providers: [AppService, ProductsService, ReportsService],
})
export class AppModule {}
