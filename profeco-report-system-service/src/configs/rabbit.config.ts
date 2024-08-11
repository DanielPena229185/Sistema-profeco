import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";

export const RabbitConfig = RabbitMQModule.forRoot(RabbitMQModule, {
    exchanges: [
        {
            name: 'notifier',
            type: 'topic'
        }
    ],
    // add .dotenv file
    // Ahorita estara configurado para produccion
    // uri: 'amqp://localhost:5672'
    uri: 'amqp://rabbitmq:5672'
});
