import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MultaModule } from './multa/multa.module';
import { RecievedReportsModule } from './recieved-reports/recieved-reports.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CONNECTION } from './configs/mogo-connection';

@Module({
  imports: [
    RecievedReportsModule,
    MultaModule,
    MongooseModule.forRoot(CONNECTION),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
