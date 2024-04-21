import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketController } from './market/market.controller';
import { MarketService } from './market/market.service';
import { ClientsModule } from '@nestjs/microservices';
import { microservices } from './microservices/microservices';

@Module({
  imports: [ClientsModule.register(microservices)],
  controllers: [AppController, MarketController],
  providers: [AppService, MarketService],
})
export class AppModule {}
