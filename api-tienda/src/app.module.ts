import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketController } from './market/market.controller';

@Module({
  imports: [],
  controllers: [AppController, MarketController],
  providers: [AppService],
})
export class AppModule {}
