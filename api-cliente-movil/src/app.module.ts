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

@Module({
  imports: [ClientModules],
  controllers: [AppController, ProductsController, ReportsController, MarketController],
  providers: [AppService, ProductsService, ReportsService, MarketService],
})
export class AppModule {}
