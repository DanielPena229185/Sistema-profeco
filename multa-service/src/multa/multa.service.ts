import { Injectable } from '@nestjs/common';
import { Multa } from './schemas/multa.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RecievedReport } from 'src/recieved-reports/schemas/recieved-report.schema';
import { MultaDTO, RecievedReportList } from './types';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class MultaService {
    constructor(
        @InjectModel(Multa.name) private multaModel:Model<Multa>,
        private readonly amqpConnection:AmqpConnection,
    ){}

    async createMulta(idMarket:string,reportsList):Promise<string>{

        const reports:RecievedReportList[]= reportsList;
        const multa:MultaDTO ={
            idMarket:idMarket,
            reports:[
                reports[0].report,
                reports[1].report,
                reports[2].report
            ]
        }
        const createdMulta = new this.multaModel(multa);
        const savedMulta:MultaDTO = await createdMulta.save();
        this.sendMultaRabbit(multa);
        return savedMulta.id;
    }

    async sendMultaRabbit(multa:MultaDTO){
        await this.amqpConnection.publish('notifier','multas-route',multa);
        console.log(`Message published ${multa}`);

    }
}
