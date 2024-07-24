import { setupRabbitMQ } from '../../../../config/rabbitConfig';
import amqp from "amqplib";
import {MysqlShuttleRepository} from "../../repository/mysqlShuttleRepository";

const QUEUE = 'verify_transport_id';

export class VerifyShuttleConsumer {
    private channel: amqp.Channel | null = null;

    constructor(private readonly repository: MysqlShuttleRepository) {}

    async initialize() {
        try {
            this.channel = await setupRabbitMQ(QUEUE);
            this.channel.consume(QUEUE, this.handleMessage.bind(this), { noAck: false });
        } catch (error) {
            console.error('Error initializing VerifyShuttleConsumer:', error);
            throw error;
        }
    }

    private async handleMessage(msg: amqp.ConsumeMessage | null) {
        if (!msg) {
            return;
        }

        const shuttleId = msg.content.toString();
        const exists = await this.repository.getById(shuttleId);

        this.channel?.sendToQueue(msg.properties.replyTo!, Buffer.from(JSON.stringify({ exists })), {
            correlationId: msg.properties.correlationId!,
        });
        this.channel?.ack(msg);
    }

    async close() {
        await this.channel?.close();
    }
}

