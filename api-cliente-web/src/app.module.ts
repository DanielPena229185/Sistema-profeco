import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketController } from './market/market.controller';
import { MarketService } from './market/market.service';
import { ClientsModule } from '@nestjs/microservices';
import { DealController } from './deal/deal.controller';
import { DealService } from './deal/deal.service';
import { ReportsController } from './reports/reports.controller';
import { ReportsService } from './reports/reports.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ClientModules } from './microservices/microservices';

@Module({
  imports: [ClientsModule.register(ClientModules)],
  controllers: [AppController, MarketController, ReportsController, ProductsController,DealController],
  providers: [AppService, MarketService, ReportsService, ProductsService,DealService],
})
export class AppModule {}
