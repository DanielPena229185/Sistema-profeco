import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";

export const RabbitConfig = RabbitMQModule.forRoot(RabbitMQModule,{
    exchanges:[
        {
            name: 'notifier',
            type: 'topic'
        }
    ],
    uri: 'amqp://rabbitmq:5672'
});
