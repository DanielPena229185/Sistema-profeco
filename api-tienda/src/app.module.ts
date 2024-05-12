import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketController } from './market/market.controller';
import { MarketService } from './market/market.service';
import { ClientModules } from './microservices/microservices';

@Module({
  imports: [ClientModules],
  controllers: [AppController, MarketController],
  providers: [AppService, MarketService],
})
export class AppModule {}
