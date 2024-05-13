import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ReportsController } from './reports/reports.controller';
import { ReportsService } from './reports/reports.service';
import { ClientModules } from './microservices/microservices';
import { MarketController } from './market/market.controller';
import { MarketService } from './market/market.service';
import { DealService } from './deal/deal.service';
import { DealController } from './deal/deal.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';

@Module({
  imports: [ClientModules],
  controllers: [AppController, MarketController, ReportsController, ProductsController,DealController, CustomerController],
  providers: [AppService, MarketService, ReportsService, ProductsService,DealService, CustomerService],
})
export class AppModule {}
