import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketController } from './market/market.controller';
import { MarketService } from './market/market.service';
import { ClientsModule } from '@nestjs/microservices';
import { ClientModules } from './microservices/microservices';
import { DealController } from './deal/deal.controller';
import { DealService } from './deal/deal.service';
import { ReviewController } from './review/review.controller';
import { ReviewService } from './review/review.service';
import { PreferenceService } from './preference/preference.service';
import { PreferenceController } from './preference/preference.controller';

@Module({
  imports: [ClientsModule.register(ClientModules)],
  controllers: [AppController, MarketController, DealController, ReviewController, PreferenceController],
  providers: [AppService, MarketService, DealService, ReviewService, PreferenceService],
})
export class AppModule {}
