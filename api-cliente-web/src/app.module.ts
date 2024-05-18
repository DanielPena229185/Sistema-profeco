import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
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
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { AuthMiddleware } from './common/middleware/auth.middleware';
import { ConfigModule } from '@nestjs/config';
import { DATA } from './utils/persistencia/entidad.dao';
import { ReviewController } from './review/review.controller';
import { ReviewService } from './review/review.service';
import { DataModule } from './data/data.module';
import { MarketDAO } from './utils/persistencia/merket.dao';
import { DealsDAO } from './utils/persistencia/deal.dao';
import { ProductDAO } from './utils/persistencia/products.dao';

ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [ClientsModule.register(ClientModules), DataModule],
  controllers: [
    AppController,
    MarketController,
    ReportsController,
    ProductsController,
    DealController,
    CustomerController,
    ReviewController
  ],
  providers: [
    AppService,
    MarketService,
    ReportsService,
    ProductsService,
    DealService,
    CustomerService,
    ReviewService,
    DATA,
    MarketDAO,
    DealsDAO,
    ProductDAO
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
