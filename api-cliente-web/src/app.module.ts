import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketController } from './market/market.controller';
import { MarketService } from './market/market.service';
import { ClientsModule } from '@nestjs/microservices';
import { microservices } from './microservices/microservices';
import { ReportsController } from './reports/reports.controller';
import { ReportsService } from './reports/reports.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [ClientsModule.register(microservices)],
  controllers: [AppController, MarketController, ReportsController, ProductsController],
  providers: [AppService, MarketService, ReportsService, ProductsService],
})
export class AppModule {}
