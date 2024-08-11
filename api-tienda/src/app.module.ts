import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MarketController } from './market/market.controller';
import { MarketService } from './market/market.service';
import { ClientModules } from './microservices/microservices';
import { ReportsController } from './reports/reports.controller';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ReportsService } from './reports/reports.service';
import { DealService } from './deal/deal.service';
import { DealController } from './deal/deal.controller';
import { ReviewsService } from './reviews/reviews.service';
import { ReviewsController } from './reviews/reviews.controller';
import { AuthMiddleware } from './common/middleware/auth.middleware';

@Module({
    imports: [ClientModules],
    controllers: [
        MarketController,
        ReportsController,
        ProductsController,
        DealController,
        ReviewsController,
    ],
    providers: [
        MarketService,
        ReportsService,
        ProductsService,
        DealService,
        ReviewsService,
    ],
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}
