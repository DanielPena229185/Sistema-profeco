import { Module } from '@nestjs/common';
import { MultaController } from './multa.controller';
import { MultaService } from './multa.service';
import { Multa, MultaSchema } from './schemas/multa.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RabbitConfig } from 'src/configs/rabbit-multa.config';

@Module({
  imports:[
    RabbitConfig,
    MongooseModule.forFeature([{name:Multa.name,schema:MultaSchema}]),
  ],
  controllers: [MultaController],
  providers: [MultaService],
  exports:[MultaService]
})
export class MultaModule {}
